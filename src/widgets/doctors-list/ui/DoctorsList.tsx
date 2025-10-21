import type { IDoctor } from "@/entities/doctor";
import { DoctorsListWithBooking } from "./DoctorsListWithBooking";

export const DoctorsList = async () => {
  let doctors: IDoctor[] = [];
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/doctors`;

    const res = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error(`Failed to fetch doctors: ${res.status}`);
    doctors = (await res.json()) as IDoctor[];
  } catch (e) {
    console.error(e);
  }

  return <DoctorsListWithBooking doctors={doctors} />;
};
