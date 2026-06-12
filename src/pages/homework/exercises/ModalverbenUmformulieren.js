import React, { useState } from 'react';
import './ModalverbenUmformulieren.css';

// 10 WÖRTER — Deutsche Auswanderung nach Australien.
// Для кожного пропуску дві альтернативи; треба обрати ту, що відповідає модальному дієслову.
const gaps = {
  1: { options: ['die Absicht haben', 'die Erlaubnis haben'], answer: 'die Absicht haben', given: true },
  2: { options: ['gezwungen sein', 'nicht erlaubt sein'], answer: 'nicht erlaubt sein' },
  3: { options: ['die Erlaubnis haben', 'den Auftrag haben'], answer: 'die Erlaubnis haben' },
  4: { options: ['die Erlaubnis haben', 'in der Lage sein'], answer: 'in der Lage sein' },
  5: { options: ['die Absicht haben', 'erwartet werden'], answer: 'erwartet werden' },
  6: { options: ['in der Lage sein', 'gezwungen sein'], answer: 'gezwungen sein' },
  7: { options: ['die Möglichkeit haben', 'die Zustimmung haben'], answer: 'die Möglichkeit haben' },
  8: { options: ['die Absicht haben', 'die Erlaubnis haben'], answer: 'die Erlaubnis haben' },
};

// Текст як масив абзаців; кожен абзац — масив частин (рядок або {gap: n}).
const paragraphs = [
  [
    'Nach einer aktuellen Zählung bilden Deutsche die sechstgrößte Gruppe von Migranten in Australien. Bereits im 19. Jahrhundert sind Deutsche nach Australien ausgewandert. Landwirte und Weinbauern wollten dort günstiges Land kaufen ',
    { gap: 1 },
    '. Während der Weltkriege gab es jedoch einen Einwanderungsstopp für Menschen mit deutscher Staatsbürgerschaft: Sie durften während dieser Zeit nicht einwandern ',
    { gap: 2 },
    '. Erst 1952 durften sich Deutsche wieder dort niederlassen ',
    { gap: 3 },
    '.',
  ],
  [
    'Diese Entscheidung der australischen Regierung kam zu einer Zeit, als es im Land zu wenig Facharbeiter gab. In den 1950er- und 1960er-Jahren konnten die Betriebe nicht genügend Australier mit einer guten Berufsausbildung finden ',
    { gap: 4 },
    '. Die Regierung versuchte deshalb, Einwanderer ins Land zu holen. Diese Menschen sollten eine gute Ausbildung mitbringen ',
    { gap: 5 },
    '. Viele gut ausgebildete Deutsche bewarben sich auf die Stellen und wanderten in dieser Zeit aus. Am Anfang mussten viele Einwanderer sehr hart arbeiten ',
    { gap: 6 },
    '. Doch als gelernter Tischler, Krankenpfleger oder Bäcker konnte man gutes Geld verdienen ',
    { gap: 7 },
    '. Außerdem waren die Zukunftsperspektiven gut: Man durfte sich dauerhaft in Australien niederlassen und hier ein neues Leben beginnen ',
    { gap: 8 },
    '.',
  ],
];

const gapIds = Object.keys(gaps).map(Number);

function ModalverbenUmformulieren() {
  const [answers, setAnswers] = useState(() => {
    const init = {};
    gapIds.forEach((id) => {
      if (gaps[id].given) init[id] = gaps[id].answer;
    });
    return init;
  });
  const [checked, setChecked] = useState(false);

  const editable = gapIds.filter((id) => !gaps[id].given);
  const allFilled = editable.every((id) => answers[id]);
  const correctCount = editable.filter((id) => answers[id] === gaps[id].answer).length;

  const handleSelect = (id, value) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const reset = () => {
    const init = {};
    gapIds.forEach((id) => {
      if (gaps[id].given) init[id] = gaps[id].answer;
    });
    setAnswers(init);
    setChecked(false);
  };

  const renderGap = (id) => {
    const g = gaps[id];
    const chosen = answers[id];
    return (
      <span className="muf-gap" key={`gap-${id}`}>
        <span className="muf-gap__paren">(</span>
        {g.options.map((opt, i) => {
          const isChosen = chosen === opt;
          const isAnswer = opt === g.answer;
          let cls = 'muf-opt';
          if (g.given) {
            if (isAnswer) cls += ' muf-opt--given';
          } else if (checked) {
            if (isChosen && opt === g.answer) cls += ' muf-opt--correct';
            else if (isChosen && opt !== g.answer) cls += ' muf-opt--wrong';
            else if (isAnswer) cls += ' muf-opt--reveal';
          } else if (isChosen) {
            cls += ' muf-opt--chosen';
          }
          return (
            <React.Fragment key={opt}>
              {i > 0 && <span className="muf-gap__sep"> / </span>}
              <button
                type="button"
                className={cls}
                disabled={g.given || checked}
                onClick={() => handleSelect(id, opt)}
              >
                {opt}
              </button>
            </React.Fragment>
          );
        })}
        <span className="muf-gap__paren">)</span>
        <span className="muf-gap__num"> ({id})</span>
        {g.given && <span className="muf-tag">приклад</span>}
      </span>
    );
  };

  return (
    <div className="muf">
      <p className="cloze-page__instruction">
        <strong>Переписати текст, замінивши на альтернативи, і переказати.</strong>
        <br />
        Lesen Sie den Eintrag in einem Online-Lexikon. Welche Alternativen zu den Modalverben
        passen? Markieren Sie und formulieren Sie dann die Sätze um. Оберіть у дужках альтернативу,
        що відповідає модальному дієслову, а потім перекажіть текст своїми словами.
      </p>

      <article className="muf-article">
        <h3 className="muf-article__title">Deutsche Auswanderung nach Australien</h3>
        {paragraphs.map((para, pi) => (
          <p key={pi} className="muf-article__p">
            {para.map((part, idx) =>
              typeof part === 'string' ? (
                <React.Fragment key={idx}>{part}</React.Fragment>
              ) : (
                renderGap(part.gap)
              )
            )}
          </p>
        ))}
      </article>

      <div className="cloze-actions">
        {!checked ? (
          <button
            type="button"
            className="cloze-btn cloze-btn--check"
            onClick={() => setChecked(true)}
            disabled={!allFilled}
          >
            Перевірити
          </button>
        ) : (
          <button type="button" className="cloze-btn cloze-btn--reset" onClick={reset}>
            Спробувати ще раз
          </button>
        )}
      </div>

      {checked && (
        <div
          className={
            'cloze-result' + (correctCount === editable.length ? ' cloze-result--perfect' : '')
          }
        >
          <p className="cloze-result__score">
            Правильно: <strong>{correctCount}</strong> з {editable.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default ModalverbenUmformulieren;
