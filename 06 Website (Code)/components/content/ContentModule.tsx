import { ReactNode } from "react";
import styles from "./ContentModule.module.css";

export type ContentVariant = "text" | "text-image" | "expandable";

export interface ContentModuleProps {
  variant?: ContentVariant;
  heading?: ReactNode;
  body?: ReactNode;
  media?: ReactNode;
  summary?: ReactNode;
  details?: ReactNode;
  card?: ReactNode;
  className?: string;
}

export function ContentModule({
  variant = "text",
  heading,
  body,
  media,
  summary,
  details,
  card,
  className,
}: ContentModuleProps) {
  return (
    <div className={[styles.content, className].filter(Boolean).join(" ")}>
      {heading ? <div className={["heading-3", styles.heading].join(" ")}>{heading}</div> : null}

      {variant === "expandable" ? (
        <details>
          <summary className={["ui-default", styles.summary].join(" ")}>{summary}</summary>
          <div className="body-default">{details}</div>
        </details>
      ) : variant === "text-image" ? (
        <div className={styles.textImage}>
          <p className="body-default">{body}</p>
          <div className={styles.media}>{media}</div>
        </div>
      ) : (
        <p className="body-default">{body}</p>
      )}

      {card ? <div className={styles.card}>{card}</div> : null}
    </div>
  );
}
