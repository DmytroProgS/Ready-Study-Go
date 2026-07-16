import React, { useState } from 'react';
import './SichLassenGrammatik.css';

// Розкривна відповідь (клік — показати/сховати рішення).
function Reveal({ children, label = '🔎 Показати рішення' }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      className={'slg-reveal' + (open ? ' slg-reveal--open' : '')}
      onClick={() => setOpen((o) => !o)}
    >
      {open ? <span className="slg-reveal__text">{children}</span> : <span className="slg-reveal__label">{label}</span>}
    </button>
  );
}

function Level({ badge, color, title, children }) {
  return (
    <section className="slg-level">
      <header className="slg-level__head" style={{ '--lvl-color': color }}>
        <span className="slg-level__badge">{badge}</span>
        <h3 className="slg-level__title">{title}</h3>
      </header>
      <div className="slg-level__body">{children}</div>
    </section>
  );
}

const players = [
  { p: 'ich', r: 'mich', ex: 'Ich lasse mich nicht beeinflussen.' },
  { p: 'du', r: 'dich', ex: 'Du lässt dich leicht überzeugen.' },
  { p: 'er/sie/es', r: 'sich', ex: 'Das lässt sich erklären.', sel: true },
  { p: 'wir', r: 'uns', ex: 'Wir lassen uns motivieren.' },
  { p: 'ihr', r: 'euch', ex: 'Ihr lasst euch helfen.' },
  { p: 'sie/Sie', r: 'sich', ex: 'Die Probleme lassen sich lösen.', sel: true },
];

const tenses = [
  { t: 'Präsens', form: 'lässt', ex: 'Das lässt sich erklären.' },
  { t: 'Präteritum', form: 'ließ', ex: 'Das ließ sich erklären.' },
  { t: 'Perfekt', form: 'hat … lassen', ex: 'Das hat sich lösen lassen.', warn: 'тут два інфінітиви!' },
  { t: 'Futur', form: 'wird … lassen', ex: 'Das wird sich lösen lassen.' },
];

const adverbs = [
  { w: 'leicht', ua: 'легко', ex: 'Das lässt sich leicht erklären.', c: '#27ae60' },
  { w: 'schwer', ua: 'важко', ex: 'Das lässt sich schwer beweisen.', c: '#e74c3c' },
  { w: 'gut', ua: 'добре', ex: 'Das lässt sich gut kontrollieren.', c: '#f39c12' },
  { w: 'kaum', ua: 'майже неможливо', ex: 'Das lässt sich kaum vermeiden.', c: '#8e44ad' },
  { w: 'nicht', ua: 'неможливо / не', ex: 'Das lässt sich nicht ändern.', c: '#34495e' },
];

const proMoves = [
  {
    icon: '👍', cat: 'Zustimmen', ua: 'Погодитися', color: '#27ae60',
    ex: [
      { de: 'Das lässt sich nicht leugnen.', ua: 'Цього не можна заперечити.' },
      { de: 'Das lässt sich empirisch beweisen.', ua: 'Це можна емпірично довести.' },
    ],
  },
  {
    icon: '🤔', cat: 'Zweifeln', ua: 'Сумніватися', color: '#e67e22',
    ex: [
      { de: 'Das lässt sich schwer sagen.', ua: 'Це важко сказати.' },
      { de: 'Die Folgen lassen sich schwer vorhersagen.', ua: 'Наслідки важко передбачити.' },
    ],
  },
  {
    icon: '📊', cat: 'Analysieren', ua: 'Аналізувати', color: '#667eea',
    ex: [
      { de: 'Das lässt sich unterschiedlich interpretieren.', ua: 'Це можна по-різному трактувати.' },
      { de: 'Dieses Verhalten lässt sich psychologisch erklären.', ua: 'Цю поведінку можна психологічно пояснити.' },
    ],
  },
];

const bugs = [
  { name: 'Bug 1 — Missing Player', bad: 'Das lässt reparieren.', good: 'Das lässt sich reparieren.', note: 'Не губи sich!' },
  { name: "Bug 2 — Extra 'zu'", bad: 'Das Problem lässt sich zu lösen.', good: 'Das Problem lässt sich lösen.', note: 'Без частки zu!' },
  { name: 'Bug 3 — Perfekt', bad: 'Das hat sich lösen gelassen.', good: 'Das hat sich lösen lassen.', note: 'У Перфекті два інфінітиви!' },
  { name: 'Bug 4 — Double Passive', bad: 'Das lässt sich repariert werden.', good: 'Das lässt sich reparieren.', note: 'sich lassen вже має значення пасиву!' },
];

function SichLassenGrammatik() {
  return (
    <div className="slg">
      <p className="cloze-page__instruction">
        <strong>sich lassen — Cheat-Code</strong> для значення «можна / піддається / можливо».
        Проходь рівні згори вниз, а на чекпоінтах перевіряй себе (натисни, щоб побачити відповідь).
      </p>

      {/* LEVEL 1 */}
      <Level badge="LVL 1" color="#2a7f7f" title="Die Hauptformel — головна формула">
        <div className="slg-formula">
          <span className="slg-chip slg-chip--green">sich</span>
          <span className="slg-plus">+</span>
          <span className="slg-chip slg-chip--green">lassen</span>
          <span className="slg-plus">+</span>
          <span className="slg-chip slg-chip--orange">Infinitiv</span>
          <span className="slg-eq">=</span>
          <span className="slg-chip slg-chip--blue">Möglichkeit / Machbarkeit</span>
        </div>
        <p className="slg-caption">можна / піддається / можливо</p>
        <div className="slg-transform">
          <span className="slg-old">Das kann gemacht werden.</span>
          <span className="slg-arrow">→</span>
          <span className="slg-new">Das lässt sich machen. <em>(Це можна зробити.)</em></span>
        </div>
        <p className="slg-example">Das lässt sich erklären. <em>— Це можна пояснити.</em></p>
      </Level>

      {/* LEVEL 2 */}
      <Level badge="LVL 2" color="#667eea" title="Wähle deinen Spieler — займенник за особою">
        <div className="slg-players">
          {players.map((pl) => (
            <div key={pl.p} className={'slg-player' + (pl.sel ? ' slg-player--sel' : '')}>
              <div className="slg-player__map">
                <span className="slg-player__pron">{pl.p}</span>
                <span className="slg-arrow">→</span>
                <span className="slg-player__refl">{pl.r}</span>
              </div>
              <p className="slg-player__ex">{pl.ex}</p>
            </div>
          ))}
        </div>
        <p className="slg-note">Увага! <strong>sich</strong> змінюється залежно від особи (як скін у грі).</p>
      </Level>

      {/* CHECKPOINT 1 */}
      <div className="slg-checkpoint">
        <div className="slg-checkpoint__head">🏁 CHECKPOINT 1 <span className="slg-xp">+50 XP</span></div>
        <p className="slg-checkpoint__task">Baue den Satz! — побудуй речення:</p>
        <div className="slg-cp-item">
          <p className="slg-cp-q">«Проблему можна вирішити.» <span className="slg-cp-words">lösen · Das Problem · lässt · sich</span></p>
          <Reveal>Das Problem lässt sich lösen.</Reveal>
        </div>
        <div className="slg-cp-item">
          <p className="slg-cp-q">«Цього можна уникнути.» <span className="slg-cp-words">sich · vermeiden · Das · lässt</span></p>
          <Reveal>Das lässt sich vermeiden.</Reveal>
        </div>
      </div>

      {/* LEVEL 3 */}
      <Level badge="LVL 3" color="#e67e22" title="Die Transformation — з пасиву">
        <p className="slg-rule">Das lässt sich + Infinitiv ≈ Das kann + Partizip II + werden <em>(пасив із können = sich lassen)</em></p>
        <div className="slg-transform">
          <span className="slg-old">Die Aufgabe kann gelöst werden.</span>
          <span className="slg-arrow">→</span>
          <span className="slg-new">Die Aufgabe lässt sich lösen. <em>(Завдання можна вирішити.)</em></span>
        </div>
        <div className="slg-transform">
          <span className="slg-old">Das Auto kann nicht gestartet werden.</span>
          <span className="slg-arrow">→</span>
          <span className="slg-new">Das Auto lässt sich nicht starten. <em>(Машину неможливо завести.)</em></span>
        </div>
      </Level>

      {/* LEVEL 4 */}
      <Level badge="LVL 4" color="#c0392b" title="VS Mode — normales lassen проти sich lassen">
        <div className="slg-vs">
          <div className="slg-vs__side">
            <h4>Player 1: normales „lassen"</h4>
            <p className="slg-vs__desc">Змусити / доручити <em>(Active delegation)</em></p>
            <p className="slg-vs__ex">Ich <b>lasse</b> mein Auto reparieren.</p>
            <p className="slg-vs__ua">Я віддаю авто в ремонт — хтось інший це робить.</p>
          </div>
          <span className="slg-vs__badge">VS</span>
          <div className="slg-vs__side slg-vs__side--green">
            <h4>Player 2: „sich lassen"</h4>
            <p className="slg-vs__desc">Можна / піддається <em>(Inherent possibility)</em></p>
            <p className="slg-vs__ex">Das Auto <b>lässt sich</b> reparieren.</p>
            <p className="slg-vs__ua">Машину МОЖНА відремонтувати.</p>
          </div>
        </div>
        <p className="slg-note">Das <strong>sich</strong> macht den Unterschied! — частка <strong>sich</strong> змінює ВСЕ.</p>
      </Level>

      {/* CHECKPOINT 2 */}
      <div className="slg-checkpoint">
        <div className="slg-checkpoint__head">🏁 CHECKPOINT 2 <span className="slg-xp">+100 XP</span></div>
        <p className="slg-checkpoint__task">Mache den Passiv-Satz kürzer mit „sich lassen":</p>
        {[
          { q: 'Das Gerät kann repariert werden.', a: 'Das Gerät lässt sich reparieren.' },
          { q: 'Das Problem kann vermieden werden.', a: 'Das Problem lässt sich vermeiden.' },
          { q: 'Das kann bewiesen werden.', a: 'Das lässt sich beweisen.' },
        ].map((it, i) => (
          <div key={i} className="slg-cp-item">
            <p className="slg-cp-q">{i + 1}. {it.q}</p>
            <Reveal>{it.a}</Reveal>
          </div>
        ))}
      </div>

      {/* LEVEL 5 */}
      <Level badge="LVL 5" color="#2980b9" title="Time Travel — час змінює ТІЛЬКИ дієслово lassen">
        <div className="slg-timeline">
          {tenses.map((t) => (
            <div key={t.t} className="slg-tense">
              <div className="slg-tense__label">
                <span className="slg-tense__name">{t.t}</span>
                <span className="slg-tense__form">{t.form}</span>
              </div>
              <p className="slg-tense__ex">
                {t.ex}
                {t.warn && <span className="slg-warn">⚠ {t.warn}</span>}
              </p>
            </div>
          ))}
        </div>
        <p className="slg-note">У Perfekt і Futur <strong>lassen</strong> стрибає в кінець.</p>
      </Level>

      {/* LEVEL 6 */}
      <Level badge="LVL 6" color="#8e44ad" title="Power-Ups — прислівники (Adverbien)">
        <p className="slg-rule">Das lässt sich <span className="slg-slot">[ … ]</span> erklären.</p>
        <div className="slg-adverbs">
          {adverbs.map((a) => (
            <div key={a.w} className="slg-adverb">
              <span className="slg-adverb__w" style={{ background: a.c }}>{a.w} <em>({a.ua})</em></span>
              <span className="slg-adverb__ex">{a.ex}</span>
            </div>
          ))}
        </div>
        <p className="slg-note">Ці слова — найкращі друзі для іспитів. Вони роблять мову живою!</p>
      </Level>

      {/* CHECKPOINT 3 */}
      <div className="slg-checkpoint">
        <div className="slg-checkpoint__head">🏁 CHECKPOINT 3 <span className="slg-xp">+150 XP</span></div>
        <p className="slg-checkpoint__task">Finde das fehlende Puzzleteil! — знайди пропущене слово:</p>
        {[
          { q: '[Präteritum] Das ____ sich leicht erklären.', a: 'ließ' },
          { q: '[Adverb: майже неможливо] Das lässt sich ____ vermeiden.', a: 'kaum' },
          { q: '[Perfekt] Das ____ sich lösen lassen.', a: 'hat' },
        ].map((it, i) => (
          <div key={i} className="slg-cp-item">
            <p className="slg-cp-q">{i + 1}. {it.q}</p>
            <Reveal>{it.a}</Reveal>
          </div>
        ))}
      </div>

      {/* LEVEL 7 */}
      <Level badge="LVL 7" color="#16a085" title="Die Magnet-Regel — що «притягується», а що ні">
        <div className="slg-magnet">
          <div className="slg-magnet__col slg-magnet__col--ok">
            <h4>✅ Attracted (МОЖНА)</h4>
            <div className="slg-tags">
              {['machen', 'lösen', 'kontrollieren', 'erklären', 'ändern'].map((w) => (
                <span key={w} className="slg-tag slg-tag--ok">{w}</span>
              ))}
            </div>
            <p className="slg-magnet__hint">Дія, яку можна контролювати та вирішити (controllable actions).</p>
          </div>
          <div className="slg-magnet__col slg-magnet__col--no">
            <h4>❌ Repelled (НЕ МОЖНА)</h4>
            <div className="slg-tags">
              {['schlafen', 'sterben', 'passieren', 'arbeiten'].map((w) => (
                <span key={w} className="slg-tag slg-tag--no">{w}</span>
              ))}
            </div>
            <ul className="slg-magnet__bad">
              <li>❌ Das lässt sich schlafen. <em>(schlafen не «піддається» дії)</em></li>
              <li>❌ Das lässt sich sterben. <em>(sterben — не керована дія)</em></li>
              <li>❌ Das lässt sich passieren. <em>(passieren не має пасивної ідеї)</em></li>
            </ul>
          </div>
        </div>
      </Level>

      {/* LEVEL 8 */}
      <Level badge="LVL 8" color="#d35400" title="Pro Gamer Moves (B2/C1)">
        <div className="slg-pro">
          {proMoves.map((m) => (
            <div key={m.cat} className="slg-pro__row">
              <div className="slg-pro__cat" style={{ '--pro-color': m.color }}>
                <span className="slg-pro__icon">{m.icon}</span>
                <span>{m.cat}<br /><em>({m.ua})</em></span>
              </div>
              <div className="slg-pro__ex">
                {m.ex.map((e, i) => (
                  <p key={i}><b>{e.de}</b> <span>({e.ua})</span></p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Level>

      {/* BUG TRACKER */}
      <section className="slg-level">
        <header className="slg-level__head" style={{ '--lvl-color': '#e74c3c' }}>
          <span className="slg-level__badge">🐞 BUGS</span>
          <h3 className="slg-level__title">Bug Tracker — типові помилки</h3>
        </header>
        <div className="slg-level__body">
          <div className="slg-bugs">
            {bugs.map((b) => (
              <div key={b.name} className="slg-bug">
                <span className="slg-bug__name">{b.name}</span>
                <span className="slg-bug__bad">❌ {b.bad}</span>
                <span className="slg-bug__good">✅ {b.good} <em>({b.note})</em></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL BOSS */}
      <div className="slg-boss">
        <div className="slg-boss__head">👾 FINAL BOSS — Der große Test</div>
        <div className="slg-cp-item">
          <p className="slg-cp-q">🌍 Challenge 1 (UA→DE): «Це важко пояснити.» → Das ____ sich schwer ____.</p>
          <Reveal>Das <b>lässt</b> sich schwer <b>erklären</b>.</Reveal>
        </div>
        <div className="slg-cp-item">
          <p className="slg-cp-q">⚙️ Challenge 2 (Passiv → sich lassen): «Die Situation kann verbessert werden.» → Die Situation ____ sich ____.</p>
          <Reveal>Die Situation <b>lässt</b> sich <b>verbessern</b>.</Reveal>
        </div>
        <div className="slg-cp-item">
          <p className="slg-cp-q">🔎 Challenge 3 (Spot the Bug): Welcher Satz ist falsch? A) Das lässt sich ändern. B) Das lässt sich passieren. C) Das ließ sich lösen.</p>
          <Reveal><b>B</b> — «passieren» не можна (не керована дія).</Reveal>
        </div>
        <div className="slg-cp-item">
          <p className="slg-cp-q">⭐ Challenge 4 (Pro Move): «Цього не можна заперечити (leugnen).» → Das lässt ____ ____ ____.</p>
          <Reveal>Das lässt <b>sich nicht leugnen</b>.</Reveal>
        </div>
      </div>

      <div className="slg-complete">
        🏆 MISSION COMPLETE! <span>+500 XP</span>
        <p>Du hast den Cheat-Code gemeistert! 🚀 Використовуй „sich lassen" на іспитах та в житті.</p>
      </div>
    </div>
  );
}

export default SichLassenGrammatik;
