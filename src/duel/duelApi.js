import { doc, onSnapshot, runTransaction, serverTimestamp } from 'firebase/firestore';
import { db } from '../trainer/firebase';

const refFor = code => doc(db, 'duelRooms', code);
const codeChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const makeCode = () => Array.from({ length: 6 }, () => codeChars[Math.floor(Math.random() * codeChars.length)]).join('');

export function watchRoom(code, callback, onError) {
  return onSnapshot(refFor(code), snap => callback(snap.exists() ? snap.data() : null), onError);
}

export async function createRoom(user, name) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const code = makeCode();
    const roomRef = refFor(code);
    try {
      await runTransaction(db, async tx => {
        const existing = await tx.get(roomRef);
        if (existing.exists()) throw new Error('CODE_TAKEN');
        tx.set(roomRef, {
          host: user.uid, players: { [user.uid]: name },
          status: 'lobby', index: 0, answers: {}, ready: {},
          createdAt: serverTimestamp()
        });
      });
      return code;
    } catch (error) {
      if (error.message !== 'CODE_TAKEN') throw error;
    }
  }
  throw new Error('Не вдалося створити код кімнати.');
}

export async function joinRoom(code, user, name) {
  await runTransaction(db, async tx => {
    const roomRef = refFor(code);
    const snap = await tx.get(roomRef);
    if (!snap.exists()) throw new Error('Кімнату не знайдено.');
    const room = snap.data();
    if (room.status !== 'lobby' && !room.players[user.uid]) throw new Error('Гра вже почалася.');
    if (!room.players[user.uid] && Object.keys(room.players).length >= 2) throw new Error('У кімнаті вже два гравці.');
    tx.update(roomRef, { players: { ...room.players, [user.uid]: name } });
  });
}

export async function startRoom(code, user) {
  await runTransaction(db, async tx => {
    const r = refFor(code), s = await tx.get(r);
    if (!s.exists()) throw new Error('Кімнату не знайдено.');
    const room = s.data();
    if (room.host !== user.uid || room.status !== 'lobby' || Object.keys(room.players).length !== 2) throw new Error('Потрібно два гравці.');
    tx.update(r, { status: 'playing', index: 0, answers: {}, ready: {} });
  });
}

export async function submitAnswer(code, user, index, answer) {
  await runTransaction(db, async tx => {
    const r = refFor(code), s = await tx.get(r);
    if (!s.exists()) throw new Error('Кімнату не знайдено.');
    const room = s.data();
    if (!room.players[user.uid] || room.status !== 'playing' || room.index !== index) throw new Error('Питання вже змінилося.');
    if (room.answers[user.uid] !== undefined) return;
    tx.update(r, { answers: { ...room.answers, [user.uid]: answer } });
  });
}

export async function markReady(code, user, index, total) {
  await runTransaction(db, async tx => {
    const r = refFor(code), s = await tx.get(r);
    if (!s.exists()) throw new Error('Кімнату не знайдено.');
    const room = s.data(), uids = Object.keys(room.players);
    if (!room.players[user.uid] || room.status !== 'playing' || room.index !== index || uids.some(uid => room.answers[uid] === undefined)) throw new Error('Очікуємо відповіді обох гравців.');
    const ready = { ...room.ready, [user.uid]: true };
    if (uids.every(uid => ready[uid])) {
      const history = [...(room.history || []), { answers: room.answers }];
      tx.update(r, { history, index: index + 1, status: index + 1 >= total ? 'finished' : 'playing', answers: {}, ready: {} });
    } else tx.update(r, { ready });
  });
}
