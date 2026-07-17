import { ReactNode } from "react";
import styles from "./Process.module.css";

export interface ProcessStep {
  title: ReactNode;
  description?: ReactNode;
}

export interface ProcessProps {
  steps: ProcessStep[];
  className?: string;
}

export function Process({ steps, className }: ProcessProps) {
  return (
    <ol className={[styles.process, className].filter(Boolean).join(" ")}>
      {steps.map((step, index) => (
        <li key={index} className={styles.step}>
          <span className={["numeric", styles.number].join(" ")} aria-hidden="true">
            {index + 1}
          </span>
          <div className={styles.stepContent}>
            <div className={["ui-default", styles.title].join(" ")}>{step.title}</div>
            {step.description ? (
              <p className={["body-default", styles.description].join(" ")}>{step.description}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
