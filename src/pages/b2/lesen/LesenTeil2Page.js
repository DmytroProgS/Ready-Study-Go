import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import lesenTeil2Variants from '../../../data/lesenTeil2Data';
import '../../../assets/styles/lesen.css';

function TextBlock({ textData, prefix, answers, submitted, onAnswer }) {
  const q1Key = `${prefix}_q1`;
  const q2Key = `${prefix}_q2`;
  const q1Correct = submitted && answers[q1Key] === textData.q1.answer;
  const q1Wrong = submitted && answers[q1Key] && answers[q1Key] !== textData.q1.answer;
  const q2Correct = submitted && answers[q2Key] === textData.q2.answer;
  const q2Wrong = submitted && answers[q2Key] && answers[q2Key] !== textData.q2.answer;

  return (
    <div className="lesen2-text-section">
      <h3>{textData.subtitle}</h3>
      <p className="lesen2-header">{textData.header}</p>
      <div className="lesen2-text">
        {textData.text.split('\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className={`lesen2-question ${q1Correct ? 'correct' : ''} ${q1Wrong ? 'wrong' : ''}`}>
        <p className="lesen2-q-statement">{textData.q1.statement}</p>
        <div className="lesen2-rf-options">
          <label className={submitted && textData.q1.answer === 'richtig' ? 'correct-label' : ''}>
            <input
              type="radio"
              name={q1Key}
              value="richtig"
              checked={answers[q1Key] === 'richtig'}
              onChange={() => onAnswer(q1Key, 'richtig')}
              disabled={submitted}
            />
            Richtig
          </label>
          <label className={submitted && textData.q1.answer === 'falsch' ? 'correct-label' : ''}>
            <input
              type="radio"
              name={q1Key}
              value="falsch"
              checked={answers[q1Key] === 'falsch'}
              onChange={() => onAnswer(q1Key, 'falsch')}
              disabled={submitted}
            />
            Falsch
          </label>
        </div>
      </div>

      <div className={`lesen2-question ${q2Correct ? 'correct' : ''} ${q2Wrong ? 'wrong' : ''}`}>
        <p className="lesen2-q-statement">{textData.q2.statement}</p>
        <div className="lesen2-abc-options">
          {textData.q2.options.map((opt, i) => {
            const letter = ['a', 'b', 'c'][i];
            return (
              <label key={letter} className={submitted && textData.q2.answer === letter ? 'correct-label' : ''}>
                <input
                  type="radio"
                  name={q2Key}
                  value={letter}
                  checked={answers[q2Key] === letter}
                  onChange={() => onAnswer(q2Key, letter)}
                  disabled={submitted}
                />
                {letter}) {opt}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LesenTeil2Page() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const variant = lesenTeil2Variants[variantIndex];

  const score = useMemo(() => {
    if (!submitted) return 0;
    let s = 0;
    if (answers.t1_q1 === variant.text1.q1.answer) s++;
    if (answers.t1_q2 === variant.text1.q2.answer) s++;
    if (answers.t2_q1 === variant.text2.q1.answer) s++;
    if (answers.t2_q2 === variant.text2.q2.answer) s++;
    return s;
  }, [submitted, answers, variant]);

  const handleAnswer = (key, value) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const allAnswered = answers.t1_q1 && answers.t1_q2 && answers.t2_q1 && answers.t2_q2;

  const handleSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
  };

  const handleNext = () => {
    setVariantIndex((variantIndex + 1) % lesenTeil2Variants.length);
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
        <h1>Lesen Teil 2</h1>
        <div className="lesen-variant-nav">
          {lesenTeil2Variants.map((v, i) => (
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

      <p className="lesen-subtitle">Variante {variantIndex + 1} / {lesenTeil2Variants.length} — Lesen Sie die Texte und beantworten Sie die Fragen.</p>

      <div className="lesen2-columns">
        <TextBlock
          textData={variant.text1}
          prefix="t1"
          answers={answers}
          submitted={submitted}
          onAnswer={handleAnswer}
        />
        <TextBlock
          textData={variant.text2}
          prefix="t2"
          answers={answers}
          submitted={submitted}
          onAnswer={handleAnswer}
        />
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

export default LesenTeil2Page;
