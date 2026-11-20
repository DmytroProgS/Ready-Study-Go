import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { phrasesGroups } from '../data/phrasesData';
import './homework/FesteAusdruecke.css';

function PhrasesPage() {
  const [openKeys, setOpenKeys] = useState({});
  const [qaStages, setQaStages] = useState({}); // 0 = hidden, 1 = ua question + ua answer, 2 = de answer
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const toggle = (key) => {
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleQaStage = (key) => {
    setQaStages((prev) => {
      const current = prev[key] || 0;
      const next = current === 2 ? 0 : current + 1;
      return { ...prev, [key]: next };
    });
  };

  const activeGroup = phrasesGroups[activeGroupIndex];
  const hasPrev = activeGroupIndex > 0;
  const hasNext = activeGroupIndex < phrasesGroups.length - 1;

  const isQaGroup = activeGroup.type === 'qa';

  return (
    <div className="feste-page">
      <h1 className="feste-page__title">Redemittel für verschiedene Anlässe</h1>
      <p className="feste-page__intro">
        Lies den ukrainischen Satz, sage ihn auf Deutsch und klicke zur Kontrolle auf die Karte.
      </p>

      <div className="feste-group-nav">
        <button type="button" className="feste-nav-btn" onClick={() => setActiveGroupIndex((prev) => Math.max(prev - 1, 0))} disabled={!hasPrev}>
          ← Zurück
        </button>

        <div className="feste-nav-current">
          <span className="feste-nav-current__de">{activeGroup.de}</span>
        </div>

        <button type="button" className="feste-nav-btn" onClick={() => setActiveGroupIndex((prev) => Math.min(prev + 1, phrasesGroups.length - 1))} disabled={!hasNext}>
          Weiter →
        </button>
      </div>

      <div className="feste-group-tabs">
        {phrasesGroups.map((group, gi) => (
          <button
            key={gi}
            type="button"
            className={`feste-group-tab ${gi === activeGroupIndex ? 'feste-group-tab--active' : ''}`}
            onClick={() => setActiveGroupIndex(gi)}
          >
            <span className="feste-group-tab__de">{group.de}</span>
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

        {isQaGroup ? (
          // QA Format (Weiterbildung)
          <>
            {activeGroup.items.map((item, ii) => {
              const key = `${activeGroupIndex}-${ii}`;
              const stage = qaStages[key] || 0;
              return (
                <div
                  key={key}
                  className={`feste-card feste-card--${activeGroup.color}`}
                  onClick={() => toggleQaStage(key)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleQaStage(key);
                    }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {stage === 0 && (
                    <>
                      <p className="feste-card__de" style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
                        {item.question_de}
                      </p>
                      <p className="feste-card__hidden" style={{ marginTop: '10px' }}>
                        <span className="feste-card__hidden-icon">🔒</span>
                        Zum Aufdecken klicken
                      </p>
                    </>
                  )}
                  {stage === 1 && (
                    <>
                      <div style={{ marginBottom: '15px' }}>
                        <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '5px' }}>Frage auf Ukrainisch:</p>
                        <p className="feste-card__ua" style={{ fontWeight: 'bold' }}>
                          {item.question_ua}
                        </p>
                      </div>
                      <div>
                        <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '5px' }}>Antwort auf Ukrainisch:</p>
                        <p className="feste-card__ua">{item.answer_ua}</p>
                      </div>
                      <p className="feste-card__hidden" style={{ marginTop: '10px' }}>
                        <span className="feste-card__hidden-icon">🔐</span>
                        Klicken für die deutsche Version
                      </p>
                    </>
                  )}
                  {stage === 2 && (
                    <>
                      <div style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                        <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '5px' }}>Antwort auf Ukrainisch:</p>
                        <p className="feste-card__ua">{item.answer_ua}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '5px' }}>Antwort auf Deutsch:</p>
                        <p className="feste-card__de">{item.answer_de}</p>
                      </div>
                      <p className="feste-card__hidden" style={{ marginTop: '10px' }}>
                        <span className="feste-card__hidden-icon">✅</span>
                        Zum Wiederholen klicken
                      </p>
                    </>
                  )}
                </div>
              );
            })}
            <p className="feste-page__hint">Klicke dreimal auf die Karte: Frage → ukrainische Antwort → deutsche Antwort.</p>
          </>
        ) : (
          // Standard Format (Bewerbungsgespräch, Jobcenter)
          <>
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
                        Klicken für die deutsche Version
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
            <p className="feste-page__hint">Klicke erneut, um die Karte zu schließen.</p>
          </>
        )}
      </section>

      <Link to="/" className="back-link">← Zurück</Link>
    </div>
  );
}

export default PhrasesPage;
