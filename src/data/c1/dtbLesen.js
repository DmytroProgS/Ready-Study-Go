// DTB C1 — Lesen. Варіанти з файлу групи B2_C2_Deutsch («letzte Version alle 3 teilen»).
// Тексти й відповіді — як записали учасники (з мінімальною правкою очевидних описок).

const I_TEIL1 = 'Lesen Sie die Situationen 1–5 und die Überschriften/Texte a–h. Welcher Text passt zu welcher Person? Jeder Text passt nur einmal. Drei Texte bleiben übrig.';
const I_TEIL2 = 'Lesen Sie die Texte und die Aufgaben 6–9. Ist die Aussage richtig oder falsch und welche Antwort (a, b oder c) passt am besten?';
const I_TEIL3 = 'Lesen Sie die Fragen 10–13 und die Antworten a–f aus einem Forum. Welche Antwort passt zu welcher Frage? Für ein bis zwei Fragen gibt es keine passende Antwort — dann markieren Sie x.';
const I_TEIL4 = 'Lesen Sie das Protokoll und die Aufgaben 14–18. Welche Antwort (a, b oder c) passt am besten?';
const I_TEIL5 = 'Lesen Sie die beiden E-Mails und die Aufgaben 19–20. Welche Antwort (a, b oder c) passt am besten?';

// ---------------- Teil 1 ----------------
export const lesenTeil1 = [
  {
    label: 'Variante 1',
    instruction: I_TEIL1,
    questions: [
      { n: 1, text: 'Anastasia sucht nach Tipps zum Stressabbau im Beruf.', answer: 'e' },
      { n: 2, text: 'Ivo überlegt, ob er für ein Start-up-Unternehmen arbeiten soll.', answer: 'g' },
      { n: 3, text: 'Kristina möchte nach der Elternzeit zurück in den Beruf.', answer: 'a' },
      { n: 4, text: 'Soufian weiß nicht, was er nach der Schule machen soll.', answer: 'h' },
      { n: 5, text: 'Musa möchte sich als Übersetzer selbstständig machen.', answer: 'c' },
    ],
    options: {
      a: { title: 'Die richtigen Strategien sind entscheidend', text: 'Nach einer längeren Auszeit vom Berufsleben stehen viele Arbeitnehmer vor den gleichen Problemen: Die Branche hat sich verändert, bekannte Routinen greifen nicht mehr und neue Fertigkeiten sind gefragt. Die Hoffnung aufgeben? Auf gar keinen Fall, denn mit den richtigen Strategien gelingt der Wiedereinstieg.' },
      b: { title: 'Überraschendes Ergebnis einer Langzeitstudie', text: 'Börsenmakler? Notarzt? Oder doch Kellner? Wer an stressige Berufe denkt, dem fallen vermutlich gleich mehrere Beispiele ein. Es gibt schließlich kaum einen Job, der nicht ab und zu stressig ist. Doch welcher ist eigentlich der stressigste? Dieser Frage ist ein Forscherteam aus den USA nachgegangen.' },
      c: { title: 'Geht nicht, gibt’s nicht', text: 'Mit dem von Wirtschaftsexpertin Lina Benning ins Leben gerufenen Symposium für Freiberufler und Existenzgründer bietet sich eine neue Plattform für alle jungen Menschen, die ihr eigener Chef werden wollen oder noch in der Anfangsphase ihres neu gegründeten Unternehmens stecken.' },
      d: { title: 'Unzufriedenheit – ein starker Motor für Veränderung', text: 'Die Aufgaben im Job haben Sie sich irgendwie anders vorgestellt, das Gehalt könnte besser sein und die vielen Überstunden standen so nicht im Plan? Heißen Sie Ihre Unzufriedenheit willkommen und nutzen Sie sie als Antrieb, um Veränderungen anzustoßen.' },
      e: { title: 'Ungewöhnlich, aber effektiv: Grimassenschneiden', text: 'Es muss nicht immer Yoga sein. Viele kleine Tricks können im Arbeitsalltag für schnelle Entspannung und mehr Gelassenheit sorgen. Grimassenschneiden z. B. bewirkt eine sofortige Lockerung der Muskulatur im Gesicht. Wenn Sie dabei lachen müssen, umso besser. Ähnlich wirksam: Pistazien knabbern, gähnen oder Hände waschen.' },
      f: { title: 'Ich bin dann mal weg', text: 'Die einen wollen sich weiterbilden, die anderen um die Welt reisen oder mehr Zeit für die Familie haben – eine längere berufliche Auszeit ist der Wunsch vieler Arbeitnehmer. Das Problem ist nur: Einen Anspruch auf ein Sabbatical gibt es im Arbeitsrecht nicht.' },
      g: { title: 'Schneller und unkomplizierter Berufseinstieg?', text: 'Sie gelten als frisch, dynamisch und innovativ und sind vor allem für junge Erwerbstätige und Quereinsteiger ein attraktiver Arbeitgeber. Doch wie ist es wirklich, in einem jungen Unternehmen der Gründerszene zu arbeiten? Wir haben uns für Sie umgehört.' },
      h: { title: 'Die Berufswelt von innen betrachten', text: '„Finde einen Beruf, der dir Spaß macht, und du wirst nie einen Tag im Leben arbeiten müssen“, lautet ein viel zitierter Spruch. „Klingt gut, funktioniert aber nicht“, sagt Karriereberater Johannes Ferber. In seinem neuen Buch gibt es wertvolle Praxistipps, die bei der beruflichen Erstorientierung helfen.' },
    },
  },
  {
    label: 'Variante 2',
    instruction: I_TEIL1,
    questions: [
      { n: 1, text: 'Tina hat den ersten Termin mit ausländischen Geschäftspartnern.', answer: 'e' },
      { n: 2, text: 'Hans wünscht sich mehr Zufriedenheit und Erfüllung bei der Arbeit.', answer: 'h' },
      { n: 3, text: 'Stefan würde gern ein Studium mit einer Ausbildung kombinieren.', answer: 'c' },
      { n: 4, text: 'Selena fragt nach Finanzierungsmöglichkeiten für ihre Fortbildung.', answer: 'a' },
      { n: 5, text: 'Mike möchte in Vorstellungsgesprächen selbstbewusster auftreten.', answer: 'g' },
    ],
    note: 'Відповіді 1–4 у групі позначені як 100 %, відповідь на 5 (g) без такої позначки.',
    options: {
      a: { title: 'Mit Unterstützung zum Ziel', text: 'Sie möchten sich beruflich weiterentwickeln? Und bisher schrecken Sie die hohen Kosten ab? Wir haben die Lösung: Die Arbeitsagentur bietet auf vielerlei Art Unterstützung an, z. B. mit Bildungsgutscheinen, Aufstiegsstipendien und Weiterbildungsprämien.' },
      b: { title: 'Geld oder Leben', text: 'Wenn man die Ausbildung abgeschlossen hat und nach der ersten Stelle sucht, stellt man sich häufig die Frage nach persönlichen Prioritäten. Was ist wichtiger: ein hohes Gehalt oder eine sinnerfüllende Tätigkeit?' },
      c: { title: 'Verknüpfung von Theorie und Praxis', text: 'Das duale Studium hat sich in den letzten Jahren auf dem Arbeitsmarkt fest etabliert. Der praktische Teil, den man aus dem beruflichen Alltag gut kennt, wird durch Seminare und andere Lehrveranstaltungen an Hochschulen ergänzt.' },
      d: { title: 'Studieren und gleichzeitig einen Beruf ausüben – geht das?', text: 'Zur Finanzierung ihres Studiums sind viele Studierende gezwungen, nebenbei zu jobben. Nicht alle können ein Studium mit Hilfe der Eltern oder mit BAföG finanzieren. Wenn sie gut organisiert sind, lässt sich aber auch das schaffen.' },
      e: { title: 'Feingefühl für kulturelle Unterschiede', text: 'Im Berufsleben spielen bei der Kommunikation nicht nur die sprachlichen Details eine große Rolle. Man sollte auch wissen, wie man sich auf dem internationalen Parkett richtig bewegt.' },
      f: { title: 'Mit mehr Mut zur Arbeit', text: 'Was sind die Gründe dafür, dass manche Menschen im beruflichen Leben nicht so selbstsicher sind? Der Karrierecoach Jörg Schön meint, es könne einerseits an der Angst liegen, abgelehnt zu werden, aber auch Versagensängste könnten eine Rolle spielen.' },
      g: { title: 'Selbstsicher vor Publikum', text: 'Zweifeln Sie manchmal an sich, wenn Sie Präsentationen halten müssen? Im neuen Online-Kurs von berufsskills.de können Sie Ihre Kommunikationsfähigkeiten im Job in geschützter Umgebung verbessern. Ihr Selbstvertrauen wird einen neuen Schub bekommen.' },
      h: { title: 'Wie findet man eine sinnvolle Beschäftigung?', text: 'Für viele Menschen ist es nicht das Entscheidende, eine Führungsposition zu erlangen, sondern eine Berufstätigkeit zu haben, die als befriedigend empfunden wird. Das ist aber sehr subjektiv und hängt von der persönlichen Situation ab.' },
    },
  },
  {
    label: 'Variante 3',
    instruction: I_TEIL1,
    note: 'У групі до варіанта 3 написано: «десь 1 помилка, можливо в Beschwerde» — відповіді не гарантовані.',
    questions: [
      { n: 1, text: 'Kristin fühlt sich im Arbeitsalltag oft überfordert.', answer: 'b' },
      { n: 2, text: 'Ayoub scheut sich, Entscheidungen zu treffen.', answer: 'e' },
      { n: 3, text: 'Claudia fällt es schwer, die tägliche Korrespondenz zu erledigen.', answer: 'f' },
      { n: 4, text: 'Michael ist aufgrund seiner Schichtarbeit oft erschöpft.', answer: 'd' },
      { n: 5, text: 'Rebecca würde gern eine Führungsposition übernehmen.', answer: 'g' },
    ],
    options: {
      a: { title: 'Alle Jahre wieder', text: 'Die ersten Sonnenstrahlen locken, aber wir fühlen uns abgeschlagen und müde. Woher kommt das bloß? Hat das mit unserer inneren Uhr zu tun? Frühjahrsmüdigkeit ist in der Tat keine Einbildung, sondern lässt sich wissenschaftlich belegen.' },
      b: { title: 'Das ABC für mehr Gelassenheit', text: 'Wenn man Kundenanfragen beantwortet, geht es manchmal drunter und drüber. Das Telefon klingelt ununterbrochen und die Kollegen wollen auch ständig was. Stress pur! Gar nicht so einfach, da immer einen kühlen Kopf zu bewahren. Erfolgscoach Katrin Scheiding zeigt Ihnen, wie das geht.' },
      c: { title: 'Sich für einen neuen Weg entscheiden?', text: 'Jeder Arbeitnehmer zweifelt mal: Ist das wirklich der richtige Job für mich? Solche Bedenken sollte man nicht grundsätzlich ignorieren, sie gehören aber auch zum Arbeitsalltag dazu. Anhand dieser Checkliste können Sie überprüfen, ob Ihre Zweifel berechtigt sind und Sie den Job wechseln sollten.' },
      d: { title: 'Gegen den Biorhythmus', text: 'Das Phänomen des Jetlags entsteht nicht nur nach einer langen Reise und der Überquerung mehrerer Zeitzonen, auch das Arbeiten zu unregelmäßigen Zeiten kann die innere Uhr auf den Kopf stellen. Doch welche gesundheitlichen Folgen kann dieser Lebensrhythmus haben?' },
      e: { title: 'Intuition contra Verstand', text: 'Jeder Mensch besitzt Intuition, aber sollen Sie auch in Ihrem Berufsleben auf Ihren Bauch hören? Ein gutes Zusammenspiel zwischen Kopf und Bauch ist in der Regel essenziell. Jetzt stellt sich aber die Frage, wie Sie beides in Einklang bringen können.' },
      f: { title: 'Berufliche Kommunikation in Wort und Schrift', text: 'Gelungene Schreiben sind die perfekte Visitenkarte für ein Unternehmen. So kann man sich professionell und kundenorientiert präsentieren. Doch nicht immer trifft man den richtigen Stil. Der Schreibcoach verrät Ihnen, worauf Sie achten müssen.' },
      g: { title: 'Ratschläge für Frauen im Beruf', text: 'Meistens wird damit argumentiert, dass Frauen nicht genügend Chancen bekommen, Karriere zu machen. Allerdings behauptet die Professorin für Betriebswirtschaft Christiane Sitrowitsch, dass dies nicht der Realität entspreche. Sie rät: „Steht endlich für euer Können ein!“' },
      h: { title: 'Tipps für die Kommunikation in Beruf und Alltag', text: 'Obwohl nicht ein Wort den Mund verlässt, spricht unser Körper bereits Bände und offenbart Dinge, die wir vielleicht lieber für uns behalten würden. Kommunikationswissenschaftler Dr. Mathias Baranowski erklärt Ihnen, wie Sie in schwierigen Verhandlungen ein Pokerface bewahren.' },
    },
  },
];

// ---------------- Teil 2 ----------------
const mappe = (title, text) => [
  { type: 'title', text: 'Willkommensmappe für neue Mitarbeiterinnen und Mitarbeiter', sub: title },
  ...text.map((p) => ({ type: 'p', text: p })),
];

export const lesenTeil2 = [
  {
    label: 'Variante 1',
    instruction: I_TEIL2,
    sections: [
      {
        title: 'Text 1 — Kinderbetreuung',
        blocks: mappe('Kinderbetreuung', [
          'Wir bieten in unserem Unternehmen die Möglichkeit einer hauseigenen Kinderbetreuung an. Mitarbeiter können auf diese Weise Fahrtwege sparen, da Arbeit und Kita an einem Ort sind. Die Kita bietet Betreuungsmöglichkeiten für Kinder im Alter zwischen sechs Monaten und zwölf Jahren.',
          'Wir haben zwei Betreuungsgruppen eingerichtet, in denen sich jeweils ganztags unser zweisprachiges Erzieherteam um die Kinder kümmert. Während in der Gruppe „Medienmäuse“ die ganz Kleinen im Alter von sechs Monaten bis drei Jahren versorgt werden, betreut unser Team in der Gruppe „Lesebuch“ die Kindergartenkinder im Alter von drei bis sechs Jahren. Weiterhin bieten wir eine Nachmittagsbetreuung für Kinder zwischen sechs und zwölf Jahren an. Hier können sie nach der Schule auch Hilfe bei den Hausaufgaben in Anspruch nehmen. Passend zu unserem Gleitzeitmodell sind die beiden Gruppen von 7:30 Uhr bis 17:30 Uhr geöffnet. Die Nachmittagsbetreuung beginnt bereits um 11:30 Uhr und schließt ebenfalls um 17:30 Uhr.',
          'Neben dem Mittagessenangebot und der täglichen Vorlesestunde legen wir einen Schwerpunkt auf systematische Spracherziehung mit Hilfe von Lernspielen in deutscher und englischer Sprache. Sollten Sie an diesem Angebot interessiert sein, wenden Sie sich gerne im Personalbüro an Frau Sagbarsten, die Ihnen alle Formalitäten erklären wird.',
        ]),
        questions: [
          { n: 6, rf: true, text: 'Die Kita hat ihren Standort auf dem Firmengelände.', answer: 'richtig' },
          { n: 7, text: 'In der Kindertagesstätte gibt es', options: ['einen Fokus auf Leseförderung.', 'feste Bring- und Abholzeiten.', 'nach Alter gestaffelte Gruppen.'], answer: 'c' },
        ],
      },
      {
        title: 'Text 2 — Sicherheit im Lager',
        blocks: mappe('Sicherheit im Lager', [
          'Bevor Mitarbeiter das Lager betreten, sind sie verpflichtet, ihre Sicherheitsausrüstung, bestehend aus einem Arbeitsanzug, festen Schuhen mit Metallkappen, einem Schutzhelm und Arbeitshandschuhen, anzulegen. Zutritt zum Lager haben nur Personen, die dort arbeiten. Unbefugten ist der Zutritt strengstens untersagt.',
          'Zur Unfallvermeidung ist sicherzustellen, dass sämtliche Gänge frei sind und keine Gegenstände auf dem Boden liegen. Darüber hinaus müssen alle Regale so gesichert sein, dass sie nicht umfallen können. Eine Überladung der Regalbretter ist zu vermeiden, damit keine Gegenstände herunterfallen und so ein Verletzungsrisiko entsteht.',
          'Um Fehlbelastungen der Wirbelsäule oder Verletzungen an den Händen zu vermeiden, sind beim Transport von Waren geeignete Hilfsmittel zu verwenden. Dazu gehören insbesondere Tragegurte, Sackkarren und Gabelstapler. Letztere dürfen nur von Personen bedient werden, die eine entsprechende Qualifizierung haben. Weiterhin ist es strengstens untersagt, zu zweit auf einem Gabelstapler zu fahren.',
          'Es werden regelmäßig Übungen durchgeführt, um sicherzustellen, dass im Falle eines Brandes das Lager zügig geräumt wird und alle Sicherheitsmaßnahmen getroffen werden. Des Weiteren hängen an mehreren Stellen im Lager Fluchtpläne für den Notfall aus. Es gehört zu Ihren Pflichten, sich in regelmäßigen Abständen über die Fluchtwege zu informieren.',
          'Einmal jährlich findet eine Sicherheitsunterweisung für die Mitarbeiter durch den Logistikleiter statt. Bei Bedarf kann hier auch die Schutzausrüstung aller Kollegen überprüft, vervollständigt oder ausgetauscht werden.',
        ]),
        questions: [
          { n: 8, rf: true, text: 'Die Sicherheitsschulung wird von einem externen Mitarbeiter vorgenommen.', answer: 'falsch' },
          { n: 9, text: 'Die Mitarbeiter im Lager', options: ['erhalten zum Arbeitsantritt die Berechtigung, Gabelstapler zu fahren.', 'müssen ihre Sicherheitskleidung regelmäßig kontrollieren lassen.', 'sollen sich nach Möglichkeit regelmäßig die Fluchtpläne anschauen.'], answer: 'c' },
        ],
      },
    ],
  },
  {
    label: 'Variante 2',
    instruction: I_TEIL2,
    sections: [
      {
        title: 'Text 1 — Arbeitszeit, Überstunden, Krankheit',
        blocks: mappe('Arbeitszeit', [
          'Die regelmäßige Arbeitszeit der Arbeitnehmer beträgt wöchentlich 39,5 Stunden und bei Beamten 41 Stunden pro Woche. Im Rahmen unseres Gleitzeitmodells können Sie Ihre Arbeitszeit flexibel zwischen 6:00 und 19:30 Uhr leisten, jedoch dürfen in diesem Zeitraum maximal zehn Stunden täglich gearbeitet werden. Die Kernarbeitszeit liegt zwischen 9:30 und 15:30 Uhr.',
          'Die Zeiterfassung erfolgt EDV-gestützt und wird durch die Verwendung der persönlichen Chipkarte von den Mitarbeitern auf Vertrauensbasis vorgenommen. Im Bereich der Eingänge des Hauses befinden sich Zeiterfassungsgeräte. Diese sind grundsätzlich bei jedem Betreten und Verlassen des Gebäudes zu betätigen.',
          'Durch die elektronische Zeiterfassung ist es möglich, geleistete Überstunden automatisch zu registrieren. Deren Abbau über Gleittage ist, gemäß der Betriebsvereinbarung vom 28. April 2017, bis zum Ablauf des 31. März des Folgejahres durch die Teamleitung zu genehmigen. Bis zu diesem Zeitpunkt nicht abgebaute Überstunden werden nicht ausgezahlt, sondern verfallen ohne weitere Mitteilung.',
          'Im Krankheitsfall ist dieser unverzüglich im Vorzimmer des Amtes (Victoria Meyer, 069-39 67 385) bis spätestens 9:00 Uhr bereits am ersten Krankheitstag zu melden. Ärztliche Krankmeldungen müssen bei Arbeitnehmern nach Abwesenheit von drei Kalendertagen und bei Beamten nach Abwesenheit von fünf Kalendertagen am darauffolgenden Arbeitstag vorgelegt werden. Arztbesuche sind außerhalb der Arbeitszeit durchzuführen.',
        ]),
        questions: [
          { n: 6, rf: true, text: 'Die Arbeitszeiten können von den Angestellten teilweise selbst bestimmt werden.', answer: 'richtig' },
          { n: 7, text: 'Die Mitarbeitenden', options: ['dürfen in den ersten beiden Quartalen Überstunden abbauen.', 'können sich auf Wunsch Überstunden vergüten lassen.', 'sind selbst für den Ausgleich der Überstunden verantwortlich.'], answer: 'c' },
        ],
      },
      {
        title: 'Text 2 — Dienstreisen',
        blocks: mappe('Dienstreisen', [
          'Eine Dienstreise muss in jedem Fall vor Reiseantritt im dafür vorgesehenen Online-Formular beantragt und durch den Vorgesetzten genehmigt werden. Allerdings erfolgt eine Genehmigung nur, wenn das Dienstgeschäft nicht auf eine kostengünstigere Weise erledigt werden kann, wie zum Beispiel als Telefon- oder Videokonferenz. Dabei sind die Grundsätze der Sparsamkeit, der Wirtschaftlichkeit und Fürsorge zu beachten. Deshalb sind die Dauer und die Teilnehmerzahl der Dienstreise auf das notwendige Maß zu beschränken.',
          'Grundsätzlich können bei einer Dienstreise die Verkehrsmittel frei gewählt werden. Hierbei ist zu beachten, dass dabei keine wirtschaftlich unvertretbaren Ergebnisse entstehen. Bahnreisen innerhalb Deutschlands sind Flugreisen mit Transfer vorzuziehen, wenn die Bahnreise auch unter Berücksichtigung der Reisedauer die günstigere Alternative ist. Auf Dienstreisen mit der Bahn ist den meisten Beschäftigten lediglich die Benutzung der zweiten Klasse gestattet. Nur Betriebsräten ist bei Ausübung ihrer Tätigkeit die Buchung der ersten Klasse gestattet. Des Weiteren besteht für Bahnreisen im Ausland die Option, ein Ticket der ersten Klasse zu nutzen, sofern die Fahrtzeit drei Stunden überschreitet.',
          'Erstattungsfähig sind Fahrt- und Flugkosten sowie Wegstreckenentschädigungen bei Benutzung eines privaten Fahrzeugs. Kommen mehrere vergleichbare Optionen für die Durchführung der Dienstreise in Betracht, so ist immer die kostengünstigere Variante zu wählen. Dabei ist zu beachten, dass immer die Möglichkeit bestehen muss, dass es zur Umbuchung kommen kann.',
          'Die Reisezeit wird als normale Arbeitszeit verbucht, auch wenn während der Reise nicht gearbeitet wird. Am Ziel der Dienstreise angekommen, gilt die übliche Arbeitszeit, d. h. acht Stunden pro Tag, in Ausnahmefällen innerhalb der darauffolgenden 14 Tage einen Ersatzruhetag.',
        ]),
        questions: [
          { n: 8, rf: true, text: 'Bei Dienstreisen ist der private PKW zu bevorzugen.', answer: 'falsch' },
          { n: 9, text: 'Bahnfahrten in der ersten Klasse', options: ['können bei Inlandsfahrten über drei Stunden gebucht werden.', 'sind aus Kostengründen grundsätzlich nicht möglich.', 'sind im Inland auf einen bestimmten Mitarbeiterkreis beschränkt.'], answer: 'c' },
        ],
      },
    ],
  },
  {
    label: 'Variante 3',
    instruction: I_TEIL2,
    sections: [
      {
        title: 'Text 1 — Frauenbeauftragte',
        blocks: mappe('Gleichstellung', [
          'Wir sind ein weltoffenes und modernes Unternehmen und engagieren uns für die gleichberechtigte Teilhabe von Frauen in unserer Firma. Um das zu gewährleisten, haben wir eine Frauenbeauftragte, Frau Peters, die uns bei der Umsetzung der Ziele des Bundesgleichstellungsgesetzes unterstützt. Für Frauen haben wir ein breites Angebot, angefangen von sehr flexiblen Arbeitszeitregelungen bis zu persönlichen Beratungsmöglichkeiten.',
          'Während im gesamten Unternehmen bei Führungspositionen eine Frauenquote von 30 % gilt, liegt unserem Nachwuchskräfteprogramm eine Frauenquote von 50 % zugrunde. Die Frauenbeauftragte nimmt an allen Besetzungsverfahren für Führungskräfte teil.',
          'In Frau Peters’ Büro finden Sie eine große Auswahl von Informationsbroschüren (z. B. zum Mutterschutz), Tipps für Alleinerziehende und einen Veranstaltungskalender mit Fortbildungsangeboten und Vorträgen. Darüber hinaus organisiert sie einmal im Quartal ein firmen- und branchenübergreifendes Netzwerktreffen, an dem regelmäßig weibliche Angestellte aus der gesamten Region teilnehmen. Quartalsweise gibt es immer ein Schwerpunktthema (wie z. B. Verhalten bei Gehaltsverhandlungen), zu dem spannende Präsentationen und Diskussionsrunden stattfinden.',
          'Sie finden die Frauenbeauftragte im Büro der Personalabteilung im ersten Stock im Hauptgebäude. Selbstverständlich werden alle Anliegen vertraulich behandelt.',
        ]),
        questions: [
          { n: 6, rf: true, text: 'Frau Peters veranstaltet firmeninterne Treffen für Arbeitnehmerinnen.', answer: 'falsch' },
          { n: 7, text: 'Führungspositionen', options: ['sind nicht zu gleichen Teilen mit Frauen und Männern besetzt.', 'werden vorrangig an Bewerberinnen vergeben.', 'liegen zu 50 % in den Händen von Frauen.'], answer: 'a' },
        ],
      },
      {
        title: 'Text 2 — Homeoffice',
        blocks: mappe('Homeoffice', [
          'Unser Unternehmen bietet den Angestellten in der Verwaltung die Möglichkeit, tageweise im Homeoffice zu arbeiten. Um eine reibungslose Organisation der Arbeit zu gewährleisten, sollten feste Wochentage für die Homeoffice-Zeiten festgelegt werden. Sollte es zu Abweichungen kommen, muss dies eine Woche vorher angekündigt werden. Grundsätzlich können keine Heimarbeitstage direkt vor oder nach Wochenenden, Feiertagen oder dem Urlaub genommen werden.',
          'Für die Arbeit von zu Hause aus wird Ihnen von Ihrer Abteilung ein Notebook zur Verfügung gestellt. Mittels eines VPN-Tunnels, der für Sie eingerichtet wird, können Sie auch von Ihrem Wohnort aus auf Dokumente und E-Mails der Firma zugreifen. Der firmeneigene Laptop ist ausschließlich für den beruflichen Gebrauch und darf nicht privat genutzt werden.',
          'Die Erfassung der Arbeitszeit während der Homeoffice-Tage erfolgt auf Vertrauensbasis. Bitte beantragen Sie die Zeiten in unserer digitalen Zeiterfassung teamax. Nach der Genehmigung durch Ihre Teamleitung wird die vorgeschriebene Arbeitszeit von 7,5 Stunden zu Beginn des Arbeitstages automatisch auf Ihrem Stundenkonto verbucht. Sollten Sie an einem Tag mehr gearbeitet haben, können Sie diese Stunden über das Formular „Korrekturstunden“ nachtragen. In Ausnahmefällen ist eine Arbeitszeit von zehn Stunden pro Tag erlaubt. Beachten Sie dabei, dass Pausen- bzw. Ruhezeiten eingehalten werden müssen.',
          'Zu den Kernarbeitszeiten von 9:30 bis 15:30 Uhr sind die Angestellten im Homeoffice dazu verpflichtet, telefonisch erreichbar zu sein. Die Gestaltung der restlichen Arbeitszeit ist ihnen freigestellt.',
        ]),
        questions: [
          { n: 8, rf: true, text: 'Homeoffice-Zeiten werden wöchentlich neu festgelegt.', answer: 'falsch' },
          { n: 9, text: 'Die Arbeitszeiten', options: ['können teilweise flexibel abgeleistet werden.', 'müssen über Formulare eingegeben werden.', 'werden nachträglich gutgeschrieben.'], answer: 'a' },
        ],
      },
    ],
  },
];

// ---------------- Teil 3 ----------------
export const lesenTeil3 = [
  {
    label: 'Variante 1',
    instruction: I_TEIL3,
    allowX: true,
    note: 'У файлі групи серед відповідей немає тексту d — показано так, як записали учасники.',
    questions: [
      { n: 10, text: 'Mariam: Bisher habe ich meine Lohnabrechnung immer in Briefform erhalten. Jetzt hat mein Arbeitgeber einfach beschlossen, dass ich diese nun online erhalten soll. Ich finde es wirklich unmöglich, dass ich die Abrechnung nun selbst herunterladen und ausdrucken muss. Ist das denn rechtens mit dieser Umstellung? Man hätte doch wenigstens fragen können …', answer: 'g' },
      { n: 11, text: 'Fabian: Ich habe vor Kurzem von Teilzeit in Vollzeit gewechselt und heute meine erste Lohnabrechnung bekommen. Dabei bin ich ganz schön erschrocken, denn mir ist aufgefallen, dass mein Nettogehalt niedriger ist, als ich erwartet hatte. Ich verstehe überhaupt nicht, wie das zustande kommt. Kann mir das einer von euch mal erklären?', answer: 'f' },
      { n: 12, text: 'Marah: Ich beginne am 1.07. ein neues Arbeitsverhältnis. Nun bin ich aber unsicher, was den Zeitpunkt der Lohnzahlung betrifft. Folgendes steht im Arbeitsvertrag: „Die Vergütung wird im Folgemonat überwiesen.“ Es fehlt eine genaue zeitliche Angabe, wann überwiesen wird. Weiß jemand, wie das bei so einer Formulierung gesetzlich geregelt ist?', answer: 'b' },
      { n: 13, text: 'Ahmed: Ich arbeite in einem Großunternehmen. In unserer Abteilung reden wir Jungs offen über alles. Vor einigen Tagen kamen wir auf das Thema Geld zu sprechen. Dabei habe ich erfahren, dass mein gleichaltriger Kollege, der die gleiche Arbeit macht, rund 300 € mehr bekommt. Das finde ich ein Unding. Wisst ihr, ob ich einen Anspruch auf mehr Geld habe?', answer: 'x' },
    ],
    options: {
      a: { author: 'Mahmoud, vor 6 Tagen', text: 'Mit der Überweisungsgeschwindigkeit von Löhnen wirst du noch einiges erleben. Eine Regel gilt auch hier: Je dringender du die Kohle brauchst, desto langsamer ist sie unterwegs. Hast du eine andere Bank als der Arbeitgeber, kann es mit der Überweisung auch länger dauern. Und dann immer diese pauschalen Angaben wie „Banklaufzeit beachten“. Die wissen schon, wie sie an uns sparen können.' },
      b: { author: 'Pablo, vor 1 Stunde', text: 'Ich bin kein Anwalt, aber du kannst einfach mal einen Kollegen fragen, ob er dir sagen kann, wann die Überweisungen ausgeführt werden. Bei mir steht im Vertrag „zur Mitte des Folgemonats“. Das heißt, dass ich mein Gehalt immer spätestens am 20. auf dem Konto habe. Ist zwar auch etwas unkonkret, aber immer noch präziser als bei dir.' },
      c: { author: 'Eilen, vor 3 Stunden', text: 'Soviel ich weiß, verdienen Frauen in vielen Berufen oft weniger als Männer. Das liegt unter anderem daran, dass sie häufiger in Teilzeit arbeiten und dass sie in Vorstellungsgesprächen nicht hart genug verhandeln. Zum Glück gibt es immer mehr Initiativen, um Frauen zu stärken.' },
      e: { author: 'Joerg, vor 2 Tagen', text: 'Unsere Lohnabrechnungen bekommen wir vom Chef immer pünktlich in Papierform in die Hand gedrückt. Leider hapert es dann immer ein bisschen mit der Überweisung aufs Konto. Manchmal muss man schon länger warten, vor allem, wenn es einen Feiertag in der Woche gibt. Aber letztendlich zahlt mein Arbeitgeber, und das ist, was zählt.' },
      f: { author: 'Anton, vor 3 Tagen', text: 'Schau doch mal im Internet. Da gibt es Vergleichsrechner, die dir anzeigen, wie sich dein Gehalt verändert. Es sollte aber für den Arbeitnehmer auch auf dem Gehaltszettel ersichtlich sein, wie sich Veränderungen des Bruttogehalts auswirken. Du könntest auch in der Personalabteilung oder beim Betriebsrat nachfragen.' },
      g: { author: 'Daniel, vor 22 Minuten', text: 'Aus Umweltschutzgründen ist das durchaus sinnvoll. Der Arbeitgeber ist in der Bringpflicht. Es würde aber reichen, wenn er es digital zur Verfügung stellt. Wenn du die Papierform vorziehst, frag doch einfach mal, ob dies auch weiterhin möglich wäre. Denn du darfst deinen Gehaltszettel auch persönlich abholen.' },
    },
  },
  {
    label: 'Variante 2',
    instruction: I_TEIL3,
    allowX: true,
    note: 'Відповідь на 12 (x) у групі позначена як «можливо».',
    questions: [
      { n: 10, text: 'Elias: Ich bin viel in sozialen Medien aktiv und auch bereits mit einigen Kollegen dort vernetzt. Nun hat mir aber meine Chefin eine Freundschaftsanfrage bei Facebook geschickt, und ich bin mir unsicher, wie ich darauf reagieren soll. Eigentlich möchte ich sie nicht annehmen, aber ablehnen geht auch nicht, oder? Und einfach ignorieren finde ich ziemlich unprofessionell.', answer: 'd' },
      { n: 11, text: 'Rima: Ich arbeite seit Anfang des Jahres in einer neuen Firma. An sich macht mir der Job Spaß, aber mein Chef ist eine Katastrophe. Er rastet bei jeder Gelegenheit aus und schreit die Mitarbeiter an. Die Stimmung im Team ist im Keller; einige Kollegen gehen regelrecht mit Bauchschmerzen ins Büro. Wir haben keine Ahnung, wie wir mit der Situation umgehen sollen.', answer: 'f' },
      { n: 12, text: 'Thiago: Mein Chef ist ein richtiger Glücksfall. Er hat immer ein offenes Ohr für alle im Team und unterstützt uns, wo er nur kann. Wir würden uns einfach gern mal bei ihm bedanken und ihm so zeigen, wie sehr wir ihn als Vorgesetzten schätzen. Aber wie machen wir das am besten? Wir wollen nicht, dass das falsch rüberkommt – er kann Schmeichler nämlich nicht ausstehen.', answer: 'x' },
      { n: 13, text: 'Viktoria: Ich habe mich heute mal wieder über meine Chefin geärgert und stelle mir gerade vor, wie ich ihr einfach am Montag meine Kündigung auf den Tisch knalle, denn mittlerweile habe ich wirklich die Nase voll. Ich weiß allerdings auch, dass ich manchmal zu spontanen Reaktionen neige, die ich dann hinterher bereue, deshalb würde ich gern eure Meinung hören.', answer: 'e' },
    ],
    options: {
      a: { author: 'Leticia, vor 21 Minuten', text: 'Die Chefetagen sind voll von selbstverliebten Menschen, die es großartig finden, Honig ums Maul geschmiert zu bekommen. Wenn der eigene Chef zu diesen narzisstischen Persönlichkeiten gehört, kann das für die Angestellten sehr anstrengend sein. Vielleicht hilft es dir zu wissen, dass hinter der Selbstverliebtheit in aller Regel jedoch ein schlechtes Selbstwertgefühl steckt. Deshalb sind Narzissten auch so anfällig für Kritik.' },
      b: { author: 'Raimond, vor 48 Minuten', text: 'Wer die sozialen Netzwerke bzw. das Internet dazu nutzt, um über seinen Chef zu lästern oder seinen Arbeitgeber zu beleidigen, muss mit einer Abmahnung und ggf. sogar mit einer Kündigung rechnen. Eine sachlich formulierte Kritik am Arbeitgeber ist dagegen vom Recht des Angestellten auf freie Meinungsäußerung geschützt – auch im Internet – und kann damit keine Kündigung nach sich ziehen.' },
      c: { author: 'Ben, vor 2 Stunden', text: 'Bleibt auf jeden Fall authentisch, dann könnt ihr nicht viel falsch machen. Wir haben zum Beispiel bei der letzten Betriebsversammlung unserem Chef vor der gesamten Belegschaft für seinen täglichen Einsatz gedankt. Das kommt bei euch bestimmt auch gut an.' },
      d: { author: 'Alegra, vor 5 Stunden', text: 'Das ist wirklich eine heikle Situation. Ich finde, Vorgesetzte sollten grundsätzlich darauf verzichten. Sie sollten besser die Privatsphäre ihrer Angestellten berücksichtigen, da sich diese sonst schnell überwacht fühlen. Ich finde es gar nicht so schlimm, nicht zu reagieren. Sie wird dich bestimmt nicht darauf ansprechen.' },
      e: { author: 'Cem, vor 6 Stunden', text: 'Den Wunsch, alles hinzuschmeißen und einfach zu gehen, kann ich sehr gut nachvollziehen. Du solltest jetzt aber erst mal runterfahren und eine Nacht darüber schlafen. Morgen sieht die Welt wieder ganz anders aus. Auch wenn das Problem vielleicht schon länger besteht, würde ich nicht direkt das Handtuch werfen, sondern erst einmal um ein persönliches Gespräch bitten.' },
      f: { author: 'Gabrielle, vor 9 Stunden', text: 'Angestellte haben gegenüber dem Chef oft mehr Möglichkeiten, als sie denken. Schließt euch unbedingt zusammen und sucht ein Gespräch mit einem Mediator. Er kann euch helfen, das Problem dem Chef gegenüber anzusprechen und Lösungswege zu erarbeiten, mit denen beide Parteien leben können. Ich würde mir keine Sorgen machen, dass das auf euch zurückfällt. Ihr seid doch auch daran interessiert, weiter Leistung zu bringen.' },
    },
  },
  {
    label: 'Variante 3',
    instruction: I_TEIL3,
    allowX: true,
    questions: [
      { n: 10, text: 'Ayshe: Ich war lange ohne Anstellung und habe nun endlich einen neuen Job gefunden, auf den ich mich auch echt gefreut habe. Letzte Woche habe ich die neue Stelle angetreten, aber jetzt bin ich leider krank geworden und falle länger aus. Werde ich denn im Krankheitsfall bezahlt? Hoffentlich verliere ich nicht gleich wieder meine Stelle.', answer: 'd' },
      { n: 11, text: 'Andreas: Ich habe überraschend die Zusage für meine Traumstelle bekommen! Allerdings hält sich meine Freude noch in Grenzen, weil ich schon einen Vertrag bei einem anderen Arbeitgeber unterzeichnet habe. Der Arbeitsbeginn wäre schon nächste Woche. Habe ich noch die Möglichkeit, ohne Konsequenzen aus dem Vertrag herauszukommen?', answer: 'x' },
      { n: 12, text: 'Kai: Heute war mein erster Ausbildungstag bei der Bank. Ich war pünktlich und habe mich auf die neuen Herausforderungen gefreut. Wegen der Hitzewelle hatte ich ein Polohemd und eine kurze Leinenhose an. Doch dann kam eine böse Überraschung. Der Filialleiter hat mich vor den Kollegen ermahnt und direkt nach Hause geschickt, weil ich angeblich unpassend gekleidet sei. Darf er das überhaupt?', answer: 'b' },
      { n: 13, text: 'Tino: Nächste Woche fange ich endlich eine neue Stelle an und mir wurde in einem Schreiben mitgeteilt, dass ich bestimmte Unterlagen mitbringen muss. Ich Chaot habe leider den Brief verlegt. Kann mir irgendjemand sagen, was man dabeihaben sollte, wenn man einen neuen Job anfängt? Es wäre mir unangenehm, noch mal in der Personalabteilung nachzufragen.', answer: 'a' },
    ],
    options: {
      a: { author: 'Omar, vor 25 Minuten', text: 'Ein Kuchen zum Einstand kommt bei den neuen Kollegen immer gut an. Aber Spaß beiseite: Normalerweise wird das doch alles bei Vertragsabschluss erledigt. Sobald du unterschrieben hast, braucht das Unternehmen von dir die Sozialversicherungsnummer und eine Bestätigung der Krankenkasse. Könnte es sein, dass du noch einen Personalbogen ausfüllen sollst?' },
      b: { author: 'Annemarie, vor 2 Stunden', text: 'Was du in der Firma anziehst, hängt davon ab, was dort so üblich ist. Und daran hast du dich zu halten. Wenn alle Jeans und Pullover tragen, kannst du das auch. Wenn die Kollegen alle offizieller gekleidet sind, dann solltest du das auch sein. Nichts ist peinlicher, als unpassend gekleidet zu sein. Man fühlt sich nicht wohl und kann auch nicht richtig arbeiten.' },
      c: { author: 'Frederik, vor 3 Stunden', text: 'Hast du schon mal was von den typischen Fehlern gehört, die man an seinem ersten Arbeitstag machen kann? Ich kann es nachvollziehen, dass sich deine Kollegen vor den Kopf gestoßen gefühlt haben, wenn du gleich am ersten Tag alle duzt. Sei am Anfang lieber ein bisschen zurückhaltender.' },
      d: { author: 'Rudi, vor 3 Stunden', text: 'In den ersten vier Wochen bekommst du dann keine Lohnfortzahlung, sondern Geld von der Krankenkasse. Dieses entspricht 70 % deines Bruttogehalts. Da du dadurch deutliche Gehaltseinbußen hast, wird dein Arbeitgeber sicher nicht davon ausgehen, dass du länger fehlst als unbedingt nötig. Du müsstest dich aber sofort mit deiner Krankenkasse in Verbindung setzen.' },
      e: { author: 'Uta, vor 4 Stunden', text: 'Ich würde dir empfehlen, dich auf mehrere Stellen gleichzeitig zu bewerben. Bei der aktuell angespannten Arbeitsmarktsituation ist es leider unwahrscheinlich, dass du mehrere Zusagen bekommst. Und falls doch, musst du den Vertragsentwurf nicht direkt unterschreiben. So bin ich damals vorgegangen.' },
      f: { author: 'Maja, vor 6 Stunden', text: 'Als mein Kollege vor einem Jahr neu bei uns angefangen hat, ist er am ersten Tag mit einer schweren Erkältung erschienen. Die Chefin hat ihn zwar mittags nach Hause geschickt, aber da war es schon zu spät. Er hat einige Kollegen angesteckt und die haben dann ebenfalls noch einige Tage gefehlt. Mit dieser Aktion hat er wirklich niemandem geholfen!' },
    },
  },
];

// ---------------- Teil 4 ----------------
export const lesenTeil4 = [
  {
    label: 'Variante 1',
    instruction: I_TEIL4,
    blocks: [
      { type: 'email', header: 'Protokoll · Besprechung der Abteilungsleitungen · 20.02.20XX, 14:00–17:00 Uhr', text: 'Anwesende: H. Moler (HM, Geschäftsleitung), P. Neumann (PN, Produktion), P. Schutz (PS, Finanzen), J. Hartmann (JH, IT), L. Wagner (LW, Forschung & Entwicklung), A. Richter (AR, Personal), M. Timm (MT, Einkauf)\nEntschuldigt: S. Gross (SG, Marketing)\nProtokoll: PN' },
      { type: 'title', text: 'TOP 1: Unternehmensziele' },
      { type: 'p', text: 'Aufgrund der in den letzten Quartalen gestiegenen Kosten soll laut der Geschäftsführung die Umsetzung der Kostenminimierung auf den Prüfstand gestellt werden. Sie muss in allen Abteilungen einer genauen Analyse unterzogen werden. LW unterbreitet als Diskussionsgrundlage folgende Vorschläge: 1. Optimierung des Produktionsprozesses, der die maschinellen Verarbeitungsschritte beinhaltet. 2. Senkung der gesamten Produktionskosten durch Reduzierung der Materialkosten, ohne Qualitätsverlust.' },
      { type: 'p', text: 'PN geht zunächst auf den ersten Punkt ein: Wie schon häufig angemahnt wurde, sei es dringend notwendig, die Produktionsprozesse zu optimieren. Das könne nur realisiert werden, wenn die Systemsteuerung auf den neuesten Stand gebracht wird. JH gibt zu bedenken, dass das nur durch ein Aufrüsten der Hardware möglich sei. Das würde wiederum erhöhte Investitionen bedeuten, die jedoch gegen das Ziel der Kostenminimierung sprechen würden und gegenwärtig kaum zu stemmen wären. LW wendet ein, dass in seiner Abteilung aktuell an einer optimierten Software gearbeitet werde, die sich schon in der Testphase befinde und bald auf Basis der alten Technik zur Anwendung kommen könne. Dafür sei ein Zukauf neuer Geräte im IT-Bereich nicht notwendig. Genaueres könne er in der nächsten Sitzung im kommenden Monat sagen.' },
      { type: 'p', text: 'MT äußert sich zum zweiten Punkt: Eine Reduzierung der Materialkosten könne durch das Minimieren der Rohstoffkosten bewerkstelligt werden. SG hat bereits Kontakt mit Rohstoff-Anbietern aufgenommen, deren Konditionen lukrativ erscheinen. Einkauf und Marketing kümmern sich gemeinsam um den Abgleich der Preise. MT sieht die Möglichkeiten zur Kostenreduzierung auf diesem Gebiet ohne Qualitätsminderung positiv. HM bittet um eine zeitnahe Besprechung der Einsparungspotenziale unter Einbeziehung der Geschäftsleitung. LW wird aufgefordert, bei der nächsten Dienstbesprechung die Ergebnisse der Testphase und das weitere Vorgehen darzustellen. [SG/MT: asap; LW: nächste Sitzung]' },
      { type: 'title', text: 'TOP 2: Personalsituation' },
      { type: 'p', text: 'AR geht auf die angespannte Situation im Personalbereich ein und betont, dass in der letzten Zeit häufig am Limit gearbeitet werde. Bei den Kollegen habe sich ein hohes Überstundenkontingent aufgebaut. Erschwert werde dies durch einen saisonbedingt hohen Krankenstand. PN stimmt AR zu und fügt hinzu, dass in den letzten Wochen wiederholt personelle Engpässe in seiner Abteilung mit Leiharbeitern aufgefangen werden mussten. Das stelle sowohl auf der Kosten- als auch auf der Qualitätsebene eine hohe Belastung dar. Dies beeinträchtige auch die Mitarbeiterzufriedenheit. Großes Potenzial zur Kostensenkung sieht PN hier aber nicht. Es wird der Vorschlag unterbreitet, gut eingearbeitete Leiharbeiter mit zeitlich begrenzten Verträgen zu übernehmen. AR wendet ein, dass dies die angespannte finanzielle Situation noch weiter verschärfen könnte. HM bittet beide Abteilungen, einen gemeinsamen Plan zur Personalsituation zu erstellen. [AR/PN: bis 31.03.]' },
      { type: 'title', text: 'TOP 3: Entwicklung' },
      { type: 'p', text: 'In der Abteilung Forschung und Entwicklung wird seit anderthalb Jahren an der Einführung einer neuen Verpackung für unsere Produkte gearbeitet. Das neue Material nimmt immer mehr Gestalt an und sollte vor allem dem Unternehmensziel der Nachhaltigkeit entsprechen, indem es wiederverwendbar und klimaneutral ist. Nun stehe man, laut LW, kurz vor der Einführung. PS gibt zu bedenken, dass die dafür erforderlichen finanziellen Mittel noch kein grünes Licht bekommen haben. HM zeigt sich unzufrieden über die kurzfristig erhöhten Kosten. PS schlägt vor, auf einen Überbrückungskredit zurückzugreifen. [PS: bis 10.03.]' },
    ],
    questions: [
      { n: 14, text: 'Die Geschäftsleitung möchte', options: ['eine Prüfung der Kostenminimierung in jeder Abteilung.', 'neue Ansätze zur Kostenminimierung entwickeln.', 'über die Zielsetzung der Kostenminimierung diskutieren.'], answer: 'a' },
      { n: 15, text: 'Zur Optimierung des Produktionsprozesses', options: ['muss eine neue Software erworben werden.', 'sollen neue Computer angeschafft werden.', 'steht bald eine neue Software zur Verfügung.'], answer: 'c' },
      { n: 16, text: 'Um Produktionskosten zu senken,', options: ['müssen geringe Qualitätseinbußen hingenommen werden.', 'sollen bessere Konditionen mit den Lieferanten ausgehandelt werden.', 'wird eine Zusammenarbeit mit neuen Rohstoff-Anbietern angestrebt.'], answer: 'c' },
      { n: 17, text: 'Leiharbeiter', options: ['können eventuell unbefristete Anstellungen bekommen.', 'sollen die angespannte Personalsituation entschärfen.', 'sorgen für eine angenehmere Arbeitsatmosphäre.'], answer: 'b' },
      { n: 18, text: 'Die Firma strebt an,', options: ['durch das neue Material Produktionskosten zu senken.', 'in Zukunft ein neues Verpackungsmaterial zu entwickeln.', 'Produktverpackungen zukünftig umweltschonender zu machen.'], answer: 'c' },
    ],
  },
  {
    label: 'Variante 2',
    instruction: I_TEIL4,
    blocks: [
      { type: 'email', header: 'Protokoll · 24. März 20XX, 10:30–12:30 Uhr · Konferenzraum Kampenwand, Prinzregentenplatz 10, 80333 München', text: 'Anwesende: Mark Behrens (MB, Geschäftsführung), Frank Mayer (FM, Produktion), Katharina Wilmers (KW, Personal), Fadia Emas (FE, Technik)\nGäste: Sam Johnson (Niederlassungsleiter New York)\nSitzungsleitung: Mark Behrens · Protokollführung: Frank Mayer\nTagesordnung: 1. Eröffnung Niederlassung New York 2. Personalplanung 3. Werkstudenten 4. Mitarbeiterparkplatz' },
      { type: 'title', text: 'TOP 1: Eröffnung Niederlassung New York' },
      { type: 'p', text: 'MB eröffnet die Sitzung, begrüßt alle anwesenden Kollegen und stellt Sam Johnson vor, den Leiter der neuen Niederlassung in New York. Nachdem unsere Geschäfte in den letzten 3 Jahren sehr erfolgreich liefen und auch in den USA die große Nachfrage nach unseren orthopädischen Produkten weiter anhielt, wurde beschlossen, eine weitere Zweigstelle in New York zu eröffnen. Sam Johnson teilt mit, dass bereits Räumlichkeiten in Manhattan gefunden und angemietet wurden. Im Moment werden noch einige Umbauarbeiten durchgeführt, der Einzug ist bereits für Mitte Mai geplant. Am 1. Juli nimmt die Niederlassung ihre Geschäfte auf.' },
      { type: 'title', text: 'TOP 2: Personalplanung' },
      { type: 'p', text: 'FM berichtet, dass aufgrund der steigenden Nachfrage im In- und Ausland das Personal in der Produktion aufgestockt werden muss. Es sollten mindestens fünf neue Mitarbeiter eingestellt werden. In Zukunft sollte in drei Schichten gearbeitet werden. KW sieht das kritisch, da das Budget für das laufende Geschäftsjahr keine Erhöhung der Personalkosten vorsieht. Sie schlägt deshalb vor, vorerst auf Leiharbeiter und Aushilfskräfte zurückzugreifen. Dies müsste jedoch mit dem Betriebsrat abgestimmt werden. Sie erinnert auch daran, dass schon einmal über eine Verlegung der Fertigung in den asiatischen Raum nachgedacht wurde, und hält diese Überlegung auch weiterhin für bedenkenswert. Gegen Letzteres protestiert FM vehement und merkt an, dass die Qualität von inländisch hergestellten Produkten signifikant höher sei. Diese könne jedoch nur erhalten bleiben, wenn die Mitarbeiter nicht über ihre Kapazitäten belastet würden. Ferner plädiert er dafür, dass eine dauerhafte Lösung gesucht wird. Diese müsse dazu führen, dass nicht permanent neue Arbeitskräfte eingearbeitet werden. Denn nur so könne eine wirtschaftliche Kontinuität des Unternehmens gewährleistet werden. Dies würde auch der wachsenden Unzufriedenheit der Mitarbeiter entgegenwirken, die unter anderem durch das Anfallen zahlreicher Überstunden entstanden sei. MB entscheidet, dass zwei neue Mitarbeiter eingestellt werden. Drei weitere Angestellte sollen für das kommende Geschäftsjahr eingeplant werden.' },
      { type: 'title', text: 'TOP 3: Werkstudenten' },
      { type: 'p', text: 'KW berichtet von der Arbeit mit den Werkstudenten, die seit Beginn des Jahres für das Unternehmen arbeiten. Sie beurteilt dies als positiv, da es in allen Abteilungen personelle Engpässe gibt. Die Werkstudenten können flexibel und nach Bedarf da eingesetzt werden, wo sie gerade gebraucht werden. Das Unternehmen erhofft sich, durch die Einstellung von Werkstudenten auch einen Pool an potenziellen neuen Mitarbeitern aufbauen zu können. Gleichzeitig wird die Firma auch bei einer jüngeren Zielgruppe bekannt. Derzeit sind zwei Werkstudenten beschäftigt, im April kommen noch zwei weitere dazu. Die Verträge sind zunächst auf ein Jahr befristet, können aber einvernehmlich verlängert werden. Die Arbeitszeit wird mit 15 Euro pro Stunde vergütet, was deutlich über der gesetzlich festgelegten Lohnuntergrenze liegt. Des Weiteren wird ihnen die Möglichkeit geboten, ihre Bachelor- oder Masterarbeit im Rahmen unserer Projekte zu schreiben.' },
      { type: 'title', text: 'TOP 4: Mitarbeiterparkplatz' },
      { type: 'p', text: 'FE weist wiederholt darauf hin, dass der Mitarbeiterparkplatz seit der Einstellungswelle vor zwei Jahren nicht mehr genug Kapazitäten bietet. Es sei dringend notwendig, eine Lösung zu finden, da es im Industriegebiet nur wenige öffentliche Parkplätze gibt und dies bei der Belegschaft immer wieder zu Unmut führt. Sie schlägt vor, das benachbarte Grundstück anzumieten und in weitere 100 Parkplätze umzuwandeln. Hier bedarf es allerdings der Zustimmung der Kommune.' },
    ],
    questions: [
      { n: 14, text: 'Die neue Niederlassung', options: ['befindet sich in einem neu errichteten Gebäude.', 'eröffnet im dritten Quartal des Geschäftsjahres.', 'ist die erste Filiale in den Vereinigten Staaten.'], answer: 'b' },
      { n: 15, text: 'Aufgrund der steigenden Nachfrage soll', options: ['es weitere Festanstellungen geben.', 'ein Teil der Produktion ausgelagert werden.', 'durch Mehrarbeit eine Neueinstellung vermieden werden.'], answer: 'a' },
      { n: 16, text: 'Die Einstellung von Leiharbeitern', options: ['führt bei der Belegschaft zu mehr Zufriedenheit.', 'ist zugunsten einer zukunftsfähigen Lösung abzulehnen.', 'wird vom Produktionschef befürwortet.'], answer: 'b' },
      { n: 17, text: 'Die Werkstudenten', options: ['erhalten für ihre Arbeit den Mindestlohn.', 'können in der Firma ihre Abschlussarbeit verfassen.', 'werden nach zwölf Monaten durch neue ersetzt.'], answer: 'b' },
      { n: 18, text: 'Wegen des Mangels an Parkplätzen', options: ['soll der firmeneigene Parkplatz ausgebaut werden.', 'soll die Stadt neue Parkplätze zur Verfügung stellen.', 'sollen die Angestellten auf öffentliche Parkplätze ausweichen.'], answer: 'a' },
    ],
  },
  {
    label: 'Variante 3',
    instruction: I_TEIL4,
    blocks: [
      { type: 'email', header: 'Protokoll · Besprechung der Abteilungsleitungen · 15.07.20XX, 10:00–12:00 Uhr', text: 'Anwesende: M. Friedrich (MF, Geschäftsleitung), S. Vogler (SV, Sekretariat), J. Schröder (JS, Einkauf), V. Klein (VK, Vertrieb), H. Sawchenko (HS, Produktion), P. Durman (PD, Marketing), F. Sommer (FS, Forschung und Entwicklung), A. Kleinschmidt (AK, Personal)\nEntschuldigt: J. Keller (JK, IT-Abteilung)\nProtokoll: S. Vogler' },
      { type: 'title', text: 'TOP 1: Neuausrichtung der Produktion aufgrund von Umsatzrückgang' },
      { type: 'p', text: 'Laut VK ist das Unternehmen mit einem stagnierenden Umsatz konfrontiert. Er stellt seine Analyse zu den diesbezüglichen Gründen vor und kommt zu dem Schluss, dass durch Produktinnovationen der Umsatz wieder erhöht werden könnte. Ziel muss es sein, einerseits den bestehenden Kunden das Bewährte weiterhin anzubieten, andererseits die Kunden der Wettbewerber auf unsere Produkte neugierig zu machen und sie durch Angebote zu locken.' },
      { type: 'p', text: 'Die sich anschließende Diskussion eröffnet PD, indem sie erklärt, dass sich die Sortimente anderer Anbieter in den letzten Monaten erweitert hätten. Auf diese Marktveränderungen müsse reagiert werden. FS stimmt PD zu und ergänzt, dass die Stagnation bei unserer klassischen runden Schokolade auch damit zu erklären sei, dass die Verpackung junge Konsumenten nicht ausreichend anspreche, da sie nicht sehr zeitgemäß wirke. Er betont allerdings auch, dass aufgrund der langen Tradition unserer Schokolade und einer sich aus allen Altersgruppen zusammensetzenden Kundschaft die Form beibehalten werden sollte. Die Form ist darüber hinaus charakteristisch für unsere Marke und verfügt über einen hohen Wiedererkennungswert.' },
      { type: 'p', text: 'VK hebt hervor, dass man das Angebot stärker für die unterschiedlichen Zielgruppen ausdifferenzieren müsse und dies auch bei der Preisgestaltung berücksichtigt werden müsse. Während jüngere Käufer eher zu preisgünstigeren Produkten greifen, neigen die gut situierten Konsumenten zu hochpreisigerer Schokolade. MF beauftragt FS, hierzu ein Konzept zu entwickeln. Zusätzlich berichtet JS von den Erkenntnissen der im Frühjahr stattgefundenen Rohstoffmesse, auf der sich zeigte, dass auch gerade im Süßwarensegment neue Zutaten im Trend sind. MF bittet die F&E-Abteilung, sich mit der Qualitätsoptimierung und Sortenerweiterung zu befassen. [PD und FS: Ende August]' },
      { type: 'title', text: 'TOP 2: Neues Auszubildenden-Programm' },
      { type: 'p', text: 'Um zukunfts- und konkurrenzfähig zu bleiben, benötigen wir gut ausgebildete Fachkräfte. Solche Interessenten sind aber gegenwärtig auf dem Markt schwer zu finden. Ein Problem stellt die mangelnde Bereitschaft der Jugendlichen dar, eine Ausbildung zu absolvieren. AK präsentiert einen Entwurf, wie dem gegengesteuert werden kann: Die Firmenpräsenz und das Firmenimage spielen eine große Rolle. Dafür müssen neue, von Jugendlichen genutzte Kanäle wie soziale Netzwerke erschlossen werden. MF beauftragt AK, Rücksprache mit JK zu halten. Darüber hinaus beinhaltet der Entwurf, dass zukünftig Abiturienten durch die Möglichkeit motiviert werden, den beruflichen Teil eines dualen Studiums in unserem Unternehmen zu absolvieren. Eine weitere seitens der Personalabteilung vorgeschlagene Maßnahme – ein Programm für Quereinsteiger aufzulegen – wurde diskutiert, aber schlussendlich verworfen.' },
      { type: 'p', text: 'PD wirft ein, dass man verstärkt bundesweit auf Auszubildenden-Messen vertreten sein sollte, um zukünftige Mitarbeiter zu finden. AK bemerkt außerdem, dass in der Vergangenheit manche Auszubildende aufgrund von Desinteresse die Ausbildung abgebrochen haben. Dem könne schon durch ein verbessertes Auswahlverfahren entgegengewirkt werden. MF verlangt, dass AK sowohl ein neues Messekonzept entwickelt als auch ein Zielgruppenprofil erarbeitet. [AK: asap]' },
      { type: 'title', text: 'TOP 3: Spende der überschüssigen Weihnachtsschokolade' },
      { type: 'p', text: 'PD schlägt vor, dass im nächsten Jahr die Überproduktion des Weihnachtsgeschäfts an die lokale Lebensmitteltafel und andere karitative Einrichtungen gespendet werden sollte. PW legt aber Wert darauf, dass die Schokoladen zunächst in den eigenen Outlets angeboten werden, um die finanziellen Verluste gering zu halten. Daraufhin merkt PD an, dass diese Verluste als Marketingausgaben verbucht werden könnten. Das Ziel müsse sein, durch Wohltätigkeit das Firmenimage in der Bevölkerung zu verbessern. MF beauftragt AK, Kontakt mit den Organisationen aufzunehmen und zu klären, ob dort grundsätzlich ein Interesse besteht, Weihnachtsprodukte in großer Menge anzunehmen. [AK: Ende August]' },
    ],
    questions: [
      { n: 14, text: 'Einer der Gründe für die Umsatzstagnation ist', options: ['das breit gestreute Sortiment.', 'die altmodisch wirkende Verpackung.', 'eine Erhöhung der Preise.'], answer: 'b' },
      { n: 15, text: 'Um den Absatz zu steigern,', options: ['möchte man sich auf bestimmte Verkaufsschlager fokussieren.', 'sollen die Produkte in ihrer Beschaffenheit verbessert werden.', 'wird die Präsenz auf Messen deutlich erhöht werden.'], answer: 'b' },
      { n: 16, text: 'Um auch zukünftig einen soliden Mitarbeiterstamm zu sichern,', options: ['muss das Unternehmensbild zeitnah neu gestaltet werden.', 'sind Zielgruppen verstärkt über digitale Medien anzusprechen.', 'sollen weniger strenge Bewertungskriterien angelegt werden.'], answer: 'b' },
      { n: 17, text: 'Als neue Maßnahme zur Mitarbeitergewinnung', options: ['sollen Berufserfahrene gezielt angesprochen werden.', 'werden die Ursachen für das Desinteresse der Azubis analysiert.', 'wird ein Programm für angehende Studierende eingeführt.'], answer: 'c' },
      { n: 18, text: 'Überschüssige Weihnachtsware soll', options: ['kostenlos an Bedürftige verteilt werden.', 'möglichst kostengünstig entsorgt werden.', 'weitgehend ohne Verluste weiterverkauft werden.'], answer: 'a' },
    ],
  },
];

// ---------------- Lesen und Schreiben, Teil 1 (19–20) ----------------
export const lesenSchreiben = [
  {
    label: 'Heizungsanlage',
    instruction: I_TEIL5,
    blocks: [
      { type: 'email', header: 'Mail von Ihrem Teamleiter', text: 'Hallo Klaus,\n\ndie Mail von Herrn Neumann ist wieder mal unglaublich! Jedes Mal muss er sich über irgendetwas beschweren. Dieses Mal werden wir nicht wie sonst nachgeben. Die Preiserhöhung haben wir angekündigt, und auch auf die Einführung der Anfahrtspauschale haben wir alle Kunden Anfang des Jahres hingewiesen.\n\nBitte antworte ihm dennoch freundlich und mache ihm klar, dass die Rechnung so stimmt. Weise ihn bitte darauf hin, dass die Bezahlung längst überfällig ist. Herrn Neumann anzurufen, bringt nicht viel. Er wird das sowieso nicht einsehen.\n\nIch danke dir und wünsche dir einen schönen Abend.\nViele Grüße\nAndreas' },
      { type: 'email', header: 'Kundenmail', text: 'Sehr geehrter Herr Bauer,\n\nheute haben wir Ihre Rechnung für die Wartung unserer Heizungsanlage erhalten. Leider sind wir diesmal mit der Durchführung der Arbeiten nicht zufrieden. Während Ihre Monteure sonst die Räume sauber hinterlassen haben, waren diesmal die Böden verschmutzt. Ferner bin ich sehr erstaunt darüber, dass Sie diesmal mehr berechnen als in den letzten Jahren, wir aber nicht informiert wurden.\n\nAußerdem haben Sie eine Anfahrtspauschale berechnet. Dies wundert uns sehr, da Ihre Firma doch in derselben Straße wie unser Unternehmen ist. Eine Anfahrtspauschale in Höhe von 35 Euro ist daher nicht nachvollziehbar.\n\nBitte schicken Sie uns eine korrigierte Rechnung. Ich erwarte, dass Sie die Anfahrtspauschale streichen und den Rechnungsbetrag auf die sonst übliche Höhe reduzieren.\n\nMit freundlichen Grüßen\nPeter Neumann' },
    ],
    questions: [
      { n: 19, text: 'Herr Neumann meint, dass die', options: ['Anfahrtspauschale reduziert werden soll.', 'Firma ihre Arbeit nachbessern muss.', 'Forderung der Firma insgesamt zu hoch ausfällt.'], answer: 'c' },
      { n: 20, text: 'Andreas Bauer', options: ['ist über die Mail des Kunden empört.', 'möchte dem Kunden entgegenkommen.', 'will den Kunden telefonisch kontaktieren.'], answer: 'a' },
    ],
  },
  {
    label: 'Reinigung',
    instruction: I_TEIL5,
    blocks: [
      { type: 'email', header: 'Mail von Ihrer Teamleiterin', text: 'Liebe Sabine,\n\nschau dir mal die Mail unten an. Ich kann mir das gar nicht vorstellen. Unsere Teams arbeiten doch immer ordentlich und professionell. Bevor wir überhaupt irgendetwas bezahlen, sollten wir uns die angeblichen Schäden selbst ansehen.\n\nBitte antworte dem Kunden, beruhige ihn und mach einen Termin für die Besichtigung aus. Danke!\n\nHerzliche Grüße\nMarta' },
      { type: 'email', header: 'Betreff: Schaden nach Reinigungsarbeiten', text: 'Sehr geehrte Frau Rudi,\n\nleider muss ich mich heute mit einer Beschwerde an Sie wenden. In der Urlaubszeit wurden unsere Büroräume frisch in strahlendem Gelb gestrichen, und danach haben Mitarbeiter Ihrer Firma alles gereinigt. Leider wurden beim Putzen der Fenster und der Böden die Wände wieder verschmutzt, und überall sind schwarze Streifen zu sehen. Wir werden daher einige Stellen noch einmal nachstreichen lassen müssen.\n\nIn letzter Zeit gab es immer wieder Probleme mit Ihrem Team, vor allem mit den neuen Mitarbeitern. So wurde beispielsweise mehrmals nicht richtig geputzt, oder sie haben immer wieder Sachen von uns falsch abgelegt, sodass wir diese lange suchen mussten.\n\nIch bitte Sie dringend darum, dass in Zukunft sorgfältig gearbeitet wird. Außerdem erwarte ich, dass die Firma Rudis Topreinigung die Kosten für die Beseitigung der Schäden trägt. Ich bitte um umgehende Rückmeldung! Vielen Dank!\n\nMit freundlichen Grüßen\nRobert Zeller (Firma Buchholz)' },
    ],
    questions: [
      { n: 19, text: 'Die Firma Buchholz', options: ['beschwert sich über verschwundene Gegenstände.', 'ist mit der neuen Wandfarbe unzufrieden.', 'klagt über eine unzureichende Reinigungsleistung.'], answer: 'c' },
      { n: 20, text: 'Die Firma Rudis Topreinigung soll', options: ['die Kosten der Nachbesserung übernehmen.', 'eine schlecht durchgeführte Arbeit nachbessern.', 'in Zukunft andere Mitarbeiter schicken.'], answer: 'a' },
    ],
  },
  {
    label: 'Telefonanlage',
    instruction: I_TEIL5,
    note: 'Справжніх запитань до цього листа в групі немає. Запитання 19–20 учасники згенерували в ChatGPT, тож це лише тренування на розуміння.',
    blocks: [
      { type: 'email', header: 'Mail von Ihrem Teamleiter', text: 'Liebe Frau Stüller,\n\nich habe heute Morgen die unten stehende Mail bekommen und kann es nicht glauben, dass die Firma schon wieder Probleme mit der Telefonanlage hat. Das ist bereits das vierte Mal! Es musste nie etwas repariert werden, denn der Grund für die Probleme waren bisher immer Bedienfehler. Das darf wirklich nicht wahr sein! Wir bieten Ihnen jetzt ein allerletztes Mal eine Einweisung in die Anlage an.\n\nBitte antworten Sie Herrn Kirchner, indem Sie ihm signalisieren, dass die Fehler nicht auf unserer Seite liegen. Jetzt ist mal Ende Gelände! Schlagen Sie ihm bitte als Kompromiss eine letzte Schulung für die Anlage vor.\n\nVielen Dank.\nHerzliche Grüße\nManfred Müller, Teamleitung' },
      { type: 'email', header: 'Betreff: Reklamation', text: 'Sehr geehrter Herr Müller,\n\nleider muss ich Ihnen erneut mitteilen, dass die von Ihnen bei uns installierte Telefonanlage immer noch nicht richtig funktioniert. Dieses Mal können wir keine internen Gespräche führen.\n\nEs kann doch nicht sein, dass bei einer Telefonanlage, die erst vor vier Wochen installiert wurde, ständig solche Probleme auftreten. Sie wurde bereits dreimal repariert. Ich fordere Sie hiermit auf, die Anlage noch einmal zu überprüfen und die Probleme endgültig zu beheben. Sollten dennoch weitere Probleme auftreten, behalten wir uns vor, Schadensersatz von Ihnen zu fordern.\n\nMit freundlichen Grüßen\nMartin Kirchner' },
    ],
    questions: [
      { n: 19, text: 'Die Probleme mit der Telefonanlage entstehen laut Herrn Müller durch', options: ['technische Defekte.', 'Bedienfehler.', 'mangelhafte Installation.'], answer: 'b' },
      { n: 20, text: 'Herr Kirchner fordert, dass die Firma', options: ['die Telefonanlage austauscht.', 'die Anlage überprüft und die Probleme endgültig behebt.', 'Schadensersatz leistet.'], answer: 'b' },
    ],
  },
];
