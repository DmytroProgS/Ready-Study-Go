import React from 'react';
import { Link } from 'react-router-dom';
import './B2Page.css';

function B2Page() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">B2-Prüfungsvorbereitung</h1>
      <div className="b2-sections">
        <Link to="/b2/horen" className="b2-card b2-card--ready">
          <span className="b2-card__icon">🎧</span>
          <span className="b2-card__label">Hören</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/b2/lesen" className="b2-card b2-card--ready">
          <span className="b2-card__icon">📖</span>
          <span className="b2-card__label">Lesen</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/b2/sprachbausteine" className="b2-card b2-card--ready">
          <span className="b2-card__icon">✏️</span>
          <span className="b2-card__label">Sprachbausteine</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/b2/schreiben" className="b2-card b2-card--soon">
          <span className="b2-card__icon">✍️</span>
          <span className="b2-card__label">Schreiben</span>
        </Link>
        <Link to="/b2/sprechen" className="b2-card b2-card--soon">
          <span className="b2-card__icon">🗣️</span>
          <span className="b2-card__label">Sprechen</span>
        </Link>
      </div>
      <p className="b2-hint">🐷 — Glücksschwein! Diese Bereiche sind verfügbar</p>
      <Link to="/" className="back-link">← Zurück</Link>
    </div>
  );
}

export default B2Page;
