import { ReactNode } from "react";
import styles from "./Hero.module.css";

export interface HeroProps {
  eyebrow?: ReactNode;
  heading: ReactNode;
  lead?: ReactNode;
  primaryCta: ReactNode;
  secondaryCta?: ReactNode;
  media?: ReactNode;
  className?: string;
}

export function Hero({
  eyebrow,
  heading,
  lead,
  primaryCta,
  secondaryCta,
  media,
  className,
}: HeroProps) {
  return (
    <div
      className={[styles.hero, media ? styles.withMedia : null, className]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.content}>
        {eyebrow ? <span className={["ui-default", styles.eyebrow].join(" ")}>{eyebrow}</span> : null}
        <h1 className="hero-display">{heading}</h1>
        {lead ? <p className="body-lead">{lead}</p> : null}
        <div className={styles.ctas}>
          {primaryCta}
          {secondaryCta}
        </div>
      </div>
      {media ? <div className={styles.media}>{media}</div> : null}
    </div>
  );
}
