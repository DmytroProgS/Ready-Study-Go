export const situations = [
  {
    id: 'invitation', title: 'Запрошення до кіно', context: 'Друг запрошує тебе в кіно, але ти маєш працювати.',
    core: 'Ich kann heute nicht mitkommen.', translation: 'Сьогодні я не можу піти з тобою.',
    variants: [
      {id:'present',label:'Теперішнє',group:'Час',de:'Ich kann heute nicht mitkommen.',uk:'Сьогодні я не можу піти з тобою.',tip:'Präsens: модальне дієслово kann стоїть на другому місці, mitkommen — у кінці.'},
      {id:'past',label:'Минуле',group:'Час',de:'Ich konnte gestern nicht mitkommen.',uk:'Учора я не зміг піти з тобою.',tip:'Präteritum модального дієслова können → konnte. Дуже природно в усному мовленні.'},
      {id:'perfect',label:'Perfekt',group:'Час',de:'Ich habe gestern nicht mitkommen können.',uk:'Учора я не зміг піти з тобою.',tip:'Perfekt із модальним дієсловом та іншим інфінітивом: подвійний інфінітив mitkommen können.'},
      {id:'future',label:'Майбутнє',group:'Час',de:'Ich werde morgen nicht mitkommen können.',uk:'Завтра я не зможу піти з тобою.',tip:'Futur I: werde + mitkommen können. У розмові також природно: Morgen kann ich nicht mitkommen.'},
      {id:'question',label:'Запитання',group:'Спілкування',de:'Kannst du heute mitkommen?',uk:'Ти сьогодні можеш піти з нами?',tip:'У загальному запитанні відмінюване дієслово стоїть на першому місці.'},
      {id:'reason',label:'Причина',group:'Зв’язки',de:'Ich kann nicht mitkommen, weil ich arbeiten muss.',uk:'Я не можу піти, тому що мушу працювати.',tip:'Після weil відмінюване muss стоїть у кінці підрядної частини.'},
      {id:'contrast',label:'Попри це',group:'Зв’язки',de:'Obwohl ich arbeiten muss, komme ich mit.',uk:'Хоча я мушу працювати, я піду з вами.',tip:'Після obwohl — дієслово в кінці; у головній частині komme перед підметом ich.'},
      {id:'hypothetical',label:'Уявна умова',group:'Умови',de:'Wenn ich Zeit hätte, würde ich mitkommen.',uk:'Якби я мав час, я б пішов з вами.',tip:'Konjunktiv II: hätte + würde mitkommen. Це нереальна ситуація зараз.'},
      {id:'regret',label:'Жаль про минуле',group:'Умови',de:'Wenn ich gestern Zeit gehabt hätte, wäre ich mitgekommen.',uk:'Якби я вчора мав час, я б пішов із вами.',tip:'Konjunktiv II Vergangenheit: gehabt hätte та wäre mitgekommen.'},
      {id:'polite',label:'Ввічлива відповідь',group:'Спілкування',de:'Ich würde gern mitkommen, aber ich muss arbeiten.',uk:'Я б із задоволенням пішов із вами, але мушу працювати.',tip:'würde gern — ввічливий спосіб висловити бажання.'}
    ]
  },
  {
    id:'learning',title:'Вивчення німецької',context:'Ти хочеш більше практикувати німецьку, але не завжди знаходиш час.',
    core:'Ich lerne jeden Tag Deutsch.',translation:'Я щодня вивчаю німецьку.',
    variants:[
      {id:'present',label:'Теперішнє',group:'Час',de:'Ich lerne jeden Tag Deutsch.',uk:'Я щодня вивчаю німецьку.',tip:'Präsens для звичної дії.'},
      {id:'past',label:'Минуле',group:'Час',de:'Früher lernte ich jeden Tag Deutsch.',uk:'Раніше я щодня вивчав німецьку.',tip:'Präteritum; у розмові частіше: Früher habe ich jeden Tag Deutsch gelernt.'},
      {id:'perfect',label:'Perfekt',group:'Час',de:'Gestern habe ich Deutsch gelernt.',uk:'Учора я вчив німецьку.',tip:'Perfekt: haben + Partizip II.'},
      {id:'future',label:'Майбутнє',group:'Час',de:'Morgen werde ich Deutsch lernen.',uk:'Завтра я вчитиму німецьку.',tip:'У живій мові також: Morgen lerne ich Deutsch.'},
      {id:'question',label:'Запитання',group:'Спілкування',de:'Lernst du jeden Tag Deutsch?',uk:'Ти щодня вивчаєш німецьку?',tip:'Так/ні запитання: Lernst на першому місці.'},
      {id:'reason',label:'Причина',group:'Зв’язки',de:'Ich lerne Deutsch, weil ich flüssiger sprechen möchte.',uk:'Я вчу німецьку, тому що хочу говорити вільніше.',tip:'Після weil möchte стоїть у кінці.'},
      {id:'contrast',label:'Попри це',group:'Зв’язки',de:'Obwohl ich wenig Zeit habe, lerne ich jeden Tag Deutsch.',uk:'Хоча в мене мало часу, я щодня вчу німецьку.',tip:'Підрядна частина на першому місці, далі відразу lerne.'},
      {id:'hypothetical',label:'Уявна умова',group:'Умови',de:'Wenn ich mehr Zeit hätte, würde ich mehr Deutsch lernen.',uk:'Якби я мав більше часу, я б більше вчив німецьку.',tip:'Konjunktiv II для нереальної теперішньої умови.'},
      {id:'regret',label:'Жаль про минуле',group:'Умови',de:'Wenn ich früher mehr geübt hätte, hätte ich schneller Fortschritte gemacht.',uk:'Якби я раніше більше практикувався, я б швидше досяг прогресу.',tip:'Konjunktiv II Vergangenheit в обох частинах.'},
      {id:'polite',label:'Бажання',group:'Спілкування',de:'Ich würde gern flüssiger Deutsch sprechen.',uk:'Я хотів би вільніше говорити німецькою.',tip:'würde gern + інфінітив.'}
    ]
  },
{
  "id": "job",
  "title": "Співбесіда та робота",
  "context": "Ти розповідаєш про досвід і шукаєш нову роботу.",
  "core": "Ich suche eine neue Stelle.",
  "translation": "Я шукаю нову роботу.",
  "variants": [
    {
      "id": "present",
      "label": "Теперішнє",
      "group": "Час",
      "de": "Ich suche eine neue Stelle.",
      "uk": "Я шукаю нову роботу.",
      "tip": "Präsens: зверни увагу на позицію відмінюваного дієслова."
    },
    {
      "id": "past",
      "label": "Минуле",
      "group": "Час",
      "de": "Früher suchte ich eine Stelle in Berlin.",
      "uk": "Раніше я шукав роботу в Берліні.",
      "tip": "Präteritum: форма для розповіді про минуле."
    },
    {
      "id": "perfect",
      "label": "Perfekt",
      "group": "Час",
      "de": "Ich habe mich gestern beworben.",
      "uk": "Учора я подав заявку на роботу.",
      "tip": "Perfekt: допоміжне дієслово й Partizip II."
    },
    {
      "id": "future",
      "label": "Майбутнє",
      "group": "Час",
      "de": "Nächste Woche werde ich mich bewerben.",
      "uk": "Наступного тижня я подам заявку.",
      "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
    },
    {
      "id": "question",
      "label": "Запитання",
      "group": "Спілкування",
      "de": "Haben Sie schon Berufserfahrung?",
      "uk": "У вас уже є професійний досвід?",
      "tip": "У запитанні відмінюване дієслово стоїть на початку."
    },
    {
      "id": "reason",
      "label": "Причина",
      "group": "Зв’язки",
      "de": "Ich bewerbe mich, weil ich mich weiterentwickeln möchte.",
      "uk": "Я подаю заявку, тому що хочу розвиватися.",
      "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "contrast",
      "label": "Попри це",
      "group": "Зв’язки",
      "de": "Obwohl ich wenig Erfahrung habe, lerne ich schnell.",
      "uk": "Хоча в мене мало досвіду, я швидко навчаюся.",
      "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "hypothetical",
      "label": "Уявна умова",
      "group": "Умови",
      "de": "Wenn ich die Stelle bekäme, würde ich sofort anfangen.",
      "uk": "Якби я отримав посаду, то відразу почав би.",
      "tip": "Konjunktiv II для уявної умови."
    },
    {
      "id": "regret",
      "label": "Жаль про минуле",
      "group": "Умови",
      "de": "Wenn ich mich früher beworben hätte, hätte ich vielleicht eine Chance gehabt.",
      "uk": "Якби я подав заявку раніше, можливо, мав би шанс.",
      "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
    },
    {
      "id": "polite",
      "label": "Ввічливе формулювання",
      "group": "Спілкування",
      "de": "Könnten Sie mir bitte mehr über die Stelle erzählen?",
      "uk": "Чи могли б ви розповісти більше про цю посаду?",
      "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
    }
  ]
},
{
  "id": "appointment",
  "title": "Домовленість про зустріч",
  "context": "Потрібно перенести зустріч і пояснити причину.",
  "core": "Ich muss unseren Termin verschieben.",
  "translation": "Мені потрібно перенести нашу зустріч.",
  "variants": [
    {
      "id": "present",
      "label": "Теперішнє",
      "group": "Час",
      "de": "Ich muss unseren Termin verschieben.",
      "uk": "Мені потрібно перенести нашу зустріч.",
      "tip": "Präsens: зверни увагу на позицію відмінюваного дієслова."
    },
    {
      "id": "past",
      "label": "Минуле",
      "group": "Час",
      "de": "Ich musste den Termin verschieben.",
      "uk": "Мені довелося перенести зустріч.",
      "tip": "Präteritum: форма для розповіді про минуле."
    },
    {
      "id": "perfect",
      "label": "Perfekt",
      "group": "Час",
      "de": "Ich habe den Termin verschoben.",
      "uk": "Я переніс зустріч.",
      "tip": "Perfekt: допоміжне дієслово й Partizip II."
    },
    {
      "id": "future",
      "label": "Майбутнє",
      "group": "Час",
      "de": "Ich werde morgen einen neuen Termin vereinbaren.",
      "uk": "Завтра я домовлюся про нову зустріч.",
      "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
    },
    {
      "id": "question",
      "label": "Запитання",
      "group": "Спілкування",
      "de": "Können wir uns am Freitag treffen?",
      "uk": "Можемо зустрітися в п’ятницю?",
      "tip": "У запитанні відмінюване дієслово стоїть на початку."
    },
    {
      "id": "reason",
      "label": "Причина",
      "group": "Зв’язки",
      "de": "Ich muss absagen, weil ich krank bin.",
      "uk": "Мені потрібно скасувати зустріч, тому що я хворію.",
      "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "contrast",
      "label": "Попри це",
      "group": "Зв’язки",
      "de": "Obwohl ich wenig Zeit habe, komme ich vorbei.",
      "uk": "Хоча в мене мало часу, я зайду.",
      "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "hypothetical",
      "label": "Уявна умова",
      "group": "Умови",
      "de": "Wenn ich früher fertig wäre, könnte ich kommen.",
      "uk": "Якби я закінчив раніше, то зміг би прийти.",
      "tip": "Konjunktiv II для уявної умови."
    },
    {
      "id": "regret",
      "label": "Жаль про минуле",
      "group": "Умови",
      "de": "Wenn du früher Bescheid gesagt hättest, hätte ich anders geplant.",
      "uk": "Якби ти повідомив раніше, я б спланував інакше.",
      "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
    },
    {
      "id": "polite",
      "label": "Ввічливе формулювання",
      "group": "Спілкування",
      "de": "Wäre es möglich, den Termin zu verschieben?",
      "uk": "Чи можна було б перенести зустріч?",
      "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
    }
  ]
},
{
  "id": "disagreement",
  "title": "Незгода та аргументація",
  "context": "Ти ввічливо не погоджуєшся й пояснюєш свою позицію.",
  "core": "Ich sehe das anders.",
  "translation": "Я бачу це інакше.",
  "variants": [
    {
      "id": "present",
      "label": "Теперішнє",
      "group": "Час",
      "de": "Ich sehe das anders.",
      "uk": "Я бачу це інакше.",
      "tip": "Präsens: зверни увагу на позицію відмінюваного дієслова."
    },
    {
      "id": "past",
      "label": "Минуле",
      "group": "Час",
      "de": "Damals sah ich das anders.",
      "uk": "Тоді я дивився на це інакше.",
      "tip": "Präteritum: форма для розповіді про минуле."
    },
    {
      "id": "perfect",
      "label": "Perfekt",
      "group": "Час",
      "de": "Ich habe meine Meinung geändert.",
      "uk": "Я змінив свою думку.",
      "tip": "Perfekt: допоміжне дієслово й Partizip II."
    },
    {
      "id": "future",
      "label": "Майбутнє",
      "group": "Час",
      "de": "Ich werde meinen Standpunkt erklären.",
      "uk": "Я поясню свою позицію.",
      "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
    },
    {
      "id": "question",
      "label": "Запитання",
      "group": "Спілкування",
      "de": "Warum siehst du das anders?",
      "uk": "Чому ти бачиш це інакше?",
      "tip": "У запитанні відмінюване дієслово стоїть на початку."
    },
    {
      "id": "reason",
      "label": "Причина",
      "group": "Зв’язки",
      "de": "Ich bin dagegen, weil das zu teuer ist.",
      "uk": "Я проти, тому що це надто дорого.",
      "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "contrast",
      "label": "Попри це",
      "group": "Зв’язки",
      "de": "Obwohl ich deine Argumente verstehe, bin ich anderer Meinung.",
      "uk": "Хоча я розумію твої аргументи, я іншої думки.",
      "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "hypothetical",
      "label": "Уявна умова",
      "group": "Умови",
      "de": "Wenn ich an deiner Stelle wäre, würde ich anders entscheiden.",
      "uk": "Якби я був на твоєму місці, я б вирішив інакше.",
      "tip": "Konjunktiv II для уявної умови."
    },
    {
      "id": "regret",
      "label": "Жаль про минуле",
      "group": "Умови",
      "de": "Wenn wir früher darüber gesprochen hätten, hätten wir den Streit vermieden.",
      "uk": "Якби ми поговорили про це раніше, ми б уникнули сварки.",
      "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
    },
    {
      "id": "polite",
      "label": "Ввічливе формулювання",
      "group": "Спілкування",
      "de": "Dürfte ich dazu etwas ergänzen?",
      "uk": "Чи можна мені дещо додати?",
      "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
    }
  ]
},
{
  "id": "mistake",
  "title": "Помилка та вибачення",
  "context": "Ти припустився помилки й хочеш її виправити.",
  "core": "Ich habe einen Fehler gemacht.",
  "translation": "Я припустився помилки.",
  "variants": [
    {
      "id": "present",
      "label": "Теперішнє",
      "group": "Час",
      "de": "Ich mache manchmal Fehler.",
      "uk": "Я іноді роблю помилки.",
      "tip": "Präsens: зверни увагу на позицію відмінюваного дієслова."
    },
    {
      "id": "past",
      "label": "Минуле",
      "group": "Час",
      "de": "Damals machte ich viele Fehler.",
      "uk": "Тоді я робив багато помилок.",
      "tip": "Präteritum: форма для розповіді про минуле."
    },
    {
      "id": "perfect",
      "label": "Perfekt",
      "group": "Час",
      "de": "Ich habe einen Fehler gemacht.",
      "uk": "Я припустився помилки.",
      "tip": "Perfekt: допоміжне дієслово й Partizip II."
    },
    {
      "id": "future",
      "label": "Майбутнє",
      "group": "Час",
      "de": "Ich werde den Fehler korrigieren.",
      "uk": "Я виправлю помилку.",
      "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
    },
    {
      "id": "question",
      "label": "Запитання",
      "group": "Спілкування",
      "de": "Wie kann ich das wiedergutmachen?",
      "uk": "Як я можу це виправити?",
      "tip": "У запитанні відмінюване дієслово стоїть на початку."
    },
    {
      "id": "reason",
      "label": "Причина",
      "group": "Зв’язки",
      "de": "Es tut mir leid, weil ich dich enttäuscht habe.",
      "uk": "Мені шкода, тому що я тебе розчарував.",
      "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "contrast",
      "label": "Попри це",
      "group": "Зв’язки",
      "de": "Obwohl ich vorsichtig war, ist mir ein Fehler passiert.",
      "uk": "Хоча я був уважним, зі мною трапилася помилка.",
      "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "hypothetical",
      "label": "Уявна умова",
      "group": "Умови",
      "de": "Wenn ich mehr Zeit hätte, würde ich alles noch einmal prüfen.",
      "uk": "Якби в мене було більше часу, я б усе перевірив ще раз.",
      "tip": "Konjunktiv II для уявної умови."
    },
    {
      "id": "regret",
      "label": "Жаль про минуле",
      "group": "Умови",
      "de": "Wenn ich besser aufgepasst hätte, wäre das nicht passiert.",
      "uk": "Якби я був уважнішим, цього б не сталося.",
      "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
    },
    {
      "id": "polite",
      "label": "Ввічливе формулювання",
      "group": "Спілкування",
      "de": "Könntest du mir bitte noch eine Chance geben?",
      "uk": "Чи міг би ти дати мені ще один шанс?",
      "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
    }
  ]
},
{
  "id": "housing",
  "title": "Квартира та побут",
  "context": "Ти шукаєш житло й спілкуєшся з орендодавцем.",
  "core": "Ich suche eine größere Wohnung.",
  "translation": "Я шукаю більшу квартиру.",
  "variants": [
    {
      "id": "present",
      "label": "Теперішнє",
      "group": "Час",
      "de": "Ich suche eine größere Wohnung.",
      "uk": "Я шукаю більшу квартиру.",
      "tip": "Präsens: зверни увагу на позицію відмінюваного дієслова."
    },
    {
      "id": "past",
      "label": "Минуле",
      "group": "Час",
      "de": "Früher wohnte ich in einer kleinen Wohnung.",
      "uk": "Раніше я жив у маленькій квартирі.",
      "tip": "Präteritum: форма для розповіді про минуле."
    },
    {
      "id": "perfect",
      "label": "Perfekt",
      "group": "Час",
      "de": "Ich habe gestern eine Wohnung besichtigt.",
      "uk": "Учора я оглянув квартиру.",
      "tip": "Perfekt: допоміжне дієслово й Partizip II."
    },
    {
      "id": "future",
      "label": "Майбутнє",
      "group": "Час",
      "de": "Nächsten Monat werde ich umziehen.",
      "uk": "Наступного місяця я переїду.",
      "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
    },
    {
      "id": "question",
      "label": "Запитання",
      "group": "Спілкування",
      "de": "Ist die Wohnung noch frei?",
      "uk": "Квартира ще вільна?",
      "tip": "У запитанні відмінюване дієслово стоїть на початку."
    },
    {
      "id": "reason",
      "label": "Причина",
      "group": "Зв’язки",
      "de": "Ich möchte umziehen, weil die Wohnung zu klein ist.",
      "uk": "Я хочу переїхати, тому що квартира замала.",
      "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "contrast",
      "label": "Попри це",
      "group": "Зв’язки",
      "de": "Obwohl die Miete hoch ist, gefällt mir die Wohnung.",
      "uk": "Хоча оренда дорога, квартира мені подобається.",
      "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "hypothetical",
      "label": "Уявна умова",
      "group": "Умови",
      "de": "Wenn die Wohnung günstiger wäre, würde ich sie mieten.",
      "uk": "Якби квартира була дешевшою, я б її орендував.",
      "tip": "Konjunktiv II для уявної умови."
    },
    {
      "id": "regret",
      "label": "Жаль про минуле",
      "group": "Умови",
      "de": "Wenn ich früher gesucht hätte, hätte ich vielleicht etwas Günstigeres gefunden.",
      "uk": "Якби я почав шукати раніше, можливо, знайшов би щось дешевше.",
      "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
    },
    {
      "id": "polite",
      "label": "Ввічливе формулювання",
      "group": "Спілкування",
      "de": "Könnte ich die Wohnung am Samstag besichtigen?",
      "uk": "Чи міг би я оглянути квартиру в суботу?",
      "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
    }
  ]
},
{
  "id": "plans",
  "title": "Плани та зміни",
  "context": "Ти хочеш змінити звички й розповідаєш про плани.",
  "core": "Ich möchte etwas in meinem Leben ändern.",
  "translation": "Я хочу щось змінити у своєму житті.",
  "variants": [
    {
      "id": "present",
      "label": "Теперішнє",
      "group": "Час",
      "de": "Ich möchte etwas in meinem Leben ändern.",
      "uk": "Я хочу щось змінити у своєму житті.",
      "tip": "Präsens: зверни увагу на позицію відмінюваного дієслова."
    },
    {
      "id": "past",
      "label": "Минуле",
      "group": "Час",
      "de": "Früher wollte ich im Ausland leben.",
      "uk": "Раніше я хотів жити за кордоном.",
      "tip": "Präteritum: форма для розповіді про минуле."
    },
    {
      "id": "perfect",
      "label": "Perfekt",
      "group": "Час",
      "de": "Ich habe einen wichtigen Entschluss gefasst.",
      "uk": "Я ухвалив важливе рішення.",
      "tip": "Perfekt: допоміжне дієслово й Partizip II."
    },
    {
      "id": "future",
      "label": "Майбутнє",
      "group": "Час",
      "de": "Ab morgen werde ich regelmäßig Sport treiben.",
      "uk": "Від завтра я регулярно займатимуся спортом.",
      "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
    },
    {
      "id": "question",
      "label": "Запитання",
      "group": "Спілкування",
      "de": "Was würdest du gern ändern?",
      "uk": "Що ти хотів би змінити?",
      "tip": "У запитанні відмінюване дієслово стоїть на початку."
    },
    {
      "id": "reason",
      "label": "Причина",
      "group": "Зв’язки",
      "de": "Ich möchte mehr Sport machen, weil ich mich fitter fühlen will.",
      "uk": "Я хочу більше займатися спортом, тому що хочу почуватися бадьоріше.",
      "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "contrast",
      "label": "Попри це",
      "group": "Зв’язки",
      "de": "Obwohl es schwierig wird, möchte ich es versuchen.",
      "uk": "Хоча це буде складно, я хочу спробувати.",
      "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
    },
    {
      "id": "hypothetical",
      "label": "Уявна умова",
      "group": "Умови",
      "de": "Wenn ich mehr Mut hätte, würde ich etwas Neues ausprobieren.",
      "uk": "Якби в мене було більше сміливості, я б спробував щось нове.",
      "tip": "Konjunktiv II для уявної умови."
    },
    {
      "id": "regret",
      "label": "Жаль про минуле",
      "group": "Умови",
      "de": "Wenn ich früher angefangen hätte, wäre ich jetzt weiter.",
      "uk": "Якби я почав раніше, зараз був би далі.",
      "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
    },
    {
      "id": "polite",
      "label": "Ввічливе формулювання",
      "group": "Спілкування",
      "de": "Ich würde gern deine Meinung dazu hören.",
      "uk": "Я хотів би почути твою думку про це.",
      "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
    }
  ]
}
];
