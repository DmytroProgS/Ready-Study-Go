// Дані самостійного заняття 05.10.
// Заповни три секції: відео, квіз і словник. Формати показані в прикладах.

// 1) ВІДЕО
// Встав ID відео з YouTube (частина після "v=" або після "youtu.be/").
// Напр. для https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  youtubeId: 'dQw4w9WgXcQ'
export const lesson0510Video = {
  youtubeId: 'lPT52IAWTzs',
  title: 'KI im Unterricht',
};

// Питання для дискусії (показуються під відео).
export const lesson0510Discussion = [
  'Kann KI den Lehrer im Klassenzimmer ersetzen, oder bleibt der menschliche Faktor unersetzbar?',
  'Hilfe oder Abkürzung? Ein Schüler sagt, er nutze die KI nur, um Texte besser zu verstehen, nicht um Aufgaben lösen zu lassen. Wo liegt für Sie die Grenze zwischen sinnvoller Hilfe und Schummeln?',
  'Welche Risiken siehst du beim Einsatz von KI im Unterricht?',
];

// Особисті питання (окремий блок «Personalfragen» під дискусією).
export const lesson0510Personal = [
  'Was sagst du deinen Schülern, wenn du merkst, dass sie KI für die Lösung ihrer Hausaufgabe genutzt haben?',
  'Benutzt du KI zur Vorbereitung auf den Unterricht für die Schüler?',
];

// 2) КВІЗ
// Формат: question/questionUa (нім/укр), options: [{ de, ua }], correct — індекс правильного (з 0).
// Переклад (ua) показується як підказка при наведенні.
export const lesson0510Quiz = [
  {
    question: '„KI wird nicht zur Abkürzung, sondern zu einem Werkzeug.“ – Was ist damit gemeint?',
    questionUa: '«ШІ стає не способом зрізати шлях, а інструментом.» — Що мається на увазі?',
    options: [
      { de: 'KI soll nur von Lehrkräften benutzt werden.', ua: 'ШІ мають використовувати лише вчителі.' },
      { de: 'KI soll Zeit sparen, damit der Unterricht kürzer wird.', ua: 'ШІ має заощаджувати час, щоб урок став коротшим.' },
      { de: 'KI soll das Denken vertiefen, nicht die eigene Arbeit ersetzen.', ua: 'ШІ має поглиблювати мислення, а не замінювати власну роботу.' },
      { de: 'KI soll im Unterricht verboten werden.', ua: 'ШІ має бути заборонений на уроці.' },
    ],
    correct: 2,
  },
  {
    question: "Was bedeutet 'Prompten', das Schüler im Rahmen ihrer Medienkompetenz lernen sollen?",
    questionUa: 'Що означає «промптинг», який учні мають опанувати в межах медіаграмотності?',
    options: [
      { de: 'Das automatische Erkennen von gefälschten Bildern im Internet.', ua: 'Автоматичне розпізнавання підроблених зображень в інтернеті.' },
      { de: 'Der KI gezielte, sinnvolle und präzise Arbeitsaufträge zu geben.', ua: 'Давати ШІ цілеспрямовані, змістовні й точні завдання.' },
      { de: 'Das Auswendiglernen von Fachbegriffen zur Funktionsweise von Computern.', ua: 'Заучування фахових термінів про те, як працюють комп’ютери.' },
      { de: 'Das Programmieren von eigener KI-Software im Informatikunterricht.', ua: 'Програмування власного ШІ-софту на уроці інформатики.' },
    ],
    correct: 1,
  },
  {
    question: 'Welches Ziel verfolgt das Modellprojekt der Kultusministerkonferenz (KMK), das im Beitrag erwähnt wird?',
    questionUa: 'Яку мету має пілотний проєкт Конференції міністрів освіти (KMK), згаданий у сюжеті?',
    options: [
      { de: 'Eine KI wirklich für alle Schulen zugänglich zu machen.', ua: 'Зробити ШІ справді доступним для всіх шкіл.' },
      { de: 'Gedruckte Schulbücher per Gesetz ab nächstem Jahr abzuschaffen.', ua: 'Законом скасувати друковані підручники з наступного року.' },
      { de: 'Den KI-Einsatz an Berufsschulen vollständig zu verbieten.', ua: 'Повністю заборонити використання ШІ у професійних школах.' },
      { de: 'Alle Lehrkräfte durch digitale Chatbots zu ersetzen.', ua: 'Замінити всіх учителів цифровими чат-ботами.' },
    ],
    correct: 0,
  },
  {
    question: 'Was kann ein Schüler tun, wenn er einen Text nicht versteht?',
    questionUa: 'Що може зробити учень, якщо він не розуміє текст?',
    options: [
      { de: 'Sich den Text von der KI mit einfacheren Vokabeln zusammenfassen lassen.', ua: 'Попросити ШІ переказати текст простішими словами.' },
      { de: 'Den Text von der KI ins Deutsche übersetzen lassen.', ua: 'Дати ШІ перекласти текст німецькою.' },
      { de: 'Den Text vom Lehrer vorlesen lassen.', ua: 'Попросити вчителя прочитати текст уголос.' },
      { de: 'Einen anderen, leichteren Roman wählen.', ua: 'Обрати інший, легший роман.' },
    ],
    correct: 0,
  },
  {
    question: 'Wie nutzt eine Schülerin die KI zur Vorbereitung auf die englische Sprechprüfung?',
    questionUa: 'Як учениця використовує ШІ для підготовки до усного іспиту з англійської?',
    options: [
      { de: 'Sie lernt Texte auswendig, die die KI geschrieben hat.', ua: 'Вона вчить напам’ять тексти, написані ШІ.' },
      { de: 'Sie lässt die KI die Prüfung für sie sprechen.', ua: 'Вона дає ШІ проговорити іспит замість неї.' },
      { de: 'Sie lässt sich die Prüfungsfragen vorher verraten.', ua: 'Вона дізнається питання іспиту заздалегідь.' },
      { de: 'Sie lässt sich bessere Vokabeln vorschlagen, damit es eher nach B2 als nach B1 klingt.', ua: 'Вона просить кращі слова, щоб звучало радше на B2, ніж на B1.' },
    ],
    correct: 3,
  },
  {
    question: 'Welche Beispiele für KI in der Schule nennt die Ministerin?',
    questionUa: 'Які приклади ШІ в школі наводить міністерка?',
    options: [
      { de: 'Programme, die Klausuren automatisch benoten.', ua: 'Програми, що автоматично оцінюють контрольні.' },
      { de: 'Chatbots zum Lernen und VR-Brillen zum Üben von Bewerbungsgesprächen.', ua: 'Чат-боти для навчання і VR-окуляри для тренування співбесід.' },
      { de: 'Roboter, die den Unterricht leiten.', ua: 'Роботи, що ведуть урок.' },
      { de: 'Apps, die die Anwesenheit kontrollieren.', ua: 'Застосунки, що контролюють відвідуваність.' },
    ],
    correct: 1,
  },
];

// 4) ДОДАТКОВО
// Прості картки: спереду укр. речення, перевертаєш → німецьке. Формат: { ua, de }.
export const lesson0510Extra = [
  { ua: 'Школа дозволяє учням використовувати ChatGPT на уроці.', de: 'Die Schule lässt die Schüler ChatGPT im Unterricht nutzen.' },
  { ua: 'Я часто даю ChatGPT виправляти свої речення.', de: 'Ich lasse oft ChatGPT meine Sätze korrigieren.' },
  { ua: 'Діти залишають свої телефони під час уроку в сумці.', de: 'Die Schüler lassen ihre Handys während des Unterrichts in der Tasche.' },
];

// 3) СЛОВНИК
// Формат: { ua, de, examples: [{ de, ua }] }.
// Спереду — ua (укр. слово), перевертаєш → de (нім. слово) + приклади.
export const lesson0510Vocab = [
  {
    ua: 'точний, чіткий, детальний',
    de: 'präzise',
    examples: [
      { de: 'Bitte gib mir eine präzise Antwort.', ua: 'Будь ласка, дай мені точну (чітку) відповідь.' },
      { de: 'Präzise Prompts helfen, bessere Ergebnisse zu erzielen.', ua: 'Точні промпти допомагають досягати кращих результатів.' },
    ],
  },
  {
    ua: 'незамінний',
    de: 'unersetzbar',
    examples: [
      { de: 'Kann KI den Lehrer im Klassenzimmer ersetzen, oder bleibt der menschliche Faktor unersetzbar?', ua: 'Чи може штучний інтелект замінити вчителя в класі, чи людський фактор залишається незамінним?' },
      { de: 'ChatGPT ist heutzutage ein unersetzbarer Helfer nicht nur beim Lernen, sondern auch im Alltag.', ua: 'ChatGPT зараз — незамінний помічник не тільки в навчанні, але й у повсякденному житті.' },
    ],
  },
  {
    ua: 'натхнення',
    de: 'die Inspiration',
    examples: [
      { de: 'Sie holt sich Ideen und Inspirationen von ChatGPT.', ua: 'Вона черпає ідеї та натхнення з ChatGPT.' },
      { de: 'Der Lehrer sucht Inspiration für seinen Unterricht.', ua: 'Вчитель шукає натхнення для своїх уроків.' },
    ],
  },
  {
    ua: 'незліченні / безмежні',
    de: 'unzählige',
    examples: [
      { de: 'Künstliche Intelligenz bietet unzählige Möglichkeiten.', ua: 'Штучний інтелект пропонує безмежні можливості.' },
      { de: 'Nachts sieht man am Himmel unzählige Sterne.', ua: 'Вночі на небі видно незліченні зірки.' },
    ],
  },
  {
    ua: 'зарекомендувати, виправдати щось',
    de: 'sich bewähren',
    examples: [
      { de: 'Künstliche Intelligenz hat sich als Assistent gut bewährt.', ua: 'Штучний інтелект добре себе зарекомендував як помічник.' },
      { de: 'Das Auto hat sich im Winter gut bewährt.', ua: 'Ця машина добре показала себе взимку.' },
    ],
  },
  {
    ua: 'підхід',
    de: 'der Ansatz',
    examples: [
      { de: 'Wir suchen nach neuen Ansätzen für den Unterricht.', ua: 'Ми шукаємо нові підходи до навчання.' },
      { de: 'Mit KI an Schulen verändern sich die Lernansätze.', ua: 'Використання штучного інтелекту в школах змінює підходи до навчання.' },
    ],
  },
  {
    ua: 'доступний',
    de: 'zugänglich',
    examples: [
      { de: 'Wir versuchen, Künstliche Intelligenz für alle Schüler zugänglich zu machen.', ua: 'Ми намагаємося зробити штучний інтелект доступним для всіх учнів.' },
      { de: 'Die Information ist für alle zugänglich.', ua: 'Ця інформація доступна для всіх.' },
    ],
  },
  {
    ua: 'критично осмислювати, ставити під сумнів',
    de: 'hinterfragen',
    examples: [
      { de: 'Man muss kritische Informationen immer hinterfragen.', ua: 'Потрібно завжди критично осмислювати / перевіряти критичну інформацію.' },
      { de: 'Man muss alles hinterfragen, was wir im Internet sehen.', ua: 'Потрібно ставити під сумнів / критично осмислювати все, що ми бачимо в інтернеті.' },
    ],
  },
];
