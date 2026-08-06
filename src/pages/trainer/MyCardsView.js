import React, { useState } from 'react';
import { addCard, removeCard } from '../../trainer/cardsApi';
import { speak, isSpeechSupported } from '../../trainer/speak';

function MyCardsView({ uid, cards }) {
  const [de, setDe] = useState('');
  const [ua, setUa] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!de.trim() || !ua.trim()) return;
    setBusy(true);
    setError('');
    try {
      await addCard(uid, { de, ua });
      setDe('');
      setUa('');
    } catch (err) {
      setError(
        err?.code === 'permission-denied'
          ? 'Немає доступу до бази. Перевір, що правила Firestore опубліковані.'
          : 'Не вдалося зберегти картку. Спробуй ще раз.'
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mycards-view">
      <form className="mycards-form" onSubmit={submit}>
        <label className="mycards-label">Німецьке речення</label>
        <input
          className="trainer-input"
          value={de}
          onChange={(e) => setDe(e.target.value)}
          placeholder="напр. Ich möchte mir das alte Schloss anschauen."
          required
        />
        <label className="mycards-label">Український переклад</label>
        <input
          className="trainer-input"
          value={ua}
          onChange={(e) => setUa(e.target.value)}
          placeholder="напр. Я хотів би оглянути старий замок."
          required
        />
        <button className="trainer-btn trainer-btn--primary" type="submit" disabled={busy}>
          {busy ? 'Додаємо…' : '+ Додати картку'}
        </button>
        {error && <p className="trainer-error">{error}</p>}
      </form>

      <p className="mycards-count">Усього карток: {cards.length}</p>

      <ul className="mycards-list">
        {cards.map((c) => (
          <li key={c.id} className="mycards-item">
            <div className="mycards-item__texts">
              <span className="mycards-item__de">{c.de}</span>
              <span className="mycards-item__ua">{c.ua}</span>
            </div>
            <div className="mycards-item__actions">
              {isSpeechSupported() && (
                <button
                  className="mycards-icon"
                  onClick={() => speak(c.de)}
                  title="Прочитати вголос"
                >
                  🔊
                </button>
              )}
              <button
                className="mycards-icon mycards-icon--del"
                onClick={() => removeCard(uid, c.id)}
                title="Видалити"
              >
                🗑
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyCardsView;
