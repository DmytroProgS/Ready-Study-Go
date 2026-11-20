import {
  collection, doc, limit, onSnapshot, orderBy, query,
  runTransaction, serverTimestamp, Timestamp, where
} from 'firebase/firestore';
import { db } from '../trainer/firebase';
import { getDuelPack, shuffledQuestionOrder } from './questions';

const refFor = code => doc(db, 'duelRooms', code);
const invitationRef = code => doc(db, 'duelInvitations', code);
const invitationLifetime = 30 * 60 * 1000;
const codeChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const makeCode = () => Array.from({ length: 6 }, () => codeChars[Math.floor(Math.random() * codeChars.length)]).join('');

export function watchRoom(code, callback, onError) {
  return onSnapshot(refFor(code), snap => callback(snap.exists() ? snap.data() : null), onError);
}

export function watchInvitations(user, callback, onError) {
  const recentInvitations = query(
    collection(db, 'duelInvitations'),
    where('createdAt', '>', Timestamp.fromMillis(Date.now() - invitationLifetime)),
    orderBy('createdAt', 'desc'),
    limit(10)
  );
  let invitations = [];
  let expiryTimer;

  const publish = () => {
    clearTimeout(expiryTimer);
    const now = Date.now();
    invitations = invitations.filter(invitation => invitation.expiresAt > now);
    callback(invitations);
    if (invitations.length) {
      const nextExpiry = Math.min(...invitations.map(invitation => invitation.expiresAt));
      expiryTimer = setTimeout(publish, nextExpiry - now);
    }
  };

  const unsubscribe = onSnapshot(recentInvitations, snapshot => {
    invitations = snapshot.docs.flatMap(invitation => {
      const { host, createdAt } = invitation.data();
      if (host === user.uid || !createdAt) return [];
      return [{ code: invitation.id, expiresAt: createdAt.toMillis() + invitationLifetime }];
    });
    publish();
  }, onError);

  return () => {
    clearTimeout(expiryTimer);
    unsubscribe();
  };
}

export function withdrawInvitation(code, { requireWaiting = false } = {}) {
  return runTransaction(db, async tx => {
    if (requireWaiting) {
      const room = await tx.get(refFor(code));
      if (room.exists() && Object.keys(room.data().players).length > 1) {
        throw new Error('Die zweite Person ist bereits beigetreten.');
      }
    }
    const ref = invitationRef(code);
    if ((await tx.get(ref)).exists()) tx.delete(ref);
  });
}

export async function createRoom(user, name, packId) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const code = makeCode();
    const roomRef = refFor(code);
    try {
      await runTransaction(db, async tx => {
        const existing = await tx.get(roomRef);
        if (existing.exists()) throw new Error('CODE_TAKEN');
        tx.set(roomRef, {
          host: user.uid, players: { [user.uid]: name }, packId,
          status: 'lobby', index: 0, answers: {}, ready: {},
          createdAt: serverTimestamp()
        });
        tx.set(invitationRef(code), { host: user.uid, createdAt: serverTimestamp() });
      });
      return code;
    } catch (error) {
      if (error.message !== 'CODE_TAKEN') throw error;
    }
  }
  throw new Error('Der Raumcode konnte nicht erstellt werden.');
}

export async function joinRoom(code, user, name, { fromInvitation = false } = {}) {
  await runTransaction(db, async tx => {
    const roomRef = refFor(code);
    const snap = await tx.get(roomRef);
    if (!snap.exists()) throw new Error('Der Raum wurde nicht gefunden.');
    const room = snap.data();
    if (room.players[user.uid]) return;
    if (room.status !== 'lobby') throw new Error('Das Spiel hat schon begonnen.');
    if (Object.keys(room.players).length >= 2) throw new Error('Der Raum ist bereits voll.');
    const inviteRef = invitationRef(code);
    const invitation = await tx.get(inviteRef);
    if (fromInvitation && (!invitation.exists() ||
      invitation.data().createdAt.toMillis() + invitationLifetime <= Date.now())) {
      throw new Error('Diese Einladung ist nicht mehr gültig.');
    }
    tx.update(roomRef, { players: { ...room.players, [user.uid]: name } });
    if (invitation.exists()) tx.delete(inviteRef);
  });
}

export async function startRoom(code, user) {
  await runTransaction(db, async tx => {
    const r = refFor(code), s = await tx.get(r);
    if (!s.exists()) throw new Error('Der Raum wurde nicht gefunden.');
    const room = s.data();
    if (room.host !== user.uid || room.status !== 'lobby' || Object.keys(room.players).length !== 2) throw new Error('Zum Starten braucht ihr zwei Personen.');
    const inviteRef = invitationRef(code);
    const invitation = await tx.get(inviteRef);
    tx.update(r, { status: 'playing', index: 0, answers: {}, ready: {}, history: [], questionOrder: shuffledQuestionOrder(getDuelPack(room.packId).questions.length) });
    if (invitation.exists()) tx.delete(inviteRef);
  });
}

export async function submitAnswer(code, user, index, answer) {
  await runTransaction(db, async tx => {
    const r = refFor(code), s = await tx.get(r);
    if (!s.exists()) throw new Error('Der Raum wurde nicht gefunden.');
    const room = s.data();
    if (!room.players[user.uid] || room.status !== 'playing' || room.index !== index) throw new Error('Die nächste Frage ist bereits aktiv.');
    if (!Number.isInteger(answer) || answer < 0 || answer > 3) throw new Error('Ungültige Antwortoption.');
    if (room.answers[user.uid] !== undefined) return;
    tx.update(r, { answers: { ...room.answers, [user.uid]: answer } });
  });
}

export async function markReady(code, user, index, total) {
  await runTransaction(db, async tx => {
    const r = refFor(code), s = await tx.get(r);
    if (!s.exists()) throw new Error('Der Raum wurde nicht gefunden.');
    const room = s.data(), uids = Object.keys(room.players);
    if (!room.players[user.uid] || room.status !== 'playing' || room.index !== index || uids.length !== 2 || uids.some(uid => room.answers[uid] === undefined)) throw new Error('Wir warten auf beide Antworten.');
    const ready = { ...room.ready, [user.uid]: true };
    if (uids.every(uid => ready[uid])) {
      const history = [...(room.history || []), { answers: room.answers }];
      tx.update(r, { history, index: index + 1, status: index + 1 >= total ? 'finished' : 'playing', answers: {}, ready: {} });
    } else tx.update(r, { ready });
  });
}
