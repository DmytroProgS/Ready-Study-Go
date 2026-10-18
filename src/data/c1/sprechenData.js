// telc Deutsch C1 Beruf — Mündlicher Ausdruck.
// Теми (topics.title/hint), аркуші A/B/C та теми дискусії — з Übungstest 1.
// Плани, запитання, аргументи й Redemittel — підготовчі матеріали.

export const examFlow = [
  { title: 'Vorbereitung (20 Min.)', text: 'Кожен отримує свій аркуш із 2 темами й обирає одну. Можна робити нотатки; словником користуватися не можна, з партнером говорити не можна.' },
  { title: 'Kurzes Kennenlernen', text: 'Екзаменатори представляються, коротка розмова для знайомства.', phrase: '„Willkommen in der Mündlichen Prüfung. Mein Name ist …, und dies ist meine Kollegin/mein Kollege …"' },
  { title: 'Teil 1A — Präsentation A (3–4 Min.)', text: 'A називає тему і адресата та презентує. Говорити до партнера.', phrase: '„Fangen Sie doch bitte an und sagen Sie uns auch, welches Thema Sie gewählt haben."' },
  { title: 'Teil 1B — B fragt A (2–3 Min.)', text: 'B ставить щонайменше 2 Anschlussfragen, A відповідає. Екзаменатори теж можуть запитати.', phrase: '„Vielen Dank, und nun stellen Sie doch bitte noch zwei oder drei Anschlussfragen."' },
  { title: 'Teil 1A — Präsentation B (3–4 Min.)', text: 'Те саме для B.', phrase: '„Danke, und nun bitten wir Sie, Herr/Frau …, um Ihre Präsentation."' },
  { title: 'Teil 1B — A fragt B (2–3 Min.)', text: 'A ставить щонайменше 2 запитання до презентації B.' },
  { title: 'Teil 2 — Diskussion (6 Min.)', text: 'Обоє отримують аркуш із запитанням і 4 підказками. Не обовʼязково проходити всі підказки — дискусія вільна. Якщо рівень замалий, екзаменатори втручаються з додатковими питаннями.', phrase: '„Sie müssen aber nicht alle Fragen, die dort stehen, besprechen …"' },
];

export const sheets = [
  { who: 'Teilnehmer/in A', topics: [1, 3] },
  { who: 'Teilnehmer/in B', topics: [5, 7] },
  { who: 'Teilnehmer/in C', topics: [9, 12] },
];

export const topics = [
  {
    n: 1,
    title: 'Beschreiben Sie Zweck und Eigenschaften eines Produktes Ihrer Wahl',
    hint: 'z. B. historische Entwicklung, Besonderheiten, Stärken, Schwächen …',
    plan: [
      'Produkt vorstellen: Was ist es, wer stellt es her, für wen ist es gedacht?',
      'Zweck: Welches Problem löst es? Wofür wird es eingesetzt?',
      'Historische Entwicklung: Wie ist es entstanden, was hat sich verändert?',
      'Besonderheiten & Stärken: Was unterscheidet es von Konkurrenzprodukten?',
      'Schwächen / Verbesserungspotenzial — dann Fazit und Empfehlung.',
    ],
    questions: ['Wie hoch ist der Preis im Vergleich zur Konkurrenz?', 'Welche Zielgruppe nutzt das Produkt am meisten?', 'Wie könnte man die Schwächen beheben?'],
    words: ['der Verwendungszweck', 'die Zielgruppe', 'sich bewähren', 'das Alleinstellungsmerkmal', 'die Weiterentwicklung', 'die Benutzerfreundlichkeit'],
  },
  {
    n: 2,
    title: 'Erläutern Sie Art und Nutzen einer Dienstleistung Ihrer Wahl',
    hint: 'z. B. Besonderheiten, Vorteile, mögliche Probleme …',
    plan: [
      'Dienstleistung kurz definieren (z. B. Carsharing, IT-Support, Lieferdienst).',
      'Wer bietet sie an, wer nimmt sie in Anspruch?',
      'Nutzen für Kunden: Zeit, Kosten, Bequemlichkeit.',
      'Besonderheiten im Vergleich zu Alternativen.',
      'Mögliche Probleme (Qualität, Datenschutz, Abhängigkeit) — Fazit.',
    ],
    questions: ['Wie wird die Qualität der Dienstleistung gesichert?', 'Was kostet sie ungefähr?', 'Gibt es diese Dienstleistung auch in Ihrem Herkunftsland?'],
    words: ['in Anspruch nehmen', 'der Mehrwert', 'die Kundenbindung', 'kostengünstig', 'die Zuverlässigkeit', 'der Anbieter'],
  },
  {
    n: 3,
    title: 'Beschreiben Sie Ihr derzeitiges Aufgabengebiet oder Ihre Wunschtätigkeit',
    hint: 'z. B. Aufgaben, Anforderungen und besondere Herausforderungen, …',
    plan: [
      'Position, Unternehmen/Branche, Abteilung (oder Wunschberuf und warum).',
      'Typischer Arbeitstag: wichtigste Aufgaben.',
      'Anforderungen: Qualifikationen, Soft Skills, Sprachen.',
      'Besondere Herausforderungen und wie ich damit umgehe.',
      'Was mir gefällt / berufliche Ziele — Schluss.',
    ],
    questions: ['Was war die größte Herausforderung bisher?', 'Wie sieht Ihr typischer Arbeitstag aus?', 'Wo sehen Sie sich in fünf Jahren?'],
    words: ['zuständig sein für', 'der Aufgabenbereich', 'die Verantwortung tragen', 'Termindruck', 'die Weiterbildung', 'belastbar sein'],
  },
  {
    n: 4,
    title: 'Berichten Sie über Ihre Berufs- oder Schulausbildung',
    hint: 'z. B. Stärken und Schwächen der Ausbildung, Vergleich mit Deutschland bzw. Herkunftsland, …',
    plan: [
      'Welche Ausbildung / welches Studium, wo und wie lange?',
      'Aufbau: Theorie und Praxis, Praktika, Abschluss.',
      'Stärken der Ausbildung.',
      'Schwächen: Was hat gefehlt?',
      'Vergleich mit dem deutschen System (duale Ausbildung!) — Fazit.',
    ],
    questions: ['Würden Sie diese Ausbildung noch einmal wählen?', 'Wie wird Ihr Abschluss in Deutschland anerkannt?', 'Was halten Sie vom dualen System?'],
    words: ['die duale Ausbildung', 'der Abschluss', 'die Anerkennung', 'praxisnah', 'der Lehrplan', 'das Pflichtpraktikum'],
  },
  {
    n: 5,
    title: 'Stellen Sie ein Unternehmen vor',
    hint: 'z. B. Tätigkeitsbereich, Marktstellung, Organisation, …',
    plan: [
      'Name, Branche, Gründung, Sitz, Größe (Mitarbeiter, Umsatz).',
      'Tätigkeitsbereich: Produkte/Dienstleistungen, Kunden.',
      'Marktstellung: Konkurrenten, Marktanteil, Image.',
      'Organisation: Abteilungen, Hierarchie, Unternehmenskultur.',
      'Aktuelle Herausforderungen / Zukunftspläne — Fazit.',
    ],
    questions: ['Wer sind die wichtigsten Konkurrenten?', 'Wie ist die Unternehmenskultur?', 'Wie reagiert das Unternehmen auf die Digitalisierung?'],
    words: ['der Marktführer', 'der Umsatz', 'die Niederlassung', 'flache Hierarchien', 'das Kerngeschäft', 'expandieren'],
  },
  {
    n: 6,
    title: 'Beschreiben Sie den Produktionsprozess für ein Produkt Ihrer Wahl',
    hint: 'z. B. Ausgangsmaterial, Produktionsschritte, kritische Punkte, …',
    plan: [
      'Produkt und Ziel der Präsentation nennen.',
      'Ausgangsmaterial / Rohstoffe und Beschaffung.',
      'Produktionsschritte in Reihenfolge (zuerst – danach – anschließend – zum Schluss), gern im Passiv.',
      'Kritische Punkte: Qualitätskontrolle, Hygiene, Sicherheit.',
      'Verpackung, Lagerung, Vertrieb — Fazit.',
    ],
    questions: ['Wie lange dauert die Herstellung?', 'Wo entstehen die meisten Fehler?', 'Wie nachhaltig ist der Prozess?'],
    words: ['der Rohstoff', 'verarbeiten', 'der Arbeitsschritt', 'die Qualitätskontrolle', 'die Fertigung', 'wird … erhitzt / abgefüllt'],
  },
  {
    n: 7,
    title: 'Beschreiben Sie die Abwicklung einer Dienstleistung Ihrer Wahl',
    hint: 'z. B. Anfrage, Kundenbesprechung, Angebot, Erbringung der Leistung, …',
    plan: [
      'Dienstleistung nennen (z. B. Webseite erstellen, Umzug, Steuerberatung).',
      'Anfrage des Kunden: Kanal, erste Informationen.',
      'Kundenbesprechung: Bedarf klären, Wünsche, Budget.',
      'Angebot: Leistungen, Preis, Fristen — Vertrag.',
      'Erbringung, Abnahme, Rechnung, Nachbetreuung — Fazit.',
    ],
    questions: ['Was passiert, wenn der Kunde unzufrieden ist?', 'Wie lange dauert die Abwicklung durchschnittlich?', 'Welcher Schritt ist am schwierigsten?'],
    words: ['die Anfrage', 'ein Angebot erstellen', 'den Auftrag erteilen', 'die Frist', 'die Abnahme', 'die Rechnung stellen'],
  },
  {
    n: 8,
    title: 'Beschreiben Sie die verschiedenen Aspekte einer erfolgreichen Produktvermarktung',
    hint: 'z. B. Produktpalette, Preispolitik, Vertriebswege, Kommunikation, …',
    plan: [
      'Einleitung: Marketing-Mix (die 4 P) als Struktur.',
      'Produktpalette: Sortiment, Qualität, Verpackung.',
      'Preispolitik: Hochpreis-, Niedrigpreis-, Rabattstrategie.',
      'Vertriebswege: Handel, Online-Shop, Direktvertrieb.',
      'Kommunikation: Werbung, Social Media, Messen — Beispiel und Fazit.',
    ],
    questions: ['Welcher Aspekt ist Ihrer Meinung nach am wichtigsten?', 'Haben Sie ein Beispiel für eine misslungene Vermarktung?', 'Welche Rolle spielen Influencer?'],
    words: ['die Zielgruppe ansprechen', 'die Preisgestaltung', 'der Vertriebsweg', 'die Markteinführung', 'die Werbekampagne', 'sich positionieren'],
  },
  {
    n: 9,
    title: 'Erläutern Sie die Bedeutung der Öffentlichkeitsarbeit für das Image eines Unternehmens',
    hint: 'z. B. Zielgruppen, Medien, Messen, Sponsoring, …',
    plan: [
      'Begriff: Was ist Öffentlichkeitsarbeit (PR), Unterschied zur Werbung.',
      'Zielgruppen: Kunden, Mitarbeiter, Investoren, Presse.',
      'Instrumente: Pressemitteilungen, Social Media, Messen, Sponsoring.',
      'Beispiel für gelungene PR / Krisenkommunikation.',
      'Risiken (Shitstorm, Glaubwürdigkeit) — Fazit.',
    ],
    questions: ['Wie misst man den Erfolg von PR?', 'Was tun bei negativen Schlagzeilen?', 'Ist Sponsoring nicht nur teure Werbung?'],
    words: ['das Image', 'die Pressemitteilung', 'das Ansehen', 'die Glaubwürdigkeit', 'die Krisenkommunikation', 'das Sponsoring'],
  },
  {
    n: 10,
    title: 'Erläutern Sie Erfolgsfaktoren für ein Unternehmen',
    hint: 'z. B. Kompetenz, Mitarbeiter, Führungsstil, Marktorientierung, …',
    plan: [
      'Einleitung: Was bedeutet „Erfolg" für ein Unternehmen?',
      'Kompetenz & Innovation: Know-how, Qualität.',
      'Mitarbeiter: Motivation, Qualifikation, Betriebsklima.',
      'Führungsstil: autoritär vs. kooperativ.',
      'Marktorientierung: Kundenbedürfnisse kennen — Beispiel und Fazit.',
    ],
    questions: ['Welcher Faktor ist am wichtigsten?', 'Kann ein Unternehmen mit schlechtem Führungsstil erfolgreich sein?', 'Haben Sie ein konkretes Beispiel?'],
    words: ['der Wettbewerbsvorteil', 'die Innovationskraft', 'der Führungsstil', 'die Mitarbeiterbindung', 'kundenorientiert', 'nachhaltig wirtschaften'],
  },
  {
    n: 11,
    title: 'Erläutern Sie, welche Faktoren für die Kundenzufriedenheit wichtig sind',
    hint: 'z. B. Qualität, Beschwerdemanagement, Service, …',
    plan: [
      'Warum Kundenzufriedenheit wichtig ist: Kundenbindung, Empfehlungen.',
      'Qualität von Produkt/Dienstleistung.',
      'Service: Erreichbarkeit, Freundlichkeit, Schnelligkeit.',
      'Beschwerdemanagement: Beschwerde als Chance (vgl. Hören Teil 3!).',
      'Preis-Leistungs-Verhältnis, Messung (Umfragen, Bewertungen) — Fazit.',
    ],
    questions: ['Wie misst man Kundenzufriedenheit?', 'Was haben Sie selbst als Kunde erlebt?', 'Lohnt sich teurer Service für kleine Firmen?'],
    words: ['die Kundenbindung', 'das Preis-Leistungs-Verhältnis', 'die Erreichbarkeit', 'auf Beschwerden eingehen', 'die Weiterempfehlung', 'die Erwartungen übertreffen'],
  },
  {
    n: 12,
    title: 'Beschreiben Sie eine Produktionsanlage Ihrer Wahl',
    hint: 'z. B. Komponenten, Bedienung, besondere Anforderungen an Mitarbeiter, mögliche technische Probleme, …',
    plan: [
      'Anlage nennen und Zweck (z. B. Abfüllanlage, CNC-Fräse, 3D-Drucker).',
      'Komponenten und deren Funktion.',
      'Bedienung: Steuerung, Ablauf, Automatisierungsgrad.',
      'Anforderungen an Mitarbeiter: Schulung, Sicherheit, Schichtarbeit.',
      'Technische Probleme und Wartung — Fazit.',
    ],
    questions: ['Wie oft muss die Anlage gewartet werden?', 'Was passiert bei einem Ausfall?', 'Wird die Anlage bald durch Roboter ersetzt?'],
    words: ['die Anlage bedienen', 'die Steuerung', 'die Wartung', 'der Ausfall', 'die Sicherheitsvorschriften', 'automatisiert'],
  },
];

export const redemittel = [
  {
    title: 'Präsentation: Einleitung',
    items: [
      'Ich möchte Ihnen heute … vorstellen. Meine Präsentation richtet sich an neue Kolleginnen und Kollegen.',
      'Ich habe mich für das Thema … entschieden, weil …',
      'Mein Vortrag besteht aus drei Teilen: Zuerst …, dann …, und zum Schluss …',
    ],
  },
  {
    title: 'Präsentation: Überleitungen',
    items: [
      'Damit komme ich zum zweiten Punkt.',
      'Nachdem ich … erläutert habe, möchte ich nun auf … eingehen.',
      'Ein weiterer wichtiger Aspekt ist …',
      'Lassen Sie mich das an einem Beispiel verdeutlichen: …',
    ],
  },
  {
    title: 'Präsentation: Schluss',
    items: [
      'Zusammenfassend lässt sich sagen, dass …',
      'Abschließend möchte ich betonen, dass …',
      'Vielen Dank für Ihre Aufmerksamkeit. Ich beantworte gern Ihre Fragen.',
    ],
  },
  {
    title: 'Anschlussfragen stellen (1B)',
    items: [
      'Sie haben erwähnt, dass … Könnten Sie das noch etwas genauer erklären?',
      'Habe ich Sie richtig verstanden, dass …?',
      'Mich würde noch interessieren, wie/warum …',
      'Wie sieht das im Vergleich zu Deutschland / Ihrem Herkunftsland aus?',
    ],
  },
  {
    title: 'Auf Fragen antworten / Zeit gewinnen',
    items: [
      'Das ist eine gute Frage. Lassen Sie mich kurz überlegen …',
      'Wenn ich Sie richtig verstehe, möchten Sie wissen, ob …',
      'Könnten Sie die Frage bitte noch einmal wiederholen?',
      'Darauf bin ich in meiner Präsentation nur kurz eingegangen, aber …',
    ],
  },
  {
    title: 'Diskussion: Meinung äußern',
    items: [
      'Meiner Ansicht nach …  /  Ich bin der festen Überzeugung, dass …',
      'Ich gehe davon aus, dass …',
      'Für mich spricht vor allem … dafür / dagegen.',
    ],
  },
  {
    title: 'Diskussion: zustimmen / widersprechen',
    items: [
      'Da stimme ich Ihnen voll und ganz zu.',
      'Da haben Sie zwar recht, aber man sollte auch bedenken, dass …',
      'Das sehe ich etwas anders, denn …',
      'Ich gebe zu bedenken, dass …',
    ],
  },
  {
    title: 'Diskussion: Partner einbeziehen / Kompromiss',
    items: [
      'Wie sehen Sie das?  /  Was ist Ihre Erfahrung damit?',
      'Darf ich kurz einhaken? …',
      'Vielleicht könnten wir uns darauf einigen, dass …',
      'Wir sind uns also einig, dass … — unterschiedlich sehen wir nur …',
    ],
  },
];

export const discussionTask = ['Geben Sie Beispiele.', 'Begründen Sie Ihre Position.', 'Vergleichen Sie mit Ihrem Herkunftsland bzw. Deutschland.', 'Gehen Sie auch auf die Argumente Ihres Partners bzw. Ihrer Partnerin ein.'];

export const discussions = [
  {
    title: 'Brauchen wir familienfreundliche Arbeitszeitmodelle?',
    pro: [
      'Eltern und pflegende Angehörige können Beruf und Familie vereinbaren.',
      'Höhere Motivation und Loyalität, weniger Fluktuation.',
      'Wettbewerbsvorteil im Fachkräftemangel — Arbeitgeberattraktivität.',
      'Weniger Stress → weniger Krankheitstage.',
    ],
    contra: [
      'Organisatorischer Aufwand: Schichtplanung, Erreichbarkeit, Meetings.',
      'Nicht in jeder Branche möglich (Produktion, Pflege, Einzelhandel).',
      'Kolleginnen ohne Kinder fühlen sich evtl. benachteiligt.',
      'Grenzen zwischen Arbeit und Freizeit verschwimmen (Homeoffice).',
    ],
    examples: 'Gleitzeit, Teilzeit, Jobsharing, Homeoffice, Betriebskita, Lebensarbeitszeitkonto, Elternzeit.',
  },
  {
    title: 'Soll sich ein Unternehmen um Gesundheitsprävention für Mitarbeiter kümmern?',
    pro: [
      'Gesunde Mitarbeiter sind produktiver; weniger Fehlzeiten sparen Kosten.',
      'Fürsorgepflicht des Arbeitgebers, z. B. bei Bildschirmarbeit.',
      'Stärkt Image und Mitarbeiterbindung.',
      'Psychische Belastungen (Burn-out) lassen sich früh erkennen.',
    ],
    contra: [
      'Gesundheit ist Privatsache — Gefahr der Bevormundung.',
      'Kosten für kleine Unternehmen hoch.',
      'Datenschutz bei Gesundheitsdaten.',
      'Angebote werden oft nur von ohnehin gesunden Mitarbeitern genutzt.',
    ],
    examples: 'Betriebliches Gesundheitsmanagement, ergonomische Arbeitsplätze, Betriebssport, Rückenkurse, Obstkorb, Jobrad, Vorsorgeuntersuchungen.',
  },
  {
    title: 'Was ist für ein gutes Betriebsklima wichtig?',
    pro: [
      'Offene Kommunikation und Wertschätzung durch Vorgesetzte.',
      'Faire Verteilung der Arbeit, klare Zuständigkeiten.',
      'Gemeinsame Aktivitäten (Betriebsausflug — vgl. Lesen Teil 2!).',
      'Konstruktiver Umgang mit Konflikten und Fehlern.',
    ],
    contra: [
      'Gegenposition: Ein gutes Klima lässt sich nicht „verordnen" (Zwangsbeglückung).',
      'Zu viel Harmonie kann Kritik und Innovation bremsen.',
      'Gehalt und Arbeitsbedingungen sind manchen wichtiger als Teamevents.',
      'Homeoffice erschwert persönliche Kontakte.',
    ],
    examples: 'Feedbackgespräche, Teamevents, Lunch Roulette, Mitarbeiterbefragungen, Betriebsrat, Mentoring für neue Kollegen.',
  },
];
