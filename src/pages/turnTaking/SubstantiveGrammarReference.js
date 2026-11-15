import React from 'react';
import './SubstantiveGrammarReference.css';

const cases = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
const genders = ['Maskulin', 'Neutrum', 'Feminin', 'Plural'];

const personal = [
  ['ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie', 'Sie'],
  ['mich', 'dich', 'ihn', 'sie', 'es', 'uns', 'euch', 'sie', 'Sie'],
  ['mir', 'dir', 'ihm', 'ihr', 'ihm', 'uns', 'euch', 'ihnen', 'Ihnen']
];
const possessiveStems = ['mein', 'dein', 'sein', 'ihr', 'sein', 'unser', 'euer', 'ihr', 'Ihr'];
const endings = [
  ['', '', 'e', 'e'],
  ['en', '', 'e', 'e'],
  ['em', 'em', 'er', 'en'],
  ['es', 'es', 'er', 'er']
];
const article = [
  ['der', 'das', 'die', 'die'],
  ['den', 'das', 'die', 'die'],
  ['dem', 'dem', 'der', 'den'],
  ['des', 'des', 'der', 'der']
];
const indefinite = [
  ['ein', 'ein', 'eine', '—'],
  ['einen', 'ein', 'eine', '—'],
  ['einem', 'einem', 'einer', '—'],
  ['eines', 'eines', 'einer', '—']
];
const kein = [
  ['kein', 'kein', 'keine', 'keine'],
  ['keinen', 'kein', 'keine', 'keine'],
  ['keinem', 'keinem', 'keiner', 'keinen'],
  ['keines', 'keines', 'keiner', 'keiner']
];
const dieser = [
  ['dieser', 'dieses', 'diese', 'diese'],
  ['diesen', 'dieses', 'diese', 'diese'],
  ['diesem', 'diesem', 'dieser', 'diesen'],
  ['dieses', 'dieses', 'dieser', 'dieser']
];
const welcher = [
  ['welcher', 'welches', 'welche', 'welche'],
  ['welchen', 'welches', 'welche', 'welche'],
  ['welchem', 'welchem', 'welcher', 'welchen'],
  ['welches', 'welches', 'welcher', 'welcher']
];
const adjectivesDefinite = [
  ['der gute Mann', 'das gute Kind', 'die gute Frau', 'die guten Kinder'],
  ['den guten Mann', 'das gute Kind', 'die gute Frau', 'die guten Kinder'],
  ['dem guten Mann', 'dem guten Kind', 'der guten Frau', 'den guten Kindern'],
  ['des guten Mannes', 'des guten Kindes', 'der guten Frau', 'der guten Kinder']
];
const adjectivesIndefinite = [
  ['ein guter Mann', 'ein gutes Kind', 'eine gute Frau', 'gute Kinder'],
  ['einen guten Mann', 'ein gutes Kind', 'eine gute Frau', 'gute Kinder'],
  ['einem guten Mann', 'einem guten Kind', 'einer guten Frau', 'guten Kindern'],
  ['eines guten Mannes', 'eines guten Kindes', 'einer guten Frau', 'guter Kinder']
];
const adjectivesNegative = [
  ['kein guter Mann', 'kein gutes Kind', 'keine gute Frau', 'keine guten Kinder'],
  ['keinen guten Mann', 'kein gutes Kind', 'keine gute Frau', 'keine guten Kinder'],
  ['keinem guten Mann', 'keinem guten Kind', 'keiner guten Frau', 'keinen guten Kindern'],
  ['keines guten Mannes', 'keines guten Kindes', 'keiner guten Frau', 'keiner guten Kinder']
];
const adjectivesPossessive = [
  ['mein guter Mann', 'mein gutes Kind', 'meine gute Frau', 'meine guten Kinder'],
  ['meinen guten Mann', 'mein gutes Kind', 'meine gute Frau', 'meine guten Kinder'],
  ['meinem guten Mann', 'meinem guten Kind', 'meiner guten Frau', 'meinen guten Kindern'],
  ['meines guten Mannes', 'meines guten Kindes', 'meiner guten Frau', 'meiner guten Kinder']
];
const standalonePossessives = [
  ['meiner', 'meins', 'meine', 'meine'],
  ['deiner', 'deins', 'deine', 'deine'],
  ['seiner', 'seins', 'seine', 'seine'],
  ['ihrer', 'ihres', 'ihre', 'ihre'],
  ['seiner', 'seines', 'seiner', 'seiner'],
  ['unserer', 'unseres', 'unserer', 'unserer'],
  ['eurer', 'eures', 'eurer', 'eurer'],
  ['ihrer', 'ihres', 'ihrer', 'ihrer'],
  ['Ihrer', 'Ihres', 'Ihrer', 'Ihrer']
];

function GrammarTable({ title, rows, rowNames = cases }) {
  return <div className="sub-grammar-table-wrap">
    <h4>{title}</h4>
    <div className="sub-grammar-scroll" tabIndex="0" role="region" aria-label={title}>
      <table className="sub-grammar-table">
        <thead><tr><th>Kasus</th>{genders.map((g, i) => <th key={g} className={'sub-grammar-gender sub-grammar-gender--' + i}>{g}</th>)}</tr></thead>
        <tbody>{rows.map((row, i) => <tr key={i}><th scope="row">{rowNames[i]}</th>{row.map((v, j) => <td key={j}>{v}</td>)}</tr>)}</tbody>
      </table>
    </div>
  </div>;
}
function PronounTable({ title, rows, rowNames }) {
  return <div className="sub-grammar-table-wrap">
    <h4>{title}</h4>
    <div className="sub-grammar-scroll" tabIndex="0" role="region" aria-label={title}>
      <table className="sub-grammar-table sub-grammar-pronouns">
        <thead><tr><th>Kasus</th>{personal[0].map((v, i) => <th key={i}>{v}{i === 7 ? ' (Pl.)' : i === 8 ? ' (höflich)' : ''}</th>)}</tr></thead>
        <tbody>{rows.map((row, i) => <tr key={i}><th scope="row">{rowNames[i]}</th>{row.map((v, j) => <td key={j}>{v}</td>)}</tr>)}</tbody>
      </table>
    </div>
  </div>;
}
const stemForm = (stem, ending) => stem === 'euer' && ending ? 'eur' + ending : stem + ending;

export default function SubstantiveGrammarReference() {
  return <section className="sub-grammar-reference">
    <details>
      <summary>📖 Граматичні таблиці — відмінки, займенники, артиклі та прикметники</summary>
      <div className="sub-grammar-content">
        <p>Короткий довідник для повторення після списку колод. Таблиці можна прокручувати горизонтально на телефоні.</p>
        <details><summary>1. Особові та присвійні займенники</summary>
          <PronounTable title="Personalpronomen" rows={personal} rowNames={cases.slice(0, 3)}/>
          <PronounTable title="Possessivpronomen — основи (чий?)" rows={[possessiveStems]} rowNames={['Основа']}/>
          <p>Закінчення присвійних займенників залежать від роду, числа й відмінка іменника: mein Kaffee, meine Tasse, meinen Kaffee, meinem Kaffee.</p>
          <GrammarTable title="Закінчення до mein / dein / sein / ihr / unser / euer / Ihr" rows={endings.map(row => row.map(e => e || '—'))}/>
          <p>Приклад: <strong>euer Kaffee</strong>, але <strong>eure Tasse</strong> (без другого e).</p>
                  </details>
        <details><summary>2. Артиклі та вказівні слова</summary>
          <GrammarTable title="Bestimmter Artikel — der / die / das" rows={article}/>
          <GrammarTable title="Unbestimmter Artikel — ein / eine" rows={indefinite}/>
          <GrammarTable title="Verneinung — kein / keine" rows={kein}/>
          <GrammarTable title="dieser / dieses / diese" rows={dieser}/>
          <GrammarTable title="welcher / welches / welche" rows={welcher}/>
        </details>
        <details><summary>3. Прикметники з артиклями</summary>
          <GrammarTable title="Nach bestimmtem Artikel (der gute Mann)" rows={adjectivesDefinite}/>
          <GrammarTable title="Nach unbestimmtem Artikel (ein guter Mann)" rows={adjectivesIndefinite}/>
          <GrammarTable title="Nach kein (kein guter Mann)" rows={adjectivesNegative}/>
          <GrammarTable title="Nach mein (mein guter Mann)" rows={adjectivesPossessive}/>
          <p className="sub-grammar-note">У Dativ Plural іменники зазвичай отримують -n: mit den guten Kindern. У Genitiv Maskulin/Neutrum часто додається -s/-es: des guten Mannes.</p>
        </details>
        <details><summary>4. Питання до відмінків</summary>
          <div className="sub-grammar-scroll"><table className="sub-grammar-table"><tbody>
            <tr><th>Nominativ</th><td>Wer? Was?</td></tr>
            <tr><th>Akkusativ</th><td>Wen? Was? Wohin? (із прийменниками напрямку)</td></tr>
            <tr><th>Dativ</th><td>Wem? Wo? (із прийменниками місця)</td></tr>
            <tr><th>Genitiv</th><td>Wessen?</td></tr>
          </tbody></table></div>
        </details>
      </div>
    </details>
  </section>;
}
