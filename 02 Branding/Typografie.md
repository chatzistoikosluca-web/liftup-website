# Typografie — Schritt 5.3 (Konkrete Schriftfamilien)

Status: **Final freigegeben (12.07.2026).** Basis: `LiftUp_Brand_Bible.md`,
`Kreative_Markenrichtung.md`, `Design_Verfassung.md`, `Farben_Typografie.md`,
`Komponenten_Designsystem.md`, `Logo_Richtungen.md`, `Website_Ziele.md`, `Zielgruppe.md`.

---

## 1. Analyse — Anforderungen

- **Farben_Typografie (Ebene 1, final):** „Kontrollierte Wärme" — neutrale Struktur trägt
  Fließtext/Navigation/Prozess; an definierten Stellen (Headlines, Zitate,
  Founder-Statements) bewusst wärmerer Charakter. Konfliktregel 3 bindend: charaktervolle
  Elemente nie in Fließtext/Navigation/Prozess.
- **Farben_Typografie (Ebene 2, offene Vorfrage):** „Kann eine einzige Formsprache die
  Charakterspanne überzeugend tragen?" — zuerst Architektur 2 (Ein-Schrift, charakterreiche
  Schnitte) und 3 (Variable Font) gleichrangig prüfen; Architektur 4 (Zwei-Schrift) nur bei
  nachgewiesener Notwendigkeit (Grundprinzip 5, Design-Verfassung).
- **Design-Checkliste Punkt 7:** Typografie darf die Botschaft nie dominieren.
- **Komponenten_Designsystem:** Typografie ist Teil der gemeinsamen Tokens — keine
  Komponentenfamilie definiert eigene Schriftregeln.
- **Logo_Richtungen:** Eine Wortmarke ist eine geprüfte Richtung — die gewählte Schrift
  muss den dort dokumentierten Anforderungen (Skalierbarkeit, Favicon-Tauglichkeit) nicht
  entgegenstehen.
- **Website_Ziele:** Die Website selbst ist der Qualitätsbeweis; Typografie wird explizit
  als Element genannt, das „für sich spricht" statt Qualität zu behaupten.
- **Zielgruppe:** primär deutschsprachig (vollständige Umlaut-/ß-Unterstützung zwingend),
  nicht-technische Geschäftsführer, langfristig „standortunabhängig" (Zukunftsreserve für
  Sprachabdeckung, keine akute Anforderung).

---

## 2. Drei vollständige Schrift-Systeme

**System A — Ein-Schrift-System, charakterreiche Schnitte (testet Architektur 2):**
**IBM Plex Sans** (+ native Geschwisterschrift **IBM Plex Mono**).

| Rolle | Schnitt |
|---|---|
| Headline | Plex Sans SemiBold/Bold |
| Body | Plex Sans Regular/Text |
| UI | Plex Sans Text/Medium |
| Navigation | Plex Sans Medium |
| Charaktervolle Momente (Zitate, Founder-Statements) | Plex Sans Text Italic / Medium Italic |
| Zahlen | Plex Sans, tabellarische Ziffern (OpenType `tnum`) |
| Tabellen | Plex Sans Text (tabellarisch) oder Plex Mono bei reinen Datentabellen |
| Code | Plex Mono (native Geschwisterschrift — geringfügiger Zusatznutzen, kein dokumentierter Bedarf) |

**System B — Variable-Font-System (testet Architektur 3):**
**Inter** (Variable, Achsen: Gewicht, Optical Size, Slant/Italic).

| Rolle | Schnitt |
|---|---|
| Headline | Inter Variable, hohes Gewicht |
| Body | Inter Variable, Regular |
| UI | Inter Variable, Medium |
| Navigation | Inter Variable, Medium |
| Charaktervolle Momente | Inter Italic (echter Schnitt) |
| Zahlen | Inter, `tnum`-Feature |
| Tabellen | Inter Regular/Medium, tabellarisch |
| Code | keine native Mono-Geschwisterschrift — separate Wahl nötig (z. B. JetBrains Mono) |

**System C — Zwei-Schrift-System (testet Architektur 4, nur als Fallback zulässig):**
**IBM Plex Sans** (Struktur: Body/UI/Navigation/Zahlen/Tabellen) + **Fraunces** (Variable
Serif mit SOFT-/WONK-Achsen, ausschließlich Headline/Zitate/Founder-Statements).

| Rolle | Schnitt |
|---|---|
| Headline | Fraunces, hohe Optical Size, moderater WONK-Wert |
| Body | Plex Sans Regular |
| UI | Plex Sans Medium |
| Navigation | Plex Sans Medium |
| Charaktervolle Momente | Fraunces Italic |
| Zahlen/Tabellen | Plex Sans (tabellarisch) |
| Code | Plex Mono |

---

## 3. Psychologische Wirkung

| | System A (Plex Sans) | System B (Inter) | System C (Plex + Fraunces) |
|---|---|---|---|
| Vertrauen | hoch | hoch | hoch |
| Verständlichkeit | hoch | hoch | hoch |
| Persönlichkeit | mittel-hoch | mittel-niedrig | hoch |
| Premium | hoch | mittel (sehr verbreitete Default-Schrift senkt wahrgenommene Exklusivität) | hoch |
| Wärme | mittel-hoch | mittel-niedrig | hoch |
| Präzision | hoch | sehr hoch | hoch |
| Lesbarkeit | hoch | sehr hoch | hoch (bei diszipliniertem Fraunces-Einsatz nur für Headlines) |
| Wiedererkennbarkeit | mittel-hoch | niedrig (extrem verbreitet) | hoch |

---

## 4. Technische Bewertung

**Einordnung: Bedeutung von „Variable Font" für dieses Projekt.** Variable Font ist für ein
Projekt dieses Umfangs (Marketing-/Agenturwebsite, keine App mit vielen dynamischen
Schriftschnitten) primär eine technische Bequemlichkeit, kein durch Brand Bible,
Design-Verfassung oder Kreative Markenrichtung gefordertes strategisches Kriterium. Der
reale Performance-Unterschied zu einer disziplinierten Auswahl weniger statischer Schnitte
ist in der Praxis gering. Dieser Punkt entscheidet die Empfehlung nicht mit.

| Kriterium | System A | System B | System C |
|---|---|---|---|
| Webfont Performance | gut — disziplinierte Schnittauswahl (ca. 5 Dateien) | technisch effizient (eine Datei), aber ohne strategische Relevanz für dieses Projekt | mittel — zwei Familien insgesamt |
| Variable Font | nein (architekturbedingt) | ja — reine technische Eigenschaft, kein Bewertungsvorteil | teilweise (nur Fraunces) |
| Lizenz | SIL OFL, kostenlos, kommerziell nutzbar | SIL OFL, kostenlos, kommerziell nutzbar | beide Familien SIL OFL, kostenlos |
| Rendering | sehr gut | sehr gut | Plex-Hälfte wie A; Fraunces bei Kleinschriftgraden weniger optimiert |
| Accessibility | hoch | sehr hoch | hoch für Plex-Anteil, eingeschränkt für Fraunces im Fließtext |
| Internationalisierung | sehr hoch — eigene Sprachfamilien (Plex Sans Arabic/Hebrew/Thai etc.) | sehr hoch | hoch für Plex-Anteil, Fraunces primär lateinisch |
| Zahlen/Tabellen | sehr gut (realer, dokumentierter Bedarf — Formulare, Vergleiche) | sehr gut | wie A |
| Code | nativ gelöst (Plex Mono) — spekulativer, nicht dokumentierter Bedarf, geringfügiger Zusatznutzen | nicht gelöst | nativ gelöst (Plex Mono) |
| PDFs/Präsentationen | gut einbettbar | gut einbettbar | gut einbettbar; Fraunces im Business-Kontext ungewöhnlicher |

---

## 5. Wettbewerbsvergleich (Wirkung, nicht Geschmack)

- **schoenegge.io:** „fett, groß, geometrisch-rund" — reiner Grotesk, geometrisch-rundlich.
- **ONE AND O:** „fett, groß, geometrisch, plakativ" — ebenfalls geometrisch, kein
  Charakterkontrast.
- **Exportarts:** keine spezifische Typografie-Beobachtung dokumentiert.

Plex Sans (A/C) und Inter (B) sind beide humanistische, nicht rein geometrische
Grotesk-Schriften — dieser Unterschied zu beiden direkten Wettbewerbern gilt für A und B
gleichermaßen und ist daher kein Unterscheidungskriterium zwischen den Systemen. Der
eigentliche Unterschied: **Inter ist die im Web am weitesten verbreitete
Interface-Schrift** — ihr Einsatz rückt LiftUp optisch in die Nähe zahlloser
SaaS-Produkte. Plex Sans ist im direkten Wettbewerbsumfeld deutlich seltener.

---

## 6. Langfristigkeit

| | System A | System B | System C |
|---|---|---|---|
| Trendrisiko | gering | gering (Schrift selbst zeitlos, aber Assoziation mit austauschbarem SaaS-Produkt ist ein Wahrnehmungsrisiko) | gering-mittel (Fraunces' organischer Charakter ist gestalterisch mutiger) |
| Wartbarkeit | hoch | sehr hoch | mittel (zwei Familien) |
| Skalierbarkeit | hoch | sehr hoch | hoch |
| Erweiterbarkeit | hoch | sehr hoch | hoch |

---

## 7. Risiken (objektiv)

- **System A:** Ob der Italic-Schnitt in jedem vorgesehenen Kontext genügend Wärme trägt,
  ist noch nicht empirisch geprüft (siehe „Offene Validierung" unten).
- **System B:** Größtes Risiko ist die Ubiquität selbst — kollidiert mit der bereits
  ausgeschlossenen „generischen SaaS-Ästhetik" (Kreative Markenrichtung Punkt 15). Inters
  Italic ist eher neutral als warm.
- **System C:** Risiko, unbeabsichtigt Richtung der bereits verworfenen „Editorialen
  Eleganz" zu kippen; zusätzlich fehlt der Bedarfsnachweis für eine zweite Familie
  (Grundprinzip 5).

---

## 8. Kritischer Vergleich

| Kriterium | System A (Plex Sans) | System B (Inter) | System C (Plex + Fraunces) |
|---|---|---|---|
| Erfüllt „Kontrollierte Wärme" | plausibel ausreichend — empirisch noch nicht verifiziert | unzureichend (zu neutral) | am stärksten, aber überschießend Richtung Editoriale Eleganz |
| Entspricht Grundprinzip 5 | ja | ja | nein, solange A nicht nachweislich unzureichend ist |
| Differenzierung vom Wettbewerb | hoch | mittel (Ubiquitätsrisiko) | hoch |
| Technische Reife/Performance | gut | sehr gut, aber ohne strategische Relevanz | mittel (zwei Familien) |
| Internationalisierung | sehr hoch | sehr hoch | hoch |
| Zukunftssicherheit | hoch | hoch (Schrift), Assoziationsrisiko bleibt | mittel |

---

## 9. Empfehlung

**System A — IBM Plex Sans (Ein-Schrift-System mit charakterreichen Schnitten) — wird
empfohlen.**

System A ist die Richtung mit der **plausibelsten**, aber noch nicht empirisch
verifizierten Erfüllung von „Kontrollierte Wärme" — gestützt auf die bekannte
Charaktereigenschaft von Plex Sans Italic, nicht auf einen abgeschlossenen Layout-Test.
Sie erfüllt zusätzlich Grundprinzip 5 direkt (keine zweite Familie ohne Bedarfsnachweis),
vermeidet das Ubiquitäts-/Generik-Risiko von System B und das Editorial-Rückfall-Risiko
von System C, und deckt Zahlen/Tabellen nativ über einen real dokumentierten Bedarf.

**Warum die anderen ausscheiden:** System B scheidet aus, weil ihre technische Stärke
(Variable Font) für dieses Projekt keine strategische Relevanz besitzt und weil ihre
Verbreitung der bereits ausgeschlossenen generischen SaaS-Ästhetik entgegenläuft. System C
scheidet aus, weil der Bedarfsnachweis für eine zweite Familie fehlt.

**Transparenter Hinweis zur Auswahl innerhalb der Architektur:** Die Architekturentscheidung
(Ein-Schrift mit charakterreichen Schnitten) ist vollständig aus den sechs
Referenzdokumenten ableitbar. Die konkrete Wahl von IBM Plex Sans innerhalb dieser
Architektur ist gut begründet (Vermeidung der Inter-Ubiquität, native Sprachfamilien,
Lizenz, native Zahlen-/Tabellen-Unterstützung), aber nicht die einzig zwingend mögliche —
andere vergleichbare humanistische, quelloffene Grotesk-Familien mit Italic würden dieselben
dokumentierten Kriterien ebenfalls erfüllen.

**Reichweite dieser Entscheidung:** Festgelegt wird die Schriftfamilie und ihre
Rollenzuordnung.

---

## Offene Validierung

Die Wahl von IBM Plex Sans ist eine strategisch begründete Empfehlung innerhalb der
gewählten Architektur (Ein-Schrift-System mit charakterreichen Schnitten). Die Entscheidung
gilt unter der Annahme, dass sich die geforderte „Kontrollierte Wärme" mit den
charaktervollen Schnitten (insbesondere Italic) im realen Layout bestätigt. Diese Annahme
wird bewusst erst im späteren UI-Design (Headlines, Founder-Statements, Zitate) empirisch
überprüft. Sollte sich dort zeigen, dass die Wärme nachweislich nicht ausreichend
transportiert wird, ist gemäß Design-Verfassung Grundprinzip 5 eine erneute Prüfung von
Architektur 4 (zweite Schriftfamilie ausschließlich für charaktervolle Momente) zulässig.

---

## Abschließender Audit

- **Decision-Test:** bestanden — die Empfehlung legt konkrete Schriftfamilie und
  Rollenzuordnung fest.
- **Brand Bible:** keine Kollision in allen 8 Kategorien.
- **Design-Verfassung:** Grundprinzip 5 ist der entscheidende, konsequent angewendete
  Faktor.
- **Kreative Markenrichtung:** Konfliktregel 3 und Punkt 15 eingehalten.
- **Design-Checkliste:** Punkt 7 durch Plex Sans' zurückhaltenden Grundcharakter
  erfüllbar.
- **Komponenten-System:** Rollenzuordnung kompatibel mit allen 8 Komponentenfamilien.
- **Logo-Richtungen:** Plex Sans steht den dokumentierten Anforderungen nicht entgegen —
  keine verfrühte Eignungsaussage.
- **Accessibility/Performance/Internationalisierung/Lizenz:** vollständig berücksichtigt.
- **Zukunftssicherheit:** hoch, mit transparent dokumentiertem Restrisiko (Italic-Wärme).
- **Keine unnötige Komplexität:** bestätigt — zweite Familie und Variable Font wurden
  geprüft und mangels Bedarfsnachweis bzw. fehlender strategischer Relevanz nicht gewählt.
- **Keine neuen Regeln entstanden:** bestätigt — die „Offene Validierung" dokumentiert
  ausschließlich den bereits in Grundprinzip 5 angelegten Prüfpfad, ohne neue Kriterien
  einzuführen.
- **Vollständige Konsistenz:** keine Widersprüche zu vorherigen Schritten gefunden.

**Damit ist Schritt 5.3 final.**
