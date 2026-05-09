import React from 'react';
import { Link } from 'react-router-dom';
import '../B2Page.css';

function HomeworkSet2MenuPage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">Заняття 04.05</h1>
      <div className="b2-sections">
        <Link to="/homework/set/2/words" className="b2-card b2-card--ready">
          <span className="b2-card__icon">📚</span>
          <span className="b2-card__label">Вивчення слів</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/homework/set/2/exercises" className="b2-card b2-card--ready">
          <span className="b2-card__icon">✏️</span>
          <span className="b2-card__label">Вправи</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
      <Link to="/homework" className="back-link">&larr; Назад</Link>
    </div>
  );
}

export default HomeworkSet2MenuPage;
