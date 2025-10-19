export type WeekDay =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface ISlot {
  id?: string;

  /**
   * Время начала слота в формате ISO 8601.
   * @example "2025-10-21T14:00:00.000Z"
   */
  time: string;
}
export interface WorkingHours {
  weekday: WeekDay;

  /** Время открытия в формате 'HH:MM' (например, '09:00'). */
  open: string;

  /** Время закрытия в формате 'HH:MM' (например, '18:00'). */
  close: string;
}
