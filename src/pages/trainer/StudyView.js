import React, { useEffect, useMemo, useRef, useState } from 'react';
import { review, buildQueue, computeStats } from '../../trainer/srs';
import { saveProgress, recordStudyDay } from '../../trainer/cardsApi';
import { speak, isSpeechSupported } from '../../trainer/speak';
import { listSets, filterBySet, ALL, NO_SET } from '../../trainer/sets';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const SWIPE_THRESHOLD = 60; // px

function StudyView({ uid, cards, streak }) {
  const [queueIds, setQueueIds] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState('ua-de');
  const [set, setSetSel] = useState(ALL);

  const cardsById = useMemo(() => {
    const m = {};
    cards.forEach((c) => (m[c.id] = c));
    return m;
  }, [cards]);

  const sets = useMemo(() => listSets(cards), [cards]);
  const hasNoSet = cards.some((c) => !(c.set || '').trim());
  const pool = useMemo(() => filterBySet(cards, set), [cards, set]);

  // Будуємо чергу: спочатку при завантаженні, і щоразу при зміні набору.
  const buildRef = useRef({ set: null, built: false });
  useEffect(() => {
    if (!cards.length) return;
    if (buildRef.current.set !== set || !buildRef.current.built) {
      setQueueIds(buildQueue(pool).map((c) => c.id));
      setFlipped(false);
      buildRef.current = { set, built: true };
    }
  }, [cards, set, pool]);

  const liveQueue = (queueIds ?? []).filter((id) => cardsById[id]);
  const currentId = liveQueue[0];
  const card = currentId ? cardsById[currentId] : null;

  const stats = computeStats(pool);

  const answer = (remembered) => {
    if (!card) return;
    const updated = review(card, remembered);
    saveProgress(uid, card.id, updated).catch((err) =>
      console.warn('Не вдалося зберегти прогрес:', err?.code || err)
    );
    recordStudyDay(uid, streak).catch(() => {});

    const rest = liveQueue.slice(1);
    setQueueIds(remembered ? rest : [...rest, card.id]);
    setFlipped(false);
  };

  const startDue = () => {
    setQueueIds(buildQueue(pool).map((c) => c.id));
    setFlipped(false);
  };

  const startAll = () => {
    setQueueIds(shuffle(pool).map((c) => c.id));
    setFlipped(false);
  };

  // ==== Клавіатура ====
  useEffect(() => {
    if (!card) return;
    const onKey = (e) => {
      if (['ArrowLeft', 'ArrowRight', ' ', 'Enter', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }
      if (!flipped) {
        if ([' ', 'Enter', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
          setFlipped(true);
        }
        return;
      }
      if (e.key === 'ArrowRight') answer(true);
      else if (e.key === 'ArrowLeft') answer(false);
      else if (e.key === ' ' || e.key === 'Enter') setFlipped(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [card, flipped]); // eslint-disable-line react-hooks/exhaustive-deps

  // ==== Свайпи ====
  const touchStart = useRef(null);
  const suppressClick = useRef(false);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (flipped && Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      suppressClick.current = true;
      answer(dx > 0);
    }
  };
  const onCardClick = () => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    setFlipped((f) => !f);
  };

  const SetSelect = (
    <div className="study-setpick">
      <label>Set:</label>
      <select value={set} onChange={(e) => setSetSel(e.target.value)}>
        <option value={ALL}>Alle Sets</option>
        {sets.map((s) => <option key={s} value={s}>{s}</option>)}
        {hasNoSet && <option value={NO_SET}>{NO_SET}</option>}
      </select>
    </div>
  );

  if (cards.length === 0) {
    return (
      <div className="study-empty">
        <p>Du hast noch keine Karten.</p>
        <p>Öffne <b>„🗂 Meine Karten“</b> und füge deinen ersten Satz hinzu.</p>
      </div>
    );
  }

  const isUaFirst = direction === 'ua-de';
  const frontText = isUaFirst ? card?.ua : card?.de;
  const backText = isUaFirst ? card?.de : card?.ua;
  const frontHint = isUaFirst ? 'Wie lautet der Satz auf Deutsch?' : 'Übersetze ins Ukrainische:';
  const germanOnFront = !isUaFirst;

  const StatsBar = (
    <div className="study-stats">
      <span title="Tage in Folge">🔥 {streak?.streak ?? 0}</span>
      <span title="Heute fällig">📅 {stats.due}</span>
      <span title="Pausiert">⏳ {stats.paused}</span>
      <span title="Gut gelernt">🏆 {stats.learned}</span>
    </div>
  );

  if (!card) {
    return (
      <div className="study-view">
        {SetSelect}
        {StatsBar}
        <div className="study-empty">
          <p className="study-done">🎉 Für heute ist alles wiederholt!</p>
          {stats.paused > 0 && (
            <p>Pausiert: <b>{stats.paused}</b>. Diese Karten erscheinen wieder, sobald sie fällig sind.</p>
          )}
          <button className="trainer-btn trainer-btn--primary" onClick={startAll}>
            🔄 Jetzt alles wiederholen
          </button>
          <button className="trainer-btn" onClick={startDue}>Fällige Karten prüfen</button>
        </div>
      </div>
    );
  }

  return (
    <div className="study-view">
      {SetSelect}
      {StatsBar}

      <div className="study-dir">
        <span className={isUaFirst ? 'is-active' : ''}>🇺🇦 → 🇩🇪</span>
        <button
          className="study-dir__switch"
          onClick={() => setDirection(isUaFirst ? 'de-ua' : 'ua-de')}
          title="Übersetzungsrichtung wechseln"
        >
          🔄
        </button>
        <span className={!isUaFirst ? 'is-active' : ''}>🇩🇪 → 🇺🇦</span>
      </div>

      <div className="study-topline">
        <span className="study-counter">Übrig: {liveQueue.length}</span>
        <button className="study-all-btn" onClick={startAll} title="Alle Karten üben">
          🔄 Alle
        </button>
      </div>

      <div
        className={`study-card ${flipped ? 'study-card--flipped' : ''}`}
        onClick={onCardClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="study-card__inner">
          <div className="study-card__front">
            <p className="study-card__hint">{frontHint}</p>
            <p className="study-card__text">{frontText}</p>
            {germanOnFront && isSpeechSupported() && (
              <button
                className="study-speak"
                onClick={(e) => { e.stopPropagation(); speak(card.de); }}
                title="Vorlesen"
              >
                🔊 Vorlesen
              </button>
            )}
            <p className="study-card__tap">Zum Überprüfen klicken</p>
          </div>
          <div className="study-card__back">
            <p className="study-card__de">{backText}</p>
            {!germanOnFront && isSpeechSupported() && (
              <button
                className="study-speak"
                onClick={(e) => { e.stopPropagation(); speak(card.de); }}
                title="Vorlesen"
              >
                🔊 Vorlesen
              </button>
            )}
          </div>
        </div>
      </div>

      {flipped ? (
        <div className="study-actions">
          <button className="trainer-btn study-btn--fail" onClick={() => answer(false)}>
            ❌ Nicht gewusst
          </button>
          <button className="trainer-btn study-btn--ok" onClick={() => answer(true)}>
            ✅ Gewusst
          </button>
        </div>
      ) : (
        <p className="study-flip-hint">
          Überlege zuerst und drehe dann die Karte um 🙂 <br />
          <span className="study-keys">Mit ← / → oder Wischen bewerten, mit der Leertaste umdrehen</span>
        </p>
      )}
    </div>
  );
}

export default StudyView;
