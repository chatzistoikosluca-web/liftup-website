# Motion-/Bewegungs-System — Schritt 5.7 (Strategie)

Status: **Final freigegeben (12.07.2026).** Basis: `LiftUp_Brand_Bible.md` (Kat. 6 —
Animations-Prinzipien), `Kreative_Markenrichtung.md` (Punkt 8, Konfliktregel 7),
`Design_Verfassung.md` (Grundprinzip 1), `Design_Checkliste.md` (Punkt 9),
`Formen_Grafiksystem.md` (Bewegungslogik), `Komponenten_Designsystem.md`
(Bewegungs-Spalte je Familie), `Zielgruppe.md`. Anders als Radius und Schatten besitzt
Bewegung bereits substanzielle Grundlage in fünf Dokumenten — dieser Schritt synthetisiert
diese Festlegungen und entscheidet ausschließlich die eine offene Frage: den **Charakter**
der Bewegung. Noch keine Zeit-/Easing-Werte, keine CSS, keine Component-Tokens.

---

## 1. Bereits entschiedene Grundlagen (Synthese, keine neue Entscheidung)

| Aspekt | Bereits festgelegt in |
|---|---|
| Funktionspflicht — jede Animation braucht eine benennbare Funktion (Orientierung, Feedback, Hierarchie, Übergang, Fokuslenkung, Zustandsdarstellung) | Brand Bible Kat. 6, Prinzip 1; Design-Checkliste Punkt 9 |
| Legitime Auslöser (Nutzerinteraktion, Scrollposition, Zustandswechsel, Ladezustand, echte Datenänderung) | Brand Bible Kat. 6, Prinzip 4 |
| Zugang darf nie verzögert werden; Performance-Vorrang | Brand Bible Kat. 6, Prinzip 2/3 |
| Vollständige Funktionsfähigkeit auch ohne Animation (Reduced Motion) | Brand Bible Kat. 6, Prinzip 6 |
| Keine Vortäuschung von Aktualität/Präzision | Brand Bible Kat. 6, Prinzip 7 |
| Fokuslenkung statt Selbstdarstellung | Brand Bible Kat. 6, Prinzip 5; Konfliktregel 7 |
| Grobe Bewegungsintensität je Komponentenfamilie (z. B. Hero „animierbar mit Funktion, nie verzögernd", Content „überwiegend statisch", CTA „dezent", Formulare „nur funktionales Feedback") | Komponenten_Designsystem |
| Breakout-Zonen als natürliche Fokuslenkungs-Kandidaten; Rhythmus-Wechsel liefert Auslöser-Begründung | Formen_Grafiksystem, Bewegungslogik |
| Bewegung als dokumentiertes Vertrauens-/Qualitätssignal für die Zielgruppe | Zielgruppe.md („Animationen... sprechen für sich") |

## 2. Die tatsächlich offene Frage

Keines der genannten Dokumente legt fest, welchen **Charakter** (Tempo-/Bewegungsgefühl —
ausdrücklich ohne konkrete Zeit-/Kurvenwerte) Bewegung besitzen soll. Kreative
Markenrichtung Punkt 8 nennt eine „kontrollierte Vorwärtsorientierung" — Bewegung „**darf**
Fortschritt sichtbar machen" (Erlaubnis, keine Pflicht). Konfliktregel 7 begrenzt dies
streng: „nie dekorativ/hype-artig", keine Aufwärtspfeil-/Raketenmetaphorik. Nach
Grundprinzip 1 (Design-Verfassung) bleibt Bewegung ansonsten Funktionslogik, kein
Persönlichkeitsträger.

## 3. Zwei ausgeschlossene Extreme, eine verbleibende Zone

- **Extrem „zu minimal/mechanisch":** riskiert, den Verifizierbarkeitstest aus
  Design-Checkliste Punkt 9 nicht zu bestehen — dieser verlangt, dass die Funktion einer
  Animation „nachweisbar verloren" geht, wenn man sie entfernt. Ist die Bewegung kaum
  wahrnehmbar, ist auch ihr Fehlen kaum bemerkbar, was den Test selbst infrage stellt.
  Zusätzlich liegt diese Zone in derselben dokumentierten Bewegungsrichtung wie beide
  direkten Wettbewerber (schoenegge.io: „dezentes grafisches Hintergrundmuster, keine
  aufdringlichen Effekte"; ONE AND O: „minimal, sehr reduziert-funktional"). **Dieser
  Befund wird lediglich als Kontext berücksichtigt und ist ausdrücklich nicht der tragende
  Grund der Empfehlung.**
- **Extrem „zu ausgeprägt/expressiv":** verstößt gegen Prinzip 2 (Zugang darf nie
  verzögert werden) und Prinzip 5 (Fokuslenkung statt Selbstdarstellung); Nähe zum
  ausgeschlossenen Growth-Hype (Konfliktregel 7).
- **Verbleibende Zone — „Zurückhaltend, aber wahrnehmbar":** einzige Position, die beide
  Ausschlüsse vermeidet. Sie kann optional (nicht zwingend, da Punkt 8 „darf" formuliert)
  die dort genannte Vorwärtsorientierung transportieren.

## 4. Empfehlung

**„Zurückhaltend, aber wahrnehmbar."** Nicht als bevorzugte Alternative unter
Gleichrangigen gewählt, sondern als die Zone, die nach Anwendung der beiden bereits
bestehenden Ausschlüsse (Design-Checkliste Punkt 9; Prinzip 2/5 und Konfliktregel 7)
übrig bleibt. Die tragenden Gründe sind ausschließlich diese beiden Ausschlüsse — der
Wettbewerbsvergleich liefert nur Kontext.

**Bewusst offen für den nächsten Schritt:** konkrete Dauer-/Easing-Werte, exakte Zuordnung
über die bereits in Komponenten_Designsystem grob vorgegebene Tabelle hinaus.

---

## Abschließende Prüfung

- **Decision-Test:** bestanden.
- **Brand Bible:** keine Kollision; Kat. 6 vollständig eingehalten, nicht verändert.
- **Kreative Markenrichtung:** Punkt 8 korrekt als „darf" (Erlaubnis, keine Pflicht)
  zitiert; Konfliktregel 7 eingehalten.
- **Design-Verfassung:** Grundprinzip 1 konsistent angewendet.
- **Design-Checkliste:** Punkt 9 ist die alleinige, vollständig textbasierte Begründung
  gegen das minimale Extrem.
- **Komponenten-System:** keine Abweichung von der bestehenden Bewegungs-Spalte je
  Familie.
- **Keine neuen Regeln:** bestätigt.
- **Keine unbegründeten Annahmen:** bestätigt — Vorwärtsorientierung korrekt als
  Erlaubnis, nicht Pflicht; Wettbewerbsvergleich explizit als nicht-tragender Kontext
  gekennzeichnet, ohne eine Differenzierungs-Schlussfolgerung zu behaupten.
- **Keine Vermischung von Strategie und Umsetzung:** bestätigt — keine Zeit-/Kurvenwerte
  festgelegt.
- **Konsistenz mit Phase 5:** bestätigt, keine Widersprüche zu Farbpalette, Typografie,
  Spacing, Radius oder Schatten gefunden.

**Damit ist Schritt 5.7 final.**
