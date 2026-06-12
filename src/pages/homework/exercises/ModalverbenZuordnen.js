import React, { useState } from 'react';
import './ModalverbenZuordnen.css';

// 3 GRAMMATIK — Welche Bedeutung haben die kursiven Modalverben? Ordnen Sie die Sätze zu.
const options = [
  { key: 'a', text: 'Es ist verboten.' },
  { key: 'b', text: 'Es ist nicht notwendig.' },
  { key: 'c', text: 'Es ist notwendig.' },
  { key: 'd', text: 'Man ist dazu aufgefordert.' },
  { key: 'e', text: 'Es ist erlaubt.' },
  { key: 'f', text: 'Sie wünschen es sich.' },
  { key: 'g', text: 'Es ist nicht möglich.' },
];

// pre — частина перед курсивним дієсловом, em — курсивне модальне дієслово, post — решта.
const sentences = [
  { id: 1, pre: 'EU-Bürger ', em: 'dürfen', post: ' ohne Visum nach Deutschland / Österreich reisen.', answer: 'e', given: true },
  { id: 2, pre: 'Sie ', em: 'müssen', post: ' vor der Reise nicht zur Botschaft gehen, denn sie brauchen nur ihren Ausweis.', answer: 'b' },
  { id: 3, pre: 'Bürger aus Nicht-EU-Staaten ', em: 'dürfen nicht', post: ' ohne Visum nach Deutschland reisen.', answer: 'a' },
  { id: 4, pre: 'Sie ', em: 'können', post: ' das Visum nicht erst nach der Ankunft in Deutschland beantragen.', answer: 'g' },
  { id: 5, pre: 'Sie ', em: 'müssen', post: ' den Antrag persönlich bei der Botschaft im Heimatland stellen.', answer: 'c' },
  { id: 6, pre: 'Zu diesem Termin ', em: 'soll', post: ' man alle wichtigen Unterlagen mitbringen.', answer: 'd' },
  { id: 7, pre: 'Viele Menschen ', em: 'wollen', post: ', dass ihr Antrag schnell bearbeitet wird.', answer: 'f' },
];

function ModalverbenZuordnen() {
  // Початковий стан: приклад (речення 1) уже заповнений.
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
        Welche Bedeutung haben die kursiven Modalverben? Ordnen Sie die Sätze zu.
        Підберіть до кожного речення значення (a–g) виділеного модального дієслова.
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
              <p className="mzu-sentence">
                {s.pre}
                <em className="mzu-verb">{s.em}</em>
                {s.post}
              </p>
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

export default ModalverbenZuordnen;
