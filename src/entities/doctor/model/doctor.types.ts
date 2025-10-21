import type { IClinic, ITimeSlotsData } from "@/entities";
import type { WorkingHours } from "@/shared";

export type PriceType = "primary" | "secondary" | "online";

export interface IPriceDetail {
  type: PriceType;
  minPrice: number | null;
  maxPrice?: number | null;
  isDiscounted?: boolean;
}

export interface IRating {
  score: number;
  reviewCount: number;
}

export interface IDoctor {
  id: string;
  photoUrl: string;
  fullName: string;
  specialization: string[];
  experienceYears: number;
  rating: IRating;

  clinics: IClinic[];
  dailySchedule: WorkingHours[];

  prices: IPriceDetail[];
  discountLabel: string | null;
  priceDisclaimer: string;

  availableSlots: ITimeSlotsData;
}
