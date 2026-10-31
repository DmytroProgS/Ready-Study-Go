import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../trainer/firebase';
import LoginForm from '../trainer/LoginForm';
import { duelQuestions } from '../../duel/questions';
import { createRoom, joinRoom, startRoom, submitAnswer, markReady, watchRoom } from '../../duel/duelApi';
import './DeutschDuellPage.css';

function scores(room) {
  const result = Object.fromEntries(Object.keys(room.players).map(uid => [uid, 0]));
  (room.history || []).forEach((round, i) => {
    Object.keys(result).forEach(uid => {
      if (round.answers[uid] === duelQuestions[i].correct) result[uid]++;
    });
  });
  return result;
}

export default function DeutschDuellPage() {
  const [user, setUser] = useState(undefined);
  const [name, setName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [code, setCode] = useState('');
  const [room, setRoom] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => onAuthStateChanged(auth, setUser), []);
  useEffect(() => {
    if (!code) return undefined;
    return watchRoom(code, setRoom, e => setError('Помилка синхронізації: ' + e.message));
  }, [code]);

  const act = async fn => {
    setError(''); setBusy(true);
    try { await fn(); } catch (e) { setError(e.message || 'Сталася помилка.'); }
    finally { setBusy(false); }
  };
  const displayName = () => name.trim() || (user.email || 'Гравець').split('@')[0];
  const uids = room ? Object.keys(room.players) : [];
  const bothAnswered = room && uids.length === 2 && uids.every(uid => room.answers[uid] !== undefined);
  const myAnswer = room && user && room.answers[user.uid];
  const question = room && room.status === 'playing' ? duelQuestions[room.index] : null;
  const score = room && room.status === 'finished' ? scores(room) : null;

  return <main className="duel-page">
    <h1>🎮 Deutsch Duell</h1>
    <p>20 запитань · 4 варіанти · без таймера · два пристрої</p>
    {user === undefined ? <p>Перевіряємо авторизацію…</p> : !user ? <>
      <h2>Увійди, щоб грати</h2><LoginForm />
    </> : !code ? <section className="duel-panel">
      <p>Ти увійшов як <strong>{user.email}</strong></p>
      <label>Ім'я в грі<input value={name} maxLength={24} onChange={e => setName(e.target.value)} placeholder="Твоє ім'я" /></label>
      <button disabled={busy} onClick={() => act(async () => setCode(await createRoom(user, displayName())))}>Створити кімнату</button>
      <div className="duel-divider">або приєднатися</div>
      <label>Код кімнати<input value={joinCode} maxLength={6} onChange={e => setJoinCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))} placeholder="6 символів" /></label>
      <button disabled={busy || joinCode.length !== 6} onClick={() => act(async () => { await joinRoom(joinCode, user, displayName()); setCode(joinCode); })}>Приєднатися</button>
    </section> : !room ? <p>Підключення до кімнати {code}…</p> : <>
      <section className="duel-panel">
        <div className="duel-room-code">Кімната <strong>{code}</strong> <button onClick={() => navigator.clipboard.writeText(code)}>Копіювати код</button></div>
        <div className="duel-players">{uids.map(uid => <span key={uid}>{uid === user.uid ? '🟢' : '👤'} {room.players[uid]}</span>)}</div>
        {room.status === 'lobby' && <>
          <p>{uids.length < 2 ? 'Очікуємо другого гравця. Передай йому код кімнати.' : 'Обидва гравці на місці!'}</p>
          {room.host === user.uid ? <button disabled={busy || uids.length !== 2} onClick={() => act(() => startRoom(code, user))}>Почати гру</button> : <p>Очікуємо, поки організатор почне гру…</p>}
        </>}
        {question && <>
          <div className="duel-progress">Питання {room.index + 1} із {duelQuestions.length}</div>
          <h2>{question.prompt}</h2>
          <div className="duel-options">{question.options.map((option, i) => <button key={i} disabled={busy || myAnswer !== undefined || bothAnswered} className={bothAnswered && i === question.correct ? 'correct' : myAnswer === i ? 'chosen' : ''} onClick={() => act(() => submitAnswer(code, user, room.index, i))}><b>{'ABCD'[i]}.</b> {option}</button>)}</div>
          {myAnswer === undefined ? <p>Обери один варіант відповіді.</p> : !bothAnswered ? <p>Відповідь збережено. Очікуємо другого гравця…</p> : <>
            <p className="duel-explanation"><strong>{myAnswer === question.correct ? '✅ Правильно!' : 'Правильна відповідь: ' + question.options[question.correct]}</strong> {question.explanation}</p>
            <p>{uids.map(uid => room.players[uid] + ': ' + (room.answers[uid] === question.correct ? '✓' : '✗')).join(' · ')}</p>
            <button disabled={busy || !!room.ready[user.uid]} onClick={() => act(() => markReady(code, user, room.index, duelQuestions.length))}>{room.ready[user.uid] ? 'Очікуємо другого гравця…' : 'Далі →'}</button>
          </>}
        </>}
        {room.status === 'finished' && <>
          <h2>🏆 Результати</h2>
          {uids.map(uid => <p key={uid}><strong>{room.players[uid]}</strong>: {score[uid]} / {duelQuestions.length}</p>)}
          <p>{score[uids[0]] === score[uids[1]] ? 'Нічия!' : 'Переможець: ' + room.players[score[uids[0]] > score[uids[1]] ? uids[0] : uids[1]]}</p>
          <button onClick={() => { setCode(''); setRoom(null); }}>Нова кімната</button>
        </>}
      </section>
    </>}
    {error && <p role="alert" className="duel-error">{error}</p>}
    <Link to="/" className="back-link">← На головну</Link>
  </main>;
}
