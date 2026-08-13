import React from "react";
import { cn } from "../lib/utils";
import type { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "xl";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  rounded?: boolean;
  href?: string;
  target?: string;
  icon?: LucideIcon;
  iconClassName?: string;
};

const variants = {
  primary:
    "rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 text-slate-900 shadow-lg shadow-cyan-500/20",

  secondary:
    "rounded-xl border border-slate-700/80 bg-slate-800/80 text-slate-300 hover:bg-slate-800",

  outline:
    "rounded-xl border border-slate-700/80 bg-slate-800/80 text-slate-300 hover:bg-slate-800",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm font-semibold",
  md: "px-4 py-3 text-sm",
  xl: "px-8 py-4 text-base font-bold rounded-xl",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  rounded = false,
  children,
  icon: Icon,
  iconClassName,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 cursor-pointer select-none transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 hover:opacity-90 hover:scale-105",
        variants[variant],
        sizes[size],
        fullWidth && "w-auto",
        rounded && "rounded-full",
        className,
      )}
      {...props}
    >
      {Icon && <Icon className={cn("w-4 h-4 text-cyan-400", iconClassName)} />}
      {children}
    </a>
  );
}
