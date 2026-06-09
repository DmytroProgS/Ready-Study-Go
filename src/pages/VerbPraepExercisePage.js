import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { verbPraepExercises } from '../data/wordTrainerVerbPraepData';
import { currentSet, extraSet } from '../data/praepositionenData';
import '../assets/styles/wordTrainer.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Стягнені форми прийменника з артиклем (zu + dem = zum тощо),
// щоб у реченні ховати саме "zum"/"zur", а не порожнє "zu".
const PREP_CONTRACTIONS = {
  an: ['am', 'ans'], in: ['im', 'ins'], zu: ['zum', 'zur'], bei: ['beim'],
  von: ['vom'], auf: ['aufs'], um: ['ums'], 'über': ['übers'], 'für': ['fürs'],
  vor: ['vors'], hinter: ['hinters'], unter: ['unters'], durch: ['durchs'],
};

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Замінює прийменник у реченні на "____". Не покладається на \b
// (ламається на умлаутах) і враховує стягнені форми та варіанти "auf/für".
function blankPreposition(sentence, prepRule) {
  const prepPart = (prepRule || '').split(',')[0].split('+')[0].trim(); // 'über' | 'auf/für'
  const preps = prepPart.split('/').map((p) => p.trim()).filter(Boolean);
  if (!preps.length) return sentence;

  const candidates = [];
  for (const p of preps) {
    candidates.push(...(PREP_CONTRACTIONS[p] || []), p);
  }
  // довші форми першими, щоб "zum" виграв у "zu"
  candidates.sort((a, b) => b.length - a.length);

  for (const word of candidates) {
    const re = new RegExp(
      '(^|[^A-Za-zÄÖÜäöüß])(' + escapeRegExp(word) + ')(?=[^A-Za-zÄÖÜäöüß]|$)',
      'i'
    );
    if (re.test(sentence)) return sentence.replace(re, '$1____');
  }
  return sentence;
}

function detectCasus(prepRule) {
  const hasA = /\+\s*A/i.test(prepRule);
  const hasD = /\+\s*D/i.test(prepRule);
  if (hasA && hasD) return 'Dativ/Akkusativ';
  if (hasA) return 'Akkusativ';
  if (hasD) return 'Dativ';
  return '';
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
    const similar = ['an den', 'an die', 'an dem', 'auf den', 'auf die', 'von dem', 'von der', 'nach dem', 'nach der',
                     'mit dem', 'mit der', 'zu dem', 'zu der', 'für die', 'für den', 'über den', 'über die']
      .filter(a => a !== correctAnswer && !wrongAnswers.includes(a));
    while (wrongAnswers.length < 3 && similar.length > 0) {
      wrongAnswers.push(similar.pop());
    }
  }
  
  return wrongAnswers.slice(0, 3);
}

function VerbPraepExercisePage() {
  const [exercises, setExercises] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stats, setStats] = useState({ correct: 0, total: 0 });
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Build additional exercises from praepositionenData (currentSet + extraSet)
    const combinedPraep = [...extraSet, ...currentSet];
    const extraExercises = [];
    let nextId = Math.max(...verbPraepExercises.map(e => e.id || 0)) + 1;

    for (let card of combinedPraep) {
      if (extraExercises.length >= 50) break;
      const sources = card.variants
        ? card.variants.map((v) => ({
            prep: v.prep,
            ua: v.ua || card.ua || '',
            exDE: v.exDE || card.exDE || '',
            exUA: v.exUA || card.exUA || '',
          }))
        : [{ prep: card.prep, ua: card.ua || '', exDE: card.exDE || '', exUA: card.exUA || '' }];

      for (const src of sources) {
        if (extraExercises.length >= 50) break;
        extraExercises.push({
          id: nextId++,
          verb: card.verb,
          prep: src.prep,
          ua: src.ua,
          exDE: blankPreposition(src.exDE, src.prep),
          exUA: src.exUA,
          answer: src.prep,
          casus: detectCasus(src.prep),
        });
      }
    }

    const all = [...verbPraepExercises, ...extraExercises.slice(0, 50)];
    const shuffled = shuffle(all);
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
        <h1>Verben mit Präpositionen — Керування дієслів (B1-B2)</h1>
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
        <div className="exercise-german">{currentExercise.exDE}</div>
        <div className="exercise-ua">{currentExercise.exUA}</div>
        {isAnswered && (
          <div className="exercise-verb">
            <strong>{currentExercise.verb}</strong> — {currentExercise.ua}
          </div>
        )}
        {isAnswered && (
          <div className="exercise-category">
            Керування: <strong>{currentExercise.prep}</strong>
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
              {isCorrect ? '✓ Правильно!' : '✗ Неправильно'}
            </div>
            <div className="answer-text">
              <strong>Правильна відповідь:</strong> {currentExercise.answer}
            </div>
            <div className="answer-explanation">
              {currentExercise.ua} → {currentExercise.prep}
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

export default VerbPraepExercisePage;
