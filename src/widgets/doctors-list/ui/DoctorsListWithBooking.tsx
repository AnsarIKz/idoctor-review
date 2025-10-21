"use client";

import Link from "next/link";
import { useCallback } from "react";

import { DoctorCard, type IDoctor } from "@/entities/doctor";
import { ClinicLink } from "@/entities/clinic";
import type { IRelatedClinic } from "@/shared";
import { TimeSlotsSelector } from "@/features/book-appointment";
import { useBookingStore } from "@/entities/appointment";

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
      {doctors.map((doctor, index) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          priority={index === 0}
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
