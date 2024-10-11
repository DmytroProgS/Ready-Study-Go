import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/nouns.css'; // Імпорт CSS-стилів

function NounsExercise() {
  const [words, setWords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const wordsPerPage = 10; // Кількість слів на сторінку

  // Ідентифікатор Google Sheets та API key
  const sheetId = '1QssS8Vj6KDy_HB2wBszIDzw2k_LZ3O43KFgFBpdUFiE';
  const apiKey = 'AIzaSyBg-EpsGDBFuP88d2EctqR55RB3Y-9dLwk';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;

  useEffect(() => {
    // Запит до Google Sheets API для отримання слів
    axios.get(url)
      .then((response) => {
        const rows = response.data.values;
        const loadedWords = rows.map((row) => ({
          german: row[0], // Перше значення - німецьке слово
          translation: row[1], // Друге значення - переклад
        }));
        setWords(loadedWords);
      })
      .catch((error) => {
        console.error("Помилка при завантаженні даних із Google Sheets:", error);
      });
  }, [url]);

  // Визначаємо поточні слова на сторінці
  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = words.slice(indexOfFirstWord, indexOfLastWord);

  // Перемикання сторінок
  const nextPage = () => {
    if (indexOfLastWord < words.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='words-block'>
      <h2>Іменники</h2>
      {currentWords.map((word, index) => (
        <WordCard
          key={index}
          german={word.german}
          translation={word.translation}
        />
      ))}
      <div className="pagination-buttons">
        <button onClick={prevPage} disabled={currentPage === 1}>Попередні</button>
        <button onClick={nextPage} disabled={indexOfLastWord >= words.length}>Наступні</button>
      </div>
    </div>
  );
}

function WordCard({ german, translation }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="word-card">
      <div className="word-card__german">{german}</div>
      <div
        className={`word-card__translation ${isRevealed ? 'word-card__translation--revealed' : ''}`}
        onClick={() => setIsRevealed(!isRevealed)}
      >
        {isRevealed ? translation : 'Показати переклад'}
      </div>
    </div>
  );
}

export default NounsExercise;
