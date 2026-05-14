import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeworkSet3Page.css';

const questions = [
  {
    id: 1,
    title: 'Виберіть дієслово для наступних слів:',
    phrases: [
      'einen Plan',
      'einen Job',
      'eine Wohnung',
    ],
    answer: 'aufgeben',
  },
  {
    id: 2,
    title: 'Виберіть дієслово для наступних слів:',
    phrases: [
      'eine Firma',
      'eine Familie',
      'eine WG',
    ],
    answer: 'gründen',
  },
  {
    id: 3,
    title: 'Виберіть дієслово для наступних слів:',
    phrases: [
      'seinen Partner',
      'aus Liebe',
      'zum zweiten Mal',
    ],
    answer: 'heiraten',
  },
  {
    id: 4,
    title: 'Виберіть дієслово для наступних слів:',
    phrases: [
      'sich um einen Studienplatz',
      'sich um ein Stipendium',
      'sich um eine Stelle',
    ],
    answer: 'bewerben',
  },
  {
    id: 5,
    title: 'Виберіть дієслово для наступних слів:',
    phrases: [
      'sich an eine neue Umgebung',
      'sich an einen Gedanken',
      'sich an eine Situation',
    ],
    answer: 'gewöhnen',
  },
  {
    id: 6,
    title: 'Виберіть дієслово для наступних слів:',
    phrases: [
      'sich von seinen Gästen',
      'sich in den Urlaub',
      'sich mit einem Kuss',
    ],
    answer: 'verabschieden',
  },
  {
    id: 7,
    title: 'Виберіть дієслово для наступних слів:',
    phrases: [
      'in ein anderes Zimmer',
      'in eine größere Wohnung',
      'in ein neues Büro',
    ],
    answer: 'umziehen',
  },
  {
    id: 8,
    title: 'Виберіть дієслово для наступних слів:',
    phrases: [
      'ein neues Talent',
      'einen Fehler',
      'ein Geheimnis',
    ],
    answer: 'entdecken',
  },
];

const verbs = [
  'aufgeben',
  'bewerben',
  'entdecken',
  'gewöhnen',
  'gründen',
  'heiraten',
  'umziehen',
  'verabschieden',
];

function HomeworkSet3Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVerb, setSelectedVerb] = useState('');
  const [feedback, setFeedback] = useState('');

  const currentQuestion = questions[currentIndex];

  const handleSelect = (verb) => {
    setSelectedVerb(verb);
    setFeedback(verb === currentQuestion.answer ? 'Вірно!' : 'Ні, не вірно.');
  };

  const nextQuestion = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setSelectedVerb('');
      setFeedback('');
    }
  };

  const prevQuestion = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
      setSelectedVerb('');
      setFeedback('');
    }
  };

  return (
    <div className="homework-set3-page">
      <h1 className="homework-set3-page__title">Заняття 11.05</h1>
      <p className="homework-set3-page__intro">
        У цій вправі обери одне дієслово, яке підходить до всіх трьох виразів у блоці.
      </p>

      <div className="homework-set3-card">
        <div className="homework-set3-card__title">Питання {currentQuestion.id} з {questions.length}</div>
        <div className="homework-set3-phrases">
          {currentQuestion.phrases.map((phrase) => (
            <span key={phrase} className="homework-set3-phrase">{phrase}</span>
          ))}
        </div>
      </div>

      <div className="homework-set3-options">
        {verbs.map((verb) => (
          <button
            key={verb}
            type="button"
            className={`homework-set3-btn ${selectedVerb === verb ? 'homework-set3-btn--selected' : ''}`}
            onClick={() => handleSelect(verb)}
          >
            {verb}
          </button>
        ))}
      </div>

      {feedback && (
        <div className={`homework-set3-feedback ${feedback === 'Вірно!' ? 'homework-set3-feedback--correct' : 'homework-set3-feedback--wrong'}`}>
          {feedback}
        </div>
      )}

      <div className="homework-set3-nav">
        <button type="button" className="homework-set3-nav__btn" onClick={prevQuestion} disabled={currentIndex === 0}>
          &larr; Назад
        </button>
        <button type="button" className="homework-set3-nav__btn" onClick={nextQuestion} disabled={currentIndex === questions.length - 1}>
          Далі &rarr;
        </button>
      </div>

      <Link to="/homework" className="back-link">&larr; Назад</Link>
    </div>
  );
}

export default HomeworkSet3Page;
