import type { WorkingHours } from "@/shared/lib/date/date.types";
import type { IRelatedClinic } from "@/shared/lib/date/related.types";

export interface IClinic extends IRelatedClinic {
  phone: string;
  workingHours: WorkingHours[];
}
