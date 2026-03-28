import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import lesenTeil4Variants from '../../../data/lesenTeil4Data';
import '../../../assets/styles/lesen.css';

function LesenTeil4Page() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const variant = lesenTeil4Variants[variantIndex];

  const score = useMemo(() => {
    if (!submitted) return 0;
    return variant.questions.reduce((acc, q, i) => {
      return acc + (answers[i] === q.answer ? 1 : 0);
    }, 0);
  }, [submitted, answers, variant]);

  const handleAnswer = (index, value) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [index]: value }));
  };

  const allAnswered = Object.keys(answers).length === 5;

  const handleSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
  };

  const handleNext = () => {
    setVariantIndex((variantIndex + 1) % lesenTeil4Variants.length);
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

  return (
    <div className="lesen-page">
      <div className="lesen-header">
        <Link to="/b2/lesen" className="back-link">← Назад до Lesen</Link>
        <h1>Lesen Teil 4</h1>
        <div className="lesen-variant-nav">
          {lesenTeil4Variants.map((v, i) => (
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

      <p className="lesen-subtitle">Variante {variantIndex + 1} / {lesenTeil4Variants.length} — Lesen Sie das Protokoll und beantworten Sie die Fragen.</p>

      <div className="lesen4-layout">
        <div className="lesen4-text">
          <h2>Protokoll</h2>
          <div className="lesen2-text">
            {variant.text.split('\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="lesen4-questions">
          <h2>Fragen</h2>
          {variant.questions.map((q, i) => {
            const isCorrect = submitted && answers[i] === q.answer;
            const isWrong = submitted && answers[i] && answers[i] !== q.answer;
            return (
              <div key={i} className={`lesen2-question ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}>
                <p className="lesen2-q-statement">{q.number}. {q.statement}</p>
                <div className="lesen2-abc-options">
                  {q.options.map((opt, oi) => {
                    const letter = ['a', 'b', 'c'][oi];
                    return (
                      <label key={letter} className={submitted && q.answer === letter ? 'correct-label' : ''}>
                        <input
                          type="radio"
                          name={`q${i}`}
                          value={letter}
                          checked={answers[i] === letter}
                          onChange={() => handleAnswer(i, letter)}
                          disabled={submitted}
                        />
                        {opt}
                      </label>
                    );
                  })}
                </div>
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

export default LesenTeil4Page;
