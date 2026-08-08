// CRUD карток у Firestore. Кожна картка лежить під users/{uid}/cards/{cardId}.
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from './firebase';
import { initialProgress } from './srs';

// Посилання на колекцію карток конкретного користувача.
function cardsCol(uid) {
  return collection(db, 'users', uid, 'cards');
}

// Підписка на картки в реальному часі. cb отримує масив карток; повертає функцію відписки.
export function subscribeCards(uid, cb) {
  const q = query(cardsCol(uid), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snap) => {
    const cards = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    cb(cards);
  });
}

// Додати нову картку (нім. речення + укр. переклад + набір) з початковим прогресом.
export function addCard(uid, { de, ua, set = '' }) {
  const now = Date.now();
  return addDoc(cardsCol(uid), {
    de: de.trim(),
    ua: ua.trim(),
    set: set.trim(),
    ...initialProgress(now),
    createdAt: now,
  });
}

// Оновити прогрес картки після оцінки (box + dueDate).
export function saveProgress(uid, cardId, progress) {
  return updateDoc(doc(db, 'users', uid, 'cards', cardId), {
    box: progress.box,
    dueDate: progress.dueDate,
  });
}

// Оновити текст картки (редагування) — разом із набором.
export function updateCardText(uid, cardId, { de, ua, set = '' }) {
  return updateDoc(doc(db, 'users', uid, 'cards', cardId), {
    de: de.trim(),
    ua: ua.trim(),
    set: set.trim(),
  });
}

// Видалити картку.
export function removeCard(uid, cardId) {
  return deleteDoc(doc(db, 'users', uid, 'cards', cardId));
}

// ==== Серія (streak) — окремий документ users/{uid}/meta/stats ====

function statsRef(uid) {
  return doc(db, 'users', uid, 'meta', 'stats');
}

// Локальна дата у форматі YYYY-MM-DD (щоб «день» рахувався за годинником юзера).
function dayString(ts) {
  const d = new Date(ts);
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

// Підписка на серію в реальному часі.
export function subscribeStreak(uid, cb) {
  return onSnapshot(statsRef(uid), (snap) => {
    cb(snap.exists() ? snap.data() : { streak: 0, lastDay: null });
  });
}

// Відзначити, що сьогодні була сесія навчання, і оновити серію.
// prev — останнє відоме значення { streak, lastDay } (з підписки).
export function recordStudyDay(uid, prev, now = Date.now()) {
  const today = dayString(now);
  if (prev?.lastDay === today) return Promise.resolve(); // вже зараховано сьогодні

  const yesterday = dayString(now - 24 * 60 * 60 * 1000);
  const streak = prev?.lastDay === yesterday ? (prev.streak ?? 0) + 1 : 1;

  return setDoc(statsRef(uid), { streak, lastDay: today }, { merge: true });
}
