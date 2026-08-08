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
      <label>Набір:</label>
      <select value={set} onChange={(e) => setSetSel(e.target.value)}>
        <option value={ALL}>Усі набори</option>
        {sets.map((s) => <option key={s} value={s}>{s}</option>)}
        {hasNoSet && <option value={NO_SET}>{NO_SET}</option>}
      </select>
    </div>
  );

  if (cards.length === 0) {
    return (
      <div className="study-empty">
        <p>У тебе ще немає карток.</p>
        <p>Перейди на вкладку <b>«🗂 Мої картки»</b> і додай перше речення.</p>
      </div>
    );
  }

  const isUaFirst = direction === 'ua-de';
  const frontText = isUaFirst ? card?.ua : card?.de;
  const backText = isUaFirst ? card?.de : card?.ua;
  const frontHint = isUaFirst ? 'Згадай німецькою:' : 'Перекладай українською:';
  const germanOnFront = !isUaFirst;

  const StatsBar = (
    <div className="study-stats">
      <span title="Серія днів поспіль">🔥 {streak?.streak ?? 0}</span>
      <span title="Чекає сьогодні">📅 {stats.due}</span>
      <span title="На паузі">⏳ {stats.paused}</span>
      <span title="Добре завчено">🏆 {stats.learned}</span>
    </div>
  );

  if (!card) {
    return (
      <div className="study-view">
        {SetSelect}
        {StatsBar}
        <div className="study-empty">
          <p className="study-done">🎉 На сьогодні все повторено!</p>
          {stats.paused > 0 && (
            <p>На паузі: <b>{stats.paused}</b> — повернуться, коли настане їхній час.</p>
          )}
          <button className="trainer-btn trainer-btn--primary" onClick={startAll}>
            🔄 Повторити все зараз
          </button>
          <button className="trainer-btn" onClick={startDue}>Перевірити дозрілі</button>
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
          title="Змінити напрям"
        >
          🔄
        </button>
        <span className={!isUaFirst ? 'is-active' : ''}>🇩🇪 → 🇺🇦</span>
      </div>

      <div className="study-topline">
        <span className="study-counter">Залишилось: {liveQueue.length}</span>
        <button className="study-all-btn" onClick={startAll} title="Проганяти всі картки">
          🔄 Усі
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
                title="Прочитати вголос"
              >
                🔊 Читати
              </button>
            )}
            <p className="study-card__tap">натисни, щоб перевірити</p>
          </div>
          <div className="study-card__back">
            <p className="study-card__de">{backText}</p>
            {!germanOnFront && isSpeechSupported() && (
              <button
                className="study-speak"
                onClick={(e) => { e.stopPropagation(); speak(card.de); }}
                title="Прочитати вголос"
              >
                🔊 Читати
              </button>
            )}
          </div>
        </div>
      </div>

      {flipped ? (
        <div className="study-actions">
          <button className="trainer-btn study-btn--fail" onClick={() => answer(false)}>
            ❌ Не згадав
          </button>
          <button className="trainer-btn study-btn--ok" onClick={() => answer(true)}>
            ✅ Згадав
          </button>
        </div>
      ) : (
        <p className="study-flip-hint">
          Спершу згадай сам, потім перевертай 🙂 <br />
          <span className="study-keys">← / → або свайп — оцінити, пробіл — перевернути</span>
        </p>
      )}
    </div>
  );
}

export default StudyView;
