import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FamiliengeschichteCloze from './exercises/FamiliengeschichteCloze';
import VerbenMatch from './exercises/VerbenMatch';
import NomenBilden from './exercises/NomenBilden';
import MigrationsTexte from './exercises/MigrationsTexte';
import LebenswegeTexte from './exercises/LebenswegeTexte';
import Wortschatz from './exercises/Wortschatz';
import './Familiengeschichte.css';
import './HomeworkSet4.css';

// Список вправ заняття. Додавай нові, замінюючи placeholder: true на component.
const exercises = [
  { n: 1, label: 'Вправа 1', subtitle: 'Familiengeschichte — дієслова у правильній формі', component: <FamiliengeschichteCloze /> },
  { n: 2, label: 'Вправа 2', subtitle: 'Finden Sie das passende Verb — підбір дієслова', component: <VerbenMatch /> },
  { n: 3, label: 'Вправа 3', subtitle: 'Nomen zu den Verben — артикль і пропущені літери', component: <NomenBilden /> },
  { n: 4, label: 'Вправа 4', subtitle: 'Migrationsgeschichten — тексти для читання', component: <MigrationsTexte /> },
  { n: 5, label: 'Вправа 5', subtitle: 'Lebenswege — три тексти для читання', component: <LebenswegeTexte /> },
  { n: 6, label: 'Слова', subtitle: 'Wortschatz — флешкартки (клік = переклад)', component: <Wortschatz /> },
];

function HomeworkSet4Page() {
  const [active, setActive] = useState(1);

  return (
    <div className="cloze-page">
      <h1 className="cloze-page__lesson">Заняття 08.06</h1>

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

export default HomeworkSet4Page;
