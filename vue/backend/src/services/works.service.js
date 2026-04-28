import { prisma } from "../lib/prisma.js";
import { AppError } from "../utils/app-error.js";

export function normalizeTags(tags) {
  return tags
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function getWorkOrFail(id) {
  const item = await prisma.work.findUnique({
    where: { id }
  });

  if (!item) {
    throw new AppError(404, "Работа не найдена");
  }

  return item;
}
