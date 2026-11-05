import { haltPrepositionPhrases } from './haltPrepositionPhrases';

// Add future decks here. Each deck is shuffled every time it starts.
export const turnTakingDecks = [
  {
    id: 'halt-prepositions',
    title: 'K000 Фрази з halten з Präpositionen',
    description: '17 фраз · прийменники та зворотні займенники',
    cards: haltPrepositionPhrases.map(({ uk, de }) => ({ uk, de }))
  },
  {
    id: 'k002-halten',
    title: 'K002 - Halten',
    description: '9 фраз · aushalten, durchhalten, festhalten',
    cards: [
      { uk: 'Я не витримую спеки.', de: 'Ich halte die Hitze nicht aus.', explanation: 'aushalten — Терпіти щось неприємне. Питання: що витримати?' },
      { uk: 'Це неможливо терпіти!', de: 'Das ist nicht auszuhalten!', explanation: 'aushalten — Терпіти щось неприємне. Питання: що витримати?' },
      { uk: 'Тут цілком непогано (жартома).', de: 'Hier lässt es sich aushalten.', explanation: 'aushalten — Терпіти щось неприємне. Питання: що витримати?' },
      { uk: 'Тримайся! Не здавайся!', de: 'Halt durch!', explanation: 'durchhalten — Протриматися до кінця. Питання: як довго?' },
      { uk: 'Ще два тижні — ти витримаєш!', de: 'Noch zwei Wochen — du hältst das durch!', explanation: 'durchhalten — Протриматися до кінця. Питання: як довго?' },
      { uk: 'Я протримався до кінця.', de: 'Ich habe bis zum Ende durchgehalten.', explanation: 'durchhalten — Протриматися до кінця. Питання: як довго?' },
      { uk: 'Тримайся за поручні!', de: 'Halt dich am Geländer fest!', explanation: 'sich festhalten an + Dat — міцно триматися за щось (фізично)' },
      { uk: 'Зафіксуймо це письмово.', de: 'Halten wir das schriftlich fest.', explanation: 'etwas festhalten — записати, зафіксувати' },
      { uk: 'Я не відмовляюся від свого плану.', de: 'Ich halte an meinem Plan fest.', explanation: 'an etwas festhalten — дотримуватися чогось, не відмовлятися від чогось, наполягати на чомусь' }
    ]
  },
  {
    id: 'halt',
    title: 'K001 Фрази з halten',
    description: '18 фраз на кожен день',
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
      { uk: 'Вона робить доповідь.', de: 'Sie hält einen Vortrag.' },
      { uk: 'Зупиніться тут, будь ласка!', de: 'Halten Sie bitte hier an!' },
      { uk: 'Він раптово зупинився.', de: 'Er hielt plötzlich an.' }
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
