import { haltPrepositionPhrases } from '../data/haltPrepositionPhrases';
import { lesson2910Exercises } from '../data/selfStudy2910Data';
import { lesson2910ExtraExercises } from '../data/selfStudy2910ExtraData';
import { lesson2910ExtraExercisesMore } from '../data/selfStudy2910ExtraMore';

// 60 original sentences from lesson 29.10: presentation + reinforcement.
// Three packs of 20. Question order is shuffled at the start of each new match.
export const duelPacks = [
  {
    "id": "pack-1",
    "title": "R001 Präpositionen",
    "description": "Заняття 29.10 · дієслова з прийменниками",
    "questions": [
      {
        "prompt": "Die Menschen freuen sich schon ___ die Weihnachtsfeiertage.",
        "options": [
          "auf",
          "an",
          "für",
          "mit"
        ],
        "correct": 0,
        "explanation": "sich freuen auf + Akkusativ — радіти майбутній події. Weihnachtsferien — різдвяні канікули, Weihnachtsfeiertage — різдвяні святкові дні.",
        "full": "Die Menschen freuen sich schon auf die Weihnachtsfeiertage.",
        "source": "Вправа 1 · Закріплення"
      },
      {
        "prompt": "Wir sprechen morgen ___ das neue Projekt.",
        "options": [
          "über",
          "für",
          "von",
          "nach"
        ],
        "correct": 0,
        "explanation": "sprechen über + Akkusativ",
        "full": "Wir sprechen morgen über das neue Projekt.",
        "source": "Вправа 1 · Презентація"
      },
      {
        "prompt": "Ich suche einen Job. Ich verlasse mich ___ meine Berufserfahrung.",
        "options": [
          "an",
          "auf",
          "für",
          "mit"
        ],
        "correct": 1,
        "explanation": "sich verlassen auf + Akkusativ",
        "full": "Ich suche einen Job. Ich verlasse mich auf meine Berufserfahrung.",
        "source": "Вправа 3 · Закріплення"
      },
      {
        "prompt": "Sie sorgt ___ die Gäste.",
        "options": [
          "für",
          "an",
          "über",
          "mit"
        ],
        "correct": 0,
        "explanation": "sorgen für + Akkusativ",
        "full": "Sie sorgt für die Gäste.",
        "source": "Вправа 4 · Презентація"
      },
      {
        "prompt": "Ich bestehe ___ einer Rückzahlung.",
        "options": [
          "an",
          "für",
          "mit",
          "auf"
        ],
        "correct": 3,
        "explanation": "bestehen auf + Dativ — наполягати на чомусь.",
        "full": "Ich bestehe auf einer Rückzahlung.",
        "source": "Вправа 1 · Закріплення"
      },
      {
        "prompt": "Ich interessiere mich ___ das Thema „Ukrainische Geschichte“.",
        "options": [
          "an",
          "über",
          "mit",
          "für"
        ],
        "correct": 3,
        "explanation": "sich interessieren für + Akkusativ",
        "full": "Ich interessiere mich für das Thema „Ukrainische Geschichte“.",
        "source": "Вправа 4 · Закріплення"
      },
      {
        "prompt": "Ich bestehe ___ meiner Meinung.",
        "options": [
          "an",
          "für",
          "mit",
          "auf"
        ],
        "correct": 3,
        "explanation": "bestehen auf + Dativ — наполягати на своїй думці. Meinung — жіночого роду, тому: meiner Meinung.",
        "full": "Ich bestehe auf meiner Meinung.",
        "source": "Вправа 2 · Закріплення"
      },
      {
        "prompt": "Er fragt ___ der Möglichkeit, meinen Schmuck zu kaufen.",
        "options": [
          "auf",
          "über",
          "nach",
          "mit"
        ],
        "correct": 2,
        "explanation": "fragen nach + Dativ; Möglichkeit, ... zu + Infinitiv.",
        "full": "Er fragt nach der Möglichkeit, meinen Schmuck zu kaufen.",
        "source": "Вправа 1 · Закріплення"
      },
      {
        "prompt": "Viele Studierende leiden ___ dem Prüfungsdruck.",
        "options": [
          "unter",
          "an",
          "für",
          "auf"
        ],
        "correct": 0,
        "explanation": "leiden unter + Dativ",
        "full": "Viele Studierende leiden unter dem Prüfungsdruck.",
        "source": "Вправа 1 · Презентація"
      },
      {
        "prompt": "Wir haben gestern ___ ein interessantes Video gesprochen.",
        "options": [
          "für",
          "von",
          "über",
          "nach"
        ],
        "correct": 2,
        "explanation": "sprechen über + Akkusativ; Perfekt: haben ... gesprochen.",
        "full": "Wir haben gestern über ein interessantes Video gesprochen.",
        "source": "Вправа 1 · Закріплення"
      },
      {
        "prompt": "Ich interessiere mich ___ deutsche Literatur.",
        "options": [
          "an",
          "für",
          "über",
          "mit"
        ],
        "correct": 1,
        "explanation": "sich interessieren für + Akkusativ",
        "full": "Ich interessiere mich für deutsche Literatur.",
        "source": "Вправа 4 · Презентація"
      },
      {
        "prompt": "Dieses Foto erinnert mich ___ meine Kindheit.",
        "options": [
          "auf",
          "mit",
          "unter",
          "an"
        ],
        "correct": 3,
        "explanation": "jemanden erinnern an + Akkusativ",
        "full": "Dieses Foto erinnert mich an meine Kindheit.",
        "source": "Вправа 4 · Презентація"
      },
      {
        "prompt": "Er sorgt sich ___ die kranke Katze.",
        "options": [
          "um",
          "für",
          "an",
          "nach"
        ],
        "correct": 0,
        "explanation": "sich sorgen um + Akkusativ",
        "full": "Er sorgt sich um die kranke Katze.",
        "source": "Вправа 3 · Закріплення"
      },
      {
        "prompt": "Er sorgt nicht ___ die Sauberkeit im Zimmer.",
        "options": [
          "an",
          "über",
          "für",
          "mit"
        ],
        "correct": 2,
        "explanation": "sorgen für + Akkusativ",
        "full": "Er sorgt nicht für die Sauberkeit im Zimmer.",
        "source": "Вправа 4 · Закріплення"
      },
      {
        "prompt": "Die Arbeit besteht ___ vier Kapiteln.",
        "options": [
          "von",
          "mit",
          "aus",
          "für"
        ],
        "correct": 2,
        "explanation": "bestehen aus + Dativ",
        "full": "Die Arbeit besteht aus vier Kapiteln.",
        "source": "Вправа 1 · Презентація"
      },
      {
        "prompt": "Meine Laune hängt ___ meiner Gesundheit ab.",
        "options": [
          "von",
          "auf",
          "für",
          "mit"
        ],
        "correct": 0,
        "explanation": "abhängen von + Dativ",
        "full": "Meine Laune hängt von meiner Gesundheit ab.",
        "source": "Вправа 4 · Закріплення"
      },
      {
        "prompt": "Sie sorgt sich ___ ihren Sohn.",
        "options": [
          "für",
          "an",
          "um",
          "nach"
        ],
        "correct": 2,
        "explanation": "um ihren Sohn — Akkusativ",
        "full": "Sie sorgt sich um ihren Sohn.",
        "source": "Вправа 2 · Презентація"
      },
      {
        "prompt": "Ich spreche mit dem Dozenten ___ die Prüfung.",
        "options": [
          "für",
          "über",
          "von",
          "nach"
        ],
        "correct": 1,
        "explanation": "sprechen mit + Dativ; über + Akkusativ",
        "full": "Ich spreche mit dem Dozenten über die Prüfung.",
        "source": "Вправа 4 · Презентація"
      },
      {
        "prompt": "Viele Menschen leiden ___ Stress beim Vorstellungsgespräch.",
        "options": [
          "an",
          "für",
          "unter",
          "auf"
        ],
        "correct": 2,
        "explanation": "leiden unter + Dativ — страждати від негативних обставин; bei(m) + Dativ.",
        "full": "Viele Menschen leiden unter Stress beim Vorstellungsgespräch.",
        "source": "Вправа 1 · Закріплення"
      },
      {
        "prompt": "Ich habe ___ ein Glas Wasser gebeten.",
        "options": [
          "für",
          "um",
          "an",
          "nach"
        ],
        "correct": 1,
        "explanation": "bitten um + Akkusativ",
        "full": "Ich habe um ein Glas Wasser gebeten.",
        "source": "Вправа 2 · Закріплення"
      }
    ]
  },
  {
    "id": "pack-2",
    "title": "R002 Präpositionen",
    "description": "Заняття 29.10 · дієслова з прийменниками",
    "questions": [
      {
        "prompt": "Der Lehrer bezieht sich ___ überprüfte Informationen.",
        "options": [
          "auf",
          "an",
          "für",
          "mit"
        ],
        "correct": 0,
        "explanation": "sich beziehen auf + Akkusativ",
        "full": "Der Lehrer bezieht sich auf überprüfte Informationen.",
        "source": "Вправа 3 · Закріплення"
      },
      {
        "prompt": "Diese Sache erinnert mich ___ meinen schönen Urlaub.",
        "options": [
          "auf",
          "an",
          "mit",
          "unter"
        ],
        "correct": 1,
        "explanation": "jemanden erinnern an + Akkusativ",
        "full": "Diese Sache erinnert mich an meinen schönen Urlaub.",
        "source": "Вправа 4 · Закріплення"
      },
      {
        "prompt": "Was hältst du ___ meinem Ansatz beim Deutschlernen?",
        "options": [
          "auf",
          "für",
          "mit",
          "von"
        ],
        "correct": 3,
        "explanation": "halten von + Dativ — оцінювати щось. Ansatz — підхід; Einsatz означає радше зусилля / залученість.",
        "full": "Was hältst du von meinem Ansatz beim Deutschlernen?",
        "source": "Вправа 1 · Закріплення"
      },
      {
        "prompt": "Er leidet ___ einem schlechten Gedächtnis.",
        "options": [
          "auf",
          "an",
          "mit",
          "unter"
        ],
        "correct": 1,
        "explanation": "leiden an + Dativ. У живому мовленні частіше: Er hat ein schlechtes Gedächtnis.",
        "full": "Er leidet an einem schlechten Gedächtnis.",
        "source": "Вправа 1 · Закріплення"
      },
      {
        "prompt": "Ich gewöhne mich ___ das Klima.",
        "options": [
          "an",
          "auf",
          "mit",
          "unter"
        ],
        "correct": 0,
        "explanation": "an das Klima — Akkusativ",
        "full": "Ich gewöhne mich an das Klima.",
        "source": "Вправа 2 · Презентація"
      },
      {
        "prompt": "Er leidet seit Jahren ___ Migräne.",
        "options": [
          "auf",
          "mit",
          "unter",
          "an"
        ],
        "correct": 3,
        "explanation": "leiden an + Dativ",
        "full": "Er leidet seit Jahren an Migräne.",
        "source": "Вправа 1 · Презентація"
      },
      {
        "prompt": "Er denkt ___ das Angebot nach.",
        "options": [
          "über",
          "für",
          "von",
          "nach"
        ],
        "correct": 0,
        "explanation": "nachdenken über",
        "full": "Er denkt über das Angebot nach.",
        "source": "Вправа 3 · Презентація"
      },
      {
        "prompt": "Es kommt ___ das Wetter an.",
        "options": [
          "an",
          "für",
          "auf",
          "mit"
        ],
        "correct": 2,
        "explanation": "ankommen auf / abhängen von",
        "full": "Es kommt auf das Wetter an.",
        "source": "Вправа 4 · Презентація"
      },
      {
        "prompt": "Du kannst dich ___ mich verlassen.",
        "options": [
          "an",
          "für",
          "mit",
          "auf"
        ],
        "correct": 3,
        "explanation": "sich verlassen auf",
        "full": "Du kannst dich auf mich verlassen.",
        "source": "Вправа 3 · Презентація"
      },
      {
        "prompt": "Ich freue mich ___ das Ende des Krieges.",
        "options": [
          "an",
          "auf",
          "für",
          "mit"
        ],
        "correct": 1,
        "explanation": "sich freuen auf + Akkusativ",
        "full": "Ich freue mich auf das Ende des Krieges.",
        "source": "Вправа 3 · Закріплення"
      },
      {
        "prompt": "Der Erfolg hängt ___ Team ab.",
        "options": [
          "von dem",
          "auf dem",
          "für das",
          "an das"
        ],
        "correct": 0,
        "explanation": "von dem Team (vom Team) — Dativ",
        "full": "Der Erfolg hängt von dem Team ab.",
        "source": "Вправа 2 · Презентація"
      },
      {
        "prompt": "Ich bestehe ___ einer schriftlichen Bestätigung.",
        "options": [
          "an",
          "auf",
          "für",
          "mit"
        ],
        "correct": 1,
        "explanation": "bestehen auf + Dativ",
        "full": "Ich bestehe auf einer schriftlichen Bestätigung.",
        "source": "Вправа 1 · Презентація"
      },
      {
        "prompt": "Der Artikel bezieht sich ___ Archivquellen.",
        "options": [
          "an",
          "für",
          "auf",
          "mit"
        ],
        "correct": 2,
        "explanation": "sich beziehen auf",
        "full": "Der Artikel bezieht sich auf Archivquellen.",
        "source": "Вправа 3 · Презентація"
      },
      {
        "prompt": "Ich freue mich ___ das Wochenende.",
        "options": [
          "an",
          "für",
          "mit",
          "auf"
        ],
        "correct": 3,
        "explanation": "sich freuen auf",
        "full": "Ich freue mich auf das Wochenende.",
        "source": "Вправа 3 · Презентація"
      },
      {
        "prompt": "Ich entschuldige mich ___ die Verspätung.",
        "options": [
          "für",
          "an",
          "über",
          "mit"
        ],
        "correct": 0,
        "explanation": "sich entschuldigen für + Akkusativ",
        "full": "Ich entschuldige mich für die Verspätung.",
        "source": "Вправа 4 · Презентація"
      },
      {
        "prompt": "Was hältst du ___ meiner Idee?",
        "options": [
          "auf",
          "von",
          "für",
          "mit"
        ],
        "correct": 1,
        "explanation": "halten von + Dativ",
        "full": "Was hältst du von meiner Idee?",
        "source": "Вправа 1 · Презентація"
      },
      {
        "prompt": "Ich halte diesen Artikel ___ wichtig.",
        "options": [
          "an",
          "für",
          "über",
          "mit"
        ],
        "correct": 1,
        "explanation": "halten für",
        "full": "Ich halte diesen Artikel für wichtig.",
        "source": "Вправа 3 · Презентація"
      },
      {
        "prompt": "Ich halte dieses Thema ___ unangenehm.",
        "options": [
          "an",
          "über",
          "mit",
          "für"
        ],
        "correct": 3,
        "explanation": "halten für + Akkusativ",
        "full": "Ich halte dieses Thema für unangenehm.",
        "source": "Вправа 3 · Закріплення"
      },
      {
        "prompt": "Ich habe mich heute ___ der Vorbereitung auf den Unterricht beschäftigt.",
        "options": [
          "mit",
          "für",
          "an",
          "von"
        ],
        "correct": 0,
        "explanation": "sich beschäftigen mit + Dativ; Vorbereitung auf + Akkusativ",
        "full": "Ich habe mich heute mit der Vorbereitung auf den Unterricht beschäftigt.",
        "source": "Вправа 2 · Закріплення"
      },
      {
        "prompt": "Du müsstest dich ___ deinem Kollegen entschuldigen.",
        "options": [
          "für",
          "bei",
          "an",
          "auf"
        ],
        "correct": 1,
        "explanation": "sich entschuldigen bei + Dativ; müsstest — Konjunktiv II від müssen. Якщо йдеться про колегу-жінку: bei deiner Kollegin.",
        "full": "Du müsstest dich bei deinem Kollegen entschuldigen.",
        "source": "Вправа 1 · Закріплення"
      }
    ]
  },
  {
    "id": "pack-3",
    "title": "R003 Präpositionen",
    "description": "Заняття 29.10 · дієслова з прийменниками",
    "questions": [
      {
        "prompt": "Ich bestehe ___ einer Antwort.",
        "options": [
          "an",
          "auf",
          "für",
          "mit"
        ],
        "correct": 1,
        "explanation": "auf einer Antwort — Dativ",
        "full": "Ich bestehe auf einer Antwort.",
        "source": "Вправа 2 · Презентація"
      },
      {
        "prompt": "___ hängt das ab?",
        "options": [
          "Worauf",
          "Womit",
          "Wovon",
          "Wofür"
        ],
        "correct": 2,
        "explanation": "abhängen von + Dativ",
        "full": "Wovon hängt das ab?",
        "source": "Вправа 2 · Закріплення"
      },
      {
        "prompt": "Das kommt ___ viele Faktoren an.",
        "options": [
          "an",
          "für",
          "mit",
          "auf"
        ],
        "correct": 3,
        "explanation": "ankommen auf + Akkusativ; також: Das hängt von vielen Faktoren ab.",
        "full": "Das kommt auf viele Faktoren an.",
        "source": "Вправа 2 · Закріплення"
      },
      {
        "prompt": "Ich beschäftige mich ___ dem Thema.",
        "options": [
          "für",
          "an",
          "mit",
          "von"
        ],
        "correct": 2,
        "explanation": "mit dem Thema — Dativ",
        "full": "Ich beschäftige mich mit dem Thema.",
        "source": "Вправа 2 · Презентація"
      },
      {
        "prompt": "Ich erinnere mich oft ___ die Zeit ohne Krieg.",
        "options": [
          "auf",
          "an",
          "mit",
          "unter"
        ],
        "correct": 1,
        "explanation": "sich erinnern an + Akkusativ",
        "full": "Ich erinnere mich oft an die Zeit ohne Krieg.",
        "source": "Вправа 2 · Закріплення"
      },
      {
        "prompt": "Unsere heutige Lektion besteht ___ vier Teilen.",
        "options": [
          "aus",
          "von",
          "mit",
          "für"
        ],
        "correct": 0,
        "explanation": "bestehen aus + Dativ — складатися з чогось.",
        "full": "Unsere heutige Lektion besteht aus vier Teilen.",
        "source": "Вправа 1 · Закріплення"
      },
      {
        "prompt": "Sie fragt ___ dem Weg zum Bahnhof.",
        "options": [
          "nach",
          "auf",
          "über",
          "mit"
        ],
        "correct": 0,
        "explanation": "fragen nach + Dativ",
        "full": "Sie fragt nach dem Weg zum Bahnhof.",
        "source": "Вправа 1 · Презентація"
      },
      {
        "prompt": "Ich freue mich schon ___ die Ferien.",
        "options": [
          "an",
          "für",
          "auf",
          "mit"
        ],
        "correct": 2,
        "explanation": "sich freuen auf + Akkusativ",
        "full": "Ich freue mich schon auf die Ferien.",
        "source": "Вправа 1 · Презентація"
      },
      {
        "prompt": "Ich habe mich ___ das Masterstudium entschieden.",
        "options": [
          "an",
          "für",
          "über",
          "mit"
        ],
        "correct": 1,
        "explanation": "sich entscheiden für + Akkusativ",
        "full": "Ich habe mich für das Masterstudium entschieden.",
        "source": "Вправа 1 · Презентація"
      },
      {
        "prompt": "Ich erinnere mich ___ die Reise.",
        "options": [
          "auf",
          "mit",
          "unter",
          "an"
        ],
        "correct": 3,
        "explanation": "an die Reise — Akkusativ",
        "full": "Ich erinnere mich an die Reise.",
        "source": "Вправа 2 · Презентація"
      },
      {
        "prompt": "Es kommt ___ das Ergebnis an.",
        "options": [
          "an",
          "auf",
          "für",
          "mit"
        ],
        "correct": 1,
        "explanation": "auf das Ergebnis — Akkusativ",
        "full": "Es kommt auf das Ergebnis an.",
        "source": "Вправа 2 · Презентація"
      },
      {
        "prompt": "Sie sorgt sich ___ ihre Mutter.",
        "options": [
          "für",
          "an",
          "um",
          "nach"
        ],
        "correct": 2,
        "explanation": "sich sorgen um",
        "full": "Sie sorgt sich um ihre Mutter.",
        "source": "Вправа 3 · Презентація"
      },
      {
        "prompt": "Ich entschuldige mich ___ die Fehler im Text.",
        "options": [
          "an",
          "über",
          "für",
          "mit"
        ],
        "correct": 2,
        "explanation": "sich entschuldigen für + Akkusativ",
        "full": "Ich entschuldige mich für die Fehler im Text.",
        "source": "Вправа 4 · Закріплення"
      },
      {
        "prompt": "Ich sorge mich ___ meinen Vater.",
        "options": [
          "um",
          "für",
          "an",
          "nach"
        ],
        "correct": 0,
        "explanation": "sich sorgen um + Akkusativ",
        "full": "Ich sorge mich um meinen Vater.",
        "source": "Вправа 2 · Закріплення"
      },
      {
        "prompt": "Ich habe mich ___ das C1-Zertifikat entschieden.",
        "options": [
          "an",
          "über",
          "mit",
          "für"
        ],
        "correct": 3,
        "explanation": "sich entscheiden für + Akkusativ — обрати щось, прийняти рішення на користь чогось.",
        "full": "Ich habe mich für das C1-Zertifikat entschieden.",
        "source": "Вправа 1 · Закріплення"
      },
      {
        "prompt": "Er spricht mit seinem Vater ___ Sport.",
        "options": [
          "für",
          "von",
          "nach",
          "über"
        ],
        "correct": 3,
        "explanation": "sprechen mit + Dativ; über + Akkusativ",
        "full": "Er spricht mit seinem Vater über Sport.",
        "source": "Вправа 4 · Закріплення"
      },
      {
        "prompt": "Ich muss mich ___ meinem Chef entschuldigen.",
        "options": [
          "für",
          "an",
          "auf",
          "bei"
        ],
        "correct": 3,
        "explanation": "sich entschuldigen bei + Dativ",
        "full": "Ich muss mich bei meinem Chef entschuldigen.",
        "source": "Вправа 1 · Презентація"
      },
      {
        "prompt": "Ich bitte ___ die Rechnung.",
        "options": [
          "für",
          "an",
          "nach",
          "um"
        ],
        "correct": 3,
        "explanation": "um die Rechnung — Akkusativ",
        "full": "Ich bitte um die Rechnung.",
        "source": "Вправа 2 · Презентація"
      },
      {
        "prompt": "Ich denke ___ die Situation nach.",
        "options": [
          "für",
          "von",
          "über",
          "nach"
        ],
        "correct": 2,
        "explanation": "nachdenken über + Akkusativ",
        "full": "Ich denke über die Situation nach.",
        "source": "Вправа 3 · Закріплення"
      },
      {
        "prompt": "Ich gewöhne mich nur langsam ___ die neue Wohnung.",
        "options": [
          "auf",
          "mit",
          "an",
          "unter"
        ],
        "correct": 2,
        "explanation": "sich gewöhnen an + Akkusativ",
        "full": "Ich gewöhne mich nur langsam an die neue Wohnung.",
        "source": "Вправа 2 · Закріплення"
      }
    ]
  },
  {
    "id": "pack-4",
    "title": "R004 Präpositionen",
    "description": "10 контрастних пар зі слайдів презентації",
    "questions": [
      {
        "prompt": "Der Kurs besteht ___ drei Teilen.",
        "options": [
          "auf",
          "aus",
          "von",
          "mit"
        ],
        "correct": 1,
        "explanation": "bestehen aus + Dativ — складатися з",
        "full": "Der Kurs besteht aus drei Teilen.",
        "source": "Презентація · Пара 1 · bestehen aus / bestehen auf"
      },
      {
        "prompt": "Ich bestehe ___ einer Erklärung.",
        "options": [
          "auf",
          "an",
          "für",
          "über"
        ],
        "correct": 0,
        "explanation": "bestehen auf + Dativ — наполягати на",
        "full": "Ich bestehe auf einer Erklärung.",
        "source": "Презентація · Пара 1 · bestehen aus / bestehen auf"
      },
      {
        "prompt": "Der Erfolg hängt ___ der Vorbereitung ab.",
        "options": [
          "mit",
          "nach",
          "an",
          "von"
        ],
        "correct": 3,
        "explanation": "abhängen von + Dativ — залежати від",
        "full": "Der Erfolg hängt von der Vorbereitung ab.",
        "source": "Презентація · Пара 2 · abhängen von / ankommen auf"
      },
      {
        "prompt": "Es kommt ___ die Vorbereitung an.",
        "options": [
          "an",
          "für",
          "auf",
          "über"
        ],
        "correct": 2,
        "explanation": "ankommen auf + Akkusativ — саме це має значення",
        "full": "Es kommt auf die Vorbereitung an.",
        "source": "Презентація · Пара 2 · abhängen von / ankommen auf"
      },
      {
        "prompt": "Ich erinnere mich ___ unseren Urlaub.",
        "options": [
          "auf",
          "an",
          "über",
          "unter"
        ],
        "correct": 1,
        "explanation": "sich erinnern an + Akkusativ — згадувати",
        "full": "Ich erinnere mich an unseren Urlaub.",
        "source": "Презентація · Пара 3 · sich erinnern / jemanden erinnern"
      },
      {
        "prompt": "Dieses Foto erinnert mich ___ unseren Urlaub.",
        "options": [
          "an",
          "auf",
          "über",
          "unter"
        ],
        "correct": 0,
        "explanation": "jemanden erinnern an + Akkusativ — нагадувати комусь",
        "full": "Dieses Foto erinnert mich an unseren Urlaub.",
        "source": "Презентація · Пара 3 · sich erinnern / jemanden erinnern"
      },
      {
        "prompt": "Ich freue mich ___ den Urlaub.",
        "options": [
          "an",
          "für",
          "über",
          "auf"
        ],
        "correct": 3,
        "explanation": "sich freuen auf + Akkusativ — очікувана майбутня подія",
        "full": "Ich freue mich auf den Urlaub.",
        "source": "Презентація · Пара 4 · sich freuen auf / über"
      },
      {
        "prompt": "Ich freue mich ___ das Geschenk.",
        "options": [
          "für",
          "auf",
          "über",
          "von"
        ],
        "correct": 2,
        "explanation": "sich freuen über + Akkusativ — радість через отримане",
        "full": "Ich freue mich über das Geschenk.",
        "source": "Презентація · Пара 4 · sich freuen auf / über"
      },
      {
        "prompt": "Ich spreche ___ meiner Kollegin.",
        "options": [
          "von",
          "mit",
          "bei",
          "für"
        ],
        "correct": 1,
        "explanation": "sprechen mit + Dativ — співрозмовник",
        "full": "Ich spreche mit meiner Kollegin.",
        "source": "Презентація · Пара 5 · sprechen mit / über"
      },
      {
        "prompt": "Ich spreche ___ meine Arbeit.",
        "options": [
          "über",
          "für",
          "auf",
          "von"
        ],
        "correct": 0,
        "explanation": "sprechen über + Akkusativ — тема",
        "full": "Ich spreche über meine Arbeit.",
        "source": "Презентація · Пара 5 · sprechen mit / über"
      },
      {
        "prompt": "Sie leidet ___ einer chronischen Krankheit.",
        "options": [
          "auf",
          "über",
          "unter",
          "an"
        ],
        "correct": 3,
        "explanation": "leiden an + Dativ — хвороба",
        "full": "Sie leidet an einer chronischen Krankheit.",
        "source": "Презентація · Пара 6 · leiden an / unter"
      },
      {
        "prompt": "Viele Menschen leiden ___ dem Stress.",
        "options": [
          "an",
          "über",
          "unter",
          "auf"
        ],
        "correct": 2,
        "explanation": "leiden unter + Dativ — тиск, стрес",
        "full": "Viele Menschen leiden unter dem Stress.",
        "source": "Презентація · Пара 6 · leiden an / unter"
      },
      {
        "prompt": "Ich denke ___ meine Familie.",
        "options": [
          "auf",
          "an",
          "über",
          "unter"
        ],
        "correct": 1,
        "explanation": "denken an + Akkusativ — думати про когось",
        "full": "Ich denke an meine Familie.",
        "source": "Презентація · Пара 7 · denken an / nachdenken über"
      },
      {
        "prompt": "Ich denke ___ meine berufliche Zukunft nach.",
        "options": [
          "über",
          "für",
          "auf",
          "von"
        ],
        "correct": 0,
        "explanation": "nachdenken über + Akkusativ — обмірковувати",
        "full": "Ich denke über meine berufliche Zukunft nach.",
        "source": "Презентація · Пара 7 · denken an / nachdenken über"
      },
      {
        "prompt": "Ich interessiere mich ___ die ukrainische Geschichte.",
        "options": [
          "mit",
          "um",
          "von",
          "für"
        ],
        "correct": 3,
        "explanation": "sich interessieren für + Akkusativ — інтерес",
        "full": "Ich interessiere mich für die ukrainische Geschichte.",
        "source": "Презентація · Пара 8 · interessieren für / beschäftigen mit"
      },
      {
        "prompt": "Ich beschäftige mich ___ der ukrainischen Geschichte.",
        "options": [
          "von",
          "bei",
          "mit",
          "für"
        ],
        "correct": 2,
        "explanation": "sich beschäftigen mit + Dativ — займатися темою",
        "full": "Ich beschäftige mich mit der ukrainischen Geschichte.",
        "source": "Презентація · Пара 8 · interessieren für / beschäftigen mit"
      },
      {
        "prompt": "Sie sorgt ___ ihre Kinder.",
        "options": [
          "mit",
          "für",
          "um",
          "von"
        ],
        "correct": 1,
        "explanation": "sorgen für + Akkusativ — забезпечувати, піклуватися",
        "full": "Sie sorgt für ihre Kinder.",
        "source": "Презентація · Пара 9 · sorgen für / sich sorgen um"
      },
      {
        "prompt": "Sie sorgt sich ___ ihre Kinder.",
        "options": [
          "um",
          "für",
          "an",
          "nach"
        ],
        "correct": 0,
        "explanation": "sich sorgen um + Akkusativ — хвилюватися",
        "full": "Sie sorgt sich um ihre Kinder.",
        "source": "Презентація · Пара 9 · sorgen für / sich sorgen um"
      },
      {
        "prompt": "Ich bitte ___ Ihre Unterstützung.",
        "options": [
          "für",
          "an",
          "nach",
          "um"
        ],
        "correct": 3,
        "explanation": "bitten um + Akkusativ — просити щось",
        "full": "Ich bitte um Ihre Unterstützung.",
        "source": "Презентація · Пара 10 · bitten um / fragen nach"
      },
      {
        "prompt": "Ich frage ___ dem Termin.",
        "options": [
          "bei",
          "mit",
          "nach",
          "über"
        ],
        "correct": 2,
        "explanation": "fragen nach + Dativ — запитувати інформацію",
        "full": "Ich frage nach dem Termin.",
        "source": "Презентація · Пара 10 · bitten um / fragen nach"
      }
    ]
  }
];
duelPacks.push({
  id: 'pack-halt-prepositions',
  title: 'R005 halten + Präpositionen',
  description: '17 речень · прийменники та зворотні займенники',
  questions: haltPrepositionPhrases.map((phrase, i) => {
    // Rotate answer positions; the source data keeps the correct answer first.
    const shift = i % 4;
    const options = phrase.options.slice(shift).concat(phrase.options.slice(0, shift));
    return {
      prompt: phrase.prompt, options,
      correct: (4 - shift) % 4,
      full: phrase.de, uk: phrase.uk,
      explanation: phrase.explanation,
      source: 'Фрази з halt'
    };
  })
});
export const getDuelPack = id => duelPacks.find(pack => pack.id === id) || duelPacks[0];

export function shuffledQuestionOrder(length) {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

export function questionsInOrder(pack, order) {
  return Array.isArray(order) && order.length === pack.questions.length &&
    new Set(order).size === order.length && order.every(i => Number.isInteger(i) && i >= 0 && i < pack.questions.length)
    ? order.map(i => pack.questions[i])
    : pack.questions;
}

const lessonCards = [...lesson2910Exercises, ...lesson2910ExtraExercises, ...lesson2910ExtraExercisesMore].flatMap(exercise => exercise.cards);
const lessonTranslations = new Map(lessonCards.map(card => [card.de.split(' / ')[0], card.uk]));
const slideTranslations = ["Курс складається з трьох частин.","Я наполягаю на поясненні.","Успіх залежить від підготовки.","Усе залежить від підготовки.","Я згадую нашу відпустку.","Це фото нагадує мені про нашу відпустку.","Я з нетерпінням чекаю на відпустку.","Я радію подарунку.","Я розмовляю зі своєю колегою.","Я говорю про свою роботу.","Вона страждає на хронічну хворобу.","Багато людей страждають від стресу.","Я думаю про свою сім’ю.","Я розмірковую про своє професійне майбутнє.","Я цікавлюся українською історією.","Я займаюся українською історією.","Вона піклується про своїх дітей.","Вона хвилюється за своїх дітей.","Я прошу вашої підтримки.","Я запитую про дату зустрічі."];
duelPacks.filter(pack => pack.id !== 'pack-halt-prepositions').forEach(pack => pack.questions.forEach((question, index) => {
  question.uk = pack.id === 'pack-4' ? slideTranslations[index] : lessonTranslations.get(question.full);
  if (question.full === 'Ich bestehe auf meiner Meinung.') question.uk = 'Я наполягаю на своїй думці.';
}));
