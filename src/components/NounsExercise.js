import React, { useState } from 'react';
import '../assets/styles/nouns.css'; // Імпорт CSS-стилів

// Приклад даних, які можна завантажити з Google Sheets
const words = [
  { german: 'Ich', translation: 'Я' },
  { german: 'Hund', translation: 'Собака' },
  { german: 'Haus', translation: 'Будинок' }
];

function WordCard({ german, translation }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="word-card">
      {/* Німецьке слово */}
      <div className="word-card__german">{german}</div>

      {/* Карточка перекладу */}
      <div
        className={`word-card__translation ${isRevealed ? 'word-card__translation--revealed' : ''}`}
        onClick={() => setIsRevealed(!isRevealed)}
      >
        {isRevealed ? translation : 'Показати переклад'}
      </div>
    </div>
  );
}

function NounsExercise() {
  return (
    <div className='words-block'>
      <h2>Іменники</h2>
      {words.map((word, index) => (
        <WordCard
          key={index}
          german={word.german}
          translation={word.translation}
        />
      ))}
    </div>
  );
}

export default NounsExercise;
