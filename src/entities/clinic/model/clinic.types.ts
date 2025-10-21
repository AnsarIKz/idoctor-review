import type { WorkingHours } from "@/shared";
import type { IRelatedClinic } from "@/shared/types";

export interface IClinic extends IRelatedClinic {
  phone: string;
  workingHours: WorkingHours[];
}
