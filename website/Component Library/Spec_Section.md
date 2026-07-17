# Spec — Section

Namespace: `section` · Wave 1 · Stage 1 (embeds nothing) · Status: siehe `Component_Registry.md` (führend)

## 1. Zweck & Familienzuordnung
Familienübergreifender Struktur-Baustein: Container aller Familien, rein kompositorisch auf
Seitenebene, **ohne jede Token-Abhängigkeit zu den enthaltenen Komponenten** (Masterplan
Kapitel 1). Trägt die Breakout-Regel (Standardmodul/Sondermodul) und die Rhythmus-Grammatik.

## 2. Anatomie & Slots
- `content` (Pflicht, generischer Slot — nimmt beliebige Vollinstanzen anderer Familien auf)

## 3. Component Tokens

| Component Token | Semantic Token |
|---|---|
| `section-padding-y` | `space-section-default` (Sondermodul: `space-section-loose`) |
| `section-padding-x` | `space-page-margin-mobile` / `space-page-margin-desktop` |
| `section-gap` | `space-stack-default` |
| `section-size-max-width` | `container-standard` (Standardmodul) / `container-breakout` (Sondermodul) |

`section-size-max-width` referenziert `-size` gemäß §3 Component_Token_Architecture — hier
zulässig, da explizite geometrische Größe (Breakout-Budget).

## 4. Varianten
- **Standardmodul** — `container-standard`, `space-section-default`
- **Sondermodul** — `container-breakout`, `space-section-loose`

Je Variante vollständiges eigenes Token-Set, keine Vererbung.

## 5. Zustände
Nicht anwendbar — Section ist nicht interaktiv, kein Zustandsmodell.

## 6. Responsive
Padding-x wechselt an den Breakpoints zwischen `space-page-margin-mobile` und
`space-page-margin-desktop`; `section-size-max-width` bleibt Breakpoint-unabhängig, das
umgebende Grid (`grid-cols-12`, §11 Design_Tokens.md) zentriert den Inhalt innerhalb der Grenze.

## 7. Motion
Keine eigene Motion — Section transportiert keine Bewegung; etwaige Entrance-Animationen
gehören den eingebetteten Komponenten, nicht der Section selbst.

## 8. Accessibility
Section ist ein reines Layout-Element ohne eigene interaktive oder textuelle Semantik; ggf.
`<section aria-label>` nur, wenn die einbettende Seite mehrere Sections landmark-artig
unterscheiden muss (Entscheidung liegt bei der Seiten-Komposition, nicht bei dieser Spec).

## 9. Abhängigkeiten
Nachrichtlich — führend ist `Component_Registry.md`. Bettet nichts ein (rein kompositorisch);
ist Container aller anderen Familien, ohne Token-Beziehung zu ihnen.

## 10. Nutzungsregeln
Jeder Seitenabschnitt läuft durch eine Section. Sondermodul nur, wenn ein Abschnitt bewusst aus
dem Standard-Rhythmus ausbricht (Breakout-Budget), nicht als Standardfall.
**German-Content-Regel:** Section selbst führt keinen Text; alle sichtbaren Inhalte kommen aus
eingebetteten Komponenten und unterliegen dort der De-DE-Regel.

## 11. Status & Version
Nachrichtlich — führend ist `Component_Registry.md`. Stand: `spezifiziert`, keine Version vor
erstem Bau. **Definition of Done:** gemäß Masterplan Kapitel 8 (12 Punkte) — noch offen.
