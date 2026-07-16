import React from 'react';
import './LebenswegeTexte.css';

// Повний текст WEB-GUERILLAS (абзаци A–D) для переказу.
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
    {
      mark: 'B',
      paragraphs: [
        'Wie in vielen Firmen vermischen sich dabei Beruf und Privatleben. Doch hier ist das auch Programm. Denn die Agentur hat sich auf alternative Werbeformen spezialisiert, das sogenannte Guerilla-Marketing. Dazu zählen Kampagnen, die soziale Netzwerke, Internetforen, Fanseiten oder Firmenblogs als Medium verwenden und die bei einer möglichst großen Anzahl von Personen einen Überraschungseffekt – den sogenannten Guerilla-Effekt – erzielen.',
      ],
    },
    {
      mark: 'C',
      paragraphs: [
        'Es ist nicht immer so leicht zu unterscheiden, ob jemand als Privatperson oder als Werbetreibender agiert. Im Gegenteil: Bei dieser Art von Werbung muss man Aufgaben kreativ lösen und dabei seine ganze Persönlichkeit möglichst überzeugend einbringen. Wer in einem sozialen Netzwerk viele Freunde hat und auch privat einen Blog führt, hat bessere Einstellungschancen.',
      ],
    },
    {
      mark: 'D',
      paragraphs: [
        '„Das Internet ist das perfekte Medium", sagt der Agenturchef David Eicher. Trotz der Krise hat sich die Zahl der Mitarbeiter innerhalb von drei Jahren verdreifacht. Was früher nur ein Ladenlokal war, erstreckt sich jetzt über drei Etagen. Und doch wird schon erneut über einen Umzug nachgedacht. Letztes Jahr betrug der Umsatz 5,5 Millionen Euro, im Rückblick ist das eine Steigerung von fast hundert Prozent im Vergleich zum Vorjahr.',
      ],
    },
  ],
};

function RetellWebGuerillasFull() {
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

export default RetellWebGuerillasFull;
