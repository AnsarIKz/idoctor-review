import { memo } from "react";
import { ClinicLink } from "@/entities/clinic/ui/ClinicLink";
import type { IRelatedClinic } from "@/shared/lib/date/related.types";
import { clsx } from "clsx";

interface ClinicSelectorProps {
  clinics: IRelatedClinic[];
  selectedClinicId?: string;
  onSelect: (clinic: IRelatedClinic) => void;
}

export const ClinicSelector = memo(
  ({ clinics, selectedClinicId, onSelect }: ClinicSelectorProps) => {
    return (
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Выберите медицинский центр</h3>

        <div className="flex flex-col gap-2">
          {clinics.map((clinic) => (
            <button
              key={clinic.id}
              type="button"
              onClick={() => onSelect(clinic)}
              className={clsx(
                "w-full rounded-2lg border-2 p-4 text-left transition-all",
                selectedClinicId === clinic.id
                  ? "border-primary bg-primary/5"
                  : "border-borderSecondary hover:border-primary/50"
              )}
            >
              <ClinicLink clinic={clinic} />
            </button>
          ))}
        </div>
      </div>
    );
  }
);

ClinicSelector.displayName = "ClinicSelector";
