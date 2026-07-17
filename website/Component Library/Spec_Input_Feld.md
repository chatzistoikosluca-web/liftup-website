# Spec — Input Field

Namespace: `input` · Wave 1 · Stage 1 (embeds nothing) · Status: siehe `Component_Registry.md` (führend)

## 1. Zweck & Familienzuordnung
Struktur-Baustein, abgeleitet aus den Formulare-Zuständen (Fokus/Fehler/Erfolg gelten pro
Feld). Kein eigener Breakout. Wird von Formularfeld (Welle 2) als Vollinstanz eingebettet.

## 2. Anatomie & Slots
- `field` (Pflicht, natives Eingabeelement)
- `helper-text` (optional, z. B. Fehlermeldung/Hinweis)
- `leading-icon` / `trailing-icon` (optional, z. B. Statusicon bei Erfolg/Fehler)

## 3. Component Tokens

| Component Token | Semantic Token |
|---|---|
| `input-background` | `color-surface-default` |
| `input-text` | `color-text-primary` |
| `input-border` | `color-border-default` |
| `input-border-focus` | `color-focus-ring` |
| `input-border-error` | `color-status-error` |
| `input-border-success` | `color-status-success` |
| `input-text-disabled` | `color-text-disabled` |
| `input-radius` | `radius-default` |
| `input-padding-x` | `space-component-default` |
| `input-padding-y` | `space-component-tight` |
| `input-text-style` | `body-default` (Typografie-Rolle) |
| `input-transition` | `motion-state-change` |
| `input-focus-ring` | `color-focus-ring` |
| `input-size-min-height` | — (Struktur-Slot, Wert erst beim Design) |

## 4. Varianten
Keine im Frozen-Bestand definierten Varianten (kein Primary/Secondary/Danger-Muster für Input).
Eingabetyp (`text`/`email`/`password`/…) ist ein HTML-Attribut, kein eigenes Token-Set.

## 5. Zustände
Vollständig gemäß Namespace-Begründung (`Component_Token_Architecture.md` §2/§7):
`default`, `focus`, `error`, `success`, `disabled`. `hover` optional/dezent (nur Border-Shift,
kein eigenständiges Token-Set nötig, referenziert `input-border`).

## 6. Responsive
Volle Breite des umgebenden Slots an allen Breakpoints (kein eigenes Breakpoint-Verhalten);
Mindesthöhe über `input-size-min-height` konstant.

## 7. Motion
Ausschließlich `motion-state-change` für Border-/Fokus-Übergänge. `prefers-reduced-motion`:
Farbwechsel ohne Transition (sofortiger Zustandswechsel).

## 8. Accessibility
- Kontrast: `input-text` auf `input-background` sowie alle Border-Zustände WCAG AA.
- Fokus: sichtbarer Ring über `input-focus-ring` + Focus-Tokens.
- Tastatur: nativer Fokusfluss (kein `tabindex`-Hack), Label per `<label for>` verknüpft.
- ARIA: `aria-invalid="true"` im `error`-Zustand, `aria-describedby` auf `helper-text` verweisend.

## 9. Abhängigkeiten
Nachrichtlich — führend ist `Component_Registry.md`. Bettet nichts ein; wird von Formularfeld
eingebettet (noch nicht gebaut).

## 10. Nutzungsregeln
Für jede einzeilige/mehrzeilige Texteingabe. Kombination mit Label/Fehlermeldung ausschließlich
über Formularfeld (Welle 2) — Input selbst definiert kein Label-Slot.
**German-Content-Regel:** `helper-text`, Platzhalter (`placeholder`) und Validierungsmeldungen
sind nutzerseitig sichtbar → Deutsch (de-DE). Attribut-/Propnamen (`type`, `disabled`, `variant`)
bleiben Englisch.

## 11. Status & Version
Nachrichtlich — führend ist `Component_Registry.md`. Stand: `spezifiziert`, keine Version vor
erstem Bau. **Definition of Done:** gemäß Masterplan Kapitel 8 (12 Punkte) — noch offen.
