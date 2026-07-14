# Spec — Card

Namespace: `card` · Wave 1 · Stage 1 (embeds nothing) · Status: siehe `Component_Registry.md` (führend)

## 1. Zweck & Familienzuordnung
Familienübergreifender Struktur-Baustein (`Formen_Grafiksystem.md`). Kein eigener Breakout.
Wird von Testimonial (Pflicht) und Content-Modul (optional) als Vollinstanz eingebettet.

## 2. Anatomie & Slots
- `content` (Pflicht, generischer Slot — nimmt beliebige Vollinstanzen/Text/Icons der
  einbettenden Komponente auf, gemäß Slot-Regel)

Card definiert bewusst keine internen Sub-Slots (z. B. kein eigenes `title`/`body`) — diese
Struktur gehört der einbettenden Komponente (Testimonial, Content-Modul).

## 3. Component Tokens

| Component Token | Semantic Token |
|---|---|
| `card-background` | `color-surface-elevated` |
| `card-border` | `color-border-default` |
| `card-radius` | `radius-default` |
| `card-padding-x` | `space-component-default` |
| `card-padding-y` | `space-component-default` |
| `card-gap` | `space-stack-default` |

Kein `card-shadow`-Token — Design_Tokens.md §15 schließt Shadow-Tokens bewusst aus. Elevation
wird ausschließlich über `card-background` (Surface-Kontrast) und `card-border` erzeugt.

## 4. Varianten
Keine im Frozen-Bestand definierten Varianten. Card ist ein einzelner, konsistenter Container.

## 5. Zustände
`default`. `hover`/`focus` **nur** wenn eine konkrete Card-Instanz als Ganzes klickbar/verlinkt
ist (dann `card-border` bzw. Fokus-Ring analog Input/CTA) — nicht pauschal für jede Card.
`disabled` nicht anwendbar (Card ist kein Formularelement).

## 6. Responsive
Volle Breite des umgebenden Grids/Slots an allen Breakpoints; Innenabstand konstant über
`card-padding-x`/`-y` (keine Breakpoint-Varianten definiert).

## 7. Motion
Nur falls klickbar: `motion-hover` für Border-/Background-Übergang. `prefers-reduced-motion`:
Übergang entfällt, Zustandswechsel sofort.

## 8. Accessibility
- Kontrast: `card-border` gegenüber `card-background` und umgebendem `color-background-*`
  ausreichend unterscheidbar (kein reiner Farbkontrast-Pflichtwert, da nicht textführend).
- Fokus: nur falls klickbar — sichtbarer Ring, native interaktive Semantik (`<a>`/`<button>`
  als Wrapper, kein `div onClick`).
- ARIA: keine Card-eigenen ARIA-Rollen; Semantik kommt von der eingebetteten Vollinstanz.

## 9. Abhängigkeiten
Nachrichtlich — führend ist `Component_Registry.md`. Bettet nichts ein; wird von Testimonial
und optional Content-Modul eingebettet (beide noch nicht gebaut).

## 10. Nutzungsregeln
Für jeden abgegrenzten Inhaltscontainer, der von mehreren Familien wiederverwendet wird. Nicht
für reine Layout-Trennung ohne visuelle Abgrenzung (→ Section-Rhythmus reicht dafür aus).
**German-Content-Regel:** Card selbst hat keinen eigenen Text-Content; jeglicher Text kommt aus
dem `content`-Slot der einbettenden Komponente und unterliegt dort der De-DE-Regel.

## 11. Status & Version
Nachrichtlich — führend ist `Component_Registry.md`. Stand: `spezifiziert`, keine Version vor
erstem Bau. **Definition of Done:** gemäß Masterplan Kapitel 8 (12 Punkte) — noch offen.
