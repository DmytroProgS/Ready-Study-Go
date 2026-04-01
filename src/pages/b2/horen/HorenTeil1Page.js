import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import horenTeil1Variants from '../../../data/horenTeil1Data';
import '../../../assets/styles/lesen.css';

function HorenTeil1Page() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const variant = horenTeil1Variants[variantIndex];
  const allQuestions = useMemo(() => {
    const list = [];
    variant.sections.forEach((section, si) => {
      section.questions.forEach((q, qi) => {
        list.push({ ...q, key: si + '-' + qi });
        if (q.alts) {
          q.alts.forEach((alt, ai) => {
            list.push({
              number: q.number,
              type: q.type === 'richtig-falsch' ? 'richtig-falsch' : (alt.options ? 'abc' : 'richtig-falsch'),
              statement: alt.statement,
              options: alt.options || undefined,
              answer: alt.answer,
              key: si + '-' + qi + '-alt-' + ai
            });
          });
        }
      });
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
    const nextIndex = (variantIndex + 1) % horenTeil1Variants.length;
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
        <h1>H&ouml;ren Teil 1</h1>
        <div className="lesen-variant-nav">
          {horenTeil1Variants.map((v, i) => (
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
        Variante {variant.label} / {horenTeil1Variants.length} &mdash; H&ouml;ren Sie die Gespr&auml;che und beantworten Sie die Fragen.
      </p>

      {variant.sections.map((section, si) => (
        <div key={si} style={{ marginBottom: '28px' }}>
          <h3 style={{ marginBottom: '8px' }}>{section.title}</h3>

          <a
            href={section.audioUrl}
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

          {section.questions.map((q, qi) => {
            const items = [{ ...q, key: si + '-' + qi }];
            if (q.alts) {
              q.alts.forEach((alt, ai) => {
                items.push({
                  number: q.number,
                  type: q.type === 'richtig-falsch' ? 'richtig-falsch' : (alt.options ? 'abc' : 'richtig-falsch'),
                  statement: alt.statement,
                  options: alt.options || undefined,
                  answer: alt.answer,
                  key: si + '-' + qi + '-alt-' + ai
                });
              });
            }

            return items.map((item) => {
              const isCorrect = submitted && answers[item.key] === item.answer;
              const isWrong = submitted && answers[item.key] && answers[item.key] !== item.answer;

              return (
                <div key={item.key} className={'lesen2-question' + (isCorrect ? ' correct' : '') + (isWrong ? ' wrong' : '')}>
                  <p className="lesen2-q-statement">{item.number}. {item.statement}</p>

                  {item.type === 'richtig-falsch' && (
                    <div className="lesen2-rf-options">
                      <label className={submitted && item.answer === 'richtig' ? 'correct-label' : ''}>
                        <input
                          type="radio"
                          name={item.key}
                          value="richtig"
                          checked={answers[item.key] === 'richtig'}
                          onChange={() => handleAnswer(item.key, 'richtig')}
                          disabled={submitted}
                        />
                        Richtig
                      </label>
                      <label className={submitted && item.answer === 'falsch' ? 'correct-label' : ''}>
                        <input
                          type="radio"
                          name={item.key}
                          value="falsch"
                          checked={answers[item.key] === 'falsch'}
                          onChange={() => handleAnswer(item.key, 'falsch')}
                          disabled={submitted}
                        />
                        Falsch
                      </label>
                    </div>
                  )}

                  {item.type === 'abc' && item.options && (
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
            });
          })}
        </div>
      ))}

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

export default HorenTeil1Page;
