const horenTeil4Variants = [
  {
    id: 1, label: '1', title: 'Variante 1',
    audioUrl: 'https://t.me/B2_C2_Deutsch/65534/195147',
    sections: [
      {
        title: 'Nummer 36 — Andrea',
        audioUrl: null,
        dialogue: 'Hallo, hier ist Andrea Faber. Wir sind doch am Freitag zum Arbeitsfrühstück verabredet. Leider kann ich unseren Termin nicht einhalten. Wir haben ein spontanes Treffen mit unserem Vertreter aus Wien. Kannst du auch nächste Woche Montag? Das ist der 25. Ich halte dir mal den Vormittag frei. Sei doch so nett und gib mir bitte heute noch Bescheid, ob dir der Termin passt. Es ist wichtig, dass wir uns zeitnah zusammensetzen. Danke.',
        questions: [
          {
            number: 36, type: 'abc',
            statement: 'Andrea',
            options: ['a) kann den geplanten Termin nicht einhalten.', 'b) braucht den Termin verschieben.', 'c) möchte den Termin vereinbaren/anmelden.'],
            answer: 'a',
            alts: [
              {
                statement: 'Andrea',
                options: ['a) wird mit dem Vertreter frühstücken.', 'b) sagt den Termin ab.', 'c) wird sich am Montag melden.'],
                answer: 'a'
              }
            ]
          }
        ]
      },
      {
        title: 'Nummer 37 — Frau Plasberg',
        audioUrl: null,
        dialogue: 'Hallo, hier ist Zeuner, der neuen Assistent der Geschäftsleitung. Sie wollten am Dienstag die neue Werbekampagne mit Frau Plasberg besprechen, aber sie ist leider wegen einer Steuerprüfung hier im Haus verhindert. Die restliche Woche ist sie auf Dienstreise. Ginge bei Ihnen auch der Dienstag nächster Woche zur selben Zeit. Bevor unser Kunde am Freitag kommender Woche zur Präsentation kommt, müssen noch wichtige Dinge geklärt werden. Bitte bestätigen Sie den Termin. Vielen Dank.',
        questions: [
          {
            number: 37, type: 'abc',
            statement: 'Frau Plasberg',
            options: ['a) möchte Steuerprüfung auswerten.', 'b) möchte die neue Werbekampagne diskutieren.', 'c) möchte über die Dienstreise sprechen.'],
            answer: 'b'
          }
        ]
      },
      {
        title: 'Nummer 38 — Daniela Schöller',
        audioUrl: null,
        dialogue: 'Hallo, Daniela Schöller von der Firma Neuhaus. Die für heute angekündigte Ware ist jetzt versandfertig. Ich habe Ihnen ja schon gesagt, dass das Transporthub sehr zerbrechlich ist und nicht gestattet werden darf. Wie Sie wissen, ist die Lieferung sehr eilig und der Kunde hat den Eilzuschlag gezahlt. Es ist also unumgänglich, dass die Kisten heute noch abgeholt werden. Bitte bestätigen Sie mir kurz, dass das heute noch klappt. Bis später.',
        questions: [
          {
            number: 38, type: 'abc',
            statement: 'Daniela Schöller',
            options: ['a) bittet um heutige Abholung der Ware.', 'b) braucht die Lieferung dringend.', 'c) hat den Eilzuschlag bezahlt.'],
            answer: 'a',
            alts: [
              {
                statement: 'Die Ware',
                options: ['a) wird heute versendet.', 'b) ist sehr zerbrechlich.', 'c) wird vom Kunden abgeholt.'],
                answer: 'a'
              }
            ]
          }
        ]
      },
      {
        title: 'Nummer 39 — Lattermann',
        audioUrl: null,
        dialogue: 'Hallo, Guido Lattermann von der Firma Top Elektronik. Ich muss Ihnen leider mitteilen, dass die von Ihnen bestellte Maschine heute wegen des Sturms in Hamburg nicht verladen werden konnte. Die Lieferung verzögert sich wahrscheinlich um eine Woche. So wie es aussieht, kommt das Schiff am 16. Mai bei Ihnen in Dresden an. Es wäre nett, wenn Sie uns dann den Empfang der Ware bestätigen können. Ein kurzer Anruf reicht. Ich wünsche Ihnen einen schönen Tag und bitte entschuldigen Sie die Unannehmlichkeiten.',
        questions: [
          {
            number: 39, type: 'abc',
            statement: 'Herr Lattermann',
            options: ['a) bekommt eine Maschine aus Hamburg.', 'b) bestätigt den Empfang der Maschine.', 'c) liefert Maschine nach Dresden.'],
            answer: 'c'
          }
        ]
      },
      {
        title: 'Nummer 40 — Bernhard',
        audioUrl: null,
        dialogue: 'Bernhard, Geschäftsleitung. Ich habe mir Ihren Entwurf für unsere neue Homepage angesehen. Im Großen und Ganzen gefällt er mir recht gut, aber ich habe noch ein paar Änderungen. Wir sollten mehr hervorheben, was uns von anderen Firmen unterscheidet. Z.B. die zehnjährige Garantie, die wir auf unsere Produkte geben. Das ist aber noch nicht alles. Bitte melden Sie sich bei meiner Sekretärin Frau Zimmer für einen Termin, bei dem ich Ihnen die Punkte kurz erläutern kann.',
        questions: [
          {
            number: 40, type: 'abc',
            statement: 'Frau Bernhard',
            options: ['a) hat Änderungswünsche für die Homepage.', 'b) meldet sich bei ihrer Sekretärin.', 'c) möchte die Garantie verlängern.'],
            answer: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 2, label: '2', title: 'Variante 2',
    audioUrl: 'https://t.me/B2_C2_Deutsch/65534/195150',
    sections: [
      {
        title: 'Nummer 36 — Robert Krüger',
        audioUrl: null,
        dialogue: 'Hi, Robert Krüger hier. Ich habe die Organisation der diesjährigen Weihnachtsfeier ja von dir übernommen. Ich weiß aber noch nicht, welches Restaurant ich reservieren soll. Ich bin ja noch ziemlich neu in der Stadt. Ihr wart letztes Jahr doch beim Griechen, oder? Dieses Jahr sollte es etwas anderes sein. Vielleicht eins, wo es eine größere Auswahl an Fleischlosen Gerichten gibt. Deine Meinung hier wäre mir wichtig.',
        questions: [
          {
            number: 36, type: 'abc',
            statement: 'Robert Krüger',
            options: ['a) hat letztes Jahr die Weihnachtsfeier organisiert.', 'b) möchte bei einem Griechen feiern.', 'c) denkt an die Interessen der Vegetarier.'],
            answer: 'c'
          }
        ]
      },
      {
        title: 'Nummer 37 — Katrin',
        audioUrl: null,
        dialogue: 'Hallo Bettina. Katrin hier. Hast du schon gehört, dass Heli Joni nächste Woche einen runden Geburtstag feiert? Wir, ihr Team, brauchen noch ein Geschenk für sie, haben aber keine Idee. Du kennst sie ja privat. Hast du vielleicht einen Vorschlag? Normalerweise gibt jeder 5 €. Es darf also etwa 70 € kosten. Wenn es etwas mehr kostet, ist es aber auch nicht schlimm. Kannst du mich später zurückrufen? Das wäre super.',
        questions: [
          {
            number: 37, type: 'abc',
            statement: 'Katrin',
            options: ['a) will Bettina mit einem Geschenk überraschen.', 'b) sucht eine Anregung für ein Geschenk.', 'c) möchte ein kleines Geschenk für fünf Euro kaufen.'],
            answer: 'b'
          }
        ]
      },
      {
        title: 'Nummer 38 — Stefan Körner',
        audioUrl: null,
        dialogue: 'Hallo, Stefan Körner hier. Ich wollte Sie nur daran erinnern, dass die Brandmelder in den Büros demnächst ausgetauscht werden müssen. Bei der letzten Wartung hat uns der Fachmann von der Müller Brandschutz GmbH darauf aufmerksam gemacht, dass wir sie nur noch bis Ende des Jahres in Betrieb haben dürfen. Können Sie bitte bei der Firma anrufen und fragen, wann jemand bei uns vorbeikommen kann? Bei Fragen rufen Sie mich einfach zurück.',
        questions: [
          {
            number: 38, type: 'abc',
            statement: 'Stefan Körner bittet seinen Kollegen,',
            options: ['a) die Wartung zu beauftragen.', 'b) einen Termin zu vereinbaren.', 'c) die Brandmelder zu warten.'],
            answer: 'b'
          }
        ]
      },
      {
        title: 'Nummer 39 — Barbara',
        audioUrl: null,
        dialogue: 'Hallo, Barbara hier. Ich rufe noch mal an wegen des Besuchs der Kollegen aus unserer französischen Niederlassung. So viel ich weiß, ist am Montagmorgen eine Betriebsbesichtigung geplant und am Nachmittag gibt es dann noch ein großes Begegnungsfest. Ich brauche bitte noch die genaue Zahl der Anmeldungen, damit ich das Essen und die Getränke bestellen kann. Du hast den Raum ja schon gebucht, richtig? Melde dich doch einfach, wenn du wieder am Platz bist.',
        questions: [
          {
            number: 39, type: 'abc',
            statement: 'Barbara',
            options: ['a) organisiert allein das Begegnungsfest.', 'b) wird den französischen Kollegen die Firma zeigen.', 'c) kümmert sich um die Verpflegung der Gäste.'],
            answer: 'c'
          }
        ]
      },
      {
        title: 'Nummer 40 — Michaell Brüger',
        audioUrl: null,
        dialogue: 'Hallo, Michaell Brüger von der Brüger Hausverwaltung. Wie ich Ihnen gestern schon auf den Anrufbeantworter gesprochen habe, ist bei uns im Haus in der Ludwigsstraße 8 seit vorgestern die Heizung defekt. Das Problem muss umgehend behoben werden, da in den nächsten Tagen -5 Grad erwartet werden. Ich hätte eigentlich gestern mit einem zeitnahen Rückruf gerechnet. Das hat in den letzten Jahren ja immer geklappt. Rufen Sie mich bitte in den nächsten Stunden zurück.',
        questions: [
          {
            number: 40, type: 'abc',
            statement: 'Michaell Brüger möchte, dass',
            options: ['a) die Heizung repariert wird.', 'b) er in den nächsten Tagen zurückgerufen wird.', 'c) die Heizkörper ausgetauscht werden.'],
            answer: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 3, label: '3', title: 'Variante 3',
    audioUrl: 'https://t.me/B2_C2_Deutsch/65534/124141',
    sections: [
      {
        title: 'Nummer 36 — Waldemar',
        audioUrl: null,
        dialogue: 'Hallo, Waldemar Hahrmann, Öffentlichkeitsarbeit. Die Lehrerin von meiner Tochter hat angerufen. Die Kleine hat Fieber und muss abgeholt werden. Heute sollte ich doch gegen 10:30 Uhr die potenziellen Partner unserer Firma durch den Betrieb führen. Könntest du das übernehmen? Wäre super. Ist auch ganz unproblematisch. Treffpunkt ist der Eingangsbereich des Verwaltungsgebäudes. Dann geht es sofort über zu der neuen Produktionshalle und danach noch in die Lagerhalle. Nach einem kurzen Rundgang durch die Büros auf der ersten Etage schließen wir mit Kaffee und Kuchen in der Kantine ab.',
        questions: [
          {
            number: 36, type: 'abc',
            statement: 'Waldemar',
            options: ['a) trifft die Partner an der Produktionshalle.', 'b) geht es nicht so gut.', 'c) muss seine Tochter abholen.'],
            answer: 'c'
          }
        ]
      },
      {
        title: 'Nummer 37 — Jana',
        audioUrl: null,
        dialogue: 'Hallo, hier ist Jana Wartner von Hessen-Grönland. Danke für den Kostenvoranschlag, den Sie mir gestern noch gemailt haben. Wir möchten einen Probeauftrag für zehn Laserdrucker Modell X3 aufheben. Bei unserem letzten Gespräch haben wir 5% Einführungsrabatt vereinbart. Die Zahlung erfolgt bar bei der Lieferung. Den Auftrag bekommen Sie natürlich noch ganz offiziell da näher. Aber wir brauchen die Drucker wirklich dringend für unser neues Großraumbüro. Können Sie mir garantieren, dass die Lieferung rechtzeitig eintreffen wird? Bitte um gute Antwort.',
        questions: [
          {
            number: 37, type: 'abc',
            statement: 'Jana',
            options: ['a) hat den Auftrag bereits gemailt.', 'b) mochte einen höheren Rabatt vereinbaren.', 'c) benötigt die Drucker für das Großraumbüro.'],
            answer: 'c'
          }
        ]
      },
      {
        title: 'Nummer 38 — Erisia',
        audioUrl: null,
        dialogue: 'Hallo, Erisia hier. Frau Schmidt musste dringend kurz weg und wird erst gegen Mittag wieder hier sein. Deshalb ist Jana alleine am Empfang. Jetzt ist der Zug aus Russland auch noch früher gekommen als geplant. Jana kann doch keine Russen speisen. Wir bräuchten deine Hilfe zum Dolmetschen. Ich habe die Gatten in den Konferenzraum gebracht und ihnen den Kaffee und Snacks angeboten. Könntest du dich um sie kümmern, bis Frau Schmidt zurück ist? Das wäre super. Danke.',
        questions: [
          {
            number: 38, type: 'abc',
            statement: 'Erisia',
            options: ['a) ist allein am Empfang.', 'b) schickt Frau Schmidt in den Konferenzraum.', 'c) braucht einen Dolmetscher.'],
            answer: 'c'
          }
        ]
      },
      {
        title: 'Nummer 39 — Trixi',
        audioUrl: null,
        dialogue: 'Hi, Trixi nochmal. Es geht schon wieder um den Messeauftritt in Köln nächste Woche. Ich habe nun endlich eine preisgünstige Spedition gefunden, die unsere Ausstellungsstücke von Leipzig nach Köln und zurück transportiert. Kontenmappe, Broschüren und Werbeposter haben wir alles schon verpackt. Ich kann sie mitnehmen, weil ich selbst vor Ort sein werde. Nur eins noch. Für den Auf- und Abbau des Standes brauche ich zwei handkräftige Kollegen zur Unterstützung. Bitte heute noch melden, wer mithelfen könnte, sodass ich die Hotelzimmer für die Woche verwirklich buchen kann. Danke.',
        questions: [
          {
            number: 39, type: 'abc',
            statement: 'Trixi',
            options: ['a) fährt mit zur Messe nach Köln.', 'b) hat die Hotelzimmer schon gebucht.', 'c) findet keine kostengünstige Spedition.'],
            answer: 'a'
          }
        ]
      },
      {
        title: 'Nummer 40 — Julius',
        audioUrl: null,
        dialogue: 'Hallo, Julius Lehmann, Personalabteilung. Wegen der Fortbildung bei Händelbau nächste Woche. Kannst du bitte den Teilnehmern noch einmal deutlich sagen, dass dort im ganzen Haus Rauchverbot besteht? Der Raucherbereich befindet sich frei. Die Kollegen sollen außerdem zu ihrer eigenen Sicherheit stets auf den grün markierten Bereichen bleiben, wegen der Gefahr von Gabelstaplern angefangen zu werden. Das sind Sicherheitsvorschriften, die wir unbedingt einhalten müssen. Sonst würden wir in diesem Unternehmen keine Fortbildung mehr machen. Das wäre sehr schade, denn bisher gab es nur gute Rückmeldungen zu den Veranstaltungen. Danke.',
        questions: [
          {
            number: 40, type: 'abc',
            statement: 'Julius',
            options: ['a) darf keine Fortbildung mehr buchen.', 'b) erinnert an die Sicherheitsregeln zur Fortbildung.', 'c) hat negative Reaktionen zu Fortbildungen bekommen.'],
            answer: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 4, label: '4', title: 'Variante 4',
    audioUrl: 'https://t.me/B2_C2_Deutsch/65534/158141',
    sections: [
      {
        title: 'Nummer 36 — Rita',
        audioUrl: null,
        dialogue: 'Hallo, Rita hier. Du hast mir doch erzählt, dass dein Sohn einen Laptop sucht. Nächste Woche bekommt unsere Abteilung neue Computer und neue Drucker. Deshalb werden die alten Geräte günstig an interessierte Mitarbeiter abgegeben. Das heißt, wer noch für zu Hause Computer, Laptops oder Drucker braucht, kann sich bis Freitag in eine Liste am schwarzen Brett eintragen. Der Verkauf findet dann ab Montag ab 14:30 Uhr im Großraumbüro 2 statt. Man kann die Geräte dann direkt mitnehmen. Der Erlös wird übrigens für die Finanzierung unseres Sommerfests verwendet.',
        questions: [
          {
            number: 36, type: 'abc',
            statement: 'Rita',
            options: ['a) informiert über den Verkauf der Firmencomputer.', 'b) möchte ihren privaten Computer günstig verkaufen.', 'c) sorgt sich um die Finanzierung des Sommerfests.'],
            answer: 'a'
          }
        ]
      },
      {
        title: 'Nummer 37 — Konstantinos Pagonas',
        audioUrl: null,
        dialogue: 'Guten Tag, Konstantinos Pagonis von der Firma Pizzos. Ich wollte mich nochmal wegen Ihres Besuchs in der nächsten Woche melden. Sie brauchen sich nicht um den Transfer vom Flughafen zur Firma kümmern. Meine Kollegin wird Sie in der Ausgangshalle A am Infopoint empfangen und mit Ihnen zusammen zu unserem Werk in Thessaloniki fahren. Dort warte ich auf Sie und wir machen gemeinsam eine Werksbesichtigung. Ich freue mich schon, Sie persönlich kennenzulernen.',
        questions: [
          {
            number: 37, type: 'abc',
            statement: 'Konstantinos Pagonas ruft an, um',
            options: ['a) einen Firmenbesuch anzukündigen.', 'b) nach dem Weg zur Firma zu fragen.', 'c) organisatorische Informationen mitzuteilen.'],
            answer: 'c'
          }
        ]
      },
      {
        title: 'Nummer 38 — Lara Hartmann',
        audioUrl: null,
        dialogue: 'Lara Hartmann aus der Personalabteilung. Ich habe Sie bisher leider nicht persönlich erreicht, deshalb spreche ich jetzt auf die Mailbox. Unser Steuerbüro hat gestern angerufen. Dort benötigt man dringend die Belege für Ihre Dienstreise nach Berlin im Mai des vergangenen Jahres. Können Sie mir diese bitte im Original am Montag im Büro vorbeibringen? Vielen Dank und entschuldigen Sie die kurze Frist. Für Rückfragen erreichen Sie mich heute noch bis 17 Uhr.',
        questions: [
          {
            number: 38, type: 'abc',
            statement: 'Lara Hartmann',
            options: ['a) benötigt Dokumente für das Steuerbüro.', 'b) bringt der Kollegin die Belege vorbei.', 'c) hat gestern das Steuerbüro angerufen.'],
            answer: 'a'
          }
        ]
      },
      {
        title: 'Nummer 39 — Thomas Barthel',
        audioUrl: null,
        dialogue: 'Thomas Barthel, IT-Abteilung. Sie hatten angerufen, weil Sie Ihren PC nicht mehr runterfahren können. Entschuldigen Sie, dass ich mich jetzt erst melde, aber seit der Systemumstellung haben wir im ganzen Haus viel zu tun, weil viele Kollegen Fragen dazu haben. Aber Ihr Problem, denke ich, kann ich per Fernwartung lösen. Dazu bräuchte ich Sie aber am Telefon. Bitte rufen Sie mich zurück. Ich bin heute bis 18 Uhr im Büro.',
        questions: [
          {
            number: 39, type: 'abc',
            statement: 'Thomas Barthel',
            options: ['a) hat Schwierigkeiten mit seinem Computer.', 'b) kann das aufgetretene Problem wohl schnell lösen.', 'c) soll eine Systemumstellung im Haus vornehmen.'],
            answer: 'b'
          }
        ]
      },
      {
        title: 'Nummer 40 — Klara Günther',
        audioUrl: null,
        dialogue: 'Clara Günther, Personalabteilung hier. Die Geschäftsführung hatte doch beschlossen, dass die Urlaubsplanung für das kommende Jahr zentral gemacht werden soll. Daher wurden alle Mitarbeiterinnen und Mitarbeiter aufgefordert, ihre Urlaubswünsche bis zum 30. November im Intranet einzutragen. Heute ist schon der 29. und ich habe gesehen, dass Sie noch nichts angegeben haben. Deshalb dachte ich, ich sage noch mal kurz Bescheid. Für den Fall, dass Sie es vergessen haben. Schönen Tag noch.',
        questions: [
          {
            number: 40, type: 'abc',
            statement: 'Klara Günther',
            options: ['a) erinnert an die neue Urlaubsplanung.', 'b) legt die Urlaubsplanung zentral fest.', 'c) möchte am 29. November Urlaub nehmen.'],
            answer: 'a'
          }
        ]
      }
    ]
  },
  {
    id: 5, label: '5', title: 'Variante 5',
    audioUrl: 'https://t.me/B2_C2_Deutsch/65534/136295',
    sections: [
      {
        title: 'Nummer 36 — Jana / Katia',
        audioUrl: null,
        dialogue: 'Hallo, Jana / Katia Müller hier. Es geht nochmal um unseren Workshop am 8. Mai. Könntest du bitte dafür sorgen, dass im Raum K7 ein funktionstüchtiger Beamer steht? Und Internet brauchen wir natürlich auch. Ich würde vor der Veranstaltung alle Tops auf einen Flipchart schreiben. Wir müssen dann nur sicherstellen, dass der auch im Raum bleibt. Nicht, dass wir wieder kurz vor Veranstaltungsbeginn danach suchen müssen. Und Moderationskarten und Marker bringe ich übrigens mit.',
        questions: [
          {
            number: 36, type: 'abc',
            statement: 'Jana / Katia',
            options: ['a) benötigt einen Internetzugang im Raum.', 'b) besorgt einen Beamer für die Veranstaltung.', 'c) stellt den Flipchart in den Veranstaltungsraum.'],
            answer: 'a'
          }
        ]
      },
      {
        title: 'Nummer 37 — Felix',
        audioUrl: null,
        dialogue: 'Hi, Felix hier. Ich habe gute Nachrichten. Unsere Kollegen vom Kundenservice bekommen jetzt ihre Schulung und wir sollen das vorbereiten. Um Zeit und Kosten zu sparen, soll diese Fortbildung online stattfinden. Und ich habe schon mehrere Anbieter für die Schulungssoftware angefragt. Ich hoffe, die Angebote kommen nächste Woche. Dann können wir uns vielleicht gleich für eins entscheiden. Wir müssen auch noch einen Feedbackbogen und einen Abschlusstest entwerfen. Wann würde es dir denn am besten passen?',
        questions: [
          {
            number: 37, type: 'abc',
            statement: 'Felix',
            options: ['a) bittet um einen Terminvorschlag.', 'b) hat schon Angebote für die Software.', 'c) soll an einer Schulung teilnehmen.'],
            answer: 'a'
          }
        ]
      },
      {
        title: 'Nummer 38 — Kathrin Schönberner',
        audioUrl: null,
        dialogue: 'Hallo, hier ist Kathrin Schönberner von der Kundenbetreuung. Ich habe heute schon wieder einige Beschwerden von Kunden bekommen, auch von Standkunden übrigens, weil es immer wieder Probleme mit der Spedition „Flink und Sicher" gibt. Wenn die weiterhin die vereinbarten Lieferfristen nicht einhalten, gehen unsere Kunden zur Konkurrenz. Ich glaube, wir sollten dringend handeln und uns zusammensetzen, um eine Lösung zu finden. Vielleicht müssen wir uns nach einem neuen Partner umschauen. Passt Ihnen morgen um drei.',
        questions: [
          {
            number: 38, type: 'abc',
            statement: 'Kathrin Schönberner hat',
            options: ['a) Angst, Kunden zu verlieren.', 'b) eine neue Spedition gefunden.', 'c) Fristen nicht beachtet.'],
            answer: 'a'
          }
        ]
      },
      {
        title: 'Nummer 39 — Daniel Meyer',
        audioUrl: null,
        dialogue: 'Daniel Meyer von der Firma Busch. Guten Tag. Nächste Woche wechseln Sie ja die Telefonanlage bei uns in der Semperstraße 2 aus. Und dazu habe ich noch ein paar Fragen. Wie lange werden wir denn nicht telefonieren können? Außerdem hatten Sie gesagt, dass die Telefonapparate ausgetauscht werden müssen. Bringen Sie die neuen gleich mit? Und wir brauchen noch eine Einweisung in die Nutzung der neuen Anlage. Es wäre sinnvoll, wenn wir das an dem Tag auch gleich machen könnten.',
        questions: [
          {
            number: 39, type: 'abc',
            statement: 'Daniel Meyer möchte wissen,',
            options: ['a) ob die Telefonapparate ausgetauscht werden.', 'b) wer den Kollegen die Anlage erklärt.', 'c) wie lange die Telefonanlage nicht funktionieren wird.'],
            answer: 'c'
          }
        ]
      },
      {
        title: 'Nummer 40 — Anja',
        audioUrl: null,
        dialogue: 'Hallo, hier ist Anja nochmal. Du kommst doch am Freitag auch zu der außerplanmäßigen Abteilungsbesprechung, oder? Zumindest habe ich deinen Namen auf der Liste gelesen. Kannst du bitte Katharinas Präsentation übernehmen? Sie ist die ganze nächste Woche auf einer Schulung und kommt dann erst wieder Montag ins Haus. Ihr habt doch die Verkaufszahlen vom letzten Quartal zusammen ausgewertet. Ich habe darüber leider keinen Überblick und kann es nicht selbst machen. Gibst du mir bitte kurz Bescheid, ob es klappt? Danke.',
        questions: [
          {
            number: 40, type: 'abc',
            statement: 'Anja',
            options: ['a) kann nicht zur Besprechung kommen.', 'b) kennt die Verkaufszahlen nicht.', 'c) steht nicht auf der Teilnehmerliste.'],
            answer: 'b'
          }
        ]
      }
    ]
  },
  {
    id: 6, label: '6', title: 'Variante 6',
    audioUrl: null,
    sections: [
      {
        title: 'Nummer 36 — Juri',
        audioUrl: 'https://t.me/B2_C2_Deutsch/65534/153252',
        dialogue: 'Hi Tim, Juri hier. Ich habe gehört, dass du den Raum für meine Präsentation morgen vorbereitest. Ich wollte dich bitten, folgende technische Ausstattung für mich bereitzuhalten. Da ich Power-Point nutzen werde, brauche ich einen Laptop und einen Beamer. Außerdem wären noch ein Flipchart und eine weiße Tafel mit den passenden Stiften gut. Die Unterlagen, die bei allen Besuchern auf dem Stuhl liegen sollen, bringe ich dir später vorbei. Wir rechnen mit ca. 150 Teilnehmern. Ich würde dich also bitten, entsprechend viele Mappen vorzubereiten. Danke dir.',
        questions: [
          {
            number: 36, type: 'abc',
            statement: 'Juri',
            options: ['a) bereitet den Raum für die Veranstaltung vor.', 'b) braucht von Tim eine Power-Point-Präsentation.', 'c) hält am nächsten Tag einen Vortrag.'],
            answer: 'c'
          }
        ]
      },
      {
        title: 'Nummer 37 — Anita',
        audioUrl: 'https://t.me/B2_C2_Deutsch/65534/153251',
        dialogue: 'Anita aus der Buchhaltung hier. Hallo Steffi. Ich kann für die Rechnung Nr. C134, die wir vor 6 Wochen an die Firma Schneider Waren geschickt haben, noch immer keinen Zahlungseingang feststellen. Weißt du, was da los ist? Sie haben die Ware doch erhalten, oder? Schau doch bitte mal in deinen Unterlagen nach und sag mir Bescheid. Wenn von unserer Seite aus alles in Ordnung ist, werde ich nämlich heute eine Zahlungserinnerung an die Firma rausschicken. Ruf mich doch bitte kurz an.',
        questions: [
          {
            number: 37, type: 'abc',
            statement: 'Anita',
            options: ['a) bittet Steffi, die Rechnung zu bezahlen.', 'b) hat vor sechs Wochen eine Rechnung bezahlt.', 'c) möchte eine Zahlungsaufforderung verschicken.'],
            answer: 'c'
          }
        ]
      },
      {
        title: 'Nummer 38 — Mario Groß',
        audioUrl: 'https://t.me/B2_C2_Deutsch/65534/153250',
        dialogue: 'Weinhandel Winzer, Mario Groß, guten Tag. Ich habe Ihr Angebot bekommen und würde mich gerne persönlich mit Ihnen darüber unterhalten. Die Preise scheinen mir bei der Stückzahl an Flaschen, die wir monatlich abnehmen würden, sehr hoch. Und ich wollte mal nachfragen, ob wir darüber noch verhandeln können. Mehr als 7,50 Euro pro Flasche können wir leider nicht bezahlen. Es gibt andere Weingüter, die durchaus gute Weine zu diesem Preis anbieten. Wir finden aber Ihre Qualität sehr überzeugend und würden uns freuen, wenn wir uns einig werden könnten.',
        questions: [
          {
            number: 38, type: 'abc',
            statement: 'Mario Groß',
            options: ['a) bittet um ein schriftliches Angebot.', 'b) kennt auch andere Weingüter mit guter Qualität.', 'c) möchte den Wein günstiger liefern.'],
            answer: 'b'
          }
        ]
      },
      {
        title: 'Nummer 39 — Irina Müller',
        audioUrl: 'https://t.me/B2_C2_Deutsch/65534/153249',
        dialogue: 'Irina Müller, Sekretariat Dr. Schmidt, guten Tag. Herr Dr. Schmidt hat Ihr Angebot für die Schneidemaschinen erhalten und ist daran interessiert. Allerdings würde er sich die Geräte gerne erst ansehen, bevor wir eine Bestellung aufgeben. Wäre es möglich, dass Sie ihm die Geräte persönlich vorführen? Könnte Herr Dr. Schmidt vielleicht für eine Präsentation bei Ihnen in der Firma vorbeikommen? Der nächste Freitag würde für ihn gut passen. Am besten vormittags. Wenn es geht, um 11 Uhr. Bitte rufen Sie mich doch zurück. Vielen Dank.',
        questions: [
          {
            number: 39, type: 'abc',
            statement: 'Irina Müller',
            options: ['a) bereitet eine Präsentation vor.', 'b) bittet um einen Besuchstermin für ihren Chef.', 'c) hat Interesse an einem Angebot.'],
            answer: 'b'
          }
        ]
      },
      {
        title: 'Nummer 40 — Taro Klein',
        audioUrl: 'https://t.me/B2_C2_Deutsch/65534/153248',
        dialogue: 'Werbeagentur Pfeiffer & Partner, Taro Klein am Apparat. Guten Tag, Herr Weiß, Sie haben doch die Werbekampagne für das Autohaus Scherm geplant. Unsere Geschäftsführerin, Frau Dr. Pfeiffer, hat morgen Nachmittag einen Termin bei den Kunden und hätte gerne, dass Sie sie begleiten. Sie können am besten Rede und Antwort stehen, wenn es Rückfragen zu den Entwürfen gibt und beurteilen, inwieweit irgendwelche Änderungsvorschläge realisierbar sind oder nicht. Bitte rufen Sie mich an, um den Termin zu bestätigen. Danke.',
        questions: [
          {
            number: 40, type: 'abc',
            statement: 'Taro Klein',
            options: ['a) bittet Frau Pfeiffer um Unterstützung.', 'b) hatte gerade einen Termin mit dem Autohaus.', 'c) möchte die Werbekampagne verändern.'],
            answer: 'c'
          }
        ]
      }
    ]
  },
  {
    id: 7, label: '7', title: 'Variante 7',
    audioUrl: null,
    sections: [
      {
        title: 'Nummer 36',
        audioUrl: null,
        dialogue: '',
        questions: [
          {
            number: 36, type: 'abc',
            statement: 'Jan',
            options: ['a) kennt bereits die Kosten für die Farben.', 'b) kontaktiert den Techniker.', 'c) kümmert sich um die Farbauswahl.'],
            answer: 'c'
          }
        ]
      },
      {
        title: 'Nummer 37',
        audioUrl: null,
        dialogue: '',
        questions: [
          {
            number: 37, type: 'abc',
            statement: 'Die Firma Software Solution',
            options: ['a) liefert in fünf bis sechs Stunden ihre Kassen.', 'b) möchte mit dem Supermarkt einen Termin vereinbaren.', 'c) überwacht die Sicherheit im Kassenbereich.'],
            answer: 'b'
          }
        ]
      },
      {
        title: 'Nummer 38',
        audioUrl: null,
        dialogue: '',
        questions: [
          {
            number: 38, type: 'abc',
            statement: 'Gabi soll',
            options: ['a) den Operationsplan ändern.', 'b) Herrn Sommer anrufen.', 'c) mit dem Hausarzt über die Blutwerte sprechen.'],
            answer: 'a'
          }
        ]
      },
      {
        title: 'Nummer 39',
        audioUrl: null,
        dialogue: '',
        questions: [
          {
            number: 39, type: 'abc',
            statement: 'Anna',
            options: ['a) bestellt italienisches Essen für alle.', 'b) organisiert eine Aktivität für das Team.', 'c) will nur mit Claudia ins Kino gehen.'],
            answer: 'b'
          }
        ]
      },
      {
        title: 'Nummer 40',
        audioUrl: null,
        dialogue: '',
        questions: [
          {
            number: 40, type: 'abc',
            statement: 'Stefan berichtet, dass',
            options: ['a) der Lieferant erkrankt ist.', 'b) die Kolleg*innen streiken wollen.', 'c) nicht pünktlich geliefert werden kann.'],
            answer: 'c'
          }
        ]
      }
    ]
  }
];

export default horenTeil4Variants;
