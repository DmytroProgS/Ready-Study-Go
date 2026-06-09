import React, { useState, useMemo } from 'react';
import {
  familienTitle,
  familienAuthor,
  familienBlanks,
  familienParagraphs,
} from '../../../data/homeworkFamiliengeschichteData';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const blankNumbers = Object.keys(familienBlanks).map(Number).sort((a, b) => a - b);

// Вправа 1 — cloze "Auf der Suche nach der eigenen Familiengeschichte".
function FamiliengeschichteCloze() {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  // Порядок варіантів фіксуємо один раз, щоб правильна відповідь не була завжди першою.
  const optionOrder = useMemo(() => {
    const map = {};
    for (const n of blankNumbers) {
      map[n] = shuffle(familienBlanks[n].options);
    }
    return map;
  }, []);

  const handleSelect = (n, value) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [n]: value }));
  };

  const allAnswered = blankNumbers.every((n) => answers[n]);
  const correctCount = blankNumbers.filter((n) => answers[n] === familienBlanks[n].answer).length;

  const handleCheck = () => setChecked(true);
  const handleReset = () => {
    setAnswers({});
    setChecked(false);
  };

  const renderBlank = (n) => {
    const blank = familienBlanks[n];
    const selected = answers[n] || '';
    const isCorrect = selected === blank.answer;

    let cls = 'cloze-select';
    if (checked) cls += isCorrect ? ' cloze-select--correct' : ' cloze-select--wrong';
    else if (selected) cls += ' cloze-select--filled';

    return (
      <span key={`b${n}`} className="cloze-blank">
        <select
          className={cls}
          value={selected}
          disabled={checked}
          onChange={(e) => handleSelect(n, e.target.value)}
        >
          <option value="" disabled>
            — ? —
          </option>
          {optionOrder[n].map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <sup className="cloze-num">{n}</sup>
        {checked && !isCorrect && <span className="cloze-fix">→ {blank.answer}</span>}
      </span>
    );
  };

  return (
    <div className="cloze-exercise">
      <p className="cloze-page__instruction">
        Was passt? Lesen Sie den Artikel und ergänzen Sie die Verben in der richtigen Form.
        Оберіть правильний варіант для кожного пропуску, потім натисніть «Перевірити».
      </p>

      <article className="cloze-article">
        <h2 className="cloze-article__title">{familienTitle}</h2>
        <p className="cloze-article__author">{familienAuthor}</p>

        <div className="cloze-article__body">
          {familienParagraphs.map((parts, pi) => (
            <p key={pi}>
              {parts.map((part, idx) => {
                if (typeof part === 'string') return <span key={idx}>{part}</span>;
                if (part.given) {
                  return (
                    <span key={idx} className="cloze-given">
                      {part.given}
                      <sup className="cloze-num">1</sup>
                    </span>
                  );
                }
                return renderBlank(part.blank);
              })}
            </p>
          ))}
        </div>
      </article>

      <div className="cloze-actions">
        {!checked ? (
          <button
            className="cloze-btn cloze-btn--check"
            onClick={handleCheck}
            disabled={!allAnswered}
          >
            {allAnswered
              ? 'Перевірити'
              : `Заповни всі пропуски (${Object.keys(answers).length}/${blankNumbers.length})`}
          </button>
        ) : (
          <button className="cloze-btn cloze-btn--reset" onClick={handleReset}>
            🔄 Спробувати ще раз
          </button>
        )}
      </div>

      {checked && (
        <div
          className={`cloze-result ${
            correctCount === blankNumbers.length ? 'cloze-result--perfect' : ''
          }`}
        >
          <div className="cloze-result__score">
            Результат: <strong>{correctCount}</strong> / {blankNumbers.length} правильно
            {correctCount === blankNumbers.length && ' 🎉'}
          </div>
          <div className="cloze-result__list">
            {blankNumbers.map((n) => {
              const ok = answers[n] === familienBlanks[n].answer;
              return (
                <div key={n} className={`cloze-result__item ${ok ? 'is-ok' : 'is-bad'}`}>
                  <span className="cloze-result__n">{n}</span>
                  <span className="cloze-result__ans">{familienBlanks[n].answer}</span>
                  <span className="cloze-result__note">{familienBlanks[n].note}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default FamiliengeschichteCloze;
