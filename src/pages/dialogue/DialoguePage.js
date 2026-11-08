import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { dialogues } from '../../data/dialogues';
import './DialoguePage.css';

export default function DialoguePage() {
  const [dialogue, setDialogue] = useState(null);
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
        <section className="dialogue-picker">
          <p>Промовляйте репліки німецькою вголос. Натискайте «Відправити», щоб побачити переклад під українським реченням і перейти до наступної репліки.</p>
          <div className="dialogue-mode" role="group" aria-label="Режим тренування">
            <button type="button" className={mode === 'two' ? 'selected' : ''} aria-pressed={mode === 'two'} onClick={() => setMode('two')}>👥 Удвох</button>
            <button type="button" className={mode === 'solo' ? 'selected' : ''} aria-pressed={mode === 'solo'} onClick={() => setMode('solo')}>🙂 Самостійно</button>
          </div>
          <h2>Обери діалог</h2>
          {dialogues.map(item => (
            <button type="button" key={item.id} className="dialogue-choice" onClick={() => start(item)}>
              <span>💬</span><span><strong>{item.title}</strong><small>{item.description} · {item.messages.length} реплік</small></span><span>→</span>
            </button>
          ))}
        </section>
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
          <button type="button" className="dialogue-back" onClick={() => setDialogue(null)}>← Обрати інший діалог</button>
        </section>
      )}
      <Link className="dialogue-home" to="/">← На головну</Link>
    </main>
  );
}
