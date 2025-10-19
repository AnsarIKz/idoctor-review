import { IWeekday } from "@/shared/lib/date/date.types";

export interface IClinic {
  id: string;
  name: string;
  address: string;
  phone: string;
  workingHours: WorkingHours[];
}

export interface WorkingHours {
  weekday: IWeekday;

  /** Время открытия в формате 'HH:MM' (например, '09:00'). */
  open: string;

  /** Время закрытия в формате 'HH:MM' (например, '18:00'). */
  close: string;
}
