export type Language = 'de' | 'pl';

export interface Translation {
  nav: {
    home: string;
    property: string;
    location: string;
    gallery: string;
    benefits: string;
    offer: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    viewExpose: string;
    makeOffer: string;
    contactUs: string;
  };
  property: {
    title: string;
    subtitle: string;
    desc1: string;
    desc2: string;
    features: {
      beach: string;
      beachDesc: string;
      location: string;
      locationDesc: string;
      rewal: string;
      rewalDesc: string;
      neighborhood: string;
      neighborhoodDesc: string;
      investment: string;
      investmentDesc: string;
      access: string;
      accessDesc: string;
      wellness: string;
      wellnessDesc: string;
    };
  };
  location: {
    title: string;
    subtitle: string;
    mapMarker: string;
    attractionsTitle: string;
    attractions: {
      ruin: string;
      ruinDesc: string;
      beach: string;
      beachDesc: string;
      spa: string;
      spaDesc: string;
      railway: string;
      railwayDesc: string;
      velo: string;
      veloDesc: string;
      airport: string;
      airportDesc: string;
    };
  };
  gallery: {
    title: string;
    subtitle: string;
    villa: string;
    beach: string;
    interior: string;
    aerial: string;
    lightboxClose: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: {
      title1: string;
      desc1: string;
      title2: string;
      desc2: string;
      title3: string;
      desc3: string;
      title4: string;
      desc4: string;
      title5: string;
      desc5: string;
      title6: string;
      desc6: string;
    };
  };
  price: {
    title: string;
    subtitle: string;
    offerNote: string;
    negotiationBasis: string;
    amount: string;
  };
  offerForm: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    company: string;
    companyOpt: string;
    email: string;
    phone: string;
    amount: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    gdpr: string;
  };
  contactForm: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    gdpr: string;
    detailsTitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
  };
  footer: {
    rights: string;
    imprint: string;
    privacy: string;
    imprintText: string;
    privacyText: string;
    modalClose: string;
  };
}

export const translations: Record<Language, Translation> = {
  de: {
    nav: {
      home: 'Startseite',
      property: 'Die Immobilie',
      location: 'Lage & Umgebung',
      gallery: 'Bildergalerie',
      benefits: 'Vorteile',
      offer: 'Angebot abgeben',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Exklusive Küstenimmobilie in Trzęsacz',
      subtitle: 'Premiumlage an der polnischen Ostsee – nur wenige Schritte vom Strand entfernt. Ruhe, Exklusivität und langfristiges Wertpotenzial.',
      viewExpose: 'Exposé ansehen',
      makeOffer: 'Angebot abgeben',
      contactUs: 'Kontakt aufnehmen'
    },
    property: {
      title: 'Die Immobilie',
      subtitle: 'Einzigartige Architektur trifft auf unberührte Natur',
      desc1: 'Diese exklusive Ferienimmobilie in Trzęsacz stellt eine erstklassige, betriebsbereite Investitionsmöglichkeit an der polnischen Ostseeküste dar. Gelegen in einer ruhigen, privaten Stichstraße in erster Reihe (nur ca. 100 Meter zum Strandzugang), bietet das Anwesen maximale Privatsphäre.',
      desc2: 'Das Anwesen besteht aus einem Haupthaus (aufgeteilt in einen privaten Wohnbereich im Erdgeschoss sowie ein separates Obergeschoss-Apartment und ein eigenständiges Maisonette-Apartment mit eigenem Seiteneingang) und einem zusätzlichen, voll ausgestatteten Ganzjahres-Sommerhaus (70 m²). Die massive Ziegelbauweise, 4 Badezimmer und 4 separate WCs sowie 6 Pkw-Stellplätze auf dem 755 m² großen, umzäunten Grundstück machen das Objekt zu einem idealen Renditeobjekt für die Ferienvermietung oder als hybrides Eigennutzungsmodell.',
      features: {
        beach: 'Strandnähe',
        beachDesc: 'Nur ca. 100 Meter trennen Sie vom feinen Sandstrand der Ostsee.',
        location: 'Ruhige Premiumlage',
        locationDesc: 'Gelegen in einer gehobenen, verkehrsberuhigten Ferienhausumgebung.',
        rewal: 'Nähe zu Rewal',
        rewalDesc: 'Das lebendige Küstenstädtchen Rewal ist in wenigen Minuten erreichbar.',
        neighborhood: 'Exklusives Umfeld',
        neighborhoodDesc: 'Umgeben von modernen, hochwertigen Neubau-Ferienhäusern.',
        investment: 'Ideale Kapitalanlage',
        investmentDesc: 'Perfekt geeignet sowohl für die Eigennutzung als auch als rentable Ferienvermietung.',
        access: 'Beste Erreichbarkeit',
        accessDesc: 'Hervorragend angebunden, insbesondere für Eigentümer aus dem Raum Berlin (ca. 3 Std. Fahrtzeit).',
        wellness: 'Wellness- & Ganzjahresort',
        wellnessDesc: 'Ganzjährige Entspannung durch die gesunde Meeresluft und erstklassige lokale Wellnessangebote.'
      }
    },
    location: {
      title: 'Lage & Umgebung',
      subtitle: 'Entdecken Sie Trzęsacz und die polnische Bernsteinküste',
      mapMarker: 'ul. Letniskowa 4a, Trzęsacz, Polen',
      attractionsTitle: 'Highlights in direkter Nähe',
      attractions: {
        ruin: 'Kirchenruine St. Nikolaus',
        ruinDesc: 'Das weltberühmte Wahrzeichen von Trzęsacz – eine gotische Kirchenruine direkt an der Klippenkante.',
        beach: 'Ostseestrand',
        beachDesc: 'Breiter, feinsandiger Strand direkt unterhalb der Steilküste mit spektakulären Aussichtsplattformen.',
        spa: 'Europa Spa',
        spaDesc: 'Exklusive Wellness- und Kuranwendungen in unmittelbarer Nähe für ganzjährige Erholung.',
        railway: 'Küstenschmalspurbahn',
        railwayDesc: 'Die historische dampfbetriebene Schmalspurbahn verbindet die malerischen Küstenorte der Gemeinde.',
        velo: 'Velo Baltica Radweg',
        veloDesc: 'Der malerische Ostseeküsten-Radweg führt direkt durch den Ort und lädt zu langen Touren ein.',
        airport: 'Flughafen Stettin-Goleniów',
        airportDesc: 'Der internationale Flughafen (SZZ) ist nur ca. 80 km (ca. 1 Stunde Fahrt) entfernt.'
      }
    },
    gallery: {
      title: 'Bildergalerie',
      subtitle: 'Ein virtueller Rundgang durch Ihr neues Refugium',
      villa: 'Außenansicht & Architektur',
      beach: 'Der nahegelegene Ostseestrand',
      interior: 'Luxuriöse Innenräume',
      aerial: 'Vogelperspektive & Lage',
      lightboxClose: 'Schließen'
    },
    benefits: {
      title: 'Vorteile der Investition',
      subtitle: 'Warum diese Immobilie eine exzellente Entscheidung ist',
      items: {
        title1: 'Strandnähe & Privatsphäre',
        desc1: 'Eine seltene Kombination aus Strandnähe (100m) und absoluter Ruhe in einer privaten Premiumlage.',
        title2: 'Ganzjahresnutzung',
        desc2: 'Dank modernster Heiztechnik und der touristisch belebten Region eignet sich das Haus ideal für das ganze Jahr.',
        title3: 'Exzellente Erreichbarkeit',
        desc3: 'Nur etwa 3 Stunden Fahrtzeit von Berlin. Ideal für Wochenendausflüge und spontane Erholung.',
        title4: 'Vollständige Infrastruktur',
        desc4: 'Restaurants, Einkaufsmöglichkeiten, Wellness-Angebote und Sportanlagen sind bequem fußläufig erreichbar.',
        title5: 'Stabile Wertentwicklung',
        desc5: 'Trzęsacz und die umliegende Region Rewal verzeichnen seit Jahren einen kontinuierlichen Wertzuwachs bei Immobilien.',
        title6: 'Hohe touristische Nachfrage',
        desc6: 'Hervorragende Renditepotenziale durch Premium-Vermietung an internationale Feriengäste.'
      }
    },
    price: {
      title: 'Preisvorstellung',
      subtitle: 'Erwerben Sie Ihr Stück Ostseeparadies',
      offerNote: 'Die Eigentümer nehmen Kaufangebote entgegen. Nutzen Sie das untenstehende Formular für ein unverbindliches Gebot.',
      negotiationBasis: 'Verhandlungsbasis (VB)',
      amount: '1.850.000 PLN'
    },
    offerForm: {
      title: 'Angebot abgeben',
      subtitle: 'Senden Sie ein unverbindliches Kaufangebot direkt an den Eigentümer',
      firstName: 'Vorname',
      lastName: 'Nachname',
      company: 'Firma',
      companyOpt: 'Firma (optional)',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      amount: 'Ihr Gebot (in PLN)',
      message: 'Ihre Nachricht / Anmerkungen',
      submit: 'Gebot verbindlich absenden',
      sending: 'Wird gesendet...',
      success: 'Vielen Dank! Ihr Angebot wurde erfolgreich an die Eigentümer übermittelt. Wir setzen uns zeitnah mit Ihnen in Verbindung.',
      error: 'Fehler beim Senden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
      gdpr: 'Ich stimme zu, dass meine Daten zur Bearbeitung dieses Angebots elektronisch verarbeitet und gespeichert werden.'
    },
    contactForm: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Haben Sie Fragen zur Immobilie? Schreiben Sie uns eine Nachricht.',
      name: 'Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      message: 'Ihre Nachricht',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet...',
      success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt. Wir antworten Ihnen so schnell wie möglich.',
      error: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
      gdpr: 'Ich willige in die Verarbeitung meiner Daten gemäß der Datenschutzerklärung ein.',
      detailsTitle: 'Direkter Kontakt',
      addressLabel: 'Adresse der Immobilie',
      phoneLabel: 'Telefon',
      emailLabel: 'E-Mail'
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      imprintText: 'Angaben gemäß § 5 TMG:\n\nProjektname: Baltic Prestige Trzęsacz\nEigentümer/Anbieter: Vertretung der Eigentümergemeinschaft ul. Letniskowa 4a\nE-Mail: d.marcinczak@web.de\nVerantwortlich für den Inhalt: Eigentümergemeinschaft Letniskowa 4a\n\nHinweis: Dies ist eine exklusive Verkaufspräsentation. Alle Angaben sind freibleibend.',
      privacyText: 'Datenschutzerklärung (DSGVO):\n\nWir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Die über unsere Formulare erhobenen Daten (Name, E-Mail, Telefon, Gebot) werden ausschließlich zum Zweck der Kontaktaufnahme und Verhandlungsführung bezüglich der angebotenen Immobilie verwendet. Eine Weitergabe an Dritte erfolgt nicht. Sie haben jederzeit das Recht auf Auskunft, Berichtigung und Löschung Ihrer gespeicherten Daten.',
      modalClose: 'Schließen'
    }
  },
  pl: {
    nav: {
      home: 'Strona główna',
      property: 'O nieruchomości',
      location: 'Lokalizacja',
      gallery: 'Galeria zdjęć',
      benefits: 'Atuty',
      offer: 'Złóż ofertę',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Ekskluzywna nieruchomość w Trzęsaczu',
      subtitle: 'Premium lokalizacja nad polskim Bałtykiem – zaledwie kilka kroków od plaży. Spokój, prestiż i długoterminowa wartość.',
      viewExpose: 'Zobacz Broszurę',
      makeOffer: 'Złóż ofertę',
      contactUs: 'Skontaktuj się'
    },
    property: {
      title: 'O nieruchomości',
      subtitle: 'Wyjątkowa architektura w harmonii z naturą',
      desc1: 'Ta ekskluzywna nieruchomość w Trzęsaczu stanowi doskonałą, gotową do prowadzenia działalności inwestycję na polskim wybrzeżu Bałtyku. Położona w cichej, prywatnej ślepej uliczce w pierwszej linii brzegowej (zaledwie ok. 100 metrów do wejścia na plażę), zapewnia maksymalną prywatność.',
      desc2: 'Kompleks składa się z domu głównego (podzielonego na prywatną strefę mieszkalną na parterze, osobny apartament na piętrze oraz niezależny dwupoziomowy apartament z osobnym wejściem bocznym) oraz dodatkowego, całorocznego domu letniskowego (70 m²). Solidna konstrukcja z cegły, 4 łazienki i 4 osobne toalety, a także 6 miejsc parkingowych na ogrodzonej działce o powierzchni 755 m² czynią tę nieruchomość idealnym obiektem dochodowym.',
      features: {
        beach: 'Bliskość plaży',
        beachDesc: 'Tylko około 100 metrów dzieli Cię od piaszczystej plaży Bałtyku.',
        location: 'Cicha lokalizacja premium',
        locationDesc: 'Położenie w prestiżowym, spokojnym otoczeniu domów wakacyjnych.',
        rewal: 'Bliskość Rewala',
        rewalDesc: 'Tętniące życiem miasteczko Rewal oddalone jest o zaledwie kilka minut.',
        neighborhood: 'Ekskluzywne sąsiedztwo',
        neighborhoodDesc: 'Otoczenie nowoczesnych, wysokiej klasy nowych domów wakacyjnych.',
        investment: 'Doskonała lokata kapitału',
        investmentDesc: 'Idealna zarówno na potrzeby własne, jak i rentowny wynajem turystyczny.',
        access: 'Świetny dojazd',
        accessDesc: 'Bardzo dobre połączenie, zwłaszcza dla właścicieli z okolic Berlina (ok. 3 godz. jazdy) i Szczecina.',
        wellness: 'Uzdrowiskowy klimat',
        wellnessDesc: 'Całoroczny relaks dzięki czystemu, bogatemu w jod powietrzu i lokalnej ofercie spa.'
      }
    },
    location: {
      title: 'Lokalizacja i okolica',
      subtitle: 'Odkryj Trzęsacz i polskie Wybrzeże Rewalskie',
      mapMarker: 'ul. Letniskowa 4a, Trzęsacz, Polska',
      attractionsTitle: 'Atrakcje w najbliższej okolicy',
      attractions: {
        ruin: 'Ruiny kościoła w Trzęsaczu',
        ruinDesc: 'Słynny na cały świat symbol Trzęsacza – gotyckie ruiny kościoła na samym skraju klifu.',
        beach: 'Piaszczysta plaża',
        beachDesc: 'Szeroka, czysta plaża pod imponującym klifem z nowoczesnymi platformami widokowymi.',
        spa: 'Europa Spa',
        spaDesc: 'Ekskluzywne zabiegi wellness i odnowy biologicznej w sąsiedztwie dla całorocznego relaksu.',
        railway: 'Nadmorska Kolej Wąskotorowa',
        railwayDesc: 'Zabytkowa kolej wąskotorowa napędzana parą, łącząca malownicze kurorty gminy Rewal.',
        velo: 'Trasa rowerowa Velo Baltica',
        veloDesc: 'Nadmorski szlak rowerowy biegnący bezpośrednio przez miejscowość, idealny na długie wycieczki.',
        airport: 'Lotnisko Szczecin-Goleniów',
        airportDesc: 'Międzynarodowe lotnisko (SZZ) oddalone o ok. 80 km (około 1 godzina jazdy).'
      }
    },
    gallery: {
      title: 'Galeria zdjęć',
      subtitle: 'Wirtualny spacer po Twojej nowej oazie spokoju',
      villa: 'Widok z zewnątrz i architektura',
      beach: 'Pobliska bałtycka plaża',
      interior: 'Luksusowe wnętrza',
      aerial: 'Widok z lotu ptaka',
      lightboxClose: 'Zamknij'
    },
    benefits: {
      title: 'Korzyści z inwestycji',
      subtitle: 'Dlaczego ta nieruchomość to doskonały wybór',
      items: {
        title1: 'Bliskość morza i prywatność',
        desc1: 'Rzadkie połączenie bliskości plaży (100m) oraz absolutnego spokoju w prywatnej lokalizacji premium.',
        title2: 'Użytkowanie całoroczne',
        desc2: 'Dzięki nowoczesnemu ogrzewaniu i rozwiniętej turystyce, dom idealnie nadaje się do użytku przez cały rok.',
        title3: 'Doskonała dostępność',
        desc3: 'Tylko około 3 godzin jazdy samochodem z Berlina i 1,5 godziny ze Szczecina. Idealny na weekendowe wyjazdy.',
        title4: 'Pełna infrastruktura',
        desc4: 'Restauracje, sklepy, usługi spa i obiekty sportowe są w zasięgu krótkiego spaceru.',
        title5: 'Stabilny wzrost wartości',
        desc5: 'Trzęsacz i całe Wybrzeże Rewalskie od lat odnotowują stały wzrost cen nieruchomości.',
        title6: 'Wysoki popyt turystyczny',
        desc6: 'Świetny potencjał rentowności dzięki najmowi premium dla gości z Polski i zagranicy.'
      }
    },
    price: {
      title: 'Oczekiwania Cenowe',
      subtitle: 'Zainwestuj we własny kawałek bałtyckiego raju',
      offerNote: 'Właściciele rozpatrują oferty zakupu. Skorzystaj z poniższego formularza, aby złożyć niezobowiązującą ofertę.',
      negotiationBasis: 'Cena do negocjacji',
      amount: '1 850 000 PLN'
    },
    offerForm: {
      title: 'Złóż ofertę zakupu',
      subtitle: 'Prześlij niezobowiązującą ofertę cenową bezpośrednio do właściciela',
      firstName: 'Imię',
      lastName: 'Nazwisko',
      company: 'Firma',
      companyOpt: 'Firma (opcjonalnie)',
      email: 'Adres e-mail',
      phone: 'Numer telefonu',
      amount: 'Proponowana kwota (w PLN)',
      message: 'Twoja wiadomość / uwagi',
      submit: 'Wyślij ofertę cenową',
      sending: 'Wysyłanie...',
      success: 'Dziękujemy! Twoja oferta została pomyślnie przesłana do właścicieli. Skontaktujemy się z Tobą wkrótce.',
      error: 'Błąd podczas wysyłania. Spróbuj ponownie lub skontaktuj się bezpośrednio.',
      gdpr: 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi tej oferty zgodnie z polityką prywatności.'
    },
    contactForm: {
      title: 'Skontaktuj się z nami',
      subtitle: 'Masz pytania dotyczące nieruchomości? Napisz do nas wiadomość.',
      name: 'Imię i nazwisko',
      email: 'Adres e-mail',
      phone: 'Numer telefonu',
      message: 'Treść wiadomości',
      submit: 'Wyślij wiadomość',
      sending: 'Wysyłanie...',
      success: 'Dziękujemy! Twoja wiadomość została pomyślnie wysłana. Odpowiemy tak szybko, jak to możliwe.',
      error: 'Wystąpił błąd. Spróbuj ponownie później.',
      gdpr: 'Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z polityką prywatności.',
      detailsTitle: 'Kontakt bezpośredni',
      addressLabel: 'Adres nieruchomości',
      phoneLabel: 'Telefon',
      emailLabel: 'E-mail'
    },
    footer: {
      rights: 'Wszelkie prawa zastrzeżone.',
      imprint: 'Nota prawna / Impressum',
      privacy: 'Polityka prywatności',
      imprintText: 'Dane wg § 5 TMG:\n\nNazwa projektu: Baltic Prestige Trzęsacz\nReprezentant Właścicieli: Wspólnota Właścicieli ul. Letniskowa 4a\nE-Mail: d.marcinczak@web.de\nOdpowiedzialny za treść: Wspólnota Właścicieli ul. Letniskowa 4a\n\nUwaga: Niniejsza strona ma charakter wyłącznie informacyjny i prezentacyjny. Oferta nie stanowi oferty handlowej w rozumieniu Kodeksu Cywilnego.',
      privacyText: 'Polityka prywatności (RODO):\n\nBardzo poważnie traktujemy ochronę danych osobowych. Dane zebrane za pośrednictwem formularzy (imię, nazwisko, e-mail, telefon, kwota oferty) są wykorzystywane wyłącznie w celu kontaktu oraz negocjacji dotyczących sprzedaży nieruchomości. Dane nie są przekazywane podmiotom trzecim. Masz prawo do wglądu, poprawiania oraz usunięcia swoich danych w dowolnym momencie.',
      modalClose: 'Zamknij'
    }
  }
};
