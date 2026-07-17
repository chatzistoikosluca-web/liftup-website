import type { Metadata } from "next";
import { CTAButton, Hero, Section } from "@/components";
import { finalCtaFrame, SectionHead, SiteFooter, SiteHeader } from "./_shared/blocks";
import { Reveal } from "./_shared/Reveal";
import {
  IconBetreuung,
  IconIdentity,
  IconLandingpage,
  IconProcess,
  IconRedesign,
  IconSeo,
  IconServices,
  IconStrategy,
  IconSupport,
  IconTrust,
  IconVisibility,
  IconWachstum,
  IconWebsite,
} from "./_shared/icons";
import { homeProblem, homeSolution, reasons, services } from "./_shared/site-data";

export const metadata: Metadata = {
  title: "LiftUp – Digitale Präsenz für kleine und mittelständische Unternehmen",
  description:
    "LiftUp entwickelt digitale Auftritte für kleine und mittelständische Unternehmen – mit modernen Websites, besserer Sichtbarkeit und laufender Betreuung.",
};

const serviceIcons = [IconWebsite, IconRedesign, IconLandingpage, IconSeo, IconBetreuung];
const reasonIcons = [IconIdentity, IconStrategy, IconSupport, IconWachstum];

export default function Home() {
  return (
    <main>
      <SiteHeader active="/" />

      <Section variant="special" className="lp-stage lp-onnavy">
        <div className="lp-hero-fade" aria-hidden="true" />

        <div className="lp-hero-frame">
          <Hero
            className="lp-hero-copy"
            eyebrow="Ihre Unternehmens-DNA. Digital gedacht und weiterentwickelt."
            heading={
              <>
                Ihr Unternehmen ist stark.
                <br />
                Ihr digitaler Auftritt sollte es auch sein.
              </>
            }
            lead="LiftUp entwickelt digitale Auftritte, die Geschichte, Qualität und Persönlichkeit Ihres Unternehmens sichtbar machen — und Schritt für Schritt weiterbringen."
            primaryCta={
              <CTAButton href="/kontakt" variant="primary">
                Digitale Präsenz stärken
              </CTAButton>
            }
            secondaryCta={
              <CTAButton href="/leistungen" variant="secondary">
                Leistungen ansehen
              </CTAButton>
            }
          />
        </div>
      </Section>

      <Section className="lp-bridge-receive">
        <Reveal>
          <SectionHead icon={IconVisibility} heading="Der erste Eindruck entscheidet." />
          <p className="body-lead max-w-[var(--measure-default)]">{homeProblem}</p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead icon={IconIdentity} heading="Digitale Präsenz, die zu Ihnen passt." />
          <p className="body-lead max-w-[var(--measure-default)]">{homeSolution}</p>
        </Reveal>
      </Section>

      <Section id="leistungen">
        <Reveal>
          <SectionHead icon={IconServices} heading="Leistungen im Überblick" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Reveal key={service.slug} className="lp-service-tile">
                <span className="lp-icon-tile lp-icon-tile--onlight" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="heading-4">{service.title}</h3>
                <p className="body-default text-[var(--color-text-secondary)]">
                  {service.tagline}
                </p>
                <CTAButton
                  href={`/leistungen/${service.route}`}
                  variant="secondary"
                  className="mt-auto"
                >
                  Mehr erfahren
                </CTAButton>
              </Reveal>
            );
          })}
        </div>

        <div>
          <CTAButton href="/leistungen" variant="secondary">
            Alle Leistungen ansehen
          </CTAButton>
        </div>
      </Section>

      <Section className="bg-[var(--color-background-secondary)]">
        <Reveal>
          <SectionHead icon={IconTrust} heading="Warum LiftUp?" />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reasonIcons[index];
            return (
              <Reveal key={reason.title} className="lp-panel flex items-center gap-4">
                <span className="lp-icon-tile lp-icon-tile--onlight" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="ui-default">{reason.title}</h3>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-[var(--color-background-secondary)] lp-bridge-to-navy">
        <Reveal>
          <SectionHead
            icon={IconProcess}
            heading="So läuft unsere Zusammenarbeit"
            lead="Vom ersten Gespräch bis zur laufenden Weiterentwicklung — in klar aufeinander abgestimmten Schritten."
          />
          <div>
            <CTAButton href="/ablauf" variant="secondary">
              Ablauf entdecken
            </CTAButton>
          </div>
        </Reveal>
      </Section>

      <Section variant="special" className="lp-stage lp-onnavy">
        <div className={finalCtaFrame}>
          <h2 className="heading-1">Lassen Sie uns über Ihren digitalen Auftritt sprechen.</h2>
          <p className="body-lead text-[var(--lp-on-navy-muted)]">
            In einem kurzen, unverbindlichen Erstgespräch klären wir den nächsten Schritt.
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
