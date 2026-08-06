import React, { useEffect, useMemo, useState } from 'react';
import { review, buildQueue, countUpcoming } from '../../trainer/srs';
import { saveProgress } from '../../trainer/cardsApi';
import { speak, isSpeechSupported } from '../../trainer/speak';

function StudyView({ uid, cards }) {
  const [queueIds, setQueueIds] = useState(null); // null = ще не побудовано
  const [flipped, setFlipped] = useState(false);

  // Швидкий доступ до картки за id (завжди актуальні дані з Firestore).
  const cardsById = useMemo(() => {
    const m = {};
    cards.forEach((c) => (m[c.id] = c));
    return m;
  }, [cards]);

  // Будуємо чергу один раз, коли картки завантажились.
  useEffect(() => {
    if (queueIds === null && cards.length) {
      setQueueIds(buildQueue(cards).map((c) => c.id));
    }
  }, [cards, queueIds]);

  // Прибираємо з черги id, яких уже нема (напр. картку видалили).
  const liveQueue = (queueIds ?? []).filter((id) => cardsById[id]);
  const currentId = liveQueue[0];
  const card = currentId ? cardsById[currentId] : null;

  const answer = (remembered) => {
    if (!card) return;
    const updated = review(card, remembered);
    // Зберігаємо прогрес у фоні; помилку доступу просто логуємо, щоб не ламати навчання.
    saveProgress(uid, card.id, updated).catch((err) =>
      console.warn('Не вдалося зберегти прогрес:', err?.code || err)
    );

    const rest = liveQueue.slice(1);
    // «Не згадав» → повертаємо картку в кінець черги (показувати, поки не завчиш).
    setQueueIds(remembered ? rest : [...rest, card.id]);
    setFlipped(false);
  };

  const startAgain = () => {
    setQueueIds(buildQueue(cards).map((c) => c.id));
    setFlipped(false);
  };

  // Немає жодної картки взагалі.
  if (cards.length === 0) {
    return (
      <div className="study-empty">
        <p>У тебе ще немає карток.</p>
        <p>Перейди на вкладку <b>«🗂 Мої картки»</b> і додай перше речення.</p>
      </div>
    );
  }

  // Черга на сьогодні пройдена.
  if (!card) {
    const upcoming = countUpcoming(cards);
    return (
      <div className="study-empty">
        <p className="study-done">🎉 На сьогодні все повторено!</p>
        {upcoming > 0 && (
          <p>Наступних карток чекає: <b>{upcoming}</b> — повернуться, коли настане їхній час.</p>
        )}
        <button className="trainer-btn" onClick={startAgain}>Пройти ще раз</button>
      </div>
    );
  }

  return (
    <div className="study-view">
      <p className="study-counter">Залишилось у черзі: {liveQueue.length}</p>

      <div
        className={`study-card ${flipped ? 'study-card--flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className="study-card__inner">
          <div className="study-card__front">
            <p className="study-card__hint">Згадай німецькою:</p>
            <p className="study-card__text">{card.ua}</p>
            <p className="study-card__tap">натисни, щоб перевірити</p>
          </div>
          <div className="study-card__back">
            <p className="study-card__de">{card.de}</p>
            {isSpeechSupported() && (
              <button
                className="study-speak"
                onClick={(e) => {
                  e.stopPropagation(); // щоб клік по кнопці не перевертав картку
                  speak(card.de);
                }}
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
        <p className="study-flip-hint">Спершу згадай сам, потім перевертай картку 🙂</p>
      )}
    </div>
  );
}

export default StudyView;
