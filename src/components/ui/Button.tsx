"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ButtonProps, ButtonVariant } from "../interfaces/ui";

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary-400 via-primary-500 to-accent text-white shadow-[0_0_10px_rgba(122,91,255,0.6)]",
  outline:
    "border border-white/20 bg-white/5 text-white hover:border-accent/70 hover:text-accent",
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
