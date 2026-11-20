import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageNavigation } from '../../components/PageNavigation';
import { dtbRedewendungen } from '../../data/dtbRedewendungen';
import './DtbRedewendungenPage.css';

const shuffle = (cards) => {
  const result = [...cards];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export default function DtbRedewendungenPage() {
  const [direction, setDirection] = useState('uk-de');
  const [cards, setCards] = useState(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const start = () => { setCards(shuffle(dtbRedewendungen)); setIndex(0); setFlipped(false); };
  const move = (next) => { setIndex(next); setFlipped(false); };
  const front = direction === 'uk-de' ? 'uk' : 'de';
  const back = direction === 'uk-de' ? 'de' : 'uk';
  const card = cards?.[index];
  const chooseDirection = () => {
    setCards(null);
    window.scrollTo(0, 0);
  };
  return (
    <main className="dtb-red-page">
      <PageNavigation backTo="/c1/sprechen-dtb" onBack={cards ? chooseDirection : undefined} />
      <h1>🗂️ Redewendungen</h1>
      <p>13 nützliche Wendungen für die mündliche DTB-C1-Prüfung. Übersetze die Sätze laut und drehe die Karten zur Kontrolle um.</p>
      {!cards ? (
        <section className="dtb-red-setup">
          <h2>Übersetzungsrichtung</h2>
          <label><input type="radio" name="direction" value="uk-de" checked={direction === 'uk-de'} onChange={() => setDirection('uk-de')} /> 🇺🇦 Ukrainisch → 🇩🇪 Deutsch</label>
          <label><input type="radio" name="direction" value="de-uk" checked={direction === 'de-uk'} onChange={() => setDirection('de-uk')} /> 🇩🇪 Deutsch → 🇺🇦 Ukrainisch</label>
          <button className="dtb-red-primary" onClick={start}>Übung starten →</button>
        </section>
      ) : (
        <section className="dtb-red-session">
          <div className="dtb-red-meta"><strong>{direction === 'uk-de' ? '🇺🇦 → 🇩🇪' : '🇩🇪 → 🇺🇦'}</strong><span>Karte {index + 1} von {cards.length}</span></div>
          <div className="dtb-red-progress"><div style={{width: ((index + 1) / cards.length * 100) + '%'}} /></div>
          <button className="dtb-red-card" onClick={() => setFlipped(v => !v)} aria-label="Karte umdrehen" type="button">
            <span className="dtb-red-language">{(flipped ? back : front) === 'uk' ? '🇺🇦 Ukrainisch' : '🇩🇪 Deutsch'}</span>
            <span className="dtb-red-sentence">{card[flipped ? back : front]}</span>
            <span className="dtb-red-hint">↻ Zum Umdrehen klicken</span>
          </button>
          <div className="dtb-red-controls">
            <button disabled={index === 0} onClick={() => move(index - 1)}>← Zurück</button>
            <button onClick={() => setFlipped(v => !v)}>↻ Umdrehen</button>
            {index < cards.length - 1
              ? <button onClick={() => move(index + 1)}>Weiter →</button>
              : <button onClick={start}>🔀 Erneut mischen</button>}
          </div>
          <button className="dtb-red-other" onClick={chooseDirection}>← Richtung wechseln</button>
        </section>
      )}
      <Link className="dtb-red-back" to="/c1/sprechen-dtb">← Zum mündlichen Teil des DTB C1</Link>
    </main>
  );
}
