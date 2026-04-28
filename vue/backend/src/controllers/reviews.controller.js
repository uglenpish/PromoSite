import { prisma } from "../lib/prisma.js";
import { getReviewOrFail } from "../services/reviews.service.js";
import { buildUploadPath } from "../utils/files.js";
import { reviewSchema } from "../validators/reviews.validators.js";

export async function listReviewsController(request, response) {
  const items = await prisma.review.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
  response.json({ items });
}

export async function createReviewController(request, response) {
  const payload = reviewSchema.parse(request.body);
  const item = await prisma.review.create({
    data: {
      name: payload.name,
      role: payload.role,
      message: payload.message,
      avatarUrl: request.file ? buildUploadPath("reviews", request.file.filename) : null
    }
  });
  response.status(201).json({ item });
}

export async function updateReviewController(request, response) {
  const id = Number(request.params.id);
  const currentItem = await getReviewOrFail(id);
  const payload = reviewSchema.parse(request.body);
  const item = await prisma.review.update({
    where: { id },
    data: {
      name: payload.name,
      role: payload.role,
      message: payload.message,
      avatarUrl: request.file
        ? buildUploadPath("reviews", request.file.filename)
        : currentItem.avatarUrl
    }
  });
  response.json({ item });
}

export async function deleteReviewController(request, response) {
  const id = Number(request.params.id);
  await getReviewOrFail(id);
  await prisma.review.delete({
    where: { id }
  });
  response.status(204).send();
}
