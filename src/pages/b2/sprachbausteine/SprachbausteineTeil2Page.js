import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import variants from '../../../data/sprachbausteineTeil2Data';
import '../../../assets/styles/sprachbausteine.css';

const GAPS = [52, 53, 54, 55, 56, 57];

function SprachbausteineTeil2Page() {
  const [vi, setVi] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const v = variants[vi];

  const score = useMemo(() => {
    if (!submitted) return 0;
    return GAPS.reduce((s, g) => s + (answers[g] === v.gaps[g].answer ? 1 : 0), 0);
  }, [submitted, answers, v]);

  const handleSelect = (gap, value) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [gap]: value || undefined }));
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => { setAnswers({}); setSubmitted(false); };
  const handleGoTo = (i) => { setVi(i); setAnswers({}); setSubmitted(false); };

  const allAnswered = GAPS.every(g => answers[g]);

  const renderText = () => {
    const parts = v.text.split(/(__\d{2}__)/);
    return parts.map((part, i) => {
      const match = part.match(/^__(\d{2})__$/);
      if (!match) return <span key={i}>{part}</span>;
      const gap = parseInt(match[1]);
      const gapData = v.gaps[gap];
      const userAns = answers[gap];
      const correct = gapData.answer;
      const isCorrect = submitted && userAns === correct;
      const isWrong = submitted && userAns !== correct;
      return (
        <span key={i}>
          <span className="sb-gap-num">[{gap}]</span>
          <select
            className={`sb-gap-select ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
            value={userAns || ''}
            onChange={e => handleSelect(gap, e.target.value)}
            disabled={submitted}
          >
            <option value="">— виберіть —</option>
            {gapData.options.map((opt, idx) => (
              <option key={opt} value={opt}>{String.fromCharCode(97 + idx)}) {opt}</option>
            ))}
          </select>
          {isWrong && <span className="sb-correct-hint">→ {correct}</span>}
        </span>
      );
    });
  };

  return (
    <div className="sb-page">
      <div className="sb-header">
        <Link to="/b2/sprachbausteine" className="back-link">← Назад до Sprachbausteine</Link>
        <h1>Sprachbausteine Teil 2</h1>
        <div className="sb-variant-nav">
          {variants.map((_, i) => (
            <button key={i} onClick={() => handleGoTo(i)} className={`sb-variant-btn ${i === vi ? 'active' : ''}`}>
              {_.label || (i + 1)}
            </button>
          ))}
        </div>
      </div>

      <p className="sb-subtitle">Variante {vi + 1} — {v.title}</p>

      <div className="sb-text">
        <div className="sb-title-bold">{v.title}</div>
        {renderText()}
      </div>

      {submitted && (
        <div className={`sb-score ${score === 6 ? 'perfect' : 'partial'}`}>
          Результат: {score} / 6 {score === 6 ? '🎉' : ''}
        </div>
      )}

      <div className="sb-actions">
        {!submitted ? (
          <button className="sb-btn sb-btn--check" onClick={handleSubmit} disabled={!allAnswered}>
            Перевірити
          </button>
        ) : (
          <>
            <button className="sb-btn sb-btn--next" onClick={() => handleGoTo((vi + 1) % variants.length)}>
              Наступний варіант
            </button>
            <button className="sb-btn sb-btn--reset" onClick={handleReset}>
              Спробувати ще раз
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default SprachbausteineTeil2Page;
