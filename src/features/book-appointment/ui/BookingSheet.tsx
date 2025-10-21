"use client";

import { useCallback } from "react";
import { BottomSheet, Button } from "@/shared";
import { useBookingStore } from "@/entities";
import { ClinicSelector } from "./ClinicSelector";
import { SpecializationSelector } from "./SpecializationSelector";

export const BookingSheet = () => {
  // Подписываемся ТОЛЬКО на isBottomSheetOpen
  const isOpen = useBookingStore((state) => state.ui.isBottomSheetOpen);

  // Early return - не рендерим остальное если не открыто
  if (!isOpen) return null;

  return <BookingSheetContent />;
};

// Этот компонент рендерится только когда sheet открыт
const BookingSheetContent = () => {
  const doctor = useBookingStore((state) => state.doctor);
  const clinic = useBookingStore((state) => state.clinic);
  const specialization = useBookingStore((state) => state.specialization);
  const setClinic = useBookingStore((state) => state.setClinic);
  const setSpecialization = useBookingStore((state) => state.setSpecialization);
  const closeBottomSheet = useBookingStore((state) => state.closeBottomSheet);
  const openModal = useBookingStore((state) => state.openModal);

  const handleClinicSelect = useCallback(
    (selectedClinic: typeof clinic) => {
      if (selectedClinic) {
        setClinic(selectedClinic, true);
      }
    },
    [setClinic]
  );

  const handleSpecializationSelect = useCallback(
    (value: string) => {
      setSpecialization(value, true);
    },
    [setSpecialization]
  );

  const handleConfirm = useCallback(() => {
    closeBottomSheet();
    openModal();
  }, [closeBottomSheet, openModal]);

  if (!doctor) return null;

  return (
    <BottomSheet
      isOpen={true}
      onClose={closeBottomSheet}
      title="Записаться на приём"
    >
      <div className="space-y-4">
        <div className="container mx-auto">
          <ClinicSelector
            clinics={doctor.clinics}
            selectedClinicId={clinic?.id}
            onSelect={handleClinicSelect}
          />
        </div>

        {doctor.specialization.length > 1 && (
          <div className="flex flex-col">
            <SpecializationSelector
              specializations={doctor.specialization}
              selected={specialization || doctor.specialization[0]}
              onSelect={handleSpecializationSelect}
            />
          </div>
        )}

        <div className="mt-4 flex justify-center pb-safe">
          <Button
            onClick={handleConfirm}
            fullWidth
            size="lg"
            disabled={!clinic}
          >
            Выбрать
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
};
