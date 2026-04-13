import React from 'react';
import { Link } from 'react-router-dom';
import '../B2Page.css';

function SchreibenPage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">✍️ Schreiben</h1>
      <div className="b2-sections">
        <Link to="/b2/schreiben/beschwerde" className="b2-card b2-card--ready">
          <span className="b2-card__num">1</span>
          <span className="b2-card__label">Beschwerde</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
      <Link to="/b2" className="back-link">← Назад</Link>
    </div>
  );
}

export default SchreibenPage;
