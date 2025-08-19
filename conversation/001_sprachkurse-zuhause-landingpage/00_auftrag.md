# Auftrag: Sprachkurse Zuhause Landingpage

## Überblick
Erstellung einer neuen Landingpage für "Sprachkurse Zuhause" (URL: sprachkurse-zuhause.ch) basierend auf der Vorlage des "Nachhilfeportal Zürich" (nachhilfeportal.zuerich.ch).

## Neue Website-Struktur
**Seiten:**
- Home Page (Landing Page nach Vorlage)
- Multistep Formular (identisch zur Vorlage)
- Dankesseite
- Impressum
- Datenschutz

## Funktionalitäten
- Lead to Hubspot senden (gleich wie Vorlage)
- Conversion Tracking für Google Ads
- Google Analytics Integration

## Google Ads Tracking Details
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16937882209"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16937882209');
</script>

<!-- Event snippet für Dankesseite conversion -->
<script>
  gtag('event', 'conversion', {'send_to': 'AW-16937882209/6V7oCNbRtYkbEOGkzow_'});
</script>
```

## Design-Vorgaben
- **Orientierung an Vorlage:** Hero-Bereich mit klarem roten Faden beibehalten
- **Unterstreichungseffekt:** Wichtige Begriffe in gleicher Farbe wie Call-to-Action unterstreichen
- **Sections-Struktur:** 
  1. Hero mit Icons und drei Punkten
  2. Problem-Section ("Angst den Anschluss zu verlieren")  
  3. Lösung-Section
- **Bilder:** Verwende vorhandene Bilder aus /public/images/
- **Icons:** Schöne Icons für visuellen Anreiz, ohne abzulenken
- **Konsistentes Design:** Passend zum Brand "Sprachkurse Zuhause"

## Wichtige Constraints
- **Keine neuen Infos erfinden** - nur bestehende Infos von der Vorlage verwenden
- **Stark an Vorlage orientieren** - besonders Impressum, Datenschutz, Dankesseite
- **Brand-Konsistenz:** Alle Inhalte für Sprachkurse anpassen, nicht Nachhilfe

## Hintergrund
- Brand "Sprachkurse Zuhause" gehört zur Bildungsinstitut Fokus AG
- Hauptbrand: "Fokus Nachhilfe" - schweizweite Nachhilfe zuhause für alle Altersgruppen