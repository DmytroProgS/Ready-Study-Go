import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../trainer/firebase';

// Переклад типових помилок Firebase у зрозумілий текст.
function friendlyError(code) {
  switch (code) {
    case 'auth/invalid-email':
      return 'Ungültige E-Mail-Adresse.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'E-Mail-Adresse oder Passwort ist falsch.';
    case 'auth/too-many-requests':
      return 'Zu viele Versuche. Versuche es später erneut.';
    case 'auth/network-request-failed':
      return 'Netzwerkfehler oder blockierte Firebase-Anfrage (auth/network-request-failed).';
    case 'auth/unauthorized-domain':
      return 'Die Testdomain ist in Firebase Authentication nicht zugelassen (auth/unauthorized-domain).';
    case 'auth/operation-not-allowed':
      return 'Diese Anmeldemethode ist in Firebase nicht aktiviert (auth/operation-not-allowed).';
    default:
      return `Die Anmeldung ist fehlgeschlagen. Firebase-Code: ${code || 'unbekannt'}.`;
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
      <p className="trainer-login__hint">Melde dich in deinem persönlichen Bereich an</p>
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
        placeholder="Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        required
      />
      {error && <p className="trainer-error">{error}</p>}
      <button className="trainer-btn trainer-btn--primary" type="submit" disabled={busy}>
        {busy ? 'Anmeldung läuft …' : 'Anmelden'}
      </button>
    </form>
  );
}

export default LoginForm;
