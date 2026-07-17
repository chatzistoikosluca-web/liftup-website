# Spec — Content Module

Namespace: `content` · Wave 3 · Stage 2 (embeds Card optional) · Status: siehe `Component_Registry.md` (führend)

**Governance-Hinweis (nicht hier gelöst, s. Registry):** Die Variante
„Aufklapp-Vertiefung" braucht konzeptionell einen binären Zustand
(auf/zu bzw. „expanded"), der außerhalb des geschlossenen Zustands-Vokabulars liegt
(Component_Token_Architecture.md §10, bereits als Zukunftspunkt notiert). Diese Spec
löst das **nicht** vorab, sondern umgeht es pragmatisch über natives HTML
(`<details>`/`<summary>`) — kein neuer Component-Token-Zustand, keine
Vokabular-Entscheidung.

## 1. Zweck & Familienzuordnung
Content-Familie. Strukturiertes Storytelling-Modul für Fließtext-Abschnitte. Kein
Page-Builder — genau drei frozen-benannte Varianten (Masterplan Kapitel 1), keine
beliebige Slot-Komposition darüber hinaus.

## 2. Anatomie & Slots
- `heading` (optional, Rolle `heading-2`/`heading-3` — Auswahl je Seiten-Hierarchie
  beim Einsatz, nicht hier fixiert)
- `body` (Pflicht, Rolle `body-default`)
- `media` (nur Variante `text-image`)
- `card` (optional — Vollinstanz von `Card`, z. B. Zitat-/Stat-Callout innerhalb des
  Moduls, keine Alias-Tokens)
- `summary` + `details` (nur Variante `expandable`, natives `<summary>`/`<details>`-Paar)

## 3. Component Tokens

| Component Token | Semantic Token |
|---|---|
| `content-heading-text` | `color-text-primary` |
| `content-text` | `color-text-primary` |
| `content-gap` | `space-stack-default` |
| `content-media-gap` | `space-section-default` |
| `content-card-gap` | `space-stack-default` |
| `content-toggle-text` | `color-accent-default` |
| `content-toggle-focus-ring` | `color-focus-ring` |
| `content-toggle-size-min-height` | — (`-size`, Wert hier: `2.75rem`, analog `cta-size-min-height`) |

## 4. Varianten
Aus Masterplan Kapitel 1 frozen benannt, je vollständiges eigenes Token-Set:
- **text** — nur `body` (+ optional `heading`/`card`)
- **text-image** — `body` + `media`, nutzt zusätzlich `content-media-gap`
- **expandable** — `summary`/`details` statt frei sichtbarem `body`, nutzt zusätzlich
  `content-toggle-*`

## 5. Zustände
`default`. Für `expandable`: kein eigener Component-Token-Zustand (s.
Governance-Hinweis) — offen/zu wird ausschließlich über natives `<details open>`
abgebildet, gestylt über den `[open]`-Attribut-Selektor mit bereits bestehenden
Tokens, kein neuer Tokenname.

## 6. Responsive
`text-image`: Stapel auf Mobile, zweispaltig ab einem mittleren Breakpoint
(`content-media-gap`). `text`/`expandable`: einspaltig auf allen Breakpoints.

## 7. Motion
Keine erzwungene Öffnen/Schließen-Animation bei `expandable` (native
`<details>`-Anzeige, kein Transition-Token nötig) — konsistent mit dem bereits für
Navigation gewählten Ansatz (kein Zwang zu unspezifizierter Motion).
`prefers-reduced-motion`: nicht relevant, da keine Animation vorhanden.

## 8. Accessibility
- `expandable`: natives `<summary>`/`<details>` liefert Tastatur- und
  Screenreader-Semantik ohne eigene ARIA-Nachbildung.
- `content-toggle-size-min-height` sichert Touch-Target-Größe des `<summary>`-Triggers.
- `media`: Alt-Text Pflicht beim Konsumenten.
- Eingebettete `card`-Instanz: eigene Accessibility gemäß Spec_Card.md §8.

## 9. Abhängigkeiten
Nachrichtlich — führend ist `Component_Registry.md`. Bettet Card optional als
Vollinstanz ein (Card bereits `done`, Welle 1).

## 10. Nutzungsregeln
Für in sich abgeschlossene Storytelling-Abschnitte innerhalb einer Section. Kein
Ersatz für Hero (Einstieg) oder Testimonial (Vertrauen) — eigene Familien.
**German-Content-Regel:** `heading`, `body`, `summary`-Text sind nutzerseitig
sichtbar → Deutsch (de-DE). Kein finaler Website-Text, keine Kundencontent-Platzhalter.

## 11. Status & Version
Nachrichtlich — führend ist `Component_Registry.md`. Stand: `spezifiziert`, keine
Version vor erstem Bau. **Definition of Done:** gemäß Masterplan Kapitel 8 — noch
offen; die Governance-Frage zu binären Zuständen bleibt unabhängig davon offen.
