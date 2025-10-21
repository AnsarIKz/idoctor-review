"use client";

import { useState } from "react";
import { Modal, Button } from "@/shared";
import { useBookingStore, canProceedToBooking } from "@/entities";
import { PatientForm } from "./PatientForm";
import { bookingApi } from "../api/booking.api";
import type { IPatientData } from "@/entities";

export const BookingModal = () => {
  const ui = useBookingStore((state) => state.ui);
  const doctor = useBookingStore((state) => state.doctor);
  const clinic = useBookingStore((state) => state.clinic);
  const selectedDate = useBookingStore((state) => state.selectedDate);
  const selectedTime = useBookingStore((state) => state.selectedTime);
  const specialization = useBookingStore((state) => state.specialization);
  const closeModal = useBookingStore((state) => state.closeModal);
  const openBottomSheet = useBookingStore((state) => state.openBottomSheet);
  const reset = useBookingStore((state) => state.reset);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const canProceed = canProceedToBooking({
    doctor,
    clinic,
    selectedDate,
    selectedTime,
  });

  const handleSubmit = async (patientData: IPatientData) => {
    if (!canProceed || !doctor || !clinic || !selectedDate || !selectedTime) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await bookingApi.createAppointment({
        doctorId: doctor.id,
        clinicId: clinic.id,
        specialization: specialization || doctor.specialization[0],
        date: selectedDate,
        time: selectedTime,
        patient: patientData,
      });

      if (response.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Ошибка при записи:", error);
      alert("Произошла ошибка при записи. Попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    closeModal();
    reset();
    setIsSuccess(false);
  };

  const handleEditClinic = () => {
    closeModal();
    openBottomSheet();
  };

  if (!canProceed) {
    return (
      <Modal isOpen={ui.isModalOpen} onClose={handleClose} title="Ошибка">
        <p className="text-center text-textSecondary">
          Недостаточно данных для записи. Пожалуйста, попробуйте снова.
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={ui.isModalOpen}
      onClose={handleClose}
      title={isSuccess ? "Запись успешна!" : "Запись на приём"}
    >
      {isSuccess ? (
        <div className="flex flex-col items-center gap-4 py-6">
          <div className="rounded-full bg-statusSuccess/20 p-6">
            <svg
              className="size-12 text-statusSuccess"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <title>Успешная запись</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-center text-lg">
            Вы успешно записались на приём к врачу!
          </p>
          <p className="text-center text-sm text-textSecondary">
            Мы отправили подтверждение на ваш телефон.
          </p>
          <Button onClick={handleClose} fullWidth>
            Закрыть
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Информация о записи */}
          <div className="rounded-2lg bg-bgSecondary p-4">
            <h3 className="mb-2 font-semibold">Детали записи</h3>
            <div className="flex flex-col gap-1 text-sm">
              <p>
                <span className="text-textSecondary">Врач:</span>{" "}
                {doctor?.fullName}
              </p>
              <p>
                <span className="text-textSecondary">Клиника:</span>{" "}
                {clinic?.name}
              </p>
              <p>
                <span className="text-textSecondary">Дата:</span> {selectedDate}
              </p>
              <p>
                <span className="text-textSecondary">Время:</span>{" "}
                {selectedTime}
              </p>
            </div>
            {doctor && doctor.clinics.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleEditClinic}
                className="mt-2"
              >
                Изменить клинику
              </Button>
            )}
          </div>

          {/* Форма пациента */}
          <PatientForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      )}
    </Modal>
  );
};
