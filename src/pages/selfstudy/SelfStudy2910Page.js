import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { lesson2910Exercises } from '../../data/selfStudy2910Data';
import { lesson2910ExtraExercises } from '../../data/selfStudy2910ExtraData';
import { lesson2910ExtraExercisesMore } from '../../data/selfStudy2910ExtraMore';
import '../homework/Familiengeschichte.css';
import '../homework/HomeworkSet4.css';
import './SelfStudy2910Page.css';

function shuffleCards(cards) {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const allLessonCards = [
  ...lesson2910Exercises.flatMap(exercise => exercise.cards),
  ...lesson2910ExtraExercises.flatMap(exercise => exercise.cards),
  ...lesson2910ExtraExercisesMore.flatMap(exercise => exercise.cards),
];

function MixedPracticeDeck() {
  const [cards, setCards] = useState(() => shuffleCards(allLessonCards));
  const [round, setRound] = useState(0);
  const shuffleAgain = () => { setCards(shuffleCards(allLessonCards)); setRound(n => n + 1); };
  return <div className="lesson2910-mixed">
    <h2>🔀 Alle Beispiele mischen</h2>
    <p>Alle {allLessonCards.length} Sätze aus der Präsentation und dem Vertiefungsmaterial. Jede Karte erscheint einmal pro Durchgang.</p>
    <PracticeDeck key={round} exercise={{ description: 'Gemischtes Training · 4 Übungen', cards }} onRestart={shuffleAgain} />
    <button type="button" className="lesson2910-shuffle-again" onClick={shuffleAgain}>🔀 Neu mischen</button>
  </div>;
}

function PracticeDeck({ exercise, onRestart }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const card = exercise.cards[index];
  const next = () => { setIndex(i => i + 1); setRevealed(false); };
  const restart = () => { if (onRestart) { onRestart(); return; } setIndex(0); setRevealed(false); };
  return <div className="lesson2910-practice">

    <p className="lesson2910-description">{exercise.description}</p>
    {card ? <>
      <div className="lesson2910-counter">Karte {index + 1} von {exercise.cards.length}</div>
      <div className="lesson2910-uk">{card.uk}</div>
      <p className="lesson2910-instruction">Sprich den Satz laut auf Deutsch und zeige dann die Antwort an.</p>
      {revealed && <div className="lesson2910-answer"><strong>{card.de}</strong><div className="lesson2910-tip">💡 {card.tip}</div>{card.explanation && <div className="lesson2910-explanation"><h3>Erklärung</h3>{card.explanation.split("\n").map((line, i) => line ? <p key={i}>{line}</p> : null)}</div>}</div>}
      <div className="lesson2910-actions">
        <button type="button" onClick={() => setRevealed(v => !v)}>{revealed ? 'Antwort ausblenden' : 'Antwort anzeigen'}</button>
        <button type="button" className="lesson2910-secondary" onClick={next}>Weiter →</button>
      </div>
    </> : <div className="lesson2910-finished"><h3>Du hast alle Beispiele bearbeitet!</h3><button type="button" onClick={restart}>{onRestart ? '🔀 Neu mischen' : 'Von vorn beginnen'}</button></div>}
  </div>;
}

const tabs = [{key:'theory',label:'📊 Präsentation (Theorie)'},...lesson2910Exercises.map((_,i)=>({key:'exercise'+i,label:'🗂 Übung '+(i+1)})),{key:'mixed',label:'🔀 Alle Beispiele mischen'}];

export default function SelfStudy2910Page() {
  const [active,setActive] = useState('theory');
  return <div className="cloze-page">
    <h1 className="cloze-page__lesson">Selbststudium am 29.10</h1>
    <nav className="set4-nav" aria-label="Abschnitte der Lerneinheit">
      {tabs.map(t=><button key={t.key} type="button" className={`set4-nav__tab ${active===t.key?'is-active':''}`} onClick={()=>setActive(t.key)}>{t.label}</button>)}
    </nav>
    <section className="set4-exercise lesson2910-section">
      {active==='theory' ? <div className="lesson2910-theory"><h2>Präsentation · Verben mit Präpositionen</h2><p>Du kannst die Originalpräsentation hier lesen oder als PDF separat öffnen.</p><div className="lesson2910-pdf-actions"><a href={process.env.PUBLIC_URL + '/lessons/diieslova-z-pryimennykamy.pdf'} target="_blank" rel="noopener noreferrer">📄 PDF in neuem Tab öffnen</a><a href={process.env.PUBLIC_URL + '/lessons/diieslova-z-pryimennykamy.pdf'} download>⬇ PDF herunterladen</a></div><iframe className="lesson2910-pdf" title="Originalpräsentation: Verben mit Präpositionen" src={process.env.PUBLIC_URL + '/lessons/diieslova-z-pryimennykamy.pdf#toolbar=1'} /></div> : active==='mixed' ? <MixedPracticeDeck/> : <PracticeDeck key={active} exercise={lesson2910Exercises[Number(active.replace('exercise',''))]}/>}
    </section>
    {active.startsWith('exercise') && <section className="lesson2910-extra-section"><h2>Vertiefung</h2><p>Hier findest du zusätzliche Beispiele zur gewählten Übung. Das Kartenset lässt sich unabhängig von der Präsentation bearbeiten.</p><PracticeDeck key={active + '-extra'} exercise={(Number(active.replace('exercise','')) === 0 ? lesson2910ExtraExercises[0] : lesson2910ExtraExercisesMore[Number(active.replace('exercise','')) - 1])}/></section>}
    <Link to="/self-study" className="back-link">&larr; Zurück</Link>
  </div>;
}
