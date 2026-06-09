import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { akkusativDativExercises } from '../data/wordTrainerAkkusativDativData';
import '../assets/styles/wordTrainer.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Підказка має вигляд "[Питальне слово] правило" (напр. "[Для кого?] für + Akkusativ").
// Питальне слово показуємо завжди, а правило — лише після відповіді, щоб не зливати її.
function splitHint(hint) {
  const i = (hint || '').indexOf(']');
  if (i === -1) return { clue: hint || '', rule: '' };
  return { clue: hint.slice(0, i + 1), rule: hint.slice(i + 1).trim() };
}

function generateWrongAnswers(correctAnswer, exercises) {
  const wrongAnswers = [];
  const allAnswers = exercises.map(e => e.answer).filter(a => a !== correctAnswer);

  for (let i = 0; i < 3 && wrongAnswers.length < 3; i++) {
    const randomAnswer = allAnswers[Math.floor(Math.random() * allAnswers.length)];
    if (!wrongAnswers.includes(randomAnswer) && randomAnswer !== correctAnswer) {
      wrongAnswers.push(randomAnswer);
    }
  }
  
  if (wrongAnswers.length < 3) {
    const similarAnswers = ['der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einen', 'einem', 'eines']
      .filter(a => a !== correctAnswer && !wrongAnswers.includes(a));
    while (wrongAnswers.length < 3 && similarAnswers.length > 0) {
      wrongAnswers.push(similarAnswers.pop());
    }
  }
  
  return wrongAnswers.slice(0, 3);
}

function AkkusativDativExercise() {
  const [exercises, setExercises] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const shuffled = shuffle(akkusativDativExercises);
    setExercises(shuffled);
  }, []);

  useEffect(() => {
    if (exercises.length > 0 && currentIndex < exercises.length) {
      const current = exercises[currentIndex];
      const wrongAnswers = generateWrongAnswers(current.answer, exercises);
      const allOptions = shuffle([current.answer, ...wrongAnswers]);
      setOptions(allOptions);
      setSelectedAnswer('');
      setIsAnswered(false);
    }
  }, [exercises, currentIndex]);

  const currentExercise = exercises[currentIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
  };

  const nextExercise = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevExercise = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const resetExercises = () => {
    const shuffled = shuffle(exercises);
    setExercises(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer('');
    setIsAnswered(false);
  };

  if (exercises.length === 0) return <div>Завантаження...</div>;

  const isCorrect = selectedAnswer === currentExercise.answer;
  const { clue: hintClue, rule: hintRule } = splitHint(currentExercise.hint);

  return (
    <div className="trainer-exercise">
      <div className="trainer-header">
        <h1>Akkusativ & Dativ — Сталі прийменники</h1>
      </div>

      <div className="exercise-card">
        <div className="exercise-hint">{hintClue}{isAnswered && hintRule && ` ${hintRule}`}</div>
        <div className="exercise-question">{currentExercise.german}</div>
        {isAnswered && (
          <div className="exercise-category">Категорія: <strong>{currentExercise.category}</strong></div>
        )}

        <div className="exercise-answer-buttons">
          {options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrectOption = option === currentExercise.answer;
            let buttonClass = 'answer-option';
            
            if (isAnswered) {
              if (isCorrectOption) {
                buttonClass += ' answer-option--correct';
              } else if (isSelected && !isCorrectOption) {
                buttonClass += ' answer-option--incorrect';
              }
            }
            
            return (
              <button
                key={option}
                className={buttonClass}
                onClick={() => !isAnswered && handleAnswer(option)}
                disabled={isAnswered}
              >
                {option}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`answer-display ${isCorrect ? 'correct' : 'incorrect'}`}>
            <div className="answer-status">
              {isCorrect ? '✓ Правильно!' : '✗ Неправильно'}
            </div>
            <div className="answer-text">
              <strong>Правильна відповідь:</strong> {currentExercise.answer}
            </div>
            <div className="answer-explanation">
              {currentExercise.explanation}
            </div>
          </div>
        )}
      </div>

      <div className="exercise-navigation">
        <button
          onClick={prevExercise}
          disabled={currentIndex === 0}
          className="nav-btn nav-btn--icon"
          aria-label="Попередня"
          title="Попередня"
        >
          ←
        </button>
        <button
          onClick={resetExercises}
          className="nav-btn nav-btn--icon nav-btn--reset"
          aria-label="Заново"
          title="Заново"
        >
          🔄
        </button>
        <button
          onClick={nextExercise}
          disabled={currentIndex === exercises.length - 1}
          className="nav-btn nav-btn--icon"
          aria-label="Наступна"
          title="Наступна"
        >
          →
        </button>
      </div>

      <div className="trainer-footer">
        <span className="trainer-count"><strong>{currentIndex + 1}</strong> / {exercises.length}</span>
        <Link to="/word-trainer" className="back-link">← Повернутись до вибору</Link>
      </div>
    </div>
  );
}

export default AkkusativDativExercise;
