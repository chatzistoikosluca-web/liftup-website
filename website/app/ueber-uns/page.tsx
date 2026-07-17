import type { Metadata } from "next";
import { Card, CTAButton, Section } from "@/components";
import {
  finalCtaFrame,
  paragraphs,
  SectionHead,
  SiteFooter,
  SiteHeader,
  StoryBlock,
} from "../_shared/blocks";
import { Reveal } from "../_shared/Reveal";
import {
  IconIdentity,
  IconStrategy,
  IconSupport,
  IconTrust,
  IconWachstum,
} from "../_shared/icons";
import { contact, reasons } from "../_shared/site-data";

const reasonIcons = [IconIdentity, IconStrategy, IconSupport, IconWachstum];

export const metadata: Metadata = {
  title: "Über uns – LiftUp",
  description:
    "LiftUp denkt die Unternehmens-DNA kleiner und mittelständischer Unternehmen digital weiter — mit Klarheit, Vertrauen, Sichtbarkeit und laufender Weiterentwicklung.",
};

const dnaBody =
  "Jedes Unternehmen hat eine eigene DNA: Geschichte, Qualität, Persönlichkeit und Vertrauen — oft über Jahre gewachsen. LiftUp nimmt diese Unternehmens-DNA auf und entwickelt daraus einen digitalen Auftritt, der Ihre Stärke nach außen trägt.\n\nSo entsteht keine Website von der Stange, sondern eine digitale Präsenz, die Schritt für Schritt mit Ihnen wächst.";

const warumIntro = "Ihr digitaler Auftritt sollte zeigen, was Ihr Unternehmen besonders macht.";

export default function UeberUnsPage() {
  return (
    <main>
      <SiteHeader active="/ueber-uns" />

      <Section variant="special" className="lp-stage lp-onnavy">
        <div className="flex max-w-[var(--container-narrow)] flex-col gap-6">
          <span className="ui-default text-[var(--lp-cyan)]">Über uns</span>
          <h1 className="hero-display lp-hero-copy">Warum LiftUp existiert.</h1>
          <p className="body-lead text-[var(--lp-on-navy-muted)]">
            LiftUp hilft kleinen und mittelständischen Unternehmen, online so professionell zu
            wirken, wie sie geführt werden.
          </p>
          <p className="body-default text-[var(--lp-on-navy-muted)]">
            Von {contact.location} aus arbeiten wir mit Unternehmen aus der Region und darüber
            hinaus.
          </p>
        </div>
      </Section>

      <Section>
        <Reveal>
          <StoryBlock icon={IconIdentity} heading="Unternehmens-DNA" body={dnaBody} />
        </Reveal>
      </Section>

      <Section variant="special" className="bg-[var(--color-background-secondary)]">
        <Reveal>
          <SectionHead icon={IconTrust} heading="Warum LiftUp?" lead={warumIntro} />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reasonIcons[index];
            return (
              <Reveal key={reason.title}>
                <Card>
                  <div className="flex flex-col gap-3">
                    <span className="lp-icon-tile lp-icon-tile--onlight" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3 className="heading-4">{reason.title}</h3>
                    {paragraphs(reason.body)}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section variant="special" className="lp-stage lp-onnavy">
        <div className={finalCtaFrame}>
          <h2 className="heading-1">Passt LiftUp zu Ihrem Unternehmen?</h2>
          <p className="body-lead text-[var(--lp-on-navy-muted)]">
            Lernen wir uns in einem kurzen, unverbindlichen Erstgespräch kennen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/kontakt" variant="primary">
              Erstgespräch anfragen
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
