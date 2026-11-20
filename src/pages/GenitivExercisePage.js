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

  if (exercises.length === 0) return <div>Wird geladen …</div>;

  const isCorrect = selectedAnswer === currentExercise.answer;

  return (
    <div className="trainer-exercise">
      <div className="trainer-header">
        <h1>Genitivpräpositionen und feste Wendungen</h1>
      </div>

      <div className="exercise-card">
        <div className="exercise-question">{currentExercise.german}</div>
        <div className="exercise-hint">{currentExercise.hint}</div>
        {isAnswered && (
          <div className="exercise-category">
            {currentExercise.prepCategory === 'Genitivpräposition' ? (
              <>Präposition: <strong>{currentExercise.prep}</strong> | Rektion: <strong>{currentExercise.prep} + Genitiv</strong></>
            ) : (
              <>Zeitangabe: <strong>{currentExercise.prep}</strong></>
            )}
          </div>
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
              {isCorrect ? '✓ Richtig!' : '✗ Falsch'}
            </div>
            <div className="answer-text">
              <strong>Richtige Antwort:</strong> {currentExercise.answer}
            </div>
            <div className="answer-full-form">
              <strong>Vollständige Form:</strong> {currentExercise.fullAnswer}
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
          aria-label="Zurück"
          title="Zurück"
        >
          ←
        </button>
        <button
          onClick={resetExercises}
          className="nav-btn nav-btn--icon nav-btn--reset"
          aria-label="Neu starten"
          title="Neu starten"
        >
          🔄
        </button>
        <button
          onClick={nextExercise}
          disabled={currentIndex === exercises.length - 1}
          className="nav-btn nav-btn--icon"
          aria-label="Weiter"
          title="Weiter"
        >
          →
        </button>
      </div>

      <div className="trainer-footer">
        <span className="trainer-count"><strong>{currentIndex + 1}</strong> / {exercises.length}</span>
        <Link to="/word-trainer" className="back-link">← Zurück zur Auswahl</Link>
      </div>
    </div>
  );
}

export default GenitivExercisePage;
