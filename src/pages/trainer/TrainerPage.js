import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../trainer/firebase';
import { subscribeCards, subscribeStreak } from '../../trainer/cardsApi';
import LoginForm from './LoginForm';
import StudyView from './StudyView';
import MyCardsView from './MyCardsView';
import './Trainer.css';

function TrainerPage() {
  const [user, setUser] = useState(undefined); // undefined = ще перевіряємо, null = не залогінений
  const [cards, setCards] = useState([]);
  const [streak, setStreak] = useState({ streak: 0, lastDay: null });
  const [tab, setTab] = useState('study');

  // Стежимо за станом автентифікації.
  useEffect(() => {
    return onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  // Поки є юзер — підписуємось на його картки та серію в реальному часі.
  useEffect(() => {
    if (!user) {
      setCards([]);
      setStreak({ streak: 0, lastDay: null });
      return;
    }
    const unsubCards = subscribeCards(user.uid, setCards);
    const unsubStreak = subscribeStreak(user.uid, setStreak);
    return () => {
      unsubCards();
      unsubStreak();
    };
  }, [user]);

  if (user === undefined) {
    return <div className="trainer-page"><p className="trainer-loading">Wird geladen …</p></div>;
  }

  if (!user) {
    return (
      <div className="trainer-page">
        <h1 className="trainer-title">Satztrainer</h1>
        <LoginForm />
        <Link to="/" className="back-link">&larr; Zur Startseite</Link>
      </div>
    );
  }

  return (
    <div className="trainer-page">
      <div className="trainer-topbar">
        <span className="trainer-user">👤 {user.email}</span>
        <button className="trainer-logout" onClick={() => signOut(auth)}>Abmelden</button>
      </div>

      <nav className="trainer-tabs">
        <button
          className={`trainer-tab ${tab === 'study' ? 'is-active' : ''}`}
          onClick={() => setTab('study')}
        >
          🎯 Lernen
        </button>
        <button
          className={`trainer-tab ${tab === 'cards' ? 'is-active' : ''}`}
          onClick={() => setTab('cards')}
        >
          🗂 Meine Karten ({cards.length})
        </button>
      </nav>

      {tab === 'study' ? (
        <StudyView uid={user.uid} cards={cards} streak={streak} />
      ) : (
        <MyCardsView uid={user.uid} cards={cards} />
      )}

      <Link to="/" className="back-link">&larr; Zur Startseite</Link>
    </div>
  );
}

export default TrainerPage;
