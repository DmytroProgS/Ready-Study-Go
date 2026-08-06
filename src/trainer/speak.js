// Озвучення тексту через вбудований у браузер синтез мовлення (Web Speech API).
// Безкоштовно, офлайн, без зовнішнього AI. За замовчуванням — німецька (de-DE).

let cachedVoices = [];

function loadVoices() {
  if (!('speechSynthesis' in window)) return [];
  cachedVoices = window.speechSynthesis.getVoices();
  return cachedVoices;
}

// Голоси в деяких браузерах підвантажуються асинхронно — оновлюємо кеш.
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

// Чи взагалі підтримується озвучення (щоб ховати кнопку, якщо ні).
export function isSpeechSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function pickVoice(lang) {
  const voices = cachedVoices.length ? cachedVoices : loadVoices();
  const prefix = lang.split('-')[0].toLowerCase();
  // Спершу точний збіг мови, інакше — за префіксом (de).
  return (
    voices.find((v) => v.lang.toLowerCase() === lang.toLowerCase()) ||
    voices.find((v) => v.lang.toLowerCase().startsWith(prefix)) ||
    null
  );
}

// Прочитати текст уголос. lang за замовчуванням 'de-DE'.
export function speak(text, lang = 'de-DE') {
  if (!isSpeechSupported() || !text) return;
  window.speechSynthesis.cancel(); // зупинити попереднє читання
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  const voice = pickVoice(lang);
  if (voice) utter.voice = voice;
  utter.rate = 0.95; // трохи повільніше — легше розчути
  window.speechSynthesis.speak(utter);
}
