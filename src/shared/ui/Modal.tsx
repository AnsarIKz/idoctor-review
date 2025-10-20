"use client";

import { useEffect, type ReactNode } from "react";
import { clsx } from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={clsx(
          "relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-lg",
          "max-h-[90vh] overflow-y-auto"
        )}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="document"
      >
        {title && (
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">{title}</h2>
            <button
              type="button"
              onClick={onClose}
              className="text-2xl text-textSecondary hover:text-textPrimary"
              aria-label="Закрыть"
            >
              ×
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
