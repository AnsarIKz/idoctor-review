"use client";

import Link from "next/link";
import { useCallback } from "react";

import { DoctorCard, type IDoctor, ClinicLink } from "@/entities";
import type { IRelatedClinic } from "@/shared/types";
import { TimeSlotsSelector } from "@/features/book-appointment";
import { useBookingStore } from "@/entities";

interface DoctorsListWithBookingProps {
  doctors: IDoctor[];
}

export const DoctorsListWithBooking = ({
  doctors,
}: DoctorsListWithBookingProps) => {
  const setDoctor = useBookingStore((state) => state.setDoctor);
  const setClinic = useBookingStore((state) => state.setClinic);
  const setTimeSlot = useBookingStore((state) => state.setTimeSlot);
  const proceedToNextStep = useBookingStore((state) => state.proceedToNextStep);

  const handleSlotSelect = useCallback(
    (doctor: IDoctor, date: string, time: string) => {
      setDoctor(doctor);
      if (doctor.clinics.length === 1) {
        setClinic(doctor.clinics[0], false);
      }
      setTimeSlot(date, time);
      proceedToNextStep();
    },
    [setDoctor, setClinic, setTimeSlot, proceedToNextStep]
  );

  return (
    <section className="flex flex-col gap-4">
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          renderDoctorLink={(children) => (
            <Link href={`/doctor/${doctor.id}`}>{children}</Link>
          )}
          renderClinicLinkSlot={(clinic: IRelatedClinic) => (
            <ClinicLink clinic={clinic} />
          )}
          renderTimeSlots={() => (
            <TimeSlotsSelector
              days={doctor.availableSlots.days}
              onSlotSelect={(date, time) =>
                handleSlotSelect(doctor, date, time)
              }
            />
          )}
        />
      ))}
    </section>
  );
};
