import { z } from "zod";

export const profileSchema = z.object({
  firstName: z.string().trim().min(1, "Укажите имя"),
  lastName: z.string().trim().min(1, "Укажите фамилию"),
  birthDate: z.string().trim().min(1, "Укажите дату рождения"),
  bio: z.string().trim().min(1, "Добавьте описание")
});
