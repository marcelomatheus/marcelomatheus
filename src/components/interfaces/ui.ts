import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export type ButtonVariant = "primary" | "outline" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {}

export interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {}

export interface GradientHeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface SectionParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}
