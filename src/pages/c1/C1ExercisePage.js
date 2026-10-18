import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { findPart } from '../../data/c1/c1Modules';
import C1AudioPlayer, { Transcript } from './C1AudioPlayer';
import '../../assets/styles/lesen.css';
import './c1.css';

const LETTERS = ['a', 'b', 'c', 'd'];

const RF = ['richtig', 'falsch'];

// Запитання варіанта: або плоский список, або розбиті по секціях (кілька текстів/діалогів у одному Teil).
const allQuestions = (v) => (v.sections ? v.sections.flatMap((s) => s.questions) : v.questions);

// Ключі з правильними відповідями для кожного типу завдання.
function answerKey(type, v) {
  if (type === 'gaps') return v.answers;
  if (type === 'gapsOwn') return Object.fromEntries(Object.entries(v.gaps).map(([n, g]) => [n, g.answer]));
  if (type === 'match' || type === 'abc') return Object.fromEntries(allQuestions(v).map((q) => [q.n, q.answer]));
  return {};
}

function Chart({ block }) {
  return (
    <figure className="c1-chart">
      <figcaption className="c1-chart__title">{block.title}</figcaption>
      <div className="c1-chart__unit">{block.unit}</div>
      {block.data.map(([label, value]) => (
        <div key={label} className="c1-chart__row">
          <span className="c1-chart__label">{label}</span>
          <span className="c1-chart__track">
            <span className="c1-chart__bar" style={{ width: (value / block.max) * 100 + '%' }} />
          </span>
          <span className="c1-chart__value">{String(value).replace('.', ',')}</span>
        </div>
      ))}
    </figure>
  );
}

function C1ExercisePage() {
  const { module: moduleId, part: partId } = useParams();
  const { mod, part } = findPart(moduleId, partId);
  const [vi, setVi] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selfScores, setSelfScores] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const v = part ? part.variants[vi] : null;
  const key = useMemo(() => (v ? answerKey(part.type, v) : {}), [part, v]);
  const itemNums = part && part.type === 'notes' ? Object.keys(v.answers) : Object.keys(key);

  if (!part) {
    return (
      <div className="b2-page">
        <p>Такого розділу немає.</p>
        <Link to="/c1" className="back-link">← Назад</Link>
      </div>
    );
  }

  const isNotes = part.type === 'notes';
  const maxPoints = itemNums.length * part.points;
  const correctCount = itemNums.filter((n) => answers[n] === key[n]).length;
  const points = isNotes
    ? Object.values(selfScores).reduce((s, x) => s + x, 0)
    : correctCount * part.points;
  const allAnswered = itemNums.every((n) => answers[n]);

  const setAnswer = (n, value) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [n]: value }));
  };
  const reset = () => { setAnswers({}); setSelfScores({}); setSubmitted(false); };
  const goTo = (i) => { setVi(i); reset(); };
  const state = (n) => (submitted && !isNotes ? (answers[n] === key[n] ? ' correct' : ' wrong') : '');

  // ---- пропуски в тексті ----
  const renderGap = (n) => {
    if (v.example && v.example[n] !== undefined) {
      return <span key={'g' + n} className="c1-gap c1-gap--example">({n}) {v.example[n]}</span>;
    }
    if (part.type === 'gaps') {
      const used = Object.values(answers);
      return (
        <span key={'g' + n} className="c1-gap">
          <span className="sb-gap-num">[{n}]</span>
          <select className={'c1-gap__select' + state(n)} value={answers[n] || ''} disabled={submitted}
            onChange={(e) => setAnswer(n, e.target.value)}>
            <option value="">— ? —</option>
            {Object.entries(v.options).map(([l, txt]) => (
              <option key={l} value={l} disabled={used.includes(l) && answers[n] !== l}>{l}) {txt}</option>
            ))}
          </select>
          {submitted && answers[n] !== key[n] && <span className="c1-hint">→ {key[n]}) {v.options[key[n]]}</span>}
        </span>
      );
    }
    const gap = v.gaps[n];
    return (
      <span key={'g' + n} className="c1-gap">
        <span className="sb-gap-num">[{n}]</span>
        <select className={'c1-gap__select' + state(n)} value={answers[n] || ''} disabled={submitted}
          onChange={(e) => setAnswer(n, e.target.value)}>
          <option value="">— ? —</option>
          {gap.options.map((o, i) => <option key={o} value={LETTERS[i]}>{LETTERS[i]}) {o}</option>)}
        </select>
        {submitted && answers[n] !== key[n] && (
          <span className="c1-hint">→ {gap.options[LETTERS.indexOf(key[n])]}</span>
        )}
      </span>
    );
  };

  const withGaps = (text) => text.split(/(\{\{\d+\}\})/).map((chunk, i) => {
    const m = chunk.match(/^\{\{(\d+)\}\}$/);
    return m ? renderGap(Number(m[1])) : <span key={i}>{chunk}</span>;
  });

  const renderBlock = (b, i) => {
    if (b.type === 'email') {
      return (
        <div key={i} className="c1-email">
          {b.header && <div className="c1-email__header">{b.header}</div>}
          {b.text.split('\n').map((line, k) => <p key={k}>{line || ' '}</p>)}
        </div>
      );
    }
    if (b.type === 'title') {
      return (
        <div key={i} className="c1-text__title">
          {withGaps(b.text)}
          {b.sub && <div className="c1-text__sub">{b.sub}</div>}
        </div>
      );
    }
    if (b.type === 'chart') return <Chart key={i} block={b} />;
    return <p key={i} className="c1-text__p">{withGaps(b.text)}</p>;
  };

  // ---- вибір a/b/c або richtig/falsch (q.rf) ----
  const renderAbc = (q) => (
    <div key={q.n} className={'lesen2-question' + state(q.n)}>
      <p className="lesen2-q-statement">{q.n}. {q.text}</p>
      <div className={q.rf ? 'lesen2-rf-options' : 'lesen2-abc-options'}>
        {(q.rf ? RF : q.options).map((opt, oi) => {
          const value = q.rf ? opt : LETTERS[oi];
          return (
            <label key={value} className={submitted && key[q.n] === value ? 'correct-label' : ''}>
              <input type="radio" name={'q' + q.n} checked={answers[q.n] === value} disabled={submitted}
                onChange={() => setAnswer(q.n, value)} />
              {q.rf ? opt : `${value}) ${opt}`}
            </label>
          );
        })}
      </div>
    </div>
  );

  // ---- зіставлення ----
  const optionLetters = v.options ? Object.keys(v.options) : [];
  // «x» — для запитань, до яких не підходить жоден текст (DTB Lesen Teil 3).
  const selectLetters = v.allowX ? [...optionLetters, 'x'] : optionLetters;
  const renderMatchQuestion = (q) => (
    <div key={q.n} className={'c1-match' + state(q.n)}>
      <span className="c1-match__n">{q.n}</span>
      <span className="c1-match__text">{q.text}</span>
      <select className="c1-match__select" value={answers[q.n] || ''} disabled={submitted}
        onChange={(e) => setAnswer(q.n, e.target.value)}>
        <option value="">—</option>
        {selectLetters.map((l) => <option key={l} value={l}>{l}</option>)}
      </select>
      {submitted && answers[q.n] !== key[q.n] && <span className="c1-hint">→ {key[q.n]}</span>}
    </div>
  );

  const renderMatchOptions = () => (
    <div className="c1-options">
      {v.optionsTitle && <h3 className="c1-options__title">{v.optionsTitle}</h3>}
      {v.optionsIntro && <p className="c1-options__intro">{v.optionsIntro}</p>}
      {optionLetters.map((l) => {
        const o = v.options[l];
        return typeof o === 'string' ? (
          <div key={l} className="c1-statement"><strong>{l}</strong> {o}</div>
        ) : (
          <div key={l} className="c1-post">
            <div className="c1-post__head">
              <strong>{l}</strong> {o.title && <strong>{o.title}</strong>} {o.author && <em>{o.author}</em>}
            </div>
            <p>{o.text}</p>
          </div>
        );
      })}
    </div>
  );

  // ---- нотатки до слайдів ----
  const renderNotes = () => (
    <div className="c1-slides">
      {v.slides.map((slide) => (
        <div key={slide.title} className="c1-slide">
          <div className="c1-slide__title">{slide.title}</div>
          {slide.items.map((it, k) => (
            <div key={k} className="c1-slide__item">
              {it.text && <span className="c1-slide__text">{it.text}</span>}
              {it.example && <span className="c1-gap--example">(0) {it.example}</span>}
              {it.n && (
                <div className="c1-note">
                  <span className="sb-gap-num">[{it.n}]</span>
                  <input className="c1-note__input" value={answers[it.n] || ''} disabled={submitted}
                    onChange={(e) => setAnswer(it.n, e.target.value)} placeholder="ваші нотатки…" />
                  {submitted && (
                    <div className="c1-note__check">
                      <div className="c1-note__model">✔ {v.answers[it.n]}</div>
                      <div className="c1-note__score">
                        Мій бал:
                        {[0, 1, 2].map((p) => (
                          <button key={p} className={'c1-note__pt' + (selfScores[it.n] === p ? ' active' : '')}
                            onClick={() => setSelfScores((s) => ({ ...s, [it.n]: p }))}>{p}</button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
      {submitted && <p className="c1-note__rules">{v.scoringNote}</p>}
    </div>
  );

  return (
    <div className="lesen-page c1-ex">
      <div className="lesen-header">
        <Link to={'/c1/' + mod.id} className="back-link">← Назад до {mod.title}</Link>
        <h1>{part.title}</h1>
        {part.variants.length > 1 && (
          <div className="lesen-variant-nav">
            {part.variants.map((pv, i) => (
              <button key={pv.label} onClick={() => goTo(i)}
                className={'lesen-variant-btn' + (i === vi ? ' active' : '')}>{pv.label}</button>
            ))}
          </div>
        )}
      </div>

      <p className="c1-ex__meta">{v.label} · {part.time} · {part.points} б. за завдання</p>
      <p className="c1-ex__instruction">{v.instruction}</p>
      {v.note && <p className="c1-ex__note">⚠️ {v.note}</p>}

      {v.audio && <C1AudioPlayer segments={v.audio} />}

      {(part.type === 'gaps' || part.type === 'gapsOwn') && (
        <>
          {part.type === 'gaps' && (
            <div className="c1-options c1-options--compact">
              {Object.entries(v.options).map(([l, txt]) => (
                <div key={l} className={'c1-statement' + (Object.values(answers).includes(l) ? ' used' : '')}>
                  <strong>{l}</strong> {txt}
                </div>
              ))}
            </div>
          )}
          <div className="c1-text">{v.blocks.map(renderBlock)}</div>
        </>
      )}

      {part.type === 'match' && (
        <div className="c1-match-layout">
          <div className="c1-match-questions">
            {v.questionPrefix && <p className="c1-ex__prefix">{v.questionPrefix}</p>}
            {v.example && (
              <div className="c1-match c1-match--example">
                <span className="c1-match__n">{v.example.n}</span>
                <span className="c1-match__text">{v.example.text}</span>
                <span className="c1-match__select">{v.example.answer}</span>
              </div>
            )}
            {v.questions.map(renderMatchQuestion)}
          </div>
          {renderMatchOptions()}
        </div>
      )}

      {part.type === 'abc' && !v.sections && (
        <>
          {v.blocks && <div className="c1-text">{v.blocks.map(renderBlock)}</div>}
          {v.questionsTitle && <h3>{v.questionsTitle}</h3>}
          <div className="c1-abc">{v.questions.map(renderAbc)}</div>
        </>
      )}

      {part.type === 'abc' && v.sections && v.sections.map((s) => (
        <div key={s.title} className="c1-section">
          <h3>{s.title}</h3>
          {s.audio && <C1AudioPlayer segments={s.audio} />}
          {s.blocks && <div className="c1-text">{s.blocks.map(renderBlock)}</div>}
          <div className="c1-abc">{s.questions.map(renderAbc)}</div>
          {s.audio && <Transcript segments={s.audio} />}
        </div>
      ))}

      {isNotes && renderNotes()}

      {v.audio && <Transcript segments={v.audio} />}

      <div className="lesen-actions">
        {!submitted ? (
          <button className="lesen-btn lesen-btn-check" onClick={() => setSubmitted(true)}
            disabled={!isNotes && !allAnswered}>
            {isNotes ? 'Показати відповіді' : 'Перевірити'}
          </button>
        ) : (
          <>
            <div className={'lesen-result' + (points === maxPoints ? ' perfect' : '')}>
              {isNotes
                ? `Самооцінка: ${points} / ${maxPoints} балів`
                : `Результат: ${correctCount} / ${itemNums.length} · ${points} / ${maxPoints} балів`}
            </div>
            <button className="lesen-btn lesen-btn-retry" onClick={reset}>Спробувати ще раз</button>
          </>
        )}
      </div>
    </div>
  );
}

// Новий ключ при зміні Teil — щоб стан (варіант, відповіді) не переносився між сторінками.
function C1ExerciseRoute() {
  const { module: moduleId, part: partId } = useParams();
  return <C1ExercisePage key={`${moduleId}/${partId}`} />;
}

export default C1ExerciseRoute;
