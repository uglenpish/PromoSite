import { Router } from "express";
import {
  createWorkController,
  deleteWorkController,
  listWorksController,
  updateWorkController
} from "../controllers/works.controller.js";
import { requireAuth } from "../middlewares/auth.js";
import { uploadWorkImage } from "../middlewares/upload.js";
import { asyncHandler } from "../utils/async-handler.js";

export const worksRouter = Router();

worksRouter.get("/works", asyncHandler(listWorksController));
worksRouter.post(
  "/works",
  requireAuth,
  uploadWorkImage.single("image"),
  asyncHandler(createWorkController)
);
worksRouter.put(
  "/works/:id",
  requireAuth,
  uploadWorkImage.single("image"),
  asyncHandler(updateWorkController)
);
worksRouter.delete("/works/:id", requireAuth, asyncHandler(deleteWorkController));
