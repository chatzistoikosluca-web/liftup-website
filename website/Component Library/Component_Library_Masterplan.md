# Component Library Masterplan — LiftUp

Status: **Final freigegeben und eingefroren (13.07.2026).** Dieses Dokument ist die
verbindliche Architekturgrundlage der LiftUp Component Library. Es wird nicht mehr
erweitert oder neu interpretiert. Änderungen sind ausschließlich über den bestehenden
Governance-Prozess (`Design_System_Governance.md`) zulässig. Basis: die 16
eingefrorenen Dokumente der Phasen 1–7.

---

## 1. Komponenten-Hierarchie

Die Library ist zweiachsig organisiert: **Familie × Stufe**.

- **Familie** = die 8 Komponentenfamilien aus `Komponenten_Designsystem.md` plus die 3
  familienübergreifenden Struktur-Namespaces aus `Component_Token_Architecture.md`
  (`section`, `card`, `input`). Es existieren exakt die 11 eingefrorenen Namespaces —
  keine weiteren.
- **Stufe** = die Position einer Komponente im Einbettungsgraphen. **Die Stufe ist
  keine intrinsische Eigenschaft einer Komponente, sondern ein abgeleiteter Wert: sie
  ergibt sich ausschließlich aus dem aktuellen Abhängigkeitsgraphen (Kapitel 2).**
  Ändert eine Spezifikationsänderung die Einbettungen einer Komponente (versionierte
  Minor-/Major-Änderung), wird die Stufe im selben Registry-Edit neu abgeleitet und
  mitgeführt. Eine Komponente „besitzt" ihre Stufe nicht — sie hat sie, solange ihr
  Abhängigkeitsbild unverändert ist.

### Stufe 1 — Basis-Komponenten (betten nichts ein)

| Komponente | Namespace | Familie / Herkunft |
|---|---|---|
| CTA-Button | `cta` | CTA |
| Input-Feld | `input` | Struktur-Baustein (abgeleitet aus Formulare-Zuständen) |
| Card | `card` | Struktur-Baustein (`Formen_Grafiksystem.md`) |
| Section | `section` | Struktur-Baustein (Standardmodul/Sondermodul, Breakout-Budget, Rhythmus) |
| Prozess-Schritt / Prozess-Ablauf | `process` | Prozess |
| Footer | `footer` | Footer |

### Stufe 2 — Komposit-Komponenten (betten Stufe-1-Komponenten über Slots ein)

| Komponente | Namespace | Bettet ein |
|---|---|---|
| Formularfeld | `form` | Input-Feld |
| Navigation | `nav` | CTA-Button |
| Hero | `hero` | CTA-Button |
| Content-Modul (Text / Text+Bild / Aufklapp-Vertiefung) | `content` | optional Card |
| Testimonial | `trust` | Card |

### Stufe 3 — Sektionale Kompositionen

Kompositionen wie Kontaktformular (bettet Formularfelder ein) oder CTA-Sektion
entstehen bedarfsgetrieben und werden **nicht vorab inventarisiert**. Sie erhalten
erst mit realem Bedarf einen Registry-Eintrag über die Erweiterungsstrategie
(Kapitel 5).

**Zur Stufenanzahl:** Die Gliederung in drei Stufen ist eine **pragmatische
Ordnungsgrenze für den initialen Ausbau** — sie beschreibt den aktuellen
Einbettungsgraphen, keine Architekturregel. Die eingefrorene Slot-/Einbettungsregel
(`Component_Token_Architecture.md` §5) begrenzt Einbettungstiefe bewusst nicht; sie
garantiert Entkopplung auf jeder Ebene. Entsteht künftig eine legitime Komposition
mit größerer Einbettungstiefe, ist das kein Systembruch, sondern ein neuer Stufenwert
im Registry — abgeleitet wie jeder andere.

**Section** ist Container aller Familien — rein kompositorisch auf Seitenebene, ohne
jede Token-Abhängigkeit zu den enthaltenen Komponenten.

---

## 2. Abhängigkeiten

Eine Abhängigkeit existiert in dieser Library **ausschließlich als Slot-Einbettung**
gemäß der eingefrorenen Slot-/Einbettungsregel: Die einbettende Komponente rendert
eine vollständige Instanz, die eingebettete Instanz konsumiert ausschließlich ihre
eigenen Component Tokens. Es gibt keine Token-Abhängigkeiten zwischen Komponenten —
die Slot-Regel schließt Alias-Tokens, Cross-Referenzen und Duplikate aus.

**Abhängigkeitsgraph (initialer Bestand):**

```
CTA-Button ──► Navigation
CTA-Button ──► Hero
Input-Feld ──► Formularfeld
Card ──────► Testimonial
Card ──────► Content-Modul (optional)
Section ───► alle Familien (rein kompositorisch, keine Token-Beziehung)
```

Der Graph ist **azyklisch** — die Referenzrichtung der Slot-Regel macht Zyklen
strukturell unmöglich.

**Zwei Tiefenbegriffe, die nie verwechselt werden dürfen:**

- **Token-Referenztiefe:** pro Token immer exakt drei Ebenen (Primitive → Semantic →
  Component), garantiert durch `Component_Token_Architecture.md` §4 — unabhängig
  davon, wie tief Instanzen ineinander verschachtelt sind.
- **Instanz-Einbettungstiefe:** beschreibt, wie viele Slot-Ebenen eine Komposition
  umfasst. Sie ist durch die Architektur **nicht begrenzt** und wächst mit legitimen
  Kompositionen (bereits Stufe 3 umfasst zwei Einbettungsebenen: Kontaktformular →
  Formularfeld → Input). Die Slot-Regel sorgt dafür, dass jede zusätzliche
  Einbettungsebene die Token-Referenztiefe unberührt lässt.

Die Stufe jeder Komponente (Kapitel 1) ist die aus diesem Graphen abgeleitete
Einbettungstiefe und wird bei jeder Änderung des Graphen im Registry neu abgeleitet.

---

## 3. Build-Reihenfolge

Vier Wellen. Jede Welle wird erst begonnen, wenn die vorige das Bestands-Audit
(Kapitel 7) bestanden hat. Wellen sind Build-Reihenfolge, Stufen sind Klassifikation —
die beiden Achsen sind unabhängig.

**Welle 0 — Infrastruktur (kein UI):**
- Foundation Tokens aus `Design_Tokens.md` als Code anlegen (`@theme`).
- Die 15 Typografie-Rollen als `@utility` umsetzen.
- `Component_Registry.md` anlegen (leer, mit Spaltenstruktur).

**Welle 1 — Basis:** CTA-Button, Input-Feld, Card, Section.
Bewusst die architektonisch härtesten Validatoren zuerst: CTA validiert Varianten-
und Zustandsmodell vollständig, Input validiert Formularzustände, Card validiert den
familienübergreifenden Baustein, Section validiert Breakout-Budget und
Rhythmus-Grammatik.

**Welle 2 — Interaktive Komposite:** Formularfeld, Navigation, Footer.
Hier entstehen die ersten realen Slot-Einbettungen (Formularfeld → Input,
Navigation → CTA).

**Erster planbarer Governance-Kontakt liegt in dieser Welle:** Die eingefrorene
Familiendefinition der Navigation (`Komponenten_Designsystem.md`) enthält die
Zustände **Scroll** und **Reduziert**, die außerhalb des geschlossenen
Zustandsvokabulars aus `Design_System_Governance.md` Kap. 5 liegen, sowie den Zustand
**Aktiv** (aktuelle Seite), der semantisch mit dem Vokabular-Suffix `-active`
(gedrückt) kollidiert. Der Masterplan entscheidet diese Fragen **nicht** — die
konkrete Auflösung erfolgt zum Bauzeitpunkt der Navigation ausschließlich über den
bestehenden Governance-Prozess (Erweiterungsprüfung, Dokumentationspflicht,
Review-Fragen), exakt wie in `Component_Token_Architecture.md` §10 für
Vokabular-Erweiterungen vorgezeichnet. Der Plan stellt lediglich sicher, dass dieser
Kontakt eingeplant ist und Welle 2 nicht überrascht.

**Welle 3 — Inhalts-Familien:** Hero, Content-Modul, Prozess, Testimonial.
Der in `Component_Token_Architecture.md` §10 dokumentierte Auslöser für binäre
Zustände (z. B. „expanded" bei der Aufklapp-Vertiefung des Content-Moduls) kann hier
zusätzlich eintreten — auch er läuft über den bestehenden Governance-Prozess.

Kein Element einer Welle benötigt eine Komponente einer späteren Welle — die
Reihenfolge folgt strikt dem Abhängigkeitsgraphen aus Kapitel 2.

---

## 4. Dokumentstruktur

Ordner: `06 Website (Code)/Component Library/`

```
Component Library/
├── Component_Library_Masterplan.md      (dieses Dokument)
├── Component_Registry.md                (zentraler Index)
├── Spec_CTA_Button.md
├── Spec_Input_Feld.md
├── Spec_Card.md
├── Spec_Section.md
├── … (eine Spezifikation pro Komponente)
```

### Component_Registry.md — der zentrale Index

Eine Zeile pro Komponente: **Komponente | Familie/Namespace | Stufe | Abhängigkeiten
| Status | Version**.

Status-Kette: `geplant → spezifiziert → gebaut → done`.

**Verbindliche Master-Regel gegen Parallelkopien:** Für alle **veränderlichen
Metadaten** — **Status, Version, Abhängigkeiten** (und die daraus abgeleitete Stufe) —
ist ausschließlich die **Registry die führende Quelle**. Die Spezifikationen sind
ausschließlich führend für **Verhalten und Implementierungsdetails** der Komponente
(Anatomie, Tokens, Varianten, Zustände, Responsive, Motion, Accessibility,
Nutzungsregeln). Nennt eine Spezifikation Metadaten (etwa in den Abschnitten 9 und
11), sind das nachrichtliche Verweise auf den Registry-Stand — bei jeder Abweichung
gilt die Registry, und die Spezifikation wird ihr angeglichen, nie umgekehrt. Damit
existiert für jedes Faktum genau eine führende Quelle.

### Spezifikations-Template (fix, 11 Abschnitte, für jede Komponente identisch)

1. **Zweck & Familienzuordnung** — inkl. Architekturrolle und Breakout-Regel der Familie
2. **Anatomie & Slots**
3. **Component Tokens** — Tabelle: Component Token → referenziertes Semantic Token
4. **Varianten** — je Variante vollständiges eigenes Token-Set
5. **Zustände** — vollständig gemäß Familiendefinition
6. **Responsive** — Verhalten an allen Breakpoints
7. **Motion** — ausschließlich Semantic-Motion-Tokens, inkl. `prefers-reduced-motion`
8. **Accessibility** — Kontrast, Fokus, Tastatur, ARIA
9. **Abhängigkeiten** — nachrichtlich; führend ist die Registry
10. **Nutzungsregeln** — wann diese Komponente, wann nicht
11. **Status & Version** — nachrichtlich; führend ist die Registry

Bewusst **kein** Abschnitt „Offene Punkte": Eine Spezifikation mit offenen Punkten
ist unvollständig und passiert Gate B nicht.

**Dokumentationshinweis:** `Design_Tokens.md` §14 nennt illustrativ `button-*`-Tokens;
verbindlich ist der Namespace `cta` aus `Component_Token_Architecture.md`
(Dokumentpräzedenz der spezifischeren, späteren Festlegung). Kein Handlungsbedarf
jetzt; bei der nächsten legitimen Patch-Änderung an `Design_Tokens.md` kann die
Illustration angeglichen werden.

---

## 5. Erweiterungsstrategie

Jede neue Komponente durchläuft dieselbe Kette — ohne Ausnahme:

1. **Familien-Check:** Deckt eine bestehende Familie oder ein Struktur-Namespace das
   Bedürfnis ab? (Namespace-Erweiterungsregel, `Component_Token_Architecture.md` §9).
   Neue Familien entstehen nur nach der Erweiterungslogik von
   `Komponenten_Designsystem.md`.
2. **Stufen-Ableitung:** Position im Abhängigkeitsgraphen bestimmen (Kapitel 2) — die
   Stufe folgt aus den Einbettungen, nicht umgekehrt.
3. **Registry-Eintrag** mit Status `geplant`.
4. **Spezifikation** nach dem 11-Abschnitte-Template.
5. **Review** durch die drei Gates (Kapitel 7).
6. **Bau.**
7. **`done`** gemäß Definition of Done (Kapitel 8).

Neue Tokens auf jedem Weg ausschließlich über den Governance-Lifecycle (Component
Token als Standardebene, Foundation nur über Maintainer-Freigabe).

---

## 6. Skalierungsstrategie

- **Flache Struktur:** Die zwei Achsen Familie × Stufe bleiben die einzige
  Organisation — keine tieferen Ordnerhierarchien, auch nicht bei 500+ Komponenten.
  Ordnungstiefe entsteht über die Registry, nicht über Verschachtelung.
- **Duplikatschutz:** Namespace-präfixierte Namen plus Registry als Pflicht-Index
  machen unbemerkte Doppelanlagen strukturell unmöglich.
- **Versionierung:** SemVer **pro Komponente** (gemäß Governance Kap. 6: Patch =
  Wert, Minor = neu, Major = umbenannt/entfernt). Es gibt bewusst keine
  Gesamt-Library-Version — sie würde bei Hunderten Komponenten nur künstliche
  Kopplung erzeugen.
- **Theming-Beweis:** Dark Mode, White Label und eine zweite Marke erfordern **null
  Änderungen** an dieser Library — sie entstehen ausschließlich durch Neudefinition
  der Semantic-Ebene innerhalb eines Scopes (Governance Kap. 9). Da jede Komponente
  ausschließlich eigene Component Tokens konsumiert, die ausschließlich Semantic
  Tokens referenzieren, propagiert ein Theme automatisch.

---

## 7. Review-Strategie

Drei Gates pro Komponente plus ein wiederkehrendes Bestands-Audit:

- **Gate A — Architektur** (vor dem Design): Familienzuordnung korrekt? Stufe korrekt
  aus dem Abhängigkeitsgraphen abgeleitet? Namespace-Prüfung bestanden? Kein Duplikat
  laut Registry? Slots nur als Vollinstanzen geplant?
- **Gate B — Spezifikation** (vor dem Code): Alle 11 Abschnitte vollständig, ohne
  Platzhalter? Jedes Component Token auf genau ein Semantic Token abgebildet? Alle
  Familien-Zustände abgedeckt? Familien-Regeln (Breakout, Bewegung, Rhythmus-Rolle)
  eingehalten?
- **Gate C — Implementierung** (vor Status `done`): Code entspricht der
  Spezifikation? Referenzkette eingehalten (Komponente greift nur auf eigene
  Component Tokens zu)? Responsive, Accessibility und Motion nachweislich geprüft?

**Bestands-Audit (wiederkehrend):** Das Audit ist **kein einmaliger Mechanismus des
initialen Rollouts, sondern eine dauerhafte Einrichtung der Library.** Es prüft den
gesamten Bestand querschnittlich auf Konsistenz — einheitliche Interpretation des
Token-Schemas, des Varianten- und Zustandsmodells sowie der Slot-Regel über alle
Spezifikationen hinweg, Übereinstimmung von Registry und Spezifikationen (gemäß
Master-Regel aus Kapitel 4), schleichende Interpretationsdrift, die kein
komponentenlokales Gate sehen kann. Auslöser:

- **Während des initialen Ausbaus:** nach jeder Welle; das bestandene Audit ist die
  Freigabe der nächsten Welle.
- **Nach dem initialen Ausbau:** wiederkehrend nach jeweils **10 neu auf `done`
  gesetzten Komponenten oder spätestens nach 12 Monaten** — je nachdem, was zuerst
  eintritt.

Damit skaliert der Konsistenzmechanismus mit der Library statt mit dem
Anfangsprojekt: Komponente 500 unterliegt derselben Bestandsprüfung wie Komponente 5.

**Token-Erstellung** in jedem Gate ausschließlich über die 4-Fragen-Review-Checkliste
der Governance (Ebene? Wert oder Struktur? Begründung? Migrationspfad?).

---

## 8. Definition of Done (gilt für jede Komponente, ohne Ausnahme)

Eine Komponente erhält den Status `done` erst, wenn alle 12 Punkte erfüllt sind:

1. **Registry-Eintrag vollständig** (Familie, abgeleitete Stufe, Abhängigkeiten,
   Status, Version — Registry ist führende Quelle).
2. **Spezifikation vollständig** — alle 11 Abschnitte, keine Platzhalter.
3. **Jedes Component Token referenziert genau ein Semantic Token** — nie ein
   Primitive, nie ein anderes Component Token.
4. **Jede Variante besitzt ein vollständiges eigenes Token-Set** — keine Vererbung.
5. **Alle in der Familiendefinition festgelegten Zustände sind definiert;**
   zusätzliche Zustände ausschließlich über den Governance-Prozess.
6. **Slots ausschließlich als Vollinstanzen** — keine Alias-Tokens, keine
   Cross-Referenzen, keine Nachbildungen.
7. **Responsive an allen Breakpoints verifiziert.**
8. **Accessibility nachgewiesen:** Kontrast, Fokus-Ring, Tastaturbedienung, ARIA.
9. **Motion ausschließlich über Semantic-Motion-Tokens,** inkl.
   `prefers-reduced-motion`-Verhalten.
10. **Familien-Regeln eingehalten:** Breakout-Regel, Bewegungs-Regel, Rhythmus-Rolle.
11. **Alle drei Gates bestanden** und die Dokumentationspflicht (Governance Kap. 7)
    für jede Token-Änderung erfüllt.
12. **`done` wird durch die Reviewer-Instanz gesetzt, nicht durch die erbauende
    Instanz.**

---

## Zusammenfassung

Initialer Bestand: **11 Komponenten** (6 auf Stufe 1, 5 auf Stufe 2) in **4 Wellen**,
danach bedarfsgetriebenes Wachstum über die Erweiterungsstrategie. Konsistenz wird
dauerhaft durch drei komponentenlokale Gates plus das wiederkehrende Bestands-Audit
gesichert. Erster planbarer Governance-Kontakt: Welle 2 (Navigation). Für jedes
Faktum existiert genau eine führende Quelle (Registry für Metadaten, Spezifikation
für Verhalten). Die Stufe ist abgeleitet, nicht intrinsisch — die Architektur
begrenzt Einbettungstiefe nicht, nur Token-Referenztiefe (immer exakt drei Ebenen).
