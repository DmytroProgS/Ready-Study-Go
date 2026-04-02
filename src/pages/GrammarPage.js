import React from 'react';
import { Link } from 'react-router-dom';
import './B2Page.css';

function GrammarPage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">Тренування граматики</h1>
      <div className="b2-sections">
        <Link to="/grammar/praep/current" className="b2-card b2-card--ready">
          <span className="b2-card__icon">📝</span>
          <span className="b2-card__label">Präpositionen — Вчимо зараз</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/grammar/praep/extra" className="b2-card b2-card--soon">
          <span className="b2-card__icon">📚</span>
          <span className="b2-card__label">Präpositionen — Додати після</span>
        </Link>
      </div>
      <Link to="/" className="back-link">← Назад</Link>
    </div>
  );
}

export default GrammarPage;
