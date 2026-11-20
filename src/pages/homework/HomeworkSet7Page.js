import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WordCards from './exercises/WordCards';
import WebGuerillasVerben from './exercises/WebGuerillasVerben';
import WebGuerillasSaetze from './exercises/WebGuerillasSaetze';
import RetellWebGuerillas from './exercises/RetellWebGuerillas';
import { set7Words } from '../../data/homeworkSet7WordsData';
import { set7Words2 } from '../../data/homeworkSet7Words2Data';
import './Familiengeschichte.css';
import './HomeworkSet4.css';

// Список вправ заняття 09.07. Додавай нові, замінюючи placeholder: true на component.
const exercises = [
  { n: 1, label: 'Vokabeln lernen', subtitle: 'Karteikarten zum Übersetzen ins Deutsche', component: <WordCards words={set7Words} /> },
  { n: 2, label: 'Vokabeln lernen (Set 2)', subtitle: 'Karteikarten zum Übersetzen ins Deutsche', component: <WordCards words={set7Words2} /> },
  { n: 3, label: 'Übung 1', subtitle: 'Das passende Verb aus zwei Optionen wählen', component: <WebGuerillasVerben /> },
  { n: 4, label: 'Übung 2', subtitle: 'Sätze ins Deutsche übersetzen und mit den Karten prüfen', component: <WebGuerillasSaetze /> },
  { n: 5, label: 'Text nacherzählen', subtitle: 'WEB-GUERILLAS — den Text in eigenen Worten nacherzählen', component: <RetellWebGuerillas /> },
];

function HomeworkSet7Page() {
  const [active, setActive] = useState(1);

  return (
    <div className="cloze-page">
      <h1 className="cloze-page__lesson">Unterricht am 09.07</h1>

      <nav className="set4-nav">
        {exercises.map((ex) => (
          <button
            key={ex.n}
            className={`set4-nav__tab ${active === ex.n ? 'is-active' : ''}`}
            onClick={() => setActive(ex.n)}
          >
            {ex.label}
          </button>
        ))}
      </nav>

      {/* Усі вправи лишаються змонтованими, щоб зберігати прогрес при перемиканні вкладок */}
      {exercises.map((ex) => (
        <section
          key={ex.n}
          className="set4-exercise"
          style={{ display: active === ex.n ? 'block' : 'none' }}
        >
          <header className="set4-exercise__head">
            <h2 className="set4-exercise__title">{ex.label}</h2>
            {ex.subtitle && <p className="set4-exercise__subtitle">{ex.subtitle}</p>}
          </header>

          {ex.placeholder ? (
            <div className="set4-placeholder">
              Die Aufgabe folgt in Kürze.
            </div>
          ) : (
            ex.component
          )}
        </section>
      ))}

      <Link to="/homework" className="back-link">&larr; Zurück</Link>
    </div>
  );
}

export default HomeworkSet7Page;
