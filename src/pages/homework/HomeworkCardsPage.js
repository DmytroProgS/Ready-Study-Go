import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { homework1 } from '../../data/homeworkData';
import '../PraepositionenPage.css';

const sets = {
  '1': { data: homework1, title: 'Заняття 20.04' },
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function HomeworkCardsPage() {
  const { setId } = useParams();
  const set = sets[setId] || sets['1'];

  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const reshuffleCards = useCallback(() => {
    setCards(shuffle(set.data));
    setIndex(0);
    setFlipped(false);
  }, [set.data]);

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
      <h1 className="praep-title">{set.title}</h1>
      <p className="praep-counter">{index + 1} / {cards.length}</p>

      <div
        className={`praep-card ${flipped ? 'praep-card--flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="praep-card__inner">
          <div className="praep-card__front">
            <p className="praep-card__hint">Переклади на німецьку:</p>
            <p className="praep-card__text">{card.ua}</p>
            <p className="praep-card__tap">натисни для відповіді</p>
          </div>
          <div className="praep-card__back">
            <p className="praep-card__de-example">{card.de}</p>
          </div>
        </div>
      </div>

      <div className="praep-nav">
        <button onClick={prev} disabled={index === 0} className="praep-btn">&larr; Назад</button>
        <button onClick={reshuffleCards} className="praep-btn praep-btn--shuffle">🔀 Перемішати</button>
        <button onClick={next} disabled={index === cards.length - 1} className="praep-btn">Далі &rarr;</button>
      </div>

      <Link to="/homework" className="back-link">&larr; До завдань</Link>
    </div>
  );
}

export default HomeworkCardsPage;
