import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
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
  /** When set, renders as an <a> (e.g. same-page anchor navigation) instead of a <button>, keeping identical styling. */
  href?: string;
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
  href,
  ...rest
}: CTAButtonProps) {
  const isDisabled = disabled || loading;
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  const content = (
    <>
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
    </>
  );

  if (href && !isDisabled) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...rest}
    >
      {content}
    </button>
  );
}
