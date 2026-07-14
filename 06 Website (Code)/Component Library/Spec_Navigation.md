# Spec — Navigation

Namespace: `nav` · Wave 2 · Stage 2 (embeds CTA Button) · Status: siehe `Component_Registry.md` (führend)

**Governance-Hinweis (nicht hier gelöst, s. Registry):** Navigation ist laut Masterplan
Kapitel 3 der erste planbare Governance-Kontakt. Offen, ausschließlich über den
bestehenden Governance-Prozess zu klären, **nicht** in dieser Spec vorentschieden:
- Zustand „Scroll" (verhaltensabhängig, außerhalb des geschlossenen Vokabulars)
- Zustand „Reduziert" (kondensierte Nav-Höhe beim Scrollen, außerhalb Vokabular)
- „Aktuelle Seite"-Kennzeichnung — kollidiert namentlich mit Suffix `-active`
  (bedeutet dort „gedrückt", nicht „aktuelle Seite")
- Mobile-Menü offen/geschlossen (binärer Zustand, gleiche Kategorie wie das bereits für
  Content-Modul „expanded" notierte Zukunftsthema)

Diese Spec implementiert nur, was mit dem bestehenden Vokabular sauber lösbar ist, und
markiert den Rest als offen.

## 1. Zweck & Familienzuordnung
Navigation-Familie. Haupt-Seitennavigation. Bettet CTA-Button optional als Vollinstanz
ein (z. B. „Kontakt aufnehmen"-CTA im Nav-Bereich).

## 2. Anatomie & Slots
- `brand` (Pflicht, Logo/Markenname)
- `links` (Pflicht, Liste einfacher Text-Links — keine eigene Komponente, nutzt die
  Typografie-Rolle `navigation` direkt)
- `cta` (optional — Vollinstanz von `CTAButton`, eigene Tokens, keine Alias-Tokens)
- `menu-toggle` (Pflicht ab dem Breakpoint, an dem Links einklappen)

## 3. Component Tokens

| Component Token | Semantic Token |
|---|---|
| `nav-background` | `color-background-primary` |
| `nav-border` | `color-border-divider` |
| `nav-text` | `color-text-primary` |
| `nav-text-hover` | `color-accent-hover` |
| `nav-focus-ring` | `color-focus-ring` |
| `nav-padding-x` | `space-page-margin-mobile` / `space-page-margin-desktop` |
| `nav-padding-y` | `space-component-default` |
| `nav-gap` | `space-component-default` |
| `nav-transition` | `motion-hover` |
| `nav-toggle-size-min-height` | — (`-size`, Wert erst beim Bau, wie `cta-size-min-height`) |

Link-Textstil: Typografie-Rolle `navigation` (§2.6, `@utility`-Klasse).

## 4. Varianten
Keine im Frozen-Bestand definierten Varianten.

## 5. Zustände
Aus dem bestehenden Vokabular abgedeckt: `default`, `hover`, `focus` für Links
(`nav-text`/`nav-text-hover`/`nav-focus-ring`). `disabled` nicht anwendbar (Links sind
nie deaktiviert). Alles Weitere (Scroll/Reduziert/Aktuelle Seite/Menü offen) — siehe
Governance-Hinweis oben, hier **nicht definiert**.

**Pragmatischer Zwischenweg für „aktuelle Seite" (keine Vorwegnahme der
Vokabular-Entscheidung):** Kennzeichnung ausschließlich über natives `aria-current="page"`
und eine Attribut-Selektor-Regel (`[aria-current="page"]`), die ausschließlich bereits
bestehende Tokens (`nav-text-hover`, `nav-border`) referenziert — kein neuer Tokenname,
keine neue Zustandssuffix-Entscheidung. Ersetzt die Governance-Klärung nicht, vermeidet
aber, dass Wave 2 an diesem Punkt blockiert.

## 6. Responsive
Unterhalb eines Breakpoints (Empfehlung: `breakpoint-md`) kollabieren `links`/`cta` hinter
`menu-toggle`; oberhalb davon horizontale Darstellung aller Slots. Öffnen/Schließen-Verhalten
des mobilen Menüs: siehe Governance-Hinweis (Zustand offen).

## 7. Motion
`nav-transition` (`motion-hover`) für Link-Hover/Focus. Menü-Öffnen-Animation nicht
spezifiziert, solange der zugehörige Zustand ungeklärt ist (kein Platzhalter-Wert erfunden).
`prefers-reduced-motion`: Hover-Übergang entfällt.

## 8. Accessibility
- `<nav aria-label="Hauptnavigation">` (de-DE-Label).
- Aktuelle Seite: `aria-current="page"` (siehe §5).
- `menu-toggle`: `aria-expanded` + `aria-controls` auf die Link-Liste; state selbst
  außerhalb dieser Spec (Governance-Hinweis).
- Fokus-Ring über `nav-focus-ring` auf allen Links; eingebettete CTA-Instanz nutzt ihren
  eigenen Fokus-Ring (`cta-focus-ring`), nicht `nav-focus-ring`.

## 9. Abhängigkeiten
Nachrichtlich — führend ist `Component_Registry.md`. Bettet CTA-Button optional als
Vollinstanz ein (CTA-Button bereits `done`, Welle 1).

## 10. Nutzungsregeln
Einmalig pro Seite als Haupt-Navigation. Kein Ersatz für Footer-Links (eigene Familie).
**German-Content-Regel:** `brand`-Text (falls Text statt Logo), Link-Labels,
`aria-label`-Werte sind nutzerseitig sichtbar/hörbar → Deutsch (de-DE).

## 11. Status & Version
Nachrichtlich — führend ist `Component_Registry.md`. Stand: `spezifiziert`, keine Version
vor erstem Bau. **Definition of Done:** gemäß Masterplan Kapitel 8 — noch offen; zusätzlich
abhängig von der Governance-Klärung der oben genannten Zustände, bevor `done` möglich ist,
falls diese Zustände für den finalen Bau zwingend gebraucht werden.
