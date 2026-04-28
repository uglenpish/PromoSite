import { Router } from "express";
import {
  createSkillController,
  createSkillGroupController,
  deleteSkillController,
  deleteSkillGroupController,
  listSkillGroupsController,
  updateSkillController,
  updateSkillGroupController
} from "../controllers/skills.controller.js";
import { requireAuth } from "../middlewares/auth.js";
import { asyncHandler } from "../utils/async-handler.js";

export const skillsRouter = Router();

skillsRouter.get("/skill-groups", asyncHandler(listSkillGroupsController));
skillsRouter.post("/skill-groups", requireAuth, asyncHandler(createSkillGroupController));
skillsRouter.put("/skill-groups/:id", requireAuth, asyncHandler(updateSkillGroupController));
skillsRouter.delete("/skill-groups/:id", requireAuth, asyncHandler(deleteSkillGroupController));
skillsRouter.post("/skill-groups/:groupId/skills", requireAuth, asyncHandler(createSkillController));
skillsRouter.put("/skills/:id", requireAuth, asyncHandler(updateSkillController));
skillsRouter.delete("/skills/:id", requireAuth, asyncHandler(deleteSkillController));
