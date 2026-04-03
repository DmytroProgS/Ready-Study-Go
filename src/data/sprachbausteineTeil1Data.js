const sprachbausteineTeil1Variants = [
  {
    id: 1, label: '1', title: 'Bewerbung um ein Praktikum',
    text: `Sehr geehrte Damen und Herren,
zunächst bedanke ich mich für das freundliche, informative Telefonat. Wie besprochen übersende ich Ihnen meine Bewerbungsunterlagen. Auf Ihrer Homepage habe ich mich bereits über das Ausbildungskonzept Ihrer Hotelkette informiert und bin __46__, in Ihrem Haus vielfältige Einblicke in die Arbeit eines Hotelkaufmannes erhalten zu können.
Ich arbeite sehr gerne mit Menschen zusammen. Teamfähigkeit und Flexibilität bringe ich als Voraussetzung mit und interessiere mich __47__ die Abläufe in der Hotelverwaltung. Ein Praktikum in der Hotelbranche möchte ich deshalb absolvieren, __48__ ich nicht nur im Umgang mit Menschen, __49__ auch im Planen und Organisieren meine großen Stärken sehe.
Ich erwarte von diesem Praktikum, mein theoretisches Wissen durch praktische Erfahrung weiter vertiefen zu können, __50__ mir dann mit meiner Berufswahl endgültig sicher zu sein. __51__ überzeuge ich Sie in einem persönlichen Gespräch. Über eine Einladung würde ich mich sehr freuen.
Mit freundlichen Grüßen
Alexander Thiel`,
    options: ['Bestimmt', 'da', 'damit', 'für', 'sicher', 'sondern', 'um', 'über', 'wegen', 'wie'],
    answers: { 46: 'sicher', 47: 'für', 48: 'da', 49: 'sondern', 50: 'um', 51: 'Bestimmt' }
  },
  {
    id: 2, label: '1.1', title: 'Bewerbung um ein Praktikum (neue Lücken)',
    text: `Sehr geehrte Damen und Herren,
zunächst bedanke ich mich für das freundliche, informative Telefonat. __46__ besprochen übersende ich Ihnen meine Bewerbungsunterlagen. Auf Ihrer Homepage habe ich mich __47__ über das Ausbildungskonzept Ihrer Hotelkette informiert und bin sicher, in Ihrem Haus vielfältige Einblicke in die Arbeit eines Hotelkaufmannes erhalten zu können. Ich arbeite sehr gerne mit Menschen zusammen. Teamfähigkeit und Flexibilität bringe ich als Voraussetzung mit und interessiere mich __48__ die Abläufe in der Hotelverwaltung. Ein Praktikum in der Hotelbranche möchte ich deshalb absolvieren, __49__ ich nicht nur im Umgang mit Menschen, sondern auch im Planen und Organisieren meine großen Stärken sehe.
Ich erwarte von diesem Praktikum, mein theoretisches Wissen durch praktische Erfahrung weiter vertiefen zu können, __50__ mir dann mit meiner Berufswahl endgültig sicher zu sein. __51__ überzeuge ich Sie in einem persönlichen Gespräch. Über eine Einladung würde ich mich sehr freuen.
Mit freundlichen Grüßen
Alexander Thiel`,
    options: ['Gerne', 'da', 'damit', 'für', 'um', 'über', 'wegen', 'wie', 'bereits'],
    answers: { 46: 'wie', 47: 'bereits', 48: 'für', 49: 'da', 50: 'um', 51: 'Gerne' }
  },
  {
    id: 3, label: '2', title: 'Arbeitsvertrag (Salzmann)',
    text: `Sehr geehrter Herr Salzmann,
meinen Arbeitsvertrag habe ich heute mit der Post erhalten und möchte mich hiermit herzlich bedanken. Ich habe ihn ausführlich geprüft und __46__ haben sich noch einige Fragen ergeben.
Bei meinem Vorstellungsgespräch hatte Frau Ott mir mündlich ein Jobticket zugesagt, das im Vertrag nicht erwähnt wird. Kann ich __47__ fest mit dieser Zusatzleistung rechnen?
Meine zweite Frage bezieht sich auf den Arbeitsort. Im Vertrag steht, __48__ Mitarbeiter bei Bedarf auch an einem anderen Ort in Deutschland eingesetzt werden können. Gilt das auch für meine Stelle? Das war mir nicht bewusst und wäre __49__ meiner familiären Situation momentan schwierig. __50__ ich, wie Sie wissen, zwei schulpflichtige Kinder habe, wäre ein Umzug für meine Familie nicht möglich.
Ich freue mich auf Ihre Rückmeldung und schicke Ihnen den Vertrag unverzüglich unterschrieben zurück, __51__ diese Punkte geklärt sind.
Ich freue mich auf meinen Arbeitsbeginn am 1. Juli.
Mit freundlichen Grüßen
Irina Lopez`,
    options: ['aufgrund', 'da', 'dabei', 'damit', 'dass', 'dennoch', 'indem', 'ob', 'obwohl', 'sobald'],
    answers: { 46: 'dabei', 47: 'dennoch', 48: 'dass', 49: 'aufgrund', 50: 'da', 51: 'sobald' }
  },
  {
    id: 4, label: '3', title: 'Arbeitsvertrag (Klingosbergr)',
    text: `Sehr geehrte Frau Klingosbergr,
vielen Dank für die positive Nachricht, bereits ab dem ersten März bei Ihnen anfangen zu dürfen. __46__ freue ich mich wirklich sehr. In der Anlage sende ich Ihnen den unterschriebenen Arbeitsvertrag zurück. Nun bin ich gespannt auf die zukünftige Arbeit und den ersten Tag an meinem neuen Arbeitsplatz.
Aber bis __47__ ist ja noch etwas Zeit und deshalb wollte ich Sie fragen, wie ich mich auf meine neue Tätigkeit vorbereiten kann. Vielleicht können Sie mir fachspezifische Internetseiten empfehlen, mit __48__ Hilfe ich mich intensiver mit den Produkten vertraut machen kann.
Bei dem Vorstellungsgespräch sprachen Sie __49__, dass Sie mir die Arbeitskleidung zur Verfügung stellen. Benötigen Sie __50__ meine Kleider- und Schuhgröße? Das erforderliche ärztliche Attest vom Gesundheitsamt bringe ich, __51__ besprochen, zum Arbeitsantritt mit.
Sollten Sie sonst irgendetwas von mir benötigten, können Sie mich natürlich gern kontaktieren.
Mit freundlichen Grüßen`,
    options: ['ansonsten', 'dafür', 'dahin', 'davon', 'deren', 'dessen', 'Hierüber', 'was', 'wie', 'anbei'],
    answers: { 46: 'Hierüber', 47: 'dahin', 48: 'deren', 49: 'davon', 50: 'dafür', 51: 'wie' }
  },
  {
    id: 5, label: '3.1', title: 'Arbeitsvertrag (Klingenberg, neue Version)',
    text: `Sehr geehrte Frau Klingenberg,
vielen Dank für die positive Nachricht, bereits zum ersten März bei Ihnen anfangen zu dürfen. Hierüber freue ich mich wirklich sehr. In der Anlage sende ich Ihnen den unterschriebenen Arbeitsvertrag __46__. Nun bin ich gespannt auf die zukünftige Arbeit und den ersten Tag an meinem neuen Arbeitsplatz.
Aber bis __47__ ist ja noch etwas Zeit und deshalb wollte ich Sie fragen, wie ich mich auf meine neue Tätigkeit vorbereiten kann. Vielleicht können Sie mir fachspezifische Internetseiten empfehlen, mit __48__ Hilfe ich mich intensiver mit den Produkten vertraut machen kann.
Bei dem Vorstellungsgespräch sprachen Sie __49__, dass Sie mir die Arbeitskleidung stellen. Benötigen Sie __50__ meine Kleider- und Schuhgrößen?
Das erforderliche ärztliche Attest vom Gesundheitsamt bringe ich, __51__ besprochen, zum Arbeitsantritt mit.
Sollten Sie sonst irgendetwas von mir benötigen, können Sie mich natürlich gern kontaktieren.
Mit freundlichen Grüßen
Philipp Kunz`,
    options: ['ansonsten', 'dafür', 'dahin', 'davon', 'deren', 'dessen', 'zurück', 'was', 'wie', 'anbei'],
    answers: { 46: 'zurück', 47: 'dahin', 48: 'deren', 49: 'davon', 50: 'dafür', 51: 'wie' }
  },
  {
    id: 6, label: '3.2', title: 'Arbeitsvertrag (Klingenberg, Tест №100221)',
    text: `Sehr geehrte Frau Klingenberg,
vielen Dank für die positive Nachricht, bereits zum ersten März bei Ihnen anfangen zu dürfen. Hierüber freue ich mich wirklich sehr. In der Anlage sende ich Ihnen den unterschriebenen Arbeitsvertrag __46__. Nun bin ich gespannt auf die zukünftige Arbeit und den ersten Tag an meinem neuen Arbeitsplatz.
Aber bis __47__ ist ja noch etwas Zeit und deshalb wollte ich Sie fragen, wie ich mich auf meine neue Tätigkeit vorbereiten kann. Vielleicht können Sie mir fachspezifische Internetseiten empfehlen, mit __48__ Hilfe ich mich intensiver mit den Produkten vertraut machen kann.
Bei dem Vorstellungsgespräch sprachen Sie __49__, dass Sie mir die Arbeitskleidung stellen. Benötigen Sie __50__ meine Kleider- und Schuhgrößen?
Das erforderliche ärztliche Attest vom Gesundheitsamt bringe ich, __51__ besprochen, zum Arbeitsantritt mit.
Sollten Sie sonst irgendetwas von mir benötigen, können Sie mich natürlich gern kontaktieren.
Mit freundlichen Grüßen
Philipp Kunz`,
    options: ['anbei', 'ansonsten', 'dafür', 'dahin', 'davon', 'deren', 'dessen', 'was', 'wie', 'zurück'],
    answers: { 46: 'zurück', 47: 'dahin', 48: 'deren', 49: 'davon', 50: 'dafür', 51: 'wie' }
  },
  {
    id: 7, label: '4', title: 'Kündigung (Reinicke)',
    text: `Sehr geehrter Herr Dr. Reinicke,
hiermit kündige ich den mit Ihnen geschlossenen Arbeitsvertrag form- und fristgerecht __46__ nächstmöglichen Datum.
Wie ich Ihnen in unserem persönlichen Gespräch erklärt habe, habe ich mir die Entscheidung nicht leicht gemacht. Da aber mein Mann von seiner Firma nach Berlin versetzt wurde, wird unsere gesamte Familie so bald wie __47__ umziehen. Mir ist bewusst, dass ich eine dreimonatige Kündigungsfrist habe, aber dennoch bitte ich Sie um eine __48__ Freistellung ab dem 15. des nächsten Monats.
Für die lange Zeit, die ich in dieser Firma hatte, möchte ich mich __49__ bei Ihnen bedanken. Ich habe viel in Ihrem Unternehmen gelernt und danke Ihnen für die __50__ Unterstützung, die ich stets in der Firma erfahren habe.
Bitte bestätigen Sie mir den Erhalt meiner Kündigung __51__ das Datum, zu dem der Arbeitsvertrag endet.
Mit freundlichen Grüßen
Irina Kaspercik`,
    options: ['anhaltende', 'ausdrücklich', 'möglich', 'nötig', 'nur', 'sowie', 'spätere', 'vorzeitige', 'wegen', 'zum'],
    answers: { 46: 'zum', 47: 'möglich', 48: 'vorzeitige', 49: 'ausdrücklich', 50: 'anhaltende', 51: 'sowie' }
  },
  {
    id: 8, label: '4.1', title: 'Kündigung (Reinicke, neuer Lücke №47)',
    text: `Sehr geehrter Herr Dr. Reinicke,
hiermit kündige ich den mit Ihnen geschlossenen Arbeitsvertrag form- und fristgerecht __46__ nächstmöglichen Datum.
__47__ ich Ihnen in unserem persönlichen Gespräch erklärt habe, habe ich mir die Entscheidung nicht leicht gemacht. Da aber mein Mann von seiner Firma nach Berlin versetzt wurde, wird unsere gesamte Familie so bald wie möglich umziehen. Mir ist bewusst, dass ich eine dreimonatige Kündigungsfrist habe, aber dennoch bitte ich Sie um eine __48__ Freistellung ab dem 15. des nächsten Monats.
Für die lange Zeit, die ich in dieser Firma hatte, möchte ich mich __49__ bei Ihnen bedanken. Ich habe viel in Ihrem Unternehmen gelernt und danke Ihnen für die __50__ Unterstützung, die ich stets in der Firma erfahren habe.
Bitte bestätigen Sie mir den Erhalt meiner Kündigung __51__ das Datum, zu dem der Arbeitsvertrag endet.
Mit freundlichen Grüßen
Irina Kaspercik`,
    options: ['anhaltende', 'ausdrücklich', 'wie', 'nötig', 'nur', 'sowie', 'spätere', 'vorzeitige', 'wegen', 'zum'],
    answers: { 46: 'zum', 47: 'wie', 48: 'vorzeitige', 49: 'ausdrücklich', 50: 'anhaltende', 51: 'sowie' }
  },
  {
    id: 9, label: '5', title: 'Probearbeiten (Sabani)',
    text: `Sehr geehrte Frau Sabani,
es freut mich sehr, dass ich in meinem Vorstellungsgespräch einen ersten positiven Eindruck hinterlassen habe und Sie mich __46__ Probearbeiten einladen. Natürlich nutze ich sehr gern diese Gelegenheit, meine Fähigkeiten __47__ Beweis zu stellen. Von den beiden Terminvorschlägen, die Sie mir geschickt haben, passt mir der nächste Dienstag am besten. Ich freue mich __48__, bei dieser Gelegenheit __49__ einen ersten Einblick in die Arbeitsabläufe und Abteilungen in Ihrem Haus zu bekommen.
Stellen Sie mir die Arbeitskleidung für diesen Tag zur Verfügung oder soll ich selbst spezielle Kleidung mitbringen? Gibt es noch irgendwas, __50__ ich vorher besorgen muss? Brauche ich __51__ noch eine ärztliche Bescheinigung vom Gesundheitsamt?
Danke im Voraus für eine kurze Beantwortung meiner Fragen.`,
    options: ['worüber', 'bereits', 'eventuell', 'in', 'manchmal', 'darauf', 'unter', 'was', 'noch', 'zum'],
    answers: { 46: 'zum', 47: 'unter', 48: 'darauf', 49: 'bereits', 50: 'was', 51: 'eventuell' }
  },
  {
    id: 10, label: '6', title: 'Fragen zur Ausbildung',
    text: `Sehr geehrte Damen und Herren,
ich habe mich sehr darüber gefreut, dass ich meine Ausbildung __46__ Kauffrau für Büromanagement im August in Ihrem Unternehmen beginnen kann.
Ich würde gern wissen, __47__ die Ausbildung zeitlich organisiert ist. Im Vorstellungsgespräch teilten Sie mir mit, dass sich die theoretischen und praktischen Blöcke teilt. Im Gegensatz __48__ praktischen Block müsste ich mir für die Zeit der Theorie ein Zimmer mieten. __49__ wäre es wichtig, so schnell wie möglich die Termine zu wissen. In diesem Zusammenhang möchte ich nachfragen, __50__ es möglich wäre, dass die Firma für die Theoriephasen einen Zuschuss für die Miete bezahlt.
Außerdem würde ich gern erfahren, wer mein Ansprechpartner __51__ des praktischen Teils der Ausbildung sein wird.
Mit freundlichen Grüßen
Anna Ivanova`,
    options: ['dass', 'deshalb', 'innerhalb', 'ob', 'während', 'weil', 'wie', 'zu', 'zum', 'zur'],
    answers: { 46: 'zur', 47: 'wie', 48: 'zum', 49: 'deshalb', 50: 'ob', 51: 'während' }
  },
  {
    id: 11, label: '7', title: 'Kündigung (Schneider)',
    text: `Sehr geehrte Frau Schneider,
ich teile Ihnen mit, dass ich mein Arbeitsverhältnis zum 31.03. fristgerecht kündige, weil mein Mann am 01.05. __46__ einer neuen Tätigkeit in Süddeutschland beginnt und die ganze Familie im April dorthin umziehen wird. Dieser Schritt ist für mich nicht leicht, ich war __47__ immer sehr gerne hier tätig.
Ich habe noch einige Fragen __48__ den Formalitäten: Bitte teilen Sie mir mit, bis wann und wo ich den Firmenwagen abgeben und ob ich die Daten von meinem Firmenlaptop löschen soll. __49__ bitte ich Sie um ein Zwischenzeugnis, da ich mich jetzt schon um eine neue Stelle bewerben möchte. Würden Sie mir bitte auch mitteilen, ob mir mein Arbeitszeugnis am letzten Arbeitstag ausgehändigt oder __50__ Nachhinein zugeschickt wird?
Ich bedanke __51__ für die interessante Zeit in Ihrem Unternehmen und die fruchtbare Zusammenarbeit.
Mit freundlichen Grüßen
Melanie Sommer`,
    options: ['am', 'außerdem', 'bis', 'deshalb', 'Ihnen', 'im', 'mich', 'mit', 'nämlich', 'zu'],
    answers: { 46: 'mit', 47: 'nämlich', 48: 'zu', 49: 'außerdem', 50: 'im', 51: 'mich' }
  },
  {
    id: 12, label: '8', title: 'Kündigung (MillerFood)',
    text: `Sehr geehrte Damen und Herren,
mit __46__ Schreiben kündige ich form- und fristgerecht meinen Arbeitsvertrag zum 31.12.20xx. Ich habe mir diese Entscheidung nicht leichtgemacht, __47__ ich sehr gerne bei der MillerFood GmbH gearbeitet habe. __48__ leider sehe ich hier im Unternehmen keine Möglichkeiten, mich weiterzuentwickeln, und habe mich deshalb dazu entschlossen, eine Stelle in einem größeren Unternehmen anzunehmen.
Mir stehen noch vier Tage Resturlaub __49__. Da in unserer Abteilung kurz vor dem Jahresende sehr viel zu tun ist, würde ich vorschlagen, dass Sie mir diese Tage auszahlen und ich noch bis zum Jahresende arbeite.
Sollte das nicht möglich sein, ist mein letzter Arbeitstag der 23.12.20xx, da __50__ 31.12.20xx auf einen Samstag fällt.
Ich bitte um eine schriftliche Bestätigung über den Erhalt meiner Kündigung und den Bescheid, __51__ wir mit den restlichen Urlaubstagen verfahren sollen.
Ich bedanke mich für die Zusammenarbeit!
Mit freundlichen Grüßen
Markus Stein`,
    options: ['aber', 'auf', 'da', 'den', 'dennoch', 'der', 'diesem', 'wenn', 'wie', 'zu'],
    answers: { 46: 'diesem', 47: 'da', 48: 'aber', 49: 'zu', 50: 'der', 51: 'wie' }
  }
];

export default sprachbausteineTeil1Variants;
