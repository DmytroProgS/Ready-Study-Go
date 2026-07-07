import React, { useState } from 'react';
import './NeueArbeitswelt.css';

// 4 Schreiben Sie die Sätze oder Fragen im Passiv. Achten Sie auf die Zeitform.
const items = [
  {
    id: 1,
    active: 'Man konnte sie rechtzeitig informieren.',
    answer: 'Sie konnte rechtzeitig informiert werden.',
    tense: 'Präteritum',
    given: true,
  },
  {
    id: 2,
    active: 'Man hatte das Dokument überprüfen müssen.',
    answer: 'Das Dokument hatte überprüft werden müssen.',
    tense: 'Plusquamperfekt',
  },
  {
    id: 3,
    active: 'Man hat die Arbeit erledigen sollen.',
    answer: 'Die Arbeit hat erledigt werden sollen.',
    tense: 'Perfekt',
  },
  {
    id: 4,
    active: 'Man hatte das Haus renovieren müssen.',
    answer: 'Das Haus hatte renoviert werden müssen.',
    tense: 'Plusquamperfekt',
  },
  {
    id: 5,
    active: 'Man musste die neue Technologie testen.',
    answer: 'Die neue Technologie musste getestet werden.',
    tense: 'Präteritum',
  },
  {
    id: 6,
    active: 'Man hat die Ausstellung von 9.00 bis 17.00 Uhr besichtigen können.',
    answer: 'Die Ausstellung hat von 9.00 bis 17.00 Uhr besichtigt werden können.',
    tense: 'Perfekt',
  },
];

// Виділяємо елементи пасиву (допоміжне / модальне дієслово + werden).
function highlight(text) {
  return text.split(/\b(hat|hatte|konnte|musste|werden|müssen|sollen|können)\b/).map((part, i) =>
    /^(hat|hatte|konnte|musste|werden|müssen|sollen|können)$/.test(part) ? (
      <strong key={i}>{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function PassivZeitform() {
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
        Schreiben Sie die Sätze im Passiv. Achten Sie auf die Zeitform. Перепиши речення в пасиві,
        зберігаючи час. Спочатку сам на листочку, потім відкрий відповідь.
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
              <p className="naw-answer">
                <span className="naw-order">{it.tense}</span>
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

export default PassivZeitform;
