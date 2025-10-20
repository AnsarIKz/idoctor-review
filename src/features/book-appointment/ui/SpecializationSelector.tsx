"use client";

import { clsx } from "clsx";

interface SpecializationSelectorProps {
  specializations: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export const SpecializationSelector = ({
  specializations,
  selected,
  onSelect,
}: SpecializationSelectorProps) => {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="sr-only">Выберите специализацию</legend>
      <div className="flex flex-wrap">
        <div className="flex gap-2 overflow-x-scroll pb-4 scroll-width-none md:pl-0">
          <div dir="ltr" className="flex items-center justify-center gap-1">
            {specializations.map((spec) => (
              <button
                key={spec}
                type="button"
                aria-pressed={selected === spec}
                onClick={() => onSelect(spec)}
                className={clsx(
                  "items-center justify-center font-medium ring-offset-background",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                  "gap-2 transition-colors text-sm whitespace-nowrap rounded-xl p-2",
                  selected === spec
                    ? "bg-primary text-white"
                    : "bg-blue-100 text-blue-600 hover:bg-blue-100 hover:text-blue-600"
                )}
                data-skill-value={spec}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </div>
    </fieldset>
  );
};
