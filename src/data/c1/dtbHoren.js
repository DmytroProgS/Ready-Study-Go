// DTB C1 — Hören. Варіанти з файлу групи B2_C2_Deutsch («letzte Version alle 3 teilen»).
// Аудіо озвучується браузером за транскриптами, які записали учасники; lines: { s: мовець, t: текст }.

const d = (...pairs) => pairs.map(([s, t]) => ({ s, t }));
// Почергово два мовці (для коротких розмов Teil 2).
const alt = (...lines) => lines.map((t, i) => ({ s: i % 2 ? 'Person B' : 'Person A', t }));
const mono = (s, t) => [{ s, t }];

const I_TEIL1 = 'Sie hören drei Gespräche. Zu jedem Gespräch gibt es eine Richtig/Falsch-Aufgabe und eine Multiple-Choice-Aufgabe. Sie hören jedes Gespräch einmal.';
const I_TEIL2 = 'Sie hören vier Gespräche. Welcher der Sätze a–f passt am besten zu welchem Gespräch? Zwei Sätze passen nicht. Sie hören die Gespräche einmal.';
const I_TEIL3 = 'Sie hören eine Besprechung bzw. Präsentation. Welche Lösung (a, b oder c) passt jeweils am besten? Sie hören den Text einmal.';
const I_TEIL4 = 'Sie hören fünf Nachrichten auf dem Anrufbeantworter. Welche Lösung (a, b oder c) passt jeweils am besten? Sie hören jede Nachricht einmal.';

// ================= Teil 1 =================
export const horenTeil1 = [
  {
    label: 'Variante 1',
    instruction: I_TEIL1,
    sections: [
      {
        title: 'Gespräch 1 (22–23)',
        audio: [{ label: 'Gespräch 1', lines: d(
          ['Chef', 'Guten Tag, Frau Langer. Sie haben mich doch um einen Gesprächstermin gebeten. Was kann ich für Sie tun?'],
          ['Frau Langer', 'Vielen Dank, dass Sie so kurzfristig Zeit für mich haben. Mein Anliegen ist sehr dringend. Es geht um die Sommerferienzeit.'],
          ['Chef', 'Ihr Urlaub ist doch für die ersten drei Wochen der Schulferien geplant. Das habe ich Ihnen bereits genehmigt.'],
          ['Frau Langer', 'Ja, vielen Dank dafür. Aber jetzt haben wir ein Problem in meiner Familie. Meine Tochter wird im August eingeschult. Die Betreuung im Kindergarten endet aber schon zum Beginn der Schulferien und wir müssen sechs Wochen bis zum Schulbeginn überbrücken. Eigentlich wollte meine Mutter mich unterstützen, aber nun fällt sie bedauerlicherweise für die nächsten Wochen aus.'],
          ['Chef', 'Oh, ich hoffe, es ist nichts Schlimmes passiert.'],
          ['Frau Langer', 'Ach, leider doch. Sie hat sich zwar nur das Bein gebrochen, aber es wird ihr nicht möglich sein, mich zu unterstützen. Wie Sie wissen, bin ich alleinerziehend und ich weiß nicht, wie ich in dieser Lage eine Betreuung für die restlichen drei Wochen der Sommerferien organisieren kann.'],
          ['Chef', 'Ich verstehe. Das ist wirklich eine schwierige Situation für Sie, Frau Langer. Allerdings kommt es gerade in den Schulferien immer wieder zu Engpässen, da wir viele Mitarbeiter mit schulpflichtigen Kindern haben. Daher ist es nicht einfach für mich, die ganzen sechs Wochen auf Sie zu verzichten.'],
          ['Frau Langer', 'Ach, das habe ich befürchtet. Sehen Sie denn gar keine Möglichkeit?'],
          ['Chef', 'Vielleicht ist es machbar, eine Kollegin aus einer anderen Abteilung für die Sommerzeit zur Unterstützung einzusetzen. Ich will sehen, was ich tun kann.'],
          ['Frau Langer', 'Dafür wäre ich Ihnen überaus dankbar.'],
          ['Chef', 'Ich komme auf Sie zu, sobald ich etwas weiß.'],
        ) }],
        questions: [
          { n: 22, rf: true, text: 'Die Mitarbeiterin muss in den Sommerferien ihre Mutter betreuen.', answer: 'falsch' },
          { n: 23, text: 'Der Vorgesetzte', options: ['hat Probleme, die Betreuung seiner Tochter zu organisieren.', 'stellt eine neue Mitarbeiterin für die Abteilung ein.', 'weist auf Personalmangel während der Ferienzeit hin.'], answer: 'c' },
        ],
      },
      {
        title: 'Gespräch 2 (24–25)',
        audio: [{ label: 'Gespräch 2', lines: d(
          ['Chef', 'Guten Morgen, Herr Thompson. Herzlich willkommen in unserem Team. Ich möchte Ihnen Ihre Teamkollegin Frau Sanders vorstellen. Sie wird Ihnen bei der Einarbeitung zur Seite stehen.'],
          ['Frau Sanders', 'Hallo, Herr Thompson. Ich bin Bettina Sanders.'],
          ['Herr Thompson', 'Guten Tag. Vielen Dank für Ihren freundlichen Empfang. Ich bin schon sehr gespannt auf meine neue Tätigkeit hier.'],
          ['Frau Sanders', 'Kommen Sie, ich zeige Ihnen zunächst einmal Ihren Arbeitsplatz. Alle Zugangsdaten und Ihr persönliches Passwort für Ihren Computer erhalten Sie noch von mir. Wie Sie ja bereits wissen, sind Sie in erster Linie für die Kundenbestellungen zuständig. Sie werden künftig, wie das ganze Team, Ansprechperson für unser gesamtes Produktsortiment sein.'],
          ['Herr Thompson', 'Werden die Bestellungen normalerweise online getätigt, oder wenden die Kunden sich auch telefonisch an uns?'],
          ['Frau Sanders', 'Der Großteil der Bestellungen kommt tatsächlich über das Internetportal. Aber wenn es Beratungsbedarf bei einem Produkt gibt, stehen wir den Kunden natürlich auch telefonisch zur Verfügung. Aber keine Sorge, wir setzen Sie zunächst noch nicht in der direkten Kundenberatung ein. Nachdem Sie sich in die täglichen Arbeitsabläufe eingearbeitet haben, erhalten Sie eine Schulung, um dann alle Fragen rund um unsere Produkte beantworten zu können.'],
          ['Herr Thompson', 'Ah, ich habe bereits aus meiner vorherigen Tätigkeit viel Erfahrung mit direktem Kundenkontakt und bin vertraut mit Kommunikation in Beratungs- und Verkaufsgesprächen. Auf die Schulungen freue ich mich, um dann kompetent auf alle Kundenanfragen eingehen zu können.'],
          ['Frau Sanders', 'Ja, sehr schön. Wie sieht es denn mit Ihren Erfahrungen bei der Warenbuchung aus? Kennen Sie sich mit den gängigen Abrechnungssystemen im Kundenbestellbereich aus?'],
          ['Herr Thompson', 'Ja, ich habe zuvor mit einigen dieser Systeme gearbeitet und ich denke, dass ich darin sehr versiert bin.'],
          ['Frau Sanders', 'Dann steht einer guten Zusammenarbeit ja nichts mehr im Wege.'],
        ) }],
        questions: [
          { n: 24, rf: true, text: 'Herr Thompson muss Frau Sanders einarbeiten.', answer: 'falsch' },
          { n: 25, text: 'Kunden', options: ['bekommen jederzeit eine telefonische Beratung.', 'können nur über das Internet bestellen.', 'werden ausschließlich von Herrn Thompson betreut.'], answer: 'a' },
        ],
      },
      {
        title: 'Gespräch 3 (26–27)',
        audio: [{ label: 'Gespräch 3', lines: d(
          ['Herr Stranden', 'Blumengroßhandel Dennert. Hier ist Stranden am Apparat. Guten Tag.'],
          ['Frau Lindbeck', 'Guten Tag. Blumenhaus Grüner Daumen, Lindbeck hier. Spreche ich mit dem Geschäftsführer?'],
          ['Herr Stranden', 'Ja, genau. Was kann ich für Sie tun?'],
          ['Frau Lindbeck', 'Leider bin ich in letzter Zeit mit Ihren Lieferungen nicht zufrieden.'],
          ['Herr Stranden', 'Ach wirklich? Was haben Sie denn zu beanstanden?'],
          ['Frau Lindbeck', 'In den letzten 14 Tagen kamen Ihre Lieferungen mehrmals zu spät, was zu erheblichen Problemen bei uns geführt hat. Und jetzt rufe ich Sie an, weil wir auf eine Rosenlieferung warten, die schon da sein sollte und die wir dringend für einen Brautstrauß benötigen.'],
          ['Herr Stranden', 'Lassen Sie mich das schnell in unserem Warensystem nachsehen. Blumenhaus Grüner Daumen … also hier ist vermerkt, dass die Lieferung auf dem Weg zu Ihnen ist. Machen Sie sich keine Sorgen. Die muss wirklich gleich bei Ihnen ankommen, sicherlich innerhalb der nächsten halben Stunde.'],
          ['Frau Lindbeck', 'Das hoffe ich sehr. Wie gesagt, bringen uns Verzögerungen in große Schwierigkeiten. Außerdem muss ich Ihnen leider mitteilen, dass in letzter Zeit auch die Qualität der Blumen zu wünschen übrig lässt.'],
          ['Herr Stranden', 'Wie darf ich das verstehen? Ich versichere Ihnen, wir kontrollieren hier jede Pflanze, bevor sie unser Haus verlässt. Wir sind immer bemüht, Ihnen nur tadellose Ware zu liefern, und haben eigentlich außerordentlich hohe Qualitätsstandards.'],
          ['Frau Lindbeck', 'Ja, leider sind meine Erfahrungen anders. Wir hatten bereits im Frühjahr Beschwerden von Kunden über Tulpen, die sehr schnell verwelkt sind. Und im Sommer war das mit den Sonnenblumen genauso. Wir haben eine große Stammkundschaft und müssen uns auf unsere Lieferanten verlassen können.'],
          ['Herr Stranden', 'Ich kann mich bei Ihnen nur entschuldigen. Wir schätzen Sie als unsere Kunden. Ich werde Ihre Reklamation umgehend prüfen und mich wieder bei Ihnen melden.'],
        ) }],
        questions: [
          { n: 26, rf: true, text: 'Das Blumengeschäft verkauft ausschließlich Brautsträuße.', answer: 'falsch' },
          { n: 27, text: 'Die Blumenhändlerin beschwert sich', options: ['über anspruchsvolle Kunden.', 'über Falschlieferung.', 'über Qualitätsmängel bei den Blumen.'], answer: 'c' },
        ],
      },
    ],
  },
  {
    label: 'Variante 2',
    instruction: I_TEIL1,
    sections: [
      {
        title: 'Gespräch 1 (22–23)',
        audio: [{ label: 'Gespräch 1', lines: d(
          ['Herr Fischer', 'Vielen Dank, dass Sie sich so schnell für mich Zeit nehmen.'],
          ['Chefin', 'Gerne. Worum geht es denn, Herr Fischer?'],
          ['Herr Fischer', 'Ich habe ein Problem mit dem Dienstplan. Ich bin nämlich für den gesamten kommenden Monat in der Frühschicht eingeteilt. Aber das geht leider nicht.'],
          ['Chefin', 'Ja, das sehe ich gerade. Aber wie Sie wissen, muss die Frühschicht immer besonders gut besetzt sein, da morgens viele Aufgaben anfallen. Was ist denn der Grund für Ihre Schwierigkeiten?'],
          ['Herr Fischer', 'Ich weiß ja, dass es morgens immer viel zu tun gibt. Allerdings ist mein Vater an der Hüfte operiert worden und sollte eigentlich länger in der Klinik bleiben. Jetzt soll er aber schon diese Woche entlassen werden.'],
          ['Chefin', 'Ich sehe Ihr Problem. Haben Sie einen Vorschlag?'],
          ['Herr Fischer', 'Da er fast 80 Jahre alt und alleinstehend ist, müssen meine Schwester und ich uns in der nächsten Zeit um ihn kümmern. Wir suchen jetzt nach Möglichkeiten, unsere Arbeit und diese besondere Situation irgendwie zu vereinbaren.'],
          ['Chefin', 'Und wie soll das aussehen?'],
          ['Herr Fischer', 'Also, meine Schwester kann die Betreuung erst ab 13 Uhr übernehmen. Deshalb möchte ich mit Ihnen ja auch über eine Änderung meiner Arbeitszeiten sprechen.'],
          ['Chefin', 'Aha, ich verstehe. Es ist aber demnach für Sie machbar, in der Spätschicht zu arbeiten?'],
          ['Herr Fischer', 'Ja, natürlich, ich möchte auf jeden Fall arbeiten, und die Spätschicht wäre nächsten Monat ideal.'],
          ['Chefin', 'Ich schaue mir den Dienstplan noch mal an und spreche auch mit den Kollegen. Ich bin mir sicher, dass sich da etwas machen lässt, und melde mich bei Ihnen.'],
          ['Herr Fischer', 'Vielen Dank.'],
        ) }],
        questions: [
          { n: 22, rf: true, text: 'Der Mitarbeiter spricht mit der Vorgesetzten über einen Wechsel seiner Arbeitsschichten.', answer: 'richtig' },
          { n: 23, text: 'Der Mitarbeiter', options: ['kann in den nächsten Wochen in jeder Arbeitsschicht eingesetzt werden.', 'muss in nächster Zeit jeden Morgen seinen kranken Angehörigen pflegen.', 'möchte einen Monat lang in der Frühschicht arbeiten.'], answer: 'b' },
        ],
      },
      {
        title: 'Gespräch 2 (24–25)',
        audio: [{ label: 'Gespräch 2', lines: d(
          ['Herr Werner', 'Herzlich willkommen in unserem Team. Mein Name ist Jonas Werner, und ich stehe Ihnen besonders jetzt, in Ihrer ersten Zeit hier bei uns, als Mentor zur Seite.'],
          ['Neue Kollegin', 'Oh, das ist gut, das macht mir den Anfang sicher leichter.'],
          ['Herr Werner', 'Kommen Sie? Ich zeige Ihnen erst mal die Räumlichkeiten.'],
          ['Neue Kollegin', 'Einiges habe ich zwar schon gesehen, aber so ganz finde ich mich hier noch nicht zurecht.'],
          ['Herr Werner', 'Dann führe ich Sie mal ein bisschen herum. Also, hier sind gleich die Besprechungsräume.'],
          ['Neue Kollegin', 'Ah, die sind technisch gut ausgestattet.'],
          ['Herr Werner', 'Genau, dazu möchte ich Ihnen gleich ein paar Informationen geben. Wir haben hier mehrmals wöchentlich Mitarbeiterbesprechungen, um die Aufgaben zu verteilen und uns gegenseitig über die Planungen und Abläufe aller laufenden Projekte auf den neuesten Stand zu bringen.'],
          ['Neue Kollegin', 'Das ist interessant. Die Projektarbeit fällt ja auch in mein Aufgabenfeld. Tauschen sich die Abteilungen denn regelmäßig aus?'],
          ['Herr Werner', 'Ja, meistens gibt es da eine sehr enge Zusammenarbeit. Wir beginnen immer mit einer gemeinsamen Projektanalyse mit den dazugehörigen Zielvorgaben. Der jeweilige Projektleiter delegiert dann einzelne Aufgaben an die entsprechenden Mitarbeiter der diversen Abteilungen und setzt dazu Fristen. Sie übernehmen zunächst keine Projektleitung, arbeiten aber natürlich aktiv im Team mit.'],
          ['Neue Kollegin', 'Na, das erleichtert mir ja auf jeden Fall meinen Einstieg.'],
          ['Herr Werner', 'So, und bevor ich Sie dann in Ihr Büro begleite, gehen wir noch an der Kaffeeküche vorbei. Dort können Sie sich jederzeit Kaffee oder Tee nehmen. Und bestimmt kann ich Ihnen bei dieser Gelegenheit noch einige weitere Kollegen vorstellen.'],
          ['Neue Kollegin', 'Alles klar, das klingt gut.'],
        ) }],
        questions: [
          { n: 24, rf: true, text: 'Alle Mitarbeitenden haben zu Beginn ihrer Tätigkeit eine feste Ansprechperson.', answer: 'richtig' },
          { n: 25, text: 'In der Einarbeitungszeit', options: ['treffen sich alle Kollegen regelmäßig in der Kaffeeküche.', 'finden Projektbesprechungen mehrere Male pro Woche statt.', 'sind neue Kollegen nicht selbstständig für Projekte verantwortlich.'], answer: 'c' },
        ],
      },
      {
        title: 'Gespräch 3 (26–27)',
        audio: [{ label: 'Gespräch 3', lines: d(
          ['Studio', 'Guten Tag, Herr und Frau Zander, Sie wollten mich gerne sprechen. Wie kann ich Ihnen behilflich sein?'],
          ['Herr Zander', 'Wir sind ja schon so lange hier in diesem Fitnessstudio Mitglieder, aber jetzt wollten wir unsere Verträge bei Ihnen kündigen. Am liebsten sofort.'],
          ['Studio', 'Oh, eine sofortige Vertragskündigung ist nicht so einfach möglich. Darf ich Sie nach Ihren Gründen fragen? Sind Sie mit unserem Service unzufrieden?'],
          ['Frau Zander', 'Nein, ganz und gar nicht. Wir sind immer gerne hier, aber ich erwarte ein Baby, und mein Arzt hat mir abgeraten, intensiven Kraftsport zu treiben.'],
          ['Studio', 'Herzlichen Glückwunsch. Also, Frau Zander, bei einer Schwangerschaft können Sie selbstverständlich das Sonderkündigungsrecht nutzen. Wenn es Ihnen aber gut geht, könnten Sie doch auch ein leichtes, moderates Ausdauertraining auf unseren Geräten durchführen, oder? Unsere Trainer stehen Ihnen gerne zur Seite.'],
          ['Frau Zander', 'Nein, ich möchte doch lieber von meinem Sonderkündigungsrecht Gebrauch machen.'],
          ['Herr Zander', 'Ja, für mich bitte auch, ohne meine Frau macht mir das Training keinen Spaß.'],
          ['Studio', 'Herr Zander, für Sie gilt diese Kündigungsmöglichkeit leider nicht. Sie sind ja nicht schwanger. Daher müssten Sie sich an die reguläre Vertragslaufzeit von zwölf Monaten halten, bevor Sie kündigen können.'],
          ['Herr Zander', 'Könnten Sie in unserem Fall denn keine Ausnahme machen?'],
          ['Studio', 'Ach, bedaure, mir sind leider die Hände gebunden. Unser Studio hat ja schon sehr kundenfreundliche Mindestvertragslaufzeiten.'],
          ['Herr Zander', 'Naja, zwölf Monate finde ich nicht gerade kurz.'],
          ['Studio', 'In vielen Studios belaufen sich die Verträge auf 24 Monate. Sie hätten jedoch noch die Möglichkeit, Ihren Vertrag an eine andere Person abzutreten.'],
          ['Herr Zander', 'Hm, vielleicht ist das wirklich eine Möglichkeit.'],
          ['Studio', 'Oder Sie gönnen sich auch alleine weiterhin Ihre Trainingseinheiten hier bei uns. Frau Zander, ich vermerke Ihre Sonderkündigung sogleich in unserem System und lasse Ihnen dann schnellstmöglich alles Weitere zukommen. Ich wünsche Ihnen alles Gute.'],
        ) }],
        questions: [
          { n: 26, rf: true, text: 'Herr und Frau Zander können problemlos ihren Vertrag im Fitnessstudio kündigen.', answer: 'falsch' },
          { n: 27, text: 'Das Fitnessstudio', options: ['bietet Kunden die Option, Verträge auf andere Personen umschreiben zu lassen.', 'bietet Kunden ausschließlich Verträge mit einer Mindestlaufzeit von 24 Monaten.', 'erstellt jedem Kunden einen Vertrag mit unterschiedlichen Kündigungsfristen.'], answer: 'a' },
        ],
      },
    ],
  },
  {
    label: 'Variante 3',
    instruction: I_TEIL1,
    sections: [
      {
        title: 'Gespräch 1 (22–23)',
        audio: [{ label: 'Gespräch 1', lines: d(
          ['Frau Köksal', 'Guten Morgen, Herr Franz. Sie haben mich um ein Gespräch gebeten.'],
          ['Herr Franz', 'Ja, gut, dass Sie sofort zu mir gekommen sind. Wir haben nämlich ein dringendes Problem. Frau Lindberg hat sich heute Morgen krankgemeldet. Sie wird voraussichtlich für einen längeren Zeitraum ausfallen.'],
          ['Frau Köksal', 'Oh, durch ihre Abwesenheit wird eine große Lücke entstehen. Wer übernimmt denn dann die Teamleitung für den Bereich Marketing?'],
          ['Herr Franz', 'Genau deswegen wollte ich mit Ihnen sprechen. Frau Köksal, Sie sind eine langjährige und zuverlässige Mitarbeiterin. Könnten Sie sich vorstellen, Frau Lindberg während ihrer Abwesenheit zu vertreten? Ihr Gehalt würden wir natürlich anpassen.'],
          ['Frau Köksal', 'Das klingt gut, kommt aber auch ein bisschen überraschend. Also, ich kann mir prinzipiell schon vorstellen, die Vertretung zu übernehmen. Allerdings kommen dadurch viele neue Herausforderungen auf mich zu, und ich bin ja auch in meine laufenden Projekte stark eingebunden.'],
          ['Herr Franz', 'Sie haben aktuell mit der Auswertung der Marktstudie alle Hände voll zu tun, richtig?'],
          ['Frau Köksal', 'Genau, und ich plane auch noch gemeinsam mit zwei Kollegen die Werbekampagne für die nächste Sportkollektion. Das wird ohnehin nicht einfach, das alles unter einen Hut zu bringen. Ich habe jetzt schon jede Menge Überstunden angesammelt.'],
          ['Herr Franz', 'Ich verstehe Ihre Bedenken. Was halten Sie davon, wenn ich Sie von der Werbekampagne abziehe? Die Marktstudie sollten Sie noch abschließen, danach würde ich Sie komplett von anderen Aufgaben entbinden, sodass Sie sich auf die Teamleitung konzentrieren können. Und mit Ihren Überstunden überlegen wir uns noch was.'],
          ['Frau Köksal', 'Das klingt gut. An wen soll ich mich denn bei Fragen wenden?'],
          ['Herr Franz', 'Sie können sich direkt an mich wenden. Wir werden uns sowieso regelmäßig zu Besprechungen treffen, aber Sie können mich auch jederzeit ansprechen.'],
        ) }],
        questions: [
          { n: 22, rf: true, text: 'Der Vorgesetzte fordert seine Mitarbeiterin auf, sich auf eine vakante Führungsposition zu bewerben.', answer: 'falsch' },
          { n: 23, text: 'Der Vorgesetzte', options: ['möchte, dass die Werbekampagne Priorität hat.', 'bietet eine Auszahlung der Überstunden an.', 'stellt die Mitarbeiterin von anderen Arbeitsprojekten frei.'], answer: 'c' },
        ],
      },
      {
        title: 'Gespräch 2 (24–25)',
        audio: [{ label: 'Gespräch 2', lines: d(
          ['Chefin', 'Hallo, Frau Petropoulou. Willkommen in unserem Architekturbüro.'],
          ['Herr Egger', 'Ein herzliches Willkommen auch von mir. Sind Sie startklar für Ihren ersten Arbeitstag?'],
          ['Frau Petropoulou', 'Ja, ich bin schon sehr gespannt auf alles, was mich hier erwartet.'],
          ['Chefin', 'Bei uns wird Ihnen bestimmt nicht langweilig. Ich möchte Ihnen auch gleich die Projekte, an denen wir aktuell arbeiten, vorstellen. Herrn Egger habe ich hinzugebeten, weil er Ihr zukünftiges Projektteam leitet und Ihnen in den nächsten Wochen als Ansprechpartner zur Seite stehen wird. Wie Sie ja wissen, sind wir weltweit tätig.'],
          ['Frau Petropoulou', 'Deswegen habe ich mich hier auch beworben, ich habe ja selbst einen internationalen Hintergrund.'],
          ['Chefin', 'Sie haben griechische Wurzeln, gell? Wir arbeiten gerade an einem umfangreichen Bauprojekt in Thessaloniki. Dort planen und überwachen wir den Bau eines Hotels für einen großen Tourismuskonzern. Da würden wir Sie gerne als Erstes einsetzen.'],
          ['Frau Petropoulou', 'Klingt gut. Wie ist denn der Stand des Projektes?'],
          ['Chefin', 'Die Planungsphase ist abgeschlossen und nun beginnt die Ausführung, bei der Sie die Umsetzung der Baupläne überwachen sollen. Das bedeutet häufige Dienstreisen. Sie werden bei der Projektsteuerung für den Hotelkomplex auch eigenständig über einen Etat verfügen, alle Ausgaben müssen jedoch in Ihrer Baudokumentation erfasst werden.'],
          ['Frau Petropoulou', 'Ja, klar, das ist natürlich wichtig. Wie wird denn meine Einarbeitung in den nächsten Wochen aussehen?'],
          ['Chefin', 'Sie werden ab sofort im Projekt Griechenland mitarbeiten und so unsere Abläufe kennenlernen. Herr Egger wird Sie auf Ihrer ersten Dienstreise begleiten. Er kennt die griechischen Kollegen sehr gut, und dank seines großartigen Einsatzes ist die Kooperation bisher sehr glatt gelaufen.'],
          ['Herr Egger', 'Oh, da fühle ich mich jetzt aber geschmeichelt.'],
          ['Chefin', 'Ja, genießen Sie das Lob, denn jetzt geht’s wieder weiter, frei nach dem Motto: Nicht gemeckert ist genug gelobt.'],
        ) }],
        questions: [
          { n: 24, rf: true, text: 'Die Gesprächsteilnehmer haben eine Meinungsverschiedenheit.', answer: 'falsch' },
          { n: 25, text: 'Frau Petropoulou', options: ['ist für die Planung eines Bauprojekts zuständig.', 'soll auch finanzielle Verantwortung tragen.', 'wird zunächst alleine nach Griechenland fliegen.'], answer: 'b' },
        ],
      },
      {
        title: 'Gespräch 3 (26–27)',
        audio: [{ label: 'Gespräch 3', lines: d(
          ['Herr Stein', 'Kuchenmanufaktur Stein, Lukas Stein am Apparat.'],
          ['Frau Fröhlich', 'Hallo, hier ist Miriam Fröhlich vom Café Bayer. Ich rufe eigentlich wegen der nächsten Bestellung an, habe aber noch eine Frage zu den geänderten Preisen. Die neuen sind ja ganz schön gepfeffert.'],
          ['Herr Stein', 'Wir mussten leider einige Preise anpassen, weil sich die Rohstoffe auf dem Weltmarkt verteuert haben. Das betrifft aber ausschließlich den Rohkakao aus Ghana und die Vanille aus Madagaskar. Diese Entwicklung hat sich schon lange abgezeichnet, aber wir konnten bisher unsere Preise halten. Leider ist das nun nicht mehr möglich, denn auch wir sind gezwungen, wirtschaftlich zu kalkulieren, und Qualität hat ja auch ihren Preis.'],
          ['Frau Fröhlich', 'Die auf Ihrer Liste angegebenen Preise sind aber schon die Endbeträge? Oder muss ich etwa noch mit weiteren Aufschlägen rechnen?'],
          ['Herr Stein', 'Nein, es ist alles bereits inkludiert. Wir möchten unseren treuen Kunden aber gerne einen kleinen Rabatt gewähren. Wenn Sie mindestens im Wert von 500 Euro bestellen, erhalten Sie ein Skonto von 3 Prozent. Voraussetzung ist, dass Sie innerhalb von 14 Tagen nach Rechnungsstellung zahlen.'],
          ['Frau Fröhlich', 'Aha, gibt es denn noch weitere Rabattaktionen bei Ihnen? Ich bestelle ja immer Ware im Wert von mindestens 500 Euro.'],
          ['Herr Stein', 'Bedaure, aufgrund unserer gestiegenen Ausgaben können wir leider keinen weiteren Preisnachlass gewähren.'],
          ['Frau Fröhlich', 'In diesem Fall würde ich gern noch mal die Angebote Ihrer Mitbewerber prüfen, ich melde mich dann gegebenenfalls.'],
          ['Herr Stein', 'Moment. Eine Möglichkeit gibt es da vielleicht noch. Wenn Sie ein Kuchen-Abo abschließen und quartalsweise im Voraus bezahlen, dann könnten wir Ihnen einen Rabatt von 7 Prozent anbieten. Die Lieferkosten entfallen übrigens auch für unsere Abonnenten.'],
          ['Frau Fröhlich', 'Das klingt gut, so kommen wir ins Geschäft.'],
        ) }],
        questions: [
          { n: 26, rf: true, text: 'Frau Fröhlich verhandelt mit dem Lieferanten über günstigere Konditionen.', answer: 'richtig' },
          { n: 27, text: 'Wegen der gestiegenen Rohstoffpreise', options: ['hat die Kuchenmanufaktur die Preise für Teile des Sortiments angehoben.', 'kann die Kuchenmanufaktur keine Kundenrabatte mehr gewähren.', 'verwendet die Kuchenmanufaktur keine Vanille aus Madagaskar mehr.'], answer: 'a' },
        ],
      },
    ],
  },
];

// ================= Teil 2 =================
export const horenTeil2 = [
  {
    label: 'Variante 1',
    instruction: I_TEIL2,
    options: {
      a: 'Regelmäßige Gehaltserhöhungen steigern die Motivation der Angestellten.',
      b: 'Familie und Beruf unter einen Hut zu bringen, ist eine Herausforderung.',
      c: 'Für ihren außerordentlichen Einsatz sollen die Mitarbeiter eine Prämie erhalten.',
      d: 'Eine gute Kommunikation ist unerlässlich für ein gutes Arbeitsklima.',
      e: 'Homeoffice ist eine zukunftsorientierte Lösung für die gesamte Belegschaft.',
      f: 'Die Mitarbeiter beklagen sich über ständige Überforderung.',
    },
    questions: [
      { n: 28, text: 'Gespräch 1', answer: 'c' },
      { n: 29, text: 'Gespräch 2', answer: 'd' },
      { n: 30, text: 'Gespräch 3', answer: 'b' },
      { n: 31, text: 'Gespräch 4', answer: 'f' },
    ],
    audio: [
      { label: 'Gespräch 1 (28)', lines: alt(
        'Ach, die Betriebsversammlung war heute echt anstrengend.',
        'Ich bin ehrlich gesagt ziemlich enttäuscht, dass auch in diesem Jahr wieder keine Gehaltserhöhungen drin sind.',
        'Mit mehr Geld hätte ich auch gerechnet, gerade wegen der zusätzlichen Arbeitsbelastung im letzten Jahr. Seitdem Herr Bossi und Frau Habermann gegangen sind, weiß ich gar nicht mehr, wo mir vor lauter Arbeit der Kopf steht. Ich hätte zumindest erwartet, dass die freien Stellen mit Ersatz besetzt werden, aber das ist doch nicht fair.',
        'Ja, das stimmt. Aber zumindest finanziell gehen wir ja nicht ganz leer aus und bekommen immerhin eine einmalige Bonuszahlung.',
        'Die haben wir uns auch echt verdient. Trotzdem, mehr als eine schöne Geste ist das auch nicht. Hast du mal ausgerechnet, was da netto noch übrig bleibt?',
      ) },
      { label: 'Gespräch 2 (29)', lines: alt(
        'Ich wollte kurz mit euch über die Ergebnisse der Mitarbeiterbefragung in euren Teams sprechen. Da waren wir ja schon überrascht.',
        'Tja, ich hätte nicht gedacht, dass unsere interne Gesprächskultur so negativ beurteilt wird.',
        'Naja, die Unzufriedenheit der Mitarbeiter ist schon deutlich spürbar. Das wirkt sich ja auch auf die Zusammenarbeit untereinander aus. Seit einiger Zeit gibt es ständig Querelen zwischen verschiedenen Teams. Jeder versucht, dem anderen den schwarzen Peter zuzuschieben, wenn etwas schiefgeht.',
        'Aha, da müssen wir uns etwas überlegen. Gerade in unserer Firma sind klare Absprachen ein absolutes Muss. Wo sehen Sie denn die Ursache für die Probleme?',
        'Ich vermute, es liegt daran, dass wir den Mitarbeitern häufiger Rückmeldungen geben müssten. Vielleicht sind die Arbeitsaufträge auch nicht klar genug. Bei uns muss ja alles immer sehr schnell gehen.',
        'Dann lasst uns doch ein Teamleitertreffen organisieren und Lösungsmöglichkeiten überlegen.',
      ) },
      { label: 'Gespräch 3 (30)', lines: alt(
        'Hi Tim, schön, dass man dich auch mal wieder sieht.',
        'Ja, ich bin in letzter Zeit selten im Büro. Seit August haben wir in unserer Abteilung die Option, an drei Wochentagen Homeoffice zu machen. Das nutze ich natürlich gern, da sich so die Kinderbetreuung viel leichter koordinieren lässt.',
        'Stimmt, deine Frau ist ja beruflich auch stark eingebunden. Ich würde mir auch wünschen, manchmal zu Hause arbeiten zu können. Die Kinderbetreuung am Nachmittag hat es echt in sich: Mein Mann hat ja nicht mal Gleitzeit.',
        'Gibt es für eure Abteilung diese Perspektive denn nicht?',
        'Nein, leider nicht, denn wir arbeiten mit vertraulichen Dokumenten, die das Firmengebäude nicht verlassen dürfen.',
        'Könnt ihr denn wenigstens die Großeltern mit einspannen? Das würde euch doch entlasten.',
        'Ja, das machen wir auch. Ohne sie wären wir hoffnungslos aufgeschmissen.',
      ) },
      { label: 'Gespräch 4 (31)', lines: alt(
        'Hallo Peter, na, wie war dein Wochenende? Alles fit?',
        'Von wegen. Ich habe mir wieder Arbeit mit nach Hause genommen und den ganzen Samstag an Statistiken gesessen.',
        'Och, das kenne ich auch. Auf Dauer geht einem das ganz schön an die Substanz.',
        'Seit Frau Ott die Abteilungsleitung übernommen hat, sind irgendwie noch mehr Aufgaben hinzugekommen, die am besten alle bis gestern erledigt sein müssen. Ich weiß wirklich nicht, wie ich das alles unter einen Hut bringen soll. Mein Arbeitstag hat ja auch nur acht Stunden.',
        'Ja, und wir kriegen noch nicht mal Anerkennung dafür, dass wir uns so ins Zeug legen.',
        'Meinst du, wir sollten den Betriebsrat einschalten? Einerseits wollen wir Frau Ott nicht vor den Kopf stoßen, andererseits überlegen schon einige Kollegen, sich wegzubewerben. Ich habe mich auch schon umgeschaut.',
      ) },
    ],
  },
  {
    label: 'Variante 2',
    instruction: I_TEIL2,
    options: {
      a: 'Bei Kurzarbeit bekommt man einen Nebenjob.',
      b: 'Ein Nebenjob kann mehrere positive Aspekte haben.',
      c: 'Manche langjährigen Mitarbeiter können nicht so einfach ersetzt werden.',
      d: 'Mehrarbeit ist eine gute Möglichkeit für einen Zusatzverdienst.',
      e: 'Private Interessen sind genauso wichtig wie die Realisierung beruflicher Ziele.',
      f: 'Die Verlängerung des Arbeitsvertrags über das Rentenalter hinaus hat finanzielle Nachteile.',
    },
    questions: [
      { n: 28, text: 'Gespräch 1', answer: 'c' },
      { n: 29, text: 'Gespräch 2', answer: 'd' },
      { n: 30, text: 'Gespräch 3', answer: 'e' },
      { n: 31, text: 'Gespräch 4', answer: 'b' },
    ],
    audio: [
      { label: 'Gespräch 1 (28)', lines: alt(
        'Hallo Freddy, schön, dass ich dich noch mal sehe.',
        'Warum? Du gehst doch jetzt bald in den Ruhestand, oder hast du schon Pläne?',
        'Ach, du hast es wohl noch nicht mitgekriegt. Der Antrag auf Verlängerung meines Beschäftigungsverhältnisses wurde bewilligt.',
        'Ach, das ist ja toll. Ich freue mich, dass du uns doch noch länger erhalten bleibst.',
        'Vorerst für zwei Jahre. Anscheinend war die Suche nach einem Nachfolger schwierig. Es gab viele Bewerber, aber die häufigen Bereitschaftsdienste abends und an den Wochenenden haben wohl einige abgeschreckt.',
        'Ja, die Arbeitszeiten sind tatsächlich nicht jedermanns Sache. Wir müssen schon viel Flexibilität an den Tag legen.',
        'Ehrlich gesagt hatte ich doch ein paar Bedenken vor einem Alltag ohne festen Rhythmus. Aber jetzt kann ich mich ja nicht beschweren. So habe ich noch zwei Jahre, um mich an den Gedanken zu gewöhnen. Und meinem Geldbeutel tut es schließlich auch gut.',
      ) },
      { label: 'Gespräch 2 (29)', lines: alt(
        'Hallo zusammen, habt ihr schon gehört? Es werden freiwillige Mitarbeiter für die Sonntags- und Feiertagsschichten in den kommenden Wochen gesucht.',
        'Also für mich kommt das leider nicht infrage, die Sonntage gehören meiner Frau und meinen Kindern. Das ist unser Familientag.',
        'Zeit mit der Familie zu verbringen, ist selbstverständlich sehr wichtig. Aber ich werde mich wahrscheinlich für die Sonderschichten melden. Seitdem wir das Haus gekauft haben, ist unsere finanzielle Situation etwas angespannt, da tut uns das Extrageld ganz gut.',
        'Ja, die 100 % Schichtzulage lasse ich mir auch nicht entgehen. Meine Tochter plant ein Auslandssemester in Australien. Allein die Kosten für den Flug sprengen eigentlich unser Budget.',
        'Das kann ich alles gut verstehen, aber dennoch möchte ich meine Sonntage mit der Familie verbringen.',
        'Das muss jeder für sich entscheiden. Wir dürfen aber auch die Kollegen nicht hängen lassen.',
      ) },
      { label: 'Gespräch 3 (30)', lines: alt(
        'Hallo Birgit, wo warst du denn gestern?',
        'Also, ich habe meine Arbeitszeit reduziert und komme ab sofort montags nicht mehr. Das hatte ich schon lange vor, und jetzt hat es endlich geklappt.',
        'Das wusste ich gar nicht. Ich hatte das Gefühl, dass du in der Arbeit richtig aufgehst.',
        'Es ist auch mein Traumjob. Aber ich habe auch viele private Pläne, die einfach auf der Strecke bleiben, wenn ich so viel arbeite. Am Anfang hatte ich Angst, den Wunsch zu äußern. Schließlich bedeutet das eine Mehrbelastung für die Kollegen. Aber der Chef hat cool reagiert.',
        'Hast du denn keine Angst vor den finanziellen Einbußen?',
        'Ich habe immer was zur Seite gelegt und hoffe, dass ich gut über die Runden komme. Dazu ist die Reduzierung zunächst auf drei Monate befristet.',
      ) },
      { label: 'Gespräch 4 (31)', lines: alt(
        'Hallo Tina, warum die Eile? Machst du noch nicht Feierabend?',
        'Hallo Thomas, doch schon, aber Leonie wartet im Kindergarten. Und dann muss ich schnell zu meinem Nebenjob.',
        'Ich frage mich, wie du das alles hinkriegst, und dabei bist du immer gut gelaunt.',
        'Alles eine Frage der Organisation. Als wir Kurzarbeit hatten, musste ich jeden Cent zweimal umdrehen, und dann hat mir eine Freundin den Job im Altenheim vermittelt. Dank des Nebenverdienstes konnten wir uns die paar Monate über Wasser halten.',
        'Altenheim? Das stelle ich mir anstrengend vor.',
        'Ja, manchmal ist es echt hart, aber obwohl es uns mittlerweile finanziell besser geht, würde ich den Job ungern an den Nagel hängen. Ich habe die Bewohner ins Herz geschlossen, und das Gefühl, was Gutes zu tun, ist wirklich schön.',
      ) },
    ],
  },
  {
    label: 'Variante 3',
    instruction: I_TEIL2,
    options: {
      a: 'Auslandserfahrung kann ein wichtiger Pluspunkt für die Karriere sein.',
      b: 'Es lohnt sich, einen höheren Bildungsabschluss anzustreben.',
      c: 'Fortbildungen sind wichtig, um auf dem neuesten Stand zu bleiben.',
      d: 'Internationale Arbeitserfahrung wird tendenziell unterschätzt.',
      e: 'Wenn die Arbeit monoton wird, ist es Zeit für eine Veränderung.',
      f: 'Wer eine leitende Position anstrebt, sollte sich regelmäßig fortbilden.',
    },
    questions: [
      { n: 28, text: 'Gespräch 1', answer: 'c' },
      { n: 29, text: 'Gespräch 2', answer: 'b' },
      { n: 30, text: 'Gespräch 3', answer: 'e' },
      { n: 31, text: 'Gespräch 4', answer: 'a' },
    ],
    audio: [
      { label: 'Gespräch 1 (28)', lines: alt(
        'Du, Melanie, wollen wir uns nachher mal die neuen Schulungsangebote anschauen?',
        'Können wir machen. Die Chefin legt ja allergrößten Wert darauf, dass wir mindestens zwei Seminare pro Jahr belegen.',
        'Ja, das ist doch auch gut so, oder? Für mich als Quereinsteiger sind solche Schulungen jedenfalls unentbehrlich, um richtig in die Materie reinzukommen.',
        'Ja, mag sein, aber ganz ehrlich: Ich finde diese ewigen Schulungen manchmal etwas nervig, die kosten immer viel Zeit und finden meistens an Wochenenden statt. Aber ich sehe schon ein, dass sie notwendig sind. Unsere Firma arbeitet schließlich immer mit den neuesten Technologien, und da gibt es nun mal ständig Weiterentwicklungen.',
        'Ja, da muss man wirklich dranbleiben, sonst hat die Konkurrenz bald die Nase vorn.',
      ) },
      { label: 'Gespräch 2 (29)', lines: alt(
        'Glückwunsch zur bestandenen Abschlussprüfung und zur Übernahme, Herr Maderati. Man ist offensichtlich mit Ihrer Leistung sehr zufrieden und hält große Stücke auf Sie.',
        'Danke, Frau Kessler. Kaum zu glauben, dass die Ausbildung schon vorbei ist. Meine Arbeit ist seither viel anspruchsvoller geworden. Aber das ist gut so, ich mag Herausforderungen. Ab September werde ich sogar wieder die Schulbank drücken und BWL studieren.',
        'Sie geben aber richtig Vollgas. Meinen Sie nicht, dass Sie erst mal etwas Berufserfahrung sammeln sollten?',
        'Naja, Berufserfahrung ist sicher wichtig, aber ich denke, dass ich mit einem zusätzlichen Uni-Diplom in der Tasche langfristig noch bessere Perspektiven habe.',
        'Das stimmt allerdings.',
        'Außerdem hat die Geschäftsführung die Finanzierung des Studiums schon abgenickt. Wer weiß, ob ich so ein Angebot noch mal kriege?',
      ) },
      { label: 'Gespräch 3 (30)', lines: d(
        ['Kollege', 'Was ist los mit dir, Tanja? Du hast doch was auf dem Herzen?'],
        ['Tanja', 'Ach, weißt du, ich mache diesen Job schon ewig. Mittlerweile kenne ich jeden Handgriff. Es ist immer derselbe Trott.'],
        ['Kollege', 'Na komm, solange das Geld stimmt, wollen wir mal nicht meckern, oder?'],
        ['Kollegin', 'Also, ich kann sie schon verstehen. Hast du nie daran gedacht, etwas anderes zu machen, Tanja?'],
        ['Tanja', 'Doch, ich denke schon länger darüber nach, aber ich habe noch keine Lösung gefunden. In unserer Abteilung gibt es keine Aufstiegsmöglichkeiten. Der einzige Weg wäre, in die Zentrale nach Belgien zu wechseln. Und einen Umzug nach Brüssel will ich meiner Familie nicht zumuten.'],
        ['Kollegin', 'Und wie wäre ein interner Wechsel hier vor Ort? Warum übernimmst du nicht das Anlernen der Azubis?'],
        ['Kollege', 'Ja, keine schlechte Idee, das bringt Abwechslung, und du kannst dein fundiertes Wissen weitergeben. Davon könnten doch alle Seiten profitieren.'],
      ) },
      { label: 'Gespräch 4 (31)', lines: alt(
        'Na, Mira, ist dein Japanisch schon verhandlungssicher?',
        'Von wegen, von verhandlungssicher bin ich weit entfernt, aber ich bleibe am Ball. Zum Glück sprechen in meinem Team in Tokio alle fließend Englisch.',
        'Puh, Tokio, das ist ganz schön weit weg. Wann geht’s denn los?',
        'In drei Wochen muss ich dort sein. Das Projekt startet zwar offiziell erst im September, aber bis dahin ist noch eine Menge vorzubereiten. Außerdem würde ich mir gern ausreichend Zeit nehmen, um die Mitarbeiter persönlich kennenzulernen. So ein großes Team zu leiten, ist schließlich nicht ohne. Und du weißt ja, wie wichtig dieser Job für meine berufliche Zukunft ist, da möchte ich nichts dem Zufall überlassen.',
        'Du kriegst das schon hin. Deine Qualifikationen könnten nicht besser sein. Und wenn demnächst auch noch die Leitung eines großen Projekts in Asien in deinem Lebenslauf steht, werden sich deine künftigen Arbeitgeber um dich reißen.',
      ) },
    ],
  },
];

// ================= Teil 3 =================
export const horenTeil3 = [
  {
    label: 'Variante 1 — Homeoffice',
    instruction: I_TEIL3,
    questions: [
      { n: 32, text: 'In Zukunft', options: ['nutzen Mitarbeiter im Homeoffice den eigenen Computer.', 'kommt auf zwei Kollegen in der Firma ein Büroplatz.', 'arbeiten einige Mitarbeiter ausschließlich von zu Hause.'], answer: 'b' },
      { n: 33, text: 'Wer im Homeoffice arbeitet,', options: ['kann seine Arbeitszeit völlig frei bestimmen.', 'muss seine geleisteten Stunden nachweisen.', 'darf keine Überstunden mehr machen.'], answer: 'b' },
      { n: 34, text: 'Wenn man im Homeoffice stolpert,', options: ['besteht nur in bestimmten Fällen Versicherungsschutz.', 'ist man in gleicher Weise versichert wie im Büro.', 'muss man die Versicherung sofort informieren.'], answer: 'a' },
      { n: 35, text: 'Die Arbeit von zu Hause aus', options: ['sorgt für zu viel Ablenkung.', 'spart den Mitarbeitern Kosten.', 'ist nicht jedermanns Sache.'], answer: 'c' },
    ],
    audio: [{ label: 'Besprechung: Homeoffice', lines: d(
      ['Leitung', 'Guten Morgen. Wir haben uns nach langen Diskussionen mit der Geschäftsleitung und dem Betriebsrat dazu entschlossen, Ihnen, liebe Kolleginnen und Kollegen, in Zukunft die Möglichkeit zu geben, von zu Hause aus zu arbeiten, sofern Ihre Aufgaben das zulassen. Immer wieder kamen diesbezüglich Anfragen aus der Belegschaft. Wir wollen zunächst mit einer Testphase starten, und wenn wir feststellen, dass weiterhin effizient und diszipliniert gearbeitet wird, würden wir das Homeoffice langfristig einführen. Das hätte für unsere Agentur klare Vorteile. Sie wissen ja, wir haben ein Platzproblem und wären gezwungen, demnächst in ein größeres Büro umzuziehen. Diese finanzielle Belastung könnten wir uns sparen, wenn wir einige Büroplätze ins Homeoffice verlegen würden.'],
      ['Kollege', 'Ähm, welche Abteilungen würde das denn betreffen? Und wie wird entschieden, wer im Homeoffice arbeitet und wer nicht?'],
      ['Kollegin', 'Ja, und wie genau soll das umgesetzt werden? Würde man dann gar nicht mehr ins Büro kommen müssen?'],
      ['Leitung', 'Also, wir könnten uns vorstellen, dass z. B. unsere Grafiker und die Texter sehr gut von zu Hause arbeiten können. Natürlich wird niemand gezwungen, ins Homeoffice zu gehen. Es wäre eine Option. Grundsätzlich bleibt Ihre erste Arbeitsstätte aber das Büro, und Sie würden nur tageweise von zu Hause arbeiten. Dabei sollten sich die Mitarbeiter in den einzelnen Abteilungen abwechseln und jeweils zu zweit einen Schreibtisch nutzen. Das hätte den Vorteil der Platzersparnis. Uns ist es jedoch sehr wichtig, dass wir trotz Homeoffice engen Kontakt halten, und deshalb möchten wir alle regelmäßig hier in der Agentur sehen. Ach ja, und wer zu Hause arbeitet, nimmt seinen Laptop aus dem Büro einfach mit und bekommt einen Zugang zum Firmenserver eingerichtet.'],
      ['Kollege', 'Wie ist denn die Arbeitszeit im Homeoffice geregelt?'],
      ['Leitung', 'Nun, auch für die Arbeit zu Hause gilt das Arbeitszeitgesetz. Sie dürfen nicht länger als acht Stunden täglich arbeiten und müssen Pausen einhalten. Wer viel zu tun hat, darf einen Arbeitstag auch mal auf zehn Stunden ausdehnen. Aber das muss, wie im Büro, eine Ausnahme bleiben. Da man im Homeoffice unser Zeiterfassungssystem nicht nutzen kann, werden Sie Ihre Arbeitszeit in einer Excel-Liste dokumentieren und diese einmal monatlich an die Geschäftsleitung schicken. Außerdem wird eine Kernzeit festgelegt, in der Sie auf jeden Fall erreichbar sein müssen.'],
      ['Kollegin', 'Noch was ganz anderes. Sind wir denn zu Hause auch versichert? Es können ja dort auch Unfälle passieren.'],
      ['Leitung', 'Das ist eine gute Frage. Wenn Sie auf Ihrem direkten Arbeitsweg oder auch hier in der Agentur einen Unfall haben, sind Sie versichert. Ähnliches gilt auch für die Arbeit zu Hause. Das Bundessozialgericht trennt allerdings streng zwischen berufsbedingten und privaten Handlungen. Das heißt, wenn Sie z. B. auf dem Weg zum Drucker über ein Kabel stolpern und sich den Arm brechen, sind Sie versichert. Holen Sie sich aber ein Glas Wasser aus der Küche und stürzen dabei, sind Sie nicht versichert. Das hat ein Gericht zu entscheiden. Jeder Unfall muss dem Arbeitgeber aber umgehend gemeldet und natürlich auch nachgewiesen werden.'],
      ['Kollege', 'Wie soll man das denn nachweisen?'],
      ['Leitung', 'Es ist tatsächlich nicht einfach. Aber auch die Dauer Ihrer Arbeitszeit ist im Grunde genommen eine Frage des Vertrauens. Eine solche Arbeitsvereinbarung funktioniert nur, wenn der Arbeitgeber sich auf seine Mitarbeiter verlassen kann.'],
      ['Kollegin', 'Ja, das klingt alles sehr verlockend. Aber die Arbeit von zu Hause hat auch ihre Schattenseiten.'],
      ['Leitung', 'Jede Arbeitsform hat Vor- und Nachteile. Gut am Homeoffice ist, dass Sie sich den Weg zur Arbeit sparen und so mehr Zeit für andere Dinge haben. Sie sind außerdem viel flexibler bei der Gestaltung Ihres Arbeitstages und können sich besser konzentrieren als im Großraumbüro. Aber natürlich ist es nicht einfach, sich selbst zu organisieren. Und der eine oder andere muss vielleicht auch noch mal Geld für einen guten Schreibtischstuhl oder Büroutensilien in die Hand nehmen. Ein Nachteil ist auch, dass man den spontanen Austausch mit den Kollegen nicht hat. So fühlen sich manche im Homeoffice ein bisschen allein. Wir haben aber ein paar Tipps zusammengestellt, die Ihnen helfen einzuschätzen, ob Sie der Typ fürs Homeoffice sind oder eher nicht. Ich verteile Ihnen mal die Unterlagen.'],
    ) }],
  },
  {
    label: 'Variante 2 — Schichtarbeit',
    instruction: I_TEIL3,
    note: 'Відповідь на 34 (c) у групі позначена знаком питання.',
    questions: [
      { n: 32, text: 'Die Schichtarbeit', options: ['findet an allen Wochentagen statt.', 'teilt sich in zwei Schichten auf.', 'wird zusätzlich finanziell vergütet.'], answer: 'c' },
      { n: 33, text: 'In der Firma sollen', options: ['alle Mitarbeiter der Produktion in Wechselschichten arbeiten.', 'die Mitarbeiter in die Planung mit eingeschlossen werden.', 'die Schichten in einem viertägigen Rhythmus wechseln.'], answer: 'b' },
      { n: 34, text: 'Die Zeitarbeitskräfte sollen', options: ['vorrangig die Nachtschichten übernehmen.', 'wegen der steigenden Produktion eingestellt werden.', 'zu Beginn in ihrer Tätigkeit begleitet werden.'], answer: 'c' },
      { n: 35, text: 'Für Mitarbeiter mit Kindern gibt es', options: ['auf ihren Bedarf abgestimmte Regelungen.', 'eine einheitlich gestaltete Sonderregelung.', 'im Schichtbetrieb keine Ausnahmen.'], answer: 'a' },
    ],
    audio: [{ label: 'Betriebsversammlung: Schichtarbeit', lines: d(
      ['Leitung', 'Liebe Mitarbeiterinnen und Mitarbeiter, sicher haben Sie in den letzten Tagen die Berichterstattung in den Medien verfolgt. Wie Sie dort erfahren konnten, ist die Nachfrage nach bestimmten Produkten aus unserem Sortiment exponentiell angestiegen. Natürlich müssen wir darauf zeitnah reagieren und Teile unserer Produktion massiv hochfahren. Nach harten Verhandlungen mit dem Betriebsrat haben wir entschieden, zwei Maßnahmen zu ergreifen. Zum einen werden wir zeitweise Schichtarbeit in Teilen der Produktion einführen. Zum anderen werden wir Zeitarbeitskräfte einstellen, denn wir können es uns aktuell nicht leisten, dass unsere Bänder stillstehen. Daher wird in den nächsten Monaten in der Fertigung 24 Stunden am Tag, von Montag bis Samstag, in verschiedenen Schichten gearbeitet.'],
      ['Kollege', 'Und der Betriebsrat hat das so einfach abgesegnet? Das ist ja unglaublich. Ich hoffe, dass für uns wenigstens etwas herausspringt.'],
      ['Leitung', 'Ich kann Ihren Unmut ja durchaus verstehen, aber ich versichere Ihnen, dass es sich um eine zeitlich begrenzte Maßnahme handelt. Auf alle Fälle werden Sie für Ihren Einsatz angemessen entlohnt. Sie können auf mein Wort zählen. Lassen Sie mich aber zuerst einmal erklären, wie das Ganze funktionieren soll. Es ist geplant, dass die Mitarbeiter der Verpackungsfertigung in drei Schichten arbeiten. Dabei haben wir folgende Zeiten festgelegt: Es gibt die Frühschicht von 5 Uhr bis 13 Uhr, die Spätschicht von 13 Uhr bis 21 Uhr und die Nachtschicht von 21 Uhr bis 5 Uhr, jeweils mit einer halben Stunde Pause. Die Sonntage bleiben weiterhin frei, und für die Samstagsarbeit und die Nachtschicht gibt es einen Lohnzuschlag von 25 Prozent.'],
      ['Kollegin', 'Das sind ja sicherlich Bruttozuschläge. Dann bleibt für uns doch wieder kaum was am Monatsende übrig.'],
      ['Leitung', 'Neben der finanziellen Zulage werden wir Ihnen monatlich kostenlose Essenscoupons zur Verfügung stellen. Nun möchte ich aber noch einmal auf unser Schichtarbeitsmodell zu sprechen kommen und es näher erklären. Es soll nämlich in Wechselschichten gearbeitet werden, das heißt, dass die Mitarbeiter drei Tage am Stück in der gleichen Schicht arbeiten. Und dann wird gewechselt. Nach der Nachtschicht hat man drei volle Tage frei, um sich zu erholen. Der Schichtplan wird vier Wochen im Voraus erstellt. Ihre Wünsche sollen dabei natürlich berücksichtigt werden. Ich möchte aber noch mal betonen, dass dieses neue Arbeitszeitmodell nicht das gesamte Personal der Produktion betrifft, sondern nur die Verpackungsfertigung.'],
      ['Kollege', 'Und wie ist das mit den Zeitarbeitskräften, die eingestellt werden? Sollen die dauerhaft bleiben?'],
      ['Leitung', 'Genau, das wäre auch mein nächster Punkt gewesen. Die erhöhte Nachfrage ist auf die außergewöhnliche aktuelle Situation zurückzuführen und wird sich so nicht wiederholen. Deshalb haben wir beschlossen, für eine befristete Zeit auf Zeitarbeitskräfte zurückzugreifen. Allerdings gibt es in der Produktion nicht genug Platz. Deshalb ist es nicht möglich, dass noch mehr Kollegen zeitgleich arbeiten. Die räumlichen Kapazitäten sind ja jetzt schon ausgeschöpft. Aus diesem Grund haben wir entschieden, die befristete Schichtarbeit einzuführen. Auf diese Weise können wir dafür sorgen, dass die Bänder nie stillstehen. Die Zeitarbeitskräfte werden in allen drei Schichten eingesetzt werden. Wichtig ist für uns, dass Sie, unsere erfahrenen Mitarbeiterinnen und Mitarbeiter, den Zeitarbeitskräften in den Schichten für die gesamte Zeit zur Seite stehen.'],
      ['Kollegin', 'Das klingt ja alles schön und gut, aber ich bin zum Beispiel alleinerziehend und kann meine Tochter nachts nicht alleine lassen. Wird es denn eine Sonderregelung für Eltern geben?'],
      ['Leitung', 'Aus rechtlicher Sicht können Sie für die Betreuung Ihrer Kinder zwar keine bestimmten Einsatzzeiten verlangen, aber wir als familienfreundlicher Arbeitgeber wollen Ihnen hier selbstverständlich entgegenkommen. Seien Sie bitte nicht besorgt. Ihre Teamleitung wird individuelle Lösungen mit Ihnen finden. Ich weiß, dass das für Sie alle eine Ausnahmesituation ist, aber gemeinsam werden wir sie meistern. Als zusätzliche Motivation haben wir uns überlegt, im Sommer ein großes Fest für die gesamte Belegschaft und die Familien zu veranstalten. Damit wollen wir Ihnen für Ihren Einsatz danken. Haben Sie noch weitere Fragen, dann zögern Sie nicht, diese nach der Mittagspause zu stellen. Ab 13 Uhr ist nämlich eine Fragerunde geplant.'],
    ) }],
  },
  {
    label: 'Variante 3 — Nudelprodukte',
    instruction: I_TEIL3,
    questions: [
      { n: 32, text: 'Der Umsatz der Nudelprodukte', options: ['ist in den letzten zwei Jahren gestiegen.', 'stagniert in der letzten Zeit.', 'verringerte sich in den letzten 24 Monaten.'], answer: 'c' },
      { n: 33, text: 'Die Firma', options: ['hält kurze Lieferwege für nicht besonders wichtig.', 'legt mehr Wert auf niedrige Preise als auf hochwertige Qualität.', 'möchte als Lieferanten Biolandwirte beauftragen.'], answer: 'c' },
      { n: 34, text: 'Die Preise der neuen Produkte werden', options: ['den alten Preis übersteigen.', 'nicht ansteigen.', 'sich um 2 % erhöhen.'], answer: 'b' },
      { n: 35, text: 'Die zukünftigen Verpackungen sollen', options: ['aus innovativen Materialien hergestellt werden.', 'billiger sein als die herkömmlichen.', 'wiederverwendbar sein.'], answer: 'a' },
    ],
    audio: [{ label: 'Betriebsversammlung: neues Konzept', lines: d(
      ['Leitung', 'Hallo, liebe Kollegen, ich begrüße Sie ganz herzlich zu unserer Betriebsversammlung. Wie im letzten Jahr angekündigt, möchte ich Ihnen heute das neue Konzept für die Weiterentwicklung unserer Produktlinien erläutern. Dieses Konzept basiert im Wesentlichen auf zwei Punkten. Zum einen möchten wir unser bestehendes Sortiment erweitern. Zum anderen möchten wir auch einen neuen Standard einführen, nämlich Bio-Qualität. Ich werde Sie nun über den derzeitigen Entwicklungsstand dieses Projekts umfassend informieren.'],
      ['Kollege', 'Dann möchte ich gleich mal eine erste Frage stellen. Wie kommt es eigentlich zu der Neuausrichtung?'],
      ['Leitung', 'Den Hintergrund werde ich Ihnen kurz erklären. Wie Sie wissen, haben sich unsere Klassiker wie Spaghetti, Makkaroni, die mit Fleisch gefüllten Maultaschen und Spätzle in der Vergangenheit immer sehr gut verkauft. Aber in den letzten zwei Geschäftsjahren hatten wir einen Umsatzrückgang. Darauf müssen wir natürlich reagieren und haben uns daher Folgendes überlegt. Zum einen möchten wir unser Sortiment erweitern, so planen wir, Varianten unserer vorhandenen Produkte herzustellen. Das heißt, neben herkömmlichen Nudeln wollen wir nun auch Vollkorn- und glutenfreie Nudeln anbieten. Zum anderen möchten wir unsere bewährten Produkte nach Bio-Standards herstellen. Zur Umstellung auf Bio-Qualität möchte ich Folgendes anmerken: Am wichtigsten ist es, dass wir unsere Zutaten bzw. Rohstoffe aus kontrollierten ökologischen Anbaugebieten beziehen.'],
      ['Kollegin', 'Entschuldigung, dürfte ich hier noch eine Frage stellen?'],
      ['Leitung', 'Ja, selbstverständlich.'],
      ['Kollegin', 'Bedeutet dies konkret, dass die Rohstoffe zukünftig auch aus der Region kommen werden?'],
      ['Leitung', 'Ja, das ist in der Tat ein wichtiger Punkt in unserem neuen Konzept. Wir wollen jetzt bevorzugt mit Lieferanten aus unserer Region zusammenarbeiten, die ausschließlich ökologischen Anbau betreiben. Dies ist ein wichtiges Kriterium bei der Auswahl der Partner. Außerdem spielt die hochwertige Qualität der Rohstoffe eine Rolle. Und wir suchen natürlich Landwirte, die absolut zuverlässig sind. Es ist dann auch unerheblich, wenn sie höhere Preise veranschlagen. Darüber hinaus erreichen wir nicht nur kurze Lieferwege, sondern sichern auch verstärkt die Arbeitsplätze in der Region.'],
      ['Kollege', 'Das würde dann also heißen, dass wir mit regionalen, aber meist teureren Anbietern zusammenarbeiten. Wie können wir denn dann unsere günstigen Preise aufrechterhalten?'],
      ['Leitung', 'Nun, da gibt es mehrere Punkte zu berücksichtigen. Wenn wir mit ausländischen Lieferanten zusammenarbeiten, haben wir nicht nur lange Transportwege, sondern sind auch oft mit unvorhergesehenen Hindernissen wie Staus und Unfällen konfrontiert. Dies kann dazu führen, dass sich die Transportzeiten noch zusätzlich verlängern und wir deshalb eine hohe Verderblichkeit der Produkte zu verzeichnen haben. In der Regel können daher 2 % der Rohstoffe nicht mehr für die Produktion genutzt werden. Des Weiteren kommen noch hohe Transportkosten hinzu. Dies alles wird bei der Zusammenarbeit mit den regionalen Partnern entfallen. Ein weiterer Vorteil ist es, dass die ökologische Landwirtschaft hierzulande subventioniert wird. Die Preise werden also auch dann stabil bleiben, wenn wir mit regionalen Anbietern zusammenarbeiten. All dies ist unserer gesamten Marketingstrategie dienlich. Außerdem darf man auch nicht vergessen, dass sich regionale Produkte besser vermarkten lassen; die Kunden bevorzugen nämlich immer öfter die heimische Produktion. Deshalb sollte die Herkunft der Zutaten auch auf den Verpackungen stehen, und dafür ist der Kunde gern bereit, etwas mehr zu bezahlen.'],
      ['Kollegin 2', 'Apropos Verpackungen. Immer häufiger bekommen wir Rückmeldungen von unseren Kunden, dass sie die Plastikverpackungen nicht umweltfreundlich genug finden. Wäre es nicht von Interesse, auch dies im neuen Konzept zu berücksichtigen?'],
      ['Leitung', 'Sie sprechen hier einen wichtigen Punkt an, den wir in den Überlegungen bereits bedacht haben, denn der Umweltschutz ist eine unserer Prioritäten. Deshalb gestalten wir unsere Verpackungen neu, und zwar nach ökologischen Standards. In Zukunft setzen wir auf Biokunststoffe, das sind Kunststoffe, die aus nachwachsenden Rohstoffen erzeugt werden. Es gibt hierbei verschiedene Varianten. Für uns ist es wichtig, dass es für die Verbraucher möglich ist, die Verpackungen problemlos zu entsorgen. Auf Wiederverwertbarkeit müssen wir gar nicht achten, weil dies bei unseren Nudelprodukten nicht notwendig ist. Einen Nachteil gibt es allerdings noch: Die neu entwickelten Biokunststoffe haben immer noch einen deutlich höheren Preis. Auch rechtliche Aspekte müssen beachtet werden. Mehr dazu nach der Mittagspause.'],
    ) }],
  },
];

// ================= Teil 4 =================
export const horenTeil4 = [
  {
    label: 'Variante 1',
    instruction: I_TEIL4,
    questions: [
      { n: 36, text: 'Zum Firmenjubiläum soll', options: ['ein neues Produkt für Sportler auf den Markt kommen.', 'ein Sportverein finanziell unterstützt werden.', 'es eine Rabattaktion für Sportvereine geben.'], answer: 'b' },
      { n: 37, text: 'Werner Mayer erklärt, dass', options: ['die Angestellten zeitnah benachrichtigt werden sollten.', 'die Rechtsform der Firma bereits geändert wurde.', 'eine schriftliche Mitteilung zur neuen Rechtsform verschickt wird.'], answer: 'a' },
      { n: 38, text: 'Frau Simon', options: ['bestätigt den Preis für den Messestand.', 'bittet um Rückmeldung nach 18 Uhr.', 'schlägt ein individuelles Stand-Design vor.'], answer: 'c' },
      { n: 39, text: 'Beim Rundgang soll die neue Kollegin', options: ['alle Abteilungen kennenlernen.', 'den Erhalt der Anweisungen bestätigen.', 'die Sicherheitsrichtlinien unterschreiben.'], answer: 'b' },
      { n: 40, text: 'Estefania möchte, dass Thorsten', options: ['den Zahlungseingang kontrolliert.', 'die neuen Lieferbedingungen ergänzt.', 'eine Rechnung weiter bearbeitet.'], answer: 'c' },
    ],
    audio: [
      { label: 'Nachricht 36', lines: mono('Sabine', 'Hallo Jan, hier ist Sabine. Ich rufe wegen des Firmenjubiläums Ende Juni an. Zuerst hieß es ja, dass zu diesem Anlass ein Jubiläumsprodukt auf den Markt gebracht werden sollte. Während deines Urlaubs hat das Marketing aber beschlossen, stattdessen den Fußballklub hier in Schwetzingen zu sponsern. Alle Spieler werden mit einem Trikot ausgestattet, auf dem unser Logo und der Aufdruck „20 Jahre Hammerpreise“ zu sehen ist. Das soll nicht nur bei den Vereinsmitgliedern die Werbewirksamkeit erhöhen, sondern an Spieltagen auch bei den Zuschauern. Sag Bescheid, wenn du noch Infos dazu brauchst. Okay?') },
      { label: 'Nachricht 37', lines: mono('Werner Mayer', 'Morgen, hier ist Werner Mayer aus der Rechtsabteilung. Ich wollte nur kurz Bescheid geben, dass einer Änderung der Rechtsform unseres Unternehmens nun nichts mehr im Weg steht. Alle Details wurden geklärt und der Rest ist reine Formsache. Wir haben für die Eintragung ins Handelsregister schon kommende Woche einen Termin. Ihr solltet also möglichst bald eine Mitarbeiterversammlung einberufen und die Belegschaft informieren, dass wir in Zukunft eine GmbH sind. Denkt bitte daran, dass die neue Rechtsform dann auch auf unseren Briefköpfen, in der E-Mail-Signatur und so weiter erscheinen muss. Okay?') },
      { label: 'Nachricht 38', lines: mono('Sandra Simon', 'Sandra Simon, MTV-Messebau. Guten Morgen. Leider erreiche ich Sie nicht persönlich. Es geht um Ihren Stand auf der Hannover Messe. Wenn Sie das Corporate Design Ihres Unternehmens optimal umgesetzt sehen wollen, sollten Sie sich eher für einen Individualbau als für einen konventionellen Messestand entscheiden. Dieser wird speziell nach Ihren Vorgaben gefertigt. Wir arbeiten gerne einen Entwurf für Sie aus. Der Preis für den individuellen Ausstellungsstand beginnt bei 250 Euro pro Quadratmeter. Lassen Sie uns zu den Einzelheiten noch mal telefonieren. Ich bin heute bis 18 Uhr im Büro.') },
      { label: 'Nachricht 39', lines: mono('Kevin', 'Hallo Nazira, Kevin hier. Hast du noch auf dem Schirm, dass am Montag die neue Kollegin in der Verkaufsabteilung anfängt? Du hattest dich doch bereit erklärt, für mich den Rundgang mit ihr zu übernehmen. Geht bitte nur durch die für sie relevanten Abteilungen. Vergiss nicht, bei der Haustechnik die Magnetkarte abzuholen. In der Produktion müsst ihr unbedingt die Sicherheitsmaßnahmen beachten und Helme aufsetzen. Sonst gibt es viel Ärger. Außerdem muss die Kollegin im Einarbeitungsprotokoll unterschreiben, dass sie alle wichtigen Instruktionen bekommen hat. Okay?') },
      { label: 'Nachricht 40', lines: mono('Estefania', 'Hallo Thorsten, hier ist Estefania. Es geht um die Lieferung an Lehmann & Co. Ich habe schon mal die Rechnung vorbereitet. Du findest sie im Ordner „offene Posten“. Bitte noch mal prüfen und dann in die Post geben. Ach so, nicht dass du dich wunderst: In der Rechnung sind schon die geänderten Lieferbedingungen aufgeführt. Ab diesem Monat liefern wir ja nicht mehr frei Haus, sondern ab Werk. Außerdem hat Lehmann eine Zahlungsfrist von 30 Tagen eingeräumt bekommen.') },
    ],
  },
  {
    label: 'Variante 2',
    instruction: I_TEIL4,
    questions: [
      { n: 36, text: 'Herr Müller', options: ['hat einen neuen Geschäftspartner aus Asien kontaktiert.', 'knüpfte auf der Messe in Hongkong Geschäftskontakte.', 'teilt die Pleite eines asiatischen Geschäftspartners mit.'], answer: 'c' },
      { n: 37, text: 'Felicitas von der IT-Abteilung möchte', options: ['ein neues Programm für den Innendienst entwickeln.', 'die Cloud für die internen Mitarbeiter zugänglich machen.', 'mit ihrem Kollegen das weitere Vorgehen besprechen.'], answer: 'c' },
      { n: 38, text: 'Herr Schäffler', options: ['bietet den Erntehelfern kostenfrei Zimmer an.', 'möchte gerne Spargel und Erdbeeren bestellen.', 'sucht händeringend Hilfskräfte für seinen Bauernhof.'], answer: 'c' },
      { n: 39, text: 'Kathrin soll', options: ['eine Auswahl an Bildern zusammenstellen.', 'eine Präsentation für eine Fortbildung vorbereiten.', 'wegen eines Unfalls zum Durchgangsarzt gehen.'], answer: 'a' },
      { n: 40, text: 'Peter', options: ['ärgert sich über die firmeninternen Abläufe.', 'bittet Gabi, neue Verträge aufzusetzen.', 'hat die Verträge der neuen Mitarbeiter verlegt.'], answer: 'a' },
    ],
    audio: [
      { label: 'Nachricht 36', lines: mono('Anton Müller', 'Guten Morgen, hier Anton Müller aus dem Einkauf. Frau Maywald, wir haben ein riesiges Problem. Einer unserer Zulieferer aus Asien musste Konkurs anmelden. Das ist eine Katastrophe, wenn wir nicht schnellstmöglich einen neuen Zulieferer finden. Sonst besteht die Gefahr, dass unser Produktionsprozess gestoppt werden muss. Ihre Marketingabteilung war doch neulich auf der Messe in Hongkong und hat Kontakt zu anderen Anbietern aufgenommen. Könnten Sie mir die Messeunterlagen zukommen lassen? Wäre es auch möglich, dass wir uns zu einem kurzen Erfahrungsaustausch treffen?') },
      { label: 'Nachricht 37', lines: mono('Felicitas', 'Hallo Jonas, hier Felicitas von der IT. Unsere Cloud ist ja nun schon seit einigen Wochen aktiv. Ich finde sie wirklich sehr praktisch und effizient und habe auch von Kollegen viel positives Feedback erhalten. Was für Erfahrungen hast du denn mit deinem Team gemacht? Darüber sollten wir uns dringend mal austauschen. Meiner Meinung nach hat sich das für den Innendienst schon bewährt. Wir sollten mal überlegen, ob wir das nicht auch für den Außendienst einführen wollen.') },
      { label: 'Nachricht 38', lines: mono('Bauer Schäffler', 'Hallo, hier Bauer Schäffler. Es geht um Folgendes. Ich habe im Internet nach Zeitarbeitsfirmen gesucht und gesehen, dass Sie auch Erntehelfer vermitteln. Wir brauchen dringend acht bis zehn Mann. Hauptsächlich geht es um die Spargelernte, später kommen auch noch die Erdbeeren dazu. Wir würden die Mitarbeiter also mindestens drei Monate beschäftigen, die Arbeitszeit beträgt täglich sechs bis acht Stunden, und die Mitarbeiter bekommen den Mindestlohn. Unterkünfte können wir aber leider nicht zur Verfügung stellen. Bitte rufen Sie mich zurück.') },
      { label: 'Nachricht 39', lines: mono('Sabine', 'Hallo Kathrin, hier ist Sabine. Ich wollte mich ja noch mal wegen der Fortbildung gestern melden. Wir sollen doch die neuen Infos in einer Broschüre zusammenfassen. Ich glaube, die Fortbildung war insgesamt für alle Kollegen ziemlich lehrreich. Viele haben sicher nicht gewusst, dass man nach einem Arbeitsunfall immer zu einem Durchgangsarzt gehen muss. Könntest du bitte schon mal passende Fotos raussuchen? Am besten rufst du mich heute Nachmittag mal zurück. Vielen Dank.') },
      { label: 'Nachricht 40', lines: mono('Peter', 'Hallo Gabi, hier ist Peter. Sag mal, ich warte ja noch immer auf die unterschriebenen Verträge der beiden neuen Mitarbeiter. Könntest du mal nachschauen, ob sie vielleicht in deinem Fach gelandet sind? So langsam wird es Zeit, da sie ja schon nächste Woche anfangen. Außerdem fehlen noch die Gesundheitszeugnisse. Es ist wieder typisch, dass sie irgendwo im Haus verloren gegangen sind. Wir müssen da endlich mal mehr Ordnung reinbringen. Das Ganze ist dermaßen lästig. Ich warte auf deinen Rückruf.') },
    ],
  },
  {
    label: 'Variante 3',
    instruction: I_TEIL4,
    questions: [
      { n: 36, text: 'Herr Schwarz', options: ['bestätigt den Eingang aller benötigten Dokumente.', 'braucht weitere Informationen über die Finanzplanung.', 'sagt die Finanzierung für die Neugründung zu.'], answer: 'b' },
      { n: 37, text: 'Der Betrag für die Reparatur', options: ['ist zur Hälfte von der Mitarbeiterin zu zahlen.', 'muss anteilig von der Firma übernommen werden.', 'wird von der Versicherung komplett getragen.'], answer: 'b' },
      { n: 38, text: 'Die Firma', options: ['möchte einen Teil der Mitarbeiter weniger beschäftigen.', 'muss Stellen wegen rückläufiger Aufträge abbauen.', 'will alleinerziehenden Arbeitslosen eine Chance geben.'], answer: 'a' },
      { n: 39, text: 'Die Mitarbeiterin', options: ['fragt nach einer neuen Schulung für die Mitarbeiter.', 'hat Probleme mit dem Gebrauch der Maschinen.', 'war vor der Anschaffung der Maschinen skeptisch.'], answer: 'a' },
      { n: 40, text: 'Thomas', options: ['bittet Sandra, ihm die Statistiken zu schicken.', 'hat zusammen mit Sandra die Präsentation kontrolliert.', 'wünscht, dass Sandra die Präsentation ergänzt.'], answer: 'c' },
    ],
    audio: [
      { label: 'Nachricht 36', lines: mono('Herr Schwarz', 'Guten Morgen, hier Schwarz vom Bankhaus Metzger. Herr Gorski, Sie haben uns ja nach unserem Gespräch den Businessplan für Ihre neue Geschäftsidee zukommen lassen. Ich wollte gerade die Finanzierung prüfen, und dabei ist mir aufgefallen, dass noch einige Unterlagen fehlen. Die Umsatzprognose haben Sie ja eingereicht, aber wir brauchen noch eine Auflistung der bestehenden Sicherheiten und Kostenvoranschläge für wichtige Investitionen. Bitte reichen Sie diese umgehend bis Ende der Woche nach. Vielen Dank.') },
      { label: 'Nachricht 37', lines: mono('Manuela', 'Hallo Rita, hier ist Manuela. Es geht noch mal um das Auto, in das du eine Beule gefahren hast. Wir haben jetzt den Kostenvoranschlag für die Reparatur vorliegen. Der Betrag liegt bei 4000 Euro. Und die Versicherung wird das nicht alles übernehmen, weil wir eine Eigenbeteiligung von 600 Euro haben. Laut der Betriebsvereinbarung können wir für die Hälfte aufkommen. Wie du weißt, musst du also nur 300 Euro selbst zahlen. Melde dich doch mal im Büro, damit wir besprechen können, wie das finanziell am besten zu machen ist.') },
      { label: 'Nachricht 38', lines: mono('Herr Schröder', 'Hallo, hier Schröder aus der Geschäftsleitung. Frau Michaelsen, ich rufe wegen der Ausarbeitung des Personalkonzepts an. Wir hatten ja bei dem Treffen vor zwei Tagen besprochen, dass wir aufgrund des massiven Auftragseinbruchs Kurzarbeit beantragen müssen. Einige Kollegen werden in dieser begrenzten Zeit dann nur noch 60 Prozent arbeiten. Hierfür müssen sowohl die Formalitäten mit der Agentur für Arbeit geklärt werden, als auch ein Konzept für die Härtefälle, also zum Beispiel für Alleinerziehende, erarbeitet werden. Denn wir wollen auf jeden Fall Entlassungen vermeiden. Können Sie das Konzept bitte bis übermorgen fertigstellen?') },
      { label: 'Nachricht 39', lines: mono('Martina', 'Hallo Jochen, hier ist Martina aus der Produktion. Seit einer Woche laufen nun die neuen Maschinen in Halle 7, die wir vor Kurzem angeschafft haben. Im Großen und Ganzen funktionieren sie, wie von mir erwartet, gut. Es gibt jedoch noch ein paar Kollegen, die nicht mit der Bedienung klarkommen. Beim Einführungsseminar konnten ja nicht alle dabei sein. Ist eigentlich noch ein weiteres Seminar für alle Mitarbeiter geplant? Aus meiner Sicht wäre das auch zur Auffrischung nicht schlecht. Ruf doch mal zurück.') },
      { label: 'Nachricht 40', lines: mono('Thomas', 'Hallo Sandra, hier ist Thomas. Morgen ist ja die Dienstbesprechung, auf der wir unsere PowerPoint-Präsentation vortragen sollen. Ich bin sie gerade noch mal durchgegangen und habe gemerkt, dass sich in die Statistiken ein paar Fehler eingeschlichen haben. So ein Mist. Ich glaube, wir haben nicht die aktuellste Version eingefügt. Wo finde ich die denn jetzt? Apropos: Hast du eigentlich an die Geschäftsprognosen gedacht, die du noch einfügen wolltest?') },
    ],
  },
];
