# Farbpalette — Phase 5 (Visuelle Umsetzung)

Status: **Schritt 5.1 (Farbfamilie) final freigegeben (12.07.2026).** Noch keine HEX-Werte,
noch keine konkreten Töne — Schritt 5.2 folgt separat. Basis: `LiftUp_Brand_Bible.md`,
`Kreative_Markenrichtung.md`, `Design_Verfassung.md`, `Farben_Typografie.md`, sowie die
Wettbewerbsanalysen `schoenegge_io.md`, `ONE_AND_O.md`, `Exportarts.md`.

---

## Schritt 5.1 — Konkrete Farbfamilie (Strukturentscheidung)

### 1. Bereits fest entschiedene Rahmenbedingungen (nicht mehr verhandelbar)
- Ebene 1 ist final: **warme Helligkeit als Fundament** (Farben_Typografie.md). Alle
  geprüften Richtungen teilen sich diese Basis.
- „Gedeckte Tiefe" bleibt eine optionale, kontrollierte Erweiterung für wenige
  bedeutungsstarke Momente (Founder-Sektion, Abschluss-CTA, Footer, Case-Study-Momente).
- Eine primäre Akzentrolle existiert; eine zweite Akzent-/Statusfarbe nur bei
  nachgewiesenem Bedarf (Design-Verfassung Grundprinzip 5).

### 2. Funktionale Rollen — kritische Präzisierung
Komponenten_Designsystem definiert für die Familie „Formulare" nur die Zustände
*Standard, Fokus, Fehler, Erfolg, Mobil*. **Erfolg und Fehler** sind damit begründete
funktionale Rollen. **Warning und Info sind aktuell nicht durch eine bestehende
Entscheidung gedeckt** und werden nicht eigenständig entworfen, sondern als
„erweiterbares System" (Design-Verfassung Abschnitt 3C) vorgemerkt — vor einer neuen
Farbe wird zuerst die bereits dokumentierte Fallback-Logik geprüft (Tonwerte, Gewicht,
Icons, Opazität).

### 3. Drei geprüfte Farbfamilien (Kurzprofil)

**Richtung A — „Erdige Wärme" (gedeckter Terrakotta-/Ocker-Akzent):** sehr hohe Wärme,
aber direkte Kollision mit dem dokumentierten Design-Risiko 2 (Manufaktur-Ästhetik-Falle)
und mit der Abgrenzung zu Klischees (Kreative Markenrichtung Punkt 15, „nostalgische
Handwerksästhetik"). Trendrisiko mittel-hoch. **Ausgeschieden.**

**Richtung C — „Aktive Wärme" (gedeckter Bernstein-/Kupfer-Akzent):** sehr hohe
CTA-Sichtbarkeit „von Natur aus", aber größte tonale Nähe zur explizit abzugrenzenden
Exportarts-Tonalität (siehe `Exportarts.md`: „superlativische, hype-artige Sprache… wird
bewusst NICHT übernommen"). Grenzwertig gegenüber Kat. 8 Punkt 2 (keine künstliche
Dringlichkeit). Trendrisiko am höchsten. **Ausgeschieden.**

**Richtung B — „Gedeckte Klarheit" (gedeckter Petrol-/warmer Tiefblaugrün-Akzent) —
gewählt:** Vertrauen hoch, Kompetenz hoch, Ruhe hoch, Premium hoch; Wärme kommt bewusst
primär aus Bildsprache/Grundton statt aus dem Akzent selbst (konsistent mit Kreativer
Markenrichtung Punkt 6). Bietet grundsätzlich günstige Voraussetzungen für
WCAG-AA-Kontraste — konkrete Erfüllung wird bei der Tonauswahl (Schritt 5.2) bestätigt.
Innerhalb der analysierten Wettbewerber besetzt aktuell keiner diese Farbfamilie als
primäre Markenfarbe (Momentaufnahme, keine grundsätzliche Aussage über die Kategorie) —
im direkten Vergleich entsteht dadurch die deutlichste visuelle Differenzierung: gegenüber
schoenegge.io (kein Schwarz/Weiß/Gold), gegenüber ONE AND O (hat überhaupt eine
Akzentfarbe — ONE AND Os eigene Analyse listet fehlende Akzentfarbe explizit als zu
vermeidende Schwäche), gegenüber Exportarts (ruhig statt bunt/energiegeladen) und
gegenüber typischen SaaS-Agenturen (gedeckt/warmstichig statt kalt-gesättigt). Gedeckte
Petrol-/Tannentöne gehören zu den langfristig stabilen Vertrauensfarbfamilien und
unterliegen deutlich geringeren Trendschwankungen als stark gesättigte Signalfarben.

### 4. Empfehlung

**Richtung B — „Gedeckte Klarheit" — final freigegeben als Farbfamilie.**

Führende Regeln: Design-Verfassung Grundprinzip 4 (Vertrauen/aktive Führung) und
Grundprinzip 5 (keine unnötige Komplexität), Design-Risiko 2 (Manufaktur-Falle), Brand
Bible Design-Prinzip C (Farbe folgt Positionierung vor Konvention), Entscheidungshierarchie
(Vertrauen vor Ästhetik/Originalität).

Bewusst akzeptiert: geringere unmittelbare „gefühlte" Wärme im Akzent selbst (kompensiert
durch Bildsprache); CTA-Auffindbarkeit muss über Kontrast/Platzierung sichergestellt
werden, nicht über Signalfarbigkeit.

Ausgeschlossen: Manufaktur-Ästhetik-Falle, Nähe zur Exportarts-Hype-Tonalität.

**Reichweite dieser Entscheidung:** Ausschließlich die Farbfamilie ist festgelegt. HEX-Werte,
Helligkeit, Sättigung, Tonwertabstufungen und die konkrete Accessibility-Prüfung folgen in
Schritt 5.2.

### Abschließende Prüfung
- **Decision-Test:** bestanden.
- **Brand Bible (alle 8 Kategorien):** keine Kollision.
- **Design-Verfassung:** keine Kollision mit den fünf Grundprinzipien oder den fünf
  Designrisiken.
- **Kreative Markenrichtung:** Punkt 6 und Punkt 15 eingehalten.
- **Design-Checkliste:** Punkt 3 und Punkt 8 bleiben erfüllbar.
- **Keine Vorwegnahme konkreter HEX-Werte / keine Vermischung von Strategie und
  Umsetzung:** bestätigt.

**Damit ist Schritt 5.1 final.**

---

## Schritt 5.2 — Konkrete HEX-Palette & Design Tokens

Status: **Final freigegeben (12.07.2026).** Basis: Schritt 5.1 (Farbfamilie „Gedeckte
Klarheit"), `LiftUp_Brand_Bible.md`, `Design_Verfassung.md`, `Komponenten_Designsystem.md`.
Alle WCAG-Kontrastwerte wurden exakt nach der WCAG-2.1-Formel (relative Luminanz)
berechnet, nicht geschätzt.

### Gewählte Palette: „Warmes Blaugrau"

**Gemeinsame Basis:**

| Token | HEX | Rolle |
|---|---|---|
| Background Primary | `#FAF7F2` | warmes Off-White, Grundfläche |
| Background Secondary | `#F3EEE6` | dezente Sektionsabgrenzung |
| Surface | `#FEFCF9` | Cards/Panels |
| Surface Elevated | `#F6F1EA` | angehobene Flächen (Modals, Dropdowns) |
| Border | `#E4DCD0` | Kanten, Inputs |
| Divider | `#ECE5DA` | Trennlinien |
| Text Disabled | `#A69E92` | inaktive Elemente (WCAG-Ausnahme) |
| Overlay | `rgba(28,25,21,0.55)` | Wahrnehmungssteuerung (siehe Rollenregeln) |

**Palette-spezifisch:**

| Token | HEX |
|---|---|
| Text Primary | `#2A2825` |
| Text Secondary | `#59564F` |
| Accent Primary | `#2E4756` |
| Accent Hover | `#243A47` |
| Accent Active | `#1C2B3B` |
| Success | `#3F6B4A` |
| Error | `#A13D2E` |
| Focus Ring | `#3E6C82` |
| Selection | `#D7E0E4` |
| Deep Surface | `#1F1E1C` |
| Text on Deep Surface | `#FAF7F2` (= Background Primary, wiederverwendet) |

### Rollenregeln für Status- und Funktionsfarben
- **Statusfarben (Success, Error):** Gehören nicht zur Markenidentität, sondern
  ausschließlich zur UI-Kommunikation. Sie dürfen deshalb niemals dieselbe visuelle
  Dominanz besitzen wie der primäre Markenakzent. Messbar bestätigt: Accent Primary
  erreicht 9,13:1 Kontrast zum Hintergrund, Success/Error liegen mit 5,76–6,10:1 deutlich
  darunter.
- **Focus Ring:** Existiert ausschließlich zur Tastaturbedienung und Accessibility gemäß
  WCAG und besitzt keinerlei Markenfunktion.
- **Overlay:** Gehört nicht zur Markenpalette, sondern ausschließlich zur
  Wahrnehmungssteuerung (Hintergrund beruhigen, Fokus auf Modals/Dialogs lenken).
- **Text on Deep Surface:** Notwendige technische Ergänzung — Text Primary erreicht auf
  Deep Surface nur 1,13:1 (WCAG-Fail) und darf dort niemals verwendet werden; stattdessen
  wird Background Primary als helle Schrift wiederverwendet (15,59:1).

### WCAG-Kontrastwerte (exakt berechnet)

| Prüfung | Wert | Ergebnis |
|---|---|---|
| Text Primary / Background | 13,75:1 | ✅ AA |
| Text Secondary / Background | 6,85:1 | ✅ AA |
| Accent Primary als Text / Background | 9,13:1 | ✅ AA |
| Weißer Button-Text / Accent Primary | 9,76:1 | ✅ AA |
| Success als Text / Background | 5,76:1 | ✅ AA |
| Error als Text / Background | 6,10:1 | ✅ AA |
| Text Primary / Deep Surface | 1,13:1 | ❌ (deshalb: Text on Deep Surface verwenden) |
| Text on Deep Surface / Deep Surface | 15,59:1 | ✅ AA |

### Warum Palette 3 statt der geprüften Alternativen (P1 „Ruhiges Petrol", P2 „Tiefes
Tannengrün")
Alle drei Kandidaten bestanden WCAG AA. Entscheidend war ein Kriterium jenseits reiner
Kontrastwerte: Nur bei P3 sind Markenakzent (Blaugrau) und Erfolgs-Zustand (Grün)
hue-eindeutig getrennt. Bei P1 und P2 liegt der Akzent selbst in der Grün-Familie — ein
Rollenkonflikt mit Design-Checkliste Punkt 8 (feste, eindeutige Farbrolle), zusätzlich bei
P2 verstärkt durch eine unbeabsichtigte Ökologie-Konnotation. **Die Empfehlung entsteht
nicht primär aus der Markenwirkung, sondern aus der höheren semantischen Eindeutigkeit
des gesamten Designsystems** — nicht „Blaugrau gefällt besser", sondern: nur bei P3 ist
das System objektiv eindeutiger, weil Markenakzent und Erfolgs-Zustand nicht verwechselbar
sind.

Bewusst akzeptiertes Risiko: größere Nähe zur allgemeinen „Blau = Tech"-Konvention —
akzeptiert, weil durch konsequent gedeckte, warme Ausführung beherrschbar und weil
Verständlichkeit/Rollenklarheit (Rang 2 der Brand-Bible-Hierarchie) höher steht als
Originalität (Rang 7).

**Reichweite dieser Entscheidung:** Feinjustierungen einzelner Werte dürfen ausschließlich
innerhalb der bereits festgelegten Farbfamilie erfolgen und dürfen keine semantische Rolle
verändern.

### Abschließende Prüfung
- **Decision-Test:** bestanden — jeder Token, inklusive Focus Ring und Overlay, hat eine
  explizit benannte Funktion.
- **Brand Bible:** keine Kollision in allen 8 Kategorien.
- **Design-Verfassung:** Grundprinzip 2 vollständig erfüllt (jede Farbe, nicht nur der
  Akzent, hat eine benannte Funktion); Grundprinzip 5 eingehalten (Warning/Info weiterhin
  nicht eingeführt).
- **Kreative Markenrichtung:** keine Kollision.
- **Design-Checkliste:** Punkt 8 ist der zentrale Differenzierungsfaktor der Empfehlung.
- **Komponenten-System:** Token-Schema kompatibel mit allen 8 Komponentenfamilien.
- **Semantische Rollentrennung:** vollständig — Markenfarbe, Statusfarben,
  Accessibility-Farbe (Focus Ring) und Wahrnehmungssteuerung (Overlay) sind vier getrennte,
  explizit begründete Kategorien.
- **Keine neuen Markenfarben, keine Vermischung mit UI-Statusfarben:** bestätigt.
- **Vollständige Token-Konsistenz:** bestätigt.

**Damit ist Schritt 5.2 final.**
