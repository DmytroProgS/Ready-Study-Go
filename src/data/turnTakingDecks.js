import { haltPrepositionPhrases } from './haltPrepositionPhrases';

// Add future decks here. Each deck is shuffled every time it starts.
export const turnTakingDecks = [
  {
    id: 'halt-prepositions',
    title: 'Фрази з halt з Präpositionen',
    description: '17 фраз · прийменники та зворотні займенники',
    cards: haltPrepositionPhrases.map(({ uk, de }) => ({ uk, de }))
  },
  {
    id: 'halt',
    title: 'Фрази з Halt',
    description: '16 фраз на кожен день',
    cards: [
      { uk: 'Стій!', de: 'Halt!' },
      { uk: 'Тримайся! Не здавайся!', de: 'Halt durch!' },
      { uk: 'Що ти про це думаєш?', de: 'Was hältst du davon?' },
      { uk: 'Я триматиму тебе в курсі.', de: 'Ich halte dich auf dem Laufenden.' },
      { uk: 'Можеш це потримати?', de: 'Kannst du das kurz halten?' },
      { uk: 'Це в межах норми / не так уже й погано.', de: 'Das hält sich in Grenzen.' },
      { uk: 'Він тримає слово.', de: 'Er hält Wort.' },
      { uk: 'Я більше не можу (терпіти).', de: 'Ich halte es nicht mehr aus.' },
      { uk: 'Замовкни! (грубо)', de: 'Halt die Klappe!' },
      { uk: 'Я тримаю чашку в руці.', de: 'Ich halte eine Tasse in der Hand.' },
      { uk: 'Автобус зупиняється тут.', de: 'Der Bus hält hier.' },
      { uk: 'Я дотримую обіцянки.', de: 'Ich halte mein Versprechen.' },
      { uk: 'Я вважаю це правильним.', de: 'Ich halte das für richtig.' },
      { uk: 'Це взуття довго служить.', de: 'Diese Schuhe halten lange.' },
      { uk: 'Я на твоєму боці.', de: 'Ich halte zu dir.' },
      { uk: 'Вона робить доповідь.', de: 'Sie hält einen Vortrag.' }
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
