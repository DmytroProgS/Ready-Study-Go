import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../trainer/firebase';
import LoginForm from '../trainer/LoginForm';
import { PageNavigation } from '../../components/PageNavigation';
import { duelPacks, getDuelPack, shuffledQuestionOrder, questionsInOrder } from '../../duel/questions';
import {
  createRoom, joinRoom, startRoom, submitAnswer, markReady,
  watchInvitations, watchRoom, withdrawInvitation
} from '../../duel/duelApi';
import './DeutschDuellPage.css';

function AnswerFeedback({ question, isCorrect }) {
  return <p className="duel-explanation" role="status">
    <strong>{isCorrect ? '✅ Richtig!' : '❌ Falsch. Richtige Antwort: ' + question.options[question.correct]}</strong>
    {' '}{question.explanation}
  </p>;
}

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
  const { state } = useLocation();
  const backTo = state?.fromSelfStudy ? '/self-study' : '/';
  const [user, setUser] = useState(undefined);
  const [name, setName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [selectedPack, setSelectedPack] = useState('pack-1');
  const [code, setCode] = useState(() => {
    try { return window.sessionStorage.getItem('deutschDuellRoom') || ''; } catch { return ''; }
  });
  const [confirmExit, setConfirmExit] = useState(null);
  const [room, setRoom] = useState(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [solo, setSolo] = useState(null);
  const [invitations, setInvitations] = useState([]);
  const [invitationsUnavailable, setInvitationsUnavailable] = useState(false);
  const soloActive = Boolean(solo);

  useEffect(() => onAuthStateChanged(auth, setUser), []);
  useEffect(() => {
    try {
      if (code) window.sessionStorage.setItem('deutschDuellRoom', code);
      else window.sessionStorage.removeItem('deutschDuellRoom');
    } catch { /* Browser storage is optional. */ }
  }, [code]);
  useEffect(() => {
    if (!code) return undefined;
    return watchRoom(code, setRoom, e => setError('Fehler bei der Synchronisierung: ' + e.message));
  }, [code]);
  useEffect(() => {
    setInvitations([]);
    setInvitationsUnavailable(false);
    if (!user || code || soloActive) return undefined;
    return watchInvitations(user, setInvitations, () => {
      setInvitations([]);
      setInvitationsUnavailable(true);
    });
  }, [user, code, soloActive]);

  const act = async fn => {
    setError(''); setBusy(true);
    try { await fn(); } catch (e) { setError(e.message || 'Ein Fehler ist aufgetreten.'); }
    finally { setBusy(false); }
  };
  const displayName = () => (name.trim() || (user.email || 'Spieler').split('@')[0]).slice(0, 24);
  const enterRoom = (roomCode, fromInvitation = false) => act(async () => {
    await joinRoom(roomCode, user, displayName(), { fromInvitation });
    setJoinCode('');
    setCode(roomCode);
  });
  const pack = getDuelPack(solo?.packId || room?.packId || selectedPack);
  const duelQuestions = questionsInOrder(pack, solo?.questionOrder || room?.questionOrder);
  const uids = room ? Object.keys(room.players) : [];
  const hostingOpenLobby = room?.status === 'lobby' && room.host === user?.uid && uids.length === 1;
  const bothAnswered = room && uids.length === 2 && uids.every(uid => room.answers[uid] !== undefined);
  const myAnswer = room && user && room.answers[user.uid];
  const question = room && room.status === 'playing' ? duelQuestions[room.index] : null;
  const score = room && room.status === 'finished' ? scores(room, duelQuestions) : null;
  const soloQuestion = solo && !solo.finished ? duelQuestions[solo.index] : null;
  const choosePack = () => selectedPack === 'random' ? duelPacks[Math.floor(Math.random() * duelPacks.length)].id : selectedPack;
  const startSolo = (packId = choosePack()) => {
    setSolo({ packId, questionOrder: shuffledQuestionOrder(getDuelPack(packId).questions.length), index: 0, answers: [], finished: false });
    setCode('');
    setRoom(null);
    setError('');
    window.scrollTo(0, 0);
  };
  const soloNext = () => setSolo(previous => previous && ({ ...previous, index: previous.index + 1, finished: previous.index + 1 >= duelQuestions.length }));
  const soloScore = solo ? solo.answers.filter((answer, i) => answer === duelQuestions[i].correct).length : 0;
  const finished = solo?.finished || room?.status === 'finished';

  const returnToSelection = () => {
    setCode('');
    setRoom(null);
    setSolo(null);
    setError('');
    window.scrollTo(0, 0);
  };
  const leave = destination => {
    if ((solo || code) && !finished) {
      setError('');
      setConfirmExit(destination);
    } else if (destination === 'selection') {
      returnToSelection();
    } else {
      setCode('');
      setSolo(null);
      navigate('/');
    }
  };

  return <main className="duel-page">
    <PageNavigation backTo={backTo} onBack={solo || code ? () => leave('selection') : undefined}
      onHome={() => leave('home')} disabled={busy}>
      {finished && <button type="button" onClick={returnToSelection}>Anderes Set wählen</button>}
    </PageNavigation>
    <h1>🎮 Deutsch Duell</h1>
    <p>Fragensets · 2 oder 4 Antwortmöglichkeiten · ohne Zeitlimit · zwei Geräte</p>
    {solo ? <section className="duel-panel">
      <p className="duel-pack-name">😢 Einzelspiel · {pack.title}</p>
      {soloQuestion ? <>
        <div className="duel-progress">Frage {solo.index + 1} von {duelQuestions.length}</div>
        <h2>{soloQuestion.prompt}</h2>
        <div className="duel-options">{soloQuestion.options.map((option, i) => <button key={i} disabled={solo.answers[solo.index] !== undefined} className={solo.answers[solo.index] !== undefined && i === soloQuestion.correct ? 'correct' : solo.answers[solo.index] === i ? 'chosen' : ''} onClick={() => setSolo(previous => ({ ...previous, answers: [...previous.answers, i] }))}><b>{'ABCD'[i]}.</b> {option}</button>)}</div>
        {solo.answers[solo.index] === undefined ? <p>Wähle eine Antwort.</p> : <>
          <p className="duel-translation">{soloQuestion.uk}</p>
          <AnswerFeedback question={soloQuestion} isCorrect={solo.answers[solo.index] === soloQuestion.correct} />
          <button onClick={soloNext}>{solo.index + 1 === duelQuestions.length ? 'Ergebnis ansehen →' : 'Weiter →'}</button>
        </>}
      </> : <>
        <h2>🏆 Dein Ergebnis: {soloScore} / {duelQuestions.length}</h2>
        <div className="duel-review"><h3>📖 Deine Antworten · {duelQuestions.length} Sätze</h3><ol>{duelQuestions.map((q, i) => {
          const answer = solo.answers[i];
          const isCorrect = answer === q.correct;
          return <li key={i} className={isCorrect ? 'duel-review-correct' : 'duel-review-wrong'}>
            <span className="duel-review-status">{isCorrect ? '✓ Richtig' : '✗ Falsch'}</span>
            <div className="duel-review-uk">{q.uk}</div>
            <div className="duel-review-sentence"><strong>{q.full}</strong></div>
            <div className="duel-review-answer">Deine Antwort: <strong className={isCorrect ? 'duel-answer-correct' : 'duel-answer-wrong'}>{q.options[answer]}</strong>{!isCorrect && <> · Richtig: <strong className="duel-answer-correct">{q.options[q.correct]}</strong></>}</div>
            <small>{q.explanation}</small>
          </li>;
        })}</ol></div>
        <button onClick={() => startSolo(solo.packId)}>Erneut versuchen</button>
        <button onClick={returnToSelection}>Anderes Set wählen</button>
      </>}
    </section> : user === undefined ? <p>Anmeldung wird geprüft …</p> : !user ? <>
      <h2>Melde dich an, um zu spielen</h2><LoginForm />
    </> : !code ? <section className="duel-panel">
      <p>Du bist angemeldet als <strong>{user.email}</strong></p>
      <label>Spielname<input value={name} maxLength={24} onChange={e => setName(e.target.value)} placeholder="Dein Name" /></label>
      <label>Fragenset
        <select className="duel-pack-select" value={selectedPack} onChange={e => setSelectedPack(e.target.value)}>
          {duelPacks.map(p => <option key={p.id} value={p.id}>{p.title} · {p.questions.length} Fragen</option>)}
          <option value="random">🎲 Zufälliges Set</option>
        </select>
      </label>
      <button disabled={busy} onClick={() => act(async () => { setCode(await createRoom(user, displayName(), choosePack())); })}>Raum erstellen</button>
      <button type="button" className="duel-solo-button" disabled={busy} onClick={() => startSolo()}>Allein spielen 😢</button>
      <div className="duel-divider">oder beitreten</div>
      <div aria-live="polite">
        {invitations.map(({ code: roomCode }) => <div className="duel-invitation" key={roomCode}>
          <div><strong>Ein Spiel ist bereit. Tritt bei!</strong><span>Raum {roomCode}</span></div>
          <button type="button" disabled={busy} aria-label={'Raum betreten: ' + roomCode} onClick={() => enterRoom(roomCode, true)}>Beitreten</button>
        </div>)}
        {invitationsUnavailable && <p>Einladungen sind gerade nicht verfügbar. Versuche, mit dem Raumcode beizutreten.</p>}
      </div>
      <label>Raumcode<input value={joinCode} maxLength={6} onChange={e => setJoinCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))} placeholder="6 Zeichen" /></label>
      <button disabled={busy || joinCode.length !== 6} onClick={() => enterRoom(joinCode)}>Beitreten</button>
    </section> : !room ? <p>Verbinde mit Raum {code}…</p> : <>
      <section className="duel-panel">
        <div className="duel-room-code">Raum <strong>{code}</strong> <button onClick={() => navigator.clipboard.writeText(code)}>Code kopieren</button></div>
        <p className="duel-pack-name">📚 {pack.title}</p>
        <div className="duel-players">{uids.map(uid => <span key={uid}>{uid === user.uid ? '🟢' : '👤'} {room.players[uid]}</span>)}</div>
        {room.status === 'lobby' && <>
          <p>{uids.length < 2 ? 'Wir warten auf die zweite Person. Sie kann über die Einladung in Deutsch Duell oder mit dem Raumcode beitreten.' : 'Ihr seid beide bereit!'}</p>
          {room.host === user.uid ? <button disabled={busy || uids.length !== 2} onClick={() => act(() => startRoom(code, user))}>Spiel starten</button> : <p>Wir warten, bis das Spiel gestartet wird …</p>}
          {hostingOpenLobby && <button type="button" className="duel-solo-button" disabled={busy} onClick={() => act(async () => {
            await withdrawInvitation(code, { requireWaiting: true });
            startSolo(room.packId);
          })}>Allein spielen 😢</button>}
        </>}
        {question && <>
          <div className="duel-progress">Frage {room.index + 1} von {duelQuestions.length}</div>
          <h2>{question.prompt}</h2>
          <div className="duel-options">{question.options.map((option, i) => <button key={i} disabled={busy || myAnswer !== undefined || bothAnswered} className={myAnswer !== undefined && i === question.correct ? 'correct' : myAnswer === i ? 'chosen' : ''} onClick={() => act(() => submitAnswer(code, user, room.index, i))}><b>{'ABCD'[i]}.</b> {option}</button>)}</div>
          {myAnswer === undefined ? <p>Wähle eine Antwort.</p> : <>
            <p className="duel-translation">{question.uk}</p>
            <AnswerFeedback question={question} isCorrect={myAnswer === question.correct} />
            {bothAnswered ? <>
              <p>{uids.map(uid => room.players[uid] + ': ' + (room.answers[uid] === question.correct ? '✓' : '✗')).join(' · ')}</p>
              <button disabled={busy || !!room.ready[user.uid]} onClick={() => act(() => markReady(code, user, room.index, duelQuestions.length))}>{room.ready[user.uid] ? 'Wir warten auf die zweite Person …' : 'Weiter →'}</button>
            </> : <p>Deine Antwort ist gespeichert. Sobald die zweite Person geantwortet hat, geht es weiter …</p>}
          </>}
        </>}
        {room.status === 'finished' && <>
          <h2>🏆 Ergebnisse</h2>
          {uids.map(uid => <p key={uid}><strong>{room.players[uid]}</strong>: {score[uid]} / {duelQuestions.length}</p>)}
          <p>{score[uids[0]] === score[uids[1]] ? 'Unentschieden!' : 'Gewonnen hat: ' + room.players[score[uids[0]] > score[uids[1]] ? uids[0] : uids[1]]}</p>
          <div className="duel-review">
            <h3>📖 Deine Antworten · {duelQuestions.length} Sätze</h3>
            <p className="duel-review-subtitle">Antwortübersicht für {room.players[user.uid] || 'dich'}</p>
            <ol>{duelQuestions.map((q, i) => {
              const answer = room.history?.[i]?.answers?.[user.uid];
              const isCorrect = answer === q.correct;
              const chosen = Number.isInteger(answer) ? q.options[answer] : 'keine Antwort';
              return <li key={i} className={isCorrect ? 'duel-review-correct' : 'duel-review-wrong'}>
                <span className="duel-review-status">{isCorrect ? '✓ Richtig' : '✗ Falsch'}</span>
                <div className="duel-review-uk">{q.uk}</div>
                <div className="duel-review-sentence"><strong>{q.full}</strong></div>
                <div className="duel-review-answer">{isCorrect
                  ? <>Deine Antwort: <strong className="duel-answer-correct">{chosen}</strong></>
                  : <>Deine Antwort: <strong className="duel-answer-wrong">{chosen}</strong> · Richtig: <strong className="duel-answer-correct">{q.options[q.correct]}</strong></>}</div>
                <small>{q.explanation}</small>
              </li>;
            })}</ol>
          </div>
          <button onClick={returnToSelection}>Neuer Raum</button>
        </>}
      </section>
    </>}
    {error && !confirmExit && <p role="alert" className="duel-error">{error}</p>}
    <button type="button" className="duel-back-button" disabled={busy} onClick={() => leave('home')}>← Zur Startseite</button>
    {confirmExit && <div className="duel-exit-overlay" role="presentation">
      <div className="duel-exit-dialog" role="dialog" aria-modal="true" aria-labelledby="duel-exit-title">
        <h2 id="duel-exit-title">Spiel verlassen?</h2>
        <p>{solo ? 'Dein Fortschritt in dieser Einzelrunde geht verloren.' : hostingOpenLobby
          ? 'Die Einladung wird zurückgezogen.'
          : 'Für die andere Person läuft das Spiel weiter.'}
          {!solo && confirmExit === 'home' && ' Du kannst mit diesem Browser in den Raum zurückkehren.'}</p>
        {error && <p role="alert" className="duel-error">{error}</p>}
        <div className="duel-exit-actions">
          <button type="button" className="duel-exit-cancel" disabled={busy} onClick={() => setConfirmExit(null)}>Im Spiel bleiben</button>
          <button type="button" className="duel-exit-confirm" disabled={busy} onClick={() => act(async () => {
            if (hostingOpenLobby) await withdrawInvitation(code);
            setConfirmExit(null);
            if (confirmExit === 'selection') returnToSelection();
            else navigate('/');
          })}>Spiel verlassen</button>
        </div>
      </div>
    </div>}
  </main>;
}
