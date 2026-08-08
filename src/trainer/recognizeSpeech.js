// Розпізнавання мовлення через вбудований у браузер Web Speech API (безкоштовно).
// Найкраще працює в Chrome/Edge. Повертає розпізнаний текст.

function getSR() {
  if (typeof window === 'undefined') return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

export function isRecognitionSupported() {
  return !!getSR();
}

// Одноразове розпізнавання: слухає мікрофон, повертає Promise з текстом.
// lang за замовчуванням 'de-DE'. Повертає { text, stop } — stop() достроково зупиняє.
export function recognizeOnce(lang = 'de-DE') {
  const SR = getSR();
  if (!SR) return { promise: Promise.reject(new Error('unsupported')), stop: () => {} };

  const rec = new SR();
  rec.lang = lang;
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  rec.continuous = false;

  let settled = false;
  const promise = new Promise((resolve, reject) => {
    rec.onresult = (e) => {
      settled = true;
      resolve(e.results[0][0].transcript);
    };
    rec.onerror = (e) => {
      settled = true;
      reject(e.error || new Error('recognition-error'));
    };
    rec.onend = () => {
      if (!settled) resolve(''); // завершилось без результату
    };
    try {
      rec.start();
    } catch (err) {
      reject(err);
    }
  });

  return { promise, stop: () => rec.stop() };
}
