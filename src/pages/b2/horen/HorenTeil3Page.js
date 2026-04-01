import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import horenTeil3Variants from '../../../data/horenTeil3Data';
import '../../../assets/styles/lesen.css';

function HorenTeil3Page() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const variant = horenTeil3Variants[variantIndex];

  const allQuestions = useMemo(() => {
    const list = [];
    variant.questions.forEach((q, qi) => {
      list.push({ ...q, key: 'q-' + qi });
      if (q.alts) {
        q.alts.forEach((alt, ai) => {
          list.push({
            number: q.number,
            type: 'abc',
            statement: alt.statement,
            options: alt.options,
            answer: alt.answer,
            key: 'q-' + qi + '-alt-' + ai
          });
        });
      }
    });
    return list;
  }, [variant]);

  const totalQuestions = allQuestions.length;

  const score = useMemo(() => {
    if (!submitted) return 0;
    let s = 0;
    allQuestions.forEach((q) => {
      if (answers[q.key] === q.answer) s++;
    });
    return s;
  }, [submitted, answers, allQuestions]);

  const handleAnswer = (key, value) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < totalQuestions) return;
    setSubmitted(true);
  };

  const handleNext = () => {
    const nextIndex = (variantIndex + 1) % horenTeil3Variants.length;
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

  const allAnswered = Object.keys(answers).length >= totalQuestions;

  return (
    <div className="lesen-page">
      <div className="lesen-header">
        <Link to="/b2/horen" className="back-link">&larr; Назад до H&ouml;ren</Link>
        <h1>H&ouml;ren Teil 3</h1>
        <div className="lesen-variant-nav">
          {horenTeil3Variants.map((v, i) => (
            <button
              key={v.id}
              onClick={() => handleGoToVariant(i)}
              className={'lesen-variant-btn' + (i === variantIndex ? ' active' : '')}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <p className="lesen-subtitle">
        Variante {variant.label} / {horenTeil3Variants.length} &mdash; {variant.title}
      </p>

      <div style={{ marginBottom: '28px' }}>
        {variant.audioUrl && (
          <a
            href={variant.audioUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginBottom: '8px',
              color: '#4a90d9',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            &#x1F50A; Audio abspielen
          </a>
        )}

        {variant.dialogue && (
          <div style={{
            marginBottom: '12px',
            padding: '12px',
            background: '#f9f9f9',
            borderLeft: '3px solid #c00',
            borderRadius: '4px',
            lineHeight: '1.6',
            color: '#444',
            textAlign: 'left'
          }}>
            {variant.dialogue.split('\n').map((line, li) => {
              const colonIdx = line.indexOf(':');
              if (colonIdx > 0 && colonIdx < 30) {
                const speaker = line.substring(0, colonIdx + 1);
                const rest = line.substring(colonIdx + 1);
                return <p key={li} style={{ margin: '2px 0' }}><strong>{speaker}</strong>{rest}</p>;
              }
              return <p key={li} style={{ margin: '2px 0' }}>{line}</p>;
            })}
          </div>
        )}

        {allQuestions.map((item) => {
          const isCorrect = submitted && answers[item.key] === item.answer;
          const isWrong = submitted && answers[item.key] && answers[item.key] !== item.answer;

          return (
            <div key={item.key} className={'lesen2-question' + (isCorrect ? ' correct' : '') + (isWrong ? ' wrong' : '')}>
              <p className="lesen2-q-statement">{item.number}. {item.statement}</p>

              {item.options && (
                <div className="lesen2-abc-options">
                  {item.options.map((opt, oi) => {
                    const letter = ['a', 'b', 'c'][oi];
                    return (
                      <label key={letter} className={submitted && item.answer === letter ? 'correct-label' : ''}>
                        <input
                          type="radio"
                          name={item.key}
                          value={letter}
                          checked={answers[item.key] === letter}
                          onChange={() => handleAnswer(item.key, letter)}
                          disabled={submitted}
                        />
                        {opt}
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
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
            <div className={'lesen-result' + (score === totalQuestions ? ' perfect' : '')}>
              Результат: {score} / {totalQuestions}
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

export default HorenTeil3Page;
