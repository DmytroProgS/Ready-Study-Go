import React, { useState } from 'react';
import './NeueArbeitswelt.css';

// b) ALLES FALSCH GEMACHT. Schreiben Sie die Sätze mit den Informationen aus 3a im Präteritum.
// Кожне речення продовжується кроком із Завдання 6 у Präteritum Passiv (… musste … werden).
const items = [
  {
    id: 1,
    active: 'Ich konnte das Gerät nicht starten, weil ich nicht wusste, dass …',
    answer: 'Ich konnte das Gerät nicht starten, weil ich nicht wusste, dass die Transportsicherung entfernt werden musste.',
    given: true,
  },
  {
    id: 2,
    active: 'Es hat nicht funktioniert, weil ich vergessen hatte, dass …',
    answer: 'Es hat nicht funktioniert, weil ich vergessen hatte, dass der Akku eingelegt werden musste.',
  },
  {
    id: 3,
    active: 'Ich hatte übersehen, dass …',
    answer: 'Ich hatte übersehen, dass das Netzkabel angeschlossen werden musste.',
  },
  {
    id: 4,
    active: 'Ich hatte nicht damit gerechnet, dass …',
    answer: 'Ich hatte nicht damit gerechnet, dass der Akku aufgeladen werden musste.',
  },
  {
    id: 5,
    active: 'Es ging nicht, weil ich nicht verstanden habe, dass …',
    answer: 'Es ging nicht, weil ich nicht verstanden habe, dass eine Internetverbindung hergestellt werden musste.',
  },
  {
    id: 6,
    active: 'Ich bekam nur Fehlermeldungen, weil …',
    answer: 'Ich bekam nur Fehlermeldungen, weil die Software im Internet registriert werden musste.',
  },
];

// Виділяємо пасивну конструкцію (werden musste).
function highlight(text) {
  return text.split(/\b(werden|musste)\b/).map((part, i) =>
    part === 'werden' || part === 'musste' ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}

function AllesFalsch() {
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
        Alles falsch gemacht. Продовжи кожне речення інформацією з Завдання 6 у Präteritum Passiv
        (… musste … werden). Напиши на листочку, потім відкрий відповідь.
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

export default AllesFalsch;
