# Spec — CTA Button

Namespace: `cta` · Wave 1 · Stage 1 (embeds nothing) · Status: siehe `Component_Registry.md` (führend)

## 1. Zweck & Familienzuordnung
Primäres Interaktionselement der CTA-Familie. Kein Breakout — CTA ist Inline-/Block-Element
innerhalb einer Section, nie selbst Breakout-Träger. Wird von Navigation und Hero als
Vollinstanz eingebettet (Stufe-2-Abhängigkeit, siehe Registry).

## 2. Anatomie & Slots
- `label` (Pflicht, Text, de-DE im Content)
- `leading-icon` / `trailing-icon` (optional — Bestätigung der genauen Nutzung gegen
  `Komponenten_Designsystem.md` beim Bau erforderlich, hier nicht vorentschieden)
- `spinner` (nur im `loading`-Zustand, ersetzt/ergänzt `label`)

## 3. Component Tokens
Jedes Token referenziert genau ein Semantic Token (nie ein Primitive, nie ein fremdes
Component Token):

| Component Token | Semantic Token |
|---|---|
| `cta-background` | `color-accent-default` |
| `cta-background-hover` | `color-accent-hover` |
| `cta-background-active` | `color-accent-active` |
| `cta-text` | `color-text-on-deep` |
| `cta-border` | `color-accent-default` |
| `cta-radius` | `radius-default` |
| `cta-padding-x` | `space-component-default` |
| `cta-padding-y` | `space-component-tight` |
| `cta-gap` | `space-component-tight` |
| `cta-text-style` | `ui-default` (Typografie-Rolle) |
| `cta-transition` | `motion-hover` / `motion-state-change` |
| `cta-focus-ring` | `color-focus-ring` |
| `cta-size-min-height` | — (Struktur-Slot, konkreter Wert erst beim Design, §3 Component_Token_Architecture) |

## 4. Varianten
Aus `Component_Token_Architecture.md` §6 — je ein vollständiges eigenes Token-Set, keine Vererbung:

- **Primary** — `cta-background` = `color-accent-default` (voller Fill)
- **Secondary** — reduzierte Gewichtung über `cta-border` + `cta-text`, kein Accent-Fill
- **Danger** — `color-status-error` ausschließlich als Text-/Rand-Behandlung, nie als Fill

## 5. Zustände
Aus `Component_Token_Architecture.md` §7, angewandt auf ein interaktives Button-Element:
`default`, `hover`, `active`, `focus`, `disabled`, `loading` (Spinner-Slot ersetzt Label,
Interaktion deaktiviert wie `disabled`). `success`/`error` sind hier nicht Zustand, sondern
über die Danger-Variante abgedeckt.

## 6. Responsive
Kein eigenes Breakpoint-Verhalten — Größe/Umbruch folgt dem umgebenden Layout (Section/Nav/Hero).
Min. Touch-Target über `cta-size-min-height`, an allen Breakpoints gleich.

## 7. Motion
Ausschließlich `motion-hover` (Hover-Übergang) und `motion-state-change` (Active/Focus-Wechsel).
Loading-Rotation nutzt laut `Component_Token_Architecture.md` §7 bestehende Motion-Primitives
(`duration-slow`, `ease-standard`), endlose Wiederholung. `prefers-reduced-motion`: Rotation wird
durch statischen Spinner-Zustand ersetzt, keine Endlosanimation.

## 8. Accessibility
- Kontrast: `cta-text` auf `cta-background` muss WCAG AA (4.5:1) an allen drei Varianten erfüllen.
- Fokus: sichtbarer Ring über `cta-focus-ring` (Tokens `focus-ring-width/-offset/-style`).
- Tastatur: über `Enter`/`Space` auslösbar (native `<button>`), kein reiner Div-Handler.
- ARIA: `aria-disabled` im `disabled`/`loading`-Zustand; Label bleibt für Screenreader lesbar,
  auch wenn visuell durch Spinner ersetzt (z. B. via `aria-busy="true"`).

## 9. Abhängigkeiten
Nachrichtlich — führend ist `Component_Registry.md`. Aktuell: bettet nichts ein; wird von
Navigation und Hero eingebettet (beide noch nicht gebaut).

## 10. Nutzungsregeln
CTA-Button für jede primäre/sekundäre Handlungsaufforderung. Nicht für reine Navigationslinks
ohne Handlungscharakter (→ `nav`-eigene Link-Darstellung). Danger nur für destruktive Aktionen.
**German-Content-Regel:** `label` ist nutzerseitig sichtbarer Content → Deutsch (de-DE),
unabhängig von Prop-/Variant-Namen, die Englisch bleiben (z. B. `variant="danger"`).

## 11. Status & Version
Nachrichtlich — führend ist `Component_Registry.md`. Stand: `spezifiziert`, keine Version vor
erstem Bau. **Definition of Done:** vollständig gemäß Masterplan Kapitel 8 (12 Punkte) — noch
offen, da noch nicht gebaut/reviewed.
