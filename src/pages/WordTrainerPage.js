import React from 'react';
import { Link } from 'react-router-dom';
import './WordTrainerPage.css';

function WordTrainerPage() {
  const trainers = [
    {
      id: 'akkusativ-dativ',
      title: 'Akkusativ & Dativ',
      subtitle: 'Präpositionen mit festem Kasus',
      description: 'Präpositionen, die einen festen Kasus verlangen',
      icon: '📌',
      color: 'trainer-card--akkusativ',
    },
    {
      id: 'wechselpraep',
      title: 'Wechselpräpositionen',
      subtitle: 'Wo vs. Wohin?',
      description: 'Ort (Dativ) oder Richtung (Akkusativ)',
      icon: '🔄',
      color: 'trainer-card--wechsel',
    },
    {
      id: 'verben-praep',
      title: 'Verben mit Präpositionen',
      subtitle: 'Verbvalenz',
      description: 'B1–B2: Verben mit festen Präpositionen',
      icon: '🎯',
      color: 'trainer-card--verb',
    },
    {
      id: 'genitiv',
      title: 'Genitiv Präpositionen',
      subtitle: 'Feste Wendungen',
      description: 'Genitiv und Zeitangaben (im Sommer, am Montag, um 5 Uhr)',
      icon: '⏰',
      color: 'trainer-card--genitiv',
    },
  ];

  return (
    <div className="word-trainer-page">
      <h1 className="trainer-title">🎓 Word Trainer</h1>
      <p className="trainer-subtitle">Wähle einen Übungsbereich.</p>

      <div className="trainer-grid">
        {trainers.map((trainer) => (
          <Link
            key={trainer.id}
            to={`/word-trainer/${trainer.id}`}
            className={`trainer-card ${trainer.color}`}
          >
            <div className="trainer-card__icon">{trainer.icon}</div>
            <div className="trainer-card__content">
              <h2 className="trainer-card__title">{trainer.title}</h2>
              <p className="trainer-card__subtitle">{trainer.subtitle}</p>
              <p className="trainer-card__description">{trainer.description}</p>
            </div>
            <div className="trainer-card__arrow">→</div>
          </Link>
        ))}
      </div>

      <Link to="/grammar" className="back-link">← Zurück zur Grammatik</Link>
    </div>
  );
}

export default WordTrainerPage;
