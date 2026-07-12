import React from 'react';
import './LebenswegeTexte.css';

// Текст для переказу — WEB-GUERILLAS. Кожен абзац — окремий рядок у paragraphs.
const text = {
  title: 'WEB-GUERILLAS',
  subtitle: 'Besuch in einer Firma der Zukunft',
  sections: [
    {
      mark: 'A',
      paragraphs: [
        'Es gibt sie wirklich, diese Arbeitsplätze, die aussehen wie aus dem Werbespot. Fröhliche Menschen lümmeln sich vor großen Bildschirmen, sie zapfen Kaffee aus prächtigen Espressomaschinen und nennen ihren Chef „El Presidente". Ein Ladenlokal im Münchener Glockenbachviertel. Draußen sitzen die Leute in der Sonne, drinnen stehen alle Türen offen. Rechts auf dem Flur ein rotes Rennauto, links führt eine Treppe zur gelb leuchtenden Teeküche, an der Tür die Aufschrift „Yellow Submarine". Die Köchin bereitet gerade das Essen vor, Lammfilet mit Schmortomaten, kostenlos für alle 62 Mitarbeiter. Die Geschäftsleitung übernimmt die Ausgaben für das Essen. „Wir sitzen hier nicht nur unseren Job ab", sagt Angela von Hayden, Assistentin in der Agentur mit dem schönen Namen Web-Guerillas. „Wir sind wie eine große WG und machen auch privat viel zusammen. Bei uns gibt es Kicker-Turniere, Filmabende und Betriebsausflüge an den Gardasee."',
      ],
    },
  ],
};

function RetellWebGuerillas() {
  return (
    <div className="lwege">
      <p className="cloze-page__instruction">
        Прочитайте текст і перекажіть його своїми словами.
      </p>

      <article className="lwege-story">
        <header className="lwege-story__head">
          <div>
            <h3 className="lwege-story__title">{text.title}</h3>
            {text.subtitle && <p className="lwege-story__author">{text.subtitle}</p>}
          </div>
        </header>
        <div className="lwege-story__body">
          {text.sections.map((sec) => (
            <div key={sec.mark} className="lwege-story__section">
              {sec.paragraphs.map((p, pi) => (
                <p key={pi}>
                  {pi === 0 && sec.mark && (
                    <span className="lwege-story__mark">{sec.mark}</span>
                  )}
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

export default RetellWebGuerillas;
