import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "invert";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  disabled,
  onClick,
  className,
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}
