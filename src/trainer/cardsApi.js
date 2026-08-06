// CRUD карток у Firestore. Кожна картка лежить під users/{uid}/cards/{cardId}.
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
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

// Додати нову картку (нім. речення + укр. переклад) з початковим прогресом.
export function addCard(uid, { de, ua }) {
  const now = Date.now();
  return addDoc(cardsCol(uid), {
    de: de.trim(),
    ua: ua.trim(),
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

// Видалити картку.
export function removeCard(uid, cardId) {
  return deleteDoc(doc(db, 'users', uid, 'cards', cardId));
}
