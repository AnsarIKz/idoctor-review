"use client";

import { useState, useCallback } from "react";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import type { IPatientData } from "@/entities/appointment/model/appointment.types";

interface PatientFormProps {
  onSubmit: (data: IPatientData) => void;
  isLoading?: boolean;
}

export const PatientForm = ({ onSubmit, isLoading }: PatientFormProps) => {
  const [formData, setFormData] = useState<IPatientData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof IPatientData, string>>
  >({});

  const validate = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof IPatientData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Введите имя";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Введите фамилию";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона";
    } else if (!/^\+?[\d\s()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Некорректный номер телефона";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (validate()) {
        onSubmit(formData);
      }
    },
    [validate, onSubmit, formData]
  );

  const handleFirstNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, firstName: e.target.value }));
    },
    []
  );

  const handleLastNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, lastName: e.target.value }));
    },
    []
  );

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, phone: e.target.value }));
    },
    []
  );

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, email: e.target.value }));
    },
    []
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        label="Имя *"
        type="text"
        value={formData.firstName}
        onChange={handleFirstNameChange}
        error={errors.firstName}
        placeholder="Введите ваше имя"
      />

      <Input
        label="Фамилия *"
        type="text"
        value={formData.lastName}
        onChange={handleLastNameChange}
        error={errors.lastName}
        placeholder="Введите вашу фамилию"
      />

      <Input
        label="Телефон *"
        type="tel"
        value={formData.phone}
        onChange={handlePhoneChange}
        error={errors.phone}
        placeholder="+7 (___) ___-__-__"
      />

      <Input
        label="Email (необязательно)"
        type="email"
        value={formData.email}
        onChange={handleEmailChange}
        error={errors.email}
        placeholder="example@mail.com"
      />

      <Button type="submit" fullWidth disabled={isLoading} size="lg">
        {isLoading ? "Отправка..." : "Записаться"}
      </Button>
    </form>
  );
};
