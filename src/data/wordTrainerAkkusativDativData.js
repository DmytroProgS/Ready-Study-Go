// Akkusativ & Dativ - Сталі прийменники
// Прийменники, які жорстко прив'язані до одного відмінка

export const akkusativDativExercises = [
  // FÜR + Akkusativ
  {
    id: 1,
    type: 'article-choice', // тип вправи: вибір артикля
    german: 'Das Geschenk ist ____ (die) Mutter.',
    answer: 'für',
    explanation: 'für завжди + Akkusativ (die Mutter → die)',
    category: 'für + Akk',
    hint: '[Для кого?] für + Akkusativ',
  },
  {
    id: 2,
    type: 'article-choice',
    german: 'Ich kaufe Blumen ____ (die) Oma.',
    answer: 'für',
    explanation: 'для комусь - це для + Akkusativ',
    category: 'für + Akk',
    hint: '[Для кого?]',
  },
  {
    id: 3,
    type: 'article-choice',
    german: 'Wir arbeiten ____ (die) Zukunft.',
    answer: 'für',
    explanation: 'для майбутнього - für + Akkusativ',
    category: 'für + Akk',
    hint: '[Для чого?]',
  },

  // GEGEN + Akkusativ
  {
    id: 4,
    type: 'article-choice',
    german: 'Das Medikament hilft ____ (die) Kopfschmerzen.',
    answer: 'gegen',
    explanation: 'проти + Akkusativ',
    category: 'gegen + Akk',
    hint: '[Проти чого?]',
  },
  {
    id: 5,
    type: 'article-choice',
    german: 'Wir protestieren ____ (die) Ungerechtigkeit.',
    answer: 'gegen',
    explanation: 'проти несправедливості',
    category: 'gegen + Akk',
    hint: '[Проти чого?]',
  },

  // OHNE + Akkusativ
  {
    id: 6,
    type: 'article-choice',
    german: 'Ich kann nicht ____ (der) Kaffee am Morgen leben.',
    answer: 'ohne',
    explanation: 'без + Akkusativ',
    category: 'ohne + Akk',
    hint: '[Без чого?]',
  },
  {
    id: 7,
    type: 'article-choice',
    german: 'Das ist möglich ____ (deine) Hilfe.',
    answer: 'ohne',
    explanation: 'без твоєї допомоги',
    category: 'ohne + Akk',
    hint: '[Без чого?]',
  },

  // UM + Akkusativ
  {
    id: 8,
    type: 'article-choice',
    german: 'Wir kämpfen ____ (die) Gerechtigkeit.',
    answer: 'um',
    explanation: 'за справедливість - за + Akkusativ',
    category: 'um + Akk',
    hint: '[За що?]',
  },
  {
    id: 9,
    type: 'article-choice',
    german: 'Es geht ____ (das) Leben.',
    answer: 'um',
    explanation: 'йдеться про життя',
    category: 'um + Akk',
    hint: '[Про що йдеться?]',
  },

  // DURCH + Akkusativ
  {
    id: 10,
    type: 'article-choice',
    german: 'Ich gehe ____ (der) Tunnel.',
    answer: 'durch',
    explanation: 'через тунель - через + Akkusativ',
    category: 'durch + Akk',
    hint: '[Через що?]',
  },
  {
    id: 11,
    type: 'article-choice',
    german: 'Wir fahren ____ (die) Stadt.',
    answer: 'durch',
    explanation: 'їдемо через міста',
    category: 'durch + Akk',
    hint: '[Через що?]',
  },

  // MIT + Dativ
  {
    id: 12,
    type: 'article-choice',
    german: 'Ich spreche ____ (mein) Freund.',
    answer: 'mit',
    explanation: 'з другом - з + Dativ',
    category: 'mit + Dat',
    hint: '[З кимось?]',
  },
  {
    id: 13,
    type: 'article-choice',
    german: 'Das Kaffee schmeckt besser ____ (die) Milch.',
    answer: 'mit',
    explanation: 'з молоком',
    category: 'mit + Dat',
    hint: '[З чим?]',
  },

  // NACH + Dativ
  {
    id: 14,
    type: 'article-choice',
    german: 'Ich fahre ____ (Berlin) nächste Woche.',
    answer: 'nach',
    explanation: 'до Берліна - nach + Dativ',
    category: 'nach + Dat',
    hint: '[Куди?]',
  },
  {
    id: 15,
    type: 'article-choice',
    german: 'Wir gehen ____ (das) Hause.',
    answer: 'nach',
    explanation: 'додому',
    category: 'nach + Dat',
    hint: '[Куди?]',
  },

  // VON + Dativ
  {
    id: 16,
    type: 'article-choice',
    german: 'Das Buch ist ____ (mein) Onkel.',
    answer: 'von',
    explanation: 'від дяді - від + Dativ (з дяді)',
    category: 'von + Dat',
    hint: '[Від кого? Чий?]',
  },
  {
    id: 17,
    type: 'article-choice',
    german: 'Ich höre ____ (der) Lehrer.',
    answer: 'von',
    explanation: 'я чую від вчителя',
    category: 'von + Dat',
    hint: '[Від кого?]',
  },

  // ZU + Dativ
  {
    id: 18,
    type: 'article-choice',
    german: 'Wir gehen ____ (die) Party.',
    answer: 'zu',
    explanation: 'до вечірки - zu + Dativ',
    category: 'zu + Dat',
    hint: '[До кого? До чого?]',
  },
  {
    id: 19,
    type: 'article-choice',
    german: 'Komm ____ (ich) bitte!',
    answer: 'zu',
    explanation: 'приходь до мене',
    category: 'zu + Dat',
    hint: '[До кого?]',
  },

  // BEI + Dativ
  {
    id: 20,
    type: 'article-choice',
    german: 'Ich wohne ____ (mein) Großmutter.',
    answer: 'bei',
    explanation: 'у бабусі - у + Dativ',
    category: 'bei + Dat',
    hint: '[Де? У кого?]',
  },
  {
    id: 21,
    type: 'article-choice',
    german: '____ (das) Wetter bleiben wir zu Hause.',
    answer: 'Bei',
    explanation: 'при такій погоді',
    category: 'bei + Dat',
    hint: '[При якому стані?]',
  },

  // AUS + Dativ
  {
    id: 22,
    type: 'article-choice',
    german: 'Dieser Ring ist ____ (das) Gold.',
    answer: 'aus',
    explanation: 'з золота - з + Genitiv/Dativ',
    category: 'aus + Dat',
    hint: '[З чого зроблено?]',
  },
  {
    id: 23,
    type: 'article-choice',
    german: 'Wir kommen ____ (die) Ukraine.',
    answer: 'aus',
    explanation: 'з України',
    category: 'aus + Dat',
    hint: '[Звідки?]',
  },

  // SEIT + Dativ
  {
    id: 24,
    type: 'article-choice',
    german: 'Ich lebe hier ____ (ein) Jahr.',
    answer: 'seit',
    explanation: 'з рік - з + Dativ (тривалість часу)',
    category: 'seit + Dat',
    hint: '[З якого часу?]',
  },
  {
    id: 25,
    type: 'article-choice',
    german: '____ (der) Morgen warte ich auf dich.',
    answer: 'Seit',
    explanation: 'з ранку',
    category: 'seit + Dat',
    hint: '[З якого часу?]',
  },
];

export const akkusativDativGroupedByPrep = {
  'für + Akk': akkusativDativExercises.filter(e => e.category === 'für + Akk'),
  'gegen + Akk': akkusativDativExercises.filter(e => e.category === 'gegen + Akk'),
  'ohne + Akk': akkusativDativExercises.filter(e => e.category === 'ohne + Akk'),
  'um + Akk': akkusativDativExercises.filter(e => e.category === 'um + Akk'),
  'durch + Akk': akkusativDativExercises.filter(e => e.category === 'durch + Akk'),
  'mit + Dat': akkusativDativExercises.filter(e => e.category === 'mit + Dat'),
  'nach + Dat': akkusativDativExercises.filter(e => e.category === 'nach + Dat'),
  'von + Dat': akkusativDativExercises.filter(e => e.category === 'von + Dat'),
  'zu + Dat': akkusativDativExercises.filter(e => e.category === 'zu + Dat'),
  'bei + Dat': akkusativDativExercises.filter(e => e.category === 'bei + Dat'),
  'aus + Dat': akkusativDativExercises.filter(e => e.category === 'aus + Dat'),
  'seit + Dat': akkusativDativExercises.filter(e => e.category === 'seit + Dat'),
};
