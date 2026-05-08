import { Router } from "express";
import {
  adminProfileController,
  publicProfileController,
  updateProfileController
} from "../controllers/profile.controller.js";
import { requireAuth } from "../middlewares/auth.js";
import { uploadProfilePhoto } from "../middlewares/upload.js";
import { asyncHandler } from "../utils/async-handler.js";

export const profileRouter = Router();

profileRouter.get("/profile", asyncHandler(publicProfileController));
profileRouter.get("/profile/me", requireAuth, asyncHandler(adminProfileController));
profileRouter.put(
  "/profile",
  requireAuth,
  uploadProfilePhoto.single("photo"),
  asyncHandler(updateProfileController)
);
