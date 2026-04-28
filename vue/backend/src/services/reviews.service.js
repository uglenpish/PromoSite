import { prisma } from "../lib/prisma.js";
import { AppError } from "../utils/app-error.js";

export async function getReviewOrFail(id) {
  const item = await prisma.review.findUnique({
    where: { id }
  });

  if (!item) {
    throw new AppError(404, "Отзыв не найден");
  }

  return item;
}
