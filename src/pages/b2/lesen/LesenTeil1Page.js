import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import lesenTeil1Variants from '../../../data/lesenTeil1Data';
import '../../../assets/styles/lesen.css';

function LesenTeil1Page() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const variant = lesenTeil1Variants[variantIndex];

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
    if (Object.keys(answers).length < 5) return;
    setSubmitted(true);
  };

  const handleNext = () => {
    const nextIndex = (variantIndex + 1) % lesenTeil1Variants.length;
    setVariantIndex(nextIndex);
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

  const allAnswered = Object.keys(answers).length === 5;

  return (
    <div className="lesen-page">
      <div className="lesen-header">
        <Link to="/b2/lesen" className="back-link">← Назад до Lesen</Link>
        <h1>Lesen Teil 1</h1>
        <div className="lesen-variant-nav">
          {lesenTeil1Variants.map((v, i) => (
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

      <p className="lesen-subtitle">Variante {variantIndex + 1} / {lesenTeil1Variants.length} — Ordnen Sie die Texte den Personen zu.</p>

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
                <span className="lesen-question-number">{i + 1}.</span>
                <span className="lesen-question-text">{q.text}</span>
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
                </select>
                {isWrong && (
                  <span className="lesen-correct-answer">
                    {q.answer}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="lesen-texts">
          <h2>Texte</h2>
          {variant.options.map(opt => (
            <div key={opt.letter} className="lesen-text-block">
              <strong>{opt.letter}) {opt.title}</strong>
              <p>{opt.text}</p>
            </div>
          ))}
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
            <div className={`lesen-result ${score === 5 ? 'perfect' : ''}`}>
              Результат: {score} / 5
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

export default LesenTeil1Page;
