import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../trainer/firebase';
import { subscribeCards } from '../../trainer/cardsApi';
import LoginForm from './LoginForm';
import StudyView from './StudyView';
import MyCardsView from './MyCardsView';
import './Trainer.css';

function TrainerPage() {
  const [user, setUser] = useState(undefined); // undefined = ще перевіряємо, null = не залогінений
  const [cards, setCards] = useState([]);
  const [tab, setTab] = useState('study');

  // Стежимо за станом автентифікації.
  useEffect(() => {
    return onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  // Поки є юзер — підписуємось на його картки в реальному часі.
  useEffect(() => {
    if (!user) {
      setCards([]);
      return;
    }
    return subscribeCards(user.uid, setCards);
  }, [user]);

  if (user === undefined) {
    return <div className="trainer-page"><p className="trainer-loading">Завантаження…</p></div>;
  }

  if (!user) {
    return (
      <div className="trainer-page">
        <h1 className="trainer-title">Тренажер речень</h1>
        <LoginForm />
        <Link to="/" className="back-link">&larr; На головну</Link>
      </div>
    );
  }

  return (
    <div className="trainer-page">
      <div className="trainer-topbar">
        <span className="trainer-user">👤 {user.email}</span>
        <button className="trainer-logout" onClick={() => signOut(auth)}>Вийти</button>
      </div>

      <nav className="trainer-tabs">
        <button
          className={`trainer-tab ${tab === 'study' ? 'is-active' : ''}`}
          onClick={() => setTab('study')}
        >
          🎯 Навчання
        </button>
        <button
          className={`trainer-tab ${tab === 'cards' ? 'is-active' : ''}`}
          onClick={() => setTab('cards')}
        >
          🗂 Мої картки ({cards.length})
        </button>
      </nav>

      {tab === 'study' ? (
        <StudyView uid={user.uid} cards={cards} />
      ) : (
        <MyCardsView uid={user.uid} cards={cards} />
      )}

      <Link to="/" className="back-link">&larr; На головну</Link>
    </div>
  );
}

export default TrainerPage;
