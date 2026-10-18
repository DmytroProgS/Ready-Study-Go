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
  }
];
