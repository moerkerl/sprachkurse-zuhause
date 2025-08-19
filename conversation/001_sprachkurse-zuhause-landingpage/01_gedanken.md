# Gedanken zum Vorhaben: Sprachkurse Zuhause

## Analysierte Projekte

### Aktuelles Projekt (sprachkurse-zuhause)
**Status:** Grundgerüst vorhanden
- Next.js 15.4.7 mit TypeScript
- Tailwind CSS v4
- Standard Next.js App Router Struktur
- Nur Standard Template-Files vorhanden
- Bilder bereits verfügbar im /public/images/ Ordner (91 Lernbilder)

### Vorlagenprojekt (nachhilfeportal-zuerich)
**Hochwertige Struktur analysiert:**
- **Technische Basis:** Next.js 15.4.6, React 19, TypeScript, Tailwind CSS v4
- **Routing:** Route Groups: `(main)` für öffentliche Seiten, `(form)` für Formular-Flow
- **Komponenten:** LP*-Komponenten (Landing Page), konsistent strukturiert
- **Tracking:** Google Ads (AW-17483108923), HubSpot CRM Integration
- **Design:** Grün-basierte Farbpalette (#047857), animierte Unterstreichungen
- **Sicherheit:** CSRF-Protection, Server-side Validierung

## Bestehende Files im Vorlagenprojekt

### Seiten-Struktur:
- `/src/app/(main)/page.tsx` - Hauptlandingpage  
- `/src/app/(form)/lehrer-finden/page.tsx` - 5-Step Formular
- `/src/app/(form)/dankesseite/page.tsx` - Thank you page mit Conversion Tracking
- `/src/app/(main)/impressum/page.tsx` - Impressum (Bildungsinstitut Fokus AG)
- `/src/app/(main)/datenschutz/page.tsx` - Datenschutzerklärung

### Komponenten-Library:
- `LPHero.tsx` - Hero mit AnimatedText Integration, Button-Glow Effekt
- `LPBenefits.tsx` - 3-Spalten Benefits mit Icons
- `LPSection.tsx` - Wiederverwendbare Content-Section mit Bild
- `LPSteps.tsx` - 3-Schritte Prozess
- `LPTestimonial.tsx` - Kundenbewertungen
- `LPOffers.tsx` - Service-Angebote
- `AnimatedText.tsx` - Komplexe Text-Animation mit Unterstreichung
- `MultiStepForm.tsx` - 5-Step Lead-Capture mit Auto-Advance
- `GoogleAnalytics.tsx` - Google Ads Setup
- `ConversionTracker.tsx` - Dankesseite Conversion

### Backend Integration:
- `/src/lib/hubspotService.ts` - HubSpot CRM API (Singleton-Pattern)
- `/src/lib/tracking.ts` - UTM/GCLID Parameter Management
- `/src/hooks/useCSRF.ts` - CSRF Token Management
- `/src/app/api/submit-form/route.ts` - Form Submission mit HubSpot
- `/src/app/api/csrf-token/route.ts` - CSRF Token Generation

## Integration ins bestehende Projekt

### Was bereits existiert:
- ✅ Next.js Grundgerüst
- ✅ TypeScript Konfiguration  
- ✅ Tailwind CSS Setup
- ✅ App Router Struktur
- ✅ Bildmaterial im /public/images/

### Was integriert werden muss:
- **Seiten:** Neue Seiten-Struktur mit Route Groups
- **Komponenten:** Komplette LP*-Komponenten-Library
- **Backend:** API Routes, HubSpot Service, Tracking
- **Styling:** Brand-angepasste Farben und Design
- **Konfiguration:** Environment Variables, neue Dependencies

## Designkonzept für "Sprachkurse Zuhause"

### Farbschema (adaptiert von Vorlage):
- **Primary:** #047857 (Grün beibehalten - universell für Bildung)
- **Hover:** #065f46
- **Akzente:** Passend zu Sprachkursen (evtl. internationale Farben)

### Content-Strategie:
- **Hero:** "Entdecken Sie erstklassige Sprachlehrer" (statt Tutoren)
- **Benefits:** Sprachkurs-spezifisch anpassen
- **Problem:** "Angst, sprachlich abgehängt zu werden?"
- **Lösung:** Sprach-Coaching statt Nachhilfe
- **Angebote:** Sprachen statt Fächer

### Visual Identity:
- AnimatedText für Hauptbegriffe beibehalten
- Icons angepasst auf Sprachen/Kommunikation
- Gleiche hochwertige Struktur, neue Inhalte

## Technische Umsetzung

### Dependencies die hinzugefügt werden müssen:
```json
{
  "@types/cookie": "^0.6.0",
  "cookie": "^1.0.2"
}
```

### Environment Variables:
- `HUBSPOT_PRIVATE_APP_TOKEN` für Lead-Management
- Google Ads Tracking ID: `AW-16937882209`
- Conversion Label: `6V7oCNbRtYkbEOGkzow_`

### Dateien die erstellt werden müssen:
- Komplette `/src` Ordner-Struktur
- Alle LP* Komponenten
- API Routes
- Hook und Utility Libraries

## Qualitätssicherung

Das Vorlagenprojekt zeigt hohe Code-Qualität:
- TypeScript Interfaces für alle Daten-Strukturen
- Error Handling in API Routes
- CSRF Protection
- Responsive Design
- Accessibility Features
- Performance Optimierungen (Image optimization, Static generation)

Diese Standards müssen beibehalten werden.