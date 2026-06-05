export const phrasesGroups = [
  {
    de: 'Jobcenter / Arbeitsagentur',
    ua: 'Центр зайнятості / Служба зайнятості',
    color: 'blue',
    items: [
      {
        ua: 'Я шукаю роботу',
        de: 'Ich suche eine Arbeitsstelle / einen Job.',
      },
      {
        ua: 'Я зареєстрований(-а) як безробітний(-а)',
        de: 'Ich bin arbeitslos angemeldet.',
      },
      {
        ua: 'Мені потрібна допомога при пошуку роботи',
        de: 'Ich brauche Hilfe bei der Jobsuche.',
      },
      {
        ua: 'Чи є у вас вакансії в галузі...?',
        de: 'Haben Sie Stellenangebote im Bereich ...?',
      },
      {
        ua: 'Я маю досвід роботи в...',
        de: 'Ich habe Berufserfahrung im Bereich ...',
      },
      {
        ua: 'Мої ключові компетенції включають...',
        de: 'Meine Kernkompetenzen sind ...',
      },
      {
        ua: 'Я готовий(-а) пройти навчання / перекваліфікацію',
        de: 'Ich bin bereit, eine Schulung / Umschulung zu machen.',
      },
      {
        ua: 'Чи можете ви рекомендувати мене для цієї посади?',
        de: 'Können Sie mich für diese Stelle empfehlen?',
      },
      {
        ua: 'Мені потрібна довідка про безробіття',
        de: 'Ich brauche eine Arbeitslosen-Bescheinigung.',
      },
      {
        ua: 'Коли я можу отримати результати?',
        de: 'Wann kann ich mit den Ergebnissen rechnen?',
      },
    ],
  },
  {
    de: 'Weiterbildung (Bildungsgutschein)',
    ua: 'Навчання (Ваучер)',
    color: 'blue',
    type: 'qa',
    items: [
      {
        question_de: 'Erzählen Sie kurz von sich.',
        question_ua: 'Розкажіть коротко про себе.',
        answer_ua: 'Я маю кілька років досвіду та хочу покращити свою кваліфікацію через це навчання.',
        answer_de: 'Ich habe mehrere Jahre Berufserfahrung und möchte mich durch diese Weiterbildung weiterqualifizieren.',
      },
      {
        question_de: 'Warum brauchen Sie diese Weiterbildung trotz Ihrer Berufserfahrung?',
        question_ua: 'Навіщо вам навчання, якщо у вас уже є досвід?',
        answer_ua: 'Мій досвід формально тут не визнається. З німецьким сертифікатом я став придатним для працевлаштування.',
        answer_de: 'Meine Erfahrung ist formal hier nicht anerkannt. Mit einem deutschen Zertifikat bin ich für Arbeitgeber vermittelbar.',
      },
      {
        question_de: 'Haben Sie sich schon beworben?',
        question_ua: 'Ви вже подавали заявки на роботу?',
        answer_ua: 'Так, але без визнаного в Німеччині сертифіката я майже не отримую відповідей.',
        answer_de: 'Ja, aber ohne ein in Deutschland anerkanntes Zertifikat bekomme ich kaum Rückmeldungen.',
      },
      {
        question_de: 'Warum gerade dieser Anbieter und kein anderer?',
        question_ua: 'Чому саме цей провайдер, а не інший?',
        answer_ua: 'Я порівняв кілька провайдерів. Цей пропонує визнаний сертифікат і сертифікований за AZAV.',
        answer_de: 'Ich habe mehrere Anbieter verglichen. Dieser bietet ein anerkanntes Zertifikat und ist AZAV-zertifiziert.',
      },
      {
        question_de: 'Schaffen Sie den Kurs auf Deutsch?',
        question_ua: 'Чи впораєтесь із курсом німецькою?',
        answer_ua: 'Так. Я маю B2-сертифікат та продовжую навчатися. Курс додатково покращить мою фахову мову.',
        answer_de: 'Ja, ich habe das B2-Zertifikat und lerne weiter. Der Kurs verbessert zusätzlich meine Fachsprache.',
      },
      {
        question_de: 'Gibt es dafür offene Stellen auf dem Arbeitsmarkt?',
        question_ua: 'Чи є взагалі вакансії в цій галузі?',
        answer_ua: 'Так, дуже багато. У цьому регіоні є сотні відкритих вакансій в цій сфері.',
        answer_de: 'Ja, sehr viele. In dieser Region gibt es hunderte offene Stellen in diesem Bereich.',
      },
      {
        question_de: 'Was möchten Sie nach der Weiterbildung machen?',
        question_ua: 'Що ви плануєте робити після навчання?',
        answer_ua: 'Я хочу працювати як фахівець у цій галузі та швидко знайти відповідну роботу.',
        answer_de: 'Ich möchte als Spezialist in diesem Bereich arbeiten und schnell eine passende Stelle finden.',
      },
      {
        question_de: 'Warum sollten wir das fördern?',
        question_ua: 'Чому ми маємо це фінансувати?',
        answer_ua: 'З дипломом я швидко знайду роботу й більше не залежатиму від допомоги. Це найкраще рішення для обох сторін.',
        answer_de: 'Mit dem Abschluss finde ich schnell eine Stelle und bin nicht mehr auf Unterstützung angewiesen. Das ist für beide Seiten die beste Lösung.',
      },
      {
        question_de: 'Was passiert, wenn die Bewilligung nicht rechtzeitig klappt?',
        question_ua: 'А якщо рішення не встигнуть ухвалити до терміну?',
        answer_ua: 'Для цього я про запас приніс альтернативний Angebot зі стартом пізніше.',
        answer_de: 'Dafür habe ich vorsorglich ein alternatives Angebot mitgebracht mit einem späteren Startdatum.',
      },
      {
        question_de: 'Was muss ich tun, sobald ich den Bildungsgutschein habe?',
        question_ua: 'Що робити, щойно отримаю ваучер?',
        answer_ua: 'Ви контактуєте провайдера, подаєте необхідні документи і узгоджуєте дату початку.',
        answer_de: 'Sie kontaktieren den Anbieter, reichen die notwendigen Unterlagen ein und vereinbaren einen Starttermin.',
      },
    ],
  },
  {
    de: 'Bewerbungsgespräch',
    ua: 'Інтерв\'ю при прийомі на роботу',
    color: 'green',
    items: [
      {
        ua: 'Спасибі за можливість поговорити з вами',
        de: 'Vielen Dank für die Gelegenheit, mit Ihnen zu sprechen.',
      },
      {
        ua: 'Я дуже зацікавлений(-а) цією посадою',
        de: 'Ich bin sehr interessiert an dieser Position.',
      },
      {
        ua: 'Мою мотивацію можна охарактеризувати як...',
        de: 'Meine Motivation lässt sich folgendermaßen beschreiben:',
      },
      {
        ua: 'Я вважаю себе придатним(-ою) для цієї ролі, тому що...',
        de: 'Ich halte mich für geeignet für diese Rolle, weil ...',
      },
      {
        ua: 'Мої сильні сторони - це...',
        de: 'Meine Stärken sind ...',
      },
      {
        ua: 'Мене привабила ця компанія, оскільки...',
        de: 'Mich hat diese Firma gereizt, weil ...',
      },
      {
        ua: 'Я можу запропонувати наступні навички...',
        de: 'Ich kann folgende Fähigkeiten anbieten:',
      },
      {
        ua: 'У попередній посаді я був(-а) відповідальним(-ою) за...',
        de: 'In meiner vorherigen Position war ich zuständig für ...',
      },
      {
        ua: 'Я готовий(-а) прийняти виклики і розвиватися',
        de: 'Ich bin bereit, Herausforderungen anzunehmen und mich weiterzuentwickeln.',
      },
      {
        ua: 'Коли ви плануєте прийняти рішення?',
        de: 'Wann planen Sie, eine Entscheidung zu treffen?',
      },
      {
        ua: 'Чи маєте ви якісь питання щодо мого резюме?',
        de: 'Haben Sie Fragen zu meinem Lebenslauf?',
      },
      {
        ua: 'Які обов\'язки мають більше всього пріоритету?',
        de: 'Welche Aufgaben haben die höchste Priorität?',
      },
    ],
  },
];
