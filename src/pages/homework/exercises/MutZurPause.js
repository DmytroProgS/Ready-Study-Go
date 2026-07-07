import React, { useState } from 'react';

// 14 Mut zur Pause! — Ergänzen Sie von oder durch.
const CHOICES = ['von', 'durch'];

const blanks = {
  2: { answer: 'von', note: 'Person (allen Mitarbeitern)' },
  3: { answer: 'durch', note: 'Mittel (Bewegung)' },
  4: { answer: 'durch', note: 'Mittel (Entspannungsübungen)' },
  5: { answer: 'durch', note: 'Mittel (Übungen …)' },
  6: { answer: 'von', note: 'Person (Firmenchefs)' },
  7: { answer: 'durch', note: 'Mittel (Arbeitsplatz)' },
};

const blankNumbers = Object.keys(blanks).map(Number).sort((a, b) => a - b);

// Токени листа: рядок, { given, num } — приклад, { blank } — пропуск.
const paragraphs = [
  ['Liebe Redaktion,'],
  [
    'ich habe Ihre Sendung „Entspannen am Arbeitsplatz“ gehört und kann nur sagen: Danke für diesen Beitrag! ',
    { given: 'Von', num: 1 },
    ' jeder Firmenleitung sollte auf Pausen am Arbeitsplatz Wert gelegt werden, damit die Entspannungsübungen auch wirklich ',
    { blank: 2 },
    ' allen Mitarbeitern durchgeführt werden können. Die Pausen sollten ',
    { blank: 3 },
    ' Bewegung und ',
    { blank: 4 },
    ' kurze Entspannungsübungen aktiv gestaltet werden. ',
    { blank: 5 },
    ' Übungen wie Weglegen des Bleistifts, tiefes Durchatmen, kurzes Schließen der Augen kann Stress erfolgreich abgebaut werden. Solche Minipausen werden ja auch ',
    { blank: 6 },
    ' vielen Firmenchefs unterstützt. Und noch ein Tipp für die nächste Sendung: Die Freude an der Arbeit kann ',
    { blank: 7 },
    ' einen individuell gestalteten Arbeitsplatz mit Pflanzen und Bildern gefördert werden.',
  ],
  ['Mit herzlichen Grüßen'],
  ['Daniela Liebig'],
];

function MutZurPause() {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (n, value) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [n]: value }));
  };

  const allAnswered = blankNumbers.every((n) => answers[n]);
  const correctCount = blankNumbers.filter((n) => answers[n] === blanks[n].answer).length;

  const handleCheck = () => setChecked(true);
  const handleReset = () => {
    setAnswers({});
    setChecked(false);
  };

  const renderBlank = (n) => {
    const blank = blanks[n];
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
          {CHOICES.map((opt) => (
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
        Ergänzen Sie von oder durch. Заповніть пропуски в листі прийменником von або durch.
      </p>

      <article className="cloze-article">
        <div className="cloze-article__body">
          {paragraphs.map((parts, pi) => (
            <p key={pi}>
              {parts.map((part, idx) => {
                if (typeof part === 'string') return <span key={idx}>{part}</span>;
                if (part.given) {
                  return (
                    <span key={idx} className="cloze-given">
                      {part.given}
                      <sup className="cloze-num">{part.num}</sup>
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
              const ok = answers[n] === blanks[n].answer;
              return (
                <div key={n} className={`cloze-result__item ${ok ? 'is-ok' : 'is-bad'}`}>
                  <span className="cloze-result__n">{n}</span>
                  <span className="cloze-result__ans">{blanks[n].answer}</span>
                  <span className="cloze-result__note">{blanks[n].note}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default MutZurPause;
