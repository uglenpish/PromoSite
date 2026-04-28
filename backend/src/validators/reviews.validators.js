import { z } from "zod";

export const reviewSchema = z.object({
  name: z.string().trim().min(1, "Имя обязательно"),
  role: z.string().trim().min(1, "Должность обязательна"),
  message: z.string().trim().min(1, "Текст отзыва обязателен")
});
