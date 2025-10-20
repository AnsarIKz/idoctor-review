"use client";

import { useBookingStore } from "@/entities/appointment/model/appointment.store";
import type { IDoctor } from "@/entities/doctor/model/doctor.types";
import type { IRelatedClinic } from "@/shared/lib/date/related.types";

interface BookingTriggerProps {
  doctor: IDoctor;
  clinic?: IRelatedClinic;
  onSlotSelect: (date: string, time: string) => void;
}

/**
 * Универсальный триггер для запуска онлайн-записи.
 * Может использоваться в любой части приложения.
 *
 * @example
 * // В карточке доктора
 * <BookingTrigger doctor={doctor} onSlotSelect={handleSlotSelect} />
 *
 * // Со специфической клиникой
 * <BookingTrigger doctor={doctor} clinic={clinic} onSlotSelect={handleSlotSelect} />
 */
export const BookingTrigger = ({
  doctor,
  clinic,
  onSlotSelect,
}: BookingTriggerProps) => {
  const { setDoctor, setClinic, setTimeSlot, proceedToNextStep } =
    useBookingStore();

  const handleSlotSelect = (date: string, time: string) => {
    // Устанавливаем доктора
    setDoctor(doctor);

    // Если клиника передана явно, устанавливаем её
    if (clinic) {
      setClinic(clinic, true);
    }

    // Устанавливаем выбранный слот
    setTimeSlot(date, time);

    // Вызываем callback
    onSlotSelect(date, time);

    // Определяем следующий шаг и открываем соответствующий UI
    proceedToNextStep();
  };

  return { handleSlotSelect };
};

