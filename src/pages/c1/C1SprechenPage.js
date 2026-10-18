import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { examFlow, sheets, topics, redemittel, discussionTask, discussions } from '../../data/c1/sprechenData';
import C1Timer from './C1Timer';
import '../B2Page.css';
import './C1InfoPage.css';
import './c1.css';

const pickTwo = () => {
  const a = Math.floor(Math.random() * topics.length);
  let b = Math.floor(Math.random() * (topics.length - 1));
  if (b >= a) b += 1;
  return [topics[a], topics[b]];
};

function C1SprechenPage() {
  const [drawn, setDrawn] = useState(null);

  return (
    <div className="b2-page c1-info">
      <h1 className="b2-title">🗣️ Mündlicher Ausdruck</h1>
      <p className="b2-hint">Paarprüfung · 20 хв підготовки + ~16 хв · 48 балів (16 за зміст + 32 за мову)</p>

      <section className="c1-section">
        <h2>🎲 Тренування як на іспиті</h2>
        <div className="c1-random">
          <button className="c1-btn" onClick={() => setDrawn(pickTwo())}>Витягнути 2 теми</button>
          {drawn && drawn.map((t) => (
            <div key={t.n} className="c1-random__topic">
              <strong>{t.n}.</strong> {t.title} <span className="c1-uk">({t.hint})</span>
            </div>
          ))}
          <C1Timer presets={[
            { label: 'Підготовка 20:00', sec: 1200 },
            { label: 'Презентація 3:00', sec: 180 },
            { label: 'Запитання 2:00', sec: 120 },
            { label: 'Дискусія 6:00', sec: 360 },
          ]} />
          <p className="c1-uk">Оберіть одну з двох тем. Не забудьте на початку сказати, до кого звертаєтесь (Vorgesetzte, Kollegen, Kunden, neue Mitarbeiter).</p>
        </div>
      </section>

      <section className="c1-section">
        <h2>Як проходить іспит</h2>
        <ol className="c1-flow">
          {examFlow.map((s, i) => (
            <li key={s.title}>
              <span>{i + 1}</span>
              <strong>{s.title}</strong><br />
              {s.text}
              {s.phrase && <div className="c1-de"><em>{s.phrase}</em></div>}
            </li>
          ))}
        </ol>
        <p className="c1-uk">
          Аркуші з Übungstest 1: {sheets.map((s) => `${s.who} — теми ${s.topics.join(' і ')}`).join('; ')}.
        </p>
      </section>

      <section className="c1-section">
        <h2>Teil 1A — 12 тем презентації</h2>
        <p className="c1-uk">На іспиті дають 2 теми саме з цього списку. Підготуйте план до кожної. Не вчіть текст напамʼять: таку промову екзаменатори переривають.</p>
        {topics.map((t) => (
          <details key={t.n} className="c1-info__part">
            <summary>
              <span className="c1-info__part-name">{t.n}. {t.title}</span>
              <span className="c1-info__part-meta">{t.hint}</span>
            </summary>
            <div className="c1-de"><strong>Gliederung:</strong></div>
            <ol className="c1-info__list c1-de">{t.plan.map((p) => <li key={p}>{p}</li>)}</ol>
            <div className="c1-de"><strong>Mögliche Anschlussfragen:</strong></div>
            <ul className="c1-info__list c1-de">{t.questions.map((q) => <li key={q}>{q}</li>)}</ul>
            <div className="c1-de"><strong>Wortschatz:</strong> {t.words.join(' · ')}</div>
          </details>
        ))}
      </section>

      <section className="c1-section">
        <h2>Redemittel</h2>
        {redemittel.map((r) => (
          <details key={r.title} className="c1-info__part">
            <summary><span className="c1-info__part-name">{r.title}</span></summary>
            <ul className="c1-redemittel c1-de">{r.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </details>
        ))}
      </section>

      <section className="c1-section">
        <h2>Teil 2 — Diskussion (6 хв)</h2>
        <div className="c1-card">
          <div className="c1-uk">Ситуація: у перерві ви розмовляєте з колегою. Завдання на аркуші:</div>
          <ul className="c1-de">{discussionTask.map((d) => <li key={d}>{d}</li>)}</ul>
        </div>
        {discussions.map((d) => (
          <details key={d.title} className="c1-info__part">
            <summary><span className="c1-info__part-name">„{d.title}"</span></summary>
            <div className="c1-proscons">
              <div className="c1-card c1-pro">
                <h3>👍 Pro</h3>
                <ul className="c1-de">{d.pro.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className="c1-card c1-contra">
                <h3>👎 Contra</h3>
                <ul className="c1-de">{d.contra.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </div>
            <div className="c1-de"><strong>Beispiele:</strong> {d.examples}</div>
            <p className="c1-uk">Не забудьте порівняти з Україною і Німеччиною: цього прямо вимагає завдання.</p>
          </details>
        ))}
      </section>

      <Link to="/c1" className="back-link">← Назад</Link>
    </div>
  );
}

export default C1SprechenPage;
