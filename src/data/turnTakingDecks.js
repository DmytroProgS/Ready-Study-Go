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
    id: 'k003-halten',
    title: 'K003 Побут і транспорт halten',
    description: '10 фраз · побут і транспорт',
    cards: [
      { uk: 'Потримай, будь ласка, мою каву.', de: 'Halt bitte mal meinen Kaffee.' },
      { uk: 'Цей поїзд зупиняється в Дрездені?', de: 'Hält dieser Zug in Dresden?' },
      { uk: 'Зупиніться тут, будь ласка! (у таксі)', de: 'Halten Sie bitte hier an!' },
      { uk: 'Тут не можна зупинятися.', de: 'Hier darf man nicht halten.' },
      { uk: 'Тримайся за мене міцно!', de: 'Halt dich gut an mir fest!' },
      { uk: 'Можеш притримати мені двері?', de: 'Kannst du mir die Tür aufhalten?' },
      { uk: 'Хліб довго не зберігається.', de: 'Brot hält nicht lange.' },
      { uk: 'Акумулятор тримає два дні.', de: 'Der Akku hält zwei Tage.' },
      { uk: 'Не буду тебе затримувати.', de: 'Ich will dich nicht aufhalten.' },
      { uk: 'Мене зупинила поліція.', de: 'Die Polizei hat mich angehalten.' }
    ]
  },
  {
    id: 'k004-halten',
    title: 'K004 Думки й емоції halten',
    description: '10 фраз · думки й емоції',
    cards: [
      { uk: 'Що ти про це думаєш?', de: 'Was hältst du davon?' },
      { uk: 'Я не вважаю це гарною ідеєю.', de: 'Ich halte das für keine gute Idee.' },
      { uk: 'Я зовсім не вірю в такі дієти.', de: 'Ich halte nichts von solchen Diäten.' },
      { uk: 'Він ніколи не дотримується правил.', de: 'Er hält sich nie an die Regeln.' },
      { uk: 'Тримайся, ти впораєшся!', de: 'Halt durch, du schaffst das!' },
      { uk: 'Я на твоєму боці, хай що станеться.', de: 'Ich halte zu dir, egal was passiert.' },
      { uk: 'Я більше не можу тут витримати.', de: 'Ich halte es hier nicht mehr aus.' },
      { uk: 'Вона не відмовляється від своєї мрії.', de: 'Sie hält an ihrem Traum fest.' },
      { uk: 'Він зараз перебуває у Відні.', de: 'Er hält sich gerade in Wien auf.' },
      { uk: 'Спека триватиме до неділі.', de: 'Die Hitze hält bis Sonntag an.' }
    ]
  },
  {
    id: 'k005-halten',
    title: 'K005 Робота і стосунки halten',
    description: '10 фраз · робота і стосунки',
    cards: [
      { uk: 'Ми мусимо дотриматися терміну.', de: 'Wir müssen die Frist einhalten.' },
      { uk: 'Я триматиму тебе в курсі.', de: 'Ich halte dich auf dem Laufenden.' },
      { uk: 'Зафіксуймо це письмово.', de: 'Halten wir das schriftlich fest.' },
      { uk: 'Тобі варто трохи стриматися.', de: 'Du solltest dich etwas zurückhalten.' },
      { uk: 'Він приховує від нас інформацію.', de: 'Er hält Informationen vor uns zurück.' },
      { uk: 'Я високої думки про свою колегу.', de: 'Ich halte viel von meiner Kollegin.' },
      { uk: 'Ти вважаєш мене дурнем?', de: 'Hältst du mich für dumm?' },
      { uk: 'Він завжди тримає слово.', de: 'Er hält immer sein Wort.' },
      { uk: 'Я ледве стримала сміх.', de: 'Ich konnte das Lachen kaum zurückhalten.' },
      { uk: 'Я більше не можу терпіти цей шум.', de: 'Ich kann diesen Lärm nicht mehr aushalten.' }
    ]
  },
  {
    id: 'k006-halten',
    title: 'K006 Знайди і виправ помилку halten',
    description: '8 речень · знайди помилку та перевір виправлення',
    mode: 'correction',
    cards: [
      { de: 'Ich halte mich an den Regeln.', corrected: 'Ich halte mich an die Regeln.', wrong: 'den', right: 'die', uk: 'Я дотримуюся правил.', explanation: 'an + Akkusativ' },
      { de: 'Was hältst du für den Film?', corrected: 'Was hältst du von dem Film?', wrong: 'für', right: 'von', uk: 'Що ти думаєш про цей фільм?', explanation: 'halten von + Dativ' },
      { de: 'Der Zug anhält in Berlin.', corrected: 'Der Zug hält in Berlin.', wrong: 'anhält', right: 'hält', uk: 'Поїзд зупиняється в Берліні.', explanation: 'У головному реченні дієслово стоїть на другому місці; тут: hält.' },
      { de: 'Du haltest das Glas.', corrected: 'Du hältst das Glas.', wrong: 'haltest', right: 'hältst', uk: 'Ти тримаєш склянку.', explanation: 'a → ä; du hältst' },
      { de: 'Ich halte an meine Meinung fest.', corrected: 'Ich halte an meiner Meinung fest.', wrong: 'meine', right: 'meiner', uk: 'Я не відмовляюся від своєї думки.', explanation: 'an + Dativ' },
      { de: 'Er hat plötzlich angehaltet.', corrected: 'Er hat plötzlich angehalten.', wrong: 'angehaltet', right: 'angehalten', uk: 'Він раптово зупинився.', explanation: 'Partizip II: angehalten' },
      { de: 'Ich halte ihn von klug.', corrected: 'Ich halte ihn für klug.', wrong: 'von', right: 'für', uk: 'Я вважаю його розумним.', explanation: 'halten für + Akkusativ' },
      { de: 'Die Polizei hat das Auto gehalten.', corrected: 'Die Polizei hat das Auto angehalten.', wrong: 'gehalten', right: 'angehalten', uk: 'Поліція зупинила автомобіль.', explanation: 'anhalten — зупиняти транспортний засіб' }
    ]
  },
  {
    id: 'k007-halten',
    title: 'K007 Перепиши в Perfekt halten',
    description: '6 речень · Präsens → Perfekt',
    mode: 'perfekt',
    cards: [
      { uk: 'Der Bus hält an der Ecke.', de: 'Der Bus hat an der Ecke gehalten.' },
      { uk: 'Ich halte das nicht aus.', de: 'Ich habe das nicht ausgehalten.' },
      { uk: 'Sie hält ihr Versprechen.', de: 'Sie hat ihr Versprechen gehalten.' },
      { uk: 'Wir halten bis zum Ende durch.', de: 'Wir haben bis zum Ende durchgehalten.' },
      { uk: 'Der Stau hält uns auf.', de: 'Der Stau hat uns aufgehalten.' },
      { uk: 'Er hält sich zurück.', de: 'Er hat sich zurückgehalten.' }
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
