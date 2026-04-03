import React from 'react';
import { Link } from 'react-router-dom';
import '../B2Page.css';

function SprachbausteinePage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">✏️ Sprachbausteine</h1>
      <div className="b2-sections">
        <Link to="/b2/sprachbausteine/teil1" className="b2-card b2-card--ready">
          <span className="b2-card__num">1</span>
          <span className="b2-card__label">Teil 1 — Lückentext</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/b2/sprachbausteine/teil2" className="b2-card b2-card--ready">
          <span className="b2-card__num">2</span>
          <span className="b2-card__label">Teil 2 — Textbausteine</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
      <Link to="/b2" className="back-link">← Назад</Link>
    </div>
  );
}

export default SprachbausteinePage;
