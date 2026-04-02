import React from 'react';
import { Link } from 'react-router-dom';
import './B2Page.css';

function HomePage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">Ready Study Go!</h1>

      <h2 className="b2-section-title">Тренування граматики</h2>
      <div className="b2-sections">
        <Link to="/grammar" className="b2-card b2-card--ready">
          <span className="b2-card__icon">📝</span>
          <span className="b2-card__label">Präpositionen</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>

      <h2 className="b2-section-title">Підготовка до іспитів</h2>
      <div className="b2-sections">
        <Link to="/b2" className="b2-card b2-card--ready">
          <span className="b2-card__icon">🎓</span>
          <span className="b2-card__label">Підготовка до B2</span>
          <span className="b2-card__pig">🐷</span>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
