import React, { useState } from 'react';
import './NeueArbeitswelt.css';

// 15 Neue Arbeitswelt — Schreiben Sie Sätze im Passiv mit von oder durch.
const items = [
  {
    id: 1,
    active: 'Neue Kommunikationstechniken verändern die Arbeitswelt.',
    answer: 'Die Arbeitswelt wird durch neue Kommunikationstechniken verändert.',
    given: true,
  },
  {
    id: 2,
    active: 'Unsere neuen Mitarbeiter haben unsere neuen Kommunikationsstrukturen selbst entwickelt.',
    answer: 'Unsere neuen Kommunikationsstrukturen sind von unseren neuen Mitarbeitern selbst entwickelt worden.',
  },
  {
    id: 3,
    active: 'Die neuen Strukturen lösen die alten Arbeitsmethoden ab.',
    answer: 'Die alten Arbeitsmethoden werden durch die neuen Strukturen abgelöst.',
  },
  {
    id: 4,
    active: 'Diese Kommunikationswege verbinden unsere Filialen weltweit miteinander.',
    answer: 'Unsere Filialen werden durch diese Kommunikationswege weltweit miteinander verbunden.',
  },
  {
    id: 5,
    active: 'Flexible Arbeitszeitmodelle erleichtern ein familienfreundliches Arbeitsleben.',
    answer: 'Ein familienfreundliches Arbeitsleben wird durch flexible Arbeitszeitmodelle erleichtert.',
  },
  {
    id: 6,
    active: 'Kein Computer kann den persönlichen Kontakt oder das Gespräch auf dem Flur ersetzen.',
    answer: 'Der persönliche Kontakt oder das Gespräch auf dem Flur kann durch keinen Computer ersetzt werden.',
  },
];

// Виділяємо von / durch у відповіді.
function highlight(text) {
  return text.split(/\b(von|durch)\b/).map((part, i) =>
    part === 'von' || part === 'durch' ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}

function NeueArbeitswelt() {
  // Приклад (речення 1) розкритий одразу.
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
        Schreiben Sie Sätze im Passiv mit von oder durch. Перепишіть речення в пасиві.
        Спочатку напиши свій варіант на листочку, потім натисни «Показати відповідь» для самоперевірки.
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

export default NeueArbeitswelt;
