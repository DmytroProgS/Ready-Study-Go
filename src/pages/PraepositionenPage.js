import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { currentSet, extraSet } from '../data/praepositionenData';
import { praepositionenFrequencyGroups } from '../data/praepositionenFrequencyGroups';
import './PraepositionenPage.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function PraepositionenPage() {
  const { mode } = useParams();
  const dataset = mode === 'extra' ? extraSet : currentSet;
  const title = mode === 'extra' ? 'Додати після' : 'Вчимо зараз';
  const [selectedGroup, setSelectedGroup] = useState(mode === 'extra' ? 'top30' : 'all');

  const groupLabels = {
    top30: 'TOP 30',
    top31_50: 'TOP 31-50',
    top51_75: 'TOP 51-75',
    top76_100: 'TOP 76-100',
    all: `Усі ${dataset.length}`,
  };

  const selectedGroupVerbs = selectedGroup === 'all'
    ? dataset.map((card) => card.verb)
    : praepositionenFrequencyGroups[selectedGroup];

  const filteredDataset = selectedGroup === 'all' || mode !== 'extra'
    ? dataset
    : dataset.filter((card) => selectedGroupVerbs.includes(card.verb));

  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const reshuffleCards = useCallback(() => {
    setCards(shuffle(filteredDataset));
    setIndex(0);
    setFlipped(false);
  }, [filteredDataset]);

  useEffect(() => {
    reshuffleCards();
  }, [reshuffleCards]);

  const card = cards[index];

  const next = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setFlipped(false);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setFlipped(false);
    }
  };

  if (!card) return null;

  return (
    <div className="praep-page">
      <h1 className="praep-title">Präpositionen — {title}</h1>
      <p className="praep-counter">{index + 1} / {cards.length}</p>

      {mode === 'extra' && (
        <div className="praep-group-panel">
          <div className="praep-group-panel__label">Групи за вживаністю:</div>
          <div className="praep-group-tabs">
            {Object.keys(groupLabels).map((groupKey) => (
              <button
                key={groupKey}
                type="button"
                className={`praep-group-tab ${selectedGroup === groupKey ? 'praep-group-tab--active' : ''}`}
                onClick={() => setSelectedGroup(groupKey)}
              >
                {groupLabels[groupKey]}
              </button>
            ))}
          </div>
          <div className="praep-group-verbs">
            {selectedGroup !== 'all' && selectedGroupVerbs.map((verb) => (
              <span key={verb} className="praep-group-verb">{verb}</span>
            ))}
          </div>
        </div>
      )}

      <div
        className={`praep-card ${flipped ? 'praep-card--flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="praep-card__inner">
          <div className="praep-card__front">
            <p className="praep-card__hint">Переклади на німецьку:</p>
            {card.variants ? (
              <ol className="praep-card__list praep-card__list--ua">
                {card.variants.map((v, i) => (
                  <li key={i}>{v.exUA}</li>
                ))}
              </ol>
            ) : (
              <p className="praep-card__text">{card.exUA}</p>
            )}
            <p className="praep-card__tap">натисни для відповіді</p>
          </div>
          <div className="praep-card__back">
            {card.variants ? (
              <>
                <div className="praep-card__info praep-card__info--center">
                  <span className="praep-card__verb">{card.verb}</span>
                </div>
                <ol className="praep-card__variants">
                  {card.variants.map((v, i) => (
                    <li key={i} className="praep-card__variant">
                      <span className="praep-card__variant-de">{v.exDE}</span>
                      <span className="praep-card__prep">{v.prep.split(',')[0].trim()}</span>
                      <span className="praep-card__variant-ua">{v.ua}</span>
                    </li>
                  ))}
                </ol>
              </>
            ) : (
              <>
                <p className="praep-card__de-example">{card.exDE}</p>
                <div className="praep-card__info">
                  <span className="praep-card__verb">{card.verb}</span>
                  <span className="praep-card__prep">{card.prep}</span>
                </div>
                <p className="praep-card__ua-verb">{card.ua}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="praep-nav">
        <button onClick={prev} disabled={index === 0} className="praep-btn">← Назад</button>
        <button onClick={reshuffleCards} className="praep-btn praep-btn--shuffle">🔀 Перемішати</button>
        <button onClick={next} disabled={index === cards.length - 1} className="praep-btn">Далі →</button>
      </div>

      <Link to="/grammar" className="back-link">← До граматики</Link>
    </div>
  );
}

export default PraepositionenPage;
