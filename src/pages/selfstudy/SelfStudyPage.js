import React from 'react';
import { Link } from 'react-router-dom';
import '../B2Page.css';

function SelfStudyPage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">Самостійні заняття</h1>
      <div className="b2-sections">
        <Link to="/self-study/05-10" className="b2-card b2-card--ready">
          <span className="b2-card__icon">📅</span>
          <span className="b2-card__label">Заняття 05.10</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
      <Link to="/" className="back-link">&larr; Назад</Link>
    </div>
  );
}

export default SelfStudyPage;
