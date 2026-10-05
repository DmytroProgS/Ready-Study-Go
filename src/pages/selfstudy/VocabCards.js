import React, { useState, useEffect, useCallback } from 'react';
import { speak, isSpeechSupported } from '../../trainer/speak';
import '../PraepositionenPage.css';
import './VocabCards.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Картки словника: спереду укр. слово, перевертаєш → нім. слово + приклади.
function VocabCards({ words }) {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const reshuffleCards = useCallback(() => {
    setCards(shuffle(words));
    setIndex(0);
    setFlipped(false);
  }, [words]);

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

  if (!card) return <p className="vocab-empty">Слова ще не додані.</p>;

  return (
    <div className="praep-page vocab-cards">
      <p className="praep-counter">{index + 1} / {cards.length}</p>

      <div
        className={`praep-card ${flipped ? 'praep-card--flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="praep-card__inner">
          <div className="praep-card__front">
            <p className="praep-card__hint">Пригадай німецькою:</p>
            <p className="praep-card__text">{card.ua}</p>
            <p className="praep-card__tap">натисни для відповіді</p>
          </div>

          <div className="praep-card__back vocab-back">
            <div className="vocab-word-row">
              <p className="vocab-word">{card.de}</p>
              {isSpeechSupported() && (
                <button
                  className="vocab-speak"
                  onClick={(e) => { e.stopPropagation(); speak(card.de); }}
                  title="Прочитати слово"
                >
                  🔊
                </button>
              )}
            </div>

            {card.examples && card.examples.length > 0 && (
              <ul className="vocab-examples">
                {card.examples.map((ex, i) => (
                  <li key={i} className="vocab-ex">
                    <span className="vocab-ex__de">
                      {ex.de}
                      {isSpeechSupported() && (
                        <button
                          className="vocab-ex__speak"
                          onClick={(e) => { e.stopPropagation(); speak(ex.de); }}
                          title="Прочитати приклад"
                        >
                          🔊
                        </button>
                      )}
                    </span>
                    <span className="vocab-ex__ua">{ex.ua}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="praep-nav">
        <button onClick={prev} disabled={index === 0} className="praep-btn">&larr; Назад</button>
        <button onClick={reshuffleCards} className="praep-btn praep-btn--shuffle">🔀 Перемішати</button>
        <button onClick={next} disabled={index === cards.length - 1} className="praep-btn">Далі &rarr;</button>
      </div>
    </div>
  );
}

export default VocabCards;
