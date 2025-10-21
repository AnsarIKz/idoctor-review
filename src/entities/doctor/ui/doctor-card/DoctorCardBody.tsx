import React from "react";
import type { IDoctor } from "../../model/doctor.types";
import type { IRelatedClinic } from "@/shared/types";
import { PriceDisplay } from "../PriceDisplay";

interface DoctorCardBodyProps {
  doctor: Pick<
    IDoctor,
    | "specialization"
    | "fullName"
    | "experienceYears"
    | "discountLabel"
    | "prices"
    | "priceDisclaimer"
    | "clinics"
  >;
  renderDoctorLink: (children: React.ReactNode) => React.ReactNode;
  renderClinicLinkSlot: (clinic: IRelatedClinic) => React.ReactNode;
  renderTimeSlots: () => React.ReactNode;
}

export const DoctorCardBody = ({
  doctor,
  renderDoctorLink,
  renderClinicLinkSlot,
  renderTimeSlots,
}: DoctorCardBodyProps) => {
  const primaryPrices = doctor.prices.filter((p) => p.type !== "online");
  const onlinePrice = doctor.prices.find((p) => p.type === "online");

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <p className="text-sm">{doctor.specialization.join(", ")}</p>
        {renderDoctorLink(
          <span className="font-bold">
            <h4 className="inline text-lg">
              {doctor.fullName}
              <span className="mx-2 text-lg">•</span>
            </h4>
            <span className="text-lg">{`Стаж ${doctor.experienceYears} год`}</span>
          </span>
        )}
      </div>

      {doctor.discountLabel && (
        <span className="rounded-full px-2 py-1 text-white bg-statusSuccess mt-2 w-max text-sm font-bold">
          {doctor.discountLabel}
        </span>
      )}

      <div className="mt-2 flex flex-col gap-2">
        <div className="flex items-start gap-2 md:items-center md:gap-6">
          {primaryPrices.map((price, index) => (
            <React.Fragment key={price.type}>
              <PriceDisplay price={price} />
              {index < primaryPrices.length - 1 && (
                <div className="h-7 w-px bg-bgSecondary"></div>
              )}
            </React.Fragment>
          ))}

          {onlinePrice && (
            <>
              <div className="h-7 w-px bg-bgSecondary"></div>
              <PriceDisplay price={onlinePrice} />
            </>
          )}
        </div>
        <p className="text-extra-xs">{doctor.priceDisclaimer}</p>
      </div>

      <div className="mt-1">
        {doctor.clinics[0] && renderClinicLinkSlot(doctor.clinics[0])}
      </div>

      <div className="mt-4">{renderTimeSlots()}</div>
    </div>
  );
};
