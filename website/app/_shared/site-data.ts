/* Geteilte Seiten-Daten für die LiftUp-Website (Start, Leistungen, Über uns,
   Kontakt). Reine Daten/Copy — keine Strategie- oder Token-Änderung. Die
   ausführliche, freigegebene Copy lebt in `services`, `processSteps` und
   `reasons`; die Startseite nutzt bewusst gekürzte Teaser (siehe `homeTeasers`),
   die inhaltlich nichts Neues behaupten, sondern die freigegebenen Aussagen
   verdichten. */

export const contact = {
  email: "kontakt@liftupstudio.de",
  emailHref: "mailto:kontakt@liftupstudio.de",
  phone: "+49 1575 4772611",
  phoneHref: "tel:+4915754772611",
  location: "Aidlingen bei Stuttgart",
};

export const navLinks = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ablauf", label: "Ablauf" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

/* Ein Block der individuellen Leistungs-Erzählung (/leistungen/[route]).
   Label + entweder Fließtext ODER Bullet-Liste — bewusst je Leistung
   unterschiedlich benannt und unterschiedlich viele Blöcke, damit keine Seite
   dieselbe generische Problem/Lösung/Vorteile-Vorlage wiederholt und jede
   Detailseite ihren eigenen Fokus behält. */
export interface ServiceNarrativeBlock {
  label: string;
  text?: string;
  bullets?: string[];
}

export interface Service {
  slug: string;
  /* URL-Segment unter /leistungen/ für die neue dedizierte Detailseite je
     Leistung (z. B. "webdesign" → /leistungen/webdesign). Bewusst getrennt
     von `slug` (Anker-ID auf /leistungen), da die im Auftrag vorgegebenen
     Routen nicht mit den bestehenden Slugs übereinstimmen. */
  route: string;
  /* Kurze, prägnante Zeile für die dedizierte Detailseite (/leistungen/[route]) —
     ergänzt lead (für wen), keine neue Aussage. */
  tagline: string;
  title: string;
  price: string;
  lead: string;
  narrative: ServiceNarrativeBlock[];
}

export const services: Service[] = [
  {
    slug: "website-erstellung",
    route: "webdesign",
    tagline: "Moderne Websites, die Ihr Unternehmen professionell präsentieren.",
    title: "Website-Erstellung",
    price: "ab 1.990 €",
    lead: "Für Unternehmen, die online stärker auftreten möchten.",
    narrative: [
      {
        label: "Problem",
        text: "Ohne eigene Website verlassen sich Unternehmen allein auf Empfehlungen — Interessenten finden online keinen Anknüpfungspunkt.",
      },
      {
        label: "Lösung",
        text: "Wir bauen Websites, die Ihr Angebot klar erklären, Vertrauen schaffen und Besucher gezielt zur Kontaktaufnahme führen.",
      },
      {
        label: "Vorteile",
        bullets: [
          "Klare Struktur, die Vertrauen schafft",
          "Moderne Optik auf allen Geräten",
          "Gezielte Wege zur Kontaktaufnahme",
        ],
      },
      {
        label: "Ergebnis",
        text: "Eine Website, die zeigt, wofür Ihr Unternehmen steht — und gezielt Anfragen auslöst.",
      },
    ],
  },
  {
    slug: "website-redesign",
    route: "redesign",
    tagline: "Ihre bestehende Website, neu gedacht für Ihre heutige Qualität.",
    title: "Website-Redesign",
    price: "ab 1.490 €",
    lead: "Für Unternehmen, deren digitaler Auftritt mit der eigenen Entwicklung Schritt halten soll.",
    narrative: [
      {
        label: "Ausgangssituation",
        text: "Eine veraltete Website wirkt wie ein veraltetes Unternehmen — unabhängig davon, wie gut die eigentliche Arbeit ist.",
      },
      {
        label: "Verbesserung",
        text: "Wir überarbeiten Ihre bestehende Website, damit sie wieder zu Ihrer heutigen Qualität passt — verständlicher, moderner und überzeugender, ohne den Charakter Ihres Unternehmens zu verlieren.",
      },
      {
        label: "Vorteile",
        bullets: [
          "Zeitgemäßer Auftritt ohne Identitätsverlust",
          "Bessere Nutzerführung",
          "Spürbar professionellerer erster Eindruck",
        ],
      },
    ],
  },
  {
    slug: "landingpages",
    route: "landingpages",
    tagline: "Eine fokussierte Seite für Ihr nächstes Angebot.",
    title: "Landingpages",
    price: "ab 790 €",
    lead: "Für Angebote, Aktionen oder Leistungen, die mehr Aufmerksamkeit verdienen.",
    narrative: [
      {
        label: "Ausgangslage",
        text: "Einzelne Angebote gehen auf einer allgemeinen Website oft unter, statt gezielt Anfragen auszulösen.",
      },
      {
        label: "Lösung",
        text: "Eine fokussierte Seite für Kampagnen, Veranstaltungen oder neue Leistungen — klar aufgebaut, verständlich formuliert und auf Anfrage ausgelegt.",
      },
      {
        label: "Vorteile",
        bullets: [
          "Fokus auf genau ein Angebot",
          "Klarer Handlungsaufruf",
          "Schnell umsetzbar für Aktionen",
        ],
      },
    ],
  },
  {
    slug: "seo-sichtbarkeit",
    route: "seo",
    tagline: "Bessere Sichtbarkeit, damit Kunden Sie finden.",
    title: "SEO & Sichtbarkeit",
    price: "ab 390 €",
    lead: "Damit Ihr Unternehmen online leichter gefunden wird.",
    narrative: [
      {
        label: "Sichtbarkeit",
        text: "Gute Unternehmen werden bei Google oft nicht gefunden, weil Struktur und Inhalte nicht auf Sichtbarkeit ausgelegt sind.",
      },
      {
        label: "Auffindbarkeit",
        text: "Wir optimieren Struktur und Inhalte Ihrer Website, damit Google sie besser versteht und Kunden Sie schneller finden.",
      },
      {
        label: "Langfristige Entwicklung",
        text: "Sichtbarkeit ist kein einmaliger Effekt — wir behalten Entwicklung und Rankings danach im Blick.",
      },
    ],
  },
  {
    slug: "wartung-betreuung",
    route: "betreuung",
    tagline: "Laufende Pflege, damit Ihr Auftritt zuverlässig bleibt.",
    title: "Wartung & Betreuung",
    price: "ab 79 €/Monat",
    lead: "Damit Ihr digitaler Auftritt auch nach dem Start zuverlässig bleibt.",
    narrative: [
      {
        label: "Ausgangslage",
        text: "Nach dem Launch bleibt eine Website oft unverändert liegen, während sich das Unternehmen längst weiterentwickelt hat.",
      },
      {
        label: "Laufende Betreuung",
        text: "Wir kümmern uns laufend um technische Pflege, Anpassungen und Verbesserungen — mit monatlichem Überblick und einem kostenlosen ersten Betreuungsmonat für Neukunden.",
      },
      {
        label: "Vorteile",
        bullets: ["Technische Sicherheit", "Laufende Anpassungen", "Ein fester Ansprechpartner"],
      },
    ],
  },
];

export interface ProcessStepData {
  title: string;
  description: string;
}

export const processSteps: ProcessStepData[] = [
  {
    title: "Erstgespräch",
    description:
      "Wir sprechen über Ihr Unternehmen, Ihre Ziele und wo Ihr digitaler Auftritt heute steht — und klären, was wirklich gebraucht wird.",
  },
  {
    title: "Analyse & Strategie",
    description:
      "Wir analysieren, wie Ihr Unternehmen online wahrgenommen wird, und entwickeln daraus eine klare Strategie für Ihren digitalen Auftritt.",
  },
  {
    title: "Konzept & Umsetzung",
    description:
      "LiftUp entwickelt daraus eine Website oder digitale Lösung, die zu Ihrem Unternehmen passt: modern, verständlich und auf klare Kontaktaufnahme ausgelegt.",
  },
  {
    title: "Veröffentlichung",
    description:
      "Wir bringen Ihren digitalen Auftritt sauber online — technisch zuverlässig und auf allen Geräten professionell.",
  },
  {
    title: "Weiterentwicklung",
    description:
      "Auf Wunsch bleiben wir an Ihrer Seite — wir pflegen und entwickeln Ihren digitalen Auftritt weiter, damit er mit Ihrem Unternehmen mitwächst.",
  },
];

export interface Reason {
  title: string;
  body: string;
}

export const reasons: Reason[] = [
  {
    title: "Unternehmens-DNA statt Standardlösung",
    body: "Wir schauen nicht nur auf Design und Technik, sondern darauf, was Ihr Unternehmen auszeichnet — und entwickeln daraus einen digitalen Auftritt, der wirklich zu Ihnen passt.",
  },
  {
    title: "Digitale Präsenz mit klarer Richtung",
    body: "Ein digitaler Auftritt sollte Kunden schnell zeigen, wer Sie sind, was Sie anbieten und warum sie bei Ihnen richtig sind — durch klare Struktur und gezielte Kontaktwege.",
  },
  {
    title: "Entlastung für Ihr Tagesgeschäft",
    body: "Sie führen Ihr Unternehmen — LiftUp übernimmt die digitale Arbeit im Hintergrund, damit Ihr Auftritt professionell bleibt, ohne im Alltag liegen zu bleiben.",
  },
  {
    title: "Weiterentwicklung statt einmaliger Umsetzung",
    body: "Wir entwickeln Ihre digitale Präsenz Schritt für Schritt weiter — passend zu neuen Angeboten, Veränderungen und dem, was Ihre Kunden brauchen.",
  },
];

export const projektartOptions = [
  "Website-Erstellung",
  "Website-Redesign",
  "Landingpage",
  "SEO & Sichtbarkeit",
  "Wartung & Betreuung",
  "Noch unsicher",
];

/* Kurzes Problem/Lösung-Paar für die Startseite — zwei knappe Sätze statt
   eines Absatzes, damit der Scroll-Fluss "Problem → Lösung" spürbar bleibt,
   ohne eine eigene zusätzliche Sektion zu benötigen. Die vollständigen
   Fassungen beider Themen stehen auf /ueber-uns. */
export const homeProblem =
  "Der erste Eindruck entsteht heute oft online — noch bevor der erste persönliche Kontakt zustande kommt.";
export const homeSolution =
  "LiftUp entwickelt daraus einen digitalen Auftritt, der zu Ihrer Unternehmens-DNA passt.";
