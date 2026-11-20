import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WordCards from './exercises/WordCards';
import RetellTexte from './exercises/RetellTexte';
import BeruflicheAktivitaeten from './exercises/BeruflicheAktivitaeten';
import VonOderDurch from './exercises/VonOderDurch';
import MutZurPause from './exercises/MutZurPause';
import NeueArbeitswelt from './exercises/NeueArbeitswelt';
import Schilder from './exercises/Schilder';
import Gebrauchsanweisung from './exercises/Gebrauchsanweisung';
import AllesFalsch from './exercises/AllesFalsch';
import PassivZeitform from './exercises/PassivZeitform';
import { set6Words } from '../../data/homeworkSet6WordsData';
import './Familiengeschichte.css';
import './HomeworkSet4.css';

// Список вправ заняття 01.07. Додавай нові, замінюючи placeholder: true на component.
const exercises = [
  { n: 1, label: 'Vokabeln lernen', subtitle: 'Karteikarten zum Übersetzen ins Deutsche', component: <WordCards words={set6Words} /> },
  { n: 2, label: 'Text nacherzählen', subtitle: 'Lies den Text und erzähle ihn in eigenen Worten nach.', component: <RetellTexte /> },
  { n: 3, label: 'Aufgabe 1', subtitle: 'Berufliche Aktivitäten — Was bedeutet das? Ordnen Sie zu', component: <BeruflicheAktivitaeten /> },
  { n: 4, label: 'Aufgabe 2', subtitle: 'von oder durch in Passivsätzen — Ergänzen Sie', component: <VonOderDurch /> },
  { n: 5, label: 'Aufgabe 3', subtitle: 'Mut zur Pause! — Ergänzen Sie von oder durch', component: <MutZurPause /> },
  { n: 6, label: 'Aufgabe 4', subtitle: 'Neue Arbeitswelt — Sätze im Passiv mit von oder durch', component: <NeueArbeitswelt /> },
  { n: 7, label: 'Aufgabe 5', subtitle: 'Schilder — Sätze mit müssen, sollen oder nicht dürfen', component: <Schilder /> },
  { n: 8, label: 'Aufgabe 6', subtitle: 'Gebrauchsanweisung — nummerieren und Sätze im Passiv', component: <Gebrauchsanweisung /> },
  { n: 9, label: 'Aufgabe 7', subtitle: 'Alles falsch gemacht — Sätze im Präteritum (Passiv)', component: <AllesFalsch /> },
  { n: 10, label: 'Aufgabe 8', subtitle: 'Passiv — Achten Sie auf die Zeitform', component: <PassivZeitform /> },
];

function HomeworkSet6Page() {
  const [active, setActive] = useState(1);

  return (
    <div className="cloze-page">
      <h1 className="cloze-page__lesson">Unterricht am 01.07</h1>

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

export default HomeworkSet6Page;
