import React, { useState } from 'react';
import './VonOderDurch.css';

// 13 von oder durch in Passivsätzen — GRAMMATIK ENTDECKEN
const CHOICES = ['von', 'durch'];

// pre — частина до бланка, post — після. answer — правильний прийменник.
const sentences = [
  { id: 1, pre: 'Der Projektleiter wird ', post: ' der Assistentin informiert.', answer: 'von', given: true },
  { id: 2, pre: 'Der Firmenchef wird ', post: ' einem Journalisten interviewt.', answer: 'von' },
  { id: 3, pre: 'Die Assistentin wird ', post: ' eine SMS benachrichtigt.', answer: 'durch' },
  { id: 4, pre: 'Sven wird ', post: ' seinen großen Ehrgeiz angetrieben.', answer: 'durch' },
];

const rules = [
  { id: 'r1', label: 'Person, Institution', answer: 'von' },
  { id: 'r2', label: 'Mittel, Instrument, Ursache', answer: 'durch' },
];

const allBlanks = [...sentences, ...rules];

function VonOderDurch() {
  const [answers, setAnswers] = useState(() => {
    const init = {};
    allBlanks.forEach((b) => {
      if (b.given) init[b.id] = b.answer;
    });
    return init;
  });
  const [checked, setChecked] = useState(false);

  const editable = allBlanks.filter((b) => !b.given);
  const allFilled = editable.every((b) => answers[b.id]);
  const correctCount = editable.filter((b) => answers[b.id] === b.answer).length;

  const handleSelect = (id, value) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const reset = () => {
    const init = {};
    allBlanks.forEach((b) => {
      if (b.given) init[b.id] = b.answer;
    });
    setAnswers(init);
    setChecked(false);
  };

  const renderSelect = (b) => {
    const val = answers[b.id] || '';
    const isCorrect = checked && val === b.answer;
    const isWrong = checked && val && val !== b.answer;
    const cls =
      'vd-select' +
      (val ? ' vd-select--filled' : '') +
      (b.given ? ' vd-select--given' : '') +
      (isCorrect ? ' vd-select--correct' : '') +
      (isWrong ? ' vd-select--wrong' : '');

    return (
      <>
        <select
          className={cls}
          value={val}
          disabled={b.given || checked}
          onChange={(e) => handleSelect(b.id, e.target.value)}
        >
          <option value="" disabled>
            —
          </option>
          {CHOICES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {b.given && <span className="vd-tag">приклад</span>}
        {isWrong && <span className="vd-fix">→ {b.answer}</span>}
      </>
    );
  };

  return (
    <div className="mzu">
      <p className="cloze-page__instruction">
        von oder durch in Passivsätzen. Впишіть у пасивних реченнях von або durch.
      </p>

      <div className="vd-part">
        <div className="vd-part__head">
          <span className="vd-part__letter">a</span>
          <h3 className="vd-part__title">Ergänzen Sie.</h3>
        </div>
        {sentences.map((s) => (
          <div key={s.id} className="vd-item">
            <span className="vd-item__num">{s.id}</span>
            <p className="vd-sentence">
              {s.pre}
              {renderSelect(s)}
              {s.post}
            </p>
          </div>
        ))}
      </div>

      <div className="vd-part">
        <div className="vd-part__head">
          <span className="vd-part__letter">b</span>
          <h3 className="vd-part__title">Ergänzen Sie von oder durch.</h3>
        </div>
        {rules.map((r) => (
          <div key={r.id} className="vd-rule">
            <span className="vd-rule__label">{r.label}</span>
            <span className="vd-rule__arrow">→</span>
            {renderSelect(r)}
          </div>
        ))}
      </div>

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

export default VonOderDurch;
