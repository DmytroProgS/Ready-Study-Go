import React from 'react';
import { Link, useParams } from 'react-router-dom';
import c1Modules from '../../data/c1/c1Modules';
import '../B2Page.css';

function C1ModulePage() {
  const { module: moduleId } = useParams();
  const mod = c1Modules.find((m) => m.id === moduleId);

  if (!mod) {
    return (
      <div className="b2-page">
        <p>Такого розділу немає.</p>
        <Link to="/c1" className="back-link">← Назад</Link>
      </div>
    );
  }

  return (
    <div className="b2-page">
      <h1 className="b2-title">{mod.icon} {mod.title}</h1>
      <p className="b2-hint">{mod.meta}</p>
      <div className="b2-sections">
        {mod.parts.map((p, i) => (
          <Link key={p.id} to={`/c1/${mod.id}/${p.id}`} className="b2-card b2-card--ready">
            <span className="b2-card__num">{i + 1}</span>
            <span className="b2-card__label">{p.title}</span>
            <span className="b2-card__pig">🐷</span>
          </Link>
        ))}
      </div>
      <Link to="/c1" className="back-link">← Назад</Link>
    </div>
  );
}

export default C1ModulePage;
