# Spacing-System — Schritt 5.4 (Strategie)

Status: **Final freigegeben (12.07.2026).** Basis: `LiftUp_Brand_Bible.md`,
`Kreative_Markenrichtung.md`, `Design_Verfassung.md`, `Design_Checkliste.md`,
`Farben_Typografie.md`, `Formen_Grafiksystem.md`, `Komponenten_Designsystem.md`,
`Typografie.md`, `Website_Ziele.md`, `Zielgruppe.md`. Noch keine Pixelwerte, keine Anzahl
von Abstufungen, keine CSS-/Tailwind-Umsetzung.

---

## Analyse — Welche Funktion erfüllt Weißraum im LiftUp-System?

Sechs benennbare Funktionen, jede an eine bestehende Regel rückführbar:

1. **Gruppierung/Trennung** — was inhaltlich zusammengehört, wird auch räumlich
   zusammengehalten. Stützt UX-Prinzip 6 (jede Section beantwortet genau eine Frage).
2. **Hierarchie/Fokuslenkung** — Isolation durch Raum ist das wirksamste Mittel, um einen
   dominanten Fokuspunkt zu erzeugen, ohne dafür Farbe oder Größe zu „missbrauchen".
   Direkte Grundlage für Design-Checkliste Punkt 1.
3. **Rhythmus/Pacing** — steuert das Lesetempo entlang der bereits definierten vier
   Zustände (Ruhe/Fokus/Breakout/CTA-Momente, Formen_Grafiksystem).
4. **Signalisierung von Ausnahmen** — Formen_Grafiksystem legt bereits fest: „an
   Breakout-Stellen bewusst großzügiger". Weißraum ist damit das primäre Werkzeug, mit dem
   das Breakout-Budget überhaupt sichtbar wird.
5. **Wahrgenommene Qualität** — explizit in `Zielgruppe.md` als Vertrauenssignal benannt
   („Abstände... sprechen für sich").
6. **Orientierung/Vorhersehbarkeit** — ein konsistentes, wiederkehrendes Abstandsschema
   unterstützt UX-Prinzip 1 und Design-Checkliste Punkt 6 (funktionale Logik bleibt
   konsistent).

### Grundprinzip: Bedeutung durch Relation, nicht durch Absolutwert
Die Bedeutung eines Abstandes entsteht nicht durch seine absolute Größe, sondern durch
seinen relativen Unterschied zu den benachbarten Abständen. Rhythmus (Funktion 3) und
Breakout-Signalisierung (Funktion 4) funktionieren ausschließlich über diesen Kontrast —
ein Abstand ist nur dann ein „Fokusmoment" oder eine „Ausnahme", wenn er sich spürbar von
seiner Umgebung unterscheidet. Das ist keine neue Regel, sondern die Erklärung, warum
Rhythmus überhaupt funktioniert, und der Grund, warum ein moderater, aber konsequent
nutzbarer Kontrast den beiden Extremen (sehr eng, sehr großzügig) strukturell überlegen
ist: Bei zu enger Abstufung fehlt der Kontrastspielraum, bei durchgehend großzügiger
Abstufung ist eine weitere Steigerung kaum noch wahrnehmbar — in beiden Fällen bricht das
Relationsprinzip zusammen.

**Rolle im Vergleich zu Farbe/Typografie/Bildsprache/Komposition:** Alle vier anderen
Systeme tragen *auch* Inhalt oder kontrollierte Wärme (Farbe: Ebene 2 „Gedeckte Tiefe" für
bedeutungsstarke Momente; Typografie: Italic für charaktervolle Momente; Bildsprache:
Beweis und Persönlichkeit; Komposition: Seitendramaturgie). **Weißraum ist das einzige der
fünf Systeme, das nach der bestehenden Logik ausschließlich strukturell bleibt** — es
trägt nirgends Wärme oder Persönlichkeit, sondern ausschließlich Funktion. Das ist
dieselbe Logik wie Konfliktregel 6 („Wärme über Bildsprache/Materialität, nicht über
zusätzliche Palettenfarben"), konsequent auf Spacing angewendet.

Daraus folgt zwingend: **Spacing darf niemals selbst Persönlichkeit, Wärme,
Premiumwirkung oder Vertrauen erzeugen wollen.** Es darf diese Eigenschaften ausschließlich
unterstützen — indem es Inhalt, Bildsprache und Typografie so anordnet, dass deren bereits
vorhandene Wirkung ungestört zur Geltung kommt. Ein Abstand, der selbst „warm" oder
„premium" wirken soll (etwa durch bewusst außergewöhnliche Groß- oder Engzügigkeit als
Stilmittel), verstößt gegen Grundprinzip 1 der Design-Verfassung ebenso wie gegen
Konfliktregel 6. Das ist keine neue Regel, sondern deren direkte, bereits zwingende
Konsequenz für das Spacing-System.

---

## Drei strategische Richtungen

| | A — Dichte Struktur | B — Ausgewogener Atemrhythmus | C — Großzügige Weite |
|---|---|---|---|
| Psychologische Wirkung | effizient, geschäftig | ruhig, geordnet, aktiv geführt | exklusiv, editoriell, distanziert |
| Premiumwirkung | gering-mittel (Assoziation: Vergleichsportal) | hoch | hoch kurzfristig, Risiko der Fehldeutung als unnahbar |
| Vertrauen | zwiespältig (Substanz vs. Unübersichtlichkeit) | hoch | riskant ohne etablierten Track Record |
| Verständlichkeit | geringer (hohe kognitive Last) | hoch | gut pro Screen, aber mehr Scrollstrecke bis zur vollständigen Information |
| Nutzerführung | schwächer (Fokus konkurriert mit Dichte) | stark | paradox schwächer (fehlender relativer Kontrast zu Breakout) |
| Breakout-Kompatibilität | gering (wenig Kontrastspielraum) | sehr gut | schwach (Standard schon großzügig, Ausnahme verliert Wirkung) |
| Rhythmus-Wirkung | abgeschwächt | voll nutzbar | abgeschwächt |
| Conversion | Risiko: CTA konkurriert visuell mit Dichte | unterstützend | Risiko: Verzögerung durch mehr Scrollen bis CTA |
| Mobile | mehr Inhalt sichtbar, höheres Überforderungsrisiko | gut, proportional skalierbar | verschärftes Scroll-Risiko |
| Desktop | viel „above the fold", weniger Übersicht | ausgewogen | wirkt gut, verzögert aber Vertrauensaufbau in Sekunden |
| Wartbarkeit/Skalierbarkeit | hoch, aber wenig Reserve für Sonderfälle | hoch | mittel (Content-Wachstum sprengt Seitenlänge) |
| Zukunftssicherheit | mittel (an Dashboard-Dichte-Trend gekoppelt) | hoch | mittel (an Editorial-Luxus-Trend gekoppelt) |
| Wettbewerbsvergleich | weicht von der Konvention (großzügige Layouts bei allen 3 Wettbewerbern) als Nachteil ab | konsistent, differenziert durch konsequente Rhythmus-Nutzung | keiner der drei Wettbewerber betreibt ein derart großzügiges System |
| Passung Brand Bible | kollidiert mit Markenprinzip 2, UX-Prinzip 5 | volle Passung (Markenprinzip 2/5, UX 1/5/6, Design-Prinzip D) | kollidiert mit Kat. 8 Punkt 5 |
| Passung Kreative Markenrichtung | eher kühl/geschäftig als „Geführte Wärme" | direkte Umsetzung von „Struktur = Bühne" | kollidiert mit Konfliktregel 2 |
| Passung Design-Verfassung | widerspricht der Ablehnung des „Strengen Modulrasters" | einzig konsistente Fortsetzung des „Atmenden Rastersystems" | widerspricht der Ablehnung des „Editorialen Kompositionssystems" |

---

## Kritischer Vergleich — aktive Suche nach Gegengründen

- **Warum könnte A trotzdem richtig sein?** Wenn LiftUp später datenintensive Bereiche
  braucht (Leistungsvergleiche, FAQ-Listen), könnte dort lokal mehr Dichte sinnvoll sein —
  das ist aber ein Component-spezifisches Thema, kein Grund, das gesamte Basissystem dicht
  zu gestalten.
- **Warum könnte C trotzdem richtig sein?** Falls LiftUp sich nach Jahren etablierten
  Vertrauens bewusst in Richtung eines ruhigeren „Studio"-Auftritts entwickeln möchte,
  könnte ein großzügigeres System irgendwann passend werden. Brand Bible Kat. 8 Punkt 5
  erlaubt genau das ausdrücklich — aber erst nach etabliertem Vertrauen, nicht als
  Startkonfiguration. Dieselbe Bedarfsschwellen-Logik wie bei Farbe/Typografie.
- **Warum könnte B trotzdem falsch sein?** Nur bei mangelnder Ausführungsdisziplin — wenn
  die Abstufungen im Alltag nicht konsequent eingehalten werden, verwässert das System.
  Dasselbe, bereits in Formen_Grafiksystem dokumentierte und akzeptierte Ausführungsrisiko,
  keine neue Erkenntnis gegen die Richtung selbst.

---

## Geltung auf Komponenten-Ebene

Alle acht Komponentenfamilien beziehen ihre Abstände ausschließlich aus demselben
Spacing-System. Keine Familie definiert eigene Abstandsskalen oder Sonderwerte. Das ist
keine neue Regel, sondern dieselbe Token-Logik, die bereits für Farben (Schritt 5.2) und
Typografie (Schritt 5.3) gilt, konsequent auf Spacing übertragen — Komponenten_Designsystem
verlangt bereits, dass keine Familie eigene Farb-, Typografie- oder Rasterregeln definiert;
Spacing ist Teil derselben gemeinsamen Tokens.

---

## Empfehlung

**Richtung B — „Ausgewogener Atemrhythmus" — wird empfohlen.**

Die Empfehlung ist keine eigenständige neue Entscheidung, sondern die notwendige
Fortsetzung einer bereits getroffenen Entscheidung: Formen_Grafiksystem hat das „Strenge
Modulraster" (zu eng, kollidiert mit seitenspezifischer Dramaturgie) und das „Editoriale
Kompositionssystem" (zu lose, Risiko gegen Design-Prinzip D und UX-Prinzip 1) bereits
explizit verworfen und stattdessen das „Atmende Rastersystem" gewählt — mit
„Weißraum-Logik" als einem seiner expliziten Grammatik-Elemente. Richtung A reproduziert
strukturell das bereits verworfene strenge Raster, Richtung C reproduziert strukturell das
bereits verworfene editoriale System **und** kollidiert zusätzlich direkt mit der
namentlich ausgeschlossenen „Zurückhaltung ohne etabliertes Vertrauen" (Kat. 8 Punkt 5).
Richtung B ist damit nicht die „gefälligste" der drei Optionen, sondern die einzige, die
mit einer bereits final entschiedenen Architektur konsistent ist.

**Bewusst akzeptiertes Risiko:** Ausführungsdisziplin bei der konsequenten Einhaltung der
Abstufungen — identisch mit dem bereits in Formen_Grafiksystem dokumentierten und
akzeptierten Risiko, keine neue Erkenntnis.

**Ausgeschlossenes Risiko:** Kollision mit Kat. 8 Punkt 5 (stille Zurückhaltung), Kollision
mit Markenprinzip 2 (Komplexität reduzieren), Widerspruch zur bereits gewählten
Rastergrammatik.

**Reichweite dieser Entscheidung:** Festgelegt wird ausschließlich die strategische Logik
(ausgewogener, konsistenter Grundrhythmus mit bewusstem, aber moderatem Kontrast zu
Breakout-Momenten). Spätere, heute noch nicht vorgesehene Seitentypen (z. B. Blog,
Karriere, Academy) dürfen das Spacing-System **erweitern**, indem bei nachgewiesenem
Bedarf neue, benannte Abstufungen ergänzt werden — sie dürfen die bestehende Systemlogik
(relativer Kontrast, konsistenter Grundrhythmus) jedoch niemals **ersetzen**. Das folgt
direkt aus Grundprinzip 5 der Design-Verfassung („Erweiterung folgt Bedarf, nicht
Möglichkeiten"): eine neue Abstufung ist nur zulässig, wenn ein bereits identifiziertes
Problem mit den bestehenden Abstufungen nachweisbar nicht lösbar ist.

### Verhältnis zu den nächsten Schritten
Dieses Dokument definiert ausschließlich die strategische Logik des Spacing-Systems. Es
legt weder konkrete Abstandswerte noch eine Anzahl von Abstufungen fest. Diese werden erst
in den folgenden Umsetzungsschritten als Design Tokens definiert und müssen vollständig
innerhalb der hier festgelegten Systemlogik liegen. Damit bleibt die Trennung zwischen
Strategie und Umsetzung vollständig erhalten.

---

## Abschließende Prüfung

- **Decision-Test:** bestanden — die Richtung beeinflusst konkret, wie Breakout-Kontrast,
  Rhythmus und CTA-Isolation später umgesetzt werden.
- **Brand Bible (alle 8 Kategorien):** keine Kollision; Markenprinzip 2/5, UX-Prinzip
  1/5/6, Design-Prinzip D werden gestärkt.
- **Kreative Markenrichtung:** volle Passung — direkte Umsetzung von „Struktur = Bühne";
  Konfliktregel 2 und 6 eingehalten.
- **Design-Verfassung:** keine Kollision mit den fünf Grundprinzipien oder den fünf
  Designrisiken; Grundprinzip 4 (aktive Führung) wird durch die Ablehnung von Richtung C
  aktiv geschützt; Grundprinzip 5 trägt sowohl die Ablehnung von Richtung C als auch die
  Erweiterbarkeits-Klarstellung.
- **Design-Checkliste:** Punkt 1, 3 und 6 werden durch Richtung B direkt unterstützt.
- **Formen_Grafiksystem:** keine neue Architekturentscheidung — reine Fortsetzung des
  bereits gewählten Atmenden Rastersystems.
- **Komponenten_Designsystem:** vollständig kompatibel — Spacing folgt derselben
  Token-Logik wie Farbe und Typografie, keine Familie definiert eigene Abstandsregeln.
- **Keine neuen Regeln entstanden:** bestätigt — alle vier Ergänzungen (relative Bedeutung,
  Bedeutungsverbot für Spacing, Komponenten-Geltung, Erweiterbarkeit vs. Ersetzung) sind
  explizit gemachte, bereits zwingende Konsequenzen aus Grundprinzip 1, Grundprinzip 5,
  Konfliktregel 6 und der bestehenden Token-Logik.
- **Keine konkreten Werte eingeführt:** bestätigt — keine Pixelwerte, keine Anzahl von
  Abstufungen, keine CSS-/Tailwind-Angaben.

**Damit ist Schritt 5.4 final.**
