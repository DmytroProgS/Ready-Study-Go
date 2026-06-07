import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { genitivExercises } from '../data/wordTrainerGenitivData';
import '../assets/styles/wordTrainer.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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
    const similar = ['des', 'der', 'die', 'den', 'dem', 'ein', 'eine', 'einem', 'eines',
                     'im', 'am', 'um', 'vor', 'seit', 'for', 'während', 'trotz', 'statt']
      .filter(a => a !== correctAnswer && !wrongAnswers.includes(a));
    while (wrongAnswers.length < 3 && similar.length > 0) {
      wrongAnswers.push(similar.pop());
    }
  }
  
  return wrongAnswers.slice(0, 3);
}

function GenitivExercisePage() {
  const [exercises, setExercises] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stats, setStats] = useState({ correct: 0, total: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const shuffled = shuffle(genitivExercises);
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
    
    if (answer === currentExercise.answer) {
      setStats(prev => ({
        correct: prev.correct + 1,
        total: prev.total + 1
      }));
    } else {
      setStats(prev => ({
        ...prev,
        total: prev.total + 1
      }));
    }
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
    setStats({ correct: 0, total: 0 });
  };

  if (exercises.length === 0) return <div>Завантаження...</div>;

  const isCorrect = selectedAnswer === currentExercise.answer;
  const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

  return (
    <div className="trainer-exercise">
      <div className="trainer-header">
        <h1>Genitiv Präpositionen & Фіксовані вирази</h1>
        <div className="trainer-stats">
          <span className="stat-item">
            <strong>{currentIndex + 1}</strong> / {exercises.length}
          </span>
          <span className="stat-item">
            ✓ {stats.correct} / {stats.total} ({percentage}%)
          </span>
        </div>
      </div>

      <div className="exercise-card">
        <div className="exercise-question">{currentExercise.german}</div>
        <div className="exercise-hint">{currentExercise.hint}</div>
        <div className="exercise-category">
          {currentExercise.prepCategory === 'Genitivpräposition' ? (
            <>Прийменник: <strong>{currentExercise.prep}</strong> | Керування: <strong>{currentExercise.prep} + Genitiv</strong></>
          ) : (
            <>Часовий вираз: <strong>{currentExercise.prep}</strong></>
          )}
        </div>

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
            <div className="answer-full-form">
              <strong>Повна форма:</strong> {currentExercise.fullAnswer}
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
          className="nav-btn"
        >
          ← Попередня
        </button>
        <button
          onClick={resetExercises}
          className="nav-btn nav-btn--reset"
        >
          🔄 Заново
        </button>
        <button
          onClick={nextExercise}
          disabled={currentIndex === exercises.length - 1}
          className="nav-btn"
        >
          Наступна →
        </button>
      </div>

      <Link to="/word-trainer" className="back-link">← Повернутись до вибору</Link>
    </div>
  );
}

export default GenitivExercisePage;
