import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { auth, db } from '../../trainer/firebase';
import LoginForm from '../trainer/LoginForm';
import './TopicStatus.css';

const choices = [
  { value: 'not-started', label: 'Не проходили' },
  { value: 'next', label: 'На наступне заняття' },
  { value: 'discussed', label: 'Обговорювали' }
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
    }, err => { setError('Не вдалося завантажити статуси: ' + err.message); setReady(false); });
  }, [user]);

  const update = async (key, value) => {
    if (!user || !ready) return;
    const previous = statuses;
    setStatuses(s => ({ ...s, [key]: value }));
    try {
      await setDoc(doc(db, 'c1TopicProgress', user.uid), { statuses: { [key]: value } }, { merge: true });
    } catch (err) {
      setStatuses(previous);
      setError('Не вдалося зберегти статус: ' + err.message);
    }
  };
  return { user, statuses, error, ready, update };
}

export function TopicStatusLogin({ progress }) {
  if (progress.user === undefined) return <p className="c1-status-hint">Завантаження профілю…</p>;
  if (!progress.user) return <div className="c1-status-login"><p>Увійди, щоб зберігати статуси тем у своєму акаунті. Список і випадковий вибір доступні без входу.</p><LoginForm /></div>;
  return <div className="c1-status-hint">Статуси зберігаються у твоєму акаунті. {progress.ready ? '✓ Синхронізовано' : 'Завантаження…'}{progress.error && <p role="alert" className="c1-status-error">{progress.error}</p>}</div>;
}

export function TopicStatus({ progress, topicKey }) {
  if (!progress.user) return null;
  const status = progress.statuses[topicKey] || 'not-started';
  return <label className="c1-topic-status">
    <span>Статус:</span>
    <select aria-label="Статус теми" value={status} disabled={!progress.ready} onChange={e => progress.update(topicKey, e.target.value)} className={'c1-topic-status--' + status}>
      {choices.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
    </select>
  </label>;
}
