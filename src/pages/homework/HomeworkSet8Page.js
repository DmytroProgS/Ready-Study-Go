import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WordCards from './exercises/WordCards';
import SichLassenGrammatik from './exercises/SichLassenGrammatik';
import SichLassen from './exercises/SichLassen';
import RetellWebGuerillasFull from './exercises/RetellWebGuerillasFull';
import { set8Vocab } from '../../data/homeworkSet8VocabData';
import './Familiengeschichte.css';
import './HomeworkSet4.css';

// Список вправ заняття 16.07. Додавай нові об'єкти сюди (див. приклад у HomeworkSet7Page.js).
const exercises = [
  { n: 1, label: 'Граматика', subtitle: 'sich + lassen + Infinitiv — 8 рівнів + чекпоінти', component: <SichLassenGrammatik /> },
  { n: 2, label: 'Завдання 1', subtitle: 'sich + lassen + Infinitiv — переформулюй речення', component: <SichLassen /> },
  { n: 3, label: 'Словник', subtitle: 'Місто / подорожі — картки: переклади на німецьку', component: <WordCards words={set8Vocab} /> },
  { n: 4, label: 'Переказ тексту', subtitle: 'WEB-GUERILLAS (A–D) — прочитай текст і перекажи своїми словами', component: <RetellWebGuerillasFull /> },
];

function HomeworkSet8Page() {
  const [active, setActive] = useState(exercises[0]?.n ?? null);

  return (
    <div className="cloze-page">
      <h1 className="cloze-page__lesson">Заняття 16.07</h1>

      {exercises.length === 0 ? (
        <p className="cloze-page__instruction">Завдання скоро з'являться. 🐷</p>
      ) : (
        <>
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
                <div className="set4-placeholder">Завдання буде додано незабаром.</div>
              ) : (
                ex.component
              )}
            </section>
          ))}
        </>
      )}

      <Link to="/homework" className="back-link">&larr; Назад</Link>
    </div>
  );
}

export default HomeworkSet8Page;
