// The same 17 source sentences power both trainers.
export const haltPrepositionPhrases = [
  {
    "de": "Ich halte mich an die Regeln.",
    "uk": "Я дотримуюся правил.",
    "prompt": "Ich halte mich ___ die Regeln.",
    "options": [
      "an",
      "auf",
      "für",
      "von"
    ],
    "correct": 0,
    "explanation": "sich halten an + Akkusativ — дотримуватися правил, плану, домовленостей."
  },
  {
    "de": "Halt dich an den Plan!",
    "uk": "Дотримуйся плану!",
    "prompt": "Halt ___ an den Plan!",
    "options": [
      "dich",
      "dir",
      "sich",
      "mich"
    ],
    "correct": 0,
    "explanation": "sich halten an + Akkusativ; наказовий спосіб du: Halt dich an ..."
  },
  {
    "de": "Halt dich am Geländer fest!",
    "uk": "Тримайся за поручні!",
    "prompt": "Halt dich ___ Geländer fest!",
    "options": [
      "am",
      "ans",
      "auf",
      "für"
    ],
    "correct": 0,
    "explanation": "sich festhalten an + Dativ; am = an dem."
  },
  {
    "de": "Halt dich gut fest, es ist glatt!",
    "uk": "Тримайся міцно, слизько!",
    "prompt": "Halt ___ gut fest, es ist glatt!",
    "options": [
      "dich",
      "dir",
      "mich",
      "sich"
    ],
    "correct": 0,
    "explanation": "sich festhalten — міцно триматися; тут прийменник не потрібен."
  },
  {
    "de": "Halt dich bitte etwas zurück!",
    "uk": "Стримайся, будь ласка, трохи!",
    "prompt": "Halt ___ bitte etwas zurück!",
    "options": [
      "dich",
      "dir",
      "sich",
      "euch"
    ],
    "correct": 0,
    "explanation": "sich zurückhalten — стримуватися, не втручатися; без обов'язкового прийменника."
  },
  {
    "de": "Du solltest dich etwas zurückhalten.",
    "uk": "Тобі варто трохи стриматися.",
    "prompt": "Du solltest ___ etwas zurückhalten.",
    "options": [
      "dich",
      "dir",
      "sich",
      "mich"
    ],
    "correct": 0,
    "explanation": "sich zurückhalten — стримуватися; з du потрібне dich."
  },
  {
    "de": "Er hält sich gerade in Wien auf.",
    "uk": "Він зараз перебуває у Відні.",
    "prompt": "Er hält ___ gerade in Wien auf.",
    "options": [
      "sich",
      "ihn",
      "ihm",
      "dich"
    ],
    "correct": 0,
    "explanation": "sich aufhalten in + Dativ — перебувати десь."
  },
  {
    "de": "Ich halte das für richtig.",
    "uk": "Я вважаю це правильним.",
    "prompt": "Ich halte das ___ richtig.",
    "options": [
      "für",
      "von",
      "an",
      "zu"
    ],
    "correct": 0,
    "explanation": "halten für — вважати щось правильним, давати оцінку."
  },
  {
    "de": "Ich halte das für eine gute Idee.",
    "uk": "Я вважаю це гарною ідеєю.",
    "prompt": "Ich halte das ___ eine gute Idee.",
    "options": [
      "für",
      "von",
      "an",
      "zu"
    ],
    "correct": 0,
    "explanation": "halten für + Akkusativ — вважати щось гарною ідеєю."
  },
  {
    "de": "Ich halte ihn für klug.",
    "uk": "Я вважаю його розумним.",
    "prompt": "Ich halte ihn ___ klug.",
    "options": [
      "für",
      "von",
      "an",
      "zu"
    ],
    "correct": 0,
    "explanation": "halten für — оцінювати когось як розумного."
  },
  {
    "de": "Was hältst du von dem Plan?",
    "uk": "Що ти думаєш про цей план?",
    "prompt": "Was hältst du ___ dem Plan?",
    "options": [
      "von",
      "für",
      "an",
      "auf"
    ],
    "correct": 0,
    "explanation": "halten von + Dativ — мати думку або ставлення до чогось."
  },
  {
    "de": "Sie hält nicht viel von Social Media.",
    "uk": "Вона не в захваті від соцмереж.",
    "prompt": "Sie hält nicht viel ___ Social Media.",
    "options": [
      "von",
      "für",
      "an",
      "zu"
    ],
    "correct": 0,
    "explanation": "halten von + Dativ — оцінювати, схвалювати або не схвалювати."
  },
  {
    "de": "Ich halte nichts von solchen Diäten.",
    "uk": "Я не вірю в такі дієти / зовсім не схвалюю їх.",
    "prompt": "Ich halte nichts ___ solchen Diäten.",
    "options": [
      "von",
      "für",
      "an",
      "auf"
    ],
    "correct": 0,
    "explanation": "halten von + Dativ — мати певне ставлення; nichts von etwas halten — не схвалювати."
  },
  {
    "de": "Ich halte an meinem Plan fest.",
    "uk": "Я не відмовляюся від свого плану.",
    "prompt": "Ich halte ___ meinem Plan fest.",
    "options": [
      "an",
      "auf",
      "für",
      "von"
    ],
    "correct": 0,
    "explanation": "festhalten an + Dativ — не відмовлятися від плану чи ідеї."
  },
  {
    "de": "Sie hält an ihrem Traum fest.",
    "uk": "Вона не відмовляється від своєї мрії.",
    "prompt": "Sie hält ___ ihrem Traum fest.",
    "options": [
      "an",
      "auf",
      "für",
      "von"
    ],
    "correct": 0,
    "explanation": "festhalten an + Dativ — триматися своєї мрії."
  },
  {
    "de": "Ich halte an meiner Meinung fest.",
    "uk": "Я тримаюся своєї думки.",
    "prompt": "Ich halte ___ meiner Meinung fest.",
    "options": [
      "an",
      "auf",
      "für",
      "von"
    ],
    "correct": 0,
    "explanation": "festhalten an + Dativ — не змінювати свою думку."
  },
  {
    "de": "Ich halte zu dir.",
    "uk": "Я на твоєму боці / Я тебе підтримую.",
    "prompt": "Ich halte ___ dir.",
    "options": [
      "zu",
      "an",
      "für",
      "von"
    ],
    "correct": 0,
    "explanation": "halten zu + Dativ — підтримувати когось, бути на чиємусь боці."
  }
];
