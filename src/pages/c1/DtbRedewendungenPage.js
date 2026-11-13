import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dtbRedewendungen } from '../../data/dtbRedewendungen';
import './DtbRedewendungenPage.css';

const shuffle = (cards) => {
  const result = [...cards];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export default function DtbRedewendungenPage() {
  const [direction, setDirection] = useState('uk-de');
  const [cards, setCards] = useState(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const start = () => { setCards(shuffle(dtbRedewendungen)); setIndex(0); setFlipped(false); };
  const move = (next) => { setIndex(next); setFlipped(false); };
  const front = direction === 'uk-de' ? 'uk' : 'de';
  const back = direction === 'uk-de' ? 'de' : 'uk';
  const card = cards?.[index];
  return (
    <main className="dtb-red-page">
      <h1>🗂️ Redewendungen</h1>
      <p>13 корисних виразів для Sprechen DTB C1. Переклади речення вголос і переверни картку, щоб перевірити себе.</p>
      {!cards ? (
        <section className="dtb-red-setup">
          <h2>Напрямок перекладу</h2>
          <label><input type="radio" name="direction" value="uk-de" checked={direction === 'uk-de'} onChange={() => setDirection('uk-de')} /> 🇺🇦 Українська → 🇩🇪 Німецька</label>
          <label><input type="radio" name="direction" value="de-uk" checked={direction === 'de-uk'} onChange={() => setDirection('de-uk')} /> 🇩🇪 Німецька → 🇺🇦 Українська</label>
          <button className="dtb-red-primary" onClick={start}>Почати тренування →</button>
        </section>
      ) : (
        <section className="dtb-red-session">
          <div className="dtb-red-meta"><strong>{direction === 'uk-de' ? '🇺🇦 → 🇩🇪' : '🇩🇪 → 🇺🇦'}</strong><span>Картка {index + 1} із {cards.length}</span></div>
          <div className="dtb-red-progress"><div style={{width: ((index + 1) / cards.length * 100) + '%'}} /></div>
          <button className="dtb-red-card" onClick={() => setFlipped(v => !v)} aria-label="Перевернути картку" type="button">
            <span className="dtb-red-language">{(flipped ? back : front) === 'uk' ? '🇺🇦 Українською' : '🇩🇪 Німецькою'}</span>
            <span className="dtb-red-sentence">{card[flipped ? back : front]}</span>
            <span className="dtb-red-hint">↻ Натисни, щоб перевернути</span>
          </button>
          <div className="dtb-red-controls">
            <button disabled={index === 0} onClick={() => move(index - 1)}>← Назад</button>
            <button onClick={() => setFlipped(v => !v)}>↻ Перевернути</button>
            {index < cards.length - 1
              ? <button onClick={() => move(index + 1)}>Далі →</button>
              : <button onClick={start}>🔀 Перемішати знову</button>}
          </div>
          <button className="dtb-red-other" onClick={() => setCards(null)}>← Змінити напрямок</button>
        </section>
      )}
      <Link className="dtb-red-back" to="/c1/sprechen-dtb">← До Sprechen DTB C1</Link>
    </main>
  );
}
