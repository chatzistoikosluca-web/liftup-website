import { HTMLAttributes, ReactNode } from "react";
import styles from "./Section.module.css";

export type SectionVariant = "standard" | "special";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: SectionVariant;
  children: ReactNode;
}

export function Section({ variant = "standard", children, className, ...rest }: SectionProps) {
  return (
    <section
      className={[styles.section, styles[variant], className].filter(Boolean).join(" ")}
      {...rest}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  );
}
