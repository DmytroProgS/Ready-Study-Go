import React from 'react';
import './SubstantiveGrammarReference.css';

const cases = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
const colors = ['masc', 'neut', 'fem', 'plural'];
const persons = [
  ['ich (я)', 'mich (мене)', 'mir (мені)', 'mein (мій)', 'mein'],
  ['du (ти)', 'dich (тебе)', 'dir (тобі)', 'dein (твій)', 'dein'],
  ['er (він)', 'ihn (нього)', 'ihm (йому)', 'sein (його)', 'sein'],
  ['sie (вона)', 'sie (неї)', 'ihr (їй)', 'ihr (її)', 'ihr'],
  ['es (воно)', 'es (його)', 'ihm (йому)', 'sein (його)', 'sein'],
  ['wir (ми)', 'uns (нас)', 'uns (нам)', 'unser (наш)', 'unser'],
  ['ihr (ви)', 'euch (вас)', 'euch (вам)', 'euer (ваш)', 'euer'],
  ['sie (вони)', 'sie (їх)', 'ihnen (їм)', 'ihr (їхній)', 'ihr'],
  ['Sie (Ви)', 'Sie (Вас)', 'Ihnen (Вам)', 'Ihr (Ваш)', 'Ihr']
];
const articleSets = [
  [['der','das','die','die'],['ein','ein','eine','—'],['kein','kein','keine','keine']],
  [['den','das','die','die'],['einen','ein','eine','—'],['keinen','kein','keine','keine']],
  [['dem','dem','der','den'],['einem','einem','einer','—'],['keinem','keinem','keiner','keinen']],
  [['des','des','der','der'],['eines','eines','einer','—'],['keines','keines','keiner','keiner']]
];
const endings = [
  ['', '', 'e', 'e'],
  ['en', '', 'e', 'e'],
  ['em', 'em', 'er', 'en'],
  ['es', 'es', 'er', 'er']
];
const preps = [
  [], ['für (для)', 'durch (через)', 'gegen (проти)', 'ohne (без)', 'um (навколо, біля)'],
  ['mit (з)', 'nach (після, до)', 'aus (з, із)', 'zu (до)', 'von (від, з)', 'bei (біля, у, при)'], []
];
const question = ['(Wer? Was?) Хто? Що?', '(Wen? Wohin?) Кого? Куди?', '(Wem? Wo? Wann?) Кому? Де? Коли?', '(Wessen?) Чий?'];
const words = ['Mann', 'Kind', 'Frau', 'Kinder'];
const articles = [
  ['der','das','die','die'],
  ['den','das','die','die'],
  ['dem','dem','der','den'],
  ['des','des','der','der']
];
const indefinite = [
  ['ein','ein','eine','—'],
  ['einen','ein','eine','—'],
  ['einem','einem','einer','—'],
  ['eines','eines','einer','—']
];
const negative = [
  ['kein','kein','keine','keine'],
  ['keinen','kein','keine','keine'],
  ['keinem','keinem','keiner','keinen'],
  ['keines','keines','keiner','keiner']
];
const adjectives = {
  definite: [['e','e','e','en'],['en','e','e','en'],['en','en','en','en'],['en','en','en','en']],
  mixed: [['er','es','e','en'],['en','es','e','en'],['en','en','en','en'],['en','en','en','en']],
  bare: [['er','es','e','e'],['en','es','e','e'],['en','en','en','en'],['en','en','en','er']]
};
const forms = [
  [['der','das','die','die'],['dieser','dieses','diese','diese'],['mein','mein','meine','meine']],
  [['den','das','die','die'],['diesen','dieses','diese','diese'],['meinen','mein','meine','meine']],
  [['dem','dem','der','den'],['diesem','diesem','dieser','diesen'],['meinem','meinem','meiner','meinen']],
  [['des','des','der','der'],['dieses','dieses','dieser','dieser'],['meines','meines','meiner','meiner']]
];
const welcher = [
  ['welcher','welches','welche','welche'],
  ['welchen','welches','welche','welche'],
  ['welchem','welchem','welcher','welchen'],
  ['welches','welches','welcher','welcher']
];
const genitiveNoun = (ci, gi) => ci === 3 && gi < 2 ? (gi === 0 ? 'Mannes' : 'Kindes') : ci === 2 && gi === 3 ? 'Kindern' : words[gi];
function ColorForms({ values }) {
  return <span className="sub-ref-color-forms">{values.map((v, i) => <React.Fragment key={i}>{i > 0 && <span className="sub-ref-separator">/</span>}<span className={'sub-ref-' + colors[i]}>{v}</span></React.Fragment>)}</span>;
}
function possessiveForm(stem, suffix) {
  return (stem === 'euer' && suffix ? 'eur' : stem) + suffix;
}
function ReferenceTable({ heading, rows, first = 'Kasus' }) {
  return <div className="sub-ref-table-section">
    {heading && <h4>{heading}</h4>}
    <div className="sub-ref-scroll" tabIndex="0" role="region" aria-label={heading || 'Grammatiktabelle'}>
      <table className="sub-ref-table sub-ref-examples">
        <thead><tr><th>{first}</th>{['Maskulinum','Neutrum','Femininum','Plural'].map((x,i) => <th className={'sub-ref-head-' + colors[i]} key={x}>{x}</th>)}</tr></thead>
        <tbody>{rows.map((row,i) => <tr key={i}><th scope="row">{cases[i]}</th>{row.map((cell,j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  </div>;
}
function Suffix({ base, ending }) {
  return <>{base}<strong className="sub-ref-ending">{ending}</strong></>;
}
function example(ci,gi,kind) {
  const noun = genitiveNoun(ci,gi);
  const art = kind === 'definite' ? articles[ci][gi] : kind === 'negative' ? negative[ci][gi] : indefinite[ci][gi];
  if (art === '—') return null;
  const suffix = kind === 'definite' ? adjectives.definite[ci][gi] : kind === 'bare' ? adjectives.bare[ci][gi] : adjectives.mixed[ci][gi];
  return <>{kind !== 'bare' && <>{art} </>}<Suffix base="gut" ending={suffix}/> {noun}</>;
}
function articleExample(ci,gi,kind) {
  const noun = genitiveNoun(ci,gi);
  const art = kind === 'definite' ? articles[ci][gi] : kind === 'negative' ? negative[ci][gi] : indefinite[ci][gi];
  return art === '—' ? null : <>{art} {noun}</>;
}
function BigExamples() {
  return <ReferenceTable heading="Artikel und Adjektive – alle Beispiele" rows={cases.map((_,ci)=>words.map((_,gi)=>{
    const lines = [
      articleExample(ci,gi,'definite'),
      example(ci,gi,'definite'),
      articleExample(ci,gi,'indefinite'),
      example(ci,gi,'indefinite'),
      articleExample(ci,gi,'negative'),
      example(ci,gi,'negative')
    ].filter(Boolean);
    if (gi === 3) lines.splice(2,0,<React.Fragment key="bare"><Suffix base="gut" ending={adjectives.bare[ci][gi]}/> {genitiveNoun(ci,gi)}</React.Fragment>);
    return <div className="sub-ref-lines">{lines.map((line,k)=><div key={k}>{line}{k < lines.length-1 ? ' /' : ''}</div>)}</div>;
  }))}/>;
}
function Comparison() {
  return <ReferenceTable heading="der / dieser / mein – Vergleich" rows={cases.map((_,ci)=>words.map((_,gi)=><div className="sub-ref-lines"><div>{forms[ci][0][gi]} / {forms[ci][1][gi]} {genitiveNoun(ci,gi)},</div><div className="sub-ref-pink">{forms[ci][2][gi]} {genitiveNoun(ci,gi)}</div></div>))}/>;
}
function Welcher() {
  return <ReferenceTable heading="welcher – Deklination" rows={cases.map((_,ci)=>words.map((_,gi)=><>{welcher[ci][gi]} {genitiveNoun(ci,gi)}</>))}/>;
}
function Pronouns() {
  return <div className="sub-ref-pronouns">
    {cases.map((name,ci)=><div className="sub-ref-case" key={name}>
      <div className="sub-ref-case-header">
        <div className="sub-ref-case-name">{name}</div>
        <div className="sub-ref-case-question">{question[ci]}</div>
        {preps[ci].length > 0 && <div className="sub-ref-preps">{preps[ci].map(p=><div key={p}>{p}</div>)}</div>}
      </div>
      <div className="sub-ref-scroll" tabIndex="0" role="region" aria-label={name}>
        <table className="sub-ref-table sub-ref-person-table">
          <thead><tr><th>Artikel</th><th>Personalpronomen</th>{ci > 0 && <th>Possessivpronomen</th>}</tr></thead>
          <tbody>
            {persons.map((p,i)=><tr key={i}>
              {i===0 && <td rowSpan={persons.length} className="sub-ref-article-cell">{articleSets[ci].map((set,j)=><div key={j}><ColorForms values={set}/></div>)}</td>}
              <td className={ci===1||ci===2?'sub-ref-pink':''}>{p[ci===0?0:ci===1?1:ci===2?2:3]}</td>
              {ci > 0 && <td><ColorForms values={endings[ci].map(e=>possessiveForm(p[4],e))}/></td>}
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>)}
  </div>;
}
export default function SubstantiveGrammarReference() {
  return <section className="sub-grammar-reference">
    <details>
      <summary>📖 Meine Grammatiktabellen</summary>
      <div className="sub-grammar-content">
        <p>Auf dem Handy kannst du breite Tabellen zur Seite scrollen.</p>
        <div className="sub-ref-original"><h3>1. Personal- und Possessivpronomen</h3><Pronouns/></div>
        <div className="sub-ref-original"><h3>2. Artikel, Adjektive und „welcher“</h3><BigExamples/><Comparison/><Welcher/></div>
      </div>
    </details>
  </section>;
}
