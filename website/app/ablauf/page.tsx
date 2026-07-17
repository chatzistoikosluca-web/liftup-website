import type { Metadata } from "next";
import { CTAButton, Section } from "@/components";
import { finalCtaFrame, SiteFooter, SiteHeader } from "../_shared/blocks";
import { Reveal } from "../_shared/Reveal";
import {
  IconAnalyse,
  IconGespraech,
  IconKonzept,
  IconLaunch,
  IconWachstum,
} from "../_shared/icons";
import { processSteps } from "../_shared/site-data";

export const metadata: Metadata = {
  title: "Ablauf – LiftUp",
  description:
    "So läuft die Zusammenarbeit mit LiftUp ab — von Erstgespräch und Analyse über Konzept und Veröffentlichung bis zur Weiterentwicklung.",
};

const stepIcons = [IconGespraech, IconAnalyse, IconKonzept, IconLaunch, IconWachstum];

export default function AblaufPage() {
  return (
    <main>
      <SiteHeader active="/ablauf" />

      <Section variant="special" className="lp-stage lp-onnavy">
        <div className="flex max-w-[var(--container-narrow)] flex-col gap-6">
          <span className="ui-default text-[var(--lp-cyan)]">Ablauf</span>
          <h1 className="hero-display lp-hero-copy">
            So läuft die Zusammenarbeit ab.
          </h1>
          <p className="body-lead text-[var(--lp-on-navy-muted)]">
            Fünf klare Schritte, ohne unnötigen Aufwand.
          </p>
        </div>
      </Section>

      {processSteps.map((step, index) => {
        const Icon = stepIcons[index];
        return (
          <Section
            key={step.title}
            variant="special"
            className={index % 2 === 1 ? "bg-[var(--color-background-secondary)]" : undefined}
          >
            <Reveal className="lp-chapter">
              <span className="lp-icon-tile lp-icon-tile--onlight lp-chapter-icon" aria-hidden="true">
                <Icon />
              </span>
              <h2 className="heading-1">{step.title}</h2>
              <p className="body-lead text-[var(--color-text-secondary)]">{step.description}</p>
            </Reveal>
          </Section>
        );
      })}

      <Section variant="special" className="lp-stage lp-onnavy">
        <div className={finalCtaFrame}>
          <h2 className="heading-1">Bereit für den ersten Schritt?</h2>
          <p className="body-lead text-[var(--lp-on-navy-muted)]">
            Im unverbindlichen Erstgespräch klären wir, was als Nächstes sinnvoll ist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/kontakt" variant="primary">
              Erstgespräch vereinbaren
            </CTAButton>
            <CTAButton href="/leistungen" variant="secondary">
              Leistungen ansehen
            </CTAButton>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
