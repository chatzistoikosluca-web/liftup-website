# Spec — Form Field

Namespace: `form` · Wave 2 · Stage 2 (embeds Input Field) · Status: siehe `Component_Registry.md` (führend)

## 1. Zweck & Familienzuordnung
Formulare-Familie. Kombiniert Label + Input-Feld zu einem beschrifteten Formularfeld. Kein
eigener Breakout. Bettet Input-Feld als Vollinstanz ein (Stufe-2-Abhängigkeit).

## 2. Anatomie & Slots
- `label` (Pflicht, Text, de-DE)
- `input` (Pflicht — Vollinstanz von `InputField`, konsumiert ausschließlich eigene
  `input-*`-Tokens; keine Alias-Tokens, keine Nachbildung)
- optionaler Required-Indikator neben dem Label

Helper-Text/Fehlermeldung/Status (`error`/`success`) werden **nicht** von Form Field
dupliziert — sie werden als Props an die eingebettete Input-Feld-Instanz durchgereicht
(`helperText`, `status`), die bereits ihre eigenen Tokens dafür besitzt.

## 3. Component Tokens

| Component Token | Semantic Token |
|---|---|
| `form-gap` | `space-component-tight` |
| `form-label-text` | `color-text-primary` |
| `form-required-indicator` | `color-status-error` |

`form-label-text-style` nutzt die Typografie-Rolle `ui-default` (§2.6 Design_Tokens.md,
realisiert als `@utility`-Klasse, keine eigene CSS-Variable).

## 4. Varianten
Keine im Frozen-Bestand definierten Varianten.

## 5. Zustände
Form Field führt kein eigenes Zustandsmodell — alle interaktiven Zustände
(`focus`/`error`/`success`/`disabled`) gehören der eingebetteten Input-Feld-Instanz.
Form Field selbst kennt nur die binäre Eigenschaft `required` (kein Zustand im
Sinne von §7 Component_Token_Architecture, sondern statische Formular-Metadatik).

## 6. Responsive
Label immer oberhalb des Inputs, volle Breite des umgebenden Slots, an allen
Breakpoints identisch (kein eigenes Breakpoint-Verhalten).

## 7. Motion
Keine eigene Motion — Übergänge gehören ausschließlich der eingebetteten
Input-Feld-Instanz.

## 8. Accessibility
- `label` per `<label htmlFor>` mit der `id` der eingebetteten Input-Instanz verknüpft.
- Required-Indikator visuell (`*`) UND per `aria-required="true"` auf dem Input; der
  Indikator selbst `aria-hidden="true"`, stattdessen sichtbarer/vorgelesener Zusatztext
  am Label (z. B. „(Pflichtfeld)"), de-DE.
- Fehlermeldung/`aria-invalid`/`aria-describedby`: vollständig durch die Input-Instanz
  abgedeckt (Spec_Input_Feld.md §8) — keine Duplizierung.

## 9. Abhängigkeiten
Nachrichtlich — führend ist `Component_Registry.md`. Bettet Input-Feld als Vollinstanz
ein (Input-Feld noch nicht als `done` markiert erforderlich — bereits `done`, Welle 1).

## 10. Nutzungsregeln
Für jede beschriftete Formulareingabe. Nicht für Formularfelder ohne sichtbares Label
(→ direkte Input-Feld-Nutzung mit `aria-label`, Ausnahmefall).
**German-Content-Regel:** `label`, Required-Zusatztext, `helperText`/Fehlermeldungen der
eingebetteten Input-Instanz sind nutzerseitig sichtbar → Deutsch (de-DE).

## 11. Status & Version
Nachrichtlich — führend ist `Component_Registry.md`. Stand: `spezifiziert`, keine
Version vor erstem Bau. **Definition of Done:** gemäß Masterplan Kapitel 8 — noch offen.
