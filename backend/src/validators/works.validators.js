import { z } from "zod";

export const workSchema = z.object({
  title: z.string().trim().min(1, "Название обязательно"),
  link: z.string().trim().min(1, "Ссылка обязательна"),
  description: z.string().trim().min(1, "Описание обязательно"),
  tags: z.string().trim().min(1, "Теги обязательны")
});
