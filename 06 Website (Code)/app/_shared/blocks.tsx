import { ComponentType, ReactNode, SVGProps } from "react";
import Link from "next/link";
import { CTAButton, Footer, Navigation } from "@/components";
import { IconLocation, IconMail, IconPhone } from "./icons";
import { contact, navLinks } from "./site-data";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)]";

export const lightLink = `text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-border-default)] transition-colors hover:text-[var(--lp-navy-800)] hover:decoration-[var(--lp-navy-800)] ${focusRing}`;

export const navyLink = `text-[var(--color-text-on-deep)] underline underline-offset-4 decoration-[var(--lp-hairline)] transition-colors hover:text-[var(--lp-cyan)] hover:decoration-[var(--lp-cyan)] ${focusRing}`;

export const brandLink = `text-[var(--color-text-on-deep)] no-underline transition-colors hover:text-[var(--lp-cyan)] ${focusRing}`;

/* Absätze aus "\n\n"-getrennter Copy — jeweils eigener <p> für ruhigen Rhythmus. */
export function paragraphs(text: string, className = "body-default") {
  return text.split("\n\n").map((part, index) => (
    <p key={index} className={className}>
      {part}
    </p>
  ));
}

/* Inline-Variante für Kontexte, die bereits in einem <p> stehen (z. B. die
   Beschreibung der Process-Komponente): Absätze werden durch <br /><br /> statt
   verschachtelter <p> getrennt. */
export function linebreakBody(text: string) {
  return text.split("\n\n").map((part, index, all) => (
    <span key={index}>
      {part}
      {index < all.length - 1 ? (
        <>
          <br />
          <br />
        </>
      ) : null}
    </span>
  ));
}

/* Wiederholt genutzter Rahmen für den "Abschluss-CTA vor dem Footer" auf
   mehreren Seiten: zentriert statt der sonst linksbündigen Stage-Inhalte,
   damit dieser letzte Moment vor dem Footer bewusst als ruhiger, klar
   abgeschlossener Höhepunkt wirkt statt als weiterer gleichförmiger Block. */
export const finalCtaFrame =
  "mx-auto flex max-w-[var(--container-narrow)] flex-col items-center gap-6 text-center";

/* Wiederkehrender Sektions-Kopf für helle Inhaltssektionen: Icon-Kachel statt
   generischem blauem Trennstrich, damit jede Sektion visuell erklärt statt
   nur abgetrennt wird. */
export function SectionHead({
  icon: Icon,
  heading,
  lead,
}: {
  icon: IconComponent;
  heading: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <div className="lp-section-head">
      <span className="lp-icon-tile lp-icon-tile--onlight" aria-hidden="true">
        <Icon />
      </span>
      <h2 className="heading-2">{heading}</h2>
      {lead ? <p className="body-default">{lead}</p> : null}
    </div>
  );
}

/* Geführtes Split-Layout für längere Passagen (nur /ueber-uns): Überschrift
   links, Fließtext rechts, Schlusssatz als Callout. Ändert keine Copy. */
export function StoryBlock({
  icon: Icon,
  heading,
  body,
}: {
  icon: IconComponent;
  heading: ReactNode;
  body: string;
}) {
  const parts = body.split("\n\n");
  const lead = parts[0];
  const middle = parts.slice(1, parts.length > 1 ? -1 : undefined);
  const closing = parts.length > 1 ? parts[parts.length - 1] : null;

  return (
    <div className="lp-story">
      <div className="lp-story-head">
        <span className="lp-icon-tile lp-icon-tile--onlight" aria-hidden="true">
          <Icon />
        </span>
        <div className="heading-2">{heading}</div>
      </div>
      <div className="lp-story-body">
        <p className="body-lead">{lead}</p>
        {middle.map((part, index) => (
          <p key={index} className="body-default">
            {part}
          </p>
        ))}
        {closing ? (
          <div className="lp-callout">
            <p className="body-lead">{closing}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function SiteHeader({ active }: { active: string }) {
  return (
    <Navigation
      className="lp-nav"
      brand={
        <Link href="/" className={`heading-4 ${brandLink}`}>
          LiftUp
        </Link>
      }
      links={navLinks.map((link) => ({ ...link, current: link.href === active }))}
      cta={
        <CTAButton href="/kontakt" variant="primary">
          Erstgespräch anfragen
        </CTAButton>
      }
    />
  );
}

export function SiteFooter() {
  return (
    <Footer
      className="lp-footer"
      brand={
        <div className="flex flex-col gap-4">
          <span className="heading-4">LiftUp</span>
          <p className="body-default">
            Digitale Präsenz, die zeigt, wofür Ihr Unternehmen steht.
          </p>
          <p className="caption flex items-center gap-2">
            <IconMail className="h-4 w-4 shrink-0" aria-hidden="true" />
            <a href={contact.emailHref} className={navyLink}>
              {contact.email}
            </a>
          </p>
          <p className="caption flex items-center gap-2">
            <IconPhone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <a href={contact.phoneHref} className={navyLink}>
              {contact.phone}
            </a>
          </p>
          <p className="caption flex items-center gap-2 text-[var(--lp-on-navy-muted)]">
            <IconLocation className="h-4 w-4 shrink-0" aria-hidden="true" />
            {contact.location}
          </p>
        </div>
      }
      linkGroups={[
        {
          heading: "Seiten",
          links: [
            { href: "/", label: "Start" },
            { href: "/leistungen", label: "Leistungen" },
            { href: "/ablauf", label: "Ablauf" },
            { href: "/ueber-uns", label: "Über uns" },
            { href: "/kontakt", label: "Kontakt" },
          ],
        },
      ]}
      legalLinks={[
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Datenschutz" },
      ]}
      copyright="© 2026 LiftUp. Alle Rechte vorbehalten."
    />
  );
}
