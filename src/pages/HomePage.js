import React from 'react';
import { Link } from 'react-router-dom';
import './B2Page.css';

function HomePage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">Ready Study Go!</h1>

      <h2 className="b2-section-title">Selbststudium</h2>
      <div className="b2-sections">
        <Link to="/self-study" className="b2-card b2-card--ready">
          <span className="b2-card__icon">📚</span>
          <span className="b2-card__label">Selbststudium</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>

      <h2 className="b2-section-title">Spiele zu zweit</h2>
      <div className="b2-sections">
        <Link to="/deutsch-duell" className="b2-card b2-card--ready" style={{ background: 'linear-gradient(110deg, #e5efff, #e8f8ef)', borderLeftColor: '#3859c9' }}>
          <span className="b2-card__icon">🎮</span>
          <span className="b2-card__label">Deutsch Duell</span>
          <span className="b2-card__pig">🏆</span>
        </Link>
        <Link to="/turn-taking" className="b2-card b2-card--ready" style={{ background: 'linear-gradient(110deg, #f0f4ff, #f4efff)', borderLeftColor: '#8b83c8' }}>
          <span className="b2-card__icon">🔄</span>
          <span className="b2-card__label">Sätze im Wechsel</span>
          <span className="b2-card__pig">🗂️</span>
        </Link>
        <Link to="/dialogue" className="b2-card b2-card--ready" style={{ background: 'linear-gradient(110deg, #e7faf1, #e5f5ff)', borderLeftColor: '#31a977' }}>
          <span className="b2-card__icon">💬</span>
          <span className="b2-card__label">Dialog</span>
          <span className="b2-card__pig">🗣️</span>
        </Link>
      </div>

      <h2 className="b2-section-title">Prüfungsvorbereitung</h2>
      <div className="b2-sections">
        <Link to="/c1" className="b2-card b2-card--ready">
          <span className="b2-card__icon">🏆</span>
          <span className="b2-card__label">C1-Prüfungsvorbereitung</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
        <Link to="/b2" className="b2-card b2-card--ready">
          <span className="b2-card__icon">🎓</span>
          <span className="b2-card__label">B2-Prüfungsvorbereitung</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>

      <h2 className="b2-section-title b2-section-title--star">⭐ Mein Satztrainer</h2>
      <div className="b2-sections">
        <Link to="/trainer" className="b2-card b2-card--featured">
          <span className="b2-card__badge">NEU</span>
          <span className="b2-card__icon">🧠</span>
          <span className="b2-card__label">Satztrainer</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
      <div className="b2-sections">
        <Link to="/trainer-voice" className="b2-card b2-card--featured">
          <span className="b2-card__badge">NEU</span>
          <span className="b2-card__icon">🎤</span>
          <span className="b2-card__label">Satztrainer mit Spracheingabe</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
      <div className="b2-sections">
        <Link to="/mein-deutsch-mind-map" className="b2-card b2-card--ready" style={{ background: 'linear-gradient(110deg, #dce9ff, #e9dcff)', borderLeftColor: '#6552cf' }}>
          <span className="b2-card__icon">🧠</span>
          <span className="b2-card__label">Mein Deutsch Mind Map</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>

      <h2 className="b2-section-title">Grammatiktraining</h2>
      <div className="b2-sections">
        <Link to="/grammar" className="b2-card b2-card--ready">
          <span className="b2-card__icon">📝</span>
          <span className="b2-card__label">Präpositionen</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>

      <h2 className="b2-section-title">Hausaufgaben von Olga und Margot</h2>
      <div className="b2-sections">
        <Link to="/homework" className="b2-card b2-card--ready">
          <span className="b2-card__icon">📓</span>
          <span className="b2-card__label">Hausaufgaben</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>

      <h2 className="b2-section-title">Redemittel</h2>
      <div className="b2-sections">
        <Link to="/phrases" className="b2-card b2-card--ready">
          <span className="b2-card__icon">💬</span>
          <span className="b2-card__label">Redemittel für verschiedene Anlässe</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
