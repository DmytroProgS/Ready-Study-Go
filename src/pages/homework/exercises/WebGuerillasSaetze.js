import React, { useState } from 'react';
import './WebGuerillasSaetze.css';

// Вправа 2 — речення українською; при кліку справа з'являється переклад німецькою.
const pairs = [
  { id: 1, ua: 'Не тільки мати, але й батько бере на себе відповідальність за дітей.', de: 'Nicht nur die Mutter, sondern auch der Vater übernimmt Verantwortung für die Kinder.' },
  { id: 2, ua: 'Не тільки Пауль, але й його друг розвалився на дивані.', de: 'Nicht nur Paul, sondern auch sein Freund lümmelte sich auf dem Sofa.' },
  { id: 3, ua: 'Не тільки команда, але й тренер досяг великих успіхів.', de: 'Nicht nur das Team, sondern auch der Trainer erzielte große Erfolge.' },
  { id: 4, ua: 'Або ти дієш розумно, або втрачаєш усе.', de: 'Entweder du agierst klug, oder du verlierst alles.' },
  { id: 5, ua: 'Інвестиція приносить високі прибутки компанії.', de: 'Die Investition bringt hohe Gewinne des Unternehmens ein.' },
  { id: 6, ua: 'Або він просто відсиджує час, або дійсно працює.', de: 'Entweder er sitzt die Zeit ab, oder er arbeitet wirklich.' },
  { id: 7, ua: 'Або місяць, або зірки сьогодні світять особливо яскраво.', de: 'Entweder der Mond oder die Sterne leuchten heute besonders hell.' },
  { id: 8, ua: 'Влада короля поширювалася на всю країну.', de: 'Die Macht des Königs erstreckte sich über das ganze Land.' },
  { id: 9, ua: 'Як культури, так і мови змішуються в цьому місті.', de: 'Sowohl Kulturen als auch Sprachen vermischen sich in dieser Stadt.' },
  { id: 10, ua: 'Кількість працівників потроїлася за п’ять років.', de: 'Die Zahl der Mitarbeiter hat sich in fünf Jahren verdreifacht.' },
  { id: 11, ua: 'Як овочі, так і картопля тушкуються в каструлі.', de: 'Sowohl Gemüse als auch Kartoffeln schmoren im Topf.' },
  { id: 12, ua: 'Як офіціант, так і гість наливали пиво з бочки.', de: 'Sowohl der Kellner als auch der Gast zapften Bier aus dem Fass.' },
];

function WebGuerillasSaetze() {
  const [revealed, setRevealed] = useState({});

  const toggle = (id) => {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allOpen = pairs.every((p) => revealed[p.id]);

  const toggleAll = () => {
    if (allOpen) {
      setRevealed({});
    } else {
      const all = {};
      pairs.forEach((p) => { all[p.id] = true; });
      setRevealed(all);
    }
  };

  return (
    <div className="wgs">
      <p className="cloze-page__instruction">
        Прочитай речення українською й переклади німецькою. Натисни на картку, щоб побачити відповідь.
      </p>

      <div className="wgs-toolbar">
        <button type="button" className="wgs-toggle-all" onClick={toggleAll}>
          {allOpen ? 'Сховати всі' : 'Показати всі'}
        </button>
      </div>

      <div className="wgs-list">
        {pairs.map((p) => {
          const open = !!revealed[p.id];
          return (
            <button
              key={p.id}
              type="button"
              className={'wgs-row' + (open ? ' wgs-row--open' : '')}
              onClick={() => toggle(p.id)}
            >
              <span className="wgs-row__num">{p.id}</span>
              <span className="wgs-row__ua">{p.ua}</span>
              <span className="wgs-row__de">
                {open ? p.de : <span className="wgs-row__tap">натисни, щоб побачити 🇩🇪</span>}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default WebGuerillasSaetze;
