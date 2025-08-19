# Lösungsplan: Sprachkurse Zuhause Implementation

## Zu erstellende Files

### 1. Ordnerstruktur & Dependencies
- `package.json` - Dependencies ergänzen (@types/cookie, cookie)
- `src/app/layout.tsx` - Root Layout mit Google Analytics anpassen
- `src/app/globals.css` - Tailwind Setup
- `src/app/icon.tsx` - Favicon Component

### 2. Seiten (Route Groups)
**Hauptseiten:**
- `src/app/(main)/layout.tsx` - Layout für öffentliche Seiten
- `src/app/(main)/page.tsx` - Landing Page (adaptiert von Vorlage)
- `src/app/(main)/impressum/page.tsx` - Impressum (übernehmen & anpassen)
- `src/app/(main)/datenschutz/page.tsx` - Datenschutz (übernehmen & anpassen)

**Formular-Flow:**
- `src/app/(form)/layout.tsx` - Layout für Formular-Seiten
- `src/app/(form)/sprachen-finden/page.tsx` - Multistep Form (neu: Sprachen statt Lehrer)
- `src/app/(form)/dankesseite/page.tsx` - Thank You Page mit neuem Conversion Tracking

### 3. API Routes
- `src/app/api/csrf-token/route.ts` - CSRF Token Generation
- `src/app/api/submit-form/route.ts` - Form Submission mit HubSpot Integration

### 4. Components (LP* Serie)
**Landing Page Components:**
- `src/components/LPHero.tsx` - Hero Section mit AnimatedText
- `src/components/LPBenefits.tsx` - Benefits für Sprachkurse
- `src/components/LPSection.tsx` - Wiederverwendbare Content-Section  
- `src/components/LPSteps.tsx` - 3-Schritte Prozess
- `src/components/LPTestimonial.tsx` - Kundenbewertungen
- `src/components/LPOffers.tsx` - Sprach-Angebote

**Interaktive Components:**
- `src/components/AnimatedText.tsx` - Text-Animation mit Unterstreichung
- `src/components/MultiStepForm.tsx` - 5-Step Lead-Capture (Sprachen-adaptiert)

**Tracking Components:**
- `src/components/GoogleAnalytics.tsx` - Google Ads Setup (neue ID: AW-16937882209)
- `src/components/ConversionTracker.tsx` - Conversion Tracking (neuer Label: 6V7oCNbRtYkbEOGkzow_)

### 5. Libraries & Services
**Backend Services:**
- `src/lib/hubspotService.ts` - HubSpot CRM Integration (Sprachkurs-Felder)
- `src/lib/tracking.ts` - UTM/GCLID Parameter Management
- `src/lib/csrf.ts` - CSRF Security Implementation

**Hooks:**
- `src/hooks/useCSRF.ts` - CSRF Token Management

**Types:**
- `src/types/gtag.d.ts` - Google Analytics Typen

### 6. Konfiguration
- `.env.local` - Environment Variables Setup
- `next.config.ts` - Next.js Konfiguration prüfen

## Potentiell betroffene Files

### Bestehende Files die angepasst werden müssen:
- `src/app/layout.tsx` - Muss Google Analytics integrieren
- `src/app/page.tsx` - Wird durch neue Landing Page ersetzt
- `src/app/globals.css` - Tailwind Styles erweitern
- `package.json` - Dependencies hinzufügen
- `next.config.ts` - Falls Konfiguration nötig
- `tsconfig.json` - Pfad-Aliases prüfen

### Files die beobachtet werden müssen:
- `tailwind.config.js` - Falls Custom Colors/Utilities nötig
- `postcss.config.mjs` - Tailwind Setup
- `eslint.config.mjs` - TypeScript Linting Rules
- `README.md` - Projekt-Dokumentation
- `public/*` - Bestehende Assets (SVGs, Images)

## Content-Adaptierungen

### Von Nachhilfe zu Sprachkursen:
- **"Tutoren"** → **"Sprachlehrer"**  
- **"Nachhilfe"** → **"Sprachkurse"**
- **"Fächer"** → **"Sprachen"**
- **"Schüler"** → **"Lernende"**
- **"Zürich"** → **"Schweiz"** (breiter gefasst)

### Formular-Anpassungen:
- **Schritt 2:** Sprach-Level statt Klasse
- **Schritt 3:** Zielsprache statt Fach
- **Beispiel-Sprachen:** Englisch, Französisch, Deutsch, Italienisch, Spanisch, etc.

### HubSpot-Felder anpassen:
- `was_fur_nachhilfe_benotigt` → `welche_sprache_benotigt`
- `schulstufe_kind` → `sprachniveau`
- Neue Custom Properties für Sprachkurse

### Google Ads Integration:
- Neue Tracking ID: `AW-16937882209` 
- Neuer Conversion Label: `6V7oCNbRtYkbEOGkzow_`
- UTM Parameter für Sprachkurs-Kampagnen

## Umsetzungsreihenfolge

1. **Setup:** Dependencies & Grundstruktur
2. **Components:** LP* Components übernehmen & anpassen  
3. **Seiten:** Landing Page & statische Seiten
4. **Formular:** MultiStep Form für Sprachen
5. **Backend:** API Routes & HubSpot Integration
6. **Tracking:** Google Ads & Conversion Setup
7. **Content:** Alle Texte auf Sprachkurse anpassen
8. **Testing:** Formular-Funktionalität & Tracking

## Design-Konsistenz sicherstellen

- Gleiche Animation-Effekte wie Vorlage
- Identische Button-Styles und Hover-Effekte
- Responsive Breakpoints beibehalten
- Icon-basiertes Design (minimaler Bilder-Einsatz)
- Hochwertige Typografie und Spacing