# Component Registry — LiftUp

Status: **Lebendes Dokument (Phase 9, eröffnet 14.07.2026).** Dies ist der zentrale
Index gemäß `Component_Library_Masterplan.md` Kapitel 4. Für alle veränderlichen
Metadaten — **Status, Version, Abhängigkeiten** (und die daraus abgeleitete Stufe) —
ist ausschließlich dieses Dokument die führende Quelle. Es enthält keine
Architekturentscheidungen, keine Token-Werte und keine Verhaltensdefinitionen — diese
bleiben in den eingefrorenen Phase-1–8-Dokumenten bzw. entstehen erst in den
künftigen Spezifikationen (`Spec_*.md`).

Dieses Dokument ändert nichts an: Namespaces, Wellen, Stufen-Herleitung oder
Token-Architektur. Es bildet ausschließlich den aktuellen Bestand gemäß
`Component_Library_Masterplan.md` ab.

---

## Legende

| Feld | Bedeutung |
|---|---|
| **Komponente** | Name gemäß Masterplan Kapitel 1 |
| **Namespace** | Component-Token-Namespace gemäß `Component_Token_Architecture.md` §2 |
| **Familie / Kategorie** | Familien-Namespace oder familienübergreifender Struktur-Baustein |
| **Welle** | Build-Reihenfolge gemäß Masterplan Kapitel 3 (0–3) |
| **Stufe (abgeleitet)** | Position im Abhängigkeitsgraphen gemäß Masterplan Kapitel 1–2 — **kein** eigenständiges Attribut, wird bei jeder Graph-Änderung neu abgeleitet |
| **Abhängigkeitsstatus** | Was diese Komponente einbettet / von wem sie eingebettet wird, und ob diese Abhängigkeiten bereits gebaut sind |
| **Spezifikationsdatei** | Pfad gemäß Dokumentstruktur (Masterplan Kapitel 4); Datei existiert erst nach Registry-Eintrag `spezifiziert` |
| **Implementierungsstatus** | Status-Kette gemäß Masterplan Kapitel 4: `geplant → spezifiziert → gebaut → done` |
| **Version** | SemVer pro Komponente (Governance Kap. 6); vor erstem Bau ohne Wert |
| **Lifecycle** | `aktiv` / `deprecated` / `entfernt` — spiegelt den Token-Lifecycle-Gedanken (Governance §2) auf Komponentenebene; alle Einträge sind beim initialen Ausbau `aktiv` |
| **Notizen** | Nur bei operativer Relevanz (z. B. bekannter Governance-Kontakt) |

Wellen und Stufen sind unabhängige Achsen (Masterplan Kapitel 3) — eine Komponente
kann in einer frühen Stufe und einer späteren Welle stehen, oder umgekehrt.

---

## Welle 0 — Infrastruktur (kein UI, keine Komponenten-Registry-Einträge)

Status: **abgeschlossen (14.07.2026).**

Gemäß Masterplan Kapitel 3:

| Aufgabe | Status |
|---|---|
| Foundation Tokens aus `Design_Tokens.md` als Code anlegen (`@theme`) | **erledigt** |
| Die 15 Typografie-Rollen als `@utility` umsetzen | **erledigt** |
| `Component_Registry.md` anlegen (leer, mit Spaltenstruktur) | **erledigt** (dieses Dokument) |

**Tech-Stack-Entscheidung (nicht in den eingefrorenen Dokumenten vorgegeben, daher
mit Freigabe getroffen):** Next.js (App Router) + TypeScript + Tailwind CSS v4.
Projekt-Root: `06 Website (Code)/` (package.json, app/, node_modules/ liegen dort
neben den Phase-1–8-Dokumenten und der Component Library).

**Umgesetzt in `app/globals.css`:**
- Alle Foundation Tokens aus `Design_Tokens.md` §1–13 als CSS-Custom-Properties im
  `@theme`-Block, Namen und Werte 1:1 aus dem Dokument übernommen (keine
  Umbenennung, keine neuen Werte).
- Die 15 Typografie-Rollen aus §2.6 als `@utility`-Klassen, wie im Dokument
  ausdrücklich verlangt — nicht als einzelne CSS-Variablen.
- Component-Token-Ebene (§14) bewusst leer/reserviert; keine Komponente greift
  aktuell auf Primitive oder Semantic Tokens zu, weil noch keine Komponente existiert.
- Build (`npm run build`) und Lint (`npm run lint`) laufen fehlerfrei durch.

**Während der Umsetzung gefundener und behobener Infrastruktur-Punkt:** Tailwinds
automatische Content-Erkennung durchsuchte anfangs auch die Markdown-Dokumentation
im selben Ordner (`Design_Tokens.md`, `Component Library/*.md`) und erzeugte
dadurch ungewollt Utility-Klassen allein aus Tabellen-Erwähnungen wie „text-2xl"
oder „grid-cols-12". Behoben durch `source(none)` + explizites `@source` auf die
`app/`-Codebasis in `globals.css` (Kommentar dort). Kein Eingriff in Tokens oder
Namen — reine Build-Konfiguration.

**Namenskonflikt behoben (14.07.2026):** Die `@utility`-Implementierungsklasse der
Typografie-Rolle `table` (§2.6) wurde in `type-table` umbenannt, um die Kollision
mit Tailwinds Kern-Utility `.table` (`display: table`) zu vermeiden. Die frozen
Rolle selbst (`table`, Design_Tokens.md §2.6) ist unverändert — nur der
Implementierungs-Klassenname weicht ab. Kein Token-Wert geändert.

Damit ist Welle 1 gemäß Masterplan Kapitel 3 **startbereit**.

---

## Standing Rules (Phase 9, ab 14.07.2026)

**1. Usage-Conservation:** Claude-Code-Nutzung ist begrenzt. Künftige Arbeit
vermeidet unnötige breite Analysen, wiederholte Zusammenfassungen der frozen
Dokumente und ausführliche Audits. Nur gezielte Datei-Änderungen, knappe Checks und
kurze Status-Berichte.

**2. Sprache (gilt ab sofort für alle künftigen Specs, Komponenten, Seiten,
Content, UI):** Code, Dateinamen, Komponentennamen, Props, technische Kommentare
und Implementierungsstruktur: Englisch. Alle nutzerseitig sichtbaren
Website-Inhalte: Deutsch (de-DE) — inkl. Navigation, Buttons, Headings, Body Copy,
Formular-Labels, Validierungsmeldungen, SEO-Titel/-Beschreibungen, nutzersichtbare
Metadaten, nutzersichtbare Accessibility-Labels. Keine rückwirkende Übersetzung der
Architektur-Dokumente.

---

## Standing Quality Bar (Phase 9, ab 14.07.2026)

**3. Premium Execution Quality:** Künftige LiftUp-Implementierung zielt auf ein
premium, conversion-fokussiertes Agentur-Website-Niveau für ein ernsthaftes
KMU-Custom-Website-Projekt. Das bedeutet nicht zusätzliche Komplexität, sondern:
jede Section hat einen klaren Zweck; jede Komponente wirkt intentional; Spacing,
Typografie, Hierarchie und Responsiveness wirken premium; Interaktion/Motion
unterstützt Klarheit statt abzulenken; Code bleibt wartbar und system-basiert;
keine Template-Abkürzungen, keine zufälligen visuellen Entscheidungen, keine
überladenen Effekte, kein Demo-Füllcontent in finalen Seiten; alle nutzerseitigen
Inhalte Deutsch (de-DE); Umsetzung bleibt an das frozen Design-System-Fundament
gebunden. Gilt für künftige Specs, Komponenten, Seiten, UX-Entscheidungen, QA —
keine rückwirkende Änderung frozen Phase-1–8-Dokumente.

---

## Registry

### Welle 1 — Basis (Stufe 1, betten nichts ein)

| Komponente | Namespace | Familie / Kategorie | Welle | Stufe (abgeleitet) | Abhängigkeitsstatus | Spezifikationsdatei | Implementierungsstatus | Version | Lifecycle | Notizen |
|---|---|---|---|---|---|---|---|---|---|---|
| CTA-Button | `cta` | CTA (Familien-Namespace) | 1 | 1 | Bettet nichts ein. Wird eingebettet von: Navigation, Hero (beide noch nicht gebaut). | `Spec_CTA_Button.md` | done | 0.1.0 | aktiv | `components/cta/CTAButton.tsx`. Gate C bestanden (14.07.2026). Härtester Validator der Welle 1. |
| Input-Feld | `input` | Struktur-Baustein (abgeleitet aus Formulare-Zuständen) | 1 | 1 | Bettet nichts ein. Wird eingebettet von: Formularfeld (noch nicht gebaut). | `Spec_Input_Feld.md` | done | 0.1.0 | aktiv | `components/input/InputField.tsx`. Gate C bestanden (14.07.2026). Kein Label-Slot (gehört Formularfeld, Welle 2). |
| Card | `card` | Struktur-Baustein (`Formen_Grafiksystem.md`) | 1 | 1 | Bettet nichts ein. Wird eingebettet von: Testimonial, Content-Modul (optional) — beide noch nicht gebaut. | `Spec_Card.md` | done | 0.1.0 | aktiv | `components/card/Card.tsx`. Gate C bestanden (14.07.2026). Kein Shadow-Token (Design_Tokens.md §15). |
| Section | `section` | Struktur-Baustein (Standardmodul/Sondermodul, Breakout-Budget, Rhythmus) | 1 | 1 | Container aller Familien — rein kompositorisch, keine Token-Abhängigkeit. | `Spec_Section.md` | done | 0.1.0 | aktiv | `components/section/Section.tsx`. Gate C bestanden (14.07.2026). Validiert Breakout-Budget/Rhythmus. |

### Welle 2 — Interaktive Komposite

| Komponente | Namespace | Familie / Kategorie | Welle | Stufe (abgeleitet) | Abhängigkeitsstatus | Spezifikationsdatei | Implementierungsstatus | Version | Lifecycle | Notizen |
|---|---|---|---|---|---|---|---|---|---|---|
| Formularfeld | `form` | Formulare (Familien-Namespace) | 2 | 2 | Bettet ein: Input-Feld (als Vollinstanz, `done`). | `Spec_Formularfeld.md` | done | 0.1.0 | aktiv | `components/form/FormField.tsx`. Gate C bestanden (14.07.2026). Kein eigenes Zustandsmodell — delegiert an eingebettete Input-Instanz. |
| Navigation | `nav` | Navigation (Familien-Namespace) | 2 | 2 | Bettet ein: CTA-Button (optional, als Vollinstanz, `done`). | `Spec_Navigation.md` | done | 0.1.0 | aktiv | `components/nav/Navigation.tsx`. Gate C bestanden (14.07.2026). **Governance-Attention-Item (weiterhin offen):** Zustände „Scroll", „Reduziert", „Aktuelle Seite" (Kollision mit `-active`) sowie Mobile-Menü offen/geschlossen — außerhalb des geschlossenen Vokabulars. Implementiert: „Aktuelle Seite" über natives `aria-current` + bestehende Tokens; Menü-Auf/Zu über lokalen Komponenten-State (kein neuer Token/Vokabular). Formale Vokabular-Entscheidung weiterhin nicht getroffen. |
| Footer | `footer` | Footer (Familien-Namespace) | 2 | **1** | Bettet nichts ein. | `Spec_Footer.md` | done | 0.1.0 | aktiv | `components/footer/Footer.tsx`. Gate C bestanden (14.07.2026). Stufe 1 trotz Welle 2. Kein CTA-/Input-Embedding. |

### Welle 3 — Inhalts-Familien

| Komponente | Namespace | Familie / Kategorie | Welle | Stufe (abgeleitet) | Abhängigkeitsstatus | Spezifikationsdatei | Implementierungsstatus | Version | Lifecycle | Notizen |
|---|---|---|---|---|---|---|---|---|---|---|
| Hero | `hero` | Hero (Familien-Namespace) | 3 | 2 | Bettet ein: CTA-Button (mind. 1×, als Vollinstanz, `done`). | `Spec_Hero.md` | done | 0.1.0 | aktiv | `components/hero/Hero.tsx`. Gate C bestanden (14.07.2026). Entrance-Motion-Ausnahme umgesetzt (analog CTA-Spinner). |
| Content-Modul | `content` | Content (Familien-Namespace) | 3 | 2 | Bettet optional ein: Card (als Vollinstanz, `done`, nicht verpflichtend). | `Spec_Content_Modul.md` | done | 0.1.0 | aktiv | `components/content/ContentModule.tsx`. Gate C bestanden (14.07.2026). **Governance-Attention-Item (weiterhin offen):** binärer Zustand „expanded" bei Aufklapp-Vertiefung außerhalb Vokabular — umgangen über natives `<details>/<summary>`, keine Vokabular-Entscheidung getroffen. |
| Prozess-Schritt / Prozess-Ablauf | `process` | Prozess (Familien-Namespace) | 3 | **1** | Bettet nichts ein. | `Spec_Prozess.md` | done | 0.1.0 | aktiv | `components/process/Process.tsx`. Gate C bestanden (14.07.2026). Keine eigene Sub-Komponente pro Schritt. |
| Testimonial | `trust` | Vertrauen (Familien-Namespace) | 3 | 2 | Bettet ein: Card (als Vollinstanz, `done`). | `Spec_Testimonial.md` | done | 0.1.0 | aktiv | `components/testimonial/Testimonial.tsx`. Gate C bestanden (14.07.2026). Kein Demo-/Fake-Content vorgesehen. |

### Stufe 3 — Sektionale Kompositionen

Gemäß Masterplan Kapitel 1 werden Stufe-3-Kompositionen (z. B. Kontaktformular,
CTA-Sektion) **nicht vorab inventarisiert**. Es existieren aktuell keine
Registry-Einträge dieser Stufe. Einträge entstehen erst bei realem Bedarf über die
Erweiterungsstrategie (Masterplan Kapitel 5).

---

## Abhängigkeitsgraph (Referenz, nicht führend — führend ist Masterplan Kapitel 2)

```
CTA-Button ──► Navigation
CTA-Button ──► Hero
Input-Feld ──► Formularfeld
Card ──────► Testimonial
Card ──────► Content-Modul (optional)
Section ───► alle Familien (rein kompositorisch, keine Token-Beziehung)
```

Alle sechs Stufe-1-Komponenten (CTA-Button, Input-Feld, Card, Section, Prozess,
Footer) betten nichts ein. Alle fünf Stufe-2-Komponenten betten genau eine
Stufe-1-Komponente über einen Slot ein. Keine Komponente ist aktuell gebaut — jede
Abhängigkeit ist damit Stand jetzt unerfüllt (rein architektonisch vorgemerkt, kein
Blocker für die Registry-Anlage selbst, wohl aber für den tatsächlichen Bau in
Welle 2/3).

---

## Bestand

**11 Komponenten** (6 auf Stufe 1, 5 auf Stufe 2, 0 auf Stufe 3) über 3 Bau-Wellen
plus Welle 0 (Infrastruktur). Alle Einträge aktuell im Status `geplant`, Lifecycle
`aktiv`. Kein Eintrag hat eine Version — SemVer beginnt gemäß Governance Kapitel 6
erst mit dem ersten Bau.
