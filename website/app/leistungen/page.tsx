import type { Metadata } from "next";
import Link from "next/link";
import { Card, CTAButton, Section } from "@/components";
import { finalCtaFrame, lightLink, SiteFooter, SiteHeader } from "../_shared/blocks";
import { Reveal } from "../_shared/Reveal";
import {
  IconBetreuung,
  IconLandingpage,
  IconRedesign,
  IconSeo,
  IconWebsite,
} from "../_shared/icons";
import { services } from "../_shared/site-data";

export const metadata: Metadata = {
  title: "Leistungen – LiftUp",
  description:
    "Website-Erstellung, Redesign, Landingpages, SEO & Sichtbarkeit sowie laufende Betreuung — digitale Leistungen von LiftUp für kleine und mittelständische Unternehmen.",
};

const serviceIcons = [IconWebsite, IconRedesign, IconLandingpage, IconSeo, IconBetreuung];

export default function LeistungenPage() {
  return (
    <main>
      <SiteHeader active="/leistungen" />

      <Section variant="special" className="lp-stage lp-onnavy">
        <div className="flex max-w-[var(--container-narrow)] flex-col gap-6">
          <span className="ui-default text-[var(--lp-cyan)]">Leistungen</span>
          <h1 className="hero-display lp-hero-copy">
            Digitale Lösungen, die zu Ihrem Unternehmen passen.
          </h1>
          <p className="body-lead text-[var(--lp-on-navy-muted)]">
            Von der neuen Website bis zur laufenden Betreuung.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="/kontakt" variant="primary">
              Erstgespräch anfragen
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Reveal key={service.slug}>
                <Card className="flex h-full flex-col">
                  <div className="flex flex-col gap-3">
                    <span className="lp-icon-tile lp-icon-tile--onlight" aria-hidden="true">
                      <Icon />
                    </span>
                    <h2 className="heading-4">{service.title}</h2>
                    <p className="body-default text-[var(--color-text-secondary)]">
                      {service.lead}
                    </p>
                  </div>
                  <div className="mt-auto flex flex-col gap-3 border-t border-[var(--color-border-divider)] pt-4">
                    <span className="ui-default numeric lp-price-value">{service.price}</span>
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={`/leistungen/${service.route}`}
                        className={`ui-default ${lightLink}`}
                      >
                        Mehr erfahren
                      </Link>
                      <Link href="/kontakt" className={`ui-default ${lightLink}`}>
                        Projekt starten
                      </Link>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section variant="special" className="lp-stage lp-onnavy">
        <div className={finalCtaFrame}>
          <h2 className="heading-1">Welche Leistung passt zu Ihrem Vorhaben?</h2>
          <p className="body-lead text-[var(--lp-on-navy-muted)]">
            Im Erstgespräch ordnen wir gemeinsam ein, was für Sie sinnvoll ist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/kontakt" variant="primary">
              Projekt besprechen
            </CTAButton>
            <CTAButton href="/ablauf" variant="secondary">
              So läuft die Zusammenarbeit ab
            </CTAButton>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
