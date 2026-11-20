import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { auth, db } from '../../trainer/firebase';
import LoginForm from '../trainer/LoginForm';
import './TopicStatus.css';

const choices = [
  { value: 'not-started', label: 'Noch nicht bearbeitet' },
  { value: 'next', label: 'Für die nächste Stunde' },
  { value: 'discussed', label: 'Besprochen' }
];

// A single per-user document stores status for both parts.
export function useC1TopicStatuses() {
  const [user, setUser] = useState(undefined);
  const [statuses, setStatuses] = useState({});
  const [error, setError] = useState('');
  const [ready, setReady] = useState(false);
  useEffect(() => onAuthStateChanged(auth, u => { setUser(u); setReady(false); setStatuses({}); setError(''); }), []);
  useEffect(() => {
    if (!user) return undefined;
    return onSnapshot(doc(db, 'c1TopicProgress', user.uid), snap => {
      setStatuses(snap.exists() ? (snap.data().statuses || {}) : {});
      setReady(true);
      setError('');
    }, err => { setError('Status konnte nicht geladen werden: ' + err.message); setReady(false); });
  }, [user]);

  const update = async (key, value) => {
    if (!user || !ready) return;
    const previous = statuses;
    setStatuses(s => ({ ...s, [key]: value }));
    try {
      await setDoc(doc(db, 'c1TopicProgress', user.uid), { statuses: { [key]: value } }, { merge: true });
    } catch (err) {
      setStatuses(previous);
      setError('Status konnte nicht gespeichert werden: ' + err.message);
    }
  };
  return { user, statuses, error, ready, update };
}

export function TopicStatusLogin({ progress }) {
  if (progress.user === undefined) return <p className="c1-status-hint">Profil wird geladen …</p>;
  if (!progress.user) return <div className="c1-status-login"><p>Melde dich an, um den Bearbeitungsstand zu speichern. Die Themenliste und die Zufallsauswahl sind auch ohne Anmeldung verfügbar.</p><LoginForm /></div>;
  return <div className="c1-status-hint">Dein Bearbeitungsstand wird in deinem Konto gespeichert. {progress.ready ? '✓ Synchronisiert' : 'Wird geladen …'}{progress.error && <p role="alert" className="c1-status-error">{progress.error}</p>}</div>;
}

export function TopicStatus({ progress, topicKey }) {
  if (!progress.user) return null;
  const status = progress.statuses[topicKey] || 'not-started';
  return <label className="c1-topic-status">
    <span>Status:</span>
    <select aria-label="Bearbeitungsstand des Themas" value={status} disabled={!progress.ready} onChange={e => progress.update(topicKey, e.target.value)} className={'c1-topic-status--' + status}>
      {choices.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
    </select>
  </label>;
}
