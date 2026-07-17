# Component Token Architecture — LiftUp

Dieses Dokument definiert ausschließlich die Component-Token-Architektur — die
dritte, in `Design_System_Governance.md` reservierte Ebene (Primitive → Semantic →
Component). Es enthält keine Foundation-Werte (siehe `Design_Tokens.md`) und keine
Governance-/Prozessregeln (siehe `Design_System_Governance.md`). Es enthält keine
konkrete UI, kein Design, keine Komponente.

---

## 1. Zweck und Abgrenzung

Dieses Dokument legt fest, wie Komponenten künftig ihre eigenen Tokens strukturieren,
referenzieren und miteinander komponieren — bevor eine einzige konkrete Komponente
entsteht. Es beantwortet ausschließlich: welche Namespaces existieren, wie ein
Component Token aufgebaut ist, wie es auf Semantic Tokens referenziert, wie
Varianten, Zustände und Kompositionen modelliert werden, und wie neue Namespaces
künftig entstehen dürfen.

---

## 2. Component-Namespaces

**Familien-eigene Namespaces** (1:1 zu den 8 Familien aus `Komponenten_Designsystem.md`):

| Namespace | Familie |
|---|---|
| `nav` | Navigation |
| `hero` | Hero |
| `content` | Content |
| `process` | Prozess |
| `trust` | Vertrauen |
| `cta` | CTA |
| `form` | Formulare |
| `footer` | Footer |

**Familienübergreifende Struktur-Namespaces:**

| Namespace | Begründung |
|---|---|
| `section` | Umsetzung der Grammatik aus `Formen_Grafiksystem.md` (Standardmodul/Sondermodul, Breakout-Budget, Rhythmus). |
| `card` | Explizit in `Formen_Grafiksystem.md` als künftige Komponente benannt; wird voraussichtlich von mehreren Familien genutzt. |
| `input` | Notwendig aus den Formulare-Zuständen (Fokus/Fehler/Erfolg gelten pro Feld) abgeleitet. |

**Bewusst nicht angelegt:** `modal` (in `Schatten_System.md` explizit als unbegründete Spekulation entfernt), `badge` (kein familienübergreifender dokumentierter Bedarf), `timeline` (deckungsgleich mit `process`, keine zweite Bezeichnung für denselben Sachverhalt).

---

## 3. Generisches Component-Token-Schema

Jede Komponente zieht nur die Unterkategorien, die sie tatsächlich braucht.

| Unterkategorie | Referenziert aus Foundation | Pflicht? |
|---|---|---|
| `-background` | Color (Semantic) | nur bei sichtbarer Fläche |
| `-text` | Color (Semantic) | nur bei Textinhalt |
| `-border` | Color (Semantic) + Border | nur bei sichtbarer Kante |
| `-icon` | Color (Semantic) | nur bei Icon-Nutzung |
| `-radius` | Radius | nur bei eigener Formgebung |
| `-padding-x` / `-padding-y` | Spacing (Semantic) | fast immer |
| `-gap` | Spacing (Semantic) | nur bei internen Mehrfachelementen |
| `-text-style` | Typography-Rolle | nur bei eigenem Textelement |
| `-transition` | Motion (Semantic) | nur bei interaktivem Element |
| `-focus-ring` | Focus | nur bei fokussierbarem Element |
| `-size` | — (Struktur-Slot, kein Foundation-Wert vorbelegt) | nur bei expliziter geometrischer Größe |

**Zur `-size`-Kategorie:** Wird ausschließlich verwendet, wenn eine Komponente eine
explizite geometrische Größe oder Mindestgröße benötigt — dazu können Höhe, Breite
oder die Größe interner Elemente gehören. Sie ist nicht automatisch für jede
Komponente verpflichtend. Konkrete Werte entstehen erst beim Design der jeweiligen
Komponente; dieses Dokument legt keine Werte fest, insbesondere keine konkreten
Touch-Target-Maße. Der Zweck dieser Kategorie ist ausschließlich sicherzustellen,
dass Größen künftig sauber über Component Tokens modelliert werden — nicht hart im
Komponenten-Code.

---

## 4. Referenzfluss

**Primitive → Semantic → Component → Komponenten-Code. Niemals rückwärts, niemals
übersprungen.**

Beispiel:

```
color-accent-hover (Semantic)
        ↓
cta-background-hover (Component)
        ↓
.cta:hover { background: var(--cta-background-hover); }
```

Ein Component Token referenziert ausschließlich ein Semantic Token — niemals ein
Primitive, niemals ein anderes Component Token.

---

## 5. Slot- und Einbettungsregel

Eine Komponente, die über einen Slot eine andere Komponente einbettet, rendert
immer eine vollständige Instanz dieser eingebetteten Komponente. Diese Instanz
konsumiert ausschließlich ihre eigenen Component Tokens.

Die einbettende Komponente darf dafür niemals:

- eigene Alias-Tokens für die eingebettete Komponente anlegen
- deren Component Tokens referenzieren
- deren interne Token-Struktur duplizieren
- deren Darstellung über lokale Ersatz-Tokens nachbilden

**Beispiel:** Eine Navigation mit CTA-Slot rendert eine echte CTA-Komponente.

Zulässig: `Navigation → vollständige CTA-Instanz → CTA-Tokens`
Nicht zulässig: `nav-cta-background → cta-background`

Diese Regel schließt Component-zu-Component-Token-Referenzen, versteckte
Kopplungen und Zyklen eindeutig aus.

---

## 6. Variantenmodell

Jede Variante definiert ihr eigenes vollständiges Token-Set, unterschieden durch
ein `-{variante}`-Segment. Keine Variante erbt von einer anderen — auch bei
übereinstimmenden Werten referenzieren beide unabhängig dasselbe Semantic Token.

Aktuell architektonisch integriert (jeweils vollständig aus bestehenden Foundation-
Tokens ableitbar, keine neuen Werte):

| Variante | Grundlage |
|---|---|
| Primary | Accent-basierte Standardbehandlung (Farbpalette.md) |
| Secondary | Reduzierte Gewichtung über Border/Text statt Accent-Fill |
| Danger | `color-status-error`, ausschließlich als Text-/Rand-Behandlung — nie als vollflächiger Fill, damit die Statusfarbe nie dieselbe Dominanz wie Accent erreicht (Farbpalette.md, Rollenregeln) |

---

## 7. Zustandsmodell

| Zustand | Grundlage |
|---|---|
| default | jeweilige Basis-Semantic-Tokens |
| hover | `color-accent-hover`, `motion-hover` |
| active | `color-accent-active` |
| focus | `color-focus-ring`, Focus-Tokens |
| disabled | Text/Icon: `color-text-disabled`; Rand: `color-border-divider`; Hintergrund bleibt unverändert |
| loading | Kompositionsmuster: Label wird durch Spinner-Slot ersetzt/ergänzt, Interaktion wie bei disabled deaktiviert, Rotation nutzt bestehende Motion-Primitives (`duration-slow`, `ease-standard`) mit unendlicher Wiederholung |
| success / error | `color-status-success` / `color-status-error` |

---

## 8. Kompositionsmodell

Zusammengesetzte Komponenten (z. B. Icon-Button, Formularfeld mit Fehlermeldung,
Navigation mit eingebettetem CTA) werden über benannte Slots realisiert. Ein Slot
nimmt entweder Text, ein Icon oder eine vollständige Instanz einer anderen
Komponente auf (siehe Abschnitt 5). Beispiele für Slot-Namen: `leading-icon`,
`trailing-icon`, `label`, `helper-text`, `spinner`.

---

## 9. Namespace-Erweiterungsregel

Ein neuer Component-Namespace wird nur angelegt, nachdem geprüft wurde, ob ein
bestehender Namespace (Familie oder Struktur-Baustein) das Bedürfnis bereits
abdeckt. Dieselbe Bedarfslogik, die bereits Foundation- und Semantic-Erweiterungen
regelt (`Design_System_Governance.md`, Kapitel 2/3), gilt hiermit explizit auch für
die Component-Namespace-Ebene.

---

## 10. Architekturtest und bekannte, nicht blockierende Zukunftspunkte

Geprüftes Szenario: 350+ Komponenten, mehrere Entwickler, mehrere Produkte, White
Label, Dark Mode. Mit den in diesem Dokument enthaltenen Regeln (insbesondere der
Slot- und Einbettungsregel sowie der `-size`-Kategorie) bleibt die Architektur in
diesem Szenario unverändert tragfähig — Namespaces bleiben eindeutig, das
Varianten-Muster skaliert ohne Strukturänderung, und die Referenzkette bleibt in
jedem geprüften Fall exakt drei Ebenen tief.

**Ein bekannter, ausdrücklich nicht blockierender künftiger Auslöser:** Das in
`Design_System_Governance.md` festgelegte Zustands-Vokabular ist geschlossen.
Sobald eine reale Komponente mit binärem Zustand (z. B. Toggle, Checkbox, Tab,
Akkordeon) entsteht, wird sie einen dort nicht enthaltenen Zustand benötigen (z. B.
"checked", "selected", "expanded"). Governance wird deshalb jetzt nicht verändert.
Erst wenn eine reale Komponente einen solchen Zustand tatsächlich benötigt, wird
das Zustandsvokabular gemäß dem bestehenden Governance-Prozess geprüft und
gegebenenfalls erweitert. Keine vorsorglichen Zustände werden jetzt ergänzt.
