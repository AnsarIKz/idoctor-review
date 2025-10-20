import type { IDoctor } from "@/entities/doctor/model/doctor.types";

export const getDoctors = async (): Promise<IDoctor[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/doctors`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch doctors");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return [];
  }
};
