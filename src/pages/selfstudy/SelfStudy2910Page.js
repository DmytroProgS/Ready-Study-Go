import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { lesson2910Exercises } from '../../data/selfStudy2910Data';
import '../homework/Familiengeschichte.css';
import '../homework/HomeworkSet4.css';
import './SelfStudy2910Page.css';

const theorySections = [
  {
    "title": "Одне дієслово — різні прийменники",
    "items": [
      {
        "verb": "bestehen aus + Dativ",
        "uk": "складатися з",
        "de": "Der Kurs besteht aus drei Teilen."
      },
      {
        "verb": "bestehen auf + Dativ",
        "uk": "наполягати на",
        "de": "Ich bestehe auf einer Erklärung."
      },
      {
        "verb": "abhängen von + Dativ",
        "uk": "залежати від",
        "de": "Der Erfolg hängt von der Vorbereitung ab."
      },
      {
        "verb": "ankommen auf + Akkusativ",
        "uk": "мати вирішальне значення",
        "de": "Es kommt auf die Vorbereitung an."
      },
      {
        "verb": "sich erinnern an + Akkusativ",
        "uk": "згадувати",
        "de": "Ich erinnere mich an unseren Urlaub."
      },
      {
        "verb": "jemanden erinnern an + Akkusativ",
        "uk": "нагадувати",
        "de": "Dieses Foto erinnert mich an unseren Urlaub."
      },
      {
        "verb": "sich freuen auf + Akkusativ",
        "uk": "радіти майбутньому",
        "de": "Ich freue mich auf den Urlaub."
      },
      {
        "verb": "sich freuen über + Akkusativ",
        "uk": "радіти тому, що вже є",
        "de": "Ich freue mich über das Geschenk."
      },
      {
        "verb": "sprechen mit + Dativ",
        "uk": "говорити з кимось",
        "de": "Ich spreche mit meiner Kollegin."
      },
      {
        "verb": "sprechen über + Akkusativ",
        "uk": "говорити про щось",
        "de": "Ich spreche über meine Arbeit."
      }
    ]
  },
  {
    "title": "Однаковий переклад — різні прийменники",
    "items": [
      {
        "verb": "leiden an + Dativ",
        "uk": "страждати на хворобу",
        "de": "Sie leidet an einer chronischen Krankheit."
      },
      {
        "verb": "leiden unter + Dativ",
        "uk": "страждати від обставин",
        "de": "Viele Menschen leiden unter dem Stress."
      },
      {
        "verb": "denken an + Akkusativ",
        "uk": "думати про",
        "de": "Ich denke an meine Familie."
      },
      {
        "verb": "nachdenken über + Akkusativ",
        "uk": "обмірковувати",
        "de": "Ich denke über meine berufliche Zukunft nach."
      },
      {
        "verb": "sich interessieren für + Akkusativ",
        "uk": "цікавитися",
        "de": "Ich interessiere mich für die ukrainische Geschichte."
      },
      {
        "verb": "sich beschäftigen mit + Dativ",
        "uk": "займатися темою",
        "de": "Ich beschäftige mich mit der ukrainischen Geschichte."
      },
      {
        "verb": "sorgen für + Akkusativ",
        "uk": "дбати, забезпечувати",
        "de": "Sie sorgt für ihre Kinder."
      },
      {
        "verb": "sich sorgen um + Akkusativ",
        "uk": "хвилюватися за",
        "de": "Sie sorgt sich um ihre Kinder."
      },
      {
        "verb": "bitten um + Akkusativ",
        "uk": "просити",
        "de": "Ich bitte um Ihre Unterstützung."
      },
      {
        "verb": "fragen nach + Dativ",
        "uk": "запитувати",
        "de": "Ich frage nach dem Termin."
      },
      {
        "verb": "halten von + Dativ",
        "uk": "мати думку про",
        "de": "Was hältst du von diesem Vorschlag?"
      },
      {
        "verb": "halten für + Akkusativ",
        "uk": "вважати кимось / чимось",
        "de": "Ich halte ihn für einen guten Wissenschaftler."
      },
      {
        "verb": "sich entschuldigen bei + Dativ",
        "uk": "вибачатися перед кимось",
        "de": "Ich entschuldige mich bei meiner Kollegin."
      },
      {
        "verb": "sich entschuldigen für + Akkusativ",
        "uk": "вибачатися за щось",
        "de": "Ich entschuldige mich für meinen Fehler."
      }
    ]
  },
  {
    "title": "Пари, які легко сплутати на B2–C1",
    "items": [
      {
        "verb": "sich verlassen auf + Akkusativ",
        "uk": "покладатися",
        "de": "Ich verlasse mich auf dich."
      },
      {
        "verb": "sich gewöhnen an + Akkusativ",
        "uk": "звикати",
        "de": "Ich gewöhne mich an das deutsche Leben."
      },
      {
        "verb": "sich entscheiden für + Akkusativ",
        "uk": "обирати",
        "de": "Ich entscheide mich für den C1-Kurs."
      },
      {
        "verb": "sich entscheiden gegen + Akkusativ",
        "uk": "відмовлятися від вибору",
        "de": "Ich entscheide mich gegen den C1-Kurs."
      },
      {
        "verb": "sich beziehen auf + Akkusativ",
        "uk": "стосуватися, посилатися",
        "de": "Die Studie bezieht sich auf die 1920er-Jahre."
      }
    ]
  }
];

function PracticeDeck({ exercise }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const card = exercise.cards[index];
  const next = () => { setIndex(i => i + 1); setRevealed(false); };
  const restart = () => { setIndex(0); setRevealed(false); };
  return <div className="lesson2910-practice">

    <p className="lesson2910-description">{exercise.description}</p>
    {card ? <>
      <div className="lesson2910-counter">Картка {index + 1} із {exercise.cards.length}</div>
      <div className="lesson2910-uk">{card.uk}</div>
      <p className="lesson2910-instruction">Скажи німецькою вголос, потім відкрий відповідь.</p>
      {revealed && <div className="lesson2910-answer"><strong>{card.de}</strong><div className="lesson2910-tip">💡 {card.tip}</div></div>}
      <div className="lesson2910-actions">
        <button type="button" onClick={() => setRevealed(v => !v)}>{revealed ? 'Сховати відповідь' : 'Показати відповідь'}</button>
        <button type="button" className="lesson2910-secondary" onClick={next}>Наступна →</button>
      </div>
    </> : <div className="lesson2910-finished"><h3>Всі приклади пройдено!</h3><button type="button" onClick={restart}>Почати спочатку</button></div>}
  </div>;
}

const tabs = [{key:'theory',label:'📊 Презентація (теорія)'},...lesson2910Exercises.map((_,i)=>({key:'exercise'+i,label:'🗂 Вправа '+(i+1)}))];

export default function SelfStudy2910Page() {
  const [active,setActive] = useState('theory');
  return <div className="cloze-page">
    <h1 className="cloze-page__lesson">Самостійне заняття 29.10</h1>
    <nav className="set4-nav" aria-label="Розділи заняття">
      {tabs.map(t=><button key={t.key} type="button" className={`set4-nav__tab ${active===t.key?'is-active':''}`} onClick={()=>setActive(t.key)}>{t.label}</button>)}
    </nav>
    <section className="set4-exercise lesson2910-section">
      {active==='theory' ? <div className="lesson2910-theory"><h2>Презентація · Дієслова з прийменниками</h2><p>16 пар, які легко сплутати. Теорію перенесено з PowerPoint у зручний для читання формат.</p>{theorySections.map(section=><div key={section.title}><h3>{section.title}</h3><div className="lesson2910-theory-grid">{section.items.map(item=><article className="lesson2910-theory-card" key={item.verb}><strong>{item.verb}</strong><p>{item.uk}</p><em>{item.de}</em></article>)}</div></div>)}<p><strong>Шпаргалка:</strong> aus, von, mit, nach, bei — Dativ; für, um, gegen — Akkusativ. Важливі винятки: bestehen auf та leiden an — Dativ.</p></div> : <PracticeDeck key={active} exercise={lesson2910Exercises[Number(active.replace('exercise',''))]}/>}
    </section>
    <Link to="/self-study" className="back-link">&larr; Назад</Link>
  </div>;
}
