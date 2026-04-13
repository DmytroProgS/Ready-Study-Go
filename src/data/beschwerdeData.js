const beschwerdeVariants = [
  {
    id: 1,
    label: '1',
    title: 'Putzdienst / Reinigung',
    texts: [
      {
        role: 'Auftrag von Heike (Chefin)',
        content:
          'Hallo Friederike,\n\ngerade habe ich die angehängte Mail von der Firma Huber GmbH gelesen und bin schockiert. Ich verstehe den Ärger von Herrn Lassner, kann aber kaum glauben, was er da schreibt. Bitte sprich mal mit unseren Leuten und kläre, was da los ist, und antworte dann Herrn Lassner. Es ist ganz wichtig, dass du ihm zusagst, dass so etwas nie wieder vorkommen wird. Gib ihm auch einen Rabatt auf die nächste Rechnung in Höhe von 20 %. Wir dürfen die Firma mit diesem großen Auftrag keinesfalls als Kunden verlieren.\n\nDanke dir und schönen Feierabend!\nGruß\nHeike',
      },
      {
        role: 'Beschwerde von Theo Lassner',
        content:
          'Sehr geehrte Frau Woller,\n\nleider muss ich mich heute mit einer Beschwerde an Sie wenden. Wir haben einen Vertrag mit Ihrer Firma für die Reinigung unserer Büroräume. In diesem Vertrag sind täglich 3 Stunden Arbeit bei uns festgelegt, und zwar von 6.00 Uhr bis 9.00 Uhr morgens.\n\nIn den letzten zwei Wochen war unsere Sekretärin einige Male bereits vor 9 Uhr im Büro, von Ihrem Putzdienst war aber niemand zu sehen. Wie kann das sein?\n\nWenn wir 3 Stunden bezahlen, erwarten wir auch, dass Ihr Personal drei Stunden bei uns arbeitet. Wenn Sie für die Reinigung unserer Räume weniger als die vereinbarte Zeit benötigen, sollten Sie uns darüber informieren, damit wir den Vertrag ändern.\n\nIch bitte um umgehende Stellungnahme und natürlich die Angleichung der Rechnung an die tatsächlich geleisteten Arbeitsstunden.\n\nMit freundlichen Grüßen\nTheo Lassner',
      },
      {
        role: 'Antwort von Friederike Baumann',
        content:
          'Sehr geehrter Herr Lassner,\n\nvielen Dank für Ihre Rückmeldung von gestern. Wir bedauern die entstandenen Unannehmlichkeiten sehr und bitten um Entschuldigung. Heute wurde mit unseren Mitarbeitern gesprochen und herausgefunden, dass der Grund dafür war, dass unser Dienstfahrzeug in Inspektion war. Deswegen mussten die Mitarbeiter 15 Minuten früher die Arbeit verlassen, um die öffentlichen Verkehrsmittel nicht zu verpassen. Wir möchten Ihnen versichern, dass sich diese Situation nicht wiederholen wird. Natürlich möchten wir Sie als treuen Kunden behalten, deswegen bieten wir Ihnen einen Rabatt auf die nächste Rechnung in Höhe von 20% an.\n\nWir freuen uns weiterhin auf eine Zusammenarbeit.\n\nMit freundlichen Grüßen\nFriederike Baumann',
      },
    ],
    questionSets: [
      {
        label: 'Variante A',
        q19: {
          statement: '19. Herr Lassner',
          options: [
            'möchte seine Rechnung nicht begleichen.',
            'ist mit der Sauberkeit im Büro nicht zufrieden.',
            'will nur die geleisteten Stunden bezahlen.',
          ],
          answer: 'c',
        },
        q20: {
          statement: '20. Der Putzdienst',
          options: [
            'hält die Arbeitszeit ein. / hat flexible Einsatzzeiten.',
            'hat zu wenig Stunden gearbeitet.',
            'möchte einen neuen Vertrag.',
          ],
          answer: 'b',
        },
      },
      {
        label: 'Variante B (21.12.24)',
        q20: {
          statement: '20. Der Putzdienst',
          options: [
            'hält die Arbeitszeit nicht ein.',
            'hat zu wenig Zeit.',
            'möchte einen neuen Vertrag.',
          ],
          answer: 'a',
        },
      },
    ],
  },
  {
    id: 2,
    label: '2',
    title: 'Tischlampe (Frau Berger)',
    texts: [
      {
        role: 'Auftrag von Knut Richter',
        content:
          'Lieber Herr Klein,\n\nich habe schon wieder eine Beschwerde einer Kundin vorliegen. Sie hat ihre bestellten Tischlampen nicht bekommen. Bitte antworten Sie Frau Berger und erklären Sie ihr, warum wir im Moment Lieferschwierigkeiten haben. Versuchen Sie auch, sie davon zu überzeugen, noch bis nächste Woche zu warten und den Auftrag nicht zu stornieren. Bieten Sie ihr außerdem ein ähnliches Modell an, das wir auf Lager haben. Danke!\n\nHerzliche Grüße\nKnut Richter',
      },
      {
        role: 'Beschwerde von Evelyn Berger',
        content:
          'Sehr geehrter Herr Richter,\n\nvergangene Woche habe ich bei Ihnen 25 Tischlampen Modell TS 13 150 07 für unsere neuen Büroräume bestellt. Mir wurde telefonisch zugesagt, dass die Lampen noch diese Woche geliefert werden, aber jetzt ist schon Freitagnachmittag und sie sind leider noch immer nicht eingetroffen.\n\nDas ist ärgerlich, da wir am Wochenende unsere Renovierungsarbeiten beenden und die Büros dann vollständig neu einrichten werden. Dazu wurden natürlich auch die Lampen gehören, da wir am Montag unseren Bürobetrieb in funktionstüchtigen Räumen wieder aufnehmen wollen. Ich habe bereits mehrfach versucht, Sie telefonisch zu erreichen, und habe Nachrichten auf Ihrem Anrufbeantworter hinterlassen, aber ich wurde leider nicht zurückgerufen. Inzwischen habe ich einen Lieferanten gefunden, der uns kurzfristig andere Tischlampen liefern könnte.\n\nWenn Ihre Lampen also bis Montagmittag, 13:00 Uhr, nicht bei uns eingetroffen sind, werde ich die Bestellung bei Ihnen stornieren. Ich bitte um eine schnelle Antwort!\n\nMit freundlichen Grüßen\nEvelyn Berger',
      },
      {
        role: 'Antwort von Lukas Klein',
        content:
          'Sehr geehrte Frau Berger,\n\nvielen Dank für Ihre Rückmeldung von gestern. Wir bedauern die entstandenen Unannehmlichkeiten sehr und bitten um Entschuldigung. Heute habe ich mit dem Hersteller gesprochen und ich habe herausgefunden, dass der Grund für die Verzögerung unvorhergesehene Lieferschwierigkeiten sind. Ich möchte Ihnen versichern, dass in der Vergangenheit solche Situationen in wenigen Tagen behoben waren. Deswegen bitten wir Sie noch um Geduld. Falls Ihre Bestellung bis nächste Woche Montag nicht geliefert wird, bieten wir Ihnen ein ähnliches Model, welches wir auf Lager haben, an. Wir hoffen, dass Sie mit dieser Lösung zufrieden sind und wieder bei uns bestellen werden.\n\nMit freundlichen Grüßen\nLukas Klein',
      },
    ],
    questionSets: [
      {
        q19: {
          statement: '19. Frau Berger',
          options: [
            'beschwert sich über die Qualität des Produktes.',
            'hat eine fehlerhafte Lieferung erhalten.',
            'wartet dringend auf die Lieferung.',
          ],
          answer: 'c',
        },
        q20: {
          statement: '20. Die Renovierungsarbeiten',
          options: [
            'stehen kurz bevor.',
            'verzögern sich.',
            'sollen zeitnah abgeschlossen werden.',
          ],
          answer: 'c',
        },
      },
    ],
  },
  {
    id: 3,
    label: '2 (neu)',
    title: 'Tischlampe (Frau Lutz, Test 030321)',
    texts: [
      {
        role: 'Auftrag von Elias Philips',
        content:
          'Hallo,\n\nich habe schon wieder eine Beschwerde einer Kundin vorliegen. Sie hat ihre bestellten Tischlampen nicht bekommen. Bitte antworten Sie Frau Lutz und erklären Sie ihr, warum wir im Moment Lieferschwierigkeiten haben. Versuchen Sie auch, sie davon zu überzeugen, noch bis nächste Woche zu warten und den Auftrag nicht zu stornieren. Bieten Sie ihr außerdem ein ähnliches Modell an, das wir auf Lager haben. Danke!\n\nHerzliche Grüße\nElias Philips',
      },
      {
        role: 'Beschwerde von Betta Lutz',
        content:
          'Sehr geehrter Herr Phillips,\n\nvergangene Woche habe ich bei Ihnen 15 Tischlampen Modell TS 13 150 07 für unsere neuen Büroräume bestellt. Mir wurde telefonisch zugesagt, dass die Lampen noch diese Woche geliefert werden, aber jetzt ist schon Freitagnachmittag und sie sind leider noch immer nicht eingetroffen.\n\nDas ist sehr ärgerlich, da wir am Wochenende unsere Renovierungsarbeiten beenden und die Büros dann vollständig neu einrichten werden. Dazu wurden natürlich auch die Lampen gehören, da wir am Montag unseren Bürobetrieb in funktionstüchtigen Räumen wieder aufnehmen wollen.\n\nIch habe bereits mehrfach versucht, Sie telefonisch zu erreichen, und habe Nachrichten auf Ihrem Anrufbeantworter hinterlassen, aber ich wurde leider nicht zurückgerufen. Inzwischen habe ich einen Lieferanten gefunden, der uns kurzfristig andere Tischlampen liefern könnte.\n\nWenn Ihre Lampen also bis Montagmittag, 12:00 Uhr, nicht bei uns eingetroffen sind, werde ich die Bestellung bei Ihnen stornieren. Ich bitte um eine schnelle Antwort!\n\nMit freundlichen Grüßen\nBetta Lutz',
      },
    ],
    questionSets: [
      {
        q19: {
          statement: '19. Frau Lutz',
          options: [
            'erwartet eine umgehende Rückmeldung.',
            'möchte ein anderes Lampenmodell.',
            'storniert den Auftrag.',
          ],
          answer: 'a',
        },
        q20: {
          statement: '20. Die Renovierungsarbeiten',
          options: [
            'stehen kurz bevor.',
            'verzögern sich.',
            'sollen zeitnah abgeschlossen werden.',
          ],
          answer: 'c',
        },
      },
    ],
  },
  {
    id: 4,
    label: '3',
    title: 'Webseite',
    texts: [
      {
        role: 'Auftrag von Jutta Spindler',
        content:
          'Hallo Frau Holsten,\n\nich habe heute Mittag die untenstehende Mail bekommen. Die vertauschten Namen sind unser Fehler und die verbessern wir auch. Bitte bestätigen Sie dem Kunden das. Aber mehr ist nun wirklich nicht drin. Das ist schon das fünfte Mal, dass er Korrekturwünsche hat, obwohl wir uns immer an die Vorgaben gehalten haben. So viele Korrekturen waren nicht vereinbart!\n\nWenn wir das noch machen sollten, geht das nur gegen zusätzliche Bezahlung. Ich rechne mit 200 (300) € extra. Bitte teilen Sie ihm dies mit und lassen Sie sich von ihm sein Okay geben.\n\nDanke und viele Grüße\nJutta Spindler',
      },
      {
        role: 'Beschwerde von Franz Stiller',
        content:
          'Sehr geehrte Frau Spindler,\n\nvielen Dank für Ihren Entwurf für unsere neue Firmenwebseite. Ich habe ihn gemeinsam mit dem Team gesichtet und dabei ist uns aufgefallen, dass Ihre Agentur die Vorgaben an zwei Stellen leider nicht umgesetzt hat:\n\nZum einen hatten wir besprochen, dass das Farbschema grau-orange sein sollte. Da statt Grau Blau gewählt wurde, glaube ich, dass es zu einem Missverständnis gekommen ist. Zum anderen sind auf der Seite mit den Ansprechpartnern die Namen eigener Mitarbeiter vertauscht worden. Im Anhang schicke ich Ihnen noch einmal eine Auflistung der Namen mit den dazugehörigen Bildern. Könnten Sie diese beide Punkte bitte bis Anfang nächster Woche nachbessern? Eine kurze Rückmeldung wäre nett.\n\nMit freundlichen Grüßen\nFranz Stiller',
      },
      {
        role: 'Antwort von Monika Holsten',
        content:
          'Sehr geehrter Herr Stiller,\n\nvielen Dank für Ihre Rückmeldung von heute. Wir bedauern die entstandenen Unannehmlichkeiten sehr und bitten um Entschuldigung. Außerdem möchte ich Ihnen versichern, dass wir den Fehler im Nahmen bis Ende dieser Woche korrigieren werden. Bitte beachten Sie, dass das blau-orange Farbschema in unserem Vertrag vereinbart ist. Zudem ist das schon die fünfte Bitte um Korrektur. So viele Korrekturen waren nicht vereinbart. Deswegen kostet jede weitere Korrektur 200 (300) €. Wenn Sie mit dieser Lösung einverstanden sind, geben Sie mir bitte Bescheid. Vielen Dank für Ihr Verständnis.\n\nMit freundlichen Grüßen\nMonika Holsten',
      },
    ],
    questionSets: [
      {
        q19: {
          statement: '19. Herr Stiller',
          options: [
            'ist mit dem Entwurf der Agentur nicht einverstanden.',
            'möchte, dass Frau Spindler sich einen Entwurf ansieht.',
            'möchte wissen, wer den Entwurf überarbeiten kann.',
          ],
          answer: 'a',
        },
        q20: {
          statement: '20. Die Agentur sagt, dass sie',
          options: [
            'Änderungen nur gegen Aufpreis macht.',
            'keine Fehler gemacht hat.',
            'keine Vorgaben von Herrn Stiller hatte.',
          ],
          answer: 'a',
        },
      },
    ],
  },
  {
    id: 5,
    label: '4',
    title: 'Spülmaschine',
    texts: [
      {
        role: 'Auftrag von Dorothee Sturm',
        content:
          'Hallo Frau Retterstein,\n\nich habe gerade die unten stehende E-Mail von einem großen Kunden bekommen, der sich beschwert hat. Organisieren Sie doch bitte so schnell wie möglich einen Techniker, der sich die Spülmaschine ansieht, und schreiben Sie Herrn Krüger.\n\nEntschuldigen Sie sich bitte für die Unannehmlichkeiten und sagen Sie ihm zu, dass wir seine Forderungen in seiner E-Mail prüfen werden.\n\nTeilen Sie Herrn Krüger aber bitte vorsorglich mit, dass die Reparatur eventuell nicht sofort durchgeführt werden kann, falls wir Ersatzteile bestellen müssen.\n\nDanke und viele Grüße\nDorothee Sturm',
      },
      {
        role: 'Beschwerde von Claudio Krüger',
        content:
          'Sehr geehrte Frau Sturm,\n\nvor einer Woche haben wir bei Ihnen eine Spülmaschine für unsere Teeküche gekauft. Sie wurde sehr schnell geliefert und auch gleich eingebaut. Leider muss ich Ihnen heute aber mitteilen, dass sie bereits defekt ist. Beim Spülen ist Wasser ausgelaufen und nun ist unser Parkett beschädigt.\n\nIch bitte Sie, uns umgehend einen Techniker zu schicken, der das Gerät repariert. Wir brauchen die Spülmaschine spätestens übermorgen, da wir ein großes Meeting unserer Außendienstmitarbeiter haben und viele Personen bewirten müssen.\n\nAußerdem müssen wir einen Teil des Parketts austauschen. Die Kosten dafür werden wir Ihnen in Rechnung stellen.\n\nBitte schicken Sie mir so schnell wie möglich einen Terminvorschlag für die Reparatur und eine Bestätigung der Kostenübernahme. Vielen Dank!\n\nMit freundlichen Grüßen\nClaudio Krüger',
      },
      {
        role: 'Antwort von Anika Retterstein',
        content:
          'Sehr geehrter Herr Krüger,\n\nvielen Dank für Ihre Rückmeldung von gestern. Wir bedauern die entstandenen Unannehmlichkeiten sehr und bitten um Entschuldigung. Unserer Techniker könnte am kommenden Montag 27.05.2024 um 8:00 Uhr kommen, um die Spülmaschine und das beschädigten Parkett zu überprüfen. Bitte teilen Sie uns mit, ob der Termin stattfinden kann. Beachten Sie, dass falls wir Ersatzteile für die Reparatur bestellen müssen, keine umgehende Reparatur möglich ist. Detaillierte Information können wir Ihnen nach der Überprüfung geben. Wir danken Ihnen für Ihr Verständnis.\n\nMit freundlichen Grüßen\nAnika Retterstein',
      },
    ],
    questionSets: [
      {
        q19: {
          statement: '19. Der Kunde',
          options: [
            'fordert eine neue Spülmaschine.',
            'hat einen Wasserschaden in der Küche.',
            'beschwert sich über die Reparaturarbeiten.',
          ],
          answer: 'b',
        },
        q20: {
          statement: '20. Die Firma Küchenbedarf soll',
          options: [
            'die Reparatur der Spülmaschine in Rechnung stellen.',
            'innerhalb von zwei Tagen die Spülmaschine reparieren.',
            'das Parkett in der Teeküche umgehend ersetzen.',
          ],
          answer: 'b',
        },
      },
    ],
  },
  {
    id: 6,
    label: '5',
    title: 'Umzug',
    texts: [
      {
        role: 'Auftrag von Frieda Börne / Sophia Prince',
        content:
          'Hallo,\n\nbitte schauen Sie sich mal die untenstehende E-Mail an.\n\nDa ist wohl was schief gegangen. Bitte schreiben Sie Herrn Zaun und erklären Sie ihm, warum es zu den Fehlern gekommen ist. Sagen Sie ihm zu, dass am Mittwochmorgen pünktlich zwei Männer da sein werden, die alles fertig machen.\n\nNatürlich übernehmen wir auch die Verantwortung für die entstandenen Schäden.\n\nDie Firma hat uns das erste Mal gebucht und ich würde ungern einen negativen Eindruck hinterlassen. Ich verlasse mich auf Sie.\n\nDanke und viele Grüße\nFrieda Börne / Sophia Prince',
      },
      {
        role: 'Beschwerde von Thomas Zaun / Matteo Lozano',
        content:
          'Sehr geehrte Frau Börne, / Prince\n\nam Wochenende ist unser Büro mit Hilfe Ihres Unternehmens von Hanau nach Frankfurt umgezogen. Leider waren wir mit Ihrem Service überhaupt nicht zufrieden.\n\nIhre Mitarbeiter kamen eine halbe Stunde zu spät und nur zu dritt statt wie vereinbart zu viert. Deshalb dauerte der ganze Umzug natürlich länger als geplant und einige Arbeiten sind auch noch nicht abgeschlossen: Es sind noch nicht alle Möbel aufgebaut, deshalb konnten wir noch nicht unsere Sachen einräumen.\n\nBitte schicken Sie uns deshalb am Mittwochmorgen noch zwei Personen, die den Möbelaufbau erledigen. Des Weiteren sind Glasplatten zu Bruch gegangen und einige Schränke sind verkratzt. Ich gehe davon aus, dass Ihre Firma die Kosten dafür übernimmt.\n\nMit freundlichen Grüßen\nThomas Zaun / Matteo Lozano',
      },
      {
        role: 'Antwort von Monika Kühne',
        content:
          'Sehr geehrter Herr Zaun, / Lozano\n\nvielen Dank für Ihre Rückmeldung von gestern. Wir bedauern die entstandenen Unannehmlichkeiten sehr und bitten um Entschuldigung. Der Grund dafür war, dass unsere Mitarbeiter auf dem Weg zu Ihnen eine kleine Autopanne hatten. Außerdem hatten sich einige Mitarbeiter in der letzten Woche krank gemeldet, was zu Personalmangel führte. Wir möchten Ihnen versichern, dass diese Situation sich nicht wiederholen wird. Zudem werden zwei unserer Mitarbeiter am Mittwochmorgen pünktlich bei Ihnen sein. Natürlich möchten wir Sie als Kunden zufriedenstellen, deswegen übernehmen wir die Kosten für die beschädigten Möbel.\n\nWir freuen uns weiterhin auf eine Zusammenarbeit.\n\nMit freundlichen Grüßen\nMonika Kühne',
      },
    ],
    questionSets: [
      {
        label: 'Variante A (Herr Zaun)',
        q19: {
          statement: '19. Herr Zaun beschwert sich über',
          options: [
            'die Mitarbeiter der Firma.',
            'die Qualität von Produkten.',
            'eine ausbleibende Lieferung.',
          ],
          answer: 'a',
        },
        q20: {
          statement: '20. Herr Zaun',
          options: [
            'ist nach Hanau gezogen.',
            'musste seinen Umzug verschieben.',
            'verlangt Schadensersatz.',
          ],
          answer: 'c',
        },
      },
      {
        label: 'Variante B (Herr Lozano)',
        q19: {
          statement: '19. Beim Umzug',
          options: [
            'haben vier Möbelpacker gearbeitet.',
            'kam es zu Verzögerungen.',
            'wurden nicht alle Möbel transportiert.',
          ],
          answer: 'b',
        },
        q20: {
          statement: '20. Herr Lozano',
          options: [
            'musste seinen Umzug verschieben.',
            'verlangt Schadensersatz.',
            'ist nach Hanau gezogen.',
          ],
          answer: 'b',
        },
      },
    ],
  },
  {
    id: 7,
    label: '6',
    title: 'Der Drucker (Test 150321)',
    texts: [
      {
        role: 'Auftrag von Sibyl Aichele',
        content:
          'Hallo,\n\nschau dir mal die Mail von der Firma Mova an. Laut unserem Techniker lag der Fehler erneut an der falschen Bedienung des Geräts. Antworte Herrn Schmidt bitte und weise ihn höflich daraufhin, dass die Lösung des Problems nicht in unserer Verantwortung liegt. Gerne kommt noch einmal ein Techniker in die Firma und weist die Mitarbeiter*innen kostenfrei in die Bedienung ein. Die Kosten für die Überprüfung des Geräts bleiben die Angelegenheit der Mova GmbH.\n\nViele Grüße\nSibyl Aichele',
      },
      {
        role: 'Beschwerde von Benno Schmidt',
        content:
          'Sehr geehrte Frau Aichele,\n\nvorgestern wurde von einem Ihrer Mitarbeiter unser fast neues Druck- und Kopiergerät der Marke Lexios zum dritten Mal innerhalb von zwei Wochen geprüft, da bei diesem immer wieder Papierstaus aufgetreten sind. Gestern kam es schon wieder zu einer Fehlermeldung, was zur Folge hatte, dass wir Unterlagen nicht fristgerecht einreichen konnten. Aus diesem Grund haben wir eine für uns sehr wichtige Ausschreibung verpasst. Von einer Schadensersatzforderung sehen wir vorerst ab, wir fordern Sie aber auf, uns umgehend auf Ihre Kosten ein anderes Gerät zu liefern. Es handelt sich hier nämlich eindeutig um einen technischen Fehler, den wir nicht zu verantworten haben. Die Rechnungen für die drei vorangegangenen Technikereinsätze werden wir natürlich nicht bezahlen.\n\nIch erwarte Ihre umgehende Rückmeldung.\n\nMit freundlichen Grüßen\nBenno Schmidt',
      },
      {
        role: 'Antwort an Herrn Schmidt',
        content:
          'Sehr geehrter Herr Schmidt,\n\nbezugnehmend auf Ihre Beschwerde entschuldigen wir uns für die Unannehmlichkeiten. Es tut uns leid, dass ein Fehler im Drucker aufgetreten ist. Nach Rücksprache mit unserem Techniker wurde festgestellt, dass die Fehler auf eine fehlerhafte Bedienung des Geräts zurückzuführen sind. Wir möchten Sie daher höflich darauf hinweisen, dass die Lösung dieses Problems nicht in unserer Verantwortung liegt. Gerne kommt noch einmal ein Techniker in die Firma und weist die Mitarbeiter*innen kostenfrei in die Bedienung ein. Die Kosten für die Überprüfung des Geräts bleiben bei Ihnen.\n\nWir hoffen, dass Sie trotz des Vorfalls auch weiterhin unser treuer Kunde bleiben.\n\nMit freundlichen Grüßen',
      },
    ],
    questionSets: [
      {
        q19: {
          statement: '19. Das Gerät',
          options: [
            'ist erst seit Kurzem im Einsatz.',
            'muss noch mal überprüft werden.',
            'wurde immer richtig bedient.',
          ],
          answer: 'a',
        },
        q20: {
          statement: '20. Die Firma Mova GmbH',
          options: [
            'besteht auf der Bezahlung der Rechnungen.',
            'repariert den Kopierer noch einmal kostenfrei.',
            'tauscht das Gerät schnellstmöglich aus.',
          ],
          answer: 'a',
        },
      },
    ],
  },
  {
    id: 8,
    label: '7',
    title: 'Die Rechnung (Test 140321 — Karl Schmidt)',
    texts: [
      {
        role: 'Auftrag von Anna Hoffner',
        content:
          'Hallo,\n\nich habe heute die unten stehende E-Mail erhalten. Bitte kümmern Sie sich darum und antworten Sie dem Kunden höflich. Die Firma "Meier" ist ein langjähriger Kunde von uns. Wir können es uns nicht leisten, ihn zu verlieren. Schreiben Sie ihm bitte von unserem Computerproblem und wie wir es gelöst haben. Natürlich bekommt er den Rabatt wie gewohnt.\n\nVielen Dank.\nAnna Hoffner',
      },
      {
        role: 'Beschwerde von Karl Schmidt',
        content:
          'Sehr geehrte Frau Hoffner,\n\nwir haben Ihre Lieferung erhalten und sind mit allen Artikeln absolut zufrieden. Leider muss ich Sie darauf hinweisen, dass die Rechnung einige Unstimmigkeiten beinhaltet: Zunächst wurden statt 100 Stück Pinsel Größe M 200 Stück berechnet. Außerdem wurden 20 Töpfe roter Farbe berechnet. Wir hatten aber grüne Farbe bestellt und geliefert bekommen, die preislich niedriger liegt. Wir bitten Sie, dies zu korrigieren. Des Weiteren waren wir überrascht, dass unser üblicher Rabatt von 10 % in dieser Rechnung nicht gewährt wurde. Das ist wahrscheinlich ein Versehen.\n\nWir bitten um Berichtigung der Rechnung und erneute Zusendung.\n\nMit freundlichen Grüßen\nKarl Schmidt',
      },
      {
        role: 'Antwort an Herrn Friedrien',
        content:
          'Sehr geehrter Herr Friedrien,\n\nvielen Dank für Ihre E-Mail und Ihre Geduld. Wir entschuldigen uns aufrichtig für die Unannehmlichkeiten und die Unstimmigkeiten auf Ihrer Rechnung. Leider gab es ein Computerproblem, welches die fehlerhafte Berechnung verursacht hat. Dieses Problem wurde mittlerweile behoben.\n\nSelbstverständlich haben wir Ihren Auftrag überprüft und die erforderlichen Korrekturen vorgenommen. Die korrekte Anzahl der Pinsel sowie die von Ihnen bestellte grüne Farbe wurden in der neuen Rechnung entsprechend angepasst. Auch Ihr üblicher Rabatt von 10 % wurde nun berücksichtigt.\n\nWir haben eine neue, korrigierte Rechnung an Sie gesendet. Bei weiteren Fragen oder Anliegen stehen wir Ihnen jederzeit gerne zur Verfügung. Wir schätzen Ihre langjährige Partnerschaft und freuen uns auf die weitere Zusammenarbeit mit Ihnen.\n\nMit freundlichen Grüßen',
      },
    ],
    questionSets: [
      {
        q19: {
          statement: '19. Herr Schmidt',
          options: [
            'hat falsche Waren vom Lieferanten erhalten.',
            'meldet eine unvollständige Sendung.',
            'weist auf falsche Posten in der Zahlungsaufforderung hin.',
          ],
          answer: 'c',
        },
        q20: {
          statement: '20. Die Rechnung',
          options: [
            'hat 100 Pinsel nicht aufgeführt.',
            'ist ohne Preisnachlass ausgestellt worden.',
            'wurde an einen falschen Adressaten geschickt.',
          ],
          answer: 'b',
        },
      },
    ],
  },
  {
    id: 9,
    label: '7 (neu)',
    title: 'Die Rechnung (Test 140321 — Joachim Schmidt)',
    texts: [
      {
        role: 'Auftrag von Sonja',
        content:
          'Hallo,\n\nich habe gestern die unten stehende Mail erhalten. Bitte kümmere dich darum und antworte dem Kunden höflich. Die Firma Lacke und Farben ist ein langjähriger, guter Kunde. Wir können es uns nicht leisten, ihn zu verlieren. Du kannst ihm ruhig von unseren Computerproblemen berichten und wie wir sie gelöst haben. Selbstverständlich kriegt er den Rabatt wie immer.\n\nVielen Dank und liebe Grüße\nSonja',
      },
      {
        role: 'Beschwerde von Joachim Schmidt',
        content:
          'Sehr geehrte Frau Klein,\n\nwir haben Ihre Lieferung wie gewohnt zu unserer vollsten Zufriedenheit erhalten. Alle Artikel entsprechen absolut unseren Vorstellungen.\n\nLeider muss ich Sie darauf hinweisen, dass in der beigelegten Rechnung einige Unstimmigkeiten aufgetreten sind. Zunächst wurden statt der 100 Stück Pinsel Größe S 200 Stück berechnet. Außerdem wurden 50 Töpfe rote Farbe aufgeführt. Wir hatten aber grüne Farbe bestellt und geliefert bekommen, die preislich niedriger liegt. Wir bitten das zu korrigieren. Ferner waren wir verwundert, dass uns der übliche Rabatt von 10 % in dieser Rechnung nicht gewährt wurde. Dies ist wahrscheinlich ein Versehen.\n\nWir bitten um Berichtigung der Rechnung und erneute Zusendung.\n\nMit freundlichen Grüßen\nJoachim Schmidt',
      },
    ],
    questionSets: [
      {
        q19: {
          statement: '19. Der Kunde Joachim Schmidt',
          options: [
            'ist ein neuer Kunde.',
            'ist mit der gelieferten Ware zufrieden.',
            'braucht keine neue Rechnung.',
          ],
          answer: 'b',
        },
        q20: {
          statement: '20. Die Malerbedarffirma',
          options: [
            'gewährt Herrn Schmidt zum ersten Mal Rabatt.',
            'gewährt immer bei Herrn Schmidt einen Rabatt in Höhe 5%.',
            'hatte Computerprobleme, die zu Fehlern in der Rechnung führte.',
          ],
          answer: 'c',
        },
      },
    ],
  },
  {
    id: 10,
    label: '8',
    title: 'Die mangelhafte Lieferung',
    texts: [
      {
        role: 'Auftrag von Siegfried Mayer',
        content:
          'Hallo,\n\nmich erreichte die untenstehende E-Mail. Bitte kümmern Sie sich darum und antworten Sie dem Kunden höflich. Entschuldigen Sie sich für die verschmutzte Ware. Der geforderte Rabatt von 60% ist unverschämt. Bieten Sie ihm eine andere Lösung an. Die Nachlieferung der T-Shirts ist leider wegen unserer Mitarbeitersituation erst bis zum 12.05. möglich. Erklären Sie den Grund.\n\nVielen Dank\nSiegfried Mayer\nTeamleiter',
      },
      {
        role: 'Beschwerde von Matthias Schramm',
        content:
          'Sehr geehrter Herr Mayer,\n\nleider müssen wir Ihnen mitteilen, dass Ihre Lieferung nicht zu unserer Zufriedenheit ausgefallen ist. Wir müssen zwei Punkte beanstanden. Erstens wurden die Verpackungen der Hosen (Größe M und L) beim Transport beschädigt, sodass der Inhalt verschmutzt ist. In diesem Zustand können wir die Waren auf keinen Fall in den regulären Verkauf geben, sondern sie nur mit einem Rabatt anbieten. Wir halten daher einen Preisnachlass von 60% für angemessen. Des Weiteren teilen wir Ihnen mit, dass von den T-Shirts mit Aufdruck statt der bezahlten 100 Stück nur die Hälfte geliefert wurde. Wegen der beginnenden Sommersaison bitten wir um schnellstmögliche Nachlieferung der fehlenden Stückzahl auf Ihre Kosten spätestens bis zum 10.05. Wir hoffen, dass sich derartige Vorkommnisse in Zukunft vermeiden lassen, und bitten um prompte Erledigung.\n\nMit freundlichen Grüßen\nMatthias Schramm',
      },
      {
        role: 'Antwort (Variante 1)',
        content:
          'Sehr geehrter Herr Schramm,\n\nvielen Dank für Ihre E-Mail, in der Sie uns darüber informieren, dass Sie mit der gelieferten Ware nicht zufrieden sind. Wir entschuldigen uns für die verschmutzten Hosen, können Ihnen aber keinen Preisnachlass in Höhe von 60 Prozent geben. Bitte schicken Sie uns die Hosen zurück. Wir werden Ihnen die Hosen in Größe M und L erneut in einwandfreier Qualität schicken.\n\nAufgrund eines hohen Krankenstandes in unserer Firma ist die Nachlieferung der T-Shirts erst zum 12.05. möglich. Ich hoffe, dass Sie damit einverstanden sind. Bitte lassen Sie uns wissen, ob Sie mit unserem Vorschlag einverstanden sind.\n\nMit freundlichen Grüßen',
      },
      {
        role: 'Antwort (Variante 2)',
        content:
          'Sehr geehrter Herr Schramm,\n\nvielen Dank für Ihre E-Mail und für die Hinweise zu unserer letzten Lieferung. Wir bedauern die Unannehmlichkeiten und entschuldigen uns für die verschmutzten Waren sowie die unvollständige Lieferung.\n\nZu den beschädigten Hosen bieten wir Ihnen einen Preisnachlass von 20 % an. Alternativ können Sie uns die Artikel zurücksenden, und wir liefern Ersatz. Der von Ihnen vorgeschlagene Nachlass von 60 % ist leider nicht möglich.\n\nDie fehlenden T-Shirts werden wir schnellstmöglich nachliefern, jedoch ist dies aufgrund unserer aktuellen Personalsituation erst bis zum 12.05. realisierbar. Die zusätzlichen Versandkosten übernehmen selbstverständlich wir. Wir entschuldigen uns nochmals und danken Ihnen für Ihr Verständnis. Sollten Sie weitere Fragen haben, stehen wir Ihnen gerne zur Verfügung.\n\nMit freundlichen Grüßen',
      },
    ],
    questionSets: [
      {
        q19: {
          statement: '19. Herr Schramm',
          options: [
            'bemängelt Qualität und Menge der Lieferung.',
            'fand die gesamte Lieferung beschädigt vor.',
            'verlangt wegen der Lieferungsverzögerung einen Rabatt.',
          ],
          answer: 'a',
        },
        q20: {
          statement: '20. Die Nachlieferung',
          options: [
            'bezahlt der Kunde.',
            'kommt im Sommer.',
            'umfasst 50 T-Shirts.',
          ],
          answer: 'c',
        },
      },
    ],
  },
  {
    id: 11,
    label: '9',
    title: 'Pflanzenlieferung',
    texts: [
      {
        role: 'Auftrag von Michael Herrmann',
        content:
          'Hallo,\n\ndie folgende E-Mail ist gestern bei mir eingegangen. Was war denn da los?\n\nBitte antworten Sie der Kundin höflich und machen Sie Vorschläge für unsere weitere Zusammenarbeit. Wir schätzen Frau Talheim als langjährige Kundin und möchten sie deshalb nicht verlieren. Teilen Sie ihr bitte auch mit, was wir ihr als Entschädigung für die entstandenen Unannehmlichkeiten anbieten.\n\nVielen Dank und viele Grüße\nMichael Herrmann\nTeamleiter',
      },
      {
        role: 'Beschwerde von Gabi Talheim',
        content:
          'Sehr geehrter Herr Herrmann,\n\nleider müssen wir Ihnen mitteilen, dass Ihre Pflanzen- und Blumenauswahl für unsere letzte Veranstaltung gänzlich unpassend war. Wie Sie wissen, war das Thema unserer Ausstellung in der vergangenen Woche: „Nachhaltigkeit & Umweltverträglichkeit im Gartenbau – Lokal und Regional". Und Sie haben im Eingangsbereich aus dem fernen Ausland importierte exotische Pflanzen platziert, was verständlicherweise zu Beschwerden von Seiten der Besucher geführt hat. Zudem wollten wir den diesjährigen Umweltpreis zusammen mit Blumensträußen vergeben. Diese waren aber mit Orchideen bestückt. Wie passt das zum Thema „regional"? In dieser Situation haben wir daher entschieden, kurzfristigen Ersatz für die Sträuße von einem Aussteller zu beschaffen. Wir bitten Sie, diese zusätzlichen Kosten zu ersetzen. Solche Vorkommnisse müssen in Zukunft unter allen Umständen vermieden werden. Wir erwarten Ihre Vorschläge und stehen für ein Gespräch jederzeit zur Verfügung.\n\nMit freundlichen Grüßen\nGabi Talheim',
      },
      {
        role: 'Antwort an Frau Talheim',
        content:
          'Sehr geehrte Frau Talheim,\n\nwir bedanken uns für Ihre E-Mail sowie für den Hinweis auf unser Versehen beziehungsweise darauf, dass Sie statt der bestellten regionalen Blumen Orchideen erhalten haben. Im Namen des ganzen Teams entschuldigen wir uns für die entstandenen Unannehmlichkeiten. Der Grund der falschen Lieferung liegt darin, dass die Artikelnummern während des Bestellprozesses verwechselt wurden. Dadurch haben wir exotische Blumen zukommen lassen, die nicht für das Thema Ihrer Ausstellung geeignet waren. Bezüglich der Situation, dass Sie umgehend eine Ersatzlösung über einen anderen Lieferanten finden mussten, werden wir selbstverständlich die dadurch entstandenen Kosten übernehmen. Darüber hinaus gewähren wir Ihnen einen Preisnachlass von 15% auf die nächste Bestellung. Alternativ kann ein Gutschein für zusätzliche Leistungen angeboten werden. Bitte lassen Sie uns wissen, welche Lösung Sie bevorzugen. Wir würden uns freuen, Sie weiterhin zu unseren zufriedenen Kunden zählen zu dürfen.\n\nMit freundlichen Grüßen',
      },
    ],
    questionSets: [
      {
        q19: {
          statement: '19. Der Lieferant hat',
          options: [
            'die Dekoration passend zum Thema ausgewählt.',
            'die falsche Blumenauswahl getroffen.',
            'Ersatzsträuße aus der Region bestellt.',
          ],
          answer: 'b',
        },
        q20: {
          statement: '20. Der Veranstalter musste',
          options: [
            'an einen Aussteller Blumen liefern.',
            'auf die Beschwerden der Besucher reagieren.',
            'den Umweltpreis ohne Blumen überreichen.',
          ],
          answer: 'b',
        },
      },
    ],
  },
];

export default beschwerdeVariants;
