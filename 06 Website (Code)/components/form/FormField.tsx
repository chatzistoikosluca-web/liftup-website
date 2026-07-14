"use client";

import { useId } from "react";
import { InputField, InputFieldProps } from "../input/InputField";
import styles from "./FormField.module.css";

export interface FormFieldProps extends InputFieldProps {
  label: string;
  required?: boolean;
}

export function FormField({ label, required = false, id, className, ...rest }: FormFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      <label className={["ui-default", styles.label].join(" ")} htmlFor={inputId}>
        <span>{label}</span>
        {required ? (
          <>
            <span aria-hidden="true" className={styles.required}>
              *
            </span>
            <span className={styles.srOnly}>(Pflichtfeld)</span>
          </>
        ) : null}
      </label>
      <InputField id={inputId} required={required} {...rest} />
    </div>
  );
}
