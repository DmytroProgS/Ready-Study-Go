import React from 'react';
import { Link } from 'react-router-dom';
import './B2Page.css';

function GrammarPage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">Grammatiktraining</h1>
      <div className="b2-sections">
        <Link to="/word-trainer" className="b2-card b2-card--ready">
          <span className="b2-card__icon">🎓</span>
          <span className="b2-card__label">Worttrainer</span>
          <span className="b2-card__pig">✨</span>
        </Link>
        <Link to="/grammar/praep/current" className="b2-card b2-card--ready">
          <span className="b2-card__icon">📝</span>
          <span className="b2-card__label">Präpositionen – aktuelle Lernliste</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/grammar/praep/extra" className="b2-card b2-card--ready">
          <span className="b2-card__icon">📚</span>
          <span className="b2-card__label">Präpositionen – nach Häufigkeit</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
      <Link to="/" className="back-link">← Zurück</Link>
    </div>
  );
}

export default GrammarPage;
