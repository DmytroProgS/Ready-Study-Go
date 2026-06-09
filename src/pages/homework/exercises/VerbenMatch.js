import React, { useState } from 'react';
import './VerbenMatch.css';

const questions = [
  { id: 1, phrases: ['seine Heimat', 'seine Familie', 'die gewohnte Umgebung'], answer: 'verlassen' },
  { id: 2, phrases: ['Heimweh', 'Hoffnung', 'viele Möglichkeiten'], answer: 'haben' },
  { id: 3, phrases: ['seine Chancen', 'seine Sprachkenntnisse', 'sein Deutsch'], answer: 'verbessern' },
  { id: 4, phrases: ['aus Kolumbien', 'aus der Türkei', 'von den Philippinen'], answer: 'stammen' },
  { id: 5, phrases: ['sich fremd', 'sicher', 'wie zu Hause'], answer: 'fühlen' },
  { id: 6, phrases: ['sich auf einer Insel', 'in der Ukraine', 'in den USA'], answer: 'aufhalten' },
];

const verbs = ['aufhalten', 'fühlen', 'haben', 'stammen', 'verbessern', 'verlassen'];

function VerbenMatch() {
  const [answers, setAnswers] = useState({});
  const [index, setIndex] = useState(0);

  const current = questions[index];
  const selected = answers[current.id] || '';
  const isCorrect = selected === current.answer;
  const solvedCount = questions.filter((q) => answers[q.id] === q.answer).length;

  const handleSelect = (verb) => {
    setAnswers((prev) => ({ ...prev, [current.id]: verb }));
  };

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(questions.length - 1, i + 1));

  return (
    <div className="vmatch">
      <p className="cloze-page__instruction">
        Finden Sie das passende Verb. Оберіть одне дієслово, яке підходить до всіх трьох виразів у блоці.
      </p>

      <div className="vmatch-pool">
        {verbs.map((verb) => {
          const isSolved = questions.some((q) => answers[q.id] === verb && q.answer === verb);
          return (
            <button
              key={verb}
              type="button"
              className={
                'vmatch-pool__verb' +
                (selected === verb ? (isCorrect ? ' is-correct' : ' is-wrong') : '') +
                (isSolved ? ' is-solved' : '')
              }
              onClick={() => handleSelect(verb)}
            >
              {verb}
            </button>
          );
        })}
      </div>

      <div className="vmatch-card">
        <div className="vmatch-card__head">
          Блок {current.id} з {questions.length}
          <span className="vmatch-card__score">розв'язано: {solvedCount}/{questions.length}</span>
        </div>
        <div className="vmatch-card__phrases">
          {current.phrases.map((p) => (
            <span key={p} className="vmatch-phrase">{p}</span>
          ))}
        </div>

        {selected && (
          <div className={`vmatch-feedback ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
            {isCorrect ? '✓ Вірно!' : '✗ Ні, спробуй інше дієслово.'}
          </div>
        )}
      </div>

      <div className="vmatch-nav">
        <button type="button" className="vmatch-nav__btn" onClick={prev} disabled={index === 0}>
          &larr; Назад
        </button>
        <button
          type="button"
          className="vmatch-nav__btn"
          onClick={next}
          disabled={index === questions.length - 1}
        >
          Далі &rarr;
        </button>
      </div>
    </div>
  );
}

export default VerbenMatch;
