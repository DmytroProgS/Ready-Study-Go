import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageNavigation } from '../../components/PageNavigation';
import { dialogues } from '../../data/dialogues';
import { passivDialogues } from '../../data/passivDialogues';
import './DialoguePage.css';

export default function DialoguePage() {
  const [dialogue, setDialogue] = useState(null);
  const [category, setCategory] = useState(null);
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState('two');
  const bottomRef = useRef(null);

  const start = (selected, selectedMode = mode) => {
    setDialogue(selected);
    setMode(selectedMode);
    setStep(0);
  };

  useEffect(() => {
    if (dialogue) bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [step, dialogue]);

  const messages = dialogue?.messages || [];
  const finished = dialogue && step === messages.length;
  const backToSelection = () => {
    if (dialogue) setDialogue(null);
    else setCategory(null);
    window.scrollTo(0, 0);
  };

  return (
    <main className="dialogue-page">
      <PageNavigation onBack={category ? backToSelection : undefined} />
      <h1>💬 Dialog</h1>
      {!dialogue ? (
        !category ? (
          <section className="dialogue-picker">
            <p>Wähle einen Bereich, um Dialoge im Rollenspiel zu üben.</p>
            <button type="button" className="dialogue-choice dialogue-choice--passiv" onClick={() => setCategory('passiv')}>
              <span>🗣️</span><span><strong>Situationen im Passiv</strong><small>3 Situationen mit je 5 Fragen und Antworten</small></span><span>→</span>
            </button>
            <button type="button" className="dialogue-choice" onClick={() => setCategory('halten')}>
              <span>💬</span><span><strong>Dialog mit „halten“</strong><small>Dialog zwischen Lena und Max · Wendungen mit „halten“</small></span><span>→</span>
            </button>
          </section>
        ) : (
          <section className="dialogue-picker">
            <button type="button" className="dialogue-back dialogue-category-back" onClick={backToSelection}>← Zur Übersicht</button>
            <h2>{category === 'passiv' ? 'Situationen im Passiv' : 'Dialog mit „halten“'}</h2>
            <p>Sprecht die Sätze laut auf Deutsch. Klickt auf „Senden“, um die Übersetzung zu sehen und zum nächsten Satz zu wechseln.</p>
            <div className="dialogue-mode" role="group" aria-label="Übungsmodus">
              <button type="button" className={mode === 'two' ? 'selected' : ''} aria-pressed={mode === 'two'} onClick={() => setMode('two')}>👥 Zu zweit</button>
              <button type="button" className={mode === 'solo' ? 'selected' : ''} aria-pressed={mode === 'solo'} onClick={() => setMode('solo')}>🙂 Allein</button>
            </div>
            <h3>Wähle einen Dialog</h3>
            {(category === 'passiv' ? passivDialogues : dialogues).map(item => (
              <button type="button" key={item.id} className={'dialogue-choice' + (category === 'passiv' ? ' dialogue-choice--passiv' : '')} onClick={() => start(item)}>
                <span>{category === 'passiv' ? '🗣️' : '💬'}</span><span><strong>{item.title}</strong><small>{item.description} · {item.messages.length} Beiträge</small></span><span>→</span>
              </button>
            ))}
            {category === 'passiv' ? (
              <div className="dialogue-passiv-reference">
                <h3>📚 Passiv im Überblick: ein Beispiel</h3>
                <img src={process.env.PUBLIC_URL + '/grammar/passiv-problem-monster.png'} alt="Farbige Übersicht zum Passiv: Das Problem, fünf Formen und eine Tabelle zu „werden“" loading="lazy" />
                <p className="dialogue-passiv-note">Präsens · Präteritum · Modalverb · Konjunktiv II · Zustandspassiv</p>
              </div>
            ) : (
              <div className="dialogue-passiv-reference">
                <h3>📚 Wendungen mit „halten“ im Überblick</h3>
                <div className="dialogue-grammar-table-wrap">
                  <table className="dialogue-grammar-table">
                    <thead><tr><th>Wendung</th><th>Bedeutung</th></tr></thead>
                    <tbody>
                      <tr><td>Was hältst du von ...?</td><td>Що ти думаєш про ...?</td></tr>
                      <tr><td>etwas für ... halten</td><td>вважати щось ...</td></tr>
                      <tr><td>an etwas festhalten</td><td>не відмовлятися від чогось</td></tr>
                      <tr><td>zu jemandem halten</td><td>бути на чиємусь боці</td></tr>
                      <tr><td>sich an Regeln halten</td><td>дотримуватися правил</td></tr>
                      <tr><td>jemanden auf dem Laufenden halten</td><td>тримати когось у курсі</td></tr>
                      <tr><td>jemanden aufhalten</td><td>затримувати когось</td></tr>
                      <tr><td>durchhalten</td><td>триматися, не здаватися</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        )
      ) : (
        <section className="dialogue-chat" aria-label={dialogue.title}>
          <header className="dialogue-header">
            <div><strong>{dialogue.title}</strong><small>{mode === 'solo' ? '🙂 Allein · beide Rollen' : '👥 Zu zweit · abwechselnd'} · {Math.min(step + 1, messages.length)} von {messages.length}</small></div>
            <button type="button" onClick={() => start(dialogue)}>↻ Neu starten</button>
          </header>
          <div className="dialogue-thread" aria-live="polite">
            {messages.slice(0, Math.min(step + 1, messages.length)).map((message, i) => (
              <div className={'dialogue-row ' + (i % 2 ? 'dialogue-row--right' : '')} key={i}>
                <div className="dialogue-bubble">
                  <span className="dialogue-speaker">{message.speaker}</span>
                  <p className="dialogue-uk">{message.uk}</p>
                  {i < step ? (
                    <div className="dialogue-answer">
                      <p lang="de">{message.de}</p>
                      <span className="dialogue-check" aria-label="Gesendet">✓✓</span>
                    </div>
                  ) : <span className="dialogue-prompt">Sprich den Satz laut auf Deutsch.</span>}
                </div>
              </div>
            ))}
            {finished && <div className="dialogue-finished">🎉 Dialog abgeschlossen!</div>}
            <div ref={bottomRef} />
          </div>
          <div className="dialogue-actions">
            {finished
              ? <button type="button" onClick={() => start(dialogue)}>↻ Dialog wiederholen</button>
              : <button type="button" onClick={() => setStep(value => Math.min(value + 1, messages.length))}>➤ Senden</button>}
          </div>
          <button type="button" className="dialogue-back" onClick={backToSelection}>← Zur Dialogauswahl</button>
        </section>
      )}
      <Link className="dialogue-home" to="/">← Zur Startseite</Link>
    </main>
  );
}
