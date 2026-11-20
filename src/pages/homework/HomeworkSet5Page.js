import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalverbenTabelle from './exercises/ModalverbenTabelle';
import ModalverbenZuordnen from './exercises/ModalverbenZuordnen';
import ModalverbenUmformulieren from './exercises/ModalverbenUmformulieren';
import './Familiengeschichte.css';
import './HomeworkSet4.css';

// Список вправ заняття 11.06. Додавай нові, замінюючи placeholder: true на component.
const exercises = [
  { n: 1, label: 'Modalverben', subtitle: 'Wiederholung L2 — Bedeutungen der Modalverben im Überblick', component: <ModalverbenTabelle /> },
  { n: 2, label: 'Aufgabe 1', subtitle: 'Welche Bedeutung haben die kursiven Modalverben? – Zuordnung', component: <ModalverbenZuordnen /> },
  { n: 3, label: 'Aufgabe 2', subtitle: 'Deutsche Auswanderung nach Australien — Alternativen wählen und den Text nacherzählen', component: <ModalverbenUmformulieren /> },
];

function HomeworkSet5Page() {
  const [active, setActive] = useState(1);

  return (
    <div className="cloze-page">
      <h1 className="cloze-page__lesson">Unterricht am 11.06</h1>

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

export default HomeworkSet5Page;
