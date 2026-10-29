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
    <h2>🔀 Перемішати всі приклади</h2>
    <p>Усі {allLessonCards.length} речень з презентації та закріплення матеріалу. Кожна картка з'являється один раз за проходження.</p>
    <PracticeDeck key={round} exercise={{ description: 'Випадкове тренування · 4 вправи', cards }} onRestart={shuffleAgain} />
    <button type="button" className="lesson2910-shuffle-again" onClick={shuffleAgain}>🔀 Перемішати заново</button>
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
      <div className="lesson2910-counter">Картка {index + 1} із {exercise.cards.length}</div>
      <div className="lesson2910-uk">{card.uk}</div>
      <p className="lesson2910-instruction">Скажи німецькою вголос, потім відкрий відповідь.</p>
      {revealed && <div className="lesson2910-answer"><strong>{card.de}</strong><div className="lesson2910-tip">💡 {card.tip}</div>{card.explanation && <div className="lesson2910-explanation"><h3>Пояснення</h3>{card.explanation.split("\n").map((line, i) => line ? <p key={i}>{line}</p> : null)}</div>}</div>}
      <div className="lesson2910-actions">
        <button type="button" onClick={() => setRevealed(v => !v)}>{revealed ? 'Сховати відповідь' : 'Показати відповідь'}</button>
        <button type="button" className="lesson2910-secondary" onClick={next}>Наступна →</button>
      </div>
    </> : <div className="lesson2910-finished"><h3>Всі приклади пройдено!</h3><button type="button" onClick={restart}>{onRestart ? '🔀 Перемішати заново' : 'Почати спочатку'}</button></div>}
  </div>;
}

const tabs = [{key:'theory',label:'📊 Презентація (теорія)'},...lesson2910Exercises.map((_,i)=>({key:'exercise'+i,label:'🗂 Вправа '+(i+1)})),{key:'mixed',label:'🔀 Перемішати всі приклади'}];

export default function SelfStudy2910Page() {
  const [active,setActive] = useState('theory');
  return <div className="cloze-page">
    <h1 className="cloze-page__lesson">Самостійне заняття 29.10</h1>
    <nav className="set4-nav" aria-label="Розділи заняття">
      {tabs.map(t=><button key={t.key} type="button" className={`set4-nav__tab ${active===t.key?'is-active':''}`} onClick={()=>setActive(t.key)}>{t.label}</button>)}
    </nav>
    <section className="set4-exercise lesson2910-section">
      {active==='theory' ? <div className="lesson2910-theory"><h2>Презентація · Дієслова з прийменниками</h2><p>Оригінальна презентація у форматі PDF — без змін. Її можна читати прямо тут або відкрити окремо.</p><div className="lesson2910-pdf-actions"><a href={process.env.PUBLIC_URL + '/lessons/diieslova-z-pryimennykamy.pdf'} target="_blank" rel="noopener noreferrer">📄 Відкрити PDF у новій вкладці</a><a href={process.env.PUBLIC_URL + '/lessons/diieslova-z-pryimennykamy.pdf'} download>⬇ Завантажити PDF</a></div><iframe className="lesson2910-pdf" title="Оригінальна презентація: дієслова з прийменниками" src={process.env.PUBLIC_URL + '/lessons/diieslova-z-pryimennykamy.pdf#toolbar=1'} /></div> : active==='mixed' ? <MixedPracticeDeck/> : <PracticeDeck key={active} exercise={lesson2910Exercises[Number(active.replace('exercise',''))]}/>}
    </section>
    {active.startsWith('exercise') && <section className="lesson2910-extra-section"><h2>Закріплення матеріалу</h2><p>Твої додаткові приклади до вибраної вправи. Окрема колода — можеш проходити незалежно від презентації.</p><PracticeDeck key={active + '-extra'} exercise={(Number(active.replace('exercise','')) === 0 ? lesson2910ExtraExercises[0] : lesson2910ExtraExercisesMore[Number(active.replace('exercise','')) - 1])}/></section>}
    <Link to="/self-study" className="back-link">&larr; Назад</Link>
  </div>;
}
