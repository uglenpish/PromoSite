import { z } from "zod";

export const skillGroupSchema = z.object({
  title: z.string().trim().min(1, "Название группы обязательно")
});

export const skillSchema = z.object({
  title: z.string().trim().min(1, "Название навыка обязательно"),
  percent: z.coerce
    .number()
    .min(0, "Процент не может быть меньше 0")
    .max(100, "Процент не может быть больше 100")
});
