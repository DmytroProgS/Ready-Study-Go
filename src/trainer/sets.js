// Допоміжні функції для наборів (тем) карток.
// Набір зберігається як текстове поле `set` у самій картці — окрема колекція не потрібна.

export const ALL = '__all__';        // спец-значення «усі набори»
export const NO_SET = 'Без набору';  // картки без вказаної теми

// Унікальні назви наборів (відсортовані), зібрані з карток.
export function listSets(cards) {
  const s = new Set();
  cards.forEach((c) => {
    const name = (c.set || '').trim();
    if (name) s.add(name);
  });
  return [...s].sort((a, b) => a.localeCompare(b, 'uk'));
}

// Відфільтрувати картки за обраним набором.
export function filterBySet(cards, set) {
  if (!set || set === ALL) return cards;
  if (set === NO_SET) return cards.filter((c) => !(c.set || '').trim());
  return cards.filter((c) => (c.set || '').trim() === set);
}
