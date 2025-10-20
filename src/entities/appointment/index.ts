// Types
export type {
  IPatientData,
  IAppointmentRequest,
  IAppointmentResponse,
  BookingStep,
  IUserSelections,
  IBookingUIState,
  IBookingState,
} from "./model/appointment.types";

// Store
export { useBookingStore } from "./model/appointment.store";

// Utils
export { determineNextStep, canProceedToBooking } from "./lib/booking-logic";

