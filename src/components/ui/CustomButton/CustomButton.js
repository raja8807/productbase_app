"use client";

import React from "react";
import Link from "next/link";
import styles from "./CustomButton.module.scss";

export default function CustomButton({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  onClick,
  className = "",
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  fullWidth = false,
  ...props
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    loading ? styles.loading : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading ? (
        <span className={styles.spinner}></span>
      ) : (
        <>
          {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

          <span>{children}</span>

          {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
