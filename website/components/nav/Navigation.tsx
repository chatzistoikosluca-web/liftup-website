"use client";

import { ReactNode, useId, useState } from "react";
import styles from "./Navigation.module.css";

export interface NavLink {
  href: string;
  label: string;
  current?: boolean;
}

export interface NavigationProps {
  brand: ReactNode;
  links: NavLink[];
  cta?: ReactNode;
  className?: string;
}

export function Navigation({ brand, links, cta, className }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  return (
    <nav aria-label="Hauptnavigation" className={[styles.nav, className].filter(Boolean).join(" ")}>
      <div className={styles.brand}>{brand}</div>

      <button
        type="button"
        className={styles.toggle}
        aria-expanded={menuOpen}
        aria-controls={menuId}
        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true">☰</span>
      </button>

      <div id={menuId} className={styles.menu} data-open={menuOpen || undefined}>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={link.current ? "page" : undefined}
                className={["navigation", styles.link].join(" ")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {cta ? <div className={styles.cta}>{cta}</div> : null}
      </div>
    </nav>
  );
}
