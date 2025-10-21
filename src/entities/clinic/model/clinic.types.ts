import type { IRelatedClinic, WorkingHours } from "@/shared";

export interface IClinic extends IRelatedClinic {
  phone: string;
  workingHours: WorkingHours[];
}
