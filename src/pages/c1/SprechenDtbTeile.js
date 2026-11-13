import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  smalltalkTopics, smalltalkRedemittel, problemRedemittel, problems, moreProblems,
  teil1Topics, teil1Redemittel,
} from '../../data/sprechenDtbData';
import C1Timer from './C1Timer';
import { smalltalkTranslations, problemTranslations, extraProblemTranslations } from '../../data/sprechenDtbTranslations';
import { useC1TopicStatuses, TopicStatus, TopicStatusLogin } from './TopicStatus';
import '../B2Page.css';
import './C1InfoPage.css';
import './c1.css';

// Три сторінки усної частини DTB C1. На кожній: випадкова тема, таймер, Redemittel і внизу список усіх тем.
// Кнопка «▶» біля теми в списку робить її поточною і прокручує сторінку вгору.

const pick = (list) => list[Math.floor(Math.random() * list.length)];

const pickTwo = (list) => {
  const a = Math.floor(Math.random() * list.length);
  let b = Math.floor(Math.random() * (list.length - 1));
  if (b >= a) b += 1;
  return [list[a], list[b]];
};

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

function TranslationToggle({ translation }) {
  const [visible, setVisible] = useState(false);
  if (!translation) return null;
  return (
    <div className="c1-translation">
      <button type="button" className="c1-translation__button" aria-expanded={visible} onClick={() => setVisible(value => !value)}>
        {visible ? 'Сховати переклад' : '🌐 Показати переклад'}
      </button>
      {visible && <p className="c1-translation__text" lang="uk">{translation}</p>}
    </div>
  );
}

function RedemittelList({ items }) {
  return items.map(([title, list]) => (
    <details key={title} className="c1-info__part">
      <summary><span className="c1-info__part-name">{title}</span></summary>
      <ul className="c1-redemittel c1-de">{list.map((it) => <li key={it}>{it}</li>)}</ul>
    </details>
  ));
}

function Layout({ title, intro, children }) {
  return (
    <div className="b2-page c1-info">
      <h1 className="b2-title">{title}</h1>
      <p className="c1-uk">{intro}</p>
      {children}
      <Link to="/c1/sprechen-dtb" className="back-link">← Назад до Sprechen</Link>
    </div>
  );
}

function Solutions({ problem }) {
  return (
    <div className="c1-proscons" style={{ marginTop: 8 }}>
      <div className="c1-card c1-pro">
        <h3>⚡ kurzfristig</h3>
        <ul className="c1-de">{problem.short.map((x) => <li key={x}>{x}</li>)}</ul>
      </div>
      <div className="c1-card">
        <h3>🗓️ langfristig</h3>
        <ul className="c1-de">{problem.long.map((x) => <li key={x}>{x}</li>)}</ul>
      </div>
    </div>
  );
}

export function SprechenDtbTeil1() {
  const [current, setCurrent] = useState(null);
  const choose = (t) => { setCurrent([t]); toTop(); };

  return (
    <Layout
      title="Teil 1 — Über ein Thema sprechen"
      intro="1A: обираєте одну з двох тем і говорите ~2 хв. 1B: екзаменатор ставить уточнювальні запитання (~2 хв). 1C: другий екзаменатор просить партнера пояснити своїми словами один момент із ваших відповідей (~½ хв), тому слухайте партнера і робіть нотатки."
    >
      <div className="c1-random">
        <button className="c1-btn" onClick={() => setCurrent(pickTwo(teil1Topics))}>🎲 Витягнути 2 теми</button>
        {current && current.map((t) => (
          <div key={t.n} className="c1-random__topic c1-de">
            <strong>{t.n}.</strong> {t.title} <span className="c1-uk">(z. B. {t.hint})</span>
          </div>
        ))}
        <C1Timer presets={[{ label: 'Монолог 2:00', sec: 120 }, { label: 'Запитання 2:00', sec: 120 }]} />
      </div>

      <RedemittelList items={teil1Redemittel} />

      <section className="c1-section">
        <h2>Усі {teil1Topics.length} тем</h2>
        <p className="c1-uk">Офіційний список з Übungstest DTB C1. На іспиті дають 2 з них на вибір.</p>
        {teil1Topics.map((t) => (
          <div key={t.n} className="c1-card">
            <h3 className="c1-de">
              {t.n}. {t.title}{' '}
              <button className="c1-play" title="Тренувати цю тему" onClick={() => choose(t)}>▶</button>
            </h3>
            <div className="c1-uk">z. B. {t.hint}</div>
            <div className="c1-uk" style={{ marginTop: 6 }}>Можливі запитання екзаменатора:</div>
            <ul className="c1-de">{t.questions.map((q) => <li key={q}>{q}</li>)}</ul>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export function SprechenDtbTeil2() {
  const progress = useC1TopicStatuses();
  const [current, setCurrent] = useState(null);
  const choose = (t) => { setCurrent(t); toTop(); };

  return (
    <Layout
      title="Teil 2 — Smalltalk"
      intro="Неформальна розмова з колегою (~3 хв). Кожен отримує фразу, з якої починає розмову. Діліться досвідом, давайте поради, реагуйте на слова партнера, порівнюйте з Україною."
    >
      <div className="c1-random">
        <button className="c1-btn" onClick={() => setCurrent(pick(smalltalkTopics))}>🎲 Випадкова тема</button>
        {current && <>
          <div className="c1-random__topic c1-de">{current}</div>
          <TranslationToggle key={current} translation={smalltalkTranslations[smalltalkTopics.indexOf(current)]} />
        </>}
        <div className="c1-timer-status-row">
          <C1Timer presets={[{ label: '3:00', sec: 180 }, { label: '5:00', sec: 300 }]} />
          {current && <TopicStatus progress={progress} topicKey={'teil2-' + smalltalkTopics.indexOf(current)} />}
        </div>
      </div>

      <RedemittelList items={smalltalkRedemittel} />

      <section className="c1-section">
        <h2>Усі {smalltalkTopics.length} тем</h2>
        <p className="c1-uk">Теми, які траплялися на іспитах (з групи).</p>
        <TopicStatusLogin progress={progress} />
        <ol className="c1-info__list c1-de">
          {smalltalkTopics.map((t, i) => (
            <li key={t} className="c1-topic-row">
              <span>{t}{' '}<button className="c1-play" title="Тренувати цю тему" onClick={() => choose(t)}>▶</button></span>
              <TranslationToggle translation={smalltalkTranslations[i]} />
              <TopicStatus progress={progress} topicKey={'teil2-' + i} />
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  );
}

export function SprechenDtbTeil3() {
  const progress = useC1TopicStatuses();
  const [current, setCurrent] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const choose = (p) => { setCurrent(p); setShowSolution(false); toTop(); };

  return (
    <Layout
      title="Teil 3 — Problemlösung"
      intro="Разом із партнером шукаєте рішення (~4–5 хв): спершу термінові заходи (kurzfristig), потім довгострокові (langfristig). Пропонуйте, погоджуйтеся або заперечуйте і домовтеся, хто що робить."
    >
      <div className="c1-random">
        <button className="c1-btn" onClick={() => choose(pick(problems))}>🎲 Випадкова ситуація</button>
        {current && (
          <>
            <div className="c1-random__topic c1-de">{current.problem}</div>
            <TranslationToggle key={current.problem} translation={
              problems.some(p => p.problem === current.problem)
                ? problemTranslations[problems.findIndex(p => p.problem === current.problem)]
                : extraProblemTranslations[moreProblems.indexOf(current.problem)]
            } />
            {current.short && (
              <button className="c1-transcript__toggle" onClick={() => setShowSolution(!showSolution)}>
                {showSolution ? 'Сховати рішення' : '💡 Показати можливі рішення'}
              </button>
            )}
            {showSolution && current.short && <Solutions problem={current} />}
          </>
        )}
        <div className="c1-timer-status-row">
          <C1Timer presets={[{ label: '5:00', sec: 300 }, { label: '3:00', sec: 180 }]} />
          {current && <TopicStatus progress={progress} topicKey={
            problems.some(p => p.problem === current.problem)
              ? 'teil3-' + problems.findIndex(p => p.problem === current.problem)
              : 'teil3-extra-' + moreProblems.indexOf(current.problem)
          } />}
        </div>
      </div>

      <RedemittelList items={problemRedemittel} />

      <section className="c1-section">
        <h2>Усі {problems.length} ситуацій з рішеннями</h2>
        <p className="c1-uk">Спершу спробуйте самі, а потім відкрийте рішення.</p>
        <TopicStatusLogin progress={progress} />
        {problems.map((p, i) => (
          <div key={p.problem} className="c1-card">
            <h3 className="c1-de">
              {i + 1}. {p.problem}{' '}
              <button className="c1-play" title="Тренувати цю ситуацію" onClick={() => choose(p)}>▶</button>
            </h3>
            <TranslationToggle translation={problemTranslations[i]} />
            <TopicStatus progress={progress} topicKey={'teil3-' + i} />
            <details>
              <summary className="c1-uk">💡 рішення</summary>
              <Solutions problem={p} />
            </details>
          </div>
        ))}
      </section>

      <section className="c1-section">
        <h2>Ще {moreProblems.length} ситуацій без рішень</h2>
        <p className="c1-uk">Теж траплялися на іспитах, рішення придумайте самі.</p>
        <ol className="c1-info__list c1-de">
          {moreProblems.map((t, i) => (
            <li key={t} className="c1-topic-row">
              <span>{t}{' '}<button className="c1-play" title="Тренувати цю ситуацію" onClick={() => choose({ problem: t })}>▶</button></span>
              <TranslationToggle translation={extraProblemTranslations[i]} />
              <TopicStatus progress={progress} topicKey={'teil3-extra-' + i} />
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  );
}

