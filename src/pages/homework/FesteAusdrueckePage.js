import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { festeAusdrueckeGroups } from '../../data/festeAusdrueckeData';
import './FesteAusdruecke.css';

function FesteAusdrueckePage() {
  const [openKeys, setOpenKeys] = useState({});

  const toggle = (key) => {
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="feste-page">
      <h1 className="feste-page__title">Feste Ausdrücke</h1>
      <p className="feste-page__intro">
        Прочитай українську фразу, згадай німецький варіант — і клацни на картку, щоб перевірити себе.
      </p>

      {festeAusdrueckeGroups.map((group, gi) => (
        <section key={gi} className={`feste-group feste-group--${group.color}`}>
          <h2 className="feste-group__title">
            <span className="feste-group__diamond">◆</span>
            <span className="feste-group__de">{group.de}</span>
            <span className="feste-group__sep">—</span>
            <span className="feste-group__ua">{group.ua}</span>
          </h2>

          {group.items.map((item, ii) => {
            const key = `${gi}-${ii}`;
            const isOpen = !!openKeys[key];
            return (
              <div
                key={key}
                className={`feste-card feste-card--${group.color} ${isOpen ? 'feste-card--open' : ''}`}
                onClick={() => toggle(key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(key);
                  }
                }}
              >
                <p className="feste-card__ua">{item.ua}</p>
                <div className="feste-card__de-wrap">
                  {isOpen ? (
                    <p className="feste-card__de">{item.de}</p>
                  ) : (
                    <span className="feste-card__hidden">
                      <span className="feste-card__hidden-icon">🔒</span>
                      натисни, щоб побачити німецькою
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      ))}

      <p className="feste-page__hint">Клацни знову — щоб закрити картку.</p>

      <Link to="/homework" className="back-link">&larr; Назад</Link>
    </div>
  );
}

export default FesteAusdrueckePage;
