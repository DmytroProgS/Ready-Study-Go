import React from 'react';
import { Link } from 'react-router-dom';
import '../B2Page.css';
import './SelfStudy.css';

function SelfStudyPage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">Самостійні заняття</h1>

      <a
        className="treasure-link"
        href="https://drive.google.com/drive/folders/1HUeNMIMJJLCCDg75XKa8rHBFLP5SwS6I"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="treasure-link__icon">🍯</span>
        <span className="treasure-link__text">
          <span className="treasure-link__title">Скарби знань</span>
          <span className="treasure-link__sub">матеріали на Google Диску</span>
        </span>
        <span className="treasure-link__rainbow">🌈</span>
      </a>

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
