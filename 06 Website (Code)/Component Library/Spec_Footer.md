# Spec — Footer

Namespace: `footer` · Wave 2 · Stage 1 (embeds nothing) · Status: siehe `Component_Registry.md` (führend)

## 1. Zweck & Familienzuordnung
Footer-Familie. Statischer Seitenabschluss: Marke, Link-Gruppen, rechtliche
Links, Copyright. Bettet **nichts** ein (Stufe 1, wie in der Registry geführt) —
kein CTA-Button, keine Input-Instanz. Enthält ausschließlich einfache Links/Text,
keine neue Komponentenfamilie (z. B. kein eigenständiges „Social-Icon-Button").

## 2. Anatomie & Slots
- `brand` (Pflicht, Logo/Markenname)
- `link-groups` (Pflicht, ein oder mehrere Gruppen mit Überschrift + einfachen
  Text-Links — keine eigene Komponente)
- `legal-links` (Pflicht, z. B. Impressum/Datenschutz — einfache Links)
- `copyright` (Pflicht, Text)
- `social-links` (optional, einfache Icon-Links — nutzt bestehendes Icon-System,
  keine neue Button-Komponente)

## 3. Component Tokens

| Component Token | Semantic Token |
|---|---|
| `footer-background` | `color-surface-deep` |
| `footer-text` | `color-text-on-deep` |
| `footer-link-text` | `color-text-on-deep` |
| `footer-focus-ring` | `color-focus-ring` |
| `footer-padding-y` | `space-section-default` |
| `footer-padding-x` | `space-page-margin-mobile` / `space-page-margin-desktop` |
| `footer-gap` | `space-stack-default` |

Kein `footer-link-text-hover`-Farbtoken: Design_Tokens.md definiert keine
Hover-Farbe, die auf `color-surface-deep` ausreichend Kontrast böte. Hover wird
stattdessen strukturell über Unterstreichung gelöst (kein neuer Token nötig).
Link-Text nutzt die Typografie-Rolle `navigation`, Copyright/Legal-Text die Rolle
`caption` (§2.6, `@utility`-Klassen).

## 4. Varianten
Keine im Frozen-Bestand definierten Varianten.

## 5. Zustände
`default`, `hover` (Unterstreichung, siehe §3), `focus` (`footer-focus-ring`) für
Links. `disabled`/`error`/`success` nicht anwendbar (keine Formularelemente).

## 6. Responsive
`link-groups` mehrspaltig ab einem mittleren Breakpoint (Empfehlung:
`breakpoint-md`), einspaltig gestapelt darunter. Kein eigenes `-size`-Token nötig.

## 7. Motion
Keine eigene Motion außer der strukturellen Hover-Unterstreichung (kein
Transition-Token erforderlich, da reine `text-decoration`-Änderung).

## 8. Accessibility
- `<footer>`-Landmark, keine zusätzliche `aria-label` nötig (eindeutige native Rolle).
- Alle Links fokussierbar mit sichtbarem Ring über `footer-focus-ring`.
- `social-links`: `aria-label` pro Icon-Link (z. B. „LinkedIn öffnen"), da Icon
  allein keinen Textinhalt liefert.

## 9. Abhängigkeiten
Nachrichtlich — führend ist `Component_Registry.md`. Bettet nichts ein. Sollte ein
künftiger Bedarf entstehen, der CTA-Button oder Input-Feld im Footer erfordert
(z. B. Newsletter-Formular), ändert das Stufe/Abhängigkeitsstatus in der Registry
und erfordert einen eigenen Durchlauf der Erweiterungsstrategie (Masterplan
Kapitel 5) — nicht Teil dieser Spec.

## 10. Nutzungsregeln
Einmalig pro Seite als Seitenabschluss. Kein Ersatz für Navigation (eigene Familie).
**German-Content-Regel:** `brand`-Text, Link-Labels, Legal-Links, Copyright-Text und
`aria-label`-Werte sind nutzerseitig sichtbar/hörbar → Deutsch (de-DE).

## 11. Status & Version
Nachrichtlich — führend ist `Component_Registry.md`. Stand: `spezifiziert`, keine
Version vor erstem Bau. **Definition of Done:** gemäß Masterplan Kapitel 8 — noch offen.
