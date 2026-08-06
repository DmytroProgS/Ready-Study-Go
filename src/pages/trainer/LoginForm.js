import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../trainer/firebase';

// Переклад типових помилок Firebase у зрозумілий текст.
function friendlyError(code) {
  switch (code) {
    case 'auth/invalid-email':
      return 'Некоректний email.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Невірний email або пароль.';
    case 'auth/too-many-requests':
      return 'Забагато спроб. Спробуй трохи згодом.';
    default:
      return 'Не вдалося увійти. Спробуй ще раз.';
  }
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (err) {
      setError(friendlyError(err.code));
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="trainer-login" onSubmit={submit}>
      <p className="trainer-login__hint">Увійди у свій кабінет</p>
      <input
        className="trainer-input"
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="username"
        required
      />
      <input
        className="trainer-input"
        type="password"
        placeholder="пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        required
      />
      {error && <p className="trainer-error">{error}</p>}
      <button className="trainer-btn trainer-btn--primary" type="submit" disabled={busy}>
        {busy ? 'Входимо…' : 'Увійти'}
      </button>
    </form>
  );
}

export default LoginForm;
