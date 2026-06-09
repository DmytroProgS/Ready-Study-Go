// Заняття 08.06 — Lesen/Wörter cloze
// "Auf der Suche nach der eigenen Familiengeschichte" (Von Sara Hosseini)
// Завдання: обрати дієслово в правильній формі для кожного пропуску.

export const familienTitle = 'Auf der Suche nach der eigenen Familiengeschichte';
export const familienAuthor = 'Von Sara Hosseini';

// Пропуски: правильна відповідь + дистрактор (обидва в формі, що пасує реченню) + пояснення.
export const familienBlanks = {
  2: {
    options: ['erforschen', 'erfinden'],
    answer: 'erforschen',
    note: 'die Familiengeschichte erforschen — досліджувати (erfinden = вигадувати).',
  },
  3: {
    options: ['geflohen', 'gerettet'],
    answer: 'geflohen',
    note: 'fliehen → ist geflohen — тікати (від війни). Perfekt із sein.',
  },
  4: {
    options: ['aufgebrochen', 'weggefahren'],
    answer: 'aufgebrochen',
    note: 'aufbrechen → ist aufgebrochen — вирушити (в дорогу).',
  },
  5: {
    options: ['beantragen', 'anbieten'],
    answer: 'beantragen',
    note: 'Asyl beantragen — подати клопотання про притулок (konnte + Infinitiv).',
  },
  6: {
    options: ['emigriert', 'gewandert'],
    answer: 'emigriert',
    note: 'emigrieren → ist emigriert — емігрувати (виїхати назавжди).',
  },
  7: {
    options: ['niedergelassen', 'gesetzt'],
    answer: 'niedergelassen',
    note: 'sich niederlassen → hat sich niedergelassen — оселитися.',
  },
  8: {
    options: ['annehmen', 'wechseln'],
    answer: 'annehmen',
    note: 'die Staatsbürgerschaft annehmen — прийняти громадянство (konnte + Infinitiv).',
  },
  9: {
    options: ['nachweisen', 'hinweisen'],
    answer: 'nachweisen',
    note: 'nachweisen — довести, підтвердити документом (konnte + Infinitiv).',
  },
  10: {
    options: ['gefunden', 'gegründet'],
    answer: 'gefunden',
    note: 'eine neue Heimat finden → gefunden — знайти нову батьківщину.',
  },
};

// Текст по абзацах. Токен — або рядок, або { blank: N }, або { given: '...' } (приклад).
export const familienParagraphs = [
  [
    'Aster H. interessiert sich für die Geschichte ihrer Familie. Die 19-Jährige ist in Deutschland geboren und ',
    { given: 'hat' },
    ' einen äthiopischen Migrationshintergrund. In dem Projekt „Familie international“ lernt sie nun, Informationen über ihre Vorfahren und Verwandten zu finden und ihre Familiengeschichte zu ',
    { blank: 2 },
    '.',
  ],
  [
    'Viele Jahre, bevor Aster geboren wurde, ist ihre Mutter vor dem Krieg in ihrem Heimatland ',
    { blank: 3 },
    '. Ganz allein ist sie damals nach Europa ',
    { blank: 4 },
    '. Als sie in Deutschland ankam, konnte sie als Flüchtling Asyl ',
    { blank: 5 },
    '. Doch sehr viel kann sie Aster nicht über die alte Heimat erzählen. Sie war damals noch zu jung, und die Situation war sehr schwierig.',
  ],
  [
    'Durch das Projekt hat Aster erfahren, dass sie Verwandte in Israel hat: „Ein Onkel meiner Mutter, Hawi, ist vor über 30 Jahren dorthin ',
    { blank: 6 },
    ' und hat sich mit seiner Familie in Tel Aviv ',
    { blank: 7 },
    '. Es war nicht leicht, ihn zu finden, denn er hat keinen äthiopischen Pass mehr.“ Die israelische Staatsbürgerschaft konnte er ',
    { blank: 8 },
    ', weil er durch ein wichtiges Dokument ',
    { blank: 9 },
    ' konnte, dass er aus einer jüdischen Familie kommt.',
  ],
  [
    'Aster und Hawi schreiben sich regelmäßig E-Mails. „Er sagt, er fühlt sich in Tel Aviv sehr wohl und hat dort eine neue Heimat ',
    { blank: 10 },
    ', so wie unser Teil der Familie in Deutschland“, erzählt Aster. Manchmal schickt er Bilder von weiteren Familienmitgliedern aus Äthiopien.',
  ],
];
