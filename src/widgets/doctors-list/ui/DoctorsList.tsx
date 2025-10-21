import type { IDoctor } from "@/entities";
import { DoctorsListWithBooking } from "./DoctorsListWithBooking";
import { headers } from "next/headers";

export const DoctorsList = async () => {
  let doctors: IDoctor[] = [];
  try {
    const h = await headers();
    const host = h.get("host");
    const proto = h.get("x-forwarded-proto") ?? "http";
    const origin = host
      ? `${proto}://${host}`
      : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const url = `${origin}/api/doctors`;

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
