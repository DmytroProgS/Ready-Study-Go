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
      </div>
      <Link to="/" className="back-link">&larr; Назад</Link>
    </div>
  );
}

export default HomeworkPage;
