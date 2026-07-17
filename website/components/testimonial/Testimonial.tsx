import { ReactNode } from "react";
import { Card } from "../card/Card";
import styles from "./Testimonial.module.css";

export interface TestimonialProps {
  quote: ReactNode;
  authorName: ReactNode;
  authorRole?: ReactNode;
  avatar?: ReactNode;
  className?: string;
}

export function Testimonial({ quote, authorName, authorRole, avatar, className }: TestimonialProps) {
  return (
    <Card className={className}>
      <figure className={styles.testimonial}>
        <blockquote className={["emphasis-quote", styles.quote].join(" ")}>{quote}</blockquote>
        <figcaption className={styles.author}>
          {avatar ? <div className={styles.avatar}>{avatar}</div> : null}
          <div>
            <div className={["ui-default", styles.authorName].join(" ")}>{authorName}</div>
            {authorRole ? (
              <div className={["caption", styles.authorRole].join(" ")}>{authorRole}</div>
            ) : null}
          </div>
        </figcaption>
      </figure>
    </Card>
  );
}
