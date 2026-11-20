import React, { useState } from 'react';
import './Quiz.css';

// Переиспользуваний квіз із варіантами відповідей.
// questions: [{ question, questionUa, options: [{ de, ua }], correct: індекс }]
// Переклад (ua) показується як підказка при наведенні на питання/варіант.
function Quiz({ questions }) {
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!questions || questions.length === 0) {
    return <p className="quiz-empty">Hier gibt es noch keine Fragen.</p>;
  }

  const q = questions[current];
  const isLast = current === questions.length - 1;

  const pick = (i) => {
    if (picked !== null) return; // вже відповіли
    setPicked(i);
    if (i === q.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (isLast) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setCurrent(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((100 * score) / questions.length);
    return (
      <div className="quiz-result">
        <p className="quiz-result__score">{score} / {questions.length} ({pct}%)</p>
        <p className="quiz-result__msg">
          {pct >= 80 ? '🎉 Sehr gut!' : pct >= 50 ? '👍 Gut gemacht! Wiederhole die Übung noch einmal.' : '💪 Übe noch ein bisschen weiter.'}
        </p>
        <button className="quiz-btn quiz-btn--primary" onClick={restart}>Erneut versuchen</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <p className="quiz-progress">Frage {current + 1} / {questions.length}</p>

      <div className="quiz-question quiz-hoverable" tabIndex={0}>
        {q.question}
        {q.questionUa && <span className="quiz-tip">{q.questionUa}</span>}
      </div>

      <div className={`quiz-options ${picked !== null ? 'is-answered' : ''}`}>
        {q.options.map((opt, i) => {
          let cls = 'quiz-option quiz-hoverable';
          if (picked !== null) {
            if (i === q.correct) cls += ' is-correct';
            else if (i === picked) cls += ' is-wrong';
          }
          return (
            <button key={i} className={cls} onClick={() => pick(i)}>
              {opt.de}
              {opt.ua && <span className="quiz-tip">{opt.ua}</span>}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <button className="quiz-btn quiz-btn--primary" onClick={next}>
          {isLast ? 'Abschließen' : 'Weiter →'}
        </button>
      )}
    </div>
  );
}

export default Quiz;
