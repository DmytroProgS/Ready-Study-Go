import React, { useMemo, useState } from 'react';
import { addCard, removeCard, updateCardText } from '../../trainer/cardsApi';
import { speak, isSpeechSupported } from '../../trainer/speak';
import { listSets, filterBySet, ALL, NO_SET } from '../../trainer/sets';

const NEW = '__new__';

// Вибір набору: випадаючий список існуючих + пункт «Neues Set …» з полем вводу.
function SetPicker({ value, onChange, sets }) {
  const [creatingNew, setCreatingNew] = useState(false);

  const handleSelect = (e) => {
    const v = e.target.value;
    if (v === NEW) {
      setCreatingNew(true);
      onChange('');
    } else {
      setCreatingNew(false);
      onChange(v);
    }
  };

  return (
    <>
      <select className="trainer-input" value={creatingNew ? NEW : value} onChange={handleSelect}>
        <option value="">Ohne Set</option>
        {sets.map((s) => <option key={s} value={s}>{s}</option>)}
        <option value={NEW}>➕ Neues Set …</option>
      </select>
      {creatingNew && (
        <input
          className="trainer-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Name des neuen Sets"
          autoFocus
        />
      )}
    </>
  );
}

function MyCardsView({ uid, cards }) {
  const [de, setDe] = useState('');
  const [ua, setUa] = useState('');
  const [set, setSet] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const [filter, setFilter] = useState(ALL);

  // Стан інлайн-редагування однієї картки.
  const [editingId, setEditingId] = useState(null);
  const [editDe, setEditDe] = useState('');
  const [editUa, setEditUa] = useState('');
  const [editSet, setEditSet] = useState('');

  const sets = useMemo(() => listSets(cards), [cards]);
  const hasNoSetCards = cards.some((c) => !(c.set || '').trim());
  const visible = useMemo(() => filterBySet(cards, filter), [cards, filter]);

  const submit = async (e) => {
    e.preventDefault();
    if (!de.trim() || !ua.trim()) return;
    setBusy(true);
    setError('');
    try {
      await addCard(uid, { de, ua, set });
      setDe('');
      setUa('');
      // набір лишаємо — зручно додавати кілька карток в одну тему підряд
    } catch (err) {
      setError(
        err?.code === 'permission-denied'
          ? 'Kein Zugriff auf die Datenbank. Prüfe, ob die Firestore-Regeln veröffentlicht sind.'
          : 'Die Karte konnte nicht gespeichert werden. Versuche es erneut.'
      );
    } finally {
      setBusy(false);
    }
  };

  const startEdit = (c) => {
    setEditingId(c.id);
    setEditDe(c.de);
    setEditUa(c.ua);
    setEditSet(c.set || '');
  };

  const cancelEdit = () => setEditingId(null);

  const saveEdit = async (id) => {
    if (!editDe.trim() || !editUa.trim()) return;
    await updateCardText(uid, id, { de: editDe, ua: editUa, set: editSet }).catch(() => {});
    setEditingId(null);
  };

  return (
    <div className="mycards-view">
      <form className="mycards-form" onSubmit={submit}>
        <label className="mycards-label">Set (Thema)</label>
        <SetPicker value={set} onChange={setSet} sets={sets} />

        <label className="mycards-label">Deutscher Satz</label>
        <input
          className="trainer-input"
          value={de}
          onChange={(e) => setDe(e.target.value)}
          placeholder="z. B. Ich möchte mir das alte Schloss anschauen."
          required
        />
        <label className="mycards-label">Ukrainische Übersetzung</label>
        <input
          className="trainer-input"
          value={ua}
          onChange={(e) => setUa(e.target.value)}
          placeholder="z. B. Я хотів би оглянути старий замок."
          required
        />
        <button className="trainer-btn trainer-btn--primary" type="submit" disabled={busy}>
          {busy ? 'Wird hinzugefügt …' : '+ Karte hinzufügen'}
        </button>
        {error && <p className="trainer-error">{error}</p>}
      </form>

      <div className="mycards-filter">
        <label>Set anzeigen:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value={ALL}>Alle Sets ({cards.length})</option>
          {sets.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
          {hasNoSetCards && <option value={NO_SET}>{NO_SET}</option>}
        </select>
      </div>

      <p className="mycards-count">Angezeigt: {visible.length}</p>

      <ul className="mycards-list">
        {visible.map((c) => (
          <li key={c.id} className="mycards-item">
            {editingId === c.id ? (
              <div className="mycards-edit">
                <SetPicker value={editSet} onChange={setEditSet} sets={sets} />
                <input
                  className="trainer-input"
                  value={editDe}
                  onChange={(e) => setEditDe(e.target.value)}
                  placeholder="Deutscher Satz"
                />
                <input
                  className="trainer-input"
                  value={editUa}
                  onChange={(e) => setEditUa(e.target.value)}
                  placeholder="Ukrainische Übersetzung"
                />
                <div className="mycards-edit__actions">
                  <button className="trainer-btn trainer-btn--primary" onClick={() => saveEdit(c.id)}>
                    Speichern
                  </button>
                  <button className="trainer-btn" onClick={cancelEdit}>Abbrechen</button>
                </div>
              </div>
            ) : (
              <>
                <div className="mycards-item__texts">
                  {(c.set || '').trim() && <span className="mycards-item__set">{c.set}</span>}
                  <span className="mycards-item__de">{c.de}</span>
                  <span className="mycards-item__ua">{c.ua}</span>
                </div>
                <div className="mycards-item__actions">
                  {isSpeechSupported() && (
                    <button className="mycards-icon" onClick={() => speak(c.de)} title="Vorlesen">
                      🔊
                    </button>
                  )}
                  <button className="mycards-icon" onClick={() => startEdit(c)} title="Bearbeiten">
                    ✏️
                  </button>
                  <button
                    className="mycards-icon mycards-icon--del"
                    onClick={() => removeCard(uid, c.id)}
                    title="Löschen"
                  >
                    🗑
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyCardsView;
