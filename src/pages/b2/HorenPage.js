import React from 'react';
import { Link } from 'react-router-dom';
import '../B2Page.css';

function HorenPage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">🎧 Hören</h1>
      <div className="b2-sections">
        <Link to="/b2/horen/teil1" className="b2-card b2-card--ready">
          <span className="b2-card__num">1</span>
          <span className="b2-card__label">Teil 1 — Kurze Aussagen</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/b2/horen/teil2" className="b2-card b2-card--ready">
          <span className="b2-card__num">2</span>
          <span className="b2-card__label">Teil 2 — Interview</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/b2/horen/teil3" className="b2-card b2-card--ready">
          <span className="b2-card__num">3</span>
          <span className="b2-card__label">Teil 3 — Diskussion</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/b2/horen/teil4" className="b2-card b2-card--ready">
          <span className="b2-card__num">4</span>
          <span className="b2-card__label">Teil 4 — Nachrichten</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
      <Link to="/b2" className="back-link">← Назад</Link>
    </div>
  );
}

export default HorenPage;