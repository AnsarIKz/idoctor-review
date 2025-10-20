import type { IBookingState } from "../model/appointment.types";

/**
 * Определяет следующий шаг в процессе записи
 * @returns 'modal' - открыть модальное окно с формой, 'bottomSheet' - открыть выбор клиники/специальности
 */
export function determineNextStep(
  state: Pick<
    IBookingState,
    "doctor" | "selectedDate" | "selectedTime" | "userSelections"
  >
): "modal" | "bottomSheet" {
  const { doctor, selectedDate, selectedTime, userSelections } = state;

  // Если пользователь еще не выбрал время, дальнейшие шаги невозможны.
  // Исходная логика возвращала 'modal', но кажется более правильным
  // ничего не делать, пока нет базового выбора.
  // Однако, чтобы не сломать существующее поведение, оставим 'modal'.
  if (!selectedDate || !selectedTime || !doctor) {
    return "modal";
  }

  // Шаг 1: Нужно ли выбрать специальность?
  const needsSpecializationChoice =
    doctor.specialization.length > 1 &&
    !userSelections.specializationSelectedByUser;

  if (needsSpecializationChoice) {
    return "bottomSheet";
  }

  // Шаг 2: Нужно ли выбрать клинику?
  const needsClinicChoice =
    doctor.clinics.length > 1 && !userSelections.clinicSelectedByUser;

  if (needsClinicChoice) {
    return "bottomSheet";
  }

  // Если все выборы сделаны или не требовались, открываем модальное окно
  return "modal";
}

/**
 * Проверяет, можно ли продолжить запись (все необходимые данные заполнены)
 */
export function canProceedToBooking(
  state: Pick<
    IBookingState,
    "doctor" | "clinic" | "selectedDate" | "selectedTime"
  >
): boolean {
  return !!(
    state.doctor &&
    state.clinic &&
    state.selectedDate &&
    state.selectedTime
  );
}
