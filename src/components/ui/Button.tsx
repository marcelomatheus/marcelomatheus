"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ButtonProps, ButtonVariant } from "../interfaces/ui";

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-primary/60 bg-primary text-black shadow-[0_12px_28px_rgba(255,125,58,0.22)] hover:bg-primary-400",
  outline:
    "border border-white/12 bg-surface text-white hover:border-primary/60 hover:text-primary",
  ghost: "text-muted hover:text-white",
};

export function Button({
  className,
  variant = "primary",
  isLoading,
  leftIcon,
  rightIcon,
  children,
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseStyles, variantStyles[variant], "px-6 py-3 text-sm", className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
      ) : (
        leftIcon && <span className="mr-2 text-base" aria-hidden>{leftIcon}</span>
      )}
      <span>{children}</span>
      {rightIcon && !isLoading && <span className="ml-2 text-base" aria-hidden>{rightIcon}</span>}
    </button>
  );
}
