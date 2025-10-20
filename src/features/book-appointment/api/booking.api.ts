import type {
  IAppointmentRequest,
  IAppointmentResponse,
} from "@/entities/appointment/model/appointment.types";

/**
 * API для работы с записями к врачам (Mock implementation)
 */
export const bookingApi = {
  /**
   * Создание записи к врачу
   * @param data - Данные записи
   */
  createAppointment: async (
    data: IAppointmentRequest
  ): Promise<IAppointmentResponse> => {
    // Имитация запроса к API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Создание записи:", data);

    // Mock успешный ответ
    return {
      success: true,
      appointmentId: `apt_${Date.now()}`,
      confirmationCode: Math.random().toString(36).substring(7).toUpperCase(),
    };
  },
};
