# Spec — Hero

Namespace: `hero` · Wave 3 · Stage 2 (embeds CTA Button) · Status: siehe `Component_Registry.md` (führend)

## 1. Zweck & Familienzuordnung
Hero-Familie. Konversionsfokussierter Seiteneinstieg (Above-the-fold). Kein eigener
Breakout/Padding — sitzt innerhalb einer Section, die Außenabstand/Breite trägt
(keine Doppelverantwortung mit `section-padding-*`/`section-max-width`).

## 2. Anatomie & Slots
- `eyebrow` (optional, kurzer Kicker-Text)
- `heading` (Pflicht, Rolle `hero-display` — trägt i. d. R. das Seiten-`<h1>`)
- `lead` (optional, Rolle `body-lead`)
- `primaryCta` (Pflicht — Vollinstanz von `CTAButton`, per Konsumenten-Slot, keine
  Alias-Tokens)
- `secondaryCta` (optional — ebenfalls Vollinstanz von `CTAButton`)
- `media` (optional, Bild/Visual — Alt-Text liegt beim Konsumenten)

## 3. Component Tokens

| Component Token | Semantic Token |
|---|---|
| `hero-text` | `color-text-primary` |
| `hero-eyebrow-text` | `color-accent-default` |
| `hero-gap` | `space-stack-default` |
| `hero-cta-gap` | `space-component-default` |
| `hero-media-gap` | `space-section-default` |

Ausnahme (analog `cta-spinner-*`, s. Spec_CTA_Button.md §3): Falls eine
Entrance-Motion implementiert wird, referenziert sie explizit
`--hero-entrance-duration: var(--duration-moderate)` und
`--hero-entrance-ease: var(--ease-out)` — Primitives direkt, weil
`motion-entrance` (Component_Token_Architecture.md §6.3/Design_Tokens.md §6.3) zwei
mögliche Durations offenlässt und Hero hier die konkrete Wahl trifft. Optional,
kein Zwang.

## 4. Varianten
Keine im Frozen-Bestand benannten Varianten. `media` ist ein optionaler Slot, keine
eigene Variante mit separatem Token-Set.

## 5. Zustände
Nicht anwendbar — Hero selbst ist nicht interaktiv. Eingebettete CTA-Instanzen
führen ihre eigenen Zustände (Spec_CTA_Button.md §5).

## 6. Responsive
`media` (falls vorhanden) stapelt auf Mobile unter dem Textblock, ab einem
mittleren Breakpoint zweispaltig neben dem Textblock (`hero-media-gap` als
Spalten-/Stack-Abstand). `primaryCta`/`secondaryCta` stapeln auf Mobile, stehen ab
dem gleichen Breakpoint nebeneinander (`hero-cta-gap`).

## 7. Motion
Optionale, dezente Entrance (Fade/leichtes Slide) über `hero-entrance-duration`/
`-ease` (s. §3) — kein Zwang, keine Ablenkung. `prefers-reduced-motion`: keine
Animation, Inhalt sofort sichtbar.

## 8. Accessibility
- `heading` als semantisches `<h1>` der Seite (nur einmal pro Seite genutzt).
- `eyebrow` kein Heading-Level (z. B. `<span>`), um Heading-Hierarchie nicht zu stören.
- `media`: Alt-Text Pflicht beim Konsumenten, keine dekorative Leerangabe außer bei
  rein dekorativen Bildern.
- Eingebettete CTA-Instanzen: eigene Accessibility gemäß Spec_CTA_Button.md §8.

## 9. Abhängigkeiten
Nachrichtlich — führend ist `Component_Registry.md`. Bettet CTA-Button (mind. einmal,
optional zweimal) als Vollinstanz ein (CTA-Button bereits `done`, Welle 1).

## 10. Nutzungsregeln
Einmalig pro Seite als Einstiegssektion. Nicht als generischer Bilder-Textblock
missbrauchen (→ Content-Modul für Storytelling weiter unten auf der Seite).
Konversionsfokus: `primaryCta` ist praktisch immer gesetzt.
**German-Content-Regel:** `eyebrow`, `heading`, `lead` sind nutzerseitig sichtbar →
Deutsch (de-DE). Kein finaler Website-Text in dieser Spec, keine Kundencontent-Platzhalter.

## 11. Status & Version
Nachrichtlich — führend ist `Component_Registry.md`. Stand: `spezifiziert`, keine
Version vor erstem Bau. **Definition of Done:** gemäß Masterplan Kapitel 8 — noch offen.
