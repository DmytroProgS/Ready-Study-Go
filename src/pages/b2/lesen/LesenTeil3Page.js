import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import lesenTeil3Variants from '../../../data/lesenTeil3Data';
import '../../../assets/styles/lesen.css';

function LesenTeil3Page() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const variant = lesenTeil3Variants[variantIndex];

  const score = useMemo(() => {
    if (!submitted) return 0;
    return variant.questions.reduce((acc, q, i) => {
      return acc + (answers[i] === q.answer ? 1 : 0);
    }, 0);
  }, [submitted, answers, variant]);

  const handleSelect = (questionIndex, letter) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionIndex]: letter }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < 4) return;
    setSubmitted(true);
  };

  const handleNext = () => {
    setVariantIndex((variantIndex + 1) % lesenTeil3Variants.length);
    setAnswers({});
    setSubmitted(false);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const handleGoToVariant = (index) => {
    setVariantIndex(index);
    setAnswers({});
    setSubmitted(false);
  };

  const allAnswered = Object.keys(answers).length === 4;

  return (
    <div className="lesen-page">
      <div className="lesen-header">
        <Link to="/b2/lesen" className="back-link">← Назад до Lesen</Link>
        <h1>Lesen Teil 3</h1>
        <div className="lesen-variant-nav">
          {lesenTeil3Variants.map((v, i) => (
            <button
              key={v.id}
              onClick={() => handleGoToVariant(i)}
              className={`lesen-variant-btn ${i === variantIndex ? 'active' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <p className="lesen-subtitle">Variante {variantIndex + 1} / {lesenTeil3Variants.length} — Ordnen Sie die Kommentare den Personen zu. Ein Kommentar passt nicht (X).</p>

      <div className="lesen-columns">
        <div className="lesen-questions">
          <h2>Personen</h2>
          {variant.questions.map((q, i) => {
            const isCorrect = submitted && answers[i] === q.answer;
            const isWrong = submitted && answers[i] !== q.answer;
            return (
              <div
                key={i}
                className={`lesen-question ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
              >
                <span className="lesen-question-number">{10 + i}.</span>
                <div className="lesen-question-content">
                  <strong>{q.person}</strong>
                  <span className="lesen-question-text">{q.text}</span>
                </div>
                <select
                  value={answers[i] || ''}
                  onChange={(e) => handleSelect(i, e.target.value)}
                  disabled={submitted}
                  className="lesen-select"
                >
                  <option value="">—</option>
                  {variant.options.map(opt => (
                    <option key={opt.letter} value={opt.letter}>{opt.letter}</option>
                  ))}
                  <option value="x">X</option>
                </select>
                {isWrong && (
                  <span className="lesen-correct-answer">
                    {q.answer === 'x' ? 'X' : q.answer}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="lesen-texts">
          <h2>Kommentare</h2>
          {variant.options.map(opt => {
            const dashIndex = opt.text.indexOf(" - ");
            const author = dashIndex > -1 ? opt.text.substring(0, dashIndex) : "";
            const body = dashIndex > -1 ? opt.text.substring(dashIndex + 3) : opt.text;
            return (
              <div key={opt.letter} className="lesen-text-block">
                <strong>{opt.letter}) {author}</strong>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lesen-actions">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="lesen-btn lesen-btn-check"
          >
            Перевірити
          </button>
        ) : (
          <>
            <div className={`lesen-result ${score === 4 ? 'perfect' : ''}`}>
              Результат: {score} / 4
            </div>
            <button onClick={handleNext} className="lesen-btn lesen-btn-next">
              Наступний варіант
            </button>
            <button onClick={handleReset} className="lesen-btn lesen-btn-retry">
              Спробувати ще раз
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LesenTeil3Page;
