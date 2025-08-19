# Entwickler-Checkliste: Sprachkurse Zuhause

## Pre-Launch Prüfung

### 1. Environment Setup
- [ ] `.env.local` erstellt mit `HUBSPOT_PRIVATE_APP_TOKEN`
- [ ] `npm install` ausgeführt (Dependencies installiert)
- [ ] `npm run dev` startet ohne Fehler
- [ ] Port 3000 ist zugänglich

### 2. Landing Page Funktionalität
- [ ] Hero Animation funktioniert (AnimatedText + Button Glow)
- [ ] Alle CTA Buttons leiten zu `/sprachen-finden` weiter
- [ ] Responsive Design auf Mobile/Tablet/Desktop getestet
- [ ] Bilder laden korrekt aus `/public/images/`
- [ ] Scroll-Verhalten ist smooth

### 3. MultiStep Formular Test
- [ ] **Schritt 1:** Personenauswahl funktioniert + Auto-Advance
- [ ] **Schritt 2:** Sprachniveau Dropdown + Auto-Advance
- [ ] **Schritt 3:** Spracheingabe + Beispiel-Buttons funktionieren
- [ ] **Schritt 4:** PLZ Auto-Advance bei 4 Zeichen
- [ ] **Schritt 5:** Kontaktdaten Validierung (E-Mail Format)
- [ ] Progress Bar zeigt korrekte Prozente
- [ ] Zurück-Navigation funktioniert
- [ ] Fehler-Messages werden angezeigt

### 4. API Endpoints Testen
- [ ] `/api/csrf-token` - Returns Token + Sets Cookie
- [ ] `/api/submit-form` - CSRF Validierung funktioniert
- [ ] HubSpot Integration - Contact wird erstellt/aktualisiert
- [ ] Form Submission leitet zu `/dankesseite` weiter
- [ ] Error Handling bei HubSpot API Fehlern

### 5. Google Analytics & Tracking
- [ ] Google Tag lädt korrekt (AW-16937882209)
- [ ] UTM Parameter werden gespeichert
- [ ] Conversion Event auf Dankesseite fired
- [ ] Browser Konsole zeigt Tracking Logs
- [ ] GCLID wird korrekt gesetzt (falls vorhanden)

### 6. Statische Seiten
- [ ] `/impressum` lädt korrekt mit Sprachkurse-Branding
- [ ] `/datenschutz` lädt mit korrekten Informationen
- [ ] `/dankesseite` zeigt Success Animation
- [ ] Alle internen Links funktionieren

### 7. Performance & SEO
- [ ] Page Speed unter 3 Sekunden
- [ ] Meta Tags gesetzt (Title, Description)
- [ ] Favicon wird angezeigt
- [ ] Keine Console Errors
- [ ] No Layout Shift Issues

### 8. Cross-Browser Kompatibilität
- [ ] Chrome - Vollständig funktional
- [ ] Firefox - Vollständig funktional  
- [ ] Safari - Vollständig funktional
- [ ] Mobile Safari/Chrome - Touch-friendly

## Deployment Prüfung

### 9. Build Process
- [ ] `npm run build` ohne Errors
- [ ] `npm run start` funktioniert
- [ ] Alle Routes erreichbar in Production Build
- [ ] Static Generation funktioniert für Main Pages

### 10. Monitoring Setup
- [ ] HubSpot Kontakte werden korrekt erstellt
- [ ] Google Ads Conversion Tracking aktiv
- [ ] Error Logging für API Failures
- [ ] Form Submissions landen in HubSpot

## Go-Live Kriterien

### 11. Content Review
- [ ] Alle Texte überprüft und fehlerlos
- [ ] Telefonnummer und E-Mail korrekt
- [ ] Testimonials authentisch und relevant
- [ ] Call-to-Actions konsistent

### 12. Legal Compliance
- [ ] Impressum vollständig und aktuell
- [ ] Datenschutzerklärung rechtlich korrekt
- [ ] Cookie Consent (falls erforderlich)
- [ ] Tracking Disclosure implementiert

## Post-Launch Überwachung

### 13. Erste 24 Stunden
- [ ] Form Submissions funktionieren
- [ ] Google Ads Conversions werden getrackt
- [ ] HubSpot Kontakte kommen an
- [ ] Keine 404 Errors in Logs
- [ ] Page Speed bleibt stabil

### 14. Erste Woche
- [ ] Conversion Rate analysieren
- [ ] UTM Parameter Attribution prüfen
- [ ] User Journey Probleme identifizieren
- [ ] Mobile Performance optimieren (falls nötig)

---

**Kritische Blocker (Must-Fix vor Go-Live):**
- Formular funktioniert nicht
- Google Ads Tracking fehlt
- HubSpot Integration defekt
- Mobile nicht responsive
- API Endpoints nicht erreichbar