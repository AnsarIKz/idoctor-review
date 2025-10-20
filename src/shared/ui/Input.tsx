import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input = ({
  label,
  error,
  fullWidth = true,
  className,
  id,
  ...props
}: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={clsx(fullWidth && "w-full")}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1 block text-sm font-medium text-textPrimary"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          "rounded-lg border border-borderSecondary px-4 py-3 text-base",
          "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
          "disabled:cursor-not-allowed disabled:bg-bgSecondary disabled:opacity-50",
          error && "border-statusError",
          fullWidth && "w-full",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-statusError">{error}</p>}
    </div>
  );
};
