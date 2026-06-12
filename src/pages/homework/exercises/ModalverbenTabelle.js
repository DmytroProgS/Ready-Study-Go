import React, { useState } from 'react';
import './ModalverbenTabelle.css';

// 3.1 Modalverben — Wiederholung L2. Довідкова таблиця.
// Дієслова з кількома значеннями групуються (rowSpan на першій колонці).
const rows = [
  { verb: 'dürfen', bedeutung: 'Erlaubnis', alt: 'erlaubt sein, die Erlaubnis / Zustimmung haben' },
  { verb: '(nicht) dürfen', bedeutung: 'Verbot', alt: 'verboten sein, keine Erlaubnis haben' },
  { verb: 'können', bedeutung: 'Möglichkeit', alt: 'möglich sein, die Möglichkeit haben' },
  { verb: 'können', bedeutung: 'Fähigkeit', alt: 'in der Lage sein, die Fähigkeit haben' },
  { verb: 'können', bedeutung: 'Erlaubnis', alt: 'erlaubt sein' },
  { verb: 'müssen', bedeutung: 'Notwendigkeit / Pflicht', alt: 'notwendig sein, gezwungen sein' },
  { verb: 'sollen', bedeutung: 'Erwartung', alt: 'erwartet werden' },
  { verb: 'sollen', bedeutung: 'Aufforderung', alt: 'dazu aufgefordert sein, die Aufgabe haben' },
  { verb: 'wollen', bedeutung: 'Wunsch / Plan / Absicht', alt: 'sich wünschen, vorhaben, den Wunsch / die Absicht haben' },
];

const modalVerbs = ['dürfen', 'können', 'müssen', 'sollen', 'wollen'];

// Вправа: 9 значень × 3 приклади = 27. Кожен приклад має пропуск і відмінену форму (conj).
const practiceGroups = [
  {
    verb: 'dürfen', bedeutung: 'Erlaubnis', alt: 'erlaubt sein',
    items: [
      { id: 1, pre: 'Kinder ', post: ' in diesem Park spielen.', conj: 'dürfen' },
      { id: 2, pre: 'Du ', post: ' mein Auto nehmen, wenn du willst.', conj: 'darfst' },
      { id: 3, pre: 'Hier ', post: ' wir parken, es ist erlaubt.', conj: 'dürfen' },
    ],
  },
  {
    verb: '(nicht) dürfen', bedeutung: 'Verbot', alt: 'verboten sein', answer: 'dürfen',
    items: [
      { id: 4, pre: 'Hier ', post: ' man nicht rauchen.', conj: 'darf' },
      { id: 5, pre: 'Im Museum ', post: ' man nicht fotografieren.', conj: 'darf' },
      { id: 6, pre: 'Kinder ', post: ' diesen Film nicht sehen.', conj: 'dürfen' },
    ],
  },
  {
    verb: 'können', bedeutung: 'Möglichkeit', alt: 'möglich sein',
    items: [
      { id: 7, pre: 'Heute Abend ', post: ' wir ins Kino gehen.', conj: 'können' },
      { id: 8, pre: 'Am Wochenende ', post: ' ich dich besuchen.', conj: 'kann' },
      { id: 9, pre: 'Mit dem Zug ', post: ' man schnell in der Stadt sein.', conj: 'kann' },
    ],
  },
  {
    verb: 'können', bedeutung: 'Fähigkeit', alt: 'in der Lage sein',
    items: [
      { id: 10, pre: 'Maria ', post: ' sehr gut Klavier spielen.', conj: 'kann' },
      { id: 11, pre: 'Er ', post: ' drei Sprachen sprechen.', conj: 'kann' },
      { id: 12, pre: '', post: ' du schwimmen?', conj: 'Kannst' },
    ],
  },
  {
    verb: 'können', bedeutung: 'Erlaubnis', alt: 'erlaubt sein',
    items: [
      { id: 13, pre: 'Du ', post: ' jetzt nach Hause gehen.', conj: 'kannst' },
      { id: 14, pre: 'Sie ', post: ' hier Platz nehmen.', conj: 'können' },
      { id: 15, pre: 'Ihr ', post: ' ruhig fragen, wenn ihr etwas nicht versteht.', conj: 'könnt' },
    ],
  },
  {
    verb: 'müssen', bedeutung: 'Notwendigkeit / Pflicht', alt: 'notwendig sein',
    items: [
      { id: 16, pre: 'Ich ', post: ' morgen früh aufstehen.', conj: 'muss' },
      { id: 17, pre: 'Wir ', post: ' die Rechnung bis Freitag bezahlen.', conj: 'müssen' },
      { id: 18, pre: 'Er ', post: ' noch viel für die Prüfung lernen.', conj: 'muss' },
    ],
  },
  {
    verb: 'sollen', bedeutung: 'Erwartung', alt: 'erwartet werden',
    items: [
      { id: 19, pre: 'Das Wetter ', post: ' morgen schön werden.', conj: 'soll' },
      { id: 20, pre: 'Der neue Film ', post: ' sehr gut sein.', conj: 'soll' },
      { id: 21, pre: 'Das Restaurant ', post: ' ausgezeichnet sein.', conj: 'soll' },
    ],
  },
  {
    verb: 'sollen', bedeutung: 'Aufforderung', alt: 'die Aufgabe haben',
    items: [
      { id: 22, pre: 'Der Arzt sagt, ich ', post: ' mehr Sport treiben.', conj: 'soll' },
      { id: 23, pre: 'Die Mutter sagt, die Kinder ', post: ' ihre Zimmer aufräumen.', conj: 'sollen' },
      { id: 24, pre: 'Der Chef sagt, wir ', post: ' den Bericht heute fertig machen.', conj: 'sollen' },
    ],
  },
  {
    verb: 'wollen', bedeutung: 'Wunsch / Plan / Absicht', alt: 'vorhaben',
    items: [
      { id: 25, pre: 'Wir ', post: ' nächstes Jahr nach Italien reisen.', conj: 'wollen' },
      { id: 26, pre: 'Ich ', post: ' später Ärztin werden.', conj: 'will' },
      { id: 27, pre: 'Meine Eltern ', post: ' am Wochenende ein neues Auto kaufen.', conj: 'wollen' },
    ],
  },
];

// Плаский список усіх прикладів з прив'язаною правильною відповіддю (базовою формою).
const allItems = practiceGroups.flatMap((g) =>
  g.items.map((it) => ({ ...it, answer: g.answer || g.verb }))
);
const itemById = Object.fromEntries(allItems.map((it) => [it.id, it]));
const answerById = Object.fromEntries(allItems.map((it) => [it.id, it.answer]));
const TOTAL = allItems.length;

// Перемішати масив (Fisher–Yates) — повертає новий масив id у випадковому порядку.
function shuffledIds() {
  const ids = allItems.map((it) => it.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids;
}

// Згрупувати послідовні рядки таблиці з однаковим verb для rowSpan.
function buildGroups(items) {
  const groups = [];
  items.forEach((row) => {
    const prev = groups[groups.length - 1];
    if (prev && prev.verb === row.verb) {
      prev.rows.push(row);
    } else {
      groups.push({ verb: row.verb, rows: [row] });
    }
  });
  return groups;
}

function ModalverbenTabelle() {
  const tableGroups = buildGroups(rows);

  const [order, setOrder] = useState(shuffledIds);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({}); // { id: true } — перевірені приклади

  const correctCount = allItems.filter(
    (it) => checked[it.id] && answers[it.id] === it.answer
  ).length;

  const handleSelect = (id, verb) => {
    if (checked[id]) return;
    setAnswers((prev) => ({ ...prev, [id]: verb }));
  };

  const checkItem = (id) => setChecked((prev) => ({ ...prev, [id]: true }));

  const retryItem = (id) => {
    setChecked((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  // Перемішати заново й очистити всі відповіді.
  const reshuffle = () => {
    setOrder(shuffledIds());
    setAnswers({});
    setChecked({});
  };

  return (
    <div className="modtab">
      <p className="cloze-page__instruction">
        Wiederholung L2 — значення модальних дієслів та їхні альтернативні формулювання.
      </p>

      <div className="modtab-wrap">
        <table className="modtab-table">
          <thead>
            <tr>
              <th>Modalverb</th>
              <th>Bedeutung</th>
              <th>Alternativen</th>
            </tr>
          </thead>
          <tbody>
            {tableGroups.map((g) =>
              g.rows.map((row, idx) => (
                <tr key={`${g.verb}-${idx}`}>
                  {idx === 0 && (
                    <td className="modtab-verb" rowSpan={g.rows.length}>
                      {g.verb}
                    </td>
                  )}
                  <td className="modtab-bed">{row.bedeutung}</td>
                  <td className="modtab-alt">{row.alt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Вправа за таблицею */}
      <div className="modtab-practice">
        <div className="modtab-practice__bar">
          <h3 className="modtab-practice__title">Übung — Welches Modalverb passt?</h3>
          <span className="modtab-practice__counter">
            ✓ {correctCount} / {TOTAL}
          </span>
        </div>
        <p className="modtab-practice__hint">
          Обери модальне дієслово для пропуску й натисни «Перевірити» під кожним прикладом. Приклади
          щоразу у випадковому порядку — натисни «Перемішати», щоб почати заново.
        </p>

        <div className="modtab-practice__actions">
          <button type="button" className="modtab-shuffle" onClick={reshuffle}>
            🔀 Перемішати
          </button>
        </div>

        {order.map((id, i) => {
          const p = itemById[id];
          const chosen = answers[id];
          const isChecked = checked[id];
          const correct = answerById[id];
          const isRight = isChecked && chosen === correct;
          const isWrong = isChecked && chosen && chosen !== correct;

          return (
            <div key={id} className="modtab-ex">
              <p className="modtab-ex__sentence">
                <span className="modtab-ex__num">{i + 1}.</span>
                {p.pre}
                <span
                  className={
                    'modtab-blank' +
                    (isRight ? ' modtab-blank--filled' : '') +
                    (isWrong ? ' modtab-blank--wrong' : '')
                  }
                >
                  {isRight ? p.conj : isChecked ? chosen : '______'}
                </span>
                {p.post}
              </p>

              <div className="modtab-ex__row">
                <div className="modtab-ex__options">
                  {modalVerbs.map((verb) => {
                    const sel = chosen === verb;
                    let cls = 'modtab-ex__btn';
                    if (isChecked) {
                      if (sel && verb === correct) cls += ' is-correct';
                      else if (sel && verb !== correct) cls += ' is-wrong';
                      else if (verb === correct) cls += ' is-reveal';
                    } else if (sel) {
                      cls += ' is-chosen';
                    }
                    return (
                      <button
                        key={verb}
                        type="button"
                        className={cls}
                        disabled={isChecked}
                        onClick={() => handleSelect(id, verb)}
                      >
                        {verb}
                      </button>
                    );
                  })}
                </div>

                {!isChecked ? (
                  <button
                    type="button"
                    className="modtab-ex__check"
                    disabled={!chosen}
                    onClick={() => checkItem(id)}
                  >
                    Перевірити
                  </button>
                ) : (
                  <button
                    type="button"
                    className={'modtab-ex__check is-retry ' + (isRight ? 'is-ok' : 'is-bad')}
                    onClick={() => retryItem(id)}
                  >
                    {isRight ? '✓ Вірно · ще раз' : '✗ Ще раз'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ModalverbenTabelle;
