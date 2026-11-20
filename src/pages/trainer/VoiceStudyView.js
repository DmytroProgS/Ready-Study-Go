import React, { useEffect, useMemo, useState } from 'react';
import { speak, isSpeechSupported } from '../../trainer/speak';
import { recognizeOnce, isRecognitionSupported } from '../../trainer/recognizeSpeech';
import { compareTexts } from '../../trainer/compareText';
import { listSets, filterBySet, ALL, NO_SET } from '../../trainer/sets';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function recognitionError(err) {
  const code = typeof err === 'string' ? err : err?.message;
  switch (code) {
    case 'not-allowed':
    case 'service-not-allowed':
      return 'Kein Zugriff auf das Mikrofon. Erlaube den Zugriff im Browser.';
    case 'no-speech':
      return 'Es wurde keine Stimme erkannt. Versuche es näher am Mikrofon erneut.';
    case 'unsupported':
      return 'Dein Browser unterstützt keine Spracherkennung. Öffne die Seite in Chrome oder Edge.';
    default:
      return 'Die Sprache wurde nicht erkannt. Versuche es erneut.';
  }
}

function VoiceStudyView({ cards }) {
  const [order, setOrder] = useState([]);
  const [pos, setPos] = useState(0);
  const [listening, setListening] = useState(false);
  const [result, setResult] = useState(null); // з'являється лише ПІСЛЯ спроби
  const [error, setError] = useState('');
  const [set, setSetSel] = useState(ALL);

  const cardsById = useMemo(() => {
    const m = {};
    cards.forEach((c) => (m[c.id] = c));
    return m;
  }, [cards]);

  const sets = useMemo(() => listSets(cards), [cards]);
  const hasNoSet = cards.some((c) => !(c.set || '').trim());
  const pool = useMemo(() => filterBySet(cards, set), [cards, set]);

  // Перемішуємо, коли змінюється кількість карток або обраний набір.
  useEffect(() => {
    setOrder(shuffle(pool.map((c) => c.id)));
    setPos(0);
    setResult(null);
    setError('');
  }, [cards.length, set]); // eslint-disable-line react-hooks/exhaustive-deps

  const liveOrder = order.filter((id) => cardsById[id]);
  const card = liveOrder[pos] ? cardsById[liveOrder[pos]] : null;

  const resetCardState = () => {
    setResult(null);
    setError('');
  };

  const go = (delta) => {
    resetCardState();
    setPos((p) => Math.min(Math.max(p + delta, 0), liveOrder.length - 1));
  };

  const reshuffle = () => {
    setOrder(shuffle(pool.map((c) => c.id)));
    setPos(0);
    resetCardState();
  };

  const listen = async () => {
    if (!card) return;
    setError('');
    setResult(null);
    setListening(true);
    try {
      const text = await recognizeOnce('de-DE').promise;
      setResult(compareTexts(card.de, text));
    } catch (err) {
      setError(recognitionError(err));
    } finally {
      setListening(false);
    }
  };

  if (cards.length === 0) {
    return (
      <div className="study-empty">
        <p>Du hast noch keine Karten.</p>
        <p>Füge unter <b>„🗂 Meine Karten“</b> Sätze hinzu. Sie stehen auch im schriftlichen Satztrainer zur Verfügung.</p>
      </div>
    );
  }

  if (!isRecognitionSupported()) {
    return (
      <div className="study-empty">
        <p>🎤 Die Spracherkennung wird hier nicht unterstützt.</p>
        <p>Öffne die App in <b>Chrome</b> oder <b>Edge</b>, um die Spracherkennung zu nutzen.</p>
      </div>
    );
  }

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

  if (!card) {
    return (
      <div className="voice-view">
        {SetSelect}
        <div className="study-empty">
          <p>Dieses Set enthält noch keine Karten.</p>
        </div>
      </div>
    );
  }

  const answered = result != null;
  const scoreClass = !answered
    ? ''
    : result.score >= 80 ? 'is-good' : result.score >= 50 ? 'is-mid' : 'is-low';

  return (
    <div className="voice-view">
      {SetSelect}
      <div className="study-topline">
        <span className="study-counter">{pos + 1} / {liveOrder.length}</span>
        <button className="study-all-btn" onClick={reshuffle} title="Mischen">🔀 Mischen</button>
      </div>

      {/* Картка: спершу лише українською. Німецька відкривається після спроби. */}
      <div className="voice-card">
        <p className="voice-card__label">Sprich den Satz auf Deutsch:</p>
        <p className="voice-card__ua voice-card__ua--big">{card.ua}</p>

        {answered && (
          <div className="voice-answer">
            <p className="voice-answer__label">Richtige Antwort:</p>
            <p className="voice-words">
              {result.words.map((w, i) => (
                <span key={i} className={w.ok ? 'voice-w--ok' : 'voice-w--bad'}>{w.word} </span>
              ))}
            </p>
            {isSpeechSupported() && (
              <button className="study-speak" onClick={() => speak(card.de)} title="Beispiel anhören">
                🔊 Beispiel anhören
              </button>
            )}
          </div>
        )}
      </div>

      {!answered && (
        <button
          className={`voice-mic ${listening ? 'is-listening' : ''}`}
          onClick={listen}
          disabled={listening}
        >
          {listening ? '🎙 Aufnahme läuft …' : '🎤 Sprechen'}
        </button>
      )}

      {error && (
        <>
          <p className="trainer-error">{error}</p>
          <button className="voice-mic" onClick={listen} disabled={listening}>🎤 Erneut versuchen</button>
        </>
      )}

      {answered && (
        <div className="voice-result">
          <div className={`voice-score ${scoreClass}`}>
            {result.score}% <span className="voice-score__sub">({result.matched}/{result.total} Wörter)</span>
          </div>

          <p className="voice-result__title">Das hast du gesagt:</p>
          <p className="voice-words voice-words--spoken">
            {result.spokenWords.length === 0 ? (
              <span className="voice-result__heard">— (Nichts erkannt)</span>
            ) : (
              result.spokenWords.map((w, i) => (
                <span key={i} className={w.ok ? 'voice-w--ok' : 'voice-w--bad'}>{w.word} </span>
              ))
            )}
          </p>

          {result.score < 100 && (
            <button className="voice-mic voice-mic--retry" onClick={listen} disabled={listening}>
              {listening ? '🎙 Aufnahme läuft …' : '🔁 Wiederhole den Satz'}
            </button>
          )}
        </div>
      )}

      <div className="study-actions voice-nav">
        <button className="trainer-btn" onClick={() => go(-1)} disabled={pos === 0}>&larr; Zurück</button>
        <button className="trainer-btn" onClick={() => go(1)} disabled={pos >= liveOrder.length - 1}>Weiter &rarr;</button>
      </div>
    </div>
  );
}

export default VoiceStudyView;
