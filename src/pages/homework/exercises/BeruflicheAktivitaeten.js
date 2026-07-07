import React, { useState } from 'react';
import './ModalverbenZuordnen.css';

// 16 Berufliche Aktivitäten — Was bedeutet das? Ordnen Sie zu.
const options = [
  { key: 'A', text: 'für ständigen Kontakt mit anderen Personen sorgen' },
  { key: 'B', text: 'sich um das Online-Tagebuch einer Firma kümmern' },
  { key: 'C', text: 'Rückmeldungen erhalten' },
  { key: 'D', text: '(kurze) Texte schreiben' },
  { key: 'E', text: 'eine bestimmte Wirkung erzielen' },
  { key: 'F', text: 'sich neue und ungewöhnliche Reklame ausdenken' },
];

const sentences = [
  { id: 1, text: 'einen Blog betreuen', answer: 'B', given: true },
  { id: 2, text: 'Beiträge verfassen', answer: 'D' },
  { id: 3, text: 'die Kommunikation am Laufen halten', answer: 'A' },
  { id: 4, text: 'einen Eindruck hinterlassen', answer: 'E' },
  { id: 5, text: 'unkonventionelle Werbung machen', answer: 'F' },
  { id: 6, text: 'Feedback bekommen', answer: 'C' },
];

function BeruflicheAktivitaeten() {
  // Початковий стан: приклад (пункт 1) уже заповнений.
  const [answers, setAnswers] = useState(() => {
    const init = {};
    sentences.forEach((s) => {
      if (s.given) init[s.id] = s.answer;
    });
    return init;
  });
  const [checked, setChecked] = useState(false);

  const editable = sentences.filter((s) => !s.given);
  const allFilled = editable.every((s) => answers[s.id]);
  const correctCount = editable.filter((s) => answers[s.id] === s.answer).length;

  const handleSelect = (id, value) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const reset = () => {
    const init = {};
    sentences.forEach((s) => {
      if (s.given) init[s.id] = s.answer;
    });
    setAnswers(init);
    setChecked(false);
  };

  return (
    <div className="mzu">
      <p className="cloze-page__instruction">
        Was bedeutet das? Ordnen Sie zu.
        Підберіть до кожного виразу (1–6) відповідне значення (A–F).
      </p>

      <div className="mzu-legend">
        {options.map((o) => (
          <div key={o.key} className="mzu-legend__item">
            <span className="mzu-legend__key">{o.key}</span>
            <span className="mzu-legend__text">{o.text}</span>
          </div>
        ))}
      </div>

      <ol className="mzu-list">
        {sentences.map((s) => {
          const val = answers[s.id] || '';
          const isCorrect = checked && val === s.answer;
          const isWrong = checked && val && val !== s.answer;
          const cls =
            'mzu-select' +
            (val ? ' mzu-select--filled' : '') +
            (s.given ? ' mzu-select--given' : '') +
            (isCorrect ? ' mzu-select--correct' : '') +
            (isWrong ? ' mzu-select--wrong' : '');

          return (
            <li key={s.id} className="mzu-item">
              <p className="mzu-sentence">{s.text}</p>
              <div className="mzu-answer">
                <select
                  className={cls}
                  value={val}
                  disabled={s.given || checked}
                  onChange={(e) => handleSelect(s.id, e.target.value)}
                >
                  <option value="" disabled>
                    —
                  </option>
                  {options.map((o) => (
                    <option key={o.key} value={o.key}>
                      {o.key}
                    </option>
                  ))}
                </select>
                {s.given && <span className="mzu-tag">приклад</span>}
                {isWrong && <span className="mzu-fix">→ {s.answer}</span>}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="cloze-actions">
        {!checked ? (
          <button
            type="button"
            className="cloze-btn cloze-btn--check"
            onClick={() => setChecked(true)}
            disabled={!allFilled}
          >
            Перевірити
          </button>
        ) : (
          <button type="button" className="cloze-btn cloze-btn--reset" onClick={reset}>
            Спробувати ще раз
          </button>
        )}
      </div>

      {checked && (
        <div
          className={
            'cloze-result' + (correctCount === editable.length ? ' cloze-result--perfect' : '')
          }
        >
          <p className="cloze-result__score">
            Правильно: <strong>{correctCount}</strong> з {editable.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default BeruflicheAktivitaeten;
