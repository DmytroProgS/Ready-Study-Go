import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../trainer/firebase';
import LoginForm from '../trainer/LoginForm';
import { duelPacks, getDuelPack } from '../../duel/questions';
import { createRoom, joinRoom, startRoom, submitAnswer, markReady, watchRoom } from '../../duel/duelApi';
import './DeutschDuellPage.css';

function scores(room, questions) {
  const result = Object.fromEntries(Object.keys(room.players).map(uid => [uid, 0]));
  (room.history || []).forEach((round, i) => {
    Object.keys(result).forEach(uid => {
      if (round.answers[uid] === questions[i].correct) result[uid]++;
    });
  });
  return result;
}

export default function DeutschDuellPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);
  const [name, setName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [selectedPack, setSelectedPack] = useState('pack-1');
  const [code, setCode] = useState(() => {
    try { return window.sessionStorage.getItem('deutschDuellRoom') || ''; } catch { return ''; }
  });
  const [confirmExit, setConfirmExit] = useState(false);
  const [room, setRoom] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [solo, setSolo] = useState(null);

  useEffect(() => onAuthStateChanged(auth, setUser), []);
  useEffect(() => {
    try {
      if (code) window.sessionStorage.setItem('deutschDuellRoom', code);
      else window.sessionStorage.removeItem('deutschDuellRoom');
    } catch { /* Browser storage is optional. */ }
  }, [code]);
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
  const pack = getDuelPack(solo?.packId || room?.packId || selectedPack);
  const duelQuestions = pack.questions;
  const uids = room ? Object.keys(room.players) : [];
  const bothAnswered = room && uids.length === 2 && uids.every(uid => room.answers[uid] !== undefined);
  const myAnswer = room && user && room.answers[user.uid];
  const question = room && room.status === 'playing' ? duelQuestions[room.index] : null;
  const score = room && room.status === 'finished' ? scores(room, duelQuestions) : null;
  const soloQuestion = solo && !solo.finished ? duelQuestions[solo.index] : null;
  const choosePack = () => selectedPack === 'random' ? duelPacks[Math.floor(Math.random() * duelPacks.length)].id : selectedPack;
  const startSolo = (packId = choosePack()) => { setSolo({ packId, index: 0, answers: [], finished: false }); setCode(''); setRoom(null); setError(''); };
  const soloNext = () => setSolo(previous => previous && ({ ...previous, index: previous.index + 1, finished: previous.index + 1 >= duelQuestions.length }));
  const soloScore = solo ? solo.answers.filter((answer, i) => answer === duelQuestions[i].correct).length : 0;

  return <main className="duel-page">
    <h1>🎮 Deutsch Duell</h1>
    <p>Набори запитань · 4 варіанти · без таймера · два пристрої</p>
    {solo ? <section className="duel-panel">
      <p className="duel-pack-name">😢 Граю сам · {pack.title}</p>
      {soloQuestion ? <>
        <div className="duel-progress">Питання {solo.index + 1} із {duelQuestions.length}</div>
        <p className="duel-translation">{soloQuestion.uk}</p>
        <h2>{soloQuestion.prompt}</h2>
        <div className="duel-options">{soloQuestion.options.map((option, i) => <button key={i} disabled={solo.answers[solo.index] !== undefined} className={solo.answers[solo.index] !== undefined && i === soloQuestion.correct ? 'correct' : solo.answers[solo.index] === i ? 'chosen' : ''} onClick={() => setSolo(previous => ({ ...previous, answers: [...previous.answers, i] }))}><b>{'ABCD'[i]}.</b> {option}</button>)}</div>
        {solo.answers[solo.index] === undefined ? <p>Обери один варіант відповіді.</p> : <>
          <p className="duel-explanation"><strong>{solo.answers[solo.index] === soloQuestion.correct ? '✅ Правильно!' : 'Правильна відповідь: ' + soloQuestion.options[soloQuestion.correct]}</strong> {soloQuestion.explanation}</p>
          <button onClick={soloNext}>{solo.index + 1 === duelQuestions.length ? 'Переглянути результат →' : 'Далі →'}</button>
        </>}
      </> : <>
        <h2>🏆 Твій результат: {soloScore} / {duelQuestions.length}</h2>
        <div className="duel-review"><h3>📖 Твої відповіді · {duelQuestions.length} речень</h3><ol>{duelQuestions.map((q, i) => {
          const answer = solo.answers[i];
          const isCorrect = answer === q.correct;
          return <li key={i} className={isCorrect ? 'duel-review-correct' : 'duel-review-wrong'}>
            <span className="duel-review-status">{isCorrect ? '✓ Вірно' : '✗ Помилка'}</span>
            <div className="duel-review-uk">{q.uk}</div>
            <div className="duel-review-sentence"><strong>{q.full}</strong></div>
            <div className="duel-review-answer">Твоя відповідь: <strong className={isCorrect ? 'duel-answer-correct' : 'duel-answer-wrong'}>{q.options[answer]}</strong>{!isCorrect && <> · Правильно: <strong className="duel-answer-correct">{q.options[q.correct]}</strong></>}</div>
            <small>{q.explanation}</small>
          </li>;
        })}</ol></div>
        <button onClick={() => startSolo(solo.packId)}>Спробувати ще раз</button>
        <button onClick={() => setSolo(null)}>Обрати інший пакет</button>
      </>}
    </section> : user === undefined ? <p>Перевіряємо авторизацію…</p> : !user ? <>
      <h2>Увійди, щоб грати</h2><LoginForm />
    </> : !code ? <section className="duel-panel">
      <p>Ти увійшов як <strong>{user.email}</strong></p>
      <label>Ім'я в грі<input value={name} maxLength={24} onChange={e => setName(e.target.value)} placeholder="Твоє ім'я" /></label>
      <label>Набір запитань
        <select className="duel-pack-select" value={selectedPack} onChange={e => setSelectedPack(e.target.value)}>
          {duelPacks.map(p => <option key={p.id} value={p.id}>{p.title} · {p.questions.length} запитань</option>)}
          <option value="random">🎲 Випадковий вибір пакета</option>
        </select>
      </label>
      <button disabled={busy} onClick={() => act(async () => { setCode(await createRoom(user, displayName(), choosePack())); })}>Створити кімнату</button>
      <button type="button" className="duel-solo-button" onClick={() => startSolo()}>Грати самому 😢</button>
      <div className="duel-divider">або приєднатися</div>
      <label>Код кімнати<input value={joinCode} maxLength={6} onChange={e => setJoinCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))} placeholder="6 символів" /></label>
      <button disabled={busy || joinCode.length !== 6} onClick={() => act(async () => { await joinRoom(joinCode, user, displayName()); setCode(joinCode); })}>Приєднатися</button>
    </section> : !room ? <p>Підключення до кімнати {code}…</p> : <>
      <section className="duel-panel">
        <div className="duel-room-code">Кімната <strong>{code}</strong> <button onClick={() => navigator.clipboard.writeText(code)}>Копіювати код</button></div>
        <p className="duel-pack-name">📚 {pack.title}</p>
        <div className="duel-players">{uids.map(uid => <span key={uid}>{uid === user.uid ? '🟢' : '👤'} {room.players[uid]}</span>)}</div>
        {room.status === 'lobby' && <>
          <p>{uids.length < 2 ? 'Очікуємо другого гравця. Передай йому код кімнати.' : 'Обидва гравці на місці!'}</p>
          {room.host === user.uid ? <button disabled={busy || uids.length !== 2} onClick={() => act(() => startRoom(code, user))}>Почати гру</button> : <p>Очікуємо, поки організатор почне гру…</p>}
          {uids.length === 1 && room.host === user.uid && <button type="button" className="duel-solo-button" onClick={() => startSolo(room.packId)}>Грати самому 😢</button>}
        </>}
        {question && <>
          <div className="duel-progress">Питання {room.index + 1} із {duelQuestions.length}</div>
          <p className="duel-translation">{question.uk}</p>
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
          <div className="duel-review">
            <h3>📖 Твої відповіді · {duelQuestions.length} речень</h3>
            <p className="duel-review-subtitle">Персональний розбір для {room.players[user.uid] || 'гравця'}</p>
            <ol>{duelQuestions.map((q, i) => {
              const answer = room.history?.[i]?.answers?.[user.uid];
              const isCorrect = answer === q.correct;
              const chosen = Number.isInteger(answer) ? q.options[answer] : 'немає відповіді';
              return <li key={i} className={isCorrect ? 'duel-review-correct' : 'duel-review-wrong'}>
                <span className="duel-review-status">{isCorrect ? '✓ Вірно' : '✗ Помилка'}</span>
                <div className="duel-review-uk">{q.uk}</div>
                <div className="duel-review-sentence"><strong>{q.full}</strong></div>
                <div className="duel-review-answer">{isCorrect
                  ? <>Твоя відповідь: <strong className="duel-answer-correct">{chosen}</strong></>
                  : <>Твоя відповідь: <strong className="duel-answer-wrong">{chosen}</strong> · Правильно: <strong className="duel-answer-correct">{q.options[q.correct]}</strong></>}</div>
                <small>{q.explanation}</small>
              </li>;
            })}</ol>
          </div>
          <button onClick={() => { setCode(''); setRoom(null); }}>Нова кімната</button>
        </>}
      </section>
    </>}
    {error && <p role="alert" className="duel-error">{error}</p>}
    <button type="button" className="duel-back-button" onClick={() => {
      if ((solo && !solo.finished) || (code && room?.status !== 'finished')) setConfirmExit(true);
      else { setCode(''); setSolo(null); navigate('/'); }
    }}>← На головну</button>
    {confirmExit && <div className="duel-exit-overlay" role="presentation">
      <div className="duel-exit-dialog" role="dialog" aria-modal="true" aria-labelledby="duel-exit-title">
        <h2 id="duel-exit-title">Завершити гру?</h2>
        <p>{solo ? 'Поточний прогрес одиночного тренування буде втрачено.' : 'Якщо вийдеш, гра для другого учасника продовжиться. Ти зможеш повернутися до кімнати з цього браузера.'}</p>
        <div className="duel-exit-actions">
          <button type="button" className="duel-exit-cancel" onClick={() => setConfirmExit(false)}>Ні, повернутися в гру</button>
          <button type="button" className="duel-exit-confirm" onClick={() => { setConfirmExit(false); setSolo(null); navigate('/'); }}>Так, вийти</button>
        </div>
      </div>
    </div>}
  </main>;
}
