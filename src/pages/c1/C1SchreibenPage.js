import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import C1Timer from './C1Timer';
import '../B2Page.css';
import './C1InfoPage.css';
import './c1.css';

// Теми — з Übungstest 1 telc Deutsch C1 Beruf.
const themes = [
  {
    id: 1,
    title: 'Thema 1 — Tätigkeitswechsel',
    situation: 'Ihr Vorgesetzter plant eine Neuausrichtung der strategischen Personalentwicklung. Er bittet Sie, Argumente zu einem regelmäßigen Tätigkeitswechsel innerhalb des Unternehmens zusammenzutragen und sich kritisch damit auseinanderzusetzen. Legen Sie Vor- und Nachteile dar und begründen Sie am Schluss Ihre eigene Position.',
    quotes: [
      'Häufiger Arbeitsplatzwechsel innerhalb der Firma fördert flexibles Denken und begünstigt Innovationen.',
      'Ein längerer Verbleib von Mitarbeitern in demselben Arbeitsbereich gewährleistet Kontinuität und einen Zuwachs an Kompetenz.',
    ],
  },
  {
    id: 2,
    title: 'Thema 2 — Messestand',
    situation: 'Ihr Vorgesetzter denkt darüber nach, die Firma zum ersten Mal auf einer internationalen Fachmesse zu präsentieren. Er bittet Sie, Argumente zu einem Messestand zusammenzutragen und sich kritisch damit auseinanderzusetzen. Legen Sie Vor- und Nachteile dar und begründen Sie am Schluss Ihre eigene Position.',
    quotes: [
      'Fachmessen sprechen gezielt interessierte Kunden an und sind somit effektiver als viele andere Werbemaßnahmen.',
      'Messestände sind teuer in Planung und Umsetzung und führen nur selten zu konkreten Aufträgen.',
    ],
  },
];

const structure = [
  ['Einleitung (≈ 50 Wörter)', 'Anlass nennen (Bitte des Vorgesetzten), Thema einführen, Aufbau ankündigen.'],
  ['Vorteile (≈ 100 Wörter)', '2–3 Argumente, jeweils mit Begründung und Beispiel. Erste These aufgreifen.'],
  ['Nachteile (≈ 100 Wörter)', 'Genauso ausführlich wie die Vorteile! Zweite These aufgreifen.'],
  ['Eigene Position (≈ 70 Wörter)', 'Abwägen, klare Empfehlung mit Begründung, evtl. Kompromiss.'],
  ['Schluss (≈ 30 Wörter)', 'Kurze Zusammenfassung, Angebot zum Gespräch.'],
];

const redemittel = [
  ['Einleitung', ['Wie von Ihnen gewünscht, habe ich mich mit der Frage auseinandergesetzt, ob …', 'Im Folgenden möchte ich die Vor- und Nachteile von … darlegen.']],
  ['Argumente einleiten', ['Für … spricht in erster Linie, dass …', 'Ein weiteres Argument ist …', 'Hinzu kommt, dass …', 'Nicht zu unterschätzen ist außerdem …']],
  ['Gegenargumente', ['Dem steht jedoch gegenüber, dass …', 'Kritiker wenden ein, dass …', 'Andererseits darf man nicht außer Acht lassen, dass …', 'Ein gewichtiger Nachteil besteht darin, dass …']],
  ['Beispiele & Begründungen', ['Dies lässt sich am Beispiel … veranschaulichen.', 'Das liegt vor allem daran, dass …', 'Infolgedessen …  /  Folglich …']],
  ['Eigene Position', ['Nach Abwägung aller Argumente bin ich der Ansicht, dass …', 'Ich würde daher empfehlen, …', 'Sinnvoll wäre aus meiner Sicht ein Kompromiss: …']],
  ['Schluss', ['Zusammenfassend lässt sich festhalten, dass …', 'Für Rückfragen stehe ich Ihnen gern zur Verfügung.']],
];

const DRAFT_KEY = 'c1-schreiben-draft';

function loadDraft() {
  try { return localStorage.getItem(DRAFT_KEY) || ''; } catch (e) { return ''; }
}

function C1SchreibenPage() {
  const [theme, setTheme] = useState(0);
  const [text, setText] = useState(loadDraft);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const onChange = (value) => {
    setText(value);
    try { localStorage.setItem(DRAFT_KEY, value); } catch (e) { /* чернетка — лише зручність */ }
  };

  const t = themes[theme];

  return (
    <div className="b2-page c1-info">
      <h1 className="b2-title">✍️ Schriftlicher Ausdruck</h1>
      <p className="b2-hint">70 хв · ~350 слів · 48 балів (4 критерії × 12)</p>

      <section className="c1-section">
        <h2>Завдання (Übungstest 1)</h2>
        <div className="lesen-variant-nav" style={{ marginBottom: 10 }}>
          {themes.map((th, i) => (
            <button key={th.id} className={'lesen-variant-btn' + (i === theme ? ' active' : '')} onClick={() => setTheme(i)}>
              {th.title}
            </button>
          ))}
        </div>
        <div className="c1-card">
          <p className="c1-de">{t.situation}</p>
          <p className="c1-uk">Die folgenden Aussagen geben Ihnen erste Ideen:</p>
          <ul className="c1-redemittel c1-de">{t.quotes.map((q) => <li key={q}>„{q}“</li>)}</ul>
          <p className="c1-uk">Обидві тези треба врахувати. Наприкінці обовʼязково має бути власна позиція.</p>
        </div>
      </section>

      <section className="c1-section">
        <h2>Пишемо</h2>
        <C1Timer presets={[{ label: 'Іспит 70:00', sec: 4200 }, { label: 'Тренування 40:00', sec: 2400 }]} />
        <textarea className="c1-textarea" value={text} onChange={(e) => onChange(e.target.value)}
          placeholder="Sehr geehrte/r … / Wie von Ihnen gewünscht, habe ich …" />
        <div className={'c1-wordcount' + (words >= 300 && words <= 420 ? ' ok' : '')}>
          Слів: {words} / ~350
        </div>
      </section>

      <section className="c1-section">
        <h2>План тексту</h2>
        <ol className="c1-flow">
          {structure.map(([h, d], i) => (
            <li key={h}><span>{i + 1}</span><strong>{h}</strong><div className="c1-de">{d}</div></li>
          ))}
        </ol>
        <p className="c1-uk">Пишіть абзацами: текст одним суцільним блоком у зразку telc отримав C за Kommunikative Gestaltung.</p>
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
        <h2>Як оцінюють</h2>
        <div className="c1-card">
          <ul>
            <li><strong>Aufgabengerechtheit</strong>: усе із завдання, «roter Faden», критичний погляд.</li>
            <li><strong>Korrektheit</strong>: майже без помилок, окрім складних конструкцій.</li>
            <li><strong>Repertoire</strong>: широкий словник, складні речення.</li>
            <li><strong>Kommunikative Gestaltung</strong>: абзаци, Konnektoren, займенники, синоніми.</li>
          </ul>
          <p>Кожен критерій оцінюють за шкалою A / B / C / D, що дає 12 / 8 / 4 / 0 балів. Текст не на тему отримує D за всіма критеріями.</p>
        </div>
      </section>

      <Link to="/c1" className="back-link">← Назад</Link>
    </div>
  );
}

export default C1SchreibenPage;
