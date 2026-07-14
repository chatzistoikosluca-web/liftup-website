# Schatten- & Elevation-System — Schritt 5.6 (Strategie)

Status: **Final freigegeben (12.07.2026).** Basis: `Design_Verfassung.md`,
`Design_Checkliste.md`, `Kreative_Markenrichtung.md`. Bewusst minimal — Schatten/Elevation
werden in keinem der 13 Referenzdokumente erwähnt (noch schwächer dokumentiert als
Radius). Noch keine Blur-/Intensitätswerte, keine Shadow-Tokens, keine CSS.

## Funktion

Schatten signalisieren Ebenen-/Hierarchiebeziehungen (was liegt über was), nicht
Tiefensimulation als Stilmittel.

## Bestehende Einschränkungen

- **Design-Checkliste Punkt 4** (keine Dekoration ohne Funktion): Schatten nur, wo eine
  echte Ebenen-Beziehung tatsächlich besteht.
- **Grundprinzip 1** (Design-Verfassung): Funktionslogik trägt keine Persönlichkeit —
  Schatten dürfen Hierarchie unterstützen, nie selbst Wärme/Premium erzeugen wollen.
- **Kreative Markenrichtung Punkt 15:** schließt generische SaaS-Ästhetik aus —
  durchgängige, dekorative Schatten sind ein verbreitetes SaaS-Klischee.
- Border- und Overlay-Tokens (Farbpalette.md) existieren bereits und übernehmen einen Teil
  der Abgrenzungsfunktion. Daraus folgt **weder**, dass Schatten zusätzlich notwendig
  werden, **noch**, dass sie überflüssig sind — das ist offen.

## Geprüfte Richtungen

| | A/B — Kein Schatten, außer nachgewiesener Bedarf | C — Ausgeprägte, dekorative Elevation |
|---|---|---|
| Status | Bei genauer Prüfung ist „kein Schatten" (ursprünglich A) und „Schatten nur bei echter Ebenensituation" (ursprünglich B) **dieselbe Position** — beide besagen: keine Schatten heute, Einführung ausschließlich bei nachgewiesenem Bedarf (Grundprinzip 5). Kein Dokument rechtfertigt, hieraus zwei getrennte Richtungen zu machen. | ausgeschlossen |
| Ausschlussgrund | entfällt (keine Ausschlussnotwendigkeit — konsistent mit allen bestehenden Regeln) | verstößt gegen Design-Checkliste Punkt 4 und Kreative Markenrichtung Punkt 15 |

## Empfehlung

**Schatten besitzen ausschließlich funktionale Bedeutung und werden niemals dekorativ
eingesetzt.** Sie existieren nicht als Standardelement, sondern ausschließlich dort, wo
eine echte Ebenensituation vorliegt — und nur, wenn dieser Bedarf im weiteren Verlauf
tatsächlich nachgewiesen wird (Grundprinzip 5). Welche Komponenten das betrifft, ob
Border/Overlay dafür bereits ausreichen und ob überhaupt ein eigener Schatten-Token nötig
ist, wird nicht hier, sondern im Komponenten-/Token-Schritt entschieden.

## Abschließende Prüfung

- **Decision-Test:** bestanden.
- **Brand Bible / Kreative Markenrichtung / Design-Verfassung / Design-Checkliste:** keine
  Kollision.
- **Komponenten-System:** keine Komponentenentscheidung vorweggenommen.
- **Keine neuen Regeln:** bestätigt — die Empfehlung ist eine reine Anwendung von
  Grundprinzip 5.
- **Keine unbegründeten Annahmen:** bestätigt — alle UI-spezifischen Beispiele (Modal,
  Dropdown, Sticky) sowie die Behauptung eines Schatten-Bedarfs wurden entfernt.
- **Keine Vermischung von Strategie und Umsetzung:** bestätigt.
- **Konsistenz mit Phase 5:** bestätigt.

**Damit ist Schritt 5.6 final.**
