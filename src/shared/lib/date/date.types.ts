export type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface WorkingHours {
  weekday: WeekDay;

  /** Время открытия в формате 'HH:MM' (например, '09:00'). */
  open: string;

  /** Время закрытия в формате 'HH:MM' (например, '18:00'). */
  close: string;
}
