"use client";

import { InputHTMLAttributes, ReactNode, forwardRef, useId } from "react";
import styles from "./InputField.module.css";

export type InputFieldStatus = "default" | "error" | "success";

export interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  helperText?: string;
  status?: InputFieldStatus;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(function InputField(
  { helperText, status = "default", leadingIcon, trailingIcon, disabled, className, id, ...rest },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const helperId = helperText ? `${inputId}-helper` : undefined;

  return (
    <div className={styles.wrapper}>
      <div className={[styles.field, styles[status]].filter(Boolean).join(" ")}>
        {leadingIcon ? (
          <span className={styles.icon} aria-hidden="true">
            {leadingIcon}
          </span>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={status === "error" || undefined}
          aria-describedby={helperId}
          className={["body-default", styles.input, className].filter(Boolean).join(" ")}
          {...rest}
        />
        {trailingIcon ? (
          <span className={styles.icon} aria-hidden="true">
            {trailingIcon}
          </span>
        ) : null}
      </div>
      {helperText ? (
        <span id={helperId} className={["caption", styles.helper].join(" ")}>
          {helperText}
        </span>
      ) : null}
    </div>
  );
});
