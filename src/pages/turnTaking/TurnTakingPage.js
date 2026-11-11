import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { turnTakingDecks, shuffleDeck } from '../../data/turnTakingDecks';
import './TurnTakingPage.css';

function highlightedSentence(sentence, fragment, className) {
  const position = sentence.indexOf(fragment);
  if (position < 0) return sentence;
  return <>{sentence.slice(0, position)}<span className={className}>{fragment}</span>{sentence.slice(position + fragment.length)}</>;
}

export default function TurnTakingPage() {
  const [session, setSession] = useState(null);
  const [topic, setTopic] = useState(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const startDeck = deck => {
    setSession({ deck, cards: shuffleDeck(deck.cards) });
    setIndex(0);
    setFlipped(false);
  };
  const currentCard = session?.cards[index];
  const mode = session?.deck.mode;

  const move = next => {
    setIndex(next);
    setFlipped(false);
  };

  return (
    <main className="turn-page">
      <h1>🔄 Речення по черзі</h1>
      <p className="turn-intro">Обери тему та колоду. Перекладай речення й натискай на картку, щоб перевірити себе.</p>
      {!session ? (
        <section className="turn-decks">
          {!topic ? <>
            <h2>Обери тему</h2>
            {[{ id: 'halten', title: 'Halten', icon: '📁' }, { id: 'lassen', title: 'Lassen', icon: '📁' }, { id: 'preposition', title: 'Präposition', icon: '📁' }].map(group => {
              const count = turnTakingDecks.filter(deck => deck.topic === group.id).length;
              return <button className="turn-deck turn-topic" key={group.id} onClick={() => setTopic(group.id)}>
                <span className="turn-deck-icon">{group.icon}</span>
                <span><strong>{group.title}</strong><small>{count} колод</small></span>
                <span aria-hidden="true">→</span>
              </button>;
            })}
          </> : <>
          <button type="button" className="turn-folder-back" onClick={() => setTopic(null)}>← Усі теми</button>
          <h2>📁 {topic === 'halten' ? 'Halten' : topic === 'lassen' ? 'Lassen' : 'Präposition'}</h2>
          {turnTakingDecks.filter(deck => deck.topic === topic).map(deck => (
            <button className="turn-deck" key={deck.id} onClick={() => startDeck(deck)}>
              <span className="turn-deck-icon">🗂️</span>
              <span><strong>{deck.title}</strong><small>{deck.description} · {deck.cards.length} карток</small></span>
              <span aria-hidden="true">→</span>
            </button>
          ))}
          </>}
        </section>
      ) : (
        <section className="turn-session">
          <div className="turn-topline"><strong>{session.deck.title}</strong><span>Картка {index + 1} із {session.cards.length}</span></div>
          <div className="turn-progress"><div style={{ width: ((index + 1) / session.cards.length * 100) + '%' }} /></div>
          <button type="button" className={'turn-flashcard' + (flipped ? ' turn-flashcard--de' : '')} onClick={() => setFlipped(v => !v)} aria-label="Перевернути картку">
            <span className="turn-language">{mode === 'correction' ? (flipped ? '✅ Виправлення' : '🔎 Знайди помилку') : mode === 'perfekt' ? (flipped ? '✅ Perfekt' : '🇩🇪 Präsens') : (flipped ? '🇩🇪 Німецькою' : '🇺🇦 Українською')}</span>
            {mode === 'correction' && flipped ? (
              <span className="turn-correction-result">
                <span className="turn-correction-line">{highlightedSentence(currentCard.de, currentCard.wrong, 'turn-error-word')}</span>
                <span className="turn-correction-line">{highlightedSentence(currentCard.corrected, currentCard.right, 'turn-correct-word')}</span>
                <span className="turn-correction-translation">{currentCard.uk}</span>
              </span>
            ) : <span className="turn-sentence">{flipped ? currentCard.de : mode === 'correction' ? currentCard.de : currentCard.uk}</span>}
            <span className="turn-flip-hint">↻ Натисни, щоб перевернути</span>
          </button>
          {flipped && currentCard.explanation && <p className="turn-card-explanation"><strong>Пояснення:</strong> {currentCard.explanation}</p>}
          <div className="turn-controls">
            <button disabled={index === 0} onClick={() => move(index - 1)}>← Назад</button>
            <button onClick={() => setFlipped(v => !v)}>↻ Перевернути</button>
            {index < session.cards.length - 1 && <button onClick={() => move(index + 1)}>Далі →</button>}
            <button onClick={() => startDeck(session.deck)}>🔀 Перемішати</button>
          </div>
          <button className="turn-other" onClick={() => setSession(null)}>← Обрати іншу колоду</button>
        </section>
      )}
      <Link className="turn-home" to="/">← На головну</Link>
    </main>
  );
}
