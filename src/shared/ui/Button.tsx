import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-medium transition-all",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "active:scale-[0.95]",
        {
          "bg-primary text-white hover:bg-primary/90": variant === "primary",
          "bg-bgSecondary text-textPrimary hover:bg-bgSecondary/80":
            variant === "secondary",
          "bg-transparent text-textPrimary hover:bg-bgSecondary":
            variant === "ghost",
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
          "w-full": fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

