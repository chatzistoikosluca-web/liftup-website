# Design System Governance — LiftUp

Dieses Dokument regelt ausschließlich, wie sich das technische Design-Token-System
über Zeit weiterentwickelt, ohne zu verwässern. Siehe `Design_Tokens.md` für die
aktuellen konkreten Werte, und `Component_Token_Architecture.md` für die
Component-Token-Ebene.

---

## 1. Zweck

Dieses Dokument beantwortet ausschließlich eine Frage: **Wie wird das Token-System
gepflegt, erweitert und verändert?** Es beantwortet nicht, wie LiftUp aussieht (siehe
`LiftUp_Brand_Bible.md`, `Kreative_Markenrichtung.md`), welche Werte aktuell gelten
(siehe `Design_Tokens.md`), oder wann Strategiedokumente selbst erweitert werden
dürfen (siehe `Design_Verfassung.md`, Grundprinzip 5). Dieses Dokument überträgt
dieselbe Zurückhaltungslogik ("Erweiterung folgt Bedarf") von der Strategie- auf die
Token-Ebene und macht sie dort zu einem konkreten, technischen Regelwerk.

## 2. Token Lifecycle

- **Primitive** entsteht nur, wenn ein Rohwert nachweislich von mindestens zwei
  Semantic Tokens oder zwei unabhängigen Komponenten geteilt wird.
- **Semantic Token** entsteht nur, wenn eine neue, markenweite Bedeutung benannt
  wird, die keine bestehende Rolle bereits abdeckt.
- **Component Token** entsteht frei, sobald eine neue Komponente gebaut wird — dies
  ist die Standardebene für neue Bedürfnisse.
- **Deprecation:** Ein Token wird markiert, sobald es ersetzt wird, bleibt aber
  funktionsfähig, bis alle Referenzen migriert sind.
- **Löschung:** Ausschließlich nach Deprecation-Frist **und** verifiziert null
  verbleibenden Referenzen.

## 3. Erweiterungsregeln

- Jede neue Anfrage gilt zunächst als **Component Token**, bis das Gegenteil
  nachgewiesen ist.
- Foundation (Primitive/Semantic) wächst nur nach Freigabe durch die/den
  Design-System-Maintainer:in.
- Foundation wächst niemals, um ein einmaliges, komponentenspezifisches Bedürfnis
  zu lösen.
- Jede Änderung an Foundation-/Semantic-Tokens hat ihren Ursprung ausschließlich in
  der maschinenlesbaren Quelldatei des Systems — nie in manuell gepflegten
  Parallelkopien.

## 4. Architekturregeln

- Referenzrichtung ausschließlich: **Primitive → Semantic → Component →
  Komponenten-Code.** Niemals rückwärts.
- Component Tokens referenzieren ausschließlich Semantic Tokens — niemals andere
  Component Tokens.
- Komponenten greifen ausschließlich auf ihre eigenen Component Tokens zu — niemals
  direkt auf Primitive oder Semantic Tokens.
- Keine Vererbung zwischen Varianten. Jede Variante definiert ihr eigenes,
  vollständiges Token-Set.

## 5. Naming Governance

- Namensmuster: `--{namespace}-{rolle}[-{zustand}]`.
- Kein Tokenname enthält einen Rohwert (keine Größen-, Farb- oder Zahlenangaben im
  Namen).
- Zustands-Suffixe ausschließlich aus festem Vokabular: `-default`, `-hover`,
  `-active`, `-disabled`, `-focus`, `-error`, `-success`. Dieses Vokabular gilt für
  **Component-Token-Zustandssuffixe** (z. B. `button-background-hover`) — nicht für
  Foundation-Semantic-Namen, die Bewegungs- oder Bedeutungskategorien beschreiben
  (z. B. `motion-entrance`, `motion-exit`).
- Component-Token-Namen tragen immer das Präfix ihrer Komponente und sind keiner
  zweiten Komponente zugeordnet.

## 6. Breaking Changes

- **Patch:** Wertanpassung, Name bleibt unverändert.
- **Minor:** neue Tokens ergänzt, nichts entfernt.
- **Major:** ein Token umbenannt oder entfernt.
- Deprecation ist vor jeder Löschung verpflichtend. Migration wird vor Löschung
  vollständig geprüft (keine verbleibenden Referenzen).

## 7. Dokumentationspflicht

Jede Token-Änderung enthält verpflichtend:
1. betroffene Ebene (Primitive/Semantic/Component)
2. Art der Änderung (Wertanpassung oder strukturell)
3. eine Ein-Satz-Begründung
4. bei struktureller Änderung: den Migrationspfad

## 8. Review-Prozess

Jede Änderung beantwortet vor Freigabe:
1. Welche Ebene ist betroffen?
2. Wertanpassung oder strukturelle Änderung?
3. Ist eine Begründung dokumentiert?
4. Falls strukturell: Sind Migrationspfad und Referenzprüfung vorhanden?

## 9. Zukunft — Dark Mode, Second Brand, White Label, mehrere Produkte

- Themes/Marken-Varianten entstehen ausschließlich durch Neudefinition der
  **Semantic-Ebene** innerhalb eines Scopes (z. B. Data-Attribut). Primitive- und
  Component-Ebene werden niemals themespezifisch überschrieben.
- Produktspezifische Anfragen werden zuerst geprüft, ob sie ein echtes,
  systemweites Bedürfnis offenbaren (→ Semantic-Erweiterung) oder ein Einzelfall
  bleiben (→ Component Token, beschränkt auf das anfragende Produkt).
