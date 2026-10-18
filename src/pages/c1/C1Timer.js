import React, { useEffect, useState } from 'react';

const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

// Простий зворотний відлік із пресетами, напр. [{ label: 'Підготовка', sec: 1200 }].
function C1Timer({ presets }) {
  const [preset, setPreset] = useState(0);
  const [left, setLeft] = useState(presets[0].sec);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => {
      setLeft((s) => {
        if (s <= 1) { setRunning(false); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const choose = (i) => { setPreset(i); setLeft(presets[i].sec); setRunning(false); };

  return (
    <div className="c1-timer">
      <span className={'c1-timer__time' + (left === 0 ? ' done' : '')}>{left === 0 ? '⏰ 00:00' : fmt(left)}</span>
      <button onClick={() => setRunning(!running)}>{running ? '⏸ Пауза' : '▶ Старт'}</button>
      <button onClick={() => choose(preset)}>↺</button>
      {presets.map((p, i) => (
        <button key={p.label} className={i === preset ? 'active' : ''} onClick={() => choose(i)}>
          {p.label}
        </button>
      ))}
    </div>
  );
}

export default C1Timer;
