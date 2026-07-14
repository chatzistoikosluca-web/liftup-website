# Spec — Process

Namespace: `process` · Wave 3 · Stage 1 (embeds nothing) · Status: siehe `Component_Registry.md` (führend)

## 1. Zweck & Familienzuordnung
Prozess-Familie. Erklärt Arbeitsschritte/Ablauf als geordnete Sequenz. Bettet nichts
ein (Stufe 1, wie in der Registry geführt) — kein Card/CTA, keine neue
Komponentenfamilie für einzelne Schritte (kein separat exportierter
„ProcessStep"-Komponententyp).

## 2. Anatomie & Slots
Ein Component, eine wiederholte interne Schritt-Einheit (kein eigener Registry-Eintrag
pro Schritt):
- Liste von Schritten (Pflicht, natives `<ol>` — Reihenfolge ist inhärent semantisch)
- je Schritt: `number` (dekorativ, aus Listenposition abgeleitet), `title` (Pflicht),
  `description` (optional)

## 3. Component Tokens

| Component Token | Semantic Token |
|---|---|
| `process-step-number-text` | `color-accent-default` |
| `process-step-number-background` | `color-background-secondary` |
| `process-title-text` | `color-text-primary` |
| `process-description-text` | `color-text-secondary` |
| `process-connector` | `color-border-divider` |
| `process-gap` | `space-stack-default` |
| `process-step-gap` | `space-component-default` |

Zahlendarstellung nutzt die Typografie-Rolle `numeric` (§2.6 Design_Tokens.md,
`tabular-nums`); Titel/Beschreibung nutzen `ui-default`/`body-default`.

## 4. Varianten
Keine im Frozen-Bestand definierten Varianten.

## 5. Zustände
Nicht anwendbar — rein darstellend, nicht interaktiv.

## 6. Responsive
Vertikale Liste auf allen Breakpoints als verbindliches Minimum; ab einem mittleren
Breakpoint darf die Darstellung horizontal wechseln (Implementierungsdetail über
bestehendes `grid-cols-12`, Design_Tokens.md §11 — kein neuer Token nötig).

## 7. Motion
Keine eigene Motion — rein statische Darstellung.

## 8. Accessibility
- `<ol>` für inhärente Reihenfolge-Semantik (kein `<ul>`).
- `number`-Badge rein dekorativ → `aria-hidden="true"`, da die Position bereits über
  die Listensemantik vermittelt wird; `title` trägt den eigentlichen Inhalt.

## 9. Abhängigkeiten
Nachrichtlich — führend ist `Component_Registry.md`. Bettet nichts ein.

## 10. Nutzungsregeln
Für die Darstellung eines Arbeitsablaufs/Prozesses mit fester Reihenfolge. Nicht für
unsortierte Feature-Listen (→ Content-Modul).
**German-Content-Regel:** `title`, `description` sind nutzerseitig sichtbar → Deutsch
(de-DE). Kein finaler Website-Text, keine Kundencontent-Platzhalter.

## 11. Status & Version
Nachrichtlich — führend ist `Component_Registry.md`. Stand: `spezifiziert`, keine
Version vor erstem Bau. **Definition of Done:** gemäß Masterplan Kapitel 8 — noch offen.
