import React, { useState, useRef } from 'react';
import './NomenBilden.css';

// given — індекси літер (0-based), які вже показані; решту вписує користувач.
const items = [
  {
    id: 1,
    sentence: ['Samira ist aus ihrer Heimat ', { em: 'geflohen' }, '.'],
    article: 'die',
    noun: 'Flucht',
    given: [0, 1, 2, 3, 4, 5],
    example: true,
  },
  {
    id: 2,
    sentence: ['Sie musste sich von ihrer Familie und ihren Freunden ', { em: 'verabschieden' }, '.'],
    article: 'der',
    noun: 'Abschied',
    given: [0, 3, 5],
  },
  {
    id: 3,
    sentence: ['Die Reise nach Deutschland hat lange ', { em: 'gedauert' }, '.'],
    article: 'die',
    noun: 'Dauer',
    given: [0],
  },
  {
    id: 4,
    sentence: ['Nach ihrer Ankunft hat sie an einem Sprachkurs ', { em: 'teilgenommen' }, '.'],
    article: 'die',
    noun: 'Teilnahme',
    given: [1, 2, 4],
  },
  {
    id: 5,
    sentence: ['Mittlerweile ', { em: 'hält' }, ' sie sich seit zehn Jahren in Deutschland ', { em: 'auf' }, '.'],
    article: 'der',
    noun: 'Aufenthalt',
    given: [0, 2, 4, 6, 9],
  },
  {
    id: 6,
    sentence: ['Es fiel ihr nicht schwer, sich in der neuen Heimat zu ', { em: 'integrieren' }, '.'],
    article: 'die',
    noun: 'Integration',
    given: [1, 6, 8, 10],
  },
  {
    id: 7,
    sentence: ['Mit ihren Nachbarn und Freunden hat sie schon viel Schönes ', { em: 'erlebt' }, '.'],
    article: 'das',
    noun: 'Erlebnis',
    given: [0, 2],
  },
  {
    id: 8,
    sentence: ['Manchmal ', { em: 'besucht' }, ' sie Verwandte und Freunde in ihrer alten Heimat.'],
    article: 'der',
    noun: 'Besuch',
    given: [0],
  },
];

const articleOptions = ['der', 'die', 'das'];
const interactive = items.filter((it) => !it.example);

function NomenBilden() {
  const [articles, setArticles] = useState({});
  const [letters, setLetters] = useState({}); // { [id]: { [idx]: char } }
  const [checkedItems, setCheckedItems] = useState({}); // { [id]: true }
  const inputRefs = useRef({});

  const isChecked = (id) => !!checkedItems[id];

  const blankIndices = (it) => {
    const given = new Set(it.given);
    return it.noun.split('').map((_, i) => i).filter((i) => !given.has(i));
  };

  const setArticle = (id, art) => {
    if (isChecked(id)) return;
    setArticles((prev) => ({ ...prev, [id]: art }));
  };

  const setLetter = (it, idx, value) => {
    if (isChecked(it.id)) return;
    const ch = value.slice(-1); // лишаємо лише останній введений символ
    setLetters((prev) => ({ ...prev, [it.id]: { ...prev[it.id], [idx]: ch } }));
    if (ch) {
      const blanks = blankIndices(it);
      const pos = blanks.indexOf(idx);
      const nextIdx = blanks[pos + 1];
      if (nextIdx !== undefined) {
        const nextRef = inputRefs.current[`${it.id}-${nextIdx}`];
        if (nextRef) nextRef.focus();
      }
    }
  };

  const itemFilled = (it) =>
    articles[it.id] && blankIndices(it).every((i) => letters[it.id]?.[i]);

  const isItemCorrect = (it) => {
    if (articles[it.id] !== it.article) return false;
    return blankIndices(it).every(
      (i) => (letters[it.id]?.[i] || '').toLowerCase() === it.noun[i].toLowerCase()
    );
  };

  const checkItem = (id) => setCheckedItems((prev) => ({ ...prev, [id]: true }));
  const retryItem = (id) =>
    setCheckedItems((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  const resetAll = () => {
    setArticles({});
    setLetters({});
    setCheckedItems({});
  };

  const checkedCount = interactive.filter((it) => isChecked(it.id)).length;
  const correctCount = interactive.filter((it) => isChecked(it.id) && isItemCorrect(it)).length;

  const renderArticle = (it) => {
    const selected = articles[it.id] || '';
    const checked = isChecked(it.id);
    return (
      <span className="nb-articles">
        {articleOptions.map((a) => {
          let cls = 'nb-art';
          if (selected === a) cls += ' is-selected';
          if (checked) {
            if (a === it.article) cls += ' is-correct';
            else if (selected === a) cls += ' is-wrong';
          }
          return (
            <button
              key={a}
              type="button"
              className={cls}
              disabled={checked || it.example}
              onClick={() => setArticle(it.id, a)}
            >
              {a}
            </button>
          );
        })}
      </span>
    );
  };

  const renderNoun = (it) => {
    const given = new Set(it.given);
    const checked = isChecked(it.id);
    return (
      <span className="nb-word">
        {it.noun.split('').map((ch, i) => {
          if (given.has(i) || it.example) {
            return (
              <span key={i} className="nb-letter nb-letter--given">
                {ch}
              </span>
            );
          }
          const val = letters[it.id]?.[i] || '';
          let cls = 'nb-letter nb-input';
          if (checked) {
            cls += val.toLowerCase() === ch.toLowerCase() ? ' is-correct' : ' is-wrong';
          }
          return (
            <input
              key={i}
              ref={(el) => (inputRefs.current[`${it.id}-${i}`] = el)}
              className={cls}
              type="text"
              maxLength={1}
              value={val}
              disabled={checked}
              onChange={(e) => setLetter(it, i, e.target.value)}
            />
          );
        })}
      </span>
    );
  };

  return (
    <div className="nb">
      <p className="cloze-page__instruction">
        Wie heißen die Nomen zu den kursiven Verben? Ergänzen Sie die fehlenden Buchstaben und die Artikel.
        Заповнюй і перевіряй кожне речення окремо — кнопкою «Перевірити» поряд.
      </p>

      <div className="nb-list">
        {items.map((it) => {
          const checked = isChecked(it.id);
          const correct = checked && isItemCorrect(it);
          return (
            <div key={it.id} className={`nb-row ${it.example ? 'nb-row--example' : ''}`}>
              <span className="nb-num">{it.id}.</span>
              <span className="nb-sentence">
                {it.sentence.map((part, idx) =>
                  typeof part === 'string' ? (
                    <span key={idx}>{part}</span>
                  ) : (
                    <em key={idx}>{part.em}</em>
                  )
                )}
              </span>
              <span className="nb-answer">
                {renderArticle(it)}
                {renderNoun(it)}

                {it.example && <span className="nb-tag">приклад</span>}

                {!it.example && !checked && (
                  <button
                    type="button"
                    className="nb-check"
                    disabled={!itemFilled(it)}
                    onClick={() => checkItem(it.id)}
                  >
                    Перевірити
                  </button>
                )}

                {checked && correct && <span className="nb-ok">✓ Вірно</span>}
                {checked && !correct && (
                  <span className="nb-fix">→ {it.article} {it.noun}</span>
                )}
                {checked && (
                  <button type="button" className="nb-retry" onClick={() => retryItem(it.id)}>
                    ↺ Ще раз
                  </button>
                )}
              </span>
            </div>
          );
        })}
      </div>

      <div className="nb-footer">
        <span className="nb-progress">
          Перевірено: <strong>{checkedCount}</strong>/{interactive.length} · правильно:{' '}
          <strong>{correctCount}</strong>
          {checkedCount === interactive.length && correctCount === interactive.length && ' 🎉'}
        </span>
        {checkedCount > 0 && (
          <button type="button" className="cloze-btn cloze-btn--reset" onClick={resetAll}>
            🔄 Скинути все
          </button>
        )}
      </div>
    </div>
  );
}

export default NomenBilden;
