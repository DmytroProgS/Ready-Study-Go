import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { situations } from '../data/mindMapSituations';
import './MeinDeutschMindMapPage.css';

const STORAGE = 'ready-study-go-mind-map-v1';
const normalize = value => value.toLocaleLowerCase('de-DE').replace(/[.!?…,]/g, '').replace(/\s+/g, ' ').trim();
const groups = ['Час', 'Спілкування', 'Зв’язки', 'Умови'];
const shuffle = items => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
const makeDeck = (scope, id) => shuffle(
  situations.filter(s => scope === 'all' || s.id === id)
    .flatMap(s => s.variants.map(v => ({situationId:s.id, variantId:v.id})))
);


export default function MeinDeutschMindMapPage() {
  const [situationId, setSituationId] = useState(situations[0].id);
  const [variantId, setVariantId] = useState('present');
  const [tab, setTab] = useState('map');
  const [showAnswer, setShowAnswer] = useState(false);
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [progress, setProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE)) || {}; } catch { return {}; }
  });
  const [round, setRound] = useState(0);
  const [scope, setScope] = useState('selected');
  const [deck, setDeck] = useState(() => makeDeck('selected', situations[0].id));
  const [lastCard, setLastCard] = useState(null);
  const [showGrammarHint, setShowGrammarHint] = useState(false);
  const situation = situations.find(item => item.id === situationId) || situations[0];
  const variant = situation.variants.find(item => item.id === variantId) || situation.variants[0];
  const currentCard = deck[0] || makeDeck(scope, situationId)[0];
  const exerciseSituation = situations.find(s => s.id === currentCard.situationId);
  const exercise = exerciseSituation.variants.find(v => v.id === currentCard.variantId);
  const key = exerciseSituation.id + ':' + exercise.id;
  const score = progress[key] || { right: 0, review: 0 };

  useEffect(() => { localStorage.setItem(STORAGE, JSON.stringify(progress)); }, [progress]);
  const resetDeck = (newScope, id) => {
    setScope(newScope);
    setDeck(makeDeck(newScope, id));
    setRound(0);
    setLastCard(null);
    setInput('');
    setChecked(false);
    setShowAnswer(false);
    setShowGrammarHint(false);
  };
  const selectSituation = id => {
    setSituationId(id);
    setVariantId('present');
    resetDeck(scope, id);
  };
  const next = () => {
    const used = deck[0];
    setLastCard(used);
    setDeck(previous => {
      if (previous.length > 1) return previous.slice(1);
      const fresh = makeDeck(scope, situationId);
      // Prevent the same card appearing at the boundary between two decks.
      if (fresh.length > 1 && used && fresh[0].situationId === used.situationId && fresh[0].variantId === used.variantId) {
        [fresh[0], fresh[1]] = [fresh[1], fresh[0]];
      }
      return fresh;
    });
    setRound(n => n + 1);
    setInput('');
    setChecked(false);
    setShowAnswer(false);
    setShowGrammarHint(false);
  };
  const record = result => {
    setProgress(prev => ({ ...prev, [key]: { ...(prev[key] || {right:0,review:0}), [result]: ((prev[key] || {})[result] || 0) + 1 } }));
    next();
  };
  const total = Object.values(progress).reduce((sum, item) => sum + item.right + item.review, 0);
  return (
    <main className="mind-page">
      <Link to="/" className="mind-back">← На головну</Link>
      <header className="mind-hero"><span className="mind-eyebrow">READY STUDY GO · АКТИВНА НІМЕЦЬКА</span><h1>🧠 Mein Deutsch Mind Map</h1><p>Одна ситуація — багато способів висловити думку. Обирай перспективу, тренуй усне мовлення й перевіряй себе.</p></header>
      <div className="mind-toolbar"><label htmlFor="mind-situation">Життєва ситуація</label><select id="mind-situation" value={situationId} onChange={e => selectSituation(e.target.value)}>{situations.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select><span className="mind-stat">Виконано раундів: {total}</span></div>
      <div className="mind-tabs" role="tablist" aria-label="Режими тренування">
        {[['map','🕸️ Mind Map'],['square','▦ Grammatik-Quadrat'],['training','🎯 Training']].map(([id,label]) => <button key={id} type="button" role="tab" aria-selected={tab === id} className={tab === id ? 'active' : ''} onClick={() => {setTab(id);setShowAnswer(false);}}>{label}</button>)}
      </div>
      <section className="mind-core"><span>СИТУАЦІЯ</span><p>{situation.context}</p><h2>{situation.core}</h2><p>{situation.translation}</p></section>
      {tab === 'map' && <section aria-label="Інтерактивна карта" className="mind-map">
        {groups.map(group => <div className="mind-group" key={group}><h3>{group}</h3><div className="mind-nodes">{situation.variants.filter(item => item.group === group).map(item => <button type="button" className={variantId === item.id ? 'selected' : ''} key={item.id} onClick={() => {setVariantId(item.id);setShowAnswer(false);}}>{item.label}</button>)}</div></div>)}
        <article className="mind-result"><span>ОБРАНА ПЕРСПЕКТИВА</span><h3>{variant.label}</h3><p className="mind-de">{variant.de}</p><p>{variant.uk}</p><div className="mind-tip">💡 {variant.tip}</div><button type="button" onClick={() => {setTab('training');resetDeck('selected', situationId);}}>Потренувати цю конструкцію →</button></article>
      </section>}
      {tab === 'square' && <section className="mind-square"><p>Обирай клітинку й промовляй німецьке речення до відкриття відповіді.</p><div className="mind-square-grid">{situation.variants.map(item => <button key={item.id} className={variantId === item.id ? 'selected' : ''} onClick={() => {setVariantId(item.id);setShowAnswer(false);}}><small>{item.group}</small><strong>{item.label}</strong></button>)}</div><article className="mind-result"><h3>{variant.label}</h3><p>{variant.uk}</p>{showAnswer ? <><p className="mind-de">{variant.de}</p><div className="mind-tip">💡 {variant.tip}</div></> : <p className="mind-hidden">Скажи німецькою вголос, потім відкрий відповідь.</p>}<button type="button" onClick={() => setShowAnswer(v => !v)}>{showAnswer ? 'Приховати відповідь' : 'Показати відповідь'}</button></article></section>}
      {tab === 'training' && <section className="mind-training"><div className="mind-mode"><strong>🔀 Випадкове тренування</strong><div className="mind-actions"><button type="button" className={scope === 'selected' ? '' : 'secondary'} onClick={() => resetDeck('selected', situationId)}>Ця ситуація</button><button type="button" className={scope === 'all' ? '' : 'secondary'} onClick={() => resetDeck('all', situationId)}>Усі ситуації</button><button type="button" className="secondary" onClick={() => resetDeck(scope, situationId)}>↻ Перемішати заново</button></div><p className="mind-muted">Без повторів до завершення колоди · Залишилося: {deck.length} · Граматичну підказку можна приховати.</p></div><span className="mind-eyebrow">РАУНД {round + 1}{showGrammarHint ? ' · ' + exercise.label : ''}{scope === 'all' ? ' · ' + exerciseSituation.title : ''}</span><button type="button" className="mind-hint-toggle" onClick={() => setShowGrammarHint(v => !v)}>{showGrammarHint ? 'Сховати граматичну підказку' : 'Показати граматичну підказку'}</button><h2>Переклади німецькою</h2><p className="mind-prompt">{exercise.uk}</p><label htmlFor="mind-answer">Твоя відповідь</label><textarea id="mind-answer" rows="3" value={input} onChange={e => {setInput(e.target.value);setChecked(false);}} placeholder="Напиши речення німецькою або спочатку скажи його вголос…" /><div className="mind-actions"><button type="button" onClick={() => setChecked(true)} disabled={!input.trim()}>Перевірити</button><button type="button" className="secondary" onClick={() => setShowAnswer(v => !v)}>{showAnswer ? 'Сховати зразок' : 'Показати зразок'}</button><button type="button" className="secondary" onClick={next}>Пропустити →</button></div>{checked && <div className="mind-feedback">{normalize(input) === normalize(exercise.de) ? '✓ Збігається зі зразком!' : 'Текст відрізняється від зразка. Це не обов’язково помилка: можливі інші правильні формулювання.'}</div>}{(showAnswer || checked) && <div className="mind-result"><strong>Зразок відповіді</strong><p className="mind-de">{exercise.de}</p><p className="mind-tip">{exercise.tip}</p><p className="mind-muted">Самоперевірка: оцінюй зміст і граматику. Автоматична перевірка тут порівнює лише текст зі зразком.</p></div>}<div className="mind-actions"><button type="button" onClick={() => record('right')}>✓ Знаю</button><button type="button" className="secondary" onClick={() => record('review')}>↻ Повторити пізніше</button></div><p className="mind-muted">Для цієї конструкції: знаю {score.right} · повторити {score.review}. Прогрес зберігається тільки в цьому браузері.</p></section>}
      {tab !== 'training' && <section className="mind-random-cta"><h3>🔀 Перевір себе без підказок</h3><p>Усі речення цієї ситуації будуть перемішані. Або вибери тренування з усіх ситуацій одразу.</p><div className="mind-actions"><button type="button" onClick={() => {resetDeck('selected',situationId);setTab('training');}}>Перемішати цю ситуацію</button><button type="button" className="secondary" onClick={() => {resetDeck('all',situationId);setTab('training');}}>Змішати всі ситуації</button></div></section>}
    </main>
  );
}
