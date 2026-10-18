// DTB C1 (Deutsch-Test für den Beruf C1) — Schreiben: Stellungnahme an die Geschäftsführung.
// Теми й статистика дат — з файлу групи B2_C2_Deutsch («Statistik Stellungnahme», до 12.06.2026).
// Теми йдуть парами (1+2, 3+4 …): на іспиті дають одну пару, ви обираєте одну тему.
// Аргументи pro/contra та Alternative — підготовчі ідеї.

export const topics = [
  {
    n: 1,
    text: 'Die Geschäftsführung Ihrer Firma plant, die Kantine im Unternehmen zu schließen. Stattdessen sollen Essensmarken für die nächstgelegenen Imbisse verteilt werden.',
    pro: ['Kosten für Personal, Räume und Ausstattung der Kantine entfallen.', 'Mehr Abwechslung beim Essen, freie Wahl.', 'Mitarbeitende kommen in der Pause an die frische Luft.'],
    contra: ['Imbissessen ist oft ungesund und fettig.', 'Weg zum Imbiss verkürzt die Pause, bei Regen unangenehm.', 'Die Kantine ist ein Treffpunkt — Austausch zwischen Abteilungen geht verloren.'],
    alternative: 'Kantine verkleinern oder an einen Caterer verpachten; zusätzlich Essensmarken für gesunde Restaurants.',
  },
  {
    n: 2,
    text: 'Der Chef hat beschlossen, Überstunden zu verbieten. Nach acht Stunden werden die Mitarbeitenden automatisch von ihren Computern abgemeldet.',
    pro: ['Schutz vor Überlastung und Burn-out, bessere Work-Life-Balance.', 'Arbeitszeitgesetz wird sicher eingehalten.', 'Zwingt zu besserer Planung und Priorisierung.'],
    contra: ['Dringende Aufgaben oder Fristen können nicht abgeschlossen werden.', 'Kein Spielraum für Gleitzeit und flexible Tage.', 'Gefahr, dass Arbeit privat und unbezahlt erledigt wird.'],
    alternative: 'Überstunden nur mit Genehmigung erlauben und über ein Arbeitszeitkonto ausgleichen.',
  },
  {
    n: 3,
    text: 'Die Geschäftsführung Ihrer Firma plant, die private Handynutzung am Arbeitsplatz zu verbieten.',
    pro: ['Weniger Ablenkung, höhere Konzentration und Produktivität.', 'Mehr Datenschutz und Sicherheit (Fotos, Gespräche).', 'Professioneller Eindruck bei Kunden.'],
    contra: ['Mitarbeitende mit Kindern oder pflegebedürftigen Angehörigen müssen erreichbar sein.', 'Signal von Misstrauen, schlechteres Betriebsklima.', 'Kontrolle ist kaum durchführbar.'],
    alternative: 'Handys in der Pause und in Notfällen erlauben, in Meetings und im Kundenkontakt nicht.',
  },
  {
    n: 4,
    text: 'Die Geschäftsführung Ihrer Firma plant, allen Mitarbeitenden ein übertarifliches Gehalt zu zahlen. Damit sind die Überstunden abgegolten.',
    pro: ['Planbares, höheres Einkommen jeden Monat.', 'Weniger Verwaltungsaufwand bei der Zeiterfassung.', 'Attraktiv bei der Gewinnung von Fachkräften.'],
    contra: ['Wer viele Überstunden macht, verdient pro Stunde weniger.', 'Gefahr, dass Überstunden zur Normalität werden.', 'Ungerecht gegenüber Kollegen, die selten länger bleiben.'],
    alternative: 'Übertarifliches Gehalt nur bis zu einer festen Zahl von Überstunden; darüber hinaus Freizeitausgleich.',
  },
  {
    n: 5,
    text: 'Die Geschäftsführung Ihrer Firma plant, keine Mitarbeitenden mehr fest einzustellen, sondern in Notfällen Leiharbeiter über eine Vermittlungsfirma einzusetzen.',
    pro: ['Hohe Flexibilität bei Auftragsschwankungen.', 'Geringeres finanzielles Risiko für die Firma.', 'Schnelle Besetzung bei Personalausfällen.'],
    contra: ['Ständige Einarbeitung kostet Zeit; Qualität sinkt.', 'Wissen geht verloren, keine Identifikation mit der Firma.', 'Belastung und Unsicherheit für die Stammbelegschaft.'],
    alternative: 'Feste Kernbelegschaft behalten und Leiharbeit nur zeitlich begrenzt einsetzen; gute Leiharbeiter übernehmen.',
  },
  {
    n: 6,
    text: 'Die Geschäftsführung Ihrer Firma plant, aus jeder Abteilung zwei Mitarbeitende für sechs Monate nach Italien zu schicken, wo eine neue Niederlassung eröffnet wurde.',
    pro: ['Wertvolle Auslandserfahrung, gut für die Karriere.', 'Know-how wird direkt in die neue Niederlassung übertragen.', 'Sprach- und Kulturkenntnisse wachsen.'],
    contra: ['Schwierig für Mitarbeitende mit Familie.', 'Die Abteilungen in Deutschland sind ein halbes Jahr unterbesetzt.', 'Kosten für Unterkunft und Reisen.'],
    alternative: 'Freiwillige suchen, kürzere Einsätze (z. B. 2–3 Monate im Wechsel) und finanzielle Anreize anbieten.',
  },
  {
    n: 7,
    text: 'Die Geschäftsführung Ihrer Firma plant, dass Mitarbeitende bereits am ersten Krankheitstag ein ärztliches Attest vorlegen müssen (statt nach drei Tagen).',
    pro: ['Weniger „Blaumachen" an einzelnen Tagen.', 'Klare, einheitliche Regel für alle.', 'Bessere Planung der Vertretung.'],
    contra: ['Volle Wartezimmer, Ansteckungsgefahr — wer krank ist, sollte im Bett bleiben.', 'Zeichen von Misstrauen gegenüber der Belegschaft.', 'Belastung für Ärzte und Krankenkassen.'],
    alternative: 'Attest erst ab dem dritten Tag; nur bei auffällig häufigen Kurzerkrankungen früher. Telefonische Krankschreibung zulassen.',
  },
  {
    n: 8,
    text: 'Die Geschäftsführung Ihrer Firma plant, den Mitarbeitenden weniger Gehalt zu zahlen; dafür sollen sie eine dauerhafte Mitgliedschaft in einem Fitnessstudio bekommen.',
    pro: ['Fördert Gesundheit und senkt langfristig Krankheitstage.', 'Gemeinsamer Sport stärkt den Teamgeist.', 'Steuerlich interessant für die Firma.'],
    contra: ['Nicht alle wollen ins Fitnessstudio — ein Teil verliert nur Geld.', 'Weniger Gehalt trifft Familien und Geringverdiener hart.', 'Gesundheit ist Privatsache.'],
    alternative: 'Fitnessstudio als freiwilligen Zuschuss zusätzlich zum Gehalt anbieten oder ein Budget für Sport nach Wahl.',
  },
  {
    n: 9,
    text: 'Die Geschäftsführung Ihrer Firma plant, jeden Monat den besten Mitarbeiter bzw. die beste Mitarbeiterin auszuwählen und ihm oder ihr einen Bonus zu zahlen.',
    pro: ['Motivation und Anerkennung für gute Leistung.', 'Leistung wird sichtbar.', 'Gesunder Wettbewerb kann die Produktivität steigern.'],
    contra: ['Konkurrenz statt Teamarbeit, Neid im Team.', 'Bewertungskriterien sind oft unklar oder ungerecht.', 'Stille, zuverlässige Kollegen werden übersehen.'],
    alternative: 'Teamprämien statt Einzelprämien und transparente Kriterien; Auswahl durch das Team.',
  },
  {
    n: 10,
    text: 'Die Geschäftsführung Ihrer Firma plant, einen Standort in Spanien zu eröffnen; daher soll es einen verpflichtenden Spanischkurs für alle Mitarbeitenden geben.',
    pro: ['Bessere Kommunikation mit den spanischen Kollegen und Kunden.', 'Kostenlose Weiterbildung für alle.', 'Stärkt die internationale Ausrichtung.'],
    contra: ['Viele Mitarbeitende haben nie Kontakt zu Spanien — Zeitverschwendung.', 'Pflicht wirkt demotivierend.', 'Arbeitszeit und Kosten für die Kurse.'],
    alternative: 'Kurs nur für Abteilungen mit Spanienbezug verpflichtend, für alle anderen freiwillig; Englisch als gemeinsame Sprache.',
  },
  {
    n: 11,
    text: 'Die Geschäftsführung Ihrer Firma plant, allen Mitarbeitenden, die jährlich mindestens eine Weiterbildung absolvieren, einen Bonus zu zahlen.',
    pro: ['Fördert lebenslanges Lernen und Qualifikation.', 'Die Firma profitiert vom neuen Wissen.', 'Motivierend und fair: Jeder kann den Bonus erreichen.'],
    contra: ['Gefahr, dass nur „irgendeine" Weiterbildung für den Bonus gemacht wird.', 'Mitarbeitende mit Familie haben weniger Zeit dafür.', 'Kosten für Bonus und Kurse.'],
    alternative: 'Bonus nur für Weiterbildungen, die zur Tätigkeit passen, und Kurse während der Arbeitszeit ermöglichen.',
  },
  {
    n: 12,
    text: 'Die Geschäftsführung Ihrer Firma plant, am Arbeitsplatz einen Ruheraum einzurichten, der höchstens 25 Minuten genutzt werden darf.',
    pro: ['Kurze Erholung steigert Konzentration (Powernap).', 'Zeichen der Wertschätzung, gut für die Gesundheit.', 'Zeitlimit verhindert Missbrauch.'],
    contra: ['Ein Raum reicht nicht für alle — Wartezeiten, Streit.', 'Kontrolle der 25 Minuten ist aufwendig.', 'Manche Kollegen könnten sich beobachtet fühlen.'],
    alternative: 'Buchungssystem für den Raum; flexible Nutzung in der Pause statt starrer Regel.',
  },
  {
    n: 13,
    text: 'Die Geschäftsführung Ihrer Firma plant, ihren Standort in die Vororte zu verlegen. Deshalb müssen die meisten Mitarbeitenden die doppelte Strecke pendeln.',
    pro: ['Niedrigere Mieten, mehr Platz für Expansion.', 'Bessere Erreichbarkeit für Lkw und Lieferanten.', 'Ruhigere Umgebung, ggf. Parkplätze.'],
    contra: ['Längere Fahrzeiten und höhere Kosten für die Belegschaft.', 'Weniger Freizeit, Stress, Kündigungen möglich.', 'Schlechtere Anbindung an öffentliche Verkehrsmittel.'],
    alternative: 'Jobticket oder Fahrtkostenzuschuss, Werksbus, Homeoffice-Tage zum Ausgleich.',
  },
  {
    n: 14,
    text: 'Die Geschäftsführung Ihrer Firma plant, allen ehrenamtlich und freiwillig engagierten Mitarbeitenden zwei zusätzliche Urlaubstage zu geben.',
    pro: ['Anerkennung für gesellschaftliches Engagement.', 'Gutes Image der Firma in der Region.', 'Ehrenamt fördert Soft Skills, die auch im Beruf nützen.'],
    contra: ['Ungerecht gegenüber Kollegen, die Kinder oder Angehörige pflegen.', 'Schwer zu kontrollieren, was als Ehrenamt zählt.', 'Mehr Ausfallzeiten für die Teams.'],
    alternative: 'Klare Kriterien und Nachweis; ähnliche Anerkennung auch für pflegende Angehörige.',
  },
  {
    n: 15,
    text: 'Die Geschäftsführung plant, während der Weihnachtsferien mit allen Mitarbeitenden und ihren Familien in eine europäische Stadt zu reisen (statt einer Weihnachtsfeier).',
    pro: ['Einmaliges Erlebnis, stärkt den Zusammenhalt.', 'Familien lernen die Firma kennen.', 'Zeichen großer Wertschätzung.'],
    contra: ['Sehr hohe Kosten.', 'Viele möchten die Feiertage privat verbringen.', 'Organisation für große Gruppen mit Kindern ist schwierig.'],
    alternative: 'Weihnachtsfeier vor Ort beibehalten und die Reise als freiwilliges Angebot außerhalb der Feiertage.',
  },
  {
    n: 16,
    text: 'Die Geschäftsleitung plant, dass alle Mitarbeitenden digitale Schrittzähler tragen sollen.',
    pro: ['Motiviert zu mehr Bewegung, gut für die Gesundheit.', 'Teamwettbewerbe können Spaß machen.', 'Teil eines betrieblichen Gesundheitsmanagements.'],
    contra: ['Datenschutz: Gesundheitsdaten gehören nicht dem Arbeitgeber.', 'Gefühl der Überwachung.', 'Benachteiligung von Menschen mit Krankheit oder Behinderung.'],
    alternative: 'Nur freiwillig und anonym; Daten bleiben bei den Mitarbeitenden.',
  },
  {
    n: 17,
    text: 'Die Geschäftsführung Ihrer Firma plant, für gekündigte Stellen keine neuen Mitarbeitenden einzustellen, sondern die Aufgaben unter den übrigen Angestellten aufzuteilen.',
    pro: ['Personalkosten werden gespart.', 'Erfahrene Kollegen kennen die Abläufe bereits.', 'Chance auf neue Aufgaben und Weiterentwicklung.'],
    contra: ['Überlastung, Überstunden, mehr Krankheitstage.', 'Qualität sinkt, Fehler nehmen zu.', 'Weitere Kündigungen — ein Teufelskreis.'],
    alternative: 'Arbeitsprozesse prüfen und digitalisieren, nur wirklich doppelte Aufgaben streichen, sonst nachbesetzen.',
  },
  {
    n: 18,
    text: 'Die Geschäftsführung Ihrer Firma plant, die Frauenquote im Unternehmen zu erhöhen.',
    pro: ['Mehr Chancengleichheit und Vielfalt.', 'Gemischte Teams treffen oft bessere Entscheidungen.', 'Gutes Image, attraktiver Arbeitgeber.'],
    contra: ['Gefahr, dass nicht die Qualifikation entscheidet.', 'Frauen könnten als „Quotenfrauen" abgestempelt werden.', 'In manchen Branchen gibt es kaum Bewerberinnen.'],
    alternative: 'Quote mit Förderprogrammen, Mentoring und flexiblen Arbeitszeiten verbinden.',
  },
  {
    n: 19,
    text: 'Die Firma will den Standort in eine 400 km entfernte Großstadt verlegen und möchte, dass die Mitarbeitenden mit umziehen. Die Firma bietet allen eine erhebliche Umzugspauschale.',
    pro: ['Großstadt: besserer Zugang zu Kunden und Fachkräften.', 'Umzugspauschale mildert die Kosten.', 'Neue berufliche und private Möglichkeiten.'],
    contra: ['Familie, Partner, Schule der Kinder — Umzug ist für viele unmöglich.', 'Höhere Mieten und Lebenshaltungskosten.', 'Verlust erfahrener Mitarbeitender, die nicht mitkommen.'],
    alternative: 'Homeoffice- oder Hybridlösungen für die, die nicht umziehen können; Übergangsfrist und Hilfe bei der Wohnungssuche.',
  },
  {
    n: 20,
    text: 'Die Geschäftsführung plant, den Parkplatz nur für Kundinnen und Kunden sowie Führungskräfte zu reservieren. Alle anderen Mitarbeitenden müssen auf öffentlichen Parkplätzen parken.',
    pro: ['Kunden finden immer einen Parkplatz — guter Service.', 'Motiviert zu Fahrrad und öffentlichen Verkehrsmitteln.', 'Ordnung auf dem Firmengelände.'],
    contra: ['Ungerecht, Zwei-Klassen-Gesellschaft im Betrieb.', 'Öffentliche Parkplätze sind knapp und teuer.', 'Zeitverlust und Ärger am Morgen.'],
    alternative: 'Einige Plätze für Kunden reservieren, den Rest nach Bedarf verteilen (Schichtarbeit, Eltern); Jobticket anbieten.',
  },
];

// Дати іспитів і пара тем, що випала (перший номер пари). Дані з файлу групи.
export const seedHistory = [
  ['2026-06-12', 7], ['2026-05-30', 15], ['2026-05-15', 13], ['2026-04-30', 9], ['2026-04-17', 1],
  ['2026-03-21', 17], ['2026-03-20', 5], ['2026-02-20', 19], ['2026-02-07', 13], ['2026-01-23', 3],
  ['2026-01-10', 1], ['2025-12-22', 11], ['2025-12-13', 15], ['2025-12-01', 5], ['2025-11-28', 3],
  ['2025-11-15', 19], ['2025-10-23', 5], ['2025-10-18', 17], ['2025-09-29', 5], ['2025-09-20', 7],
  ['2025-09-05', 9], ['2025-08-23', 1], ['2025-08-08', 15], ['2025-07-26', 13], ['2025-07-11', 19],
  ['2025-06-28', 11], ['2025-06-13', 3], ['2025-05-31', 17], ['2025-05-16', 5], ['2025-05-03', 1],
  ['2025-04-14', 9], ['2025-04-05', 7], ['2025-03-21', 3], ['2025-03-08', 15], ['2025-02-21', 13],
];

export const structure = [
  ['Einleitung', 'Anlass nennen: Die Geschäftsführung plant … Ich möchte dazu Stellung nehmen.'],
  ['Vorteile', '2 Argumente mit Begründung oder Beispiel.'],
  ['Nachteile', 'Ebenso ausführlich — 2 Argumente mit Begründung.'],
  ['Eigene Meinung', 'Klar Position beziehen und begründen.'],
  ['Alternative / Vorschlag', 'Ein konstruktiver Kompromiss wirkt sehr gut.'],
  ['Schluss', 'Kurz zusammenfassen, Gesprächsbereitschaft zeigen.'],
];

export const redemittel = [
  ['Einleitung', ['Wie ich erfahren habe, plant die Geschäftsführung, …', 'Zu diesem Vorhaben möchte ich gern Stellung nehmen.']],
  ['Vorteile', ['Für diesen Plan spricht zunächst, dass …', 'Ein weiterer Vorteil besteht darin, dass …', 'Positiv ist außerdem zu bewerten, dass …']],
  ['Nachteile', ['Andererseits darf man nicht außer Acht lassen, dass …', 'Problematisch finde ich jedoch, dass …', 'Hinzu kommt, dass …']],
  ['Eigene Meinung', ['Meiner Ansicht nach überwiegen die Vor-/Nachteile, weil …', 'Ich persönlich halte diesen Plan für (nicht) sinnvoll, da …']],
  ['Vorschlag', ['Ich würde daher vorschlagen, …', 'Eine mögliche Lösung wäre, …', 'Sinnvoller wäre es meines Erachtens, …']],
  ['Schluss', ['Zusammenfassend lässt sich sagen, dass …', 'Ich hoffe, dass meine Überlegungen bei der Entscheidung berücksichtigt werden.']],
];
