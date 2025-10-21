import type { IDoctor } from "@/entities";
import type { IRelatedClinic } from "@/shared";

export interface IPatientData {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
}

export interface IAppointmentRequest {
  doctorId: string;
  clinicId: string;
  specialization: string;
  date: string;
  time: string;
  patient: IPatientData;
}

export interface IAppointmentResponse {
  success: boolean;
  appointmentId: string;
  confirmationCode?: string;
}

export type BookingStep = "initial" | "selecting_clinic" | "filling_form";

export interface IUserSelections {
  clinicSelectedByUser: boolean;
  specializationSelectedByUser: boolean;
}

export interface IBookingUIState {
  isBottomSheetOpen: boolean;
  isModalOpen: boolean;
  currentStep: BookingStep;
}

export interface IBookingState {
  // Основные данные
  doctor: IDoctor | null;
  clinic: IRelatedClinic | null;
  specialization: string | null;
  selectedDate: string | null;
  selectedTime: string | null;

  // Метаданные о выборе пользователя
  userSelections: IUserSelections;

  // UI состояние
  ui: IBookingUIState;

  // Actions
  setDoctor: (doctor: IDoctor) => void;
  setClinic: (clinic: IRelatedClinic, byUser: boolean) => void;
  setSpecialization: (specialization: string, byUser: boolean) => void;
  setTimeSlot: (date: string, time: string) => void;
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
  openModal: () => void;
  closeModal: () => void;
  proceedToNextStep: () => void;
  reset: () => void;
}
