# Radius-System — Schritt 5.5 (Strategie)

Status: **Final freigegeben (12.07.2026).** Basis: `Formen_Grafiksystem.md`,
`Komponenten_Designsystem.md`, `Design_Verfassung.md`, `Kreative_Markenrichtung.md`,
`Design_Checkliste.md`. Bewusst knapp gehalten — die Quelldokumente selbst weisen Radius
eine deutlich untergeordnete Rolle gegenüber Farbe, Typografie und Spacing zu (Formen_
Grafiksystem widmet Rundung einen Satz, den anderen Systemen jeweils eigene Abschnitte).
Noch keine Pixelwerte, keine proportionale/fixe Formel, keine Component-Tokens.

---

## Funktion von Radius

Radius erfüllt vier Funktionen: **Affordanz** (Klickbarkeitssignal auf interaktiven
Elementen), **Konsistenzsignal** (Wiedererkennbarkeit als ein System), **Weichheitsgrad**
der Formensprache und **Container-Abgrenzung** gegenüber dem Hintergrund.

## Bestehende Einschränkungen

- Formen_Grafiksystem: „eine einzige, konsistente Rundungslogik systemweit — Teil der
  Funktionslogik, nicht der Komposition, daher keine Ausnahme." „Logik" verlangt
  einheitliche *Regelanwendung*, nicht zwingend einen identischen *Wert* — Fixwert und
  proportionale Formel sind beide zulässig (Klärung folgt in Schritt 5.6).
- Komponenten_Designsystem: Rundungslogik ist Teil der gemeinsamen Tokens — keine der acht
  Familien definiert einen eigenen Radius.
- Design-Verfassung Grundprinzip 1: Funktionslogik trägt niemals Persönlichkeit. Da
  Formen_Grafiksystem Radius explizit als Funktionslogik einordnet, folgt zwingend: Radius
  darf Wärme/Premium/Vertrauen nur *unterstützen*, nie selbst erzeugen wollen.
- Kreative Markenrichtung Punkt 15: schließt generische SaaS-/Consumer-App-Ästhetik aus.

## Drei geprüfte Richtungen

| | A — Scharfe Struktur | B — Zurückhaltende Rundung | C — Starke, organische Rundung |
|---|---|---|---|
| Charakter | kein/kaum Radius | konsistent, spürbar aber unauffällig | großzügig, evtl. Pill-Shapes |
| Ausschlussgrund/Begründung | Risiko der Tech-Kälte, widerspricht dem Wärme-Anteil von „Geführte Wärme" | keine Kollision mit Brand Bible, Kreativer Markenrichtung oder Design-Verfassung | zusätzliche visuelle Intensität ohne zusätzliche Funktion (Design-Checkliste Punkt 4); kollidiert mit Punkt 15 |

**Kritischer Gegencheck:** A wäre nur bei einer grundsätzlichen Abkehr von „Geführte
Wärme" vertretbar — nicht der Fall. C wäre nur bei einer anderen Zielgruppe (Consumer statt
B2B-KMU) vertretbar — nicht der Fall. B bleibt einzig widerspruchsfrei.

## Empfehlung

**Zurückhaltende, konsistente Rundungslogik.** Gilt ausnahmslos für alle Komponenten,
Breakout-Zonen eingeschlossen. Trägt keine eigene Markenbedeutung — Wärme entsteht
weiterhin ausschließlich über Bildsprache, Typografie-Ebene-2 und Farbe (Ebene 2), wie in
Spacing_System.md für Weißraum bereits ebenso festgehalten.

**Bewusst offen für Schritt 5.6 (Radius-Tokens):** fester Wert vs. proportionale Formel;
responsives Verhalten über Breakpoints (in keinem Dokument entschieden); mögliche
Sonderbehandlung von Bildern, Videos, Logos, Trust-Badges, Icons, Tabellen (in keinem
Dokument entschieden oder ausgeschlossen).

---

## Abschließende Prüfung

- **Umfang angemessen:** ja — Länge und Tiefe entsprechen jetzt dem tatsächlichen
  Stellenwert von Radius in den Quelldokumenten.
- **Jede Aussage notwendig:** ja, geprüft gegen Redundanz — keine doppelten Herleitungen
  mehr.
- **Decision-Test:** bestanden.
- **Brand Bible / Kreative Markenrichtung / Design-Verfassung / Design-Checkliste:** keine
  Kollision.
- **Komponenten-System:** keine Ausnahme bei den acht Familien; für granularere Elemente
  offen gelassen, nicht stillschweigend entschieden.
- **Keine neuen Regeln, keine unbegründeten Annahmen:** bestätigt.
- **Keine Vermischung von Strategie und Umsetzung:** bestätigt — Fixwert/proportional,
  responsives Verhalten und Komponenten-Sonderfälle sind explizit Schritt 5.6 zugewiesen.
- **Konsistenz mit Phase 5:** bestätigt.

**Damit ist Schritt 5.5 final.**
