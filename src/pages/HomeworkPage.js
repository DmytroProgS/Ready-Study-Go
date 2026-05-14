import React from 'react';
import { Link } from 'react-router-dom';
import './B2Page.css';

function HomeworkPage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">Домашні завдання від Ольги/Марго</h1>
      <div className="b2-sections">
        <Link to="/homework/set/1" className="b2-card b2-card--ready">
          <span className="b2-card__num">1</span>
          <span className="b2-card__label">Заняття 20.04</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/homework/set/2" className="b2-card b2-card--ready">
          <span className="b2-card__num">2</span>
          <span className="b2-card__label">Заняття 04.05</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/homework/set/3" className="b2-card b2-card--ready">
          <span className="b2-card__num">3</span>
          <span className="b2-card__label">Заняття 11.05</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/homework/feste-ausdruecke" className="b2-card b2-card--ready">
          <span className="b2-card__icon">💬</span>
          <span className="b2-card__label">Feste Ausdrücke</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
      <Link to="/" className="back-link">&larr; Назад</Link>
    </div>
  );
}

export default HomeworkPage;
