import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { IBookingState } from "./appointment.types";
import { determineNextStep } from "../lib/booking-logic";

export const useBookingStore = create<IBookingState>()(
  devtools(
    (set, get) => ({
      // Начальное состояние
      doctor: null,
      clinic: null,
      specialization: null,
      selectedDate: null,
      selectedTime: null,

      userSelections: {
        clinicSelectedByUser: false,
        specializationSelectedByUser: false,
      },

      ui: {
        isBottomSheetOpen: false,
        isModalOpen: false,
        currentStep: "initial",
      },

      // Actions
      setDoctor: (doctor) => {
        set({ doctor });

        // Автоматически выбираем клинику, если она одна
        if (doctor.clinics.length === 1) {
          set({
            clinic: doctor.clinics[0],
            userSelections: {
              ...get().userSelections,
              clinicSelectedByUser: false,
            },
          });
        }

        // Автоматически выбираем специализацию, если она одна
        if (doctor.specialization.length === 1) {
          set({
            specialization: doctor.specialization[0],
            userSelections: {
              ...get().userSelections,
              specializationSelectedByUser: false,
            },
          });
        }
      },

      setClinic: (clinic, byUser) =>
        set({
          clinic,
          userSelections: {
            ...get().userSelections,
            clinicSelectedByUser: byUser,
          },
        }),

      setSpecialization: (specialization, byUser) =>
        set({
          specialization,
          userSelections: {
            ...get().userSelections,
            specializationSelectedByUser: byUser,
          },
        }),

      setTimeSlot: (date, time) => {
        set({ selectedDate: date, selectedTime: time });
      },

      openBottomSheet: () =>
        set({
          ui: {
            ...get().ui,
            isBottomSheetOpen: true,
            currentStep: "selecting_clinic",
          },
        }),

      closeBottomSheet: () =>
        set({
          ui: { ...get().ui, isBottomSheetOpen: false },
        }),

      openModal: () =>
        set({
          ui: {
            ...get().ui,
            isModalOpen: true,
            currentStep: "filling_form",
          },
        }),

      closeModal: () =>
        set({
          ui: { ...get().ui, isModalOpen: false },
        }),

      proceedToNextStep: () => {
        const state = get();
        const nextStep = determineNextStep(state);

        if (nextStep === "modal") {
          state.openModal();
        } else {
          state.openBottomSheet();
        }
      },

      reset: () =>
        set({
          doctor: null,
          clinic: null,
          specialization: null,
          selectedDate: null,
          selectedTime: null,
          userSelections: {
            clinicSelectedByUser: false,
            specializationSelectedByUser: false,
          },
          ui: {
            isBottomSheetOpen: false,
            isModalOpen: false,
            currentStep: "initial",
          },
        }),
    }),
    { name: "BookingStore" }
  )
);
