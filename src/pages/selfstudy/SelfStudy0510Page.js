import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoLesson from './VideoLesson';
import Quiz from './Quiz';
import VocabCards from './VocabCards';
import { lesson0510Video, lesson0510Discussion, lesson0510Personal, lesson0510Quiz, lesson0510Vocab, lesson0510Extra } from '../../data/selfStudy0510Data';
import '../homework/Familiengeschichte.css';
import '../homework/HomeworkSet4.css';

const tabs = [
  { key: 'video', label: '🎬 Video', component: <VideoLesson youtubeId={lesson0510Video.youtubeId} title={lesson0510Video.title} discussion={lesson0510Discussion} personal={lesson0510Personal} /> },
  { key: 'quiz', label: '❓ Quiz', component: <Quiz questions={lesson0510Quiz} /> },
  { key: 'vocab', label: '🗂 Wortschatz', component: <VocabCards words={lesson0510Vocab} /> },
  { key: 'extra', label: '➕ Zusatzmaterial', component: <VocabCards words={lesson0510Extra} /> },
];

function SelfStudy0510Page() {
  const [active, setActive] = useState('video');

  return (
    <div className="cloze-page">
      <h1 className="cloze-page__lesson">Selbststudium am 05.10</h1>

      <nav className="set4-nav">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`set4-nav__tab ${active === t.key ? 'is-active' : ''}`}
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* Усі секції лишаються змонтованими, щоб зберігати стан (прогрес квізу тощо) */}
      {tabs.map((t) => (
        <section
          key={t.key}
          className="set4-exercise"
          style={{ display: active === t.key ? 'block' : 'none' }}
        >
          {t.component}
        </section>
      ))}

      <Link to="/self-study" className="back-link">&larr; Zurück</Link>
    </div>
  );
}

export default SelfStudy0510Page;
