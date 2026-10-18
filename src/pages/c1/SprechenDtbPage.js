import React from 'react';
import { Link } from 'react-router-dom';
import { teil1Topics, smalltalkTopics, problems, moreProblems } from '../../data/sprechenDtbData';
import '../B2Page.css';

// Меню усної частини DTB C1: три окремі сторінки.
const parts = [
  { to: '/c1/sprechen-dtb/teil1', num: 1, label: `Teil 1 — Über ein Thema sprechen (${teil1Topics.length} тем)` },
  { to: '/c1/sprechen-dtb/teil2', num: 2, label: `Teil 2 — Smalltalk (${smalltalkTopics.length} тем)` },
  { to: '/c1/sprechen-dtb/teil3', num: 3, label: `Teil 3 — Problemlösung (${problems.length + moreProblems.length} ситуацій)` },
];

function SprechenDtbPage() {
  return (
    <div className="b2-page">
      <h1 className="b2-title">🗣️ Sprechen — DTB C1</h1>
      <p className="b2-hint">
        Парна розмова приблизно 16 хв, часу на підготовку немає. 60 балів: 30 за виконання частин
        (1A — 5, 1B — 5, 1C — 2, Teil 2 — 8, Teil 3 — 10) і 30 за мову.
      </p>
      <div className="b2-sections">
        {parts.map((p) => (
          <Link key={p.to} to={p.to} className="b2-card b2-card--ready">
            <span className="b2-card__num">{p.num}</span>
            <span className="b2-card__label">{p.label}</span>
            <span className="b2-card__pig">🐷</span>
          </Link>
        ))}
      </div>
      <Link to="/c1" className="back-link">← Назад</Link>
    </div>
  );
}

export default SprechenDtbPage;
