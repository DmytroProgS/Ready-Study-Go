import React from 'react';
import './MigrationsTexte.css';

const profiles = [
  {
    id: 1,
    name: 'William Wagner',
    age: 67,
    text:
      'William Wagner lebt in Minneapolis in den USA und erforscht seine Familiengeschichte. Dabei hat er herausgefunden, dass sein Urgroßvater Friedrich Deutschland 1893 aus wirtschaftlichen Gründen verlassen hat und in die USA emigriert ist.',
  },
  {
    id: 2,
    name: 'Zeliha Yıldız',
    age: 49,
    text:
      'Zeliha Yıldız ist in Deutschland geboren und hat einen türkischen Migrationshintergrund. Ihre Eltern waren sogenannte Gastarbeiter. Sie sind in den 1960er-Jahren eingewandert, um in Deutschland zu arbeiten.',
  },
  {
    id: 3,
    name: 'Jaro Babić',
    age: 33,
    text:
      'Jaro Babić und seine Familie sind 1994 aus Bosnien-Herzegowina, im ehemaligen Jugoslawien, vor dem Krieg geflohen. In Deutschland konnten sie Asyl beantragen. Nach dem Krieg kehrten sie nach Bosnien zurück.',
  },
  {
    id: 4,
    name: 'Ruth Guttmann',
    age: 80,
    text:
      'Ruth Guttmann ist 1943 mit ihrer Familie vor den Nationalsozialisten geflohen und fand in Israel eine neue Heimat. Die Familie nahm die israelische Staatsbürgerschaft an. Ruth ist nie wieder nach Deutschland zurückgekehrt.',
  },
  {
    id: 5,
    name: 'Oksana Zimmer',
    age: 36,
    text:
      'Oksana Zimmer ist 1993 mit ihrer Familie aus Russland nach Deutschland gekommen. Da sie nachweisen konnten, dass sie deutsche Vorfahren hatten, wurden sie als Spätaussiedler anerkannt. In Deutschland hoffte die Familie, ihre Lebensbedingungen verbessern zu können.',
  },
  {
    id: 6,
    name: 'Ronny Brand',
    age: 38,
    text:
      'Ronny Brand hat schon immer Fernweh gehabt. Mit 16 Jahren brach er von Hamburg zu seiner ersten Reise auf und war seitdem immer unterwegs. In sieben Ländern hat er schon gelebt und gearbeitet. Jetzt hat er sich in Thailand niedergelassen und eine kleine Bar am Strand eröffnet.',
  },
];

function MigrationsTexte() {
  return (
    <div className="mtexte">
      <p className="cloze-page__instruction">
        Lesen Sie die Texte. Прочитайте історії шести людей про їхній досвід міграції.
      </p>

      <div className="mtexte-grid">
        {profiles.map((p) => (
          <article key={p.id} className="mtexte-card">
            <header className="mtexte-card__head">
              <span className="mtexte-card__num">{p.id}</span>
              <span className="mtexte-card__name">
                {p.name} <span className="mtexte-card__age">({p.age})</span>
              </span>
            </header>
            <p className="mtexte-card__text">{p.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default MigrationsTexte;
