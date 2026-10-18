// telc Deutsch C1 Beruf — Übungstest 1 (2. Auflage 2021): Leseverstehen + Sprachbausteine.
// Тексти перенесено з офіційного Übungstest для особистої підготовки.
// У тексті {{n}} позначає пропуск n.

export const lesen1 = {
  label: 'Übungstest 1',
  instruction: 'Lesen Sie den folgenden Text. Welche der Lösungen a–h gehören in die Lücken 1–6? Es gibt jeweils nur eine richtige Lösung. Zwei Sätze können nicht zugeordnet werden. Lücke (0) ist ein Beispiel.',
  blocks: [
    {
      type: 'email',
      text: 'Liebe Teampartner,\n\nwir denken über Maßnahmen für eine grundlegende Neupositionierung von Speiseeis bei unseren Großkunden nach. Es geht darum, den Verzehr von Eis verstärkt über das ganze Jahr hindurch anzuregen. Dazu brauchen wir noch mehr Zahlen und Fakten. Ich übermittle euch hier einen kleinen Artikel als Ausgangspunkt.\n\nDanke!\nMartina Winter, Marketing-Assistentin',
    },
    { type: 'title', text: 'Eis – ein Genuss nicht nur im Sommer' },
    {
      type: 'p',
      text: 'Mit den steigenden Temperaturen steigt hierzulande auch die Lust auf Speiseeis. Ob im Becher, in der Waffel oder am Stiel, für viele Deutsche gehört laut Umfragen im Sommer Eis einfach dazu. Die Verkaufszahlen des vergangenen Jahres bestätigen diese Aussagen. Insgesamt ergeben die Zahlen einen Pro-Kopf-Jahresverbrauch von 8,3 Litern an industriell und handwerklich hergestelltem Speiseeis. Damit liegt er {{0}} dem Rekordverbrauch von vor drei Jahren, der bei 9,6 Litern lag, unterliegt jedoch vergleichbaren saisonalen Schwankungen.',
    },
    {
      type: 'chart',
      title: 'Eiskonsum in Deutschland',
      unit: 'Angaben in Liter',
      max: 14,
      data: [
        ['Januar', 6.1], ['Februar', 4.1], ['März', 6.3], ['April', 8.5],
        ['Mai', 8.9], ['Juni', 11], ['Juli', 12.5], ['August', 13],
        ['September', 7.1], ['Oktober', 6.6], ['November', 6.4], ['Dezember', 9.5],
      ],
    },
    {
      type: 'p',
      text: 'Während der Konsum im Januar noch relativ hoch war, weisen die Verkaufszahlen im Februar im Vergleich dazu {{1}} auf, wobei hier mit den extrem niedrigen Temperaturen auch der Tiefpunkt des Eiskonsums erreicht wurde. Im Folgemonat stieg der Konsum wieder und lag {{2}} dem von Januar. Ab April stiegen die Verkaufszahlen wie zu erwarten mit den Frühlingstemperaturen weiter an und lagen in der Nähe des durchschnittlichen Jahresverbrauchs. Überraschend ist, dass die Konsumkurve die ungewöhnlich hohen Temperaturen im Frühsommer nicht spiegelt und der Verkauf im Mai {{3}} war als im April. In den Sommermonaten lag der Konsum dann konstant über 10 Litern und erreichte im August den Jahreshöchstwert. Der September brachte {{4}} des Verbrauchs um nahezu 6 Liter. Das lag sicher daran, dass uns dieser Monat im vergangen Jahr außergewöhnlich tiefe Herbsttemperaturen bescherte. Im Oktober und November gingen die Verkaufszahlen noch einmal zurück, um dann im Dezember mit den Feiertagen wieder ordentlich zuzulegen. Hier hängt der Verzehr von Eis ebenso wenig wie im ungewöhnlich heißen Mai unmittelbar mit dem Wetter zusammen.',
    },
    {
      type: 'p',
      text: 'Ein Blick auf den Eisverbrauch in Europa zeigt, dass ausgerechnet Finnland mit seinen kurzen Sommern und kalten Wintern europäischer Spitzenreiter im Eiskonsum ist. Deutschland liegt mit 8,3 Litern {{5}}. Im südlich warmen Portugal ist der durchschnittliche Konsum pro Kopf sogar {{6}} als der Februarwert in Deutschland.',
    },
    {
      type: 'chart',
      title: 'Eiskonsum in Europa',
      unit: 'Angaben in Liter',
      max: 16,
      data: [['Portugal', 3.9], ['Italien', 7.8], ['Deutschland', 8.3], ['Dänemark', 9.9], ['Finnland', 14.5]],
    },
    {
      type: 'p',
      text: 'Woher auch immer die heiße Liebe der Finnen zu Eis herrühren mag, die Zahlen legen zumindest nahe, dass das Kauf- und Konsumverhalten der Konsumenten auch von anderen Faktoren als von heißen Sommertemperaturen abhängen muss. Marktanalysen in diese Richtung könnte der Handel nutzen, um auch in Deutschland Speiseeis vermehrt als Ganzjahresprodukt zu etablieren.',
    },
  ],
  example: { 0: 'deutlich unter' },
  options: {
    a: 'einen um mehr als 2 Liter geringeren Wert',
    b: 'einen kräftigen Rückgang',
    c: 'einen Rückgang von 2 Litern',
    d: 'im Mittelfeld',
    e: 'um 0,2 Liter über',
    f: 'noch um 0,2 Liter niedriger',
    g: 'nur unwesentlich höher',
    h: 'im Zentrum der Werte',
  },
  answers: { 1: 'c', 2: 'e', 3: 'g', 4: 'b', 5: 'd', 6: 'f' },
};

export const lesen2 = {
  label: 'Übungstest 1',
  instruction: 'Sie lesen Beiträge in einem Intranet-Forum. In welchem Beitrag a–e finden Sie die Antworten auf die Fragen 7–12? Es gibt zu jeder Frage nur eine richtige Lösung. Jeder Beitrag kann Antworten auf mehrere Fragen enthalten. Es kann auch Beiträge geben, die zu keiner Frage passen.',
  questionPrefix: 'In welchem Beitrag …',
  example: { n: 0, text: 'äußert der Autor bzw. die Autorin die Ansicht, dass gute Kontakte nicht erzwungen werden können?', answer: 'a' },
  questions: [
    { n: 7, text: 'berichtet der Autor bzw. die Autorin von unterschiedlichen Auffassungen der Führung und der Belegschaft?', answer: 'd' },
    { n: 8, text: 'beschreibt der Autor bzw. die Autorin, dass er/sie häufigere Gelegenheiten vermisst, Kollegen und Kolleginnen kennenzulernen?', answer: 'c' },
    { n: 9, text: 'erzählt der Autor bzw. die Autorin von früheren Erfahrungen zum Thema Betriebsausflug?', answer: 'b' },
    { n: 10, text: 'meint der Autor bzw. die Autorin, dass man Betriebsausflüge nicht überbewerten sollte?', answer: 'e' },
    { n: 11, text: 'weist der Autor bzw. die Autorin darauf hin, dass Betriebsausflüge für das Unternehmen nicht nur Vorteile haben?', answer: 'd' },
    { n: 12, text: 'drückt der Autor bzw. die Autorin seine/ihre Begeisterung für Erlebnisausflüge aus?', answer: 'b' },
  ],
  optionsTitle: 'Büroklammer, das Mitarbeiter-Forum',
  optionsIntro: 'Unsere Firma plant dieses Jahr zum ersten Mal einen Betriebsausflug. Was denkt ihr über das Thema?',
  options: {
    a: {
      author: 'schimmelreiter13, vor 2 Stunden',
      text: 'Also ich finde die Vorstellung eines Betriebsausflugs als einer komplett durchorganisierten Veranstaltung nicht besonders reizvoll. Was da alles angeboten wird: Hochseilgarten, Kletterkurse, Flussfahrten und was es sonst an Abenteuersport gibt. Anschließend vielleicht noch eine kleine Führung und Essen mit fester Sitzordnung. Nein, die Leute sollen sich doch entspannen, und dazu finde ich eine schlichte Wanderung in einer schönen Umgebung besser geeignet, auch wenn das vielleicht altmodisch klingt. Klar ist es wichtig, dass wir als Mitglieder einer Belegschaft uns auch untereinander näher kennenlernen. Aber kann man so etwas verordnen? Ich denke eher nicht; Kommunikation kann man nicht erzwingen, sie kommt ganz von selbst, wenn man sich einfach nur wohl fühlt. Genau darum sollte es doch gehen, einmal die durchstrukturierten Abläufe hinter sich zu lassen und sich frei und ungezwungen zu verhalten. Also bitte keine Zwangsbeglückung!',
    },
    b: {
      author: 'bienchen, vor 5 Stunden',
      text: 'Einen Betriebsausflug finde ich durchaus sinnvoll. Außerhalb der Arbeitsumgebung geben sich die Leute einfach ganz anders, viel lockerer. In der Firma, in der ich früher gearbeitet habe, wurden bei Betriebsausflügen immer kleine Wettbewerbe unter zufällig zusammengestellten Teams veranstaltet. Einmal haben wir eine Krimirätsel-Tour gemacht. Da mussten wir Spuren und Hinweise finden und deuten, um einen fiktiven Kriminalfall zu lösen. Es war wirklich lustig, und nach kurzer Zeit hatte man schon vergessen, dass man den einen oder anderen Teamkollegen vorher nicht kannte. Es gibt da wirklich ganz tolle Vorschläge für die Gestaltung, von sportlichen Wettbewerben bis zu richtigen Abenteuer-Wochenenden. Die sind auf Teambildung ausgerichtet und versprechen außerdem jede Menge Spaß und Spannung. Mir fällt da gleich einiges ein: Eine Floßfahrt finde ich zum Beispiel super, die kann man auch noch mit dem Bau des Floßes verbinden.',
    },
    c: {
      author: 'top66, vor 8 Stunden',
      text: 'Schon mal was von „Lunch Roulette“ gehört? Das ist eine Web-Anwendung, durch die man Mitarbeiter aus einem Unternehmen nach dem Zufallsprinzip zum Mittagstisch zusammenbringt. Also das finde ich mal eine tolle Idee! Die Leute werden zusammengewürfelt, stellen sich gegenseitig vor, plaudern, treffen vielleicht in den nächsten Tagen in anderer Zusammensetzung wieder aufeinander. Da entwickelt sich sicher manch guter Kontakt. Mir gefällt die Idee viel besser als ein Betriebsausflug, der nur einmal im Jahr stattfindet und bei dem man doch nur wieder mit Leuten zusammensitzt, mit denen man ohnehin während der Arbeit zu tun hat. „Lunch Roulette“ würde auch neue Kollegen und Kolleginnen gleich einbinden. Das hätte ich mir auch gewünscht, als ich neu in der Firma war. Ich bin ja am Anfang überhaupt nicht in die Kantine gegangen, weil es mir so unangenehm war, allein zu sitzen.',
    },
    d: {
      author: 'splitter, vor 1 Tag',
      text: 'Im Netz habe ich einige interessante Ergebnisse einer Online-Befragung zum Thema Betriebsausflug gefunden. Ich fand das ziemlich interessant. Es wurden da sowohl die Mitarbeiter als auch die Geschäftsleitung befragt. Die Umfrage zeigte, dass es da durchaus abweichende Einschätzungen gibt. Es stellte sich nämlich heraus, dass eine Mehrzahl der Arbeitgeber Betriebsausflüge befürworteten, obwohl damit Arbeitsausfall und Kosten verbunden sind. Als Vorteile nannten sie Stärkung von Teamgeist, Motivation, soziale Bindung und solche Dinge. Erstaunlich war für mich, dass viele der befragten Arbeitnehmer hingegen im Betriebsausflug einen reinen Pflichttermin sahen. Sie empfanden ihn als uninteressant bis nervig; bestenfalls waren sie der Meinung, dass er einfach dazugehört. Bin mal gespannt, wie da bei uns die Meinungen sind.',
    },
    e: {
      author: 'williX, vor 2 Tagen',
      text: 'Für mich ist ein Betriebsausflug einfach eine willkommene Abwechslung im Berufsalltag, und ich bin mir sicher, dass viele Kollegen und Kolleginnen das auch so sehen. Man sollte nicht versuchen, möglichst sinnvolle oder gar „erzieherische“ Veranstaltungen zu organisieren. Die finde ich ja meistens ein bisschen peinlich, und ehrlich gesagt glaube ich auch nicht, dass diese paar Stunden einen Einfluss auf unsere Arbeit, unsere Teamfähigkeit oder unsere Motivation haben werden. Einfach mal weg, sich entspannen, miteinander Spaß haben.',
    },
  },
};

export const lesen3 = {
  label: 'Übungstest 1',
  instruction: 'Lesen Sie den folgenden Text und die Aussagen 13–24. Welche der Lösungen (a, b oder c) passt am besten?',
  blocks: [
    {
      type: 'email',
      header: 'An: marketing@maismuehle.com · Kopie: entwicklung@maismuehle.com · Von: caspar.leder@maismuehle.com\nBetreff: Produktlinie „Regional“',
      text: 'Liebe Kolleginnen, liebe Kollegen,\n\nim Anhang schicke ich euch einen Artikel aus den „Neuen Wirtschaftsblättern“.\n\nBitte lest ihn doch mal durch und macht euch Gedanken, ob wir nicht in diesem Zusammenhang eine eigene Linie anbieten sollten. Ich denke da an unsere Maiswaffeln und Maisnudeln, die wir vielleicht als Regionalprodukte vermarkten könnten.\n\nAlles Weitere besprechen wir dann gemeinsam.\n\nBis dann, vielen Dank!\nCaspar',
    },
    { type: 'title', text: 'KONSUMENTEN MÖGEN ES REGIONAL', sub: 'Potenzial und Anforderungen' },
    { type: 'p', text: 'Wochen- und Bauernmärkte erfreuen sich seit langem großer Beliebtheit. Die Verbraucher schätzen das vielfältige Angebot an frischen Lebensmitteln. Die beliebtesten Erzeugnisse sind Eier, Gemüse, Obst, Fleisch und Milchprodukte. Für diese Produkte gelten Märkte als vertrauenswürdige Bezugsquelle. Konsumenten greifen jedoch auch im Supermarktregal immer öfter zu Waren, die aus der Region stammen. Konsumentenbefragungen in Deutschland, Österreich und der Schweiz ergaben jüngst, dass regionale Produkte bei den Konsumenten inzwischen beliebter sind als biologisch erzeugte Produkte ohne Herkunftsangabe. Dabei scheinen die Grenzen zwischen den beiden Produktgruppen fließend, denn auch bei regionalen Produkten sind die Erwartungen der Konsumenten an Herstellung, Verarbeitung und Tierhaltung ähnlich hoch wie bei Bioprodukten.' },
    { type: 'p', text: 'Was die Art der Waren betrifft, so messen die Konsumenten bei frischen Lebensmitteln der Herkunft aus der Region die größte Bedeutung zu. An erster Stelle liegen Obst und Gemüse – hier gaben 80 % der Befragten an, großen Wert auf die regionale Herkunft zu legen. Wichtig ist Regionalität auch bei Fleisch- und Wurstwaren und bei Milchprodukten. Doch auch beim Kauf von Getreideerzeugnissen achten Verbraucher vermehrt auf die Herkunft aus der Region.' },
    { type: 'p', text: 'Verbraucher nennen zwei wesentliche Gründe dafür, dass sie trotz des nicht unbedingt niedrigeren Preisniveaus lieber zu regionalen Produkten greifen: zum einen die Überzeugung, dass Regionalerzeugnisse gesünder und umweltschonender sind, zum anderen das Bestreben, die lokale Wirtschaft zu stärken. Anders als erwartet steht nicht der Tierschutz im Vordergrund.' },
    { type: 'p', text: 'Die Umfragen zeigen, dass immer mehr Konsumenten diesen Überlegungen folgen. Dieses Konsumverhalten stellt somit ein bedeutendes Vermarktungspotenzial für Produzenten und Lebensmittelhändler dar. Die Palette an Regionalprodukten, die derzeit im Lebensmittelhandel angeboten wird, ist noch relativ bescheiden. Um die wachsende Nachfrage bedienen zu können, muss das Angebot ausgeweitet werden. Bisher verbinden die Konsumenten den Begriff „Regionalprodukt“ vor allem mit frischen Lebensmitteln wie Obst und Gemüse, aber nichts spricht dagegen, das Angebot auf haltbare Erzeugnisse wie Getreide oder Dauerwurst auszuweiten.' },
    { type: 'p', text: 'Ein wesentlicher Faktor für die erfolgreiche Vermarktung neuer Produkte in diesem Bereich ist eine wohldurchdachte Preisgestaltung. Viele Konsumenten geben an, dass sie durchaus bereit sind, einen etwas höheren Preis für Produkte aus der Region zu zahlen. Andere weisen jedoch darauf hin, dass die hohen Preise sie vom Kauf regionaler Erzeugnisse abhalten. Es geht also darum, ein ausgewogenes Preis-Leistungs-Verhältnis zu erreichen.' },
    { type: 'p', text: 'Ist die Zahlungsbereitschaft generell gegeben, so fordern die Konsumenten im Gegenzug Klarheit über die Herkunft der Produkte. Von den Produzenten wird absolute Transparenz und eine entsprechende Kennzeichnung gefordert.' },
    { type: 'p', text: 'Dabei ist die Kennzeichnung von Regionalprodukten nicht zu verwechseln mit Herkunftsbezeichnungen. Der Begriff der Herkunftsbezeichnung spielt nur im EU-Recht eine Rolle. Auf Ebene der Europäischen Union gibt es zwei Kennzeichnungen für die Herkunft eines Produktes. Das ist zum einen die „Geschützte Ursprungsbezeichnung“, die angibt, dass ein Produkt in einem abgegrenzten geografischen Gebiet erzeugt, verarbeitet und hergestellt wurde, zum Beispiel Parma-Schinken oder Altenburger Ziegenkäse. Das bedeutet aber nicht, dass diese Produkte nur in dieser Region verkauft werden, im Gegenteil, sie werden zum Teil weltweit vermarktet. Eine zweite Herkunftsbezeichnung ist die „Geschützte Geografische Angabe“. Bei dieser Kennzeichnung reicht es, wenn mindestens einer der Produktionsschritte in der betreffenden Region stattfindet. Das ist zum Beispiel der Fall bei Lübecker Marzipan oder Schwarzwälder Schinken.' },
    { type: 'p', text: 'Diese beiden Kennzeichnungen sind jedoch nicht auf den deutschen Begriff „Regionalprodukte“ anzuwenden. In Deutschland wird es in absehbarer Zeit wohl keine verpflichtende Kennzeichnung für Regionalprodukte geben. Das Bundesministerium für Ernährung, Landwirtschaft und Verbraucherschutz arbeitet jedoch an Leitlinien für eine zuverlässige Kennzeichnung solcher Erzeugnisse. Nun sorgt ein neues Etikett auf freiwilliger Basis für mehr Transparenz. Auf dem Label, das von einem Trägerverein in Lizenz an Hersteller vergeben wird, erkennen die Verbraucher auf den ersten Blick, welche Zutaten eines Produktes aus der angegebenen Region stammen. Die Testphase für die Kennzeichnung zeigte, dass sowohl große Handelsketten als auch Konsumenten die Kennzeichnung gut annahmen.' },
    { type: 'p', text: 'Die Vergabe dieser Kennzeichnung in Deutschland ist an die Einhaltung von gewissen Mindestkriterien gebunden. Bei Monoprodukten, also bei Produkten, die aus einem einzigen Bestandteil bestehen, wird ein Rohstoffanteil von 100 % aus der Region gefordert, während bei Produkten mit mehreren Bestandteilen ein regionaler Gesamt-Rohstoffanteil von mehr als 50 % erforderlich ist. Der Hauptbestandteil eines zusammengesetzten Produktes muss zu 100 % aus der Region stammen. Der Begriff „Region“ wird in diesem Anforderungskatalog definiert als kleiner als Deutschland und größer als eine Kommune. Eine Region kann also ein Landkreis oder ein Bundesland sein, aber auch Länder- und Staatsgrenzen überschreiten. Auf dem Etikett wird eine Region sowohl für den Rohstoffbezug als auch für die Verarbeitung eindeutig und nachprüfbar definiert. Sie kann sogar auf einen bestimmten Kilometerradius um den Standort des Produzenten eingegrenzt werden. Dieser Ansatz soll eine einheitliche, wenngleich nicht verpflichtende Kennzeichnung von Regionalprodukten sicherstellen.' },
    { type: 'p', text: 'Wie eingangs erwähnt, verbinden die Konsumenten mit dem Begriff „Regionalprodukt“ auch die Vorstellung von gesünderen Lebensmitteln und den Gedanken an Umweltschutz. Im Gegensatz zu Bioprodukten gibt es jedoch keine eindeutigen Regeln für den Anbau oder die Herstellungsverfahren von Regionalprodukten. Regionalprodukte können, müssen aber nicht aus handwerklichen Betrieben stammen. Die Produzenten brauchen sich keiner besonderen Zertifizierung zu unterziehen. In der Praxis ergeben sich aus dem vermehrten Angebot von Regionalprodukten aber durchaus positive Effekte im Sinne der Nachhaltigkeit. In der Regel werden die Konsumenten eher zu solchen Produkten greifen, die tatsächlich aus der unmittelbaren Umgebung stammen. Durch dieses Konsumverhalten fallen lange Transportwege und damit verbundene Umweltbelastungen weg. Seit Bioprodukte aus Übersee angeboten werden, kann das ein gewichtiges Argument zugunsten der regionalen Herkunft sein. Wenn Produkte verstärkt in der Region vermarktet werden können, wird dies vermutlich auch einen günstigen Einfluss auf die Vielfalt der angebauten Pflanzenarten, also auf die Biodiversität, haben.' },
    { type: 'p', text: 'Viele Experten sehen im Marktsegment Regionalprodukte eine Chance, vor allem kleinere Betriebe zu stärken. Die Produktvermarktung in diesem Bereich bietet für Klein- und Mittelbetriebe eine Alternative zu bundesweiten Listungen bei den Handelsketten und zu den damit verbundenen großen Mindestliefermengen. Geringere Transportkosten und höhere Verkaufspreise verheißen durch den Wegfall des Zwischenhandels eine bessere Gewinnspanne. Für die Produzenten im Allgemeinen bedeutet eine Ausweitung dieses Bereichs – zusätzlich oder alternativ zu einem bundesweiten oder internationalen Vertrieb – auf jeden Fall einen vielversprechenden Absatzmarkt mit guten Aussichten auf Gewinne.' },
  ],
  questions: [
    { n: 13, text: 'Der Verfasser der E-Mail möchte', options: ['in Zukunft vielleicht Regionalprodukte anbieten.', 'künftig Maisnudeln herstellen lassen.', 'von seinen Kollegen einen Angebotsentwurf für Regionalprodukte.'], answer: 'a' },
    { n: 14, text: 'Wochen- und Bauernmärkte sind beliebt,', options: ['da Konsumenten an die bessere Qualität der Lebensmittel dort glauben.', 'obwohl man dort immer mehr Waren aus dem Supermarktregal sieht.', 'weil immer mehr Bioprodukte großer Handelsmarken angeboten werden.'], answer: 'a' },
    { n: 15, text: 'Regionale Herkunft', options: ['ist bei tierischen Produkten wichtiger als bei pflanzlichen.', 'ist besonders bei frischen Lebensmitteln gefragt.', 'spielt beim Kauf von Backwaren keine Rolle.'], answer: 'b' },
    { n: 16, text: 'Durch den Kauf von regionalen Produkten möchten Verbraucher', options: ['die Unternehmen der Umgebung unterstützen.', 'günstiger einkaufen als im Lebensmittelhandel.', 'Verbesserungen in der Tierhaltung bewirken.'], answer: 'a' },
    { n: 17, text: 'Das Angebot an Regionalprodukten', options: ['ist recht umfangreich.', 'hat im Handel ein eher geringes Vermarktungspotenzial.', 'kann insgesamt noch deutlich ausgebaut werden.'], answer: 'c' },
    { n: 18, text: 'Bei der Einführung neuer Regionalprodukte', options: ['achten die Verbraucher besonders auf Sonderangebote.', 'ist der richtige Preis besonders wichtig.', 'zahlen alle Konsumenten gerne mehr.'], answer: 'b' },
    { n: 19, text: 'Nach Meinung der Konsumenten müssen', options: ['Angaben über die Herkunft von Regionalprodukten nachvollziehbar sein.', 'Regionalprodukte europaweit einheitlich gekennzeichnet werden.', 'sämtliche Produktionsschritte von Regionalprodukten in einer Region stattfinden.'], answer: 'a' },
    { n: 20, text: 'In der Region erzeugte und weiterverarbeitete Lebensmittel erhalten im EU-Recht die Bezeichnung', options: ['Geschützte Geographische Angabe.', 'Geschützte Ursprungsbezeichnung.', 'Regionalprodukt.'], answer: 'b' },
    { n: 21, text: 'In Deutschland', options: ['können Produzenten ein Kennzeichnungsetikett für ihre Regionalprodukte nutzen.', 'lehnen die großen Handelsketten die einheitliche Kennzeichnung von Regionalprodukten ab.', 'schreibt das Bundesministerium die allgemeine Kennzeichnung von Regionalprodukten vor.'], answer: 'a' },
    { n: 22, text: 'Deutsche Regionalprodukte aus mehreren Bestandteilen', options: ['bestehen mindestens zur Hälfte aus Rohstoffen aus der Region.', 'müssen die Erzeuger jedes Bestandteils ausweisen.', 'werden genauso behandelt wie Monoprodukte.'], answer: 'a' },
    { n: 23, text: 'Regionalprodukte', options: ['brauchen keinen regionalen Herstellungsvorschriften zu entsprechen.', 'dürfen nicht industriell gefertigt werden.', 'werden hauptsächlich in zertifizierten Betrieben hergestellt.'], answer: 'a' },
    { n: 24, text: 'Das Marktsegment „Regionalprodukte“', options: ['bietet auch den Handelsketten höhere Gewinnspannen.', 'erfordert hohe Lieferkapazitäten seitens der Produzenten.', 'lässt einen Gewinnzuwachs für kleinere Unternehmen erwarten.'], answer: 'c' },
  ],
};

export const sprachbausteine = {
  label: 'Übungstest 1',
  instruction: 'Lesen Sie den folgenden Text. Welche Lösung (a, b, c oder d) ist jeweils richtig? Lücke (0) ist ein Beispiel.',
  blocks: [
    { type: 'title', text: 'Umstellung {{0}} ökologisch und fair produzierte Arbeitskleidung' },
    { type: 'p', text: 'Liebe Mitarbeiterinnen und Mitarbeiter,' },
    { type: 'p', text: 'wie euch {{25}} bekannt ist, bemüht sich unser Unternehmen bereits seit einigen Jahren um mehr Nachhaltigkeit nicht nur bei unseren Produktionsprozessen, {{26}} auch bei unseren Verwaltungsabläufen. Im vergangenen Jahr {{27}} das Augenmerk auf der gezielten Müllvermeidung und auf Mülltrennung. In diesem Bereich wurden Maßnahmen eingeführt, die vor allem {{28}} des bereitwilligen Einsatzes aller Mitarbeiterinnen und Mitarbeiter zu wesentlichen Verbesserungen geführt haben. Dafür {{29}} euch allen an dieser Stelle herzlich gedankt!' },
    { type: 'p', text: 'Nun möchten wir dieses Bemühen {{30}} mehr Nachhaltigkeit weiter ausbauen. In Zukunft möchten wir auch unsere Firmenkleidung im Sinne eines verantwortungsvollen {{31}} mit Ressourcen einkaufen. Die Kleidung mit unserem Logo {{32}} der Darstellung unserer Firma nach außen. Indem wir Kleidungsstücke kaufen und tragen, die mit umweltfreundlichen Methoden und {{33}} sozial verträglichen Bedingungen produziert wurden, {{34}} wir deutliche Zeichen: einerseits ein Zeichen der Solidarität mit den Textilarbeitern in aller Welt, die nach anerkannten sozialen Standards arbeiten und entlohnt werden {{35}}, und andererseits ein Zeichen unseres Interesses an Nachhaltigkeit in allen {{36}}.' },
    { type: 'p', text: '{{37}} es sich bei deklarierter Ökokleidung aus fairem Handel meist um qualitativ hochwertige Produkte handelt, liegen die Kosten höher als bei {{38}} Massenware. Für die Arbeitskleidung würde weiter wie bisher ein anteiliger Beitrag von eurem Gehalt {{39}}. Dabei ist selbstverständlich, dass der tatsächliche Preis etwas höher {{40}}. Die Kostenaufteilung zwischen Firma und Mitarbeitern bzw. Mitarbeiterinnen bliebe unverändert. Wie bisher werdet ihr die Möglichkeit {{41}}, diese hochwertigen Kleidungsstücke auch privat zu tragen. Sicher werdet ihr feststellen, dass diese Kleidungsstücke nicht nur der Forderung nach sozialer Verträglichkeit {{42}}, sondern auch schick aussehen.' },
    { type: 'p', text: 'Wir stellen in den {{43}} Unterlagen einige Firmen vor, die ihre gesamte Lieferkette und die Produktionsbedingungen transparent darlegen.' },
    { type: 'p', text: 'Im Intranet haben wir ein eigenes Forum {{44}} und warten gespannt auf eure Meinungen. Wir erwarten, {{45}} dieses Projekt gemeinsam von uns allen getragen {{46}}, und hoffen auf breite Zustimmung!' },
    { type: 'p', text: 'Der Betriebsrat' },
  ],
  example: { 0: 'auf' },
  gaps: {
    25: { options: ['allem', 'allen', 'jedem', 'jeder'], answer: 'b' },
    26: { options: ['aber', 'allerdings', 'sondern', 'sowie'], answer: 'c' },
    27: { options: ['hing', 'lag', 'saß', 'stand'], answer: 'b' },
    28: { options: ['aufgrund', 'statt', 'trotz', 'während'], answer: 'a' },
    29: { options: ['habe', 'möge', 'sei', 'wäre'], answer: 'c' },
    30: { options: ['auf', 'nach', 'um', 'über'], answer: 'c' },
    31: { options: ['Anfangs', 'Eingangs', 'Umgangs', 'Vorgangs'], answer: 'c' },
    32: { options: ['dient', 'gefällt', 'schadet', 'widerspricht'], answer: 'a' },
    33: { options: ['mit', 'nach', 'unter', 'von'], answer: 'c' },
    34: { options: ['liefern', 'platzieren', 'sehen', 'setzen'], answer: 'd' },
    35: { options: ['brauchen', 'dürfen', 'können', 'sollen'], answer: 'd' },
    36: { options: ['Ämtern', 'Bereichen', 'Fächern', 'Firmen'], answer: 'b' },
    37: { options: ['Bevor', 'Da', 'Obwohl', 'Seitdem'], answer: 'b' },
    38: { options: ['minderwertige', 'minderwertigen', 'minderwertiger', 'minderwertiges'], answer: 'c' },
    39: { options: ['abgewogen', 'abgezogen', 'aufgerechnet', 'zugeschlagen'], answer: 'b' },
    40: { options: ['auffällt', 'ausfällt', 'einfällt', 'verfällt'], answer: 'b' },
    41: { options: ['empfangen', 'entdecken', 'erwerben', 'haben'], answer: 'd' },
    42: { options: ['begegnen', 'entsprechen', 'nachgeben', 'zustimmen'], answer: 'b' },
    43: { options: ['abgehängten', 'beigefügten', 'zugefügten', 'zugegebenen'], answer: 'b' },
    44: { options: ['abgestellt', 'aufgerichtet', 'eingerichtet', 'hingelegt'], answer: 'c' },
    45: { options: ['als', 'dass', 'ob', 'wie'], answer: 'b' },
    46: { options: ['war', 'wäre', 'wird', 'wurde'], answer: 'c' },
  },
};
