// Add future decks here. Each deck is shuffled every time it starts.
export const turnTakingDecks = [
  {
    id: 'halt',
    title: 'Фрази з Halt',
    description: '9 фраз на кожен день',
    cards: [
      { uk: 'Стій!', de: 'Halt!' },
      { uk: 'Тримайся! Не здавайся!', de: 'Halt durch!' },
      { uk: 'Що ти про це думаєш?', de: 'Was hältst du davon?' },
      { uk: 'Я триматиму тебе в курсі.', de: 'Ich halte dich auf dem Laufenden.' },
      { uk: 'Можеш це потримати?', de: 'Kannst du das kurz halten?' },
      { uk: 'Це в межах норми / не так уже й погано.', de: 'Das hält sich in Grenzen.' },
      { uk: 'Він тримає слово.', de: 'Er hält Wort.' },
      { uk: 'Я більше не можу (терпіти).', de: 'Ich halte es nicht mehr aus.' },
      { uk: 'Замовкни! (грубо)', de: 'Halt die Klappe!' }
    ]
  }
];

export function shuffleDeck(cards) {
  const result = [...cards];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
