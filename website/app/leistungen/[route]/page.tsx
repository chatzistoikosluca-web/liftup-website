import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTAButton, Section } from "@/components";
import { finalCtaFrame, SiteFooter, SiteHeader } from "../../_shared/blocks";
import {
  IconBetreuung,
  IconCheck,
  IconLandingpage,
  IconRedesign,
  IconSeo,
  IconWebsite,
} from "../../_shared/icons";
import { services } from "../../_shared/site-data";

const icons: Record<string, typeof IconWebsite> = {
  webdesign: IconWebsite,
  redesign: IconRedesign,
  landingpages: IconLandingpage,
  seo: IconSeo,
  betreuung: IconBetreuung,
};

export function generateStaticParams() {
  return services.map((service) => ({ route: service.route }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ route: string }>;
}): Promise<Metadata> {
  const { route } = await params;
  const service = services.find((item) => item.route === route);
  if (!service) return {};
  return {
    title: `${service.title} – LiftUp`,
    description: `${service.tagline} ${service.lead}`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ route: string }>;
}) {
  const { route } = await params;
  const service = services.find((item) => item.route === route);
  if (!service) notFound();

  const Icon = icons[service.route];

  return (
    <main>
      <SiteHeader active="/leistungen" />

      <Section variant="special" className="lp-stage lp-onnavy">
        <div className="flex max-w-[var(--container-narrow)] flex-col gap-6">
          <span className="ui-default text-[var(--lp-cyan)]">Leistungen</span>
          <h1 className="hero-display lp-hero-copy">{service.tagline}</h1>
          <p className="body-lead text-[var(--lp-on-navy-muted)]">{service.lead}</p>
          <div className="flex flex-wrap items-center gap-4">
            <CTAButton href="/kontakt" variant="primary">
              Erstgespräch anfragen
            </CTAButton>
            <span className="heading-4 numeric text-[var(--lp-cyan)]">{service.price}</span>
          </div>
        </div>
      </Section>

      <Section>
        <div className="lp-story">
          <div className="lp-story-head">
            <span className="lp-icon-tile lp-icon-tile--onlight" aria-hidden="true">
              <Icon />
            </span>
            <div className="heading-2">{service.title}</div>
          </div>
          <div className="lp-story-body">
            {service.narrative.map((block, index) => (
              <div key={block.label} className="flex flex-col gap-2">
                <span className="ui-default text-[var(--color-text-secondary)]">
                  {block.label}
                </span>
                {block.text ? (
                  <p className={index === 0 ? "body-lead" : "body-default"}>{block.text}</p>
                ) : null}
                {block.bullets ? (
                  <ul className="flex list-none flex-col gap-2 p-0">
                    {block.bullets.map((benefit) => (
                      <li key={benefit} className="body-default flex items-start gap-2">
                        <IconCheck className="mt-1 h-4 w-4 shrink-0 text-[var(--lp-navy-800)]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="special" className="lp-stage lp-onnavy">
        <div className={finalCtaFrame}>
          <h2 className="heading-1">Passt {service.title} zu Ihrem Vorhaben?</h2>
          <p className="body-lead text-[var(--lp-on-navy-muted)]">
            Im Erstgespräch klären wir gemeinsam den nächsten Schritt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/kontakt" variant="primary">
              Erstgespräch anfragen
            </CTAButton>
            <CTAButton href="/leistungen" variant="secondary">
              Alle Leistungen ansehen
            </CTAButton>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
