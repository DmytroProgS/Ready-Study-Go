const thankingExplanation = [
  'danken + Dativ: Ich danke Ihnen. Звучить просто, природно й ввічливо. Підходить і для розмови, і для ділового листа.',
  'sich bedanken bei + Dativ: Ich bedanke mich bei Ihnen. Виразніше підкреслює саму подяку й може звучати трохи формальніше.',
  'В обох конструкціях причину подяки називаємо через für + Akkusativ: für Ihre Hilfe. Обидва варіанти доречні у формальному спілкуванні.',
];

const conversationStyle = [
  'sich unterhalten — спілкуватися, бесідувати. Підкреслює взаємну розмову й обмін думками.',
  'sprechen — говорити, розмовляти. Нейтральний варіант, доречний і в офіційному спілкуванні.',
  'reden — говорити, розмовляти. У цьому контексті звучить трохи невимушеніше.',
];

// Extra answers for the calendar flashcards, keyed by the original German sentence.
export const calendarTurnTakingNotes = {
  'Ich bedanke mich bei Ihnen für die Hilfe.': {
    alternatives: ['Ich danke Ihnen für Ihre Hilfe.'],
    explanation: thankingExplanation,
  },
  'Ich möchte mich bei Ihnen für Ihre Hilfe bedanken.': {
    alternatives: ['Ich möchte Ihnen für Ihre Hilfe danken.'],
    explanation: [
      'Обидва речення передають ввічливе «Я хотів би подякувати Вам». Після möchte інфінітив danken або bedanken стоїть у кінці.',
      ...thankingExplanation,
    ],
  },
  'Wir kümmern uns um die Gäste.': {
    alternatives: ['Wir sorgen für die Gäste.'],
    explanation: [
      'sich kümmern um + Akkusativ — приділяти гостям увагу й допомагати їм. „Ich kümmere mich um die Gäste.“ — Я зустрічаю гостей, відповідаю на їхні запитання й допомагаю їм.',
      'sorgen für + Akkusativ — забезпечувати гостей усім необхідним, наприклад їжею, напоями та зручним місцем.',
    ],
  },
  'Ich verspreche dir, dass ich immer für dich sorgen werde.': {
    alternatives: ['Ich verspreche dir, dass ich mich immer um dich kümmern werde.'],
    explanation: [
      'sorgen für + Akkusativ — забезпечувати когось і дбати про його добробут, безпеку й потреби. „Ich werde immer für dich sorgen.“ — Я завжди піклуватимуся про тебе й забезпечуватиму тебе.',
      'sich kümmern um + Akkusativ — особисто дбати про когось, приділяти увагу, допомагати й доглядати. „Ich werde mich immer um dich kümmern.“ — Я завжди дбатиму про тебе, буду поруч і допомагатиму.',
      'У близьких стосунках варіант із sich kümmern часто звучить тепліше й особистіше.',
    ],
  },
  'Wir haben uns lange über das Wetter unterhalten.': {
    alternatives: ['Wir haben lange über das Wetter gesprochen.', 'Wir haben lange über das Wetter geredet.'],
    explanation: [
      ...conversationStyle,
      'Тема розмови: sich unterhalten über + Akkusativ, sprechen über + Akkusativ, reden über + Akkusativ. Тут це über das Wetter. Займенник uns потрібен лише зі зворотним sich unterhalten.',
    ],
  },
  'Wir haben uns lange mit den Nachbarn unterhalten.': {
    alternatives: ['Wir haben lange mit den Nachbarn gesprochen.', 'Wir haben lange mit den Nachbarn geredet.'],
    explanation: [
      ...conversationStyle,
      'Співрозмовник: sich unterhalten mit + Dativ, sprechen mit + Dativ, reden mit + Dativ. Тут це mit den Nachbarn. Займенник uns потрібен лише зі зворотним sich unterhalten.',
    ],
  },
  'Ich bin sauer auf dich.': {
    answer: 'Ich ärgere mich über dich.',
    alternatives: ['Ich bin sauer auf dich.'],
    explanation: [
      'sich ärgern über + Akkusativ — сердитися або відчувати роздратування через когось чи щось. „Ich ärgere mich über dich, weil du immer zu spät kommst.“ — Я серджуся на тебе, бо ти постійно запізнюєшся.',
      'sauer sein auf + Akkusativ — злитися на когось. Описує твій емоційний стан і часто вживається в розмові.',
      'Запам’ятай: sich über jemanden oder etwas ärgern і sauer auf jemanden sein.',
    ],
  },
  'Ich beschäftige mich mit der ukrainischen Geschichte.': {
    alternatives: ['Ich interessiere mich für die ukrainische Geschichte.'],
    explanation: [
      'sich beschäftigen mit + Dativ — активно займатися темою: читати, вивчати або працювати над нею. Тут: «Я вивчаю історію України».',
      'sich interessieren für + Akkusativ — мати інтерес до теми. Тут: «Я цікавлюся українською історією». Це ширший варіант: він може передавати інтерес і без регулярного вивчення.',
    ],
  },
  'Womit hast du dich beschäftigt?': {
    alternatives: ['Was hast du gemacht?'],
    explanation: [
      '„Womit hast du dich beschäftigt?“ — «Чим ти займався?» Запитуємо, над якою темою чи справою людина працювала. sich beschäftigen mit + Dativ: „Ich habe mich mit dem Bericht beschäftigt.“',
      '„Was hast du gemacht?“ — «Що ти робив?» або «Що ти зробив?» Це ширше запитання про дії чи результат. Наприклад: „Ich habe eingekauft, gekocht und einen Film gesehen.“',
    ],
  },
  'Ich werde über diese Dinge nachdenken.': {
    alternatives: ['Ich werde mir diese Dinge überlegen.'],
    explanation: [
      'über etwas nachdenken + Akkusativ — подумати над чимось, поміркувати. „Ich werde darüber nachdenken.“ — Я подумаю над цим.',
      'sich etwas überlegen — обміркувати щось, особливо перед рішенням. Займенник mir стоїть у Dativ, а те, що обмірковуємо, — в Akkusativ. „Ich werde mir das in Ruhe überlegen.“ — Я спокійно все обміркую.',
    ],
  },
  'Ich entscheide mich für das blaue Kleid.': {
    alternatives: ['Ich wähle das blaue Kleid.'],
    explanation: [
      'sich entscheiden für + Akkusativ — прийняти рішення на користь чогось, часто після порівняння чи вагань. У магазині: «Я вирішую взяти синю сукню».',
      'etwas wählen / auswählen + Akkusativ — обирати щось із доступних варіантів, наприклад товар, фотографію чи кандидата. Тут: «Я обираю синю сукню».',
    ],
  },
};
