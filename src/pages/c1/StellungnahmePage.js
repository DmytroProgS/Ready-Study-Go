import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { topics, seedHistory, structure, redemittel } from '../../data/stellungnahmeData';
import C1Timer from './C1Timer';
import '../B2Page.css';
import './C1InfoPage.css';
import './c1.css';
import './stellungnahme.css';

const STORE_KEY = 'b2-stellungnahme-history';
const DRAFT_KEY = 'b2-stellungnahme-draft';
const DAY = 24 * 60 * 60 * 1000;
const PAIRS = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* лише зручність */ }
}

const fmtDate = (iso) => iso.split('-').reverse().join('.');

function StellungnahmePage() {
  const [userHistory, setUserHistory] = useState(() => load(STORE_KEY, []));
  const [newDate, setNewDate] = useState('');
  const [newPair, setNewPair] = useState(1);
  const [chosen, setChosen] = useState(null);
  const [text, setText] = useState(() => load(DRAFT_KEY, ''));

  const history = useMemo(
    () => [...seedHistory, ...userHistory].sort((a, b) => b[0].localeCompare(a[0])),
    [userHistory]
  );
  const lastDataDate = history[0][0];

  // Для кожної пари — коли була востаннє і скільки днів тому.
  const ranking = useMemo(() => {
    const today = Date.now();
    return PAIRS.map((p) => {
      const last = history.find(([, pair]) => pair === p);
      const days = last ? Math.floor((today - new Date(last[0]).getTime()) / DAY) : Infinity;
      const sinceData = last ? Math.floor((new Date(lastDataDate).getTime() - new Date(last[0]).getTime()) / DAY) : Infinity;
      return { p, last: last && last[0], days, sinceData };
    }).sort((a, b) => b.sinceData - a.sinceData);
  }, [history, lastDataDate]);

  const addEntry = () => {
    if (!newDate) return;
    const next = [...userHistory, [newDate, Number(newPair)]];
    setUserHistory(next);
    save(STORE_KEY, next);
    setNewDate('');
  };

  const removeEntry = (entry) => {
    const next = userHistory.filter((e) => e !== entry);
    setUserHistory(next);
    save(STORE_KEY, next);
  };

  const onText = (value) => { setText(value); save(DRAFT_KEY, value); };
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const daysOld = Math.floor((Date.now() - new Date(lastDataDate).getTime()) / DAY);
  const pairTopics = (p) => topics.filter((t) => t.n === p || t.n === p + 1);

  return (
    <div className="b2-page c1-info">
      <h1 className="b2-title">📝 Stellungnahme</h1>
      <p className="b2-hint">Schreiben · 20 тем парами (1+2, 3+4 …) · на іспиті дають одну пару, ви обираєте одну тему</p>

      <section className="c1-section">
        <h2>📊 Яка пара ймовірніша</h2>
        <p className="c1-uk">
          Правило з групи: пару, яку давали останні ~3 місяці, зазвичай не дають знову. Гарантії немає, це лише ймовірність.
        </p>
        {daysOld > 30 && (
          <p className="sn-warning">
            ⚠️ Останній запис у статистиці — {fmtDate(lastDataDate)} ({daysOld} дн. тому). Додайте свіжі дати з групи нижче, інакше прогноз неточний.
          </p>
        )}
        <div className="sn-ranking">
          {ranking.map((r, i) => {
            const level = r.sinceData >= 90 ? 'high' : r.sinceData >= 45 ? 'mid' : 'low';
            return (
              <button key={r.p} className={`sn-pair sn-pair--${level}${chosen === r.p ? ' active' : ''}`}
                onClick={() => setChosen(chosen === r.p ? null : r.p)}>
                <span className="sn-pair__rank">{i + 1}</span>
                <span className="sn-pair__nums">{r.p} + {r.p + 1}</span>
                <span className="sn-pair__last">востаннє {r.last ? fmtDate(r.last) : '—'}</span>
              </button>
            );
          })}
        </div>
        <p className="c1-uk">🟢 давно не було · 🟡 можливо · ⚪ нещодавно була. Натисніть на пару, щоб відкрити обидві теми.</p>

        {chosen && (
          <div className="sn-chosen">
            {pairTopics(chosen).map((t) => (
              <div key={t.n} className="c1-card">
                <h3>Thema {t.n}</h3>
                <p className="c1-de">{t.text}</p>
              </div>
            ))}
          </div>
        )}

        <details className="c1-info__part">
          <summary><span className="c1-info__part-name">➕ Додати дату іспиту / вся історія</span></summary>
          <div className="sn-add">
            <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
            <select value={newPair} onChange={(e) => setNewPair(e.target.value)}>
              {PAIRS.map((p) => <option key={p} value={p}>{p} + {p + 1}</option>)}
            </select>
            <button className="c1-btn" onClick={addEntry} disabled={!newDate}>Додати</button>
          </div>
          <p className="c1-uk">Додані вами дати зберігаються лише в цьому браузері.</p>
          <ul className="sn-history">
            {history.map((h) => {
              const own = userHistory.includes(h);
              return (
                <li key={h[0] + h[1]}>
                  {fmtDate(h[0])} — {h[1]} + {h[1] + 1}
                  {own && <button className="sn-remove" onClick={() => removeEntry(h)}>✕</button>}
                </li>
              );
            })}
          </ul>
        </details>
      </section>

      <section className="c1-section">
        <h2>20 тем з ідеями</h2>
        {topics.map((t) => (
          <details key={t.n} className="c1-info__part">
            <summary><span className="c1-info__part-name">{t.n}. {t.text}</span></summary>
            <div className="c1-proscons">
              <div className="c1-card c1-pro">
                <h3>👍 Pro</h3>
                <ul className="c1-de">{t.pro.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
              <div className="c1-card c1-contra">
                <h3>👎 Contra</h3>
                <ul className="c1-de">{t.contra.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            </div>
            <div className="c1-de"><strong>💡 Alternative:</strong> {t.alternative}</div>
          </details>
        ))}
      </section>

      <section className="c1-section">
        <h2>План тексту</h2>
        <ol className="c1-flow">
          {structure.map(([h, d], i) => (
            <li key={h}><span>{i + 1}</span><strong>{h}</strong><div className="c1-de">{d}</div></li>
          ))}
        </ol>
      </section>

      <section className="c1-section">
        <h2>Redemittel</h2>
        {redemittel.map(([title, items]) => (
          <details key={title} className="c1-info__part">
            <summary><span className="c1-info__part-name">{title}</span></summary>
            <ul className="c1-redemittel c1-de">{items.map((it) => <li key={it}>{it}</li>)}</ul>
          </details>
        ))}
      </section>

      <section className="c1-section">
        <h2>Пишемо</h2>
        <C1Timer presets={[{ label: '30:00', sec: 1800 }, { label: '45:00', sec: 2700 }]} />
        <textarea className="c1-textarea" value={text} onChange={(e) => onText(e.target.value)}
          placeholder="Wie ich erfahren habe, plant die Geschäftsführung, …" />
        <div className="c1-wordcount">Слів: {words}</div>
      </section>

      <Link to="/c1" className="back-link">← Назад</Link>
    </div>
  );
}

export default StellungnahmePage;
