"use client";

import { useBookingStore, type IDoctor } from "@/entities";
import type { IRelatedClinic } from "@/shared/types";

/**
 * Хук для управления процессом онлайн-записи к врачу
 * Инкапсулирует логику определения следующего шага и взаимодействия со store
 */
export const useBookingFlow = () => {
  const store = useBookingStore();

  /**
   * Инициализирует процесс записи с выбором врача и опциональной клиники
   */
  const initializeBooking = (doctor: IDoctor, clinic?: IRelatedClinic) => {
    store.setDoctor(doctor);

    if (clinic) {
      store.setClinic(clinic, true);
    }
  };

  /**
   * Обрабатывает выбор временного слота
   */
  const selectTimeSlot = (date: string, time: string) => {
    store.setTimeSlot(date, time);
    store.proceedToNextStep();
  };

  /**
   * Обрабатывает выбор клиники пользователем
   */
  const selectClinic = (clinic: IRelatedClinic) => {
    store.setClinic(clinic, true);
  };

  /**
   * Переход от BottomSheet к Modal
   */
  const proceedToForm = () => {
    store.closeBottomSheet();
    store.openModal();
  };

  /**
   * Возврат к выбору клиники из Modal
   */
  const backToClinicSelection = () => {
    store.closeModal();
    store.openBottomSheet();
  };

  /**
   * Сброс всего процесса записи
   */
  const resetBooking = () => {
    store.reset();
  };

  return {
    // State
    doctor: store.doctor,
    clinic: store.clinic,
    selectedDate: store.selectedDate,
    selectedTime: store.selectedTime,
    ui: store.ui,
    userSelections: store.userSelections,

    // Actions
    initializeBooking,
    selectTimeSlot,
    selectClinic,
    proceedToForm,
    backToClinicSelection,
    resetBooking,
  };
};
