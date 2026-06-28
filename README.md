# Baltic Prestige Trzęsacz

Eine exklusive, zweisprachige (Deutsch / Polnisch) Immobilien-Präsentationswebseite für ein Premium-Feriendomizil an der polnischen Ostseeküste in **Trzęsacz, ul. Letniskowa 4a**.

Entwickelt mit **Next.js 15 (App Router)**, **TypeScript** und edlem, handgefertigtem **Vanilla CSS** (Farbwelt: Sand, Weiß, Dunkelblau, Gold).

---

## 🌟 Features

- **Zweisprachigkeit (i18n):** Vollständige Unterstützung von Deutsch und Polnisch. Dynamische Umschaltung ohne spürbare Ladezeiten.
- **Atmosphärische Hero-Sektion:** Parallax-ähnlicher Zoom, einladendes Widescreen-Bild und klare Call-to-Actions (Exposé, Angebot abgeben, Kontakt).
- **Interaktive Bildergalerie:** Hochauflösende AI-generierte Premium-Bilder (Villa, Innenräume, Strand, Luftaufnahmen) mit einer maßgeschneiderten, tastatursteuerbaren Vollbild-Lightbox.
- **Exposé-Modal:** Detaillierte Spezifikationen und Merkmale der Immobilie, direkt als Popup aufrufbar, ohne die Seite zu verlassen.
- **Interaktiver Standortplan:** Responsive Karten-Integration (Google Maps Embed) für die genaue Adresse `ul. Letniskowa 4a, Trzęsacz, Polen`.
- **Zwei edle Formulare (DSGVO-konform):**
  - **Angebot abgeben:** Ermöglicht Kaufinteressenten die Abgabe eines unverbindlichen Gebots (in PLN).
  - **Kontakt aufnehmen:** Für allgemeine Fragen und Besichtigungstermine.
- **API E-Mail-Versand:** Vorbereitung für echten SMTP-Versand (über `nodemailer`) mit voll funktionsfähigem Simulator-Fallback für lokale Tests.
- **Modernste Typografie:** `Playfair Display` für elegante Serif-Überschriften und `Inter` für hohe Lesbarkeit des Fließtexts.
- **100 % responsive & SEO-optimiert:** Perfekte Darstellung auf Smartphones, Tablets und Desktops sowie zweisprachig ausgerichtete Metadaten.

---

## 🛠️ Technologien

- **Framework:** Next.js (App Router, React 19)
- **Sprache:** TypeScript
- **Styling:** Vanilla CSS (in `src/app/globals.css` mit globalen CSS-Variablen)
- **Icons:** Lucide React
- **E-Mail:** Nodemailer

---

## 🚀 Installation & Lokaler Start

### 1. Repository klonen oder in das Verzeichnis wechseln:
```bash
cd /home/irek/Develop/Trzesacz
```

### 2. Abhängigkeiten installieren:
```bash
npm install
```

### 3. Entwicklungsserver starten:
```bash
npm run dev
```
Die Seite ist nun unter [http://localhost:3000](http://localhost:3000) erreichbar.

### 4. Produktions-Build erstellen & starten (zum Testen):
```bash
npm run build
npm run start
```

---

## 📧 E-Mail-Versand konfigurieren (SMTP)

Um die Formulare ("Angebot abgeben" & "Kontakt") mit einem echten E-Mail-Postfach zu verknüpfen, erstellen Sie eine `.env.local` Datei im Hauptverzeichnis und tragen Sie Ihre SMTP-Daten ein:

```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=465
SMTP_USER=your-email-address@domain.com
SMTP_PASSWORD=your-secure-password
SMTP_FROM=Baltic Prestige <info@baltic-prestige-trzesacz.pl>
SMTP_TO=owner-email@domain.com
```

*Hinweis:* Wenn keine Umgebungsvariablen definiert sind, läuft die Webseite im **Simulator-Modus**. Gebotsabgaben und Kontaktanfragen werden dann einfach im Terminal-Log des Next.js-Servers ausgegeben, sodass Sie die Formulare auch ohne E-Mail-Server lokal testen können.

---

## 📂 Ordnerstruktur

```text
├── public/                 # Statische Assets
│   └── images/             # Generierte Premium-Demonstrationsbilder
├── src/
│   └── app/
│       ├── api/
│       │   └── send-email/
│       │       └── route.ts  # API-Endpunkt für den SMTP-E-Mail-Versand
│       ├── globals.css     # Kern-Design-System & Responsive Styling
│       ├── layout.tsx      # Seitenstruktur und Google Fonts Einbindung
│       ├── page.tsx        # Haupt-Landingpage (Zweisprachigkeit & interaktive Elemente)
│       └── translations.ts # Übersetzungs-Wörterbuch (Deutsch/Polnisch)
├── README.md               # Diese Dokumentation
├── package.json
└── tsconfig.json
```
