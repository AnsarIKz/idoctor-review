import React from "react";
import type { IDoctor } from "../model/doctor.types";
import type { IRelatedClinic } from "@/shared/lib/date/related.types";
import type { ISlot, WorkingHours } from "@/shared/lib/date/date.types";
import { DoctorCardHeader } from "./doctor-card/DoctorCardHeader";
import { DoctorCardBody } from "./doctor-card/DoctorCardBody";

interface DoctorCardProps {
  doctor: IDoctor;

  renderDoctorLink: (children: React.ReactNode) => React.ReactNode;

  renderClinicLinkSlot: (clinic: IRelatedClinic) => React.ReactNode;

  renderTimeSlots: (
    slots: ISlot[],
    dailySchedule: WorkingHours[]
  ) => React.ReactNode;

  renderBadges?: React.ReactNode;
}

export const DoctorCard = ({
  doctor,
  renderDoctorLink,
  renderClinicLinkSlot,
  renderTimeSlots,
  renderBadges,
}: DoctorCardProps) => {
  return (
    <article data-doctor-id={doctor.id} className="p-4 shadow rounded-xl">
      <div className="empty:hidden absolute right-4 top-4">{renderBadges}</div>

      <DoctorCardHeader doctor={doctor} renderDoctorLink={renderDoctorLink} />
      <DoctorCardBody
        doctor={doctor}
        renderDoctorLink={renderDoctorLink}
        renderClinicLinkSlot={renderClinicLinkSlot}
        renderTimeSlots={renderTimeSlots}
      />
    </article>
  );
};
