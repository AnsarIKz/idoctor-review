export interface ITimeSlot {
  time: string;
  available: boolean;
  clinicId?: string;
}

export interface IDaySlot {
  date: string;
  dayOfWeek: string;
  label: string;
  timeRange?: string;
  isAvailable: boolean;
  slots: ITimeSlot[];
}

export interface ITimeSlotsData {
  days: IDaySlot[];
}
