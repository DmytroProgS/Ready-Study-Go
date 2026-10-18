import React from 'react';
import { Link } from 'react-router-dom';
import './B2Page.css';

// Матеріали з групи для DTB C1 — Deutsch-Test für den Beruf C1 (ваш іспит)
const examSections = [
  { to: '/c1/dtb-lesen', icon: '📖', label: 'Lesen (Teil 1–4 + Beschwerde)' },
  { to: '/c1/dtb-horen', icon: '🎧', label: 'Hören (Teil 1–4)' },
  { to: '/c1/stellungnahme', icon: '📝', label: 'Stellungnahme (Schreiben)' },
  { to: '/c1/sprechen-dtb', icon: '🗣️', label: 'Sprechen (Teil 1, 2, 3)' },
];

// Übungstest telc C1 Beruf — додаткова практика
const uebungstestSections = [
  { to: '/c1/info', icon: '💡', label: 'Про іспит і поради' },
  { to: '/c1/lesen', icon: '📖', label: 'Leseverstehen' },
  { to: '/c1/sprachbausteine', icon: '✏️', label: 'Sprachbausteine' },
  { to: '/c1/horen', icon: '🎧', label: 'Hörverstehen' },
  { to: '/c1/schreiben', icon: '✍️', label: 'Schriftlicher Ausdruck' },
  { to: '/c1/sprechen', icon: '🗣️', label: 'Mündlicher Ausdruck' },
];

const renderCards = (sections) => sections.map((s) => (
  <Link key={s.to} to={s.to} className="b2-card b2-card--ready">
    <span className="b2-card__icon">{s.icon}</span>
    <span className="b2-card__label">{s.label}</span>
    <span className="b2-card__pig">🐷</span>
  </Link>
));

function C1Page() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">Підготовка до C1</h1>

      <h2 className="b2-section-title">DTB C1 (Deutsch-Test für den Beruf) — ваш іспит</h2>
      <div className="b2-sections">{renderCards(examSections)}</div>

      <h2 className="b2-section-title">Übungstest telc C1 Beruf — додаткова практика</h2>
      <div className="b2-sections">{renderCards(uebungstestSections)}</div>

      <p className="b2-hint">🐷 — Glücksschwein! Ці розділи вже готові</p>
      <Link to="/" className="back-link">← Назад</Link>
    </div>
  );
}

export default C1Page;
