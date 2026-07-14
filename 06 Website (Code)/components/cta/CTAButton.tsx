import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./CTAButton.module.css";

export type CTAButtonVariant = "primary" | "secondary" | "danger";

export interface CTAButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  variant?: CTAButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  children: ReactNode;
}

export function CTAButton({
  variant = "primary",
  loading = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  children,
  className,
  type = "button",
  ...rest
}: CTAButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={[styles.button, styles[variant], className].filter(Boolean).join(" ")}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : leadingIcon ? (
        <span className={styles.icon} aria-hidden="true">
          {leadingIcon}
        </span>
      ) : null}
      <span className={["ui-default", loading ? styles.labelHidden : null].filter(Boolean).join(" ")}>
        {children}
      </span>
      {!loading && trailingIcon ? (
        <span className={styles.icon} aria-hidden="true">
          {trailingIcon}
        </span>
      ) : null}
    </button>
  );
}
