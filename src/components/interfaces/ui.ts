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

export type GlassCardProps = HTMLAttributes<HTMLDivElement>;

export type EyebrowProps = HTMLAttributes<HTMLParagraphElement>;

export type GradientHeadingProps = HTMLAttributes<HTMLHeadingElement>;

export type SectionParagraphProps = HTMLAttributes<HTMLParagraphElement>;
