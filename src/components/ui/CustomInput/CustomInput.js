"use client";

import React, { useId } from "react";
import styles from "./CustomInput.module.scss";

export default function CustomInput({
  label,
  error,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  type = "text",
  placeholder,
  value = "",
  disabled = false,
  onChange = () => {},
  id,
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;

  const containerClasses = [
    styles.container,
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inputWrapperClasses = [
    styles.inputWrapper,
    error ? styles.hasError : "",
    leftIcon ? styles.hasLeftIcon : "",
    rightIcon ? styles.hasRightIcon : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={inputWrapperClasses}>
        {leftIcon && (
          <span className={`${styles.icon} ${styles.leftIcon}`}>
            {leftIcon}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          className={styles.input}
          placeholder={placeholder || label || ""}
          value={value}
          disabled={disabled}
          onChange={(e) => {
            onChange(e.target.value, e);
          }}
          {...props}
        />
        {rightIcon && (
          <span className={`${styles.icon} ${styles.rightIcon}`}>
            {rightIcon}
          </span>
        )}
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
