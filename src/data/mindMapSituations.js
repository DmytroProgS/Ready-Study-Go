// Situation-centred grammar: natural spoken transformations, no forced constructions.
export const situations = [
  {
    "id": "invitation",
    "title": "Запрошення до кіно",
    "context": "Друг запрошує тебе в кіно, але ти маєш працювати.",
    "core": "Ich kann heute nicht mitkommen.",
    "translation": "Сьогодні я не можу піти з тобою.",
    "variants": [
      {
        "id": "present",
        "label": "Теперішнє",
        "group": "Час",
        "de": "Ich kann heute nicht mitkommen.",
        "uk": "Сьогодні я не можу піти з тобою.",
        "tip": "Präsens: модальне дієслово kann стоїть на другому місці, mitkommen — у кінці."
      },
      {
        "id": "past",
        "label": "Минуле",
        "group": "Час",
        "de": "Ich konnte gestern nicht mitkommen.",
        "uk": "Учора я не зміг піти з тобою.",
        "tip": "Präteritum модального дієслова können → konnte. Дуже природно в усному мовленні."
      },
      {
        "id": "perfect",
        "label": "Perfekt",
        "group": "Час",
        "de": "Ich habe gestern nicht mitkommen können.",
        "uk": "Учора я не зміг піти з тобою.",
        "tip": "Perfekt із модальним дієсловом та іншим інфінітивом: подвійний інфінітив mitkommen können."
      },
      {
        "id": "future",
        "label": "Майбутнє",
        "group": "Час",
        "de": "Ich werde morgen nicht mitkommen können.",
        "uk": "Завтра я не зможу піти з тобою.",
        "tip": "Futur I: werde + mitkommen können. У розмові також природно: Morgen kann ich nicht mitkommen."
      },
      {
        "id": "question",
        "label": "Запитання",
        "group": "Спілкування",
        "de": "Kannst du heute mitkommen?",
        "uk": "Ти сьогодні можеш піти з нами?",
        "tip": "У загальному запитанні відмінюване дієслово стоїть на першому місці."
      },
      {
        "id": "reason",
        "label": "Причина",
        "group": "Зв’язки",
        "de": "Ich kann nicht mitkommen, weil ich arbeiten muss.",
        "uk": "Я не можу піти, тому що мушу працювати.",
        "tip": "Після weil відмінюване muss стоїть у кінці підрядної частини."
      },
      {
        "id": "contrast",
        "label": "Попри це",
        "group": "Зв’язки",
        "de": "Obwohl ich heute viel zu tun habe, kann ich mitkommen.",
        "uk": "Хоча сьогодні в мене багато справ, я можу піти з вами.",
        "tip": "Після obwohl — дієслово в кінці; у головній частині komme перед підметом ich."
      },
      {
        "id": "hypothetical",
        "label": "Уявна умова",
        "group": "Умови",
        "de": "Wenn ich Zeit hätte, würde ich mitkommen.",
        "uk": "Якби я мав час, я б пішов з вами.",
        "tip": "Konjunktiv II: hätte + würde mitkommen. Це нереальна ситуація зараз."
      },
      {
        "id": "regret",
        "label": "Жаль про минуле",
        "group": "Умови",
        "de": "Wenn ich gestern Zeit gehabt hätte, hätte ich mitkommen können.",
        "uk": "Якби вчора я мав час, то зміг би піти з вами.",
        "tip": "Konjunktiv II Vergangenheit: gehabt hätte та wäre mitgekommen."
      },
      {
        "id": "polite",
        "label": "Ввічлива відповідь",
        "group": "Спілкування",
        "de": "Ich würde gern mitkommen, aber ich muss arbeiten.",
        "uk": "Я б із задоволенням пішов із вами, але мушу працювати.",
        "tip": "würde gern — ввічливий спосіб висловити бажання."
      },
      {
        "id": "negative",
        "label": "Заперечення",
        "group": "Спілкування",
        "de": "Ich kann heute nicht mitkommen.",
        "uk": "Сьогодні я не можу піти з тобою.",
        "tip": "nicht / kein: заперечення дії або іменника."
      },
      {
        "id": "deshalb",
        "label": "Наслідок: deshalb",
        "group": "Зв’язки",
        "de": "Ich muss heute arbeiten. Deshalb kann ich nicht mitkommen.",
        "uk": "Сьогодні я мушу працювати. Тому я не можу піти з вами.",
        "tip": "deshalb — прислівник, після нього в головному реченні стоїть відмінюване дієслово."
      },
      {
        "id": "trotzdem",
        "label": "Попри це: trotzdem",
        "group": "Зв’язки",
        "de": "Ich muss heute arbeiten. Trotzdem kann ich mitkommen.",
        "uk": "Сьогодні я мушу працювати. Попри це я можу піти з вами.",
        "tip": "trotzdem — прислівник; після нього дієслово займає друге місце."
      },
      {
        "id": "dass",
        "label": "Думка: dass",
        "group": "Зв’язки",
        "de": "Es tut mir leid, dass ich heute nicht mitkommen kann.",
        "uk": "Мені шкода, що сьогодні я не можу піти з вами.",
        "tip": "Після dass відмінюване дієслово стоїть наприкінці підрядної частини."
      },
      {
        "id": "indirect",
        "label": "Непряме питання: ob",
        "group": "Спілкування",
        "de": "Ich weiß noch nicht, ob ich heute mitkommen kann.",
        "uk": "Я ще не знаю, чи зможу сьогодні піти з вами.",
        "tip": "ob вводить непряме запитання «чи»; дієслово в кінці."
      },
      {
        "id": "relative",
        "label": "Relativsatz",
        "group": "Зв’язки",
        "de": "Der Freund, mit dem ich heute nicht mitkommen kann, ist enttäuscht.",
        "uk": "Друг, з яким я сьогодні не можу піти, розчарований.",
        "tip": "Відносний займенник узгоджується з іменником за родом і числом, а відмінок залежить від ролі в підрядному реченні."
      },
      {
        "id": "zu",
        "label": "Infinitiv mit zu",
        "group": "Зв’язки",
        "de": "Ich hoffe, heute doch noch mitkommen zu können.",
        "uk": "Я сподіваюся, що сьогодні все-таки зможу піти з вами.",
        "tip": "Інфінітивна конструкція з zu; з модальними дієсловами можливі складні форми."
      },
      {
        "id": "mixed",
        "label": "Змішана умова",
        "group": "Умови",
        "de": "Wenn ich gestern nicht so lange gearbeitet hätte, könnte ich heute mitkommen.",
        "uk": "Якби я вчора не працював так довго, сьогодні зміг би піти з вами.",
        "tip": "Минула нереальна умова + теперішній нереальний наслідок."
      },
      {
        "id": "concession",
        "label": "Навіть якщо: selbst wenn",
        "group": "Зв’язки",
        "de": "Selbst wenn ich früher Feierabend hätte, könnte ich heute wahrscheinlich nicht mitkommen.",
        "uk": "Навіть якби я раніше закінчив роботу, сьогодні, мабуть, усе одно не зміг би піти з вами.",
        "tip": "selbst wenn підсилює поступку; hätte і könnte — Konjunktiv II."
      },
      {
        "id": "reported",
        "label": "Непряма мова: Konjunktiv I",
        "group": "Спілкування",
        "de": "Ich habe gesagt, ich könne heute nicht mitkommen.",
        "uk": "Я сказав, що сьогодні не можу піти з вами.",
        "tip": "У непрямій мові könne — Konjunktiv I від können."
      }
    ]
  },
  {
    "id": "learning",
    "title": "Вивчення німецької",
    "context": "Ти хочеш більше практикувати німецьку, але не завжди знаходиш час.",
    "core": "Ich lerne jeden Tag Deutsch.",
    "translation": "Я щодня вивчаю німецьку.",
    "variants": [
      {
        "id": "present",
        "label": "Теперішнє",
        "group": "Час",
        "de": "Ich lerne jeden Tag Deutsch.",
        "uk": "Я щодня вивчаю німецьку.",
        "tip": "Präsens для звичної дії."
      },
      {
        "id": "past",
        "label": "Минуле",
        "group": "Час",
        "de": "Früher lernte ich jeden Tag Deutsch.",
        "uk": "Раніше я щодня вивчав німецьку.",
        "tip": "Präteritum; у розмові частіше: Früher habe ich jeden Tag Deutsch gelernt."
      },
      {
        "id": "perfect",
        "label": "Perfekt",
        "group": "Час",
        "de": "Ich habe gestern Deutsch gelernt.",
        "uk": "Учора я вчив німецьку.",
        "tip": "Perfekt: haben + Partizip II."
      },
      {
        "id": "future",
        "label": "Майбутнє",
        "group": "Час",
        "de": "Morgen werde ich wieder Deutsch lernen.",
        "uk": "Завтра я знову вчитиму німецьку.",
        "tip": "У живій мові також: Morgen lerne ich Deutsch."
      },
      {
        "id": "question",
        "label": "Запитання",
        "group": "Спілкування",
        "de": "Lernst du jeden Tag Deutsch?",
        "uk": "Ти щодня вивчаєш німецьку?",
        "tip": "Так/ні запитання: Lernst на першому місці."
      },
      {
        "id": "reason",
        "label": "Причина",
        "group": "Зв’язки",
        "de": "Ich lerne jeden Tag Deutsch, weil ich flüssiger sprechen möchte.",
        "uk": "Я щодня вчу німецьку, тому що хочу говорити вільніше.",
        "tip": "Після weil möchte стоїть у кінці."
      },
      {
        "id": "contrast",
        "label": "Попри це",
        "group": "Зв’язки",
        "de": "Obwohl ich wenig Zeit habe, lerne ich jeden Tag Deutsch.",
        "uk": "Хоча в мене мало часу, я щодня вчу німецьку.",
        "tip": "Підрядна частина на першому місці, далі відразу lerne."
      },
      {
        "id": "hypothetical",
        "label": "Уявна умова",
        "group": "Умови",
        "de": "Wenn ich mehr Zeit hätte, würde ich jeden Tag länger Deutsch lernen.",
        "uk": "Якби я мав більше часу, я б щодня довше вчив німецьку.",
        "tip": "Konjunktiv II для нереальної теперішньої умови."
      },
      {
        "id": "regret",
        "label": "Жаль про минуле",
        "group": "Умови",
        "de": "Wenn ich früher jeden Tag Deutsch gelernt hätte, hätte ich das C1-Niveau schneller erreicht.",
        "uk": "Якби я раніше щодня вивчав німецьку, я б швидше досяг рівня C1.",
        "tip": "Konjunktiv II Vergangenheit в обох частинах."
      },
      {
        "id": "polite",
        "label": "Бажання",
        "group": "Спілкування",
        "de": "Ich würde gern jeden Tag Deutsch lernen.",
        "uk": "Я хотів би щодня вивчати німецьку.",
        "tip": "würde gern + інфінітив."
      },
      {
        "id": "negative",
        "label": "Заперечення",
        "group": "Спілкування",
        "de": "Ich lerne nicht jeden Tag Deutsch.",
        "uk": "Я не щодня вивчаю німецьку.",
        "tip": "nicht / kein: заперечення дії або іменника."
      },
      {
        "id": "deshalb",
        "label": "Наслідок: deshalb",
        "group": "Зв’язки",
        "de": "Ich möchte flüssiger sprechen. Deshalb lerne ich jeden Tag Deutsch.",
        "uk": "Я хочу говорити вільніше. Тому я щодня вчу німецьку.",
        "tip": "deshalb — прислівник, після нього в головному реченні стоїть відмінюване дієслово."
      },
      {
        "id": "trotzdem",
        "label": "Попри це: trotzdem",
        "group": "Зв’язки",
        "de": "Ich habe wenig Zeit. Trotzdem lerne ich jeden Tag Deutsch.",
        "uk": "У мене мало часу. Попри це я щодня вчу німецьку.",
        "tip": "trotzdem — прислівник; після нього дієслово займає друге місце."
      },
      {
        "id": "dass",
        "label": "Думка: dass",
        "group": "Зв’язки",
        "de": "Ich finde es wichtig, dass ich jeden Tag Deutsch lerne.",
        "uk": "Я вважаю важливим, що щодня вивчаю німецьку.",
        "tip": "Після dass відмінюване дієслово стоїть наприкінці підрядної частини."
      },
      {
        "id": "indirect",
        "label": "Непряме питання: ob",
        "group": "Спілкування",
        "de": "Ich frage mich, ob ich jeden Tag genug Deutsch lerne.",
        "uk": "Я запитую себе, чи достатньо вчу німецьку щодня.",
        "tip": "ob вводить непряме запитання «чи»; дієслово в кінці."
      },
      {
        "id": "relative",
        "label": "Relativsatz",
        "group": "Зв’язки",
        "de": "Das Deutsch, das ich jeden Tag lerne, hilft mir im Alltag.",
        "uk": "Німецька, яку я щодня вчу, допомагає мені в повсякденному житті.",
        "tip": "Відносний займенник узгоджується з іменником за родом і числом, а відмінок залежить від ролі в підрядному реченні."
      },
      {
        "id": "zu",
        "label": "Infinitiv mit zu",
        "group": "Зв’язки",
        "de": "Ich versuche, jeden Tag Deutsch zu lernen.",
        "uk": "Я намагаюся щодня вивчати німецьку.",
        "tip": "Інфінітивна конструкція з zu; з модальними дієсловами можливі складні форми."
      },
      {
        "id": "passive",
        "label": "Passiv",
        "group": "Стан",
        "de": "Deutsch wird in diesem Kurs jeden Tag gelernt.",
        "uk": "На цьому курсі німецьку вивчають щодня.",
        "tip": "werden + Partizip II. Пасив не завжди природний для кожного базового вислову."
      },
      {
        "id": "mixed",
        "label": "Змішана умова",
        "group": "Умови",
        "de": "Wenn ich früher jeden Tag Deutsch gelernt hätte, würde ich heute flüssiger sprechen.",
        "uk": "Якби я раніше щодня вчив німецьку, сьогодні говорив би вільніше.",
        "tip": "Минула нереальна умова + теперішній нереальний наслідок."
      },
      {
        "id": "concession",
        "label": "Навіть якщо: selbst wenn",
        "group": "Зв’язки",
        "de": "Selbst wenn ich wenig Zeit hätte, würde ich jeden Tag Deutsch lernen.",
        "uk": "Навіть якби я мав мало часу, я все одно щодня вчив би німецьку.",
        "tip": "selbst wenn + Konjunktiv II виражає гіпотетичну поступку."
      },
      {
        "id": "reported",
        "label": "Непряма мова: Konjunktiv I",
        "group": "Спілкування",
        "de": "Er sagt, er lerne jeden Tag Deutsch.",
        "uk": "Він каже, що щодня вивчає німецьку.",
        "tip": "lerne — Konjunktiv I у непрямій мові; форма збігається з Präsens для ich, але не для er."
      }
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
        "de": "Früher suchte ich eine neue Stelle.",
        "uk": "Раніше я шукав нову роботу.",
        "tip": "Präteritum: форма для розповіді про минуле."
      },
      {
        "id": "perfect",
        "label": "Perfekt",
        "group": "Час",
        "de": "Ich habe schon nach einer neuen Stelle gesucht.",
        "uk": "Я вже шукав нову роботу.",
        "tip": "Perfekt: допоміжне дієслово й Partizip II."
      },
      {
        "id": "future",
        "label": "Майбутнє",
        "group": "Час",
        "de": "Morgen werde ich weiter nach einer neuen Stelle suchen.",
        "uk": "Завтра я продовжу шукати нову роботу.",
        "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
      },
      {
        "id": "question",
        "label": "Запитання",
        "group": "Спілкування",
        "de": "Suchst du eine neue Stelle?",
        "uk": "Ти шукаєш нову роботу?",
        "tip": "У запитанні відмінюване дієслово стоїть на початку."
      },
      {
        "id": "reason",
        "label": "Причина",
        "group": "Зв’язки",
        "de": "Ich suche eine neue Stelle, weil ich mich beruflich weiterentwickeln möchte.",
        "uk": "Я шукаю нову роботу, тому що хочу професійно розвиватися.",
        "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "contrast",
        "label": "Попри це",
        "group": "Зв’язки",
        "de": "Obwohl ich bereits arbeite, suche ich eine neue Stelle.",
        "uk": "Хоча я вже працюю, я шукаю нову роботу.",
        "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "hypothetical",
        "label": "Уявна умова",
        "group": "Умови",
        "de": "Wenn ich mehr Zeit hätte, würde ich intensiver nach einer neuen Stelle suchen.",
        "uk": "Якби я мав більше часу, я б активніше шукав нову роботу.",
        "tip": "Konjunktiv II для уявної умови."
      },
      {
        "id": "regret",
        "label": "Жаль про минуле",
        "group": "Умови",
        "de": "Wenn ich früher nach einer neuen Stelle gesucht hätte, hätte ich vielleicht schon eine gefunden.",
        "uk": "Якби я почав шукати нову роботу раніше, можливо, уже знайшов би її.",
        "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
      },
      {
        "id": "polite",
        "label": "Ввічливе формулювання",
        "group": "Спілкування",
        "de": "Ich würde gern eine neue Stelle finden.",
        "uk": "Я хотів би знайти нову роботу.",
        "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
      },
      {
        "id": "negative",
        "label": "Заперечення",
        "group": "Спілкування",
        "de": "Ich suche im Moment keine neue Stelle.",
        "uk": "Зараз я не шукаю нову роботу.",
        "tip": "nicht / kein: заперечення дії або іменника."
      },
      {
        "id": "deshalb",
        "label": "Наслідок: deshalb",
        "group": "Зв’язки",
        "de": "Ich möchte mich weiterentwickeln. Deshalb suche ich eine neue Stelle.",
        "uk": "Я хочу розвиватися. Тому шукаю нову роботу.",
        "tip": "deshalb — прислівник, після нього в головному реченні стоїть відмінюване дієслово."
      },
      {
        "id": "trotzdem",
        "label": "Попри це: trotzdem",
        "group": "Зв’язки",
        "de": "Ich habe wenig Zeit. Trotzdem suche ich eine neue Stelle.",
        "uk": "У мене мало часу. Попри це я шукаю нову роботу.",
        "tip": "trotzdem — прислівник; після нього дієслово займає друге місце."
      },
      {
        "id": "dass",
        "label": "Підрядне: dass",
        "group": "Зв’язки",
        "de": "Ich hoffe, dass ich bald eine neue Stelle finde.",
        "uk": "Я сподіваюся, що скоро знайду нову роботу.",
        "tip": "Після dass відмінюване дієслово стоїть наприкінці підрядної частини."
      },
      {
        "id": "indirect",
        "label": "Непряме питання: ob",
        "group": "Спілкування",
        "de": "Ich frage mich, ob ich bald eine neue Stelle finde.",
        "uk": "Я запитую себе, чи скоро знайду нову роботу.",
        "tip": "ob вводить непряме запитання «чи»; дієслово в кінці."
      },
      {
        "id": "relative",
        "label": "Relativsatz",
        "group": "Зв’язки",
        "de": "Die Stelle, die ich suche, soll zu mir passen.",
        "uk": "Робота, яку я шукаю, має мені підходити.",
        "tip": "Відносний займенник узгоджується з іменником за родом і числом, а відмінок залежить від ролі в підрядному реченні."
      },
      {
        "id": "zu",
        "label": "Infinitiv mit zu",
        "group": "Зв’язки",
        "de": "Ich versuche, eine neue Stelle zu finden.",
        "uk": "Я намагаюся знайти нову роботу.",
        "tip": "Інфінітивна конструкція з zu; з модальними дієсловами можливі складні форми."
      },
      {
        "id": "mixed",
        "label": "Змішана умова",
        "group": "Умови",
        "de": "Wenn ich früher eine neue Stelle gesucht hätte, hätte ich jetzt vielleicht eine.",
        "uk": "Якби я раніше шукав нову роботу, можливо, зараз уже мав би її.",
        "tip": "Минула нереальна умова + теперішній нереальний наслідок."
      },
      {
        "id": "concession",
        "label": "Навіть якщо: selbst wenn",
        "group": "Зв’язки",
        "de": "Selbst wenn ich eine Absage bekäme, würde ich weiter nach einer neuen Stelle suchen.",
        "uk": "Навіть якби я отримав відмову, я продовжував би шукати нову роботу.",
        "tip": "bekäme і würde suchen — Konjunktiv II."
      },
      {
        "id": "reported",
        "label": "Непряма мова: Konjunktiv I",
        "group": "Спілкування",
        "de": "Sie sagt, sie suche eine neue Stelle.",
        "uk": "Вона каже, що шукає нову роботу.",
        "tip": "suche — Konjunktiv I у непрямій мові."
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
        "de": "Ich habe unseren Termin verschieben müssen.",
        "uk": "Мені довелося перенести нашу зустріч.",
        "tip": "Perfekt: допоміжне дієслово й Partizip II."
      },
      {
        "id": "future",
        "label": "Майбутнє",
        "group": "Час",
        "de": "Morgen werde ich unseren Termin verschieben müssen.",
        "uk": "Завтра мені доведеться перенести нашу зустріч.",
        "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
      },
      {
        "id": "question",
        "label": "Запитання",
        "group": "Спілкування",
        "de": "Musst du unseren Termin verschieben?",
        "uk": "Тобі потрібно перенести нашу зустріч?",
        "tip": "У запитанні відмінюване дієслово стоїть на початку."
      },
      {
        "id": "reason",
        "label": "Причина",
        "group": "Зв’язки",
        "de": "Ich muss unseren Termin verschieben, weil ich arbeiten muss.",
        "uk": "Мені потрібно перенести нашу зустріч, тому що я мушу працювати.",
        "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "contrast",
        "label": "Попри це",
        "group": "Зв’язки",
        "de": "Obwohl ich unseren Termin nicht verschieben möchte, muss ich es tun.",
        "uk": "Хоча я не хочу переносити нашу зустріч, мені доводиться це зробити.",
        "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "hypothetical",
        "label": "Уявна умова",
        "group": "Умови",
        "de": "Wenn ich mehr Zeit hätte, müsste ich unseren Termin nicht verschieben.",
        "uk": "Якби я мав більше часу, мені не довелося б переносити нашу зустріч.",
        "tip": "Konjunktiv II для уявної умови."
      },
      {
        "id": "regret",
        "label": "Жаль про минуле",
        "group": "Умови",
        "de": "Wenn ich besser geplant hätte, hätte ich unseren Termin nicht verschieben müssen.",
        "uk": "Якби я краще все спланував, мені не довелося б переносити нашу зустріч.",
        "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
      },
      {
        "id": "polite",
        "label": "Ввічливе формулювання",
        "group": "Спілкування",
        "de": "Ich würde unseren Termin gern verschieben.",
        "uk": "Я хотів би перенести нашу зустріч.",
        "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
      },
      {
        "id": "negative",
        "label": "Заперечення",
        "group": "Спілкування",
        "de": "Ich muss unseren Termin nicht verschieben.",
        "uk": "Мені не потрібно переносити нашу зустріч.",
        "tip": "nicht / kein: заперечення дії або іменника."
      },
      {
        "id": "deshalb",
        "label": "Наслідок: deshalb",
        "group": "Зв’язки",
        "de": "Ich muss heute länger arbeiten. Deshalb muss ich unseren Termin verschieben.",
        "uk": "Сьогодні мені потрібно довше працювати. Тому я мушу перенести нашу зустріч.",
        "tip": "deshalb — прислівник, після нього в головному реченні стоїть відмінюване дієслово."
      },
      {
        "id": "trotzdem",
        "label": "Попри це: trotzdem",
        "group": "Зв’язки",
        "de": "Ich habe wenig Zeit. Trotzdem muss ich unseren Termin nicht verschieben.",
        "uk": "У мене мало часу. Попри це мені не потрібно переносити нашу зустріч.",
        "tip": "trotzdem — прислівник; після нього дієслово займає друге місце."
      },
      {
        "id": "dass",
        "label": "Підрядне: dass",
        "group": "Зв’язки",
        "de": "Es tut mir leid, dass ich unseren Termin verschieben muss.",
        "uk": "Мені шкода, що я мушу перенести нашу зустріч.",
        "tip": "Після dass відмінюване дієслово стоїть наприкінці підрядної частини."
      },
      {
        "id": "indirect",
        "label": "Непряме питання: ob",
        "group": "Спілкування",
        "de": "Ich frage mich, ob ich unseren Termin verschieben muss.",
        "uk": "Я запитую себе, чи потрібно мені переносити нашу зустріч.",
        "tip": "ob вводить непряме запитання «чи»; дієслово в кінці."
      },
      {
        "id": "relative",
        "label": "Relativsatz",
        "group": "Зв’язки",
        "de": "Der Termin, den ich verschieben muss, ist wichtig.",
        "uk": "Зустріч, яку я мушу перенести, важлива.",
        "tip": "Відносний займенник узгоджується з іменником за родом і числом, а відмінок залежить від ролі в підрядному реченні."
      },
      {
        "id": "zu",
        "label": "Infinitiv mit zu",
        "group": "Зв’язки",
        "de": "Ich versuche, unseren Termin nicht verschieben zu müssen.",
        "uk": "Я намагаюся зробити так, щоб не довелося переносити нашу зустріч.",
        "tip": "Інфінітивна конструкція з zu; з модальними дієсловами можливі складні форми."
      },
      {
        "id": "mixed",
        "label": "Змішана умова",
        "group": "Умови",
        "de": "Wenn ich gestern alles erledigt hätte, müsste ich unseren Termin heute nicht verschieben.",
        "uk": "Якби я вчора все зробив, сьогодні мені не довелося б переносити нашу зустріч.",
        "tip": "Минула нереальна умова + теперішній нереальний наслідок."
      },
      {
        "id": "concession",
        "label": "Навіть якщо: selbst wenn",
        "group": "Зв’язки",
        "de": "Selbst wenn es dir nicht passt, müsste ich unseren Termin verschieben.",
        "uk": "Навіть якщо тобі це незручно, мені довелося б перенести нашу зустріч.",
        "tip": "selbst wenn вводить поступку; müsste — Konjunktiv II."
      },
      {
        "id": "reported",
        "label": "Непряма мова: Konjunktiv I",
        "group": "Спілкування",
        "de": "Er sagt, er müsse unseren Termin verschieben.",
        "uk": "Він каже, що мусить перенести нашу зустріч.",
        "tip": "müsse — Konjunktiv I від müssen."
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
        "de": "Ich habe das bisher anders gesehen.",
        "uk": "Досі я дивився на це інакше.",
        "tip": "Perfekt: допоміжне дієслово й Partizip II."
      },
      {
        "id": "future",
        "label": "Майбутнє",
        "group": "Час",
        "de": "Ich werde das wahrscheinlich weiterhin anders sehen.",
        "uk": "Я, мабуть, і надалі бачитиму це інакше.",
        "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
      },
      {
        "id": "question",
        "label": "Запитання",
        "group": "Спілкування",
        "de": "Siehst du das auch anders?",
        "uk": "Ти теж бачиш це інакше?",
        "tip": "У запитанні відмінюване дієслово стоїть на початку."
      },
      {
        "id": "reason",
        "label": "Причина",
        "group": "Зв’язки",
        "de": "Ich sehe das anders, weil ich andere Erfahrungen gemacht habe.",
        "uk": "Я бачу це інакше, тому що маю інший досвід.",
        "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "contrast",
        "label": "Попри це",
        "group": "Зв’язки",
        "de": "Obwohl ich deine Argumente verstehe, sehe ich das anders.",
        "uk": "Хоча я розумію твої аргументи, я бачу це інакше.",
        "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "hypothetical",
        "label": "Уявна умова",
        "group": "Умови",
        "de": "Wenn ich mehr Informationen hätte, würde ich das vielleicht anders sehen.",
        "uk": "Якби я мав більше інформації, можливо, дивився б на це інакше.",
        "tip": "Konjunktiv II для уявної умови."
      },
      {
        "id": "regret",
        "label": "Жаль про минуле",
        "group": "Умови",
        "de": "Wenn ich die Fakten früher gekannt hätte, hätte ich das anders gesehen.",
        "uk": "Якби я знав факти раніше, я б дивився на це інакше.",
        "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
      },
      {
        "id": "polite",
        "label": "Ввічливе формулювання",
        "group": "Спілкування",
        "de": "Ich würde das gern etwas anders darstellen.",
        "uk": "Я хотів би представити це трохи інакше.",
        "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
      },
      {
        "id": "negative",
        "label": "Заперечення",
        "group": "Спілкування",
        "de": "Ich sehe das nicht so.",
        "uk": "Я так не вважаю.",
        "tip": "nicht / kein: заперечення дії або іменника."
      },
      {
        "id": "deshalb",
        "label": "Наслідок: deshalb",
        "group": "Зв’язки",
        "de": "Ich habe andere Erfahrungen gemacht. Deshalb sehe ich das anders.",
        "uk": "Я маю інший досвід. Тому я бачу це інакше.",
        "tip": "deshalb — прислівник, після нього в головному реченні стоїть відмінюване дієслово."
      },
      {
        "id": "trotzdem",
        "label": "Попри це: trotzdem",
        "group": "Зв’язки",
        "de": "Ich verstehe deine Argumente. Trotzdem sehe ich das anders.",
        "uk": "Я розумію твої аргументи. Попри це я бачу це інакше.",
        "tip": "trotzdem — прислівник; після нього дієслово займає друге місце."
      },
      {
        "id": "dass",
        "label": "Підрядне: dass",
        "group": "Зв’язки",
        "de": "Ich glaube, dass ich das anders sehe.",
        "uk": "Я думаю, що бачу це інакше.",
        "tip": "Після dass відмінюване дієслово стоїть наприкінці підрядної частини."
      },
      {
        "id": "indirect",
        "label": "Непряме питання: ob",
        "group": "Спілкування",
        "de": "Ich frage mich, ob du das auch anders siehst.",
        "uk": "Я запитую себе, чи ти теж бачиш це інакше.",
        "tip": "ob вводить непряме запитання «чи»; дієслово в кінці."
      },
      {
        "id": "relative",
        "label": "Relativsatz",
        "group": "Зв’язки",
        "de": "Die Frage, die ich anders sehe, ist wichtig.",
        "uk": "Питання, на яке я дивлюся інакше, важливе.",
        "tip": "Відносний займенник узгоджується з іменником за родом і числом, а відмінок залежить від ролі в підрядному реченні."
      },
      {
        "id": "zu",
        "label": "Infinitiv mit zu",
        "group": "Зв’язки",
        "de": "Ich versuche, das auch aus deiner Sicht zu sehen.",
        "uk": "Я намагаюся подивитися на це також із твоєї точки зору.",
        "tip": "Інфінітивна конструкція з zu; з модальними дієсловами можливі складні форми."
      },
      {
        "id": "mixed",
        "label": "Змішана умова",
        "group": "Умови",
        "de": "Wenn ich deine Erklärung früher gehört hätte, würde ich das heute vielleicht anders sehen.",
        "uk": "Якби я раніше почув твоє пояснення, сьогодні, можливо, дивився б на це інакше.",
        "tip": "Минула нереальна умова + теперішній нереальний наслідок."
      },
      {
        "id": "concession",
        "label": "Навіть якщо: selbst wenn",
        "group": "Зв’язки",
        "de": "Selbst wenn alle anderer Meinung wären, würde ich das anders sehen.",
        "uk": "Навіть якби всі мали іншу думку, я все одно бачив би це інакше.",
        "tip": "wären і würde sehen — Konjunktiv II."
      },
      {
        "id": "reported",
        "label": "Непряма мова: Konjunktiv I",
        "group": "Спілкування",
        "de": "Sie sagt, sie sehe das anders.",
        "uk": "Вона каже, що бачить це інакше.",
        "tip": "sehe — Konjunktiv I від sehen."
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
        "de": "Ich mache einen Fehler.",
        "uk": "Я роблю помилку.",
        "tip": "Präsens: зверни увагу на позицію відмінюваного дієслова."
      },
      {
        "id": "past",
        "label": "Минуле",
        "group": "Час",
        "de": "Gestern machte ich einen Fehler.",
        "uk": "Учора я зробив помилку.",
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
        "de": "Ich werde diesen Fehler nicht noch einmal machen.",
        "uk": "Я більше не зроблю цієї помилки.",
        "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
      },
      {
        "id": "question",
        "label": "Запитання",
        "group": "Спілкування",
        "de": "Habe ich einen Fehler gemacht?",
        "uk": "Я припустився помилки?",
        "tip": "У запитанні відмінюване дієслово стоїть на початку."
      },
      {
        "id": "reason",
        "label": "Причина",
        "group": "Зв’язки",
        "de": "Ich habe einen Fehler gemacht, weil ich nicht aufgepasst habe.",
        "uk": "Я припустився помилки, тому що був неуважним.",
        "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "contrast",
        "label": "Попри це",
        "group": "Зв’язки",
        "de": "Obwohl ich vorsichtig war, habe ich einen Fehler gemacht.",
        "uk": "Хоча я був уважним, я припустився помилки.",
        "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "hypothetical",
        "label": "Уявна умова",
        "group": "Умови",
        "de": "Wenn ich besser aufpassen würde, würde ich diesen Fehler nicht machen.",
        "uk": "Якби я був уважнішим, я б не робив цієї помилки.",
        "tip": "Konjunktiv II для уявної умови."
      },
      {
        "id": "regret",
        "label": "Жаль про минуле",
        "group": "Умови",
        "de": "Wenn ich besser aufgepasst hätte, hätte ich diesen Fehler nicht gemacht.",
        "uk": "Якби я був уважнішим, я б не припустився цієї помилки.",
        "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
      },
      {
        "id": "polite",
        "label": "Ввічливе формулювання",
        "group": "Спілкування",
        "de": "Ich würde diesen Fehler gern korrigieren.",
        "uk": "Я хотів би виправити цю помилку.",
        "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
      },
      {
        "id": "negative",
        "label": "Заперечення",
        "group": "Спілкування",
        "de": "Ich habe keinen Fehler gemacht.",
        "uk": "Я не припустився помилки.",
        "tip": "nicht / kein: заперечення дії або іменника."
      },
      {
        "id": "deshalb",
        "label": "Наслідок: deshalb",
        "group": "Зв’язки",
        "de": "Ich war unaufmerksam. Deshalb habe ich einen Fehler gemacht.",
        "uk": "Я був неуважним. Тому припустився помилки.",
        "tip": "deshalb — прислівник, після нього в головному реченні стоїть відмінюване дієслово."
      },
      {
        "id": "trotzdem",
        "label": "Попри це: trotzdem",
        "group": "Зв’язки",
        "de": "Ich habe alles geprüft. Trotzdem habe ich einen Fehler gemacht.",
        "uk": "Я все перевірив. Попри це припустився помилки.",
        "tip": "trotzdem — прислівник; після нього дієслово займає друге місце."
      },
      {
        "id": "dass",
        "label": "Підрядне: dass",
        "group": "Зв’язки",
        "de": "Ich weiß, dass ich einen Fehler gemacht habe.",
        "uk": "Я знаю, що припустився помилки.",
        "tip": "Після dass відмінюване дієслово стоїть наприкінці підрядної частини."
      },
      {
        "id": "indirect",
        "label": "Непряме питання: ob",
        "group": "Спілкування",
        "de": "Ich frage mich, ob ich einen Fehler gemacht habe.",
        "uk": "Я запитую себе, чи припустився помилки.",
        "tip": "ob вводить непряме запитання «чи»; дієслово в кінці."
      },
      {
        "id": "relative",
        "label": "Relativsatz",
        "group": "Зв’язки",
        "de": "Der Fehler, den ich gemacht habe, tut mir leid.",
        "uk": "Мені шкода через помилку, якої я припустився.",
        "tip": "Відносний займенник узгоджується з іменником за родом і числом, а відмінок залежить від ролі в підрядному реченні."
      },
      {
        "id": "zu",
        "label": "Infinitiv mit zu",
        "group": "Зв’язки",
        "de": "Ich versuche, diesen Fehler nicht noch einmal zu machen.",
        "uk": "Я намагаюся більше не робити цієї помилки.",
        "tip": "Інфінітивна конструкція з zu; з модальними дієсловами можливі складні форми."
      },
      {
        "id": "mixed",
        "label": "Змішана умова",
        "group": "Умови",
        "de": "Wenn ich gestern besser aufgepasst hätte, müsste ich diesen Fehler heute nicht korrigieren.",
        "uk": "Якби я вчора був уважнішим, сьогодні не довелося б виправляти цю помилку.",
        "tip": "Минула нереальна умова + теперішній нереальний наслідок."
      },
      {
        "id": "concession",
        "label": "Навіть якщо: selbst wenn",
        "group": "Зв’язки",
        "de": "Selbst wenn ich mich sehr bemühen würde, könnte ich noch einen Fehler machen.",
        "uk": "Навіть якби я дуже старався, усе одно міг би припуститися помилки.",
        "tip": "selbst wenn із Konjunktiv II показує, що результат не гарантований."
      },
      {
        "id": "reported",
        "label": "Непряма мова: Konjunktiv I",
        "group": "Спілкування",
        "de": "Er sagt, er habe einen Fehler gemacht.",
        "uk": "Він каже, що припустився помилки.",
        "tip": "habe — Konjunktiv I у непрямій мові про минуле."
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
        "de": "Früher suchte ich eine größere Wohnung.",
        "uk": "Раніше я шукав більшу квартиру.",
        "tip": "Präteritum: форма для розповіді про минуле."
      },
      {
        "id": "perfect",
        "label": "Perfekt",
        "group": "Час",
        "de": "Ich habe schon nach einer größeren Wohnung gesucht.",
        "uk": "Я вже шукав більшу квартиру.",
        "tip": "Perfekt: допоміжне дієслово й Partizip II."
      },
      {
        "id": "future",
        "label": "Майбутнє",
        "group": "Час",
        "de": "Morgen werde ich weiter nach einer größeren Wohnung suchen.",
        "uk": "Завтра я продовжу шукати більшу квартиру.",
        "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
      },
      {
        "id": "question",
        "label": "Запитання",
        "group": "Спілкування",
        "de": "Suchst du eine größere Wohnung?",
        "uk": "Ти шукаєш більшу квартиру?",
        "tip": "У запитанні відмінюване дієслово стоїть на початку."
      },
      {
        "id": "reason",
        "label": "Причина",
        "group": "Зв’язки",
        "de": "Ich suche eine größere Wohnung, weil ich mehr Platz brauche.",
        "uk": "Я шукаю більшу квартиру, тому що мені потрібно більше місця.",
        "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "contrast",
        "label": "Попри це",
        "group": "Зв’язки",
        "de": "Obwohl meine jetzige Wohnung schön ist, suche ich eine größere.",
        "uk": "Хоча моя теперішня квартира гарна, я шукаю більшу.",
        "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "hypothetical",
        "label": "Уявна умова",
        "group": "Умови",
        "de": "Wenn ich mehr Geld hätte, würde ich eine größere Wohnung suchen.",
        "uk": "Якби я мав більше грошей, я б шукав більшу квартиру.",
        "tip": "Konjunktiv II для уявної умови."
      },
      {
        "id": "regret",
        "label": "Жаль про минуле",
        "group": "Умови",
        "de": "Wenn ich früher nach einer größeren Wohnung gesucht hätte, hätte ich vielleicht schon eine gefunden.",
        "uk": "Якби я раніше шукав більшу квартиру, можливо, уже знайшов би її.",
        "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
      },
      {
        "id": "polite",
        "label": "Ввічливе формулювання",
        "group": "Спілкування",
        "de": "Ich würde gern eine größere Wohnung finden.",
        "uk": "Я хотів би знайти більшу квартиру.",
        "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
      },
      {
        "id": "negative",
        "label": "Заперечення",
        "group": "Спілкування",
        "de": "Ich suche keine größere Wohnung.",
        "uk": "Я не шукаю більшу квартиру.",
        "tip": "nicht / kein: заперечення дії або іменника."
      },
      {
        "id": "deshalb",
        "label": "Наслідок: deshalb",
        "group": "Зв’язки",
        "de": "Ich brauche mehr Platz. Deshalb suche ich eine größere Wohnung.",
        "uk": "Мені потрібно більше місця. Тому я шукаю більшу квартиру.",
        "tip": "deshalb — прислівник, після нього в головному реченні стоїть відмінюване дієслово."
      },
      {
        "id": "trotzdem",
        "label": "Попри це: trotzdem",
        "group": "Зв’язки",
        "de": "Die Mieten sind hoch. Trotzdem suche ich eine größere Wohnung.",
        "uk": "Оренда дорога. Попри це я шукаю більшу квартиру.",
        "tip": "trotzdem — прислівник; після нього дієслово займає друге місце."
      },
      {
        "id": "dass",
        "label": "Підрядне: dass",
        "group": "Зв’язки",
        "de": "Ich hoffe, dass ich eine größere Wohnung finde.",
        "uk": "Я сподіваюся, що знайду більшу квартиру.",
        "tip": "Після dass відмінюване дієслово стоїть наприкінці підрядної частини."
      },
      {
        "id": "indirect",
        "label": "Непряме питання: ob",
        "group": "Спілкування",
        "de": "Ich frage mich, ob ich eine größere Wohnung finde.",
        "uk": "Я запитую себе, чи знайду більшу квартиру.",
        "tip": "ob вводить непряме запитання «чи»; дієслово в кінці."
      },
      {
        "id": "relative",
        "label": "Relativsatz",
        "group": "Зв’язки",
        "de": "Die Wohnung, die ich suche, soll größer sein.",
        "uk": "Квартира, яку я шукаю, має бути більшою.",
        "tip": "Відносний займенник узгоджується з іменником за родом і числом, а відмінок залежить від ролі в підрядному реченні."
      },
      {
        "id": "zu",
        "label": "Infinitiv mit zu",
        "group": "Зв’язки",
        "de": "Ich versuche, eine größere Wohnung zu finden.",
        "uk": "Я намагаюся знайти більшу квартиру.",
        "tip": "Інфінітивна конструкція з zu; з модальними дієсловами можливі складні форми."
      },
      {
        "id": "mixed",
        "label": "Змішана умова",
        "group": "Умови",
        "de": "Wenn ich früher eine größere Wohnung gesucht hätte, hätte ich jetzt vielleicht mehr Platz.",
        "uk": "Якби я раніше шукав більшу квартиру, можливо, зараз мав би більше місця.",
        "tip": "Минула нереальна умова + теперішній нереальний наслідок."
      },
      {
        "id": "concession",
        "label": "Навіть якщо: selbst wenn",
        "group": "Зв’язки",
        "de": "Selbst wenn die Mieten weiter steigen würden, würde ich eine größere Wohnung suchen.",
        "uk": "Навіть якби оренда продовжила дорожчати, я все одно шукав би більшу квартиру.",
        "tip": "selbst wenn + Konjunktiv II виражає поступку."
      },
      {
        "id": "reported",
        "label": "Непряма мова: Konjunktiv I",
        "group": "Спілкування",
        "de": "Er sagt, er suche eine größere Wohnung.",
        "uk": "Він каже, що шукає більшу квартиру.",
        "tip": "suche — Konjunktiv I у непрямій мові."
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
        "de": "Früher wollte ich etwas in meinem Leben ändern.",
        "uk": "Раніше я хотів щось змінити у своєму житті.",
        "tip": "Präteritum: форма для розповіді про минуле."
      },
      {
        "id": "perfect",
        "label": "Perfekt",
        "group": "Час",
        "de": "Ich habe schon versucht, etwas in meinem Leben zu ändern.",
        "uk": "Я вже намагався щось змінити у своєму житті.",
        "tip": "Perfekt: допоміжне дієслово й Partizip II."
      },
      {
        "id": "future",
        "label": "Майбутнє",
        "group": "Час",
        "de": "Ich werde bald etwas in meinem Leben ändern.",
        "uk": "Незабаром я щось зміню у своєму житті.",
        "tip": "Futur I: werden + Infinitiv; у розмові часто можливий Präsens."
      },
      {
        "id": "question",
        "label": "Запитання",
        "group": "Спілкування",
        "de": "Möchtest du etwas in deinem Leben ändern?",
        "uk": "Ти хочеш щось змінити у своєму житті?",
        "tip": "У запитанні відмінюване дієслово стоїть на початку."
      },
      {
        "id": "reason",
        "label": "Причина",
        "group": "Зв’язки",
        "de": "Ich möchte etwas in meinem Leben ändern, weil ich unzufrieden bin.",
        "uk": "Я хочу щось змінити у своєму житті, тому що я незадоволений.",
        "tip": "Після weil відмінюване дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "contrast",
        "label": "Попри це",
        "group": "Зв’язки",
        "de": "Obwohl Veränderungen schwierig sind, möchte ich etwas in meinem Leben ändern.",
        "uk": "Хоча зміни складні, я хочу щось змінити у своєму житті.",
        "tip": "Після obwohl дієслово стоїть у кінці підрядної частини."
      },
      {
        "id": "hypothetical",
        "label": "Уявна умова",
        "group": "Умови",
        "de": "Wenn ich mehr Mut hätte, würde ich etwas in meinem Leben ändern.",
        "uk": "Якби я мав більше сміливості, я б щось змінив у своєму житті.",
        "tip": "Konjunktiv II для уявної умови."
      },
      {
        "id": "regret",
        "label": "Жаль про минуле",
        "group": "Умови",
        "de": "Wenn ich früher etwas in meinem Leben geändert hätte, wäre ich heute zufriedener.",
        "uk": "Якби я раніше щось змінив у своєму житті, сьогодні був би задоволенішим.",
        "tip": "Konjunktiv II Vergangenheit для нереальної минулої умови."
      },
      {
        "id": "polite",
        "label": "Ввічливе формулювання",
        "group": "Спілкування",
        "de": "Ich würde gern etwas in meinem Leben ändern.",
        "uk": "Я хотів би щось змінити у своєму житті.",
        "tip": "Ввічливість: Konjunktiv II або м'яке формулювання."
      },
      {
        "id": "negative",
        "label": "Заперечення",
        "group": "Спілкування",
        "de": "Ich möchte im Moment nichts in meinem Leben ändern.",
        "uk": "Зараз я не хочу нічого змінювати у своєму житті.",
        "tip": "nicht / kein: заперечення дії або іменника."
      },
      {
        "id": "deshalb",
        "label": "Наслідок: deshalb",
        "group": "Зв’язки",
        "de": "Ich bin unzufrieden. Deshalb möchte ich etwas in meinem Leben ändern.",
        "uk": "Я незадоволений. Тому хочу щось змінити у своєму житті.",
        "tip": "deshalb — прислівник, після нього в головному реченні стоїть відмінюване дієслово."
      },
      {
        "id": "trotzdem",
        "label": "Попри це: trotzdem",
        "group": "Зв’язки",
        "de": "Veränderungen machen mir Angst. Trotzdem möchte ich etwas in meinem Leben ändern.",
        "uk": "Зміни мене лякають. Попри це я хочу щось змінити у своєму житті.",
        "tip": "trotzdem — прислівник; після нього дієслово займає друге місце."
      },
      {
        "id": "dass",
        "label": "Підрядне: dass",
        "group": "Зв’язки",
        "de": "Ich weiß, dass ich etwas in meinem Leben ändern möchte.",
        "uk": "Я знаю, що хочу щось змінити у своєму житті.",
        "tip": "Після dass відмінюване дієслово стоїть наприкінці підрядної частини."
      },
      {
        "id": "indirect",
        "label": "Непряме питання: ob",
        "group": "Спілкування",
        "de": "Ich frage mich, ob ich wirklich etwas in meinem Leben ändern möchte.",
        "uk": "Я запитую себе, чи справді хочу щось змінити у своєму житті.",
        "tip": "ob вводить непряме запитання «чи»; дієслово в кінці."
      },
      {
        "id": "relative",
        "label": "Relativsatz",
        "group": "Зв’язки",
        "de": "Die Dinge, die ich in meinem Leben ändern möchte, sind mir wichtig.",
        "uk": "Речі, які я хочу змінити у своєму житті, важливі для мене.",
        "tip": "Відносний займенник узгоджується з іменником за родом і числом, а відмінок залежить від ролі в підрядному реченні."
      },
      {
        "id": "zu",
        "label": "Infinitiv mit zu",
        "group": "Зв’язки",
        "de": "Ich versuche, etwas in meinem Leben zu ändern.",
        "uk": "Я намагаюся щось змінити у своєму житті.",
        "tip": "Інфінітивна конструкція з zu; з модальними дієсловами можливі складні форми."
      },
      {
        "id": "mixed",
        "label": "Змішана умова",
        "group": "Умови",
        "de": "Wenn ich früher etwas in meinem Leben geändert hätte, wäre ich heute vielleicht glücklicher.",
        "uk": "Якби я раніше щось змінив у своєму житті, сьогодні, можливо, був би щасливішим.",
        "tip": "Минула нереальна умова + теперішній нереальний наслідок."
      },
      {
        "id": "concession",
        "label": "Навіть якщо: selbst wenn",
        "group": "Зв’язки",
        "de": "Selbst wenn Veränderungen schwierig wären, würde ich etwas in meinem Leben ändern.",
        "uk": "Навіть якби зміни були складними, я все одно щось змінив би у своєму житті.",
        "tip": "wären і würde ändern — Konjunktiv II."
      },
      {
        "id": "reported",
        "label": "Непряма мова: Konjunktiv I",
        "group": "Спілкування",
        "de": "Sie sagt, sie wolle etwas in ihrem Leben ändern.",
        "uk": "Вона каже, що хоче щось змінити у своєму житті.",
        "tip": "wolle — Konjunktiv I від wollen."
      }
    ]
  },
  {
    "id": "appointment-passive",
    "title": "Перенесення зустрічі · Aktiv / Passiv",
    "context": "Потрібно перенести домовлену зустріч. Ти пояснюєш це колезі або другу.",
    "core": "Ich muss den Termin verschieben.",
    "translation": "Мені потрібно перенести зустріч.",
    "variants": [
      {
        "id": "present",
        "label": "Актив: зараз",
        "group": "Час",
        "de": "Ich muss den Termin verschieben.",
        "uk": "Мені потрібно перенести зустріч.",
        "tip": "Активна конструкція з müssen: muss + verschieben.",
        "level": 1,
        "type": "direct"
      },
      {
        "id": "past",
        "label": "Актив: минуле",
        "group": "Час",
        "de": "Ich musste den Termin verschieben.",
        "uk": "Мені довелося перенести зустріч.",
        "tip": "Präteritum від müssen: musste.",
        "level": 1,
        "type": "direct"
      },
      {
        "id": "perfect",
        "label": "Актив: Perfekt",
        "group": "Час",
        "de": "Ich habe den Termin verschoben.",
        "uk": "Я переніс зустріч.",
        "tip": "Perfekt: haben + verschoben. Дуже природна розмовна форма.",
        "level": 1,
        "type": "direct"
      },
      {
        "id": "question",
        "label": "Запитання",
        "group": "Спілкування",
        "de": "Müssen wir den Termin verschieben?",
        "uk": "Нам потрібно перенести зустріч?",
        "tip": "У запитанні müssen стоїть на першому місці.",
        "level": 1,
        "type": "direct"
      },
      {
        "id": "reason",
        "label": "Причина: weil",
        "group": "Зв’язки",
        "de": "Ich muss den Termin verschieben, weil ich arbeiten muss.",
        "uk": "Мені потрібно перенести зустріч, тому що я мушу працювати.",
        "tip": "Після weil відмінюване дієслово переходить у кінець.",
        "level": 2,
        "type": "extension"
      },
      {
        "id": "polite",
        "label": "Ввічливе прохання",
        "group": "Спілкування",
        "de": "Könnten wir den Termin bitte verschieben?",
        "uk": "Чи могли б ми, будь ласка, перенести зустріч?",
        "tip": "Könnten wir ...? — звичайне ввічливе прохання.",
        "level": 2,
        "type": "extension"
      },
      {
        "id": "passive-present",
        "label": "Passiv: зараз",
        "group": "Стан",
        "de": "Der Termin wird verschoben.",
        "uk": "Зустріч переносять.",
        "tip": "Vorgangspassiv: werden + Partizip II. Важлива сама дія, а не виконавець.",
        "level": 2,
        "type": "perspective"
      },
      {
        "id": "passive-past",
        "label": "Passiv: минуле",
        "group": "Стан",
        "de": "Der Termin wurde verschoben.",
        "uk": "Зустріч перенесли.",
        "tip": "Präteritum Passiv: wurde + Partizip II.",
        "level": 3,
        "type": "perspective"
      },
      {
        "id": "passive-perfect",
        "label": "Passiv: Perfekt",
        "group": "Стан",
        "de": "Der Termin ist verschoben worden.",
        "uk": "Зустріч перенесли.",
        "tip": "Perfekt Passiv: ist + Partizip II + worden. У побуті часто простіше: Der Termin wurde verschoben.",
        "level": 3,
        "type": "perspective"
      },
      {
        "id": "passive-modal",
        "label": "Passiv + müssen",
        "group": "Стан",
        "de": "Der Termin muss verschoben werden.",
        "uk": "Зустріч потрібно перенести.",
        "tip": "Модальне дієслово + Partizip II + werden.",
        "level": 3,
        "type": "perspective"
      },
      {
        "id": "passive-question",
        "label": "Запитання в Passiv",
        "group": "Стан",
        "de": "Wurde der Termin schon verschoben?",
        "uk": "Зустріч уже перенесли?",
        "tip": "Passiv Präteritum у запитанні: Wurde + підмет + Partizip II.",
        "level": 3,
        "type": "perspective"
      },
      {
        "id": "passive-weil",
        "label": "Passiv + weil",
        "group": "Стан",
        "de": "Der Termin wird verschoben, weil der Raum nicht frei ist.",
        "uk": "Зустріч переносять, тому що приміщення зайняте.",
        "tip": "Поєднання пасиву з причиною; ist наприкінці weil-речення.",
        "level": 3,
        "type": "perspective"
      },
      {
        "id": "passive-dass",
        "label": "Passiv + dass",
        "group": "Стан",
        "de": "Ich hoffe, dass der Termin nicht verschoben werden muss.",
        "uk": "Сподіваюся, що зустріч не доведеться переносити.",
        "tip": "У підрядному реченні з dass модальне muss стоїть наприкінці.",
        "level": 4,
        "type": "perspective"
      },
      {
        "id": "state-passive",
        "label": "Результат: Zustandspassiv",
        "group": "Стан",
        "de": "Der Termin ist jetzt verschoben.",
        "uk": "Тепер зустріч уже перенесена.",
        "tip": "sein + Partizip II підкреслює результат, а не процес.",
        "level": 4,
        "type": "perspective"
      }
    ]
  }
];
