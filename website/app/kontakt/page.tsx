import type { Metadata } from "next";
import { Section } from "@/components";
import { navyLink, SectionHead, SiteFooter, SiteHeader } from "../_shared/blocks";
import { Reveal } from "../_shared/Reveal";
import { IconGespraech, IconLocation, IconMail, IconPhone } from "../_shared/icons";
import { contact } from "../_shared/site-data";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – LiftUp",
  description:
    "Kontaktieren Sie LiftUp für ein unverbindliches Erstgespräch — per E-Mail, telefonisch oder über das Anfrageformular.",
};

export default function KontaktPage() {
  return (
    <main>
      <SiteHeader active="/kontakt" />

      <Section variant="special" className="lp-stage lp-onnavy">
        <div className="flex max-w-[var(--container-narrow)] flex-col gap-6">
          <span className="ui-default text-[var(--lp-cyan)]">Kontakt</span>
          <h1 className="hero-display lp-hero-copy">
            Lassen Sie uns über Ihren digitalen Auftritt sprechen.
          </h1>
          <p className="body-lead text-[var(--lp-on-navy-muted)]">
            In einem kurzen, unverbindlichen Erstgespräch klären wir gemeinsam den nächsten
            Schritt.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
            <div className="flex flex-col gap-1">
              <span className="caption flex items-center gap-2 text-[var(--lp-on-navy-muted)]">
                <IconMail className="h-4 w-4" aria-hidden="true" />
                E-Mail
              </span>
              <a href={contact.emailHref} className={`heading-4 break-words ${navyLink}`}>
                {contact.email}
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="caption flex items-center gap-2 text-[var(--lp-on-navy-muted)]">
                <IconPhone className="h-4 w-4" aria-hidden="true" />
                Telefon
              </span>
              <a href={contact.phoneHref} className={`heading-4 ${navyLink}`}>
                {contact.phone}
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="caption flex items-center gap-2 text-[var(--lp-on-navy-muted)]">
                <IconLocation className="h-4 w-4" aria-hidden="true" />
                Standort
              </span>
              <span className="heading-4 text-[var(--color-text-on-deep)]">
                {contact.location}
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead
            icon={IconGespraech}
            heading="Anfrage vorbereiten"
            lead="Erzählen Sie uns kurz von Ihrem Vorhaben."
          />
        </Reveal>
        <div className="max-w-[var(--container-narrow)]">
          <ContactForm />
        </div>
      </Section>

      <SiteFooter />
    </main>
  );
}
