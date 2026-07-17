import { ReactNode } from "react";
import styles from "./Footer.module.css";

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: FooterLink[];
}

export interface FooterSocialLink extends FooterLink {
  icon: ReactNode;
}

export interface FooterProps {
  brand: ReactNode;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyright: string;
  socialLinks?: FooterSocialLink[];
  className?: string;
}

export function Footer({
  brand,
  linkGroups,
  legalLinks,
  copyright,
  socialLinks,
  className,
}: FooterProps) {
  return (
    <footer className={[styles.footer, className].filter(Boolean).join(" ")}>
      <div className={styles.top}>
        <div className={styles.brand}>{brand}</div>
        <div className={styles.groups}>
          {linkGroups.map((group) => (
            <div key={group.heading} className={styles.group}>
              <span className={["ui-default", styles.groupHeading].join(" ")}>{group.heading}</span>
              <ul className={styles.groupLinks}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={["navigation", styles.link].join(" ")}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {socialLinks && socialLinks.length > 0 ? (
          <ul className={styles.social}>
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a href={social.href} aria-label={social.label} className={styles.link}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className={styles.bottom}>
        <span className={["caption", styles.copyright].join(" ")}>{copyright}</span>
        <ul className={styles.legal}>
          {legalLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={["caption", styles.link].join(" ")}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
