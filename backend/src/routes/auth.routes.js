import { Router } from "express";
import { loginController, meController } from "../controllers/auth.controller.js";
import { requireAuth } from "../middlewares/auth.js";
import { asyncHandler } from "../utils/async-handler.js";

export const authRouter = Router();

authRouter.post("/login", asyncHandler(loginController));
authRouter.get("/me", requireAuth, asyncHandler(meController));
