import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { turnTakingDecks, shuffleDeck } from '../../data/turnTakingDecks';
import './TurnTakingPage.css';

export default function TurnTakingPage() {
  const [session, setSession] = useState(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const startDeck = deck => {
    setSession({ deck, cards: shuffleDeck(deck.cards) });
    setIndex(0);
    setFlipped(false);
  };
  const move = next => {
    setIndex(next);
    setFlipped(false);
  };

  return (
    <main className="turn-page">
      <h1>🔄 Речення по черзі</h1>
      <p className="turn-intro">Спочатку прочитай українською, спробуй перекласти, а потім переверни картку.</p>
      {!session ? (
        <section className="turn-decks">
          <h2>Обери колоду</h2>
          {turnTakingDecks.map(deck => (
            <button className="turn-deck" key={deck.id} onClick={() => startDeck(deck)}>
              <span className="turn-deck-icon">🗂️</span>
              <span><strong>{deck.title}</strong><small>{deck.description} · {deck.cards.length} карток</small></span>
              <span aria-hidden="true">→</span>
            </button>
          ))}
        </section>
      ) : (
        <section className="turn-session">
          <div className="turn-topline"><strong>{session.deck.title}</strong><span>Картка {index + 1} із {session.cards.length}</span></div>
          <div className="turn-progress"><div style={{ width: ((index + 1) / session.cards.length * 100) + '%' }} /></div>
          <button type="button" className={'turn-flashcard' + (flipped ? ' turn-flashcard--de' : '')} onClick={() => setFlipped(v => !v)} aria-label="Перевернути картку">
            <span className="turn-language">{flipped ? '🇩🇪 Німецькою' : '🇺🇦 Українською'}</span>
            <span className="turn-sentence">{flipped ? session.cards[index].de : session.cards[index].uk}</span>
            <span className="turn-flip-hint">↻ Натисни, щоб перевернути</span>
          </button>
          {flipped && session.cards[index].explanation && <p className="turn-card-explanation"><strong>Пояснення:</strong> {session.cards[index].explanation}</p>}
          <div className="turn-controls">
            <button disabled={index === 0} onClick={() => move(index - 1)}>← Назад</button>
            <button onClick={() => setFlipped(v => !v)}>↻ Перевернути</button>
            {index < session.cards.length - 1
              ? <button onClick={() => move(index + 1)}>Далі →</button>
              : <button onClick={() => startDeck(session.deck)}>🔀 Перемішати знову</button>}
          </div>
          <button className="turn-other" onClick={() => setSession(null)}>← Обрати іншу колоду</button>
        </section>
      )}
      <Link className="turn-home" to="/">← На головну</Link>
    </main>
  );
}
