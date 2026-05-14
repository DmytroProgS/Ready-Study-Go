import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { festeAusdrueckeGroups } from '../../data/festeAusdrueckeData';
import './FesteAusdruecke.css';

function FesteAusdrueckePage() {
  const [openKeys, setOpenKeys] = useState({});
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const toggle = (key) => {
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeGroup = festeAusdrueckeGroups[activeGroupIndex];

  return (
    <div className="feste-page">
      <h1 className="feste-page__title">Feste Ausdrücke</h1>
      <p className="feste-page__intro">
        Прочитай українську фразу, згадай німецький варіант — і клацни на картку, щоб перевірити себе.
      </p>

      <div className="feste-group-tabs">
        {festeAusdrueckeGroups.map((group, gi) => (
          <button
            key={gi}
            type="button"
            className={`feste-group-tab ${gi === activeGroupIndex ? 'feste-group-tab--active' : ''}`}
            onClick={() => setActiveGroupIndex(gi)}
          >
            <span className="feste-group-tab__de">{group.de}</span>
            <span className="feste-group-tab__ua">{group.ua}</span>
          </button>
        ))}
      </div>

      <section className={`feste-group feste-group--${activeGroup.color}`}>
        <h2 className="feste-group__title">
          <span className="feste-group__diamond">◆</span>
          <span className="feste-group__de">{activeGroup.de}</span>
          <span className="feste-group__sep">—</span>
          <span className="feste-group__ua">{activeGroup.ua}</span>
        </h2>

        {activeGroup.items.map((item, ii) => {
          const key = `${activeGroupIndex}-${ii}`;
          const isOpen = !!openKeys[key];
          return (
            <div
              key={key}
              className={`feste-card feste-card--${activeGroup.color} ${isOpen ? 'feste-card--open' : ''}`}
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

      <p className="feste-page__hint">Клацни знову — щоб закрити картку.</p>

      <Link to="/homework" className="back-link">&larr; Назад</Link>
    </div>
  );
}

export default FesteAusdrueckePage;
