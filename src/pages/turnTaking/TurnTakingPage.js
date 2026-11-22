import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageNavigation } from '../../components/PageNavigation';
import { turnTakingDecks, shuffleDeck } from '../../data/turnTakingDecks';
import './TurnTakingPage.css';
import SubstantiveGrammarReference from './SubstantiveGrammarReference';

const extendedSteps = [
  { label: 'Kurzer Satz · Ukrainisch', lang: 'uk' },
  { label: 'Kurzer Satz · Deutsch', lang: 'de', action: 'Übersetzung anzeigen' },
  { label: 'Erweiterter Satz · Ukrainisch', lang: 'uk', action: 'Erweiterten Satz anzeigen' },
  { label: 'Erweiterter Satz · Deutsch', lang: 'de', action: 'Übersetzung des erweiterten Satzes anzeigen' },
];

function ExtendedCard({ card, step, onReveal }) {
  const action = extendedSteps[step + 1]?.action;

  return (
    <div className="turn-extended-card">
      <ol className="turn-extended-lines" aria-live="polite">
        {extendedSteps.slice(0, step + 1).map(({ label, lang }, i) => (
          <li key={label}>
            <span className="turn-language">{label}</span>
            <span className="turn-extended-sentence" lang={lang}>{card[i]}</span>
          </li>
        ))}
      </ol>
      {action && <button type="button" className="turn-extended-reveal" onClick={onReveal}>
        {action}
      </button>}
    </div>
  );
}

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
  const [step, setStep] = useState(0);

  const startDeck = deck => {
    setSession({ deck, cards: shuffleDeck(deck.cards) });
    setIndex(0);
    setFlipped(false);
    setStep(0);
  };
  const currentCard = session?.cards[index];
  const mode = session?.deck.mode;
  const extended = mode === 'extended';
  const backToSelection = () => {
    if (session) setSession(null);
    else setTopic(null);
    window.scrollTo(0, 0);
  };

  const move = next => {
    setIndex(next);
    setFlipped(false);
    setStep(0);
  };

  return (
    <main className="turn-page">
      <PageNavigation onBack={topic ? backToSelection : undefined}>
        {session && <button type="button" onClick={backToSelection}>Anderes Kartenset wählen</button>}
      </PageNavigation>
      <h1>🔄 Sätze im Wechsel</h1>
      <p className="turn-intro">{extended
        ? 'Übersetze zuerst den kurzen Satz laut. Decke die Übersetzung auf und übe dann den erweiterten Satz.'
        : 'Wähle ein Thema und ein Kartenset. Übersetze die Sätze und klicke zur Kontrolle auf die Karte.'}</p>
      {!session ? (
        <section className="turn-decks">
          {!topic ? <>
            <h2>Wähle ein Thema</h2>
            {[{ id: 'halten', title: 'Halten', icon: '📁' }, { id: 'lassen', title: 'Lassen', icon: '📁' }, { id: 'preposition', title: 'Präposition', icon: '📁' }, { id: 'substantive', title: 'Substantive', icon: '📁' }].map(group => {
              const count = turnTakingDecks.filter(deck => deck.topic === group.id).length;
              return <button className="turn-deck turn-topic" key={group.id} onClick={() => setTopic(group.id)}>
                <span className="turn-deck-icon">{group.icon}</span>
                <span><strong>{group.title}</strong><small>{count} {count === 1 ? 'Kartenset' : 'Kartensets'}</small></span>
                <span aria-hidden="true">→</span>
              </button>;
            })}
          </> : <>
          <button type="button" className="turn-folder-back" onClick={backToSelection}>← Alle Themen</button>
          <h2>📁 {topic === 'halten' ? 'Halten' : topic === 'lassen' ? 'Lassen' : topic === 'preposition' ? 'Präposition' : 'Substantive'}</h2>
          {turnTakingDecks.filter(deck => deck.topic === topic).map(deck => (
            <button className="turn-deck" key={deck.id} onClick={() => startDeck(deck)}>
              <span className="turn-deck-icon">🗂️</span>
              <span><strong>{deck.title}</strong><small>{deck.description} · {deck.cards.length} Karten</small></span>
              <span aria-hidden="true">→</span>
            </button>
          ))}
          {topic === 'substantive' && <SubstantiveGrammarReference />}
          </>}
        </section>
      ) : (
        <section className="turn-session">
          <div className="turn-topline"><strong>{session.deck.title}</strong><span>Karte {index + 1} von {session.cards.length}</span></div>
          <div className="turn-progress"><div style={{ width: ((index + 1) / session.cards.length * 100) + '%' }} /></div>
          {extended ? (
            <ExtendedCard card={currentCard} step={step} onReveal={() => setStep(value => Math.min(value + 1, extendedSteps.length - 1))} />
          ) : <>
            <button type="button" className={'turn-flashcard' + (flipped ? ' turn-flashcard--de' : '')} onClick={() => setFlipped(v => !v)} aria-label="Karte umdrehen">
              <span className="turn-language">{mode === 'correction' ? (flipped ? '✅ Korrektur' : '🔎 Finde den Fehler') : mode === 'perfekt' ? (flipped ? '✅ Perfekt' : '🇩🇪 Präsens') : (flipped ? '🇩🇪 Deutsch' : '🇺🇦 Ukrainisch')}</span>
              {mode === 'correction' && flipped ? (
                <span className="turn-correction-result">
                  <span className="turn-correction-line">{highlightedSentence(currentCard.de, currentCard.wrong, 'turn-error-word')}</span>
                  <span className="turn-correction-line">{highlightedSentence(currentCard.corrected, currentCard.right, 'turn-correct-word')}</span>
                  <span className="turn-correction-translation">{currentCard.uk}</span>
                </span>
              ) : <span className="turn-sentence">{flipped ? currentCard.de : mode === 'correction' ? currentCard.de : currentCard.uk}</span>}
              <span className="turn-flip-hint">↻ Zum Umdrehen klicken</span>
            </button>
            {flipped && currentCard.explanation && (
              Array.isArray(currentCard.explanation)
                ? <div className="turn-card-explanation" lang="uk">
                    <strong>Пояснення</strong>
                    {currentCard.explanation.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                : <p className="turn-card-explanation"><strong>Erklärung:</strong> {currentCard.explanation}</p>
            )}
          </>}
          <div className="turn-controls">
            <button disabled={index === 0} onClick={() => move(index - 1)}>← Zurück</button>
            {!extended && <button onClick={() => setFlipped(v => !v)}>↻ Umdrehen</button>}
            {index < session.cards.length - 1
              ? <button onClick={() => move(index + 1)}>Weiter →</button>
              : <button onClick={() => startDeck(session.deck)}>🔀 Erneut mischen</button>}
          </div>
          <button className="turn-other" onClick={backToSelection}>← Anderes Kartenset wählen</button>
        </section>
      )}
      <Link className="turn-home" to="/">← Zur Startseite</Link>
    </main>
  );
}
