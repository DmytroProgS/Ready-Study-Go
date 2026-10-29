import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { lesson2910Exercises } from '../../data/selfStudy2910Data';
import '../homework/Familiengeschichte.css';
import '../homework/HomeworkSet4.css';
import './SelfStudy2910Page.css';

function PracticeDeck({ exercise }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const card = exercise.cards[index];
  const next = () => { setIndex(i => i + 1); setRevealed(false); };
  const restart = () => { setIndex(0); setRevealed(false); };
  return <div className="lesson2910-practice">

    <p className="lesson2910-description">{exercise.description}</p>
    {card ? <>
      <div className="lesson2910-counter">Картка {index + 1} із {exercise.cards.length}</div>
      <div className="lesson2910-uk">{card.uk}</div>
      <p className="lesson2910-instruction">Скажи німецькою вголос, потім відкрий відповідь.</p>
      {revealed && <div className="lesson2910-answer"><strong>{card.de}</strong><div className="lesson2910-tip">💡 {card.tip}</div></div>}
      <div className="lesson2910-actions">
        <button type="button" onClick={() => setRevealed(v => !v)}>{revealed ? 'Сховати відповідь' : 'Показати відповідь'}</button>
        <button type="button" className="lesson2910-secondary" onClick={next}>Наступна →</button>
      </div>
    </> : <div className="lesson2910-finished"><h3>Всі приклади пройдено!</h3><button type="button" onClick={restart}>Почати спочатку</button></div>}
  </div>;
}

const tabs = [{key:'theory',label:'📊 Презентація (теорія)'},...lesson2910Exercises.map((_,i)=>({key:'exercise'+i,label:'🗂 Вправа '+(i+1)}))];

export default function SelfStudy2910Page() {
  const [active,setActive] = useState('theory');
  return <div className="cloze-page">
    <h1 className="cloze-page__lesson">Самостійне заняття 29.10</h1>
    <nav className="set4-nav" aria-label="Розділи заняття">
      {tabs.map(t=><button key={t.key} type="button" className={`set4-nav__tab ${active===t.key?'is-active':''}`} onClick={()=>setActive(t.key)}>{t.label}</button>)}
    </nav>
    <section className="set4-exercise lesson2910-section">
      {active==='theory' ? <div className="lesson2910-theory"><h2>Презентація · Дієслова з прийменниками</h2><p>Оригінальна презентація у форматі PDF — без змін. Її можна читати прямо тут або відкрити окремо.</p><div className="lesson2910-pdf-actions"><a href={process.env.PUBLIC_URL + '/lessons/diieslova-z-pryimennykamy.pdf'} target="_blank" rel="noopener noreferrer">📄 Відкрити PDF у новій вкладці</a><a href={process.env.PUBLIC_URL + '/lessons/diieslova-z-pryimennykamy.pdf'} download>⬇ Завантажити PDF</a></div><iframe className="lesson2910-pdf" title="Оригінальна презентація: дієслова з прийменниками" src={process.env.PUBLIC_URL + '/lessons/diieslova-z-pryimennykamy.pdf#toolbar=1'} /></div> : <PracticeDeck key={active} exercise={lesson2910Exercises[Number(active.replace('exercise',''))]}/>}
    </section>
    <Link to="/self-study" className="back-link">&larr; Назад</Link>
  </div>;
}
