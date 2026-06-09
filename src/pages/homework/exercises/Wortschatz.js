import React, { useState } from 'react';
import './Wortschatz.css';

const words = [
  { de: 'erforschen', ua: 'досліджувати, вивчати' },
  { de: 'die Lebensbedingung, -en', ua: 'умова життя (умови життя)' },
  { de: 'wirtschaftlich', ua: 'економічний, господарський' },
  { de: 'emigrieren', ua: 'емігрувати (виїжджати з країни)' },
  { de: 'das Fernweh', ua: 'потяг до мандрів, туга за далекими краями' },
  { de: 'fliehen', ua: 'тікати, рятуватися втечею' },
  { de: 'der Migrationshintergrund', ua: 'міграційне походження' },
  { de: 'der Beitrag, -e', ua: 'внесок' },
  { de: 'der Gastarbeiter / die Gastarbeiterin', ua: 'робітник-мігрант (гастарбайтер)' },
  { de: 'das Asyl', ua: '(політичний) притулок' },
  { de: 'ehemalig', ua: 'колишній' },
  { de: 'die Staatsbürgerschaft, -en', ua: 'громадянство' },
  { de: 'aufbrechen', ua: 'вирушати (в дорогу)' },
  { de: 'der Urgroßvater, -', ua: 'прадід' },
  { de: 'die Heimat', ua: 'батьківщина, рідний край' },
  { de: 'zurückkehren nach + Dat.', ua: 'повертатися (куди-небудь)' },
  { de: 'sich niederlassen', ua: 'оселятися, осідати' },
  { de: 'der Spätaussiedler / die Spätaussiedlerin', ua: 'пізній переселенець (етнічний німець)' },
  { de: 'einwandern', ua: 'імігрувати (в’їжджати в країну)' },
  { de: 'der Vorfahr / die Vorfahrin', ua: 'предок' },
  { de: 'nachweisen', ua: 'доводити, підтверджувати' },
];

function Wortschatz() {
  const [flipped, setFlipped] = useState({});

  const toggle = (i) => setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));
  const flipAll = () => {
    const all = {};
    words.forEach((_, i) => (all[i] = true));
    setFlipped(all);
  };
  const reset = () => setFlipped({});

  return (
    <div className="ws">
      <p className="cloze-page__instruction">
        Натисни на картку, щоб перевернути й побачити переклад.
      </p>

      <div className="ws-controls">
        <button type="button" className="ws-ctrl" onClick={flipAll}>Показати всі</button>
        <button type="button" className="ws-ctrl" onClick={reset}>Сховати всі</button>
      </div>

      <div className="ws-grid">
        {words.map((w, i) => (
          <button
            key={w.de}
            type="button"
            className={`ws-card ${flipped[i] ? 'is-flipped' : ''}`}
            onClick={() => toggle(i)}
          >
            <span className="ws-card__inner">
              <span className="ws-card__face ws-card__face--front">{w.de}</span>
              <span className="ws-card__face ws-card__face--back">{w.ua}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Wortschatz;
