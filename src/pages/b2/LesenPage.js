import React from 'react';
import { Link } from 'react-router-dom';
import '../B2Page.css';

function LesenPage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">📖 Lesen</h1>
      <div className="b2-sections">
        <Link to="/b2/lesen/teil1" className="b2-card b2-card--ready">
          <span className="b2-card__num">1</span>
          <span className="b2-card__label">Teil 1 — Textzuordnung</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/b2/lesen/teil2" className="b2-card b2-card--ready">
          <span className="b2-card__num">2</span>
          <span className="b2-card__label">Teil 2 — Lückentext</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/b2/lesen/teil3" className="b2-card b2-card--ready">
          <span className="b2-card__num">3</span>
          <span className="b2-card__label">Teil 3 — Meinungen</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/b2/lesen/teil4" className="b2-card b2-card--ready">
          <span className="b2-card__num">4</span>
          <span className="b2-card__label">Teil 4 — Kommentare</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
      <Link to="/b2" className="back-link">← Назад</Link>
    </div>
  );
}

export default LesenPage;
