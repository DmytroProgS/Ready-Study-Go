import React, { useState } from 'react';
import './NeueArbeitswelt.css';

// a) EINE GEBRAUCHSANWEISUNG. Was muss zuerst gemacht werden?
// Nummerieren Sie und schreiben Sie dann Sätze im Passiv.
// order — правильний порядок кроків; показуємо в тому ж порядку, що й у підручнику.
const items = [
  { id: 1, active: 'eine Internetverbindung herstellen', order: 5, answer: 'Eine Internetverbindung muss hergestellt werden.' },
  { id: 2, active: 'die Transportsicherung entfernen', order: 1, answer: 'Die Transportsicherung muss zuerst entfernt werden.', given: true },
  { id: 3, active: 'den Akku einlegen', order: 2, answer: 'Der Akku muss eingelegt werden.' },
  { id: 4, active: 'den Akku aufladen', order: 4, answer: 'Der Akku muss aufgeladen werden.' },
  { id: 5, active: 'die Software im Internet registrieren', order: 6, answer: 'Die Software muss im Internet registriert werden.' },
  { id: 6, active: 'das Netzkabel anschließen', order: 3, answer: 'Das Netzkabel muss angeschlossen werden.' },
];

// Виділяємо модальне дієслово у відповіді.
function highlight(text) {
  return text.split(/\b(muss|müssen)\b/).map((part, i) =>
    part === 'muss' || part === 'müssen' ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}

function Gebrauchsanweisung() {
  // Приклад (крок 1) розкритий одразу.
  const [revealed, setRevealed] = useState(() => ({ 2: true }));

  const toggle = (id) => setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));

  const allShown = items.every((it) => revealed[it.id]);
  const toggleAll = () => {
    if (allShown) {
      setRevealed({ 2: true });
    } else {
      const all = {};
      items.forEach((it) => (all[it.id] = true));
      setRevealed(all);
    }
  };

  return (
    <div className="naw">
      <p className="cloze-page__instruction">
        Eine Gebrauchsanweisung. Was muss zuerst gemacht werden? Nummerieren Sie und schreiben Sie
        dann Sätze im Passiv. Пронумеруй кроки в правильному порядку і склади речення в пасиві з müssen.
        Спочатку зроби сам на листочку, потім відкрий відповідь.
      </p>

      <button type="button" className="naw-toggle-all" onClick={toggleAll}>
        {allShown ? 'Сховати всі відповіді' : 'Показати всі відповіді'}
      </button>

      <div className="naw-list">
        {items.map((it) => (
          <div key={it.id} className="naw-item">
            <p className="naw-item__active">
              <span className="naw-item__num">☐</span>
              <span>
                {it.active}
                {it.given && <span className="naw-tag">приклад</span>}
              </span>
            </p>

            {revealed[it.id] ? (
              <p className="naw-answer">
                <span className="naw-order">№ {it.order}</span>
                {highlight(it.answer)}
              </p>
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

export default Gebrauchsanweisung;
