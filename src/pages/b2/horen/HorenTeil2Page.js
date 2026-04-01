import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import horenTeil2Variants from '../../../data/horenTeil2Data';
import '../../../assets/styles/lesen.css';

function HorenTeil2Page() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const variant = horenTeil2Variants[variantIndex];
  const totalQuestions = variant.sections.length;

  const usedLetters = useMemo(() => {
    const used = {};
    Object.values(answers).forEach(v => { if (v) used[v] = true; });
    return used;
  }, [answers]);

  const score = useMemo(() => {
    if (!submitted) return 0;
    let s = 0;
    variant.sections.forEach((sec) => {
      if (answers[sec.number] === sec.answer) s++;
    });
    return s;
  }, [submitted, answers, variant]);

  const handleAnswer = (number, value) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [number]: value }));
  };

  const handleSubmit = () => {
    const answered = variant.sections.filter(s => answers[s.number]).length;
    if (answered < totalQuestions) return;
    setSubmitted(true);
  };

  const handleNext = () => {
    const nextIndex = (variantIndex + 1) % horenTeil2Variants.length;
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

  const allAnswered = variant.sections.filter(s => answers[s.number]).length >= totalQuestions;
  const letters = variant.options.map(o => o.charAt(0));

  return (
    <div className="lesen-page">
      <div className="lesen-header">
        <Link to="/b2/horen" className="back-link">&larr; Назад до H&ouml;ren</Link>
        <h1>H&ouml;ren Teil 2</h1>
        <div className="lesen-variant-nav">
          {horenTeil2Variants.map((v, i) => (
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
        Variante {variant.label} / {horenTeil2Variants.length} &mdash; Ordnen Sie jeder Aussage ein Gespr&auml;ch zu.
      </p>

      {(variant.audioUrl || variant.audioUrls) && (
        <div style={{ marginBottom: '16px' }}>
          {variant.audioUrl && (
            <a
              href={variant.audioUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#4a90d9', textDecoration: 'none', fontWeight: 'bold' }}
            >
              &#x1F50A; Audio abspielen
            </a>
          )}
        </div>
      )}

      {variant.sections.map((section) => {
        const isCorrect = submitted && answers[section.number] === section.answer;
        const isWrong = submitted && answers[section.number] && answers[section.number] !== section.answer;
        const audioUrl = variant.audioUrls ? variant.audioUrls[section.number] : null;

        return (
          <div key={section.number} style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '8px' }}>Nummer {section.number}</h3>

            {audioUrl && (
              <a
                href={audioUrl}
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
              {section.dialogue.split('\n').map((line, li) => {
                const colonIdx = line.indexOf(':');
                if (colonIdx > 0 && colonIdx < 30) {
                  const speaker = line.substring(0, colonIdx + 1);
                  const rest = line.substring(colonIdx + 1);
                  return <p key={li} style={{ margin: '2px 0' }}><strong>{speaker}</strong>{rest}</p>;
                }
                return <p key={li} style={{ margin: '2px 0' }}>{line}</p>;
              })}
            </div>

            <div className={'lesen2-question' + (isCorrect ? ' correct' : '') + (isWrong ? ' wrong' : '')}>
              <p className="lesen2-q-statement">Welche Aussage passt?</p>
              <div className="lesen2-abc-options">
                {variant.options.map((opt, oi) => {
                  const letter = letters[oi];
                  const isUsedElsewhere = usedLetters[letter] && answers[section.number] !== letter;
                  return (
                    <label
                      key={letter}
                      className={submitted && section.answer === letter ? 'correct-label' : ''}
                      style={isUsedElsewhere && !submitted ? { opacity: 0.5 } : {}}
                    >
                      <input
                        type="radio"
                        name={'q-' + section.number}
                        value={letter}
                        checked={answers[section.number] === letter}
                        onChange={() => handleAnswer(section.number, letter)}
                        disabled={submitted}
                      />
                      {opt}
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

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

export default HorenTeil2Page;
