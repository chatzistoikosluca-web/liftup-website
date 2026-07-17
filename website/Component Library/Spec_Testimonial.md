# Spec — Testimonial

Namespace: `trust` · Wave 3 · Stage 2 (embeds Card) · Status: siehe `Component_Registry.md` (führend)

## 1. Zweck & Familienzuordnung
Vertrauen-Familie (Trust/Social Proof). Bettet Card verpflichtend als Vollinstanz ein
(Card liefert Container-Chrome: Background/Border/Radius/Padding; Testimonial liefert
ausschließlich den Inhalt im `content`-Slot von Card).

## 2. Anatomie & Slots
- `quote` (Pflicht, Rolle `emphasis-quote`, natives `<blockquote>`)
- `authorName` (Pflicht)
- `authorRole` (optional, z. B. Position/Unternehmen)
- `avatar` (optional, Bild — Alt-Text beim Konsumenten)

Alles gerendert innerhalb einer Card-Vollinstanz — keine eigene Hintergrund-/
Rand-/Radius-Deklaration in Testimonial selbst.

## 3. Component Tokens

| Component Token | Semantic Token |
|---|---|
| `trust-quote-text` | `color-text-primary` |
| `trust-author-text` | `color-text-primary` |
| `trust-author-role-text` | `color-text-secondary` |
| `trust-gap` | `space-stack-default` |
| `trust-avatar-radius` | `radius-full` |

`trust-avatar-size` folgt der `-size`-Kategorie (kein Foundation-Wert vorbelegt,
Component_Token_Architecture.md §3) — Wert hier: `3rem`.

## 4. Varianten
Keine im Frozen-Bestand definierten Varianten.

## 5. Zustände
Nicht anwendbar — rein darstellend, nicht interaktiv.

## 6. Responsive
`quote` und Autor-Zeile (Avatar + Name + Rolle) stapeln bzw. stehen nebeneinander
innerhalb der von Card vorgegebenen Breite; kein eigenes Breakpoint-Verhalten über
das von Card/Section vorgegebene hinaus.

## 7. Motion
Keine eigene Motion — statischer Trust-Inhalt.

## 8. Accessibility
- `quote` in `<blockquote>` (semantisch korrektes Zitat-Element).
- `authorName`/`authorRole` z. B. in `<figcaption>`, falls `<figure>` als Wrapper
  verwendet wird.
- `avatar`: Alt-Text Pflicht beim Konsumenten (z. B. „Foto von {authorName}").
- Fokus/Tastatur: nicht anwendbar, da Testimonial selbst nicht interaktiv ist
  (Card selbst ebenfalls nicht interaktiv in diesem Kontext, s. Spec_Card.md §5).

## 9. Abhängigkeiten
Nachrichtlich — führend ist `Component_Registry.md`. Bettet Card verpflichtend als
Vollinstanz ein (Card bereits `done`, Welle 1).

## 10. Nutzungsregeln
Für echte Kundenstimmen/Referenzen. Kein Platzhalter-/Fake-Content in finalen Seiten
(Premium-Qualitätsanspruch, Component_Registry.md Standing Rule 3).
**German-Content-Regel:** `quote`, `authorName`, `authorRole` sind nutzerseitig
sichtbar → Deutsch (de-DE). Kein finaler Website-Text, keine Kundencontent-Platzhalter
in dieser Spec.

## 11. Status & Version
Nachrichtlich — führend ist `Component_Registry.md`. Stand: `spezifiziert`, keine
Version vor erstem Bau. **Definition of Done:** gemäß Masterplan Kapitel 8 — noch offen.
