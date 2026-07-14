# Komponenten & Designsystem — Schritt 5 der visuellen Identitätsentwicklung

Status: **Komponentensystem-Strategie final freigegeben (12.07.2026).** Noch keine
konkreten UI-Designs, keine Figma-Dateien, keine Pixelwerte, keine Icons, kein Logo.
Basis: `Kreative_Markenrichtung.md`, `Design_Checkliste.md`, `Farben_Typografie.md`,
`Bildsprache.md`, `Formen_Grafiksystem.md`.

---

## Gewählte Architektur: Familienbasiertes System mit gemeinsamen Tokens

Geprüft gegen zwei Alternativen und verworfen:
- **Strikte Atomar-Hierarchie:** maximale Konsistenz, aber unvereinbar mit dem in
  Schritt 4 beschlossenen Breakout-Budget (jede Ausnahme wäre ein Systembruch).
- **Kontextadaptives Zustandssystem:** höchste Flexibilität, aber verletzt den Kern von
  Konfliktregel 1 (nur die Komposition darf variieren, nie die Funktionslogik selbst).

**Gewählt:** Die 8 Komponentenfamilien sind die primäre Organisationseinheit, teilen
sich aber verbindlich dieselben Tokens aus Schritt 1–4 (Farbrollen, Typografie-Ebenen,
Rasterlogik, Rundungslogik, Weißraum-Rhythmus). Keine Familie definiert eigene Farb-,
Typografie- oder Rasterregeln. Einzige der drei geprüften Architekturen, die das
Breakout-Budget und den Rhythmus sauber tragen kann — direkte Fortsetzung des
„Atmenden Rastersystems" auf Komponentenebene. Auch strukturell differenzierend: keiner
der drei Wettbewerber (schoenegge.io, ONE AND O, Exportarts) zeigt Hinweise auf eine
echte Komponentenarchitektur — alle drei wirken wie bespoke Einzelseiten-Layouts.

### Grundprinzip: Systemhierarchie ≠ visuelle Priorität
Jede Familie besitzt eine **feste Architekturrolle** (primär/sekundär/unterstützend),
die sich nicht je nach Seite ändert. Getrennt davon darf die **visuelle Priorität**
innerhalb eines konkreten Layouts situativ variieren (z. B. ein Testimonial darf auf
einer bestimmten Seite visuell dominant erscheinen), ohne dass sich dadurch die
Architekturrolle der Familie selbst verschiebt. Diese Trennung verhindert, dass
Systemarchitektur und Layout-Entscheidungen miteinander vermischt werden.

---

## Die acht Komponentenfamilien

| Familie | Zweck | Zustände | Architekturrolle | Breakout | Rhythmus-Rolle | Bewegung |
|---|---|---|---|---|---|---|
| **Navigation** | Orientierung | Standard, Aktiv, Hover, Mobil, Scroll, Reduziert | Primär | **Niemals** — Konsistenz schlägt jede Ausnahme (UX-Prinzip 1) | Orientierung (konstant) | Eingeschränkt (nur Zustandsübergänge) |
| **Hero** | Erster Eindruck, Fokuspunkt | Standard, Seitentyp-Varianten, Mobil | Primär | Zulässig **nur, wenn der Hero den primären Fokusmoment der jeweiligen Seite bildet** und das Breakout-Budget es zulässt — nicht automatisch bei jedem Hero | Aufmerksamkeit | Animierbar mit Funktion, nie verzögernd |
| **Content** | Wissensvermittlung | Standard, mit/ohne Bild, Aufklapp-Vertiefung | Sekundär | Grundsätzlich nein | Ruhe | Überwiegend statisch |
| **Prozess** | Ablaufmanagement | Standard, Aktiver Schritt, Abgeschlossen/Zukünftig, Mobil | Sekundär | Begrenzt (strukturell, nicht bildlich) | Übergang | Gut geeignet für funktionale Bewegung |
| **Vertrauen** | Beweisführung, Founder-Präsenz | Standard, mit Attribution, anonymisiert, Founder-/Projekt-Variante | **Sekundäre Komponentenfamilie mit situativ hoher visueller Priorität** | Erlaubt (Founder-/Testimonial-Momente) | Aufmerksamkeit (punktuell) | Eingeschränkt (Fokuslenkung) |
| **CTA** | Aktive Führung | Standard, Hover/Fokus, Aktiv, Deaktiviert | Primär | Selten/kontrolliert (Farbe statt Struktur) | Aufmerksamkeit + Orientierung | Dezent (Hover-Feedback) |
| **Formulare** | Kontaktaufnahme | Standard, Fokus, Fehler, Erfolg, Mobil | Primär (im Kontaktkontext) | Niemals | Übergang + Orientierung | Nur funktionales Feedback |
| **Footer** | Abschluss, Vollständigkeit | Standard | Unterstützend | **Niemals.** Der Abschlussmoment entsteht über Inhalt, Rhythmus und Farbe (z. B. die „gedeckte Tiefe"-Fläche aus Schritt 1) — nicht über eine Rasterausnahme. | Ruhe | Überwiegend statisch |

**Resultierende saubere Regel:** Navigation und Footer nutzen niemals Breakout.
Breakouts finden ausschließlich innerhalb des eigentlichen Seiteninhalts statt (Hero,
Vertrauen, begrenzt Prozess) — die beiden konstantesten Bereiche der Website (Einstieg
in die Struktur, Abschluss der Struktur) bleiben strukturell vollständig unveränderlich.

**Klarstellung zur Footer-Farbfläche:** Die in Schritt 1 genannte Option, den Footer mit
der „gedeckten Tiefe"-Farbfläche zu gestalten, bleibt bestehen und steht nicht im
Widerspruch zur neuen Breakout-Regel — Farbanwendung (Schritt 1) und strukturelle
Rasterausnahme (Schritt 4, Breakout) sind zwei unterschiedliche Mechanismen. Der Footer
darf farblich abgesetzt sein, ohne strukturell aus dem Raster auszubrechen.

**Warum diese Hierarchie:** Primäre Familien (Navigation, Hero, CTA, Formulare) tragen
die Funktionen, ohne die die Website ihre in `Website_Ziele.md` festgelegten Ziele nicht
erfüllen kann. Sekundäre Familien (Content, Prozess, Vertrauen) liefern
Verständlichkeits- und Beweisebene. Die unterstützende Familie (Footer) sichert
Vollständigkeit, ist aber nicht handlungsentscheidend — die Einteilung folgt der
Entscheidungshierarchie der Brand Bible (Vertrauen > Verständlichkeit > Nutzen > Klarheit …).

---

## Modularität
- **Wiederverwendbarkeit:** sehr hoch (Navigation, CTA, Content, Footer), mittel (Hero,
  Vertrauen — mehrere Varianten nötig).
- **Erweiterbarkeit:** hoch — neue Familien lassen sich nach demselben Schema ergänzen.
- **Wartbarkeit:** hoch bei konsequenter Token-Nutzung, mittel bei den
  breakout-fähigen Familien (zusätzliche Dokumentation nötig).
- **Konsistenz:** hoch, solange die gemeinsamen Tokens für alle Familien verbindlich
  bleiben, unabhängig von Breakout-Nutzung.
- **Dokumentierbarkeit:** hoch — jede Familie folgt demselben Beschreibungsschema.

## Negativtest
Nicht empfehlen ohne Kapazität, das System nach Fertigstellung tatsächlich zu
dokumentieren (z. B. in Figma-Komponenten oder Code) — ohne Dokumentation verwischt der
Unterschied zwischen geplanter Ausnahme und Wildwuchs.

## Zukunftssicherheit
Neue Familien lassen sich nach demselben Schema ergänzen, ohne bestehende zu verändern —
dieselbe Erweiterungslogik wie die Erweiterungsregel der Brand Bible.

---

## Abschlussprüfung (nach den drei Schärfungen)

- **Decision-Test:** bestanden — alle drei Änderungen beeinflussen konkrete spätere
  Entscheidungen (wann ein Hero Breakout erhält, welche feste Architekturrolle Vertrauen
  hat, dass der Footer nie strukturell ausbricht).
- **Vereinbarkeit mit allen 8 Brand-Bible-Kategorien:** durch die Schärfungen gestärkt,
  nicht geschwächt — die Footer-Regel vertieft Design-Prinzip D (Konsistenz), die
  Hero-Regel vertieft Design-Checkliste Punkt 1 (ein dominanter Fokuspunkt, nur wenn
  tatsächlich zutreffend), die Vertrauen-Klärung vermeidet Mehrdeutigkeit gegenüber
  Konfliktregel 5 (Kunde bleibt Held, unabhängig von situativer visueller Dominanz der
  Vertrauens-Familie). Keine Kollision.
- **Konsistenz mit der kreativen Markenrichtung:** vollständig — „Struktur = Bühne"
  wird durch die beiden nie-Breakout-Familien (Navigation, Footer) noch eindeutiger
  verankert.
- **Konsistenz mit Breakout-Budget und Rhythmus:** gestärkt — Breakouts sind jetzt
  eindeutig auf den eigentlichen Seiteninhalt begrenzt, was die Budget-Dokumentation
  vereinfacht.
- **Keine neuen Widersprüche zwischen Systemhierarchie und visueller Priorität:**
  ausgeschlossen durch die explizite Trennung beider Konzepte (siehe Grundprinzip oben).

**Damit ist Schritt 5 final.**
