import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <main className="dialogue-page">
      <h1>💬 Діалог</h1>
      {!dialogue ? (
        !category ? (
          <section className="dialogue-picker">
            <p>Обери розділ для тренування діалогів по ролях.</p>
            <button type="button" className="dialogue-choice dialogue-choice--passiv" onClick={() => setCategory('passiv')}>
              <span>🗣️</span><span><strong>Ситуація з Passiv</strong><small>3 ситуації · 5 запитань і відповідей у кожній</small></span><span>→</span>
            </button>
            <button type="button" className="dialogue-choice" onClick={() => setCategory('halten')}>
              <span>💬</span><span><strong>Ситуація з halten</strong><small>Діалог Lena і Max · вирази з halten</small></span><span>→</span>
            </button>
          </section>
        ) : (
          <section className="dialogue-picker">
            <button type="button" className="dialogue-back dialogue-category-back" onClick={() => setCategory(null)}>← До розділів</button>
            <h2>{category === 'passiv' ? 'Ситуація з Passiv' : 'Ситуація з halten'}</h2>
            <p>Промовляйте репліки німецькою вголос. Натискайте «Відправити», щоб побачити переклад і перейти до наступної репліки.</p>
            <div className="dialogue-mode" role="group" aria-label="Режим тренування">
              <button type="button" className={mode === 'two' ? 'selected' : ''} aria-pressed={mode === 'two'} onClick={() => setMode('two')}>👥 Удвох</button>
              <button type="button" className={mode === 'solo' ? 'selected' : ''} aria-pressed={mode === 'solo'} onClick={() => setMode('solo')}>🙂 Самостійно</button>
            </div>
            <h3>Обери діалог</h3>
            {(category === 'passiv' ? passivDialogues : dialogues).map(item => (
              <button type="button" key={item.id} className={'dialogue-choice' + (category === 'passiv' ? ' dialogue-choice--passiv' : '')} onClick={() => start(item)}>
                <span>{category === 'passiv' ? '🗣️' : '💬'}</span><span><strong>{item.title}</strong><small>{item.description} · {item.messages.length} реплік</small></span><span>→</span>
              </button>
            ))}
            {category === 'passiv' ? (
              <div className="dialogue-passiv-reference">
                <h3>📚 Шпаргалка: Passiv на одному прикладі</h3>
                <img src={process.env.PUBLIC_URL + '/grammar/passiv-problem-monster.png'} alt="Кольорова схема Passiv: Das Problem, п’ять форм і таблиця werden" loading="lazy" />
                <p className="dialogue-passiv-note">Präsens · Präteritum · Modalverb · Konjunktiv II · Zustandspassiv</p>
              </div>
            ) : (
              <div className="dialogue-passiv-reference">
                <h3>📚 Таблиця: вирази з halten</h3>
                <div className="dialogue-grammar-table-wrap">
                  <table className="dialogue-grammar-table">
                    <thead><tr><th>Вираз</th><th>Значення</th></tr></thead>
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
            <div><strong>{dialogue.title}</strong><small>{mode === 'solo' ? '🙂 Самостійно · обидві ролі' : '👥 Удвох · по черзі'} · {Math.min(step + 1, messages.length)} із {messages.length}</small></div>
            <button type="button" onClick={() => start(dialogue)}>↻ Заново</button>
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
                      <span className="dialogue-check" aria-label="Відправлено">✓✓</span>
                    </div>
                  ) : <span className="dialogue-prompt">Промов німецькою вголос</span>}
                </div>
              </div>
            ))}
            {finished && <div className="dialogue-finished">🎉 Діалог завершено!</div>}
            <div ref={bottomRef} />
          </div>
          <div className="dialogue-actions">
            {finished
              ? <button type="button" onClick={() => start(dialogue)}>↻ Повторити діалог</button>
              : <button type="button" onClick={() => setStep(value => Math.min(value + 1, messages.length))}>➤ Відправити</button>}
          </div>
          <button type="button" className="dialogue-back" onClick={() => setDialogue(null)}>← До списку діалогів</button>
        </section>
      )}
      <Link className="dialogue-home" to="/">← На головну</Link>
    </main>
  );
}
