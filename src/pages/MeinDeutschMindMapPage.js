import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { situations } from '../data/mindMapSituations';
import './MeinDeutschMindMapPage.css';

const branchTypes = [
  { id: 'direct', title: 'A · Direkte Umformung', description: 'Zeitform, Frage oder Verneinung für denselben Gedanken.' },
  { id: 'extension', title: 'B · Gedanken erweitern', description: 'Gründe, Bedingungen und höfliche Formulierungen.' },
  { id: 'perspective', title: 'C · Perspektivwechsel', description: 'Aktiv und Passiv: dasselbe Ereignis aus einer anderen Perspektive.' }
];
const typeFor = v => v.type || (['present','past','perfect','future','question','negative'].includes(v.id) ? 'direct' : ['passive','relative','reported'].includes(v.id) ? 'perspective' : 'extension');
const levelForVariant = v => v.level || levelFor(v.id);
const grammarCatalog = [
  ['present','Gegenwart','direct'],['past','Vergangenheit · Präteritum / Perfekt','direct'],['future','Zukunft','direct'],['question','Frage','direct'],['negative','Verneinung','direct'],
  ['reason','weil · Grund','extension'],['purpose','Zweck · um … zu / damit','extension'],['dependency','Zusammenhang · je … desto','extension'],['falls','Bedingung · falls','extension'],['contrast','obwohl · Einräumung','extension'],['deshalb','deshalb · Folge','extension'],['trotzdem','trotzdem · Gegensatz','extension'],['dass','dass · Gedanke','extension'],['polite','Höfliche Bitte','extension'],['hypothetical','Hypothetische Bedingung','extension'],['regret','Bedauern über Vergangenes','extension'],['mixed','Gemischte Bedingung','extension'],['concession','selbst wenn','extension'],['indirect','Indirekte Frage','extension'],['zu','Infinitiv mit zu','extension'],
  ['relative','Relativsatz','perspective'],['reported','Konjunktiv I','perspective'],['passive','Passiv','perspective'],['passive-present','Passiv Präsens','perspective'],['passive-past','Passiv Präteritum','perspective'],['passive-perfect','Passiv Perfekt','perspective'],['passive-modal','Passiv + Modalverb','perspective'],['passive-question','Passiv Frage','perspective'],['passive-weil','Passiv + weil','perspective'],['passive-dass','Passiv + dass','perspective'],['state-passive','Zustandspassiv','perspective']
];
const speechIntents = [
  {id:'reason',title:'Grund',ids:['reason']},
  {id:'purpose',title:'Zweck',ids:['purpose','zu']},
  {id:'condition',title:'Bedingung und Wunsch',ids:['falls','hypothetical','regret','mixed','polite','concession']},
  {id:'consequence',title:'Folge',ids:['deshalb']},
  {id:'contrast',title:'Gegensatz',ids:['contrast','trotzdem']},
  {id:'dependency',title:'Zusammenhang',ids:['dependency']},
  {id:'thought',title:'Gedanke und Nachfrage',ids:['dass','indirect']}
];
const intentFor = id => (speechIntents.find(g => g.ids.includes(id)) || speechIntents[6]).id;
const groupedCatalog = (s, branch) => {
  const entries = catalogFor(s,branch);
  return branch === 'extension' ? speechIntents.map(g => ({...g,entries:entries.filter(([id]) => intentFor(id) === g.id)})) : [{id:branch,title:'',entries}];
};
const catalogFor = (s, branch) => grammarCatalog.filter(([id,,type]) => type === branch && (id !== 'passive' || !s.variants.some(v => v.id.startsWith('passive-'))));
const focusOptions = [
  {id:'all',label:'Alle Konstruktionen'},
  {id:'passive',label:'Passiv · alle Formen'},
  {id:'condition',label:'Bedingungen und Konjunktiv II'},
  {id:'purpose',label:'Zweck · um … zu / damit'},
  {id:'dependency',label:'Zusammenhang · je … desto'}
];
const matchesFocus = (v,focus) => focus === 'all' || (focus === 'passive' && (v.id.startsWith('passive') || v.id === 'state-passive')) || (focus === 'condition' && ['falls','hypothetical','regret','mixed','concession'].includes(v.id)) || (focus === 'purpose' && ['purpose','zu'].includes(v.id)) || (focus === 'dependency' && v.id === 'dependency');
const grammarLegend = <p className="mind-availability-legend"><span className="mind-available">● Beispiel vorhanden</span><span className="mind-unavailable">● Für diese Situation gibt es kein natürliches Beispiel</span></p>;
const shuffle = items => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
const levelFor = id => ({present:1,past:1,perfect:1,future:1,question:1,reason:1,contrast:2,hypothetical:2,regret:3,polite:2,negative:2,deshalb:2,trotzdem:2,dass:2,indirect:3,relative:3,zu:3,passive:3,mixed:3,concession:4,reported:4})[id] || 4;
const levelNames = ['','Stufe 1 · Grundlagen','Stufe 2 · Vertiefung','Stufe 3 · B2–C1','Stufe 4 · C1'];
const grammarExamples = {
  "passive-present":["Die Besprechung wird verschoben.","Der Raum wird reserviert."],
  "passive-past":["Die Besprechung wurde abgesagt.","Der Termin wurde bestätigt."],
  "passive-perfect":["Die Besprechung ist abgesagt worden.","Die Unterlagen sind verschickt worden."],
  "passive-modal":["Die Besprechung muss verschoben werden.","Der Raum muss reserviert werden."],
  "passive-question":["Wurde die Besprechung abgesagt?","Wurde der Termin bestätigt?"],
  "passive-weil":["Die Besprechung wird verschoben, weil jemand krank ist.","Der Termin wird abgesagt, weil der Raum nicht frei ist."],
  "passive-dass":["Ich hoffe, dass die Besprechung nicht abgesagt werden muss.","Sie sagt, dass der Termin verschoben werden muss."],
  "state-passive":["Der Raum ist schon reserviert.","Die Besprechung ist jetzt abgesagt."],
  "purpose": ["Ich übe jeden Tag, um flüssiger zu sprechen.","Ich lerne Deutsch, damit ich mich besser verständigen kann."],
  "dependency": ["Je öfter ich spreche, desto leichter fällt es mir.","Je mehr ich übe, desto sicherer werde ich."],
  "falls": ["Falls ich heute Zeit habe, übe ich noch ein bisschen.","Falls du Fragen hast, sag einfach Bescheid."],
  "present": [
    "Ich lerne auch am Wochenende Deutsch.",
    "Heute kann ich leider nicht mitkommen."
  ],
  "past": [
    "Früher lernte ich oft abends.",
    "Gestern konnte ich nicht mitkommen."
  ],
  "perfect": [
    "Ich habe gestern Deutsch gelernt.",
    "Ich habe leider nicht mitkommen können."
  ],
  "future": [
    "Morgen werde ich wieder Deutsch lernen.",
    "Nächste Woche werde ich mehr Zeit haben."
  ],
  "question": [
    "Lernst du jeden Tag Deutsch?",
    "Kannst du morgen mitkommen?"
  ],
  "reason": [
    "Ich lerne Deutsch, weil ich sicherer sprechen möchte.",
    "Ich bleibe zu Hause, weil ich arbeiten muss."
  ],
  "contrast": [
    "Obwohl ich müde bin, lerne ich Deutsch.",
    "Obwohl ich wenig Zeit habe, komme ich mit."
  ],
  "hypothetical": [
    "Wenn ich Zeit hätte, würde ich mehr lernen.",
    "Wenn ich frei hätte, könnte ich mitkommen."
  ],
  "regret": [
    "Wenn ich früher angefangen hätte, wäre ich jetzt weiter.",
    "Hätte ich gestern Zeit gehabt, wäre ich mitgekommen."
  ],
  "polite": [
    "Könntest du mir bitte helfen?",
    "Wäre es möglich, den Termin zu verschieben?"
  ],
  "negative": [
    "Ich habe heute leider keine Zeit.",
    "Ich kann morgen nicht kommen."
  ],
  "deshalb": [
    "Ich möchte flüssiger sprechen. Deshalb übe ich jeden Tag.",
    "Ich muss arbeiten. Deshalb kann ich nicht mitkommen."
  ],
  "trotzdem": [
    "Ich bin müde. Trotzdem lerne ich Deutsch.",
    "Ich habe wenig Zeit. Trotzdem komme ich mit."
  ],
  "dass": [
    "Ich glaube, dass ich mehr üben sollte.",
    "Ich hoffe, dass ich morgen Zeit habe."
  ],
  "indirect": [
    "Ich weiß nicht, ob ich morgen Zeit habe.",
    "Kannst du mir sagen, ob du mitkommst?"
  ],
  "relative": [
    "Das ist der Freund, mit dem ich Deutsch lerne.",
    "Das ist der Termin, den ich verschieben muss."
  ],
  "zu": [
    "Ich versuche, jeden Tag Deutsch zu lernen.",
    "Ich hoffe, morgen mitkommen zu können."
  ],
  "passive": [
    "Der Termin wird verschoben.",
    "Die Aufgabe wurde gestern erledigt."
  ],
  "mixed": [
    "Wenn ich früher angefangen hätte, könnte ich heute besser sprechen.",
    "Wenn ich gestern frei gehabt hätte, wäre ich heute ausgeruhter."
  ],
  "concession": [
    "Selbst wenn ich müde wäre, würde ich weiterlernen.",
    "Selbst wenn ich Zeit hätte, könnte ich nicht mitkommen."
  ],
  "reported": [
    "Er sagt, er habe heute keine Zeit.",
    "Sie erklärt, sie lerne jeden Tag Deutsch."
  ]
};

const makeDeck = (scope, id, level = 1, focus = 'all') => shuffle(
  situations.filter(s => scope === 'all' || s.id === id)
    .flatMap(s => s.variants.filter(v => levelForVariant(v) <= level && matchesFocus(v,focus)).map(v => ({situationId:s.id, variantId:v.id})))
);


export default function MeinDeutschMindMapPage() {
  const [situationId, setSituationId] = useState(situations[0].id);
  const [variantId, setVariantId] = useState('present');
  const [tab, setTab] = useState('map');
  const [showAnswer, setShowAnswer] = useState(false);
  const [round, setRound] = useState(0);
  const [scope, setScope] = useState('selected');
  const [level, setLevel] = useState(1);
  const [focus, setFocus] = useState('all');
  const [deck, setDeck] = useState(() => makeDeck('selected', situations[0].id));
  const [initialDeck, setInitialDeck] = useState(() => deck);
  const [showGrammarHint, setShowGrammarHint] = useState(false);
  const situation = situations.find(item => item.id === situationId) || situations[0];
  const variant = situation.variants.find(item => item.id === variantId) || situation.variants[0];
  const currentCard = deck[0];
  const exerciseSituation = currentCard ? situations.find(s => s.id === currentCard.situationId) : null;
  const exercise = exerciseSituation ? exerciseSituation.variants.find(v => v.id === currentCard.variantId) : null;
  const resetDeck = (newScope, id, newLevel = level, newFocus = focus) => {
    setScope(newScope);
    const fresh = makeDeck(newScope, id, newLevel, newFocus);
    setDeck(fresh);
    setInitialDeck(fresh);
    setRound(0);
    setShowAnswer(false);
    setShowGrammarHint(false);
  };
  const selectSituation = id => {
    setSituationId(id);
    setVariantId('present');
    resetDeck(scope, id);
  };
  const next = () => {
    setDeck(previous => previous.slice(1));
    setRound(n => n + 1);
    setShowAnswer(false);
    setShowGrammarHint(false);
  };
  const restartSameOrder = () => {
    const original = initialDeck.length ? initialDeck : makeDeck(scope, situationId, level, focus);
    setDeck(original);
    setInitialDeck(original);
    setRound(0);
    setShowAnswer(false);
    setShowGrammarHint(false);
  };
  const changeFocus = value => {setFocus(value);resetDeck(scope,situationId,level,value);};
  const changeLevel = value => { const selected = Number(value); setLevel(selected); resetDeck(scope, situationId, selected); };
  return (
    <main className="mind-page">
      <Link to="/" className="mind-back">← Zur Startseite</Link>
      <header className="mind-hero"><span className="mind-eyebrow">READY STUDY GO · AKTIV DEUTSCH LERNEN</span><h1>🧠 Mein Deutsch Mind Map</h1><p>Eine Situation, viele Möglichkeiten, einen Gedanken auszudrücken. Wähle eine Perspektive, sprich die Sätze laut und überprüfe dich selbst.</p></header>
      <div className="mind-toolbar"><label htmlFor="mind-situation">Situation aus dem Alltag</label><select id="mind-situation" value={situationId} onChange={e => selectSituation(e.target.value)}>{situations.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select></div>
      <div className="mind-tabs" role="tablist" aria-label="Übungsmodi">
        {[['map','🕸️ Mind Map'],['square','▦ Grammatik-Quadrat'],['training','🎯 Training']].map(([id,label]) => <button key={id} type="button" role="tab" aria-selected={tab === id} className={tab === id ? 'active' : ''} onClick={() => {setTab(id);setShowAnswer(false);}}>{label}</button>)}
      </div>
      <section className="mind-core"><span>SITUATION</span><p>{tab === "training" && exerciseSituation ? exerciseSituation.context : situation.context}</p><h2>{tab === "training" && exerciseSituation ? exerciseSituation.core : situation.core}</h2><p>{tab === "training" && exerciseSituation ? exerciseSituation.translation : situation.translation}</p></section>
      {tab === 'map' && <section aria-label="Interaktive Mindmap" className="mind-map">
        {grammarLegend}
        {branchTypes.map(branch => <div className="mind-group mind-branch" key={branch.id}><h3>{branch.title}</h3><p className="mind-muted">{branch.description}</p><div className="mind-intent-groups">{groupedCatalog(situation,branch.id).map(group => <div className="mind-intent-group" key={group.id}>{group.title && <h4>{group.title}</h4>}<div className="mind-nodes">{group.entries.map(([id,label]) => {const item=situation.variants.find(v => v.id === id);return <button type="button" disabled={!item} title={item ? 'Beispiel öffnen' : 'Für diese Situation gibt es noch kein natürliches Beispiel'} className={item ? 'mind-available ' + (variantId === item.id ? 'selected' : '') : 'mind-unavailable'} key={id} onClick={() => {if(item){setVariantId(item.id);setShowAnswer(false);}}}><small>{item ? item.group + ' · Stufe ' + levelForVariant(item) : 'Kein Beispiel'}</small><span>{item ? item.label : label}</span></button>;})}</div></div>)}</div></div>)}
        <article className="mind-result mind-map-result"><span>GEWÄHLTE PERSPEKTIVE</span><h3>{variant.label}</h3><p className="mind-muted">{branchTypes.find(b => b.id === typeFor(variant)).title} · Stufe {levelForVariant(variant)}</p><p className="mind-de">{variant.de}</p>{variant.alternatives?.map(alt => <p className="mind-de mind-alternative" key={alt}>oder {alt}</p>)}<div className="mind-prompt-card mind-review-prompt"><p className="mind-prompt">{variant.uk}</p></div><div className="mind-tip">💡 {variant.tip}</div><button type="button" onClick={() => {setTab('training');resetDeck('selected', situationId);}}>Diese Konstruktion üben →</button></article>
      </section>}
      {tab === 'square' && <section className="mind-square"><p>Wähle ein Feld und sprich den deutschen Satz laut, bevor du die Antwort aufdeckst.</p>{grammarLegend}{branchTypes.map(branch => <div className="mind-square-branch" key={branch.id}><h3>{branch.title}</h3><div className="mind-intent-groups">{groupedCatalog(situation,branch.id).map(group => <div className="mind-intent-group" key={group.id}>{group.title && <h4>{group.title}</h4>}<div className="mind-square-grid">{group.entries.map(([id,label]) => {const item=situation.variants.find(v => v.id === id);return <button type="button" key={id} disabled={!item} title={item ? 'Beispiel öffnen' : 'Für diese Situation gibt es noch kein natürliches Beispiel'} className={item ? 'mind-available ' + (variantId === item.id ? 'selected' : '') : 'mind-unavailable'} onClick={() => {if(item){setVariantId(item.id);setShowAnswer(false);}}}><small>{item ? item.group + ' · Stufe ' + levelForVariant(item) : 'Kein Beispiel'}</small><strong>{item ? item.label : label}</strong></button>;})}</div>{group.entries.some(([id]) => id === variant.id) && <article className="mind-result mind-inline-result"><h3>{variant.label}</h3><div className="mind-prompt-card mind-review-prompt"><p className="mind-prompt">{variant.uk}</p></div>{showAnswer ? <><p className="mind-de">{variant.de}</p>{variant.alternatives?.map(alt => <p className="mind-de mind-alternative" key={alt}>oder {alt}</p>)}<div className="mind-tip">💡 {variant.tip}</div></> : <p className="mind-hidden">Sprich den Satz laut auf Deutsch und zeige dann die Antwort an.</p>}<button type="button" onClick={() => setShowAnswer(v => !v)}>{showAnswer ? "Antwort ausblenden" : "Antwort anzeigen"}</button></article>}</div>)}</div></div>)}</section>}
            {tab === 'training' && <section className="mind-training"><div className="mind-mode"><strong>🔀 Training mit gemischten Karten</strong><div className="mind-level-picker"><label htmlFor="mind-level">Schwierigkeitsstufe</label><select id="mind-level" value={level} onChange={e => changeLevel(e.target.value)}>{[1,2,3,4].map(n => <option key={n} value={n}>{levelNames[n]}{n === 4 ? " · Alle Konstruktionen" : ""}</option>)}</select><p className="mind-muted">Jede Stufe umfasst auch die vorherigen. Die Mindmap und das Grammatik-Quadrat zeigen immer alle Konstruktionen.</p></div><div className="mind-focus-picker"><label htmlFor="mind-focus">Übungsschwerpunkt</label><select id="mind-focus" value={focus} onChange={e => changeFocus(e.target.value)}>{focusOptions.map(option => <option key={option.id} value={option.id}>{option.label}</option>)}</select><p className="mind-muted">Standardmäßig werden alle Konstruktionen gemischt. Mit einem Schwerpunkt erscheinen nur die passenden Sätze.</p></div><div className="mind-actions"><button type="button" className={scope === 'selected' ? '' : 'secondary'} onClick={() => resetDeck('selected', situationId)}>Diese Situation</button><button type="button" className={scope === 'all' ? '' : 'secondary'} onClick={() => resetDeck('all', situationId)}>Alle Situationen</button><button type="button" className="secondary" onClick={() => resetDeck(scope, situationId)}>↻ Neu mischen</button></div><p className="mind-muted">{levelNames[level]} · {focusOptions.find(option => option.id === focus).label} · Keine Wiederholungen innerhalb eines Durchgangs · Übrig: {deck.length} · Den Grammatikhinweis kannst du ausblenden.</p></div>{exercise ? <><span className="mind-eyebrow">RUNDE {round + 1}{showGrammarHint ? ' · ' + exercise.label : ''}{scope === 'all' ? ' · ' + exerciseSituation.title : ''}</span><button type="button" className="mind-hint-toggle" onClick={() => setShowGrammarHint(v => !v)}>{showGrammarHint ? 'Grammatikhinweis ausblenden' : 'Grammatikhinweis anzeigen'}</button><p className="mind-task-label">Sprich den Satz auf Deutsch</p><div className="mind-prompt-card"><p className="mind-prompt">{exercise.uk}</p></div><p className="mind-muted">Lies den ukrainischen Satz, antworte laut und decke die Karte zur Kontrolle auf.</p><div className="mind-actions"><button type="button" onClick={() => setShowAnswer(v => !v)}>{showAnswer ? 'Antwort ausblenden' : 'Antwort anzeigen'}</button><button type="button" className="secondary" onClick={next}>{showAnswer ? 'Nächste Karte →' : 'Überspringen →'}</button></div>{showAnswer && <div className="mind-result"><strong>Musterlösung</strong><p className="mind-de">{exercise.de}</p>{exercise.alternatives?.map(alt => <p className="mind-de mind-alternative" key={alt}>oder {alt}</p>)}<p className="mind-tip">💡 {exercise.tip}</p>{grammarExamples[exercise.id] && <div className="mind-extra-examples"><strong>Zwei weitere ähnliche Beispiele</strong><ul>{grammarExamples[exercise.id].map(example => <li key={example}>{example}</li>)}</ul></div>}</div>}</> : <div className="mind-empty-deck">{round > 0 ? <><h3>🎉 Du hast alle Beispiele bearbeitet!</h3><p>Du hast alle {round} Karten in diesem Set ohne Wiederholungen bearbeitet.</p><div className="mind-actions"><button type="button" onClick={restartSameOrder}>Von vorn beginnen</button><button type="button" className="secondary" onClick={() => resetDeck(scope,situationId)}>↻ Mischen und erneut üben</button></div></> : <><strong>Für diesen Schwerpunkt gibt es auf der gewählten Stufe keine Karten.</strong><p>Wähle eine höhere Stufe, alle Situationen oder einen anderen Schwerpunkt.</p></>}</div>}</section>}
      {tab !== 'training' && <section className="mind-random-cta"><h3>🔀 Teste dich ohne Hinweise</h3><p>Du kannst die Sätze aus dieser Situation mischen oder mit Sätzen aus allen Situationen üben.</p><div className="mind-actions"><button type="button" onClick={() => {resetDeck('selected',situationId);setTab('training');}}>Sätze dieser Situation mischen</button><button type="button" className="secondary" onClick={() => {resetDeck('all',situationId);setTab('training');}}>Alle Situationen mischen</button></div></section>}
    </main>
  );
}
