import React, { useState } from 'react';
import './NeueArbeitswelt.css';

// 2 SCHILDER — Schreiben Sie Sätze. Verwenden Sie müssen, sollen oder nicht dürfen.
const items = [
  { id: 1, active: 'Helm tragen', answer: 'Hier muss ein Helm getragen werden.', given: true },
  { id: 2, active: 'keinen Müll abladen', answer: 'Hier darf kein Müll abgeladen werden.' },
  { id: 3, active: 'den Rasen nicht betreten', answer: 'Der Rasen darf nicht betreten werden.' },
  { id: 4, active: 'keine Fotos machen', answer: 'Hier dürfen keine Fotos gemacht werden.' },
  { id: 5, active: 'einen Ausweis zeigen', answer: 'Hier muss ein Ausweis gezeigt werden.' },
  { id: 6, active: 'Handys ausschalten', answer: 'Hier müssen Handys ausgeschaltet werden.' },
];

// Виділяємо модальні дієслова та заперечення у відповіді.
function highlight(text) {
  return text.split(/\b(muss|müssen|darf|dürfen|soll|sollen|nicht)\b/).map((part, i) =>
    /^(muss|müssen|darf|dürfen|soll|sollen|nicht)$/.test(part) ? (
      <strong key={i}>{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function Schilder() {
  // Приклад (знак 1) розкритий одразу.
  const [revealed, setRevealed] = useState(() => ({ 1: true }));

  const toggle = (id) => setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));

  const allShown = items.every((it) => revealed[it.id]);
  const toggleAll = () => {
    if (allShown) {
      setRevealed({ 1: true });
    } else {
      const all = {};
      items.forEach((it) => (all[it.id] = true));
      setRevealed(all);
    }
  };

  return (
    <div className="naw">
      <p className="cloze-page__instruction">
        SCHILDER. Schreiben Sie Sätze. Verwenden Sie müssen, sollen oder nicht dürfen.
        Склади речення в пасиві до кожного знака. Напиши свій варіант на листочку, потім відкрий відповідь.
      </p>

      <button type="button" className="naw-toggle-all" onClick={toggleAll}>
        {allShown ? 'Сховати всі відповіді' : 'Показати всі відповіді'}
      </button>

      <div className="naw-list">
        {items.map((it) => (
          <div key={it.id} className="naw-item">
            <p className="naw-item__active">
              <span className="naw-item__num">{it.id}</span>
              <span>
                {it.active}
                {it.given && <span className="naw-tag">приклад</span>}
              </span>
            </p>

            {revealed[it.id] ? (
              <p className="naw-answer">{highlight(it.answer)}</p>
            ) : (
              <button type="button" className="naw-reveal-btn" onClick={() => toggle(it.id)}>
                Показати відповідь
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schilder;
