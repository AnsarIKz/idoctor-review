import type { IDoctor } from "@/entities";

export const getDoctors = async (): Promise<IDoctor[]> => {
  try {
    const res = await fetch("/api/doctors", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
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
