import React from 'react';
import './LebenswegeTexte.css';

// Тексти для переказу. Кожен абзац — рядок.
const texts = [
  {
    num: 1,
    title: 'Nils H., 30',
    subtitle: 'Blogger / Community-Manager',
    paragraphs: [
      'Nils H., 30, arbeitet für verschiedene Unternehmen und betreut deren Blogs. Das heißt, er verfasst Beiträge für deren Blog-Seiten und beantwortet dort kritische Kommentare von Kunden. So hält er die Kommunikation mit den Kunden der Unternehmen am Laufen. Wichtig findet er, dass er mit seinen Beiträgen einen sympathischen und ungezwungenen Eindruck hinterlässt.',
    ],
  },
  {
    num: 2,
    title: 'Anna G., 31',
    subtitle: 'Social-Media-Managerin',
    paragraphs: [
      'Anna G., 31, betreut für ihre Kunden unkonventionelle Werbeaktionen in sozialen Netzwerken. Dort macht sie zum Beispiel Werbung für einen neuen Schokoriegel mit einem Gewinnspiel. Der Riegel soll von den Besuchern der Seite bewertet werden. Es gefällt ihr, dass sie immer sofort Feedback bekommt.',
    ],
  },
];

function RetellTexte() {
  return (
    <div className="lwege">
      <p className="cloze-page__instruction">
        Прочитайте текст і перекажіть його своїми словами.
      </p>

      {texts.map((text) => (
        <article key={text.num} className="lwege-story">
          <header className="lwege-story__head">
            <span className="lwege-story__num">{text.num}</span>
            <div>
              <h3 className="lwege-story__title">{text.title}</h3>
              {text.subtitle && <p className="lwege-story__author">{text.subtitle}</p>}
            </div>
          </header>
          <div className="lwege-story__body">
            {text.paragraphs.map((p, pi) => (
              <p key={pi}>{p}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

export default RetellTexte;
