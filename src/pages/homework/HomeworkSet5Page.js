import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalverbenTabelle from './exercises/ModalverbenTabelle';
import ModalverbenZuordnen from './exercises/ModalverbenZuordnen';
import ModalverbenUmformulieren from './exercises/ModalverbenUmformulieren';
import './Familiengeschichte.css';
import './HomeworkSet4.css';

// Список вправ заняття 11.06. Додавай нові, замінюючи placeholder: true на component.
const exercises = [
  { n: 1, label: 'Modalverben', subtitle: 'Wiederholung L2 — таблиця значень модальних дієслів', component: <ModalverbenTabelle /> },
  { n: 2, label: 'Завдання 1', subtitle: 'Welche Bedeutung haben die kursiven Modalverben? — зіставлення', component: <ModalverbenZuordnen /> },
  { n: 3, label: 'Завдання 2', subtitle: 'Deutsche Auswanderung nach Australien — вибір альтернатив і переказ', component: <ModalverbenUmformulieren /> },
];

function HomeworkSet5Page() {
  const [active, setActive] = useState(1);

  return (
    <div className="cloze-page">
      <h1 className="cloze-page__lesson">Заняття 11.06</h1>

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
              Завдання буде додано незабаром.
            </div>
          ) : (
            ex.component
          )}
        </section>
      ))}

      <Link to="/homework" className="back-link">&larr; Назад</Link>
    </div>
  );
}

export default HomeworkSet5Page;
