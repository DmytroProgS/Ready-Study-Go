import React from 'react';
import './SubstantiveGrammarReference.css';

export default function SubstantiveGrammarReference() {
  return <section className="sub-grammar-reference">
    <details>
      <summary>📖 Мої граматичні таблиці</summary>
      <div className="sub-grammar-content">
        <p>Оригінальні таблиці в твоєму порядку, з усіма кольорами та прикладами.</p>
        <figure className="sub-grammar-original">
          <figcaption>1. Займенники — Nominativ, Akkusativ, Dativ, Genitiv</figcaption>
          <a href={process.env.PUBLIC_URL + '/grammar/substantive-pronouns.png'} target="_blank" rel="noopener noreferrer" title="Відкрити першу таблицю в повному розмірі">
            <img src={process.env.PUBLIC_URL + '/grammar/substantive-pronouns.png'} alt="Оригінальна кольорова таблиця особових і присвійних займенників за чотирма відмінками" loading="lazy" />
          </a>
        </figure>
        <figure className="sub-grammar-original">
          <figcaption>2. Артиклі, прикметники та welcher — усі приклади</figcaption>
          <a href={process.env.PUBLIC_URL + '/grammar/substantive-declension.png'} target="_blank" rel="noopener noreferrer" title="Відкрити другу таблицю в повному розмірі">
            <img src={process.env.PUBLIC_URL + '/grammar/substantive-declension.png'} alt="Оригінальна кольорова таблиця відмінювання артиклів, прикметників і welcher з прикладами" loading="lazy" />
          </a>
        </figure>
      </div>
    </details>
  </section>;
}
