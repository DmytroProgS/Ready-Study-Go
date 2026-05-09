import React from 'react';
import { Link } from 'react-router-dom';
import './HomeworkSet2Exercises.css';

const stories = [
  {
    num: 1,
    title: 'Aus dem Lärm in die Ruhe',
    author: 'Jakob Graf, 40, Pädagoge, Berlin',
    paragraphs: [
      <>35 Jahre lang habe ich in einer Großstadt gelebt. Das bedeutet: viel Lärm, Staub und Stress. Je älter ich wurde, desto mehr habe ich mich nach Ruhe und Natur gesehnt<sup>4</sup>. Ich wollte nah am Wasser wohnen, am liebsten auf einem eigenen Hausboot. Es hat ziemlich lange gedauert, bis ich diesen Traum verwirklichen konnte. Ein Baukredit hat mir dabei geholfen – und ohne die Unterstützung meines Vaters hätte das wohl auch nicht geklappt.</>,
      <>Seit einem Jahr wohne ich jetzt auf meinem eigenen Hausboot. Und es ist einfach großartig. Als Pädagoge gebe ich meine Begeisterung fürs Wasser nämlich gern an Kinder weiter. Ich arbeite mit Schulen und Kindergärten zusammen und wir organisieren regelmäßig Tagesausflüge. Solche Aktivitäten finde ich wichtig, denn sie bieten den Kindern viele Anregungen<sup>5</sup>. Ich habe gemerkt: Wenn ich am Wasser bin, fühle ich mich ruhiger, und mit mir und der Natur verbunden.</>,
    ],
  },
  {
    num: 2,
    title: 'Wind und Wellen spüren',
    author: 'Anja Weber, 33, Surflehrerin, Kiel',
    paragraphs: [
      <>Nach dem Abitur habe ich eine Ausbildung zur Bürokauffrau gemacht und gleich danach angefangen zu arbeiten. Relativ schnell habe ich festgestellt, dass dieser Beruf nichts für mich ist. Ich liebe die Bewegung. Im Büro fühlte ich mich einfach eingesperrt. Ich war richtig unglücklich, aber ich hatte natürlich auch Angst, meinen Job aufzugeben.</>,
      <>Es hat fünf Jahre gedauert, bis ich all meinen Mut zusammengenommen habe. Ein alter Schulfreund hat mich beraten und unterstützt. Wir haben zusammen eine Surfschule gegründet – und ich habe dann tatsächlich gekündigt.</>,
      <>Seitdem sieht mein Alltag komplett anders aus. Am Vormittag sitze ich mit meinen Surfschülern am Strand und erkläre ihnen die wichtigsten Surfregeln. Dann geht's entweder zusammen aufs Wasser oder ich bleibe am Strand und mache Videos von meinen Schülern. Ich zeige sie ihnen dann und ich gebe ihnen Hinweise für den nächsten Tag.</>,
      <>Ich muss sagen: Meine finanzielle Situation ist jetzt deutlich unsicherer. Es ist gar nicht so leicht, sich seinen Lebensunterhalt als Surflehrerin zu verdienen. Aber ich bin mit meinem neuen Beruf sehr zufrieden. Die Nähe zum Meer und der Kontakt zu Menschen machen mich glücklich.</>,
    ],
  },
  {
    num: 3,
    title: 'Auch mal „Nein" sagen',
    author: 'Marcel Lauber, 50, Unternehmensberater, Hamburg',
    paragraphs: [
      <>Ich habe steil Karriere gemacht: Ziemlich schnell nach der ersten Stelle habe ich eine Führungsposition bekommen. Ich stand jeden Tag unter Druck. Mein Terminkalender war immer voll. Ich hatte keine Zeit und auch keine Energie für ein Privatleben. Wenn ich zu Hause war, wollte ich nur noch schlafen.</>,
      <>Vor fünf Jahren bin ich einen Abend völlig erschöpft nach Hause gefahren und habe einen Unfall verursacht. Ich habe ihn nur knapp überlebt. Das war ein Schock – und der entscheidende Wendepunkt in meinem Leben.</>,
      <>Mein altes Leben kam mir plötzlich so sinnlos vor. Ich habe angefangen, meinen Lebensstil zu hinterfragen. Was will ich eigentlich? Was ist mir wichtig? Ich habe ein Jahr Urlaub genommen und angefangen zu meditieren<sup>6</sup>. Das hat mein Leben verändert. Seit zwei Jahren arbeite ich wieder. Den Job habe ich zwar nicht gewechselt, aber meine Einstellung<sup>7</sup> zur Arbeit geändert. Ich lege jetzt großen Wert darauf, bewusster und gesünder zu leben. Darum habe ich auch meine Ernährung umgestellt<sup>8</sup>. In der Mittagspause gehe ich spazieren. Außerdem versuche ich, auf der Arbeit auch mal „Nein" zu sagen. Das kommt nicht immer gut an, aber meine Gesundheit ist mir wichtiger als die Karriere.</>,
    ],
  },
];

const footnotes = [
  { num: 4, text: 'sich nach etwas sehnen: sich etwas stark wünschen' },
  { num: 5, text: 'die Anregung: = Idee' },
  { num: 6, text: 'meditieren: sich konzentrieren, um Ruhe zu finden' },
  { num: 7, text: 'die Einstellung zu etwas: die Art, wie man über etwas denkt' },
  { num: 8, text: 'etwas umstellen: = etwas ändern' },
];

function HomeworkSet2ExercisesPage() {
  return (
    <div className="exercises-page">
      <h1 className="exercises-page__title">Вправи · Заняття 04.05</h1>
      <p className="exercises-page__intro">
        Lesen Sie den ganzen Magazinartikel und vergleichen Sie mit Ihren Vermutungen.
      </p>

      {stories.map((story) => (
        <article key={story.num} className="exercises-story">
          <span className="exercises-story__num">{story.num}</span>
          <h2 className="exercises-story__title">{story.title}</h2>
          <p className="exercises-story__author">{story.author}</p>
          <div className="exercises-story__body">
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      ))}

      <div className="exercises-footnotes">
        {footnotes.map((f) => (
          <div key={f.num} className="exercises-footnotes__item">
            <span className="exercises-footnotes__num">{f.num}</span>
            {f.text}
          </div>
        ))}
      </div>

      <div className="exercises-task">
        <div className="exercises-task__label">Aufgabe</div>
        <p className="exercises-task__text">
          Lest drei Texte und erzählt im Unterricht nach. Bildet 8 Fragen, die ihr zum Text stellen könnt.
        </p>
      </div>

      <Link to="/homework/set/2" className="back-link">&larr; Назад</Link>
    </div>
  );
}

export default HomeworkSet2ExercisesPage;
