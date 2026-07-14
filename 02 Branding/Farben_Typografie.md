# Farben & Typografie

Status: Farbstrategie und typografische Strategie final freigegeben (12.07.2026) — noch
keine konkreten Farbtöne, HEX-Werte, Schriftfamilien oder Paletten. Basis:
`Kreative_Markenrichtung.md`, `Design_Checkliste.md`.

## Farbwelt

**Status: Farbstrategie final freigegeben (12.07.2026).** Konkrete Farbtöne/HEX-Werte noch
offen (folgen in einem späteren Teilschritt, sobald Typografie und Bildsprache feststehen).

### Zwei Entscheidungsebenen
- **Ebene 1 — Atmosphärische Grundwelt:** warme Helligkeit / gedeckte Tiefe / kontrollierte
  Kombination.
- **Ebene 2 — Funktionales Rollenmodell:** eine primäre Akzentfarbe / optional eine
  zusätzliche Status-Informationsfarbe, aber nur bei nachgewiesenem Bedarf.

### Ebene 1: Warme Helligkeit als Fundament
„Warme Helligkeit bildet das Fundament der LiftUp-Farbwelt." Begründung: hohe
Zugänglichkeit für nicht-technische Geschäftsführer, sehr gute Lesbarkeit, aktive Klarheit,
geringe Nähe zu kalter SaaS-Ästhetik, geringeres Umsetzungs- und Wartungsrisiko.

**Gedeckte Tiefe als kontrollierte Erweiterung (nicht Pflicht):** Eine einzelne tiefe,
warme Kontrastfläche *innerhalb derselben Farbwelt* wird für wenige bedeutungsstarke
Momente geprüft (z. B. Founder-Sektion, Abschluss-CTA, Footer, besondere
Case-Study-Momente). Bedingungen: keine wechselnde Dark-/Light-Ästhetik ohne klare
Funktion, keine zweite visuelle Identität, tiefe Flächen bleiben eine definierte Ausnahme
innerhalb desselben Systems. Wird konkret in Schritt 4/5 (Formen-/Grafiksystem,
Designsystem) geprüft, nicht bereits final entschieden.

### Ebene 2: Funktionales Rollenmodell
Zum Start existiert eine primäre Akzentrolle (Handlungsfarbe für CTAs).

**Bedarfsschwelle für eine zweite Statusfarbe:** „Eine zusätzliche Status-/
Informationsfarbe wird nur eingeführt, wenn sie eine reale Verständlichkeitslücke löst,
die mit der bestehenden Farbrolle und anderen visuellen Mitteln nicht ausreichend gelöst
werden kann." Vor einer zweiten Farbe werden zuerst geprüft: Tonwerte derselben
Akzentfarbe, Typografiegewicht, Icons, Nummerierung, Konturen, Flächen, Opazität,
Bewegung.

### Dark Mode — Klarstellung
Unterschieden wird zwischen einer Farbwelt, die auch auf einzelnen dunklen Flächen
funktioniert (Teil der „gedeckten Tiefe"-Erweiterung oben), und einem vollständigen,
nutzerumschaltbaren Dark Mode. Ein vollständiger Dark Mode ist aktuell keine festgelegte
Anforderung und wird die Farbauswahl nicht unnötig komplex machen — Prüfung erst bei
echtem Nutzer-/Produktbedarf.

### Vorläufige Gesamtempfehlung
„LiftUp verfolgt eine helle, warm-neutrale Grundwelt mit hoher Klarheit und
Zugänglichkeit. Eine kontrollierte, tiefe Kontrastfläche kann für wenige bedeutungsstarke
Momente eingesetzt werden. Zum Start existiert eine primäre Akzentrolle. Eine
zusätzliche Statusfarbe wird erst nach Entwicklung der Wireframes und Komponenten auf
echten Bedarf geprüft."

### Anforderungen (weiterhin offen)
- Kontrast/Barrierefreiheit (WCAG) — abhängig von Ebene-1-Wahl unterschiedlich
  anspruchsvoll, Prüfung folgt mit konkreten Farbtönen.
- Dark Mode — kein Launch-Erfordernis (siehe oben).
- Farbschwächen — bei nur einer primären Akzentfarbe unkritisch, wird bei Einführung
  einer zweiten Statusfarbe erneut geprüft.
- Print/Social/Präsentationen — strategisch unproblematisch für eine helle Grundwelt,
  Detailprüfung mit konkreten Farbtönen.

## Typografie

**Status: Typografische Strategie final freigegeben (12.07.2026).** Konkrete
Schriftfamilien noch offen. Basis: `Kreative_Markenrichtung.md`, `Design_Checkliste.md`.

### Zwei Entscheidungsebenen
- **Ebene 1 — Typografische Strategie:** reine Wirkungsfrage.
- **Ebene 2 — Systemarchitektur:** rein technische/gestalterische Struktur, unabhängig
  von Ebene 1 zu betrachten.

### Ebene 1: Typografische Strategie — Kontrollierte Wärme
Gewählt aus drei geprüften Optionen (Neutrale Präzision / Kontrollierte Wärme /
Editoriale Eleganz). Begründung: einzige Strategie, die sowohl die strukturelle (A) als
auch die menschliche (B) Hälfte der Kreativrichtung bedient, ohne in Tech-Kälte (bei
reiner Neutraler Präzision) oder in die explizit ausgeschlossene stille
Editorial-Zurückhaltung (bei Editoriale Eleganz) zu kippen. Die Struktur bleibt neutral;
an wenigen definierten Stellen (Headlines, Zitate, Founder-Statements) wird bewusst
wärmerer Charakter eingesetzt. Konfliktregel 3 bleibt bindend: charaktervolle Elemente
niemals in Fließtext, Navigation oder Prozessdarstellung.

### Ebene 2: Systemarchitektur — zentrale Vorfrage vor der Architekturwahl
„Kann eine einzige Formsprache — über charakterreiche statische Schnitte oder
Variable-Font-Achsen — die gewünschte Charakterspanne zwischen Struktur und
kontrollierter Wärme überhaupt überzeugend tragen?"

Diese gestalterische Frage steht über der technischen Architektur und wird erst bei der
konkreten Schriftauswahl (nächster Teilschritt) endgültig beantwortet.

**Geprüfte Architekturen:**
1. **Ein-Schrift-System (schlichte Schnitte):** rein funktional, Hierarchie nur über
   Gewicht/Größe. Bester Fit für Neutrale Präzision, begrenzter Ausdrucksraum für
   Kontrollierte Wärme.
2. **Ein-Schrift-System mit charakterreichen Schnitten:** eine Familie, aber mit bewusst
   ausdrucksstarken statischen Schnitten (z. B. markanter Kursiv-/Display-Schnitt). Kein
   Variable Font, keine zweite Familie. Gleichwertige erste Prüfoption für Kontrollierte
   Wärme — Erfolg hängt vollständig davon ab, ob die später gewählte Familie
   ausreichend charaktervolle UND seriöse Schnitte mitbringt.
3. **Variable-Font-System:** eine Schriftdatei, kontinuierliche Achsen. Gleichwertige
   zweite Prüfoption für Kontrollierte Wärme — nicht bevorzugt, sondern gleichrangig zu
   Option 2 zu prüfen.
4. **Zwei-Schrift-System:** Strukturfamilie + charaktervolle Headline-/Zitat-Familie.
   Größter Ausdrucksraum, aber höchster Pflegeaufwand. Zukunftssicherheit hängt nicht
   von der Anzahl der Familien ab, sondern davon, ob die zweite Familie
   trendabhängig/modisch ist — zwei zeitlose Familien sind ebenso zukunftssicher wie
   eine einzelne.

### Vorläufige Empfehlung
Zunächst wird geprüft, ob **Architektur 2 (charakterreiche Schnitte)** oder
**Architektur 3 (Variable Font)** — beide auf Basis einer einzigen Familie — die
gewünschte Charakterspanne überzeugend tragen können; die konkrete Schriftauswahl
entscheidet, welche der beiden technisch/gestalterisch besser passt. **Architektur 4
(Zwei-Schrift-System)** wird nur verfolgt, wenn sich zeigt, dass keine einzelne Familie
ausreicht — und dann nur mit einer zweiten Familie, die selbst zeitlos statt
trendabhängig ist.

### Weiterhin offen
- Optionen für Headline-Schrift: folgen nach Architektur-Prüfung im nächsten Teilschritt.
- Optionen für Fließtext-Schrift: folgen nach Architektur-Prüfung im nächsten Teilschritt.
- Stimmung, die die Typografie transportieren soll: Kontrollierte Wärme (siehe oben).

## Offene Entscheidungen
- [ ] Primärfarbe
- [ ] Sekundärfarbe(n)
- [ ] Akzentfarbe
- [ ] Headline-Font
- [ ] Fließtext-Font
