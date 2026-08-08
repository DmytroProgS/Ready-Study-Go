// Порівняння розпізнаного мовлення з еталонним текстом картки.
// Дає для кожного слова еталона позначку «сказав / не сказав» і загальний % збігу.

// Прибираємо пунктуацію/регістр, щоб порівнювати лише слова.
function tokenize(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[.,!?;:„“”"«»()[\]\-–—…]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean);
}

// target — правильне речення (нім), spoken — що почув розпізнавач.
export function compareTexts(target, spoken) {
  const t = tokenize(target);
  const s = tokenize(spoken);
  const used = new Array(s.length).fill(false);
  let searchFrom = 0;

  const words = t.map((word) => {
    // Спершу шукаємо слово по порядку (після попереднього збігу).
    let idx = -1;
    for (let i = searchFrom; i < s.length; i++) {
      if (!used[i] && s[i] === word) { idx = i; break; }
    }
    // Якщо не знайшли — шукаємо будь-де (слово сказане не по порядку).
    if (idx === -1) {
      for (let i = 0; i < s.length; i++) {
        if (!used[i] && s[i] === word) { idx = i; break; }
      }
    }
    if (idx !== -1) {
      used[idx] = true;
      if (idx >= searchFrom) searchFrom = idx + 1;
      return { word, ok: true };
    }
    return { word, ok: false };
  });

  // Твої слова: ok = слово збіглося з еталоном; false = зайве/неправильне (червоним).
  const spokenWords = s.map((word, i) => ({ word, ok: used[i] }));

  const matched = words.filter((w) => w.ok).length;
  const score = t.length ? Math.round((100 * matched) / t.length) : 0;

  return { words, spokenWords, score, spoken: s.join(' '), matched, total: t.length };
}
