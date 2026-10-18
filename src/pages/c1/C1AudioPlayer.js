import React, { useEffect, useRef, useState } from 'react';
import { isSpeechSupported } from '../../trainer/speak';

// Озвучення транскриптів через Web Speech API.
// Довгий текст ріжемо на речення: Chrome обриває задовгі utterances приблизно через 15 с.

function splitSentences(text) {
  const parts = text.match(/[^.!?…]+[.!?…]+["“”«»]?|[^.!?…]+$/g) || [text];
  const out = [];
  parts.forEach((p) => {
    let s = p.trim();
    // Надто довгі речення додатково ділимо по комах.
    while (s.length > 220) {
      const cut = s.lastIndexOf(',', 200);
      if (cut < 40) break;
      out.push(s.slice(0, cut + 1));
      s = s.slice(cut + 1).trim();
    }
    if (s) out.push(s);
  });
  return out;
}

function germanVoices() {
  const all = window.speechSynthesis.getVoices();
  const de = all.filter((v) => v.lang && v.lang.toLowerCase().startsWith('de'));
  return de.length ? de : all;
}

// Якщо голос один на всіх — розрізняємо мовців висотою тону.
const PITCHES = [1, 0.8, 1.2, 0.9, 1.1];

function buildQueue(segments, rate) {
  const voices = germanVoices();
  const speakers = [];
  const queue = [];
  segments.forEach((seg, si) => {
    seg.lines.forEach((line) => {
      if (!line.t || line.t.trim().startsWith('[')) return; // ремарки не читаємо
      const key = line.s || 'default';
      if (!speakers.includes(key)) speakers.push(key);
      const idx = speakers.indexOf(key);
      const voice = voices.length ? voices[idx % voices.length] : null;
      const pitch = voices.length > idx ? 1 : PITCHES[idx % PITCHES.length];
      splitSentences(line.t).forEach((t, k) => {
        queue.push({ t, voice, pitch, rate, seg: si, pauseBefore: k === 0 ? 350 : 0 });
      });
    });
    if (queue.length) queue[queue.length - 1].pauseAfter = 1800; // пауза між сегментами
  });
  return queue;
}

function C1AudioPlayer({ segments }) {
  const [playing, setPlaying] = useState(null); // індекс сегмента, що грає, або 'all'
  const [current, setCurrent] = useState(null);
  const [rate, setRate] = useState(0.95);
  const runRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!synth) return undefined;
    // Голоси можуть підвантажитись пізніше — просто «будимо» список.
    const onVoices = () => synth.getVoices();
    synth.addEventListener && synth.addEventListener('voiceschanged', onVoices);
    return () => {
      runRef.current += 1;
      clearTimeout(timerRef.current);
      synth.cancel();
      synth.removeEventListener && synth.removeEventListener('voiceschanged', onVoices);
    };
  }, []);

  if (!isSpeechSupported()) {
    return <p className="c1-audio__unsupported">Цей браузер не вміє озвучувати текст — читайте транскрипт.</p>;
  }

  const stop = () => {
    runRef.current += 1;
    clearTimeout(timerRef.current);
    window.speechSynthesis.cancel();
    setPlaying(null);
    setCurrent(null);
  };

  const play = (which) => {
    stop();
    const run = runRef.current;
    const segs = which === 'all' ? segments : [segments[which]];
    const offset = which === 'all' ? 0 : which;
    const queue = buildQueue(segs, rate);
    let i = 0;
    setPlaying(which);

    const next = () => {
      if (run !== runRef.current) return;
      if (i >= queue.length) { setPlaying(null); setCurrent(null); return; }
      const item = queue[i];
      setCurrent(item.seg + offset);
      const u = new SpeechSynthesisUtterance(item.t);
      u.lang = 'de-DE';
      if (item.voice) u.voice = item.voice;
      u.pitch = item.pitch;
      u.rate = item.rate;
      u.onend = u.onerror = () => {
        if (run !== runRef.current) return;
        i += 1;
        timerRef.current = setTimeout(next, (item.pauseAfter || 0) + (queue[i] ? queue[i].pauseBefore : 0));
      };
      window.speechSynthesis.speak(u);
    };
    next();
  };

  return (
    <div className="c1-audio">
      <div className="c1-audio__controls">
        {segments.length > 1 && (
          <button className="c1-audio__btn c1-audio__btn--main" onClick={() => (playing === 'all' ? stop() : play('all'))}>
            {playing === 'all' ? '⏹ Стоп' : '▶ Слухати все підряд'}
          </button>
        )}
        <label className="c1-audio__rate">
          Темп
          <select value={rate} onChange={(e) => setRate(Number(e.target.value))} disabled={playing !== null}>
            <option value={0.8}>повільно</option>
            <option value={0.95}>звичайно</option>
            <option value={1.1}>як на іспиті</option>
          </select>
        </label>
      </div>
      <div className="c1-audio__segments">
        {segments.map((seg, i) => (
          <button
            key={seg.label}
            className={'c1-audio__seg' + (current === i ? ' active' : '')}
            onClick={() => (playing === i ? stop() : play(i))}
          >
            {playing === i ? '⏹' : current === i ? '🔊' : '▶'} {seg.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Transcript({ segments }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="c1-transcript">
      <button className="c1-transcript__toggle" onClick={() => setOpen(!open)}>
        {open ? 'Сховати транскрипт' : '📄 Показати транскрипт (після прослуховування)'}
      </button>
      {open && segments.map((seg) => (
        <div key={seg.label} className="c1-transcript__seg">
          <div className="c1-transcript__label">{seg.label}</div>
          {seg.lines.map((l, i) => (
            <p key={i} className={l.t.startsWith('[') ? 'c1-transcript__note' : ''}>
              {l.s && !/^P\d$/.test(l.s) && <strong>{l.s}: </strong>}
              {l.t}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default C1AudioPlayer;
