// Ініціалізація Firebase для тренажера речень.
// Ці ключі не є секретом — вони видимі у фронтенді; захист даних роблять правила Firestore.
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCN6tvuTvw2WJDjLIhm_vHIeBpkViAl5tg',
  authDomain: 'ready-study-go-88e33.firebaseapp.com',
  projectId: 'ready-study-go-88e33',
  storageBucket: 'ready-study-go-88e33.firebasestorage.app',
  messagingSenderId: '623188960145',
  appId: '1:623188960145:web:59dca22bed8cde8a86f030',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
