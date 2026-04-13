import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import beschwerdeVariants from '../../../data/beschwerdeData';
import '../../../assets/styles/beschwerde.css';

const LETTERS = ['a', 'b', 'c'];

function QuestionBlock({ question, qKey, answer, submitted, onAnswer }) {
  return (
    <div className="beschwerde-question">
      <p className="beschwerde-q-statement">{question.statement}</p>
      <div className="beschwerde-options">
        {question.options.map((opt, i) => {
          const letter = LETTERS[i];
          const isCorrect = submitted && question.answer === letter;
          const isUserWrong = submitted && answer === letter && letter !== question.answer;
          const cls = `beschwerde-option ${isCorrect ? 'correct-label' : ''} ${isUserWrong ? 'user-wrong' : ''}`;
          return (
            <label key={letter} className={cls}>
              <input
                type="radio"
                name={qKey}
                value={letter}
                checked={answer === letter}
                onChange={() => onAnswer(qKey, letter)}
                disabled={submitted}
              />
              <span>{letter}) {opt}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

function BeschwerdePage() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const variant = beschwerdeVariants[variantIndex];

  const allQuestionKeys = useMemo(() => {
    const keys = [];
    variant.questionSets.forEach((set, si) => {
      if (set.q19) keys.push({ key: `s${si}_q19`, q: set.q19 });
      if (set.q20) keys.push({ key: `s${si}_q20`, q: set.q20 });
    });
    return keys;
  }, [variant]);

  const score = useMemo(() => {
    if (!submitted) return 0;
    return allQuestionKeys.reduce(
      (s, { key, q }) => s + (answers[key] === q.answer ? 1 : 0),
      0
    );
  }, [submitted, answers, allQuestionKeys]);

  const total = allQuestionKeys.length;
  const allAnswered = allQuestionKeys.every(({ key }) => answers[key]);

  const handleAnswer = (key, value) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
  };

  const handleGoTo = (i) => {
    setVariantIndex(i);
    setAnswers({});
    setSubmitted(false);
  };

  const handleNext = () => handleGoTo((variantIndex + 1) % beschwerdeVariants.length);
  const handleReset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <div className="beschwerde-page">
      <div className="beschwerde-header">
        <Link to="/b2/schreiben" className="back-link">← Назад до Schreiben</Link>
        <h1>Beschwerde</h1>
        <div className="beschwerde-variant-nav">
          {beschwerdeVariants.map((v, i) => (
            <button
              key={v.id}
              onClick={() => handleGoTo(i)}
              className={`beschwerde-variant-btn ${i === variantIndex ? 'active' : ''}`}
              title={v.title}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <p className="beschwerde-subtitle">
        Variante {variantIndex + 1} / {beschwerdeVariants.length} — Lesen Sie die Texte und beantworten Sie die Fragen.
      </p>

      <div className="beschwerde-title">{variant.title}</div>

      <div className="beschwerde-columns">
        <div className="beschwerde-texts">
          {variant.texts.map((t, i) => (
            <div className="beschwerde-text-block" key={i}>
              <div className="beschwerde-text-role">{t.role}</div>
              <div className="beschwerde-text-content">{t.content}</div>
            </div>
          ))}
        </div>

        <div className="beschwerde-questions">
          {variant.questionSets.map((set, si) => (
            <div className="beschwerde-qset" key={si}>
              {(set.label || variant.questionSets.length > 1) && (
                <div className="beschwerde-qset-label">
                  {set.label || `Variante ${si + 1}`}
                </div>
              )}
              {set.q19 && (
                <QuestionBlock
                  question={set.q19}
                  qKey={`s${si}_q19`}
                  answer={answers[`s${si}_q19`]}
                  submitted={submitted}
                  onAnswer={handleAnswer}
                />
              )}
              {set.q20 && (
                <QuestionBlock
                  question={set.q20}
                  qKey={`s${si}_q20`}
                  answer={answers[`s${si}_q20`]}
                  submitted={submitted}
                  onAnswer={handleAnswer}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="beschwerde-actions">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="beschwerde-btn beschwerde-btn-check"
          >
            Перевірити
          </button>
        ) : (
          <>
            <div className={`beschwerde-result ${score === total ? 'perfect' : ''}`}>
              Результат: {score} / {total} {score === total ? '🎉' : ''}
            </div>
            <button onClick={handleNext} className="beschwerde-btn beschwerde-btn-next">
              Наступний варіант
            </button>
            <button onClick={handleReset} className="beschwerde-btn beschwerde-btn-retry">
              Спробувати ще раз
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BeschwerdePage;
