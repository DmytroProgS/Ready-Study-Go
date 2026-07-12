import React, { useState } from 'react';
import './WebGuerillasVerben.css';

// Вправа 1 — вибери правильне дієслово з двох варіантів.
// pre — текст до бланка, post — після. options — два варіанти. answer — правильний.
const sentences = [
  { id: 1, pre: 'Sie ', post: ' Kaffee aus prächtigen Espressomaschinen.', options: ['lümmelt', 'zapfen'], answer: 'zapfen' },
  { id: 2, pre: 'Die Lichter der alten Stadt ', post: ' in der dunklen Nacht.', options: ['leuchteten', 'schmoren'], answer: 'leuchteten' },
  { id: 3, pre: 'Das Gerät ', post: ' Strom aus der Leitung.', options: ['schmort', 'zapft'], answer: 'zapft' },
  { id: 4, pre: 'Er ', post: ' sich auf dem Sofa.', options: ['lümmelt', 'übernehmen'], answer: 'lümmelt' },
  { id: 5, pre: 'Der Barkeeper ', post: ' ein Glas des besten Weins, den das Restaurant hatte.', options: ['zapfte', 'leuchtete'], answer: 'zapfte' },
  { id: 6, pre: 'Das Fleisch ', post: ' in der Sauce der berühmten Köchin.', options: ['schmort', 'leuchten'], answer: 'schmort' },
  { id: 7, pre: 'Die Schüler ', post: ' sich während der langweiligen Vorlesung.', options: ['lümmelten', 'einbringen'], answer: 'lümmelten' },
  { id: 8, pre: 'Der Gefangene ', post: ' seine Strafe in dem Gefängnis des Bundeslandes ab.', options: ['sitzt', 'lümmelst'], answer: 'sitzt' },
  { id: 9, pre: 'Die Farben des Himmels ', post: ' sich während des Sonnenuntergangs.', options: ['vermischen', 'übergenommen'], answer: 'vermischen' },
  { id: 10, pre: 'Der Politiker ', post: ' im Interesse der Bevölkerung.', options: ['zapfst', 'agiert'], answer: 'agiert' },
  { id: 11, pre: 'Die Firma ', post: ' einen Rekordgewinn des Jahres.', options: ['agierst', 'erzielte'], answer: 'erzielte' },
  { id: 12, pre: 'Sowohl neue Ideen als auch innovative Lösungen ', post: ' Vorteile ein.', options: ['erstrecke', 'bringen'], answer: 'bringen' },
  { id: 13, pre: 'Nicht nur die Produktionsrate, sondern auch der Umsatz hat sich ', post: '.', options: ['verdreifacht', 'vermischen'], answer: 'verdreifacht' },
  { id: 14, pre: 'Entweder die Regel ', post: ' sich auf alle, oder sie gilt für niemanden.', options: ['erstreckt', 'verdreifacht'], answer: 'erstreckt' },
  { id: 15, pre: 'Der Sohn ', post: ' die Leitung des Familienunternehmens.', options: ['übernahm', 'ersteckt'], answer: 'übernahm' },
];

function WebGuerillasVerben() {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  const allFilled = sentences.every((s) => answers[s.id]);
  const correctCount = sentences.filter((s) => answers[s.id] === s.answer).length;

  const handleSelect = (id, value) => {
    if (checked) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const reset = () => {
    setAnswers({});
    setChecked(false);
  };

  return (
    <div className="wgv">
      <p className="cloze-page__instruction">
        Оберіть правильне дієслово з двох варіантів.
      </p>

      {sentences.map((s) => {
        const val = answers[s.id];
        return (
          <div key={s.id} className="wgv-item">
            <span className="wgv-item__num">{s.id}</span>
            <div className="wgv-item__body">
              <p className="wgv-sentence">
                {s.pre}
                <span
                  className={
                    'wgv-blank' +
                    (val ? ' wgv-blank--filled' : '') +
                    (checked && val === s.answer ? ' wgv-blank--correct' : '') +
                    (checked && val && val !== s.answer ? ' wgv-blank--wrong' : '')
                  }
                >
                  {val || '…'}
                </span>
                {s.post}
              </p>

              <div className="wgv-options">
                {s.options.map((opt) => {
                  const selected = val === opt;
                  const showAnswer = checked && opt === s.answer;
                  const showWrong = checked && selected && opt !== s.answer;
                  return (
                    <button
                      key={opt}
                      type="button"
                      className={
                        'wgv-pill' +
                        (selected ? ' wgv-pill--selected' : '') +
                        (showAnswer ? ' wgv-pill--answer' : '') +
                        (showWrong ? ' wgv-pill--wrong' : '')
                      }
                      onClick={() => handleSelect(s.id, opt)}
                      disabled={checked}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}

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
            'cloze-result' + (correctCount === sentences.length ? ' cloze-result--perfect' : '')
          }
        >
          <p className="cloze-result__score">
            Правильно: <strong>{correctCount}</strong> з {sentences.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default WebGuerillasVerben;
