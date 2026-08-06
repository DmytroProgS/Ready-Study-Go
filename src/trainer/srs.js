// Система інтервального повторення (spaced repetition), стиль Leitner.
//
// Кожна картка має поля прогресу:
//   box      — «коробка» рівня знання (0 = нова або щойно забута)
//   dueDate  — час (ms), коли картку слід показати наступного разу
//
// Логіка (як домовлялись):
//   • «Не згадав» → box скидається в 0, картка стає доступною одразу (показуємо, поки не завчиш).
//   • «Згадав»    → переходимо в наступну коробку; пауза до показу росте за STEPS_DAYS.
//
// Числа інтервалів навмисно винесені в одну константу — міняй під себе.

const DAY_MS = 24 * 60 * 60 * 1000;

// Пауза (у днях) після успішного пригадування для кожного рівня.
// Перше «Згадав» → 3 дні, далі росте, щоб добре завчене рідше з'являлось.
export const STEPS_DAYS = [3, 7, 16, 30, 60, 120];

// Значення прогресу для нової картки (щойно доданої).
export function initialProgress(now = Date.now()) {
  return { box: 0, dueDate: now };
}

// Повертає оновлений прогрес після оцінки картки.
// remembered: true = «Згадав», false = «Не згадав».
export function review(card, remembered, now = Date.now()) {
  if (!remembered) {
    // Забув → у нульову коробку, показати знову зараз.
    return { ...card, box: 0, dueDate: now };
  }
  // Згадав → наступна коробка (не вище за довжину STEPS_DAYS).
  const box = Math.min((card.box ?? 0) + 1, STEPS_DAYS.length);
  const days = STEPS_DAYS[box - 1];
  return { ...card, box, dueDate: now + days * DAY_MS };
}

// Чи картка «дозріла» до показу.
export function isDue(card, now = Date.now()) {
  return (card.dueDate ?? 0) <= now;
}

// Черга на сьогодні: тільки дозрілі картки, найдавніше прострочені — першими.
export function buildQueue(cards, now = Date.now()) {
  return cards
    .filter((c) => isDue(c, now))
    .sort((a, b) => (a.dueDate ?? 0) - (b.dueDate ?? 0));
}

// Скільки карток чекають наступного показу (для підказки «завтра буде N»).
export function countUpcoming(cards, now = Date.now()) {
  return cards.filter((c) => !isDue(c, now)).length;
}
