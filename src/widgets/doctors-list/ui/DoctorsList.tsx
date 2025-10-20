import Link from "next/link";

import { getDoctors } from "@/entities/doctor/api/doctor.api";
import { DoctorCard } from "@/entities/doctor/ui/DoctorCard";
import type { IRelatedClinic } from "@/shared/lib/date/related.types";

export const DoctorsList = async () => {
  const doctors = await getDoctors();

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
            <Link
              href={`/clinic/${clinic.id}`}
              className="text-sm text-blue-500 hover:underline"
            >
              {clinic.name}: {clinic.address}
            </Link>
          )}
          renderTimeSlots={(slots) => (
            <div>Available slots: {slots.length}</div>
          )}
        />
      ))}
    </section>
  );
};
