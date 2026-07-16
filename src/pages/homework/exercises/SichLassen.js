import React, { useState } from 'react';
import './SichLassen.css';

// Завдання 1 — переформулювати з sich + lassen + Infinitiv.
// given — вихідне речення, answer — правильна відповідь (прихована до кліку).
const items = [
  {
    id: 1,
    given: 'Kann man alles lernen?',
    answer: 'Lässt sich alles lernen?',
    note: 'приклад',
  },
  {
    id: 2,
    given: 'Man muss immer bedenken, dass man fast alles trainieren kann, und durch regelmäßiges Training kann man das meiste immer mehr verbessern.',
    answer: 'Man muss immer bedenken, dass sich fast alles trainieren lässt, und durch regelmäßiges Training lässt sich das meiste immer mehr verbessern.',
  },
  {
    id: 3,
    given: 'Auch jede Prüfung kann vorbereitet und geübt werden, wenn man genug Zeit investieren kann.',
    answer: 'Auch jede Prüfung lässt sich vorbereiten und üben, wenn man genug Zeit investieren kann.',
  },
  {
    id: 4,
    given: 'Aber nicht alles kann geplant werden und der Erfolg kann nicht garantiert werden, denn wir Menschen sind nicht perfekt.',
    answer: 'Aber nicht alles lässt sich planen und der Erfolg lässt sich nicht garantieren, denn wir Menschen sind nicht perfekt.',
  },
];

function SichLassen() {
  const [revealed, setRevealed] = useState({});

  const toggle = (id) => {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="sila">
      <p className="cloze-page__instruction">
        Formulieren Sie die Sätze mit <em>sich + lassen + Infinitiv</em>, wo es möglich ist.
        <br />
        <span className="sila-hint">Переформулюйте речення. Натисни «Показати рішення», щоб перевірити себе.</span>
      </p>

      {items.map((it) => {
        const open = !!revealed[it.id];
        return (
          <div key={it.id} className="sila-item">
            <div className="sila-item__head">
              <span className="sila-item__num">{it.id}</span>
              <p className="sila-item__given">
                {it.given}
                {it.note && <span className="sila-item__note">{it.note}</span>}
              </p>
            </div>

            <button
              type="button"
              className={'sila-solution' + (open ? ' sila-solution--open' : '')}
              onClick={() => toggle(it.id)}
            >
              {open ? (
                <span className="sila-solution__text">{it.answer}</span>
              ) : (
                <span className="sila-solution__label">🔎 Показати рішення</span>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default SichLassen;
