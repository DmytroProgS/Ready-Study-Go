import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { currentSet, extraSet } from '../data/praepositionenData';
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

  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const reshuffleCards = useCallback(() => {
    setCards(shuffle(dataset));
    setIndex(0);
    setFlipped(false);
  }, [dataset]);

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

      <div
        className={`praep-card ${flipped ? 'praep-card--flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="praep-card__inner">
          <div className="praep-card__front">
            <p className="praep-card__hint">Переклади на німецьку:</p>
            <p className="praep-card__text">{card.exUA}</p>
            <p className="praep-card__tap">натисни для відповіді</p>
          </div>
          <div className="praep-card__back">
            <p className="praep-card__de-example">{card.exDE}</p>
            <div className="praep-card__info">
              <span className="praep-card__verb">{card.verb}</span>
              <span className="praep-card__prep">{card.prep}</span>
            </div>
            <p className="praep-card__ua-verb">{card.ua}</p>
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
