import { Router } from "express";
import {
  createReviewController,
  deleteReviewController,
  listReviewsController,
  updateReviewController
} from "../controllers/reviews.controller.js";
import { requireAuth } from "../middlewares/auth.js";
import { uploadReviewAvatar } from "../middlewares/upload.js";
import { asyncHandler } from "../utils/async-handler.js";

export const reviewsRouter = Router();

reviewsRouter.get("/reviews", asyncHandler(listReviewsController));
reviewsRouter.post(
  "/reviews",
  requireAuth,
  uploadReviewAvatar.single("avatar"),
  asyncHandler(createReviewController)
);
reviewsRouter.put(
  "/reviews/:id",
  requireAuth,
  uploadReviewAvatar.single("avatar"),
  asyncHandler(updateReviewController)
);
reviewsRouter.delete("/reviews/:id", requireAuth, asyncHandler(deleteReviewController));
