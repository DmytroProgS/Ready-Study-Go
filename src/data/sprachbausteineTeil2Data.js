const sprachbausteineTeil2Variants = [
  {
    id: 1, title: 'Stornierung des Auftrages',
    text: `Sehr geehrte Damen und Herren,
nach dem Besuch Ihres Vertriebsmitarbeiters entschieden wir uns für __52__ von zwei Kaffeevollautomaten für unsere Krankenhauskantine.
Unsere Auftragserteilung erfolgte in KW 12. Wir __53__ eine Auftragsbestätigung mit Liefertermin in KW 16. __54__ der Lieferfrist haben wir Sie telefonisch mehrmals eindringlich darauf hingewiesen, dass wir die Maschinen dringend benötigen. __55__ wir uns in KW 18 und haben die Lieferung immer noch nicht erhalten. Wir räumen Ihnen letztmalig eine Lieferfrist bis Ablauf der KW 20 ein. Sollte die Ware bis dahin __56__ sein, machen wir von unserem Widerrufsrecht Gebrauch und stornieren unsere Bestellung. Wir bitten um Ihr Verständnis.
Bitte schicken Sie uns umgehend eine __57__.
Mit freundlichen Grüßen
Eva Al Hossan`,
    gaps: {
      52: { options: ['einen Auftrag', 'eine Bestellung', 'eine Anforderung'], answer: 'eine Bestellung' },
      53: { options: ['bekommen danach', 'bestellten dann', 'erhielten daraufhin'], answer: 'erhielten daraufhin' },
      54: { options: ['Beim Verlauf', 'Nach Ablauf', 'Vor dem Zulauf'], answer: 'Nach Ablauf' },
      55: { options: ['Mittlerweile befinden', 'Zurzeit haben', 'Zwischenzeitlich sind'], answer: 'Mittlerweile befinden' },
      56: { options: ['nicht eingetroffen', 'nicht erbracht', 'nicht erhalten'], answer: 'nicht eingetroffen' },
      57: { options: ['schriftliche Auftragsbestätigung', 'schriftliche Kündigung', 'schriftliche Stellungnahme'], answer: 'schriftliche Stellungnahme' }
    }
  },
  {
    id: 2, title: 'Verspätete Lieferung (neue Version)',
    text: `Sehr geehrte Damen und Herren,
nach dem Besuch Ihres Vertriebsmitarbeiters entschieden wir uns für __52__ von zwei Kaffeevollautomaten für unsere Krankenhauskantine.
Unsere Auftragserteilung erfolgte in KW 12. Wir __53__ eine Auftragsbestätigung mit Liefertermin in KW 16. Nach Ablauf der Lieferfrist haben wir Sie telefonisch mehrmals eindringlich __54__, dass wir die Maschinen dringend benötigen. __55__ wir uns in KW 18 und haben die Lieferung immer noch nicht erhalten. Wir räumen Ihnen letztmalig eine Lieferfrist bis Ablauf der KW 20 ein. Sollte die Ware bis dahin __56__ sein, machen wir von unserem Widerrufsrecht Gebrauch und stornieren unsere Bestellung. Wir bitten um Ihr Verständnis.
Bitte schicken Sie uns umgehend eine __57__.
Mit freundlichen Grüßen
Eva Al Hossan`,
    gaps: {
      52: { options: ['den Erwerb', 'den Verkauf', 'den Verleih'], answer: 'den Erwerb' },
      53: { options: ['bekommen danach', 'bestellten dann', 'erhielten daraufhin'], answer: 'erhielten daraufhin' },
      54: { options: ['darauf hingewiesen', 'davor gewarnt', 'diesbezüglich gefragt'], answer: 'darauf hingewiesen' },
      55: { options: ['Mittlerweile befinden', 'Zurzeit haben', 'Zwischenzeitlich sind'], answer: 'Mittlerweile befinden' },
      56: { options: ['nicht eingetroffen', 'nicht erbracht', 'nicht erhalten'], answer: 'nicht eingetroffen' },
      57: { options: ['schriftliche Auftragsbestätigung', 'schriftliche Kündigung', 'schriftliche Stellungnahme'], answer: 'schriftliche Stellungnahme' }
    }
  },
  {
    id: 3, title: 'Beschwerde (Bettcouch)',
    text: `Sehr geehrte Frau Janiashvilli,
wir danken Ihnen für Ihr Schreiben, mit dem Sie uns auf die Schäden an der Bettcouch aufmerksam machen, die Sie bei uns gekauft haben. Wir haben __52__ und teilen Ihre Ansicht. Offensichtlich ist bei unserer Qualitätskontrolle __53__ worden. __54__ hätte die Couch nicht ausgeliefert werden dürfen.
Heute erhalten Sie das Ersatzprodukt, das beschädigte Möbelstück wird dann kostenlos mitgenommen. Wir bitten Sie, die entstandenen __55__, und wünschen Ihnen viel Vergnügen mit Ihrem neuen Sitzmöbel. Ihre Reklamation haben wir an die Abteilung für Qualitätssicherung weitergegeben, um sicherzustellen, dass solche Fehler zukünftig vermieden werden. Als kleines Dankeschön für Ihr Verständnis finden Sie anbei einen Gutschein __56__ 50 Euro für Ihren nächsten Besuch in unserem Haus.
Wir würden uns freuen, Sie bald wieder in einer unserer Filialen __57__.
Mit freundlichen Grüßen
Ludmilla Dombrowski Leiterin Kundenservice`,
    gaps: {
      52: { options: ['Ihren Auftrag angenommen', 'Ihre Bestellung erhalten', 'Ihre Reklamation geprüft'], answer: 'Ihre Reklamation geprüft' },
      53: { options: ['das Problem unbemerkt', 'der Mangel übersehen', 'der Schaden behoben'], answer: 'der Mangel übersehen' },
      54: { options: ['Auf dieser Stelle', 'In diesem Zustand', 'Mit dieser Position'], answer: 'In diesem Zustand' },
      55: { options: ['Fehler zu beanstanden', 'Probleme zu berücksichtigen', 'Unannehmlichkeiten zu entschuldigen'], answer: 'Unannehmlichkeiten zu entschuldigen' },
      56: { options: ['für den Betrag von', 'in Höhe von', 'zum Preis von'], answer: 'in Höhe von' },
      57: { options: ['begrüßen zu dürfen', 'beobachten zu dürfen', 'besuchen zu dürfen'], answer: 'begrüßen zu dürfen' }
    }
  },
  {
    id: 4, title: 'Beschwerde (neue Version)',
    text: `Sehr geehrte Frau Janiashvilli,
vielen Dank für Ihr Schreiben, in dem Sie uns auf die Schäden an der bei uns bestellten Bettcouch hinweisen. Wir haben Ihre Reklamation anhand Ihrer mitgeschickten Fotos geprüft. Offensichtlich ist bei unserer Qualitätskontrolle __52__ worden. Die Couch hätte __53__ nicht ausgeliefert werden dürfen.
Selbstverständlich erhalten Sie ein Ersatzprodukt, das beschädigte Möbelstück wird dann kostenlos mitgenommen. Wir bitten Sie, die entstandenen __54__. Rufen Sie uns gerne an und teilen Sie uns mit, zu welchem Termin wir die neue __55__ sollen. Als Entschuldigung finden Sie anbei einen Gutschein __56__ 50 Euro.
Wir würden uns freuen, Sie bald wieder in einer unserer Filialen __57__.
Mit freundlichen Grüßen
Ludmilla Dombrowski`,
    gaps: {
      52: { options: ['das Problem verursacht', 'der Mangel übersehen', 'der Schaden behoben'], answer: 'der Mangel übersehen' },
      53: { options: ['an diesen Ort', 'in diesem Zustand', 'zu diesem Zeitpunkt'], answer: 'in diesem Zustand' },
      54: { options: ['Fehler zu beanstanden', 'Probleme zu berücksichtigen', 'Unannehmlichkeiten zu entschuldigen'], answer: 'Unannehmlichkeiten zu entschuldigen' },
      55: { options: ['Bestellung aufnehmen', 'Bettcouch abholen', 'Lieferung veranlassen'], answer: 'Lieferung veranlassen' },
      56: { options: ['für den Betrag von', 'in Höhe von', 'zum Preis von'], answer: 'in Höhe von' },
      57: { options: ['begrüßen zu dürfen', 'beobachten zu dürfen', 'besuchen zu dürfen'], answer: 'begrüßen zu dürfen' }
    }
  },
  {
    id: 5, title: 'Zahlungserinnerung',
    text: `Sehr geehrter Herr Batic,
In Oktober haben wir in Ihrem Firmengebäude an der Heizungsanlage Reparaturarbeiten ausgeführt. Da wir __52__ gehört haben, gehen wir davon aus, dass alles zu Ihrer Zufriedenheit war. Allerdings ist bislang für unsere Rechnung Nr. 2008/123 in Höhe von 2.746,- Euro leider keine __53__.
Für den Fall, dass die Rechnung bei Ihnen verloren gegangen ist, senden wir Ihnen anbei eine neue mit der Bitte um __54__.
Da der Betrag bereits am 31. Oktober __55__ war, können wir Ihnen den eingeräumten Skonto von 2% leider nicht mehr __56__. Wir bitten um Verständnis.
Sollten Sie die Rechnung __57__ bezahlt haben, betrachten Sie dieses Schreiben bitte als gegenstandslos.
Mit freundlichen Grüßen
Ilka Desgrane (Heizung und Sanitär Resch)`,
    gaps: {
      52: { options: ['nichts Gegenteiliges', 'nur Anderes', 'viel Negatives'], answer: 'nichts Gegenteiliges' },
      53: { options: ['Auszahlung veranlasst', 'Einzahlung gemacht', 'Zahlung eingegangen'], answer: 'Zahlung eingegangen' },
      54: { options: ['nachfolgenden Betrag', 'schnellstmögliche Überweisung', 'zeitnahe Korrektur'], answer: 'schnellstmögliche Überweisung' },
      55: { options: ['abgelaufen', 'fällig', 'verspätet'], answer: 'fällig' },
      56: { options: ['gewähren', 'leisten', 'überreichen'], answer: 'gewähren' },
      57: { options: ['infolgedessen', 'währenddessen', 'zwischenzeitlich'], answer: 'zwischenzeitlich' }
    }
  },
  {
    id: 6, title: 'Reinigungsservice',
    text: `Sehr geehrte Damen und Herren,
vielen Dank für Ihr Interesse an unseren Leistungen. Für den regelmäßigen Reinigungsservice Ihres Restaurants hatten wir Ihnen am 24.11. ein Angebot __52__ unterbreitet. Wie aus der Übersicht auf der zweiten Seite hervorgeht, ist eine Reinigung Ihrer Räumlichkeiten auch am frühen Sonntagmorgen für uns selbstverständlich ohne Probleme machbar. Für diesen Service berechnen wir im Rahmen unserer Rabattaktion keinen Wochenendzuschlag. Hatten Sie schon die Möglichkeit, __53__? Bitte denken Sie daran, dass die erwähnte Rabattaktion nur noch bis Ende des Jahres __54__. Sollten Sie dazu noch Fragen haben, zögern Sie bitte nicht, sich mit uns __55__. Unsere Mitarbeiter im Kundenservice __56__ Ihnen gerne jederzeit zur Verfügung. Wir freuen uns, Sie zukünftig __57__ zu können.
Mit freundlichen Grüßen
Helmuth Heidinger („Tiptop-Service")`,
    gaps: {
      52: { options: ['aufgrund Ihrer Erfahrung', 'gemäß Ihren Wünschen', 'laut Ihrer Zusage'], answer: 'gemäß Ihren Wünschen' },
      53: { options: ['das Angebot zu prüfen', 'die Chancen zu nutzen', 'die Gelegenheit zu bieten'], answer: 'das Angebot zu prüfen' },
      54: { options: ['gültig ist', 'anerkannt wird', 'einlösbar bleibt'], answer: 'gültig ist' },
      55: { options: ['in Kontakt zu treten', 'in Verbindung zu setzen', 'zur Verfügung zu stellen'], answer: 'in Verbindung zu setzen' },
      56: { options: ['sind', 'stehen', 'stellen'], answer: 'stehen' },
      57: { options: ['bei unseren Kunden besuchen', 'mit unseren Kunden begrüßen', 'zu unseren Kunden zählen'], answer: 'zu unseren Kunden zählen' }
    }
  },
  {
    id: 7, title: 'Auftragsbestätigung',
    text: `Sehr geehrte Frau Mackbock,
ich danke Ihnen für Ihre Bestellung und bestätige hiermit die Zustellung des PKW Bulldog zum Preis von 1078 Euro zzgl. MwSt. an die von __52__ Lieferadresse. Sollte Ihre Rechnungsadresse nicht mit der Lieferadresse übereinstimmen, teilen Sie uns dies bitte bis spätestens 07.07 schriftlich mit.
Die Rechnungszustellung erfolgt per Post. Bitte beachten Sie, dass wir bei Zahlung des Kaufpreises innerhalb von sieben Tagen nach Lieferung __53__. Ansonsten muss der Rechnungsbetrag bis 30 Tagen nach Wareneingang __54__.
Die detaillierten Konditionen __55__ unseren allgemeinen Geschäftsbedingungen auf der Rückseite dieser Auftragsbestätigung.
Bei Rückfragen steht Ihnen unser 24-Stunden-Service unter der Rufnummer 0175 545621 zur Verfügung. Bitte halten Sie hierzu Ihre __56__.
Wir versprechen Ihnen eine zuverlässige __57__ und sind sicher, dass Sie mit unserem Produkt zufrieden sein werden.
Mit freundlichen Grüßen
Christoph Sellert`,
    gaps: {
      52: { options: ['Ihnen angegebene', 'ihr angeordnete', 'mir angeführte'], answer: 'Ihnen angegebene' },
      53: { options: ['drei Prozent Ermäßigung bezahlen', 'drei Prozent Rabatt wünschen', 'drei Prozent Skonto gewähren'], answer: 'drei Prozent Skonto gewähren' },
      54: { options: ['beglichen werden', 'dokumentiert werden', 'verhandelt werden'], answer: 'beglichen werden' },
      55: { options: ['entnehmen Sie bitte', 'erfahren Sie direkt', 'finden Sie gerne'], answer: 'entnehmen Sie bitte' },
      56: { options: ['Auftragsnummer bereit', 'Kundennummer fest', 'Rechnungsnummer an'], answer: 'Auftragsnummer bereit' },
      57: { options: ['Ausführung Ihres Auftrags', 'Bearbeitung Ihrer Anfrage', 'Durchführung Ihrer Arbeit'], answer: 'Ausführung Ihres Auftrags' }
    }
  },
  {
    id: 8, title: 'Angebot',
    text: `Sehr geehrte Damen und Herren,
wir danken Ihnen für Ihre Anfrage vom 08.12.20xx und unterbreiten Ihnen __52__ acht Schreibtischcontainer MV 17 WW weiß zum Preis von je 156,99 Euro netto. Ab einem Auftragswert von 900,00 Euro liefern wir frei Haus, ansonsten fällt eine Lieferpauschale __53__ von 39,00 Euro an.
Gerne montieren wir die Möbel auch vor Ort. Die Kosten für den Aufbau __54__ nach dem Warenwert und betragen 20% des Nettopreises. Natürlich besteht auch __55__ die Ware in unserem Lager abzuholen und selbst aufzubauen.
__56__ ist 14 Tage bindend. Wir würden uns sehr freuen, __57__ zu erhalten.
Sollten Sie noch Fragen haben, stehen wir Ihnen gerne jederzeit zur Verfügung.
Mit freundlichen Grüßen
Lars Walter`,
    gaps: {
      52: { options: ['folgendes Angebot', 'folgendes Ergebnis', 'folgende Informationen'], answer: 'folgendes Angebot' },
      53: { options: ['in Absprache', 'in Bezug', 'in Höhe'], answer: 'in Höhe' },
      54: { options: ['belaufen sich', 'ergeben sich', 'richten sich'], answer: 'richten sich' },
      55: { options: ['die Absicht', 'die Option', 'die Verpflichtung'], answer: 'die Option' },
      56: { options: ['Diese Anfrage', 'Dieses Angebot', 'Diese Bestellung'], answer: 'Dieses Angebot' },
      57: { options: ['Ihren Auftrag', 'Ihre Wünsche', 'Ihr Verständnis'], answer: 'Ihren Auftrag' }
    }
  },
  {
    id: 9, title: 'Fehlerhafte Lieferung',
    text: `Sehr geehrter Herr Sonneberg,
vielen Dank für die schnelle Bearbeitung unserer Bestellung vom 29.10.
Für die Einrichtung unserer Pausenräume hatten wir zehn Sitzeckbänken in der Farbe Weiß bestellt. __52__ Sie zehn Tische und für jede Sitzeinheit drei Stühle in der gleichen Farbe liefern.
Leider entspricht die Lieferung nicht __53__. Zwei von den zehn Sitzeckbänken wurden in Braun geliefert. Von den 30 Stühlen haben ebenfalls fünf die falsche Farbe. Wir bitten Sie, die reklamierten Möbelstücke __54__.
Außerdem weisen zwei Tische Kratzer an der Oberfläche auf. Wir würden die Tische trotzdem behalten, wenn Sie dafür einen entsprechenden __55__. Könnten Sie uns hierfür __56__?
Wir bitten um __57__. Für Rückfragen stehen wir Ihnen jederzeit zur Verfügung.
Mit freundlichen Grüßen
Sonja Schmidt`,
    gaps: {
      52: { options: ['Dafür mussten', 'Daher konnten', 'Dazu sollten'], answer: 'Dazu sollten' },
      53: { options: ['unserem Angebot', 'unseren Vorschriften', 'unserer Bestellung'], answer: 'unserer Bestellung' },
      54: { options: ['gleich zurückzuschicken', 'schnellstmöglich auszutauschen', 'sofort zu reparieren'], answer: 'schnellstmöglich auszutauschen' },
      55: { options: ['Aufpreis anbieten', 'Preisnachlass gewähren', 'Rabatt fordern'], answer: 'Preisnachlass gewähren' },
      56: { options: ['ein Angebot unterbreiten', 'ein Gutachten erstellen', 'eine Empfehlung geben'], answer: 'ein Gutachten erstellen' },
      57: { options: ['baldige Bezahlung', 'gleichzeitige Stornierung', 'umgehende Antwort'], answer: 'umgehende Antwort' }
    }
  }
];

export default sprachbausteineTeil2Variants;
