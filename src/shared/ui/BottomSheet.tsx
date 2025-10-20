"use client";

import { useEffect, type ReactNode } from "react";
import { clsx } from "clsx";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const BottomSheet = ({
  isOpen,
  onClose,
  children,
  title,
}: BottomSheetProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={clsx(
          "w-full rounded-t-3xl bg-white shadow-lg",
          "max-h-[80vh] flex flex-col",
          "animate-slide-up"
        )}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="document"
      >
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {title && (
            <header className="flex items-center justify-between my-4 border-0 p-0">
              <h3 className="text-xl font-bold">{title}</h3>
              <button
                type="button"
                aria-label="Закрыть"
                onClick={onClose}
                className={clsx(
                  "inline-flex items-center justify-center whitespace-nowrap text-base ring-offset-background",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                  "active:scale-[0.95] transition duration-300 ease-out touch-none",
                  "relative rounded-full py-4 font-medium ml-auto size-12 min-w-12 bg-bgSecondary"
                )}
                data-testid="close-modal-button"
              >
                <span className="text-2xl leading-none">×</span>
              </button>
            </header>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
