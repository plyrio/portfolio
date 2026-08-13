import React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

type BadgeVariant = "default" | "small" | "stack" | "outline" | "disponible";

type BadgeProps ={
  variant?: BadgeVariant;
  icon?: LucideIcon;
  iconClassName?: string;
  children: React.ReactNode;
};

const variants = {
  default:
    "px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm",

  small:
    "text-xs px-3 py-1 rounded-md bg-slate-800 text-slate-300",

  stack:
    "text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400",

  outline:
    "px-3 py-1 rounded-full border border-slate-700 text-slate-300",
  disponible:
  "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium"
};

export const Badge = ({
  variant = "default",
  icon: Icon,
  iconClassName,
  children,

  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono",
        variants[variant]
      )}
      {...props}
    >
      {Icon && (
        <Icon
          className={cn(
            "w-4 h-4 text-cyan-400",
            iconClassName
          )}
        />
      )}

      {children}
    </span>
  );
};