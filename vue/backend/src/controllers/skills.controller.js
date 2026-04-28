import { prisma } from "../lib/prisma.js";
import { skillGroupSchema, skillSchema } from "../validators/skills.validators.js";
import { deleteSkill, deleteSkillGroup, getSkillGroups } from "../services/skills.service.js";

export async function listSkillGroupsController(request, response) {
  const items = await getSkillGroups();
  response.json({ items });
}

export async function createSkillGroupController(request, response) {
  const payload = skillGroupSchema.parse(request.body);
  const item = await prisma.skillGroup.create({
    data: payload
  });
  response.status(201).json({ item });
}

export async function updateSkillGroupController(request, response) {
  const payload = skillGroupSchema.parse(request.body);
  const id = Number(request.params.id);
  const item = await prisma.skillGroup.update({
    where: { id },
    data: payload
  });
  response.json({ item });
}

export async function deleteSkillGroupController(request, response) {
  const id = Number(request.params.id);
  await deleteSkillGroup(id);
  response.status(204).send();
}

export async function createSkillController(request, response) {
  const groupId = Number(request.params.groupId);
  const payload = skillSchema.parse(request.body);
  const item = await prisma.skill.create({
    data: {
      ...payload,
      groupId
    }
  });
  response.status(201).json({ item });
}

export async function updateSkillController(request, response) {
  const id = Number(request.params.id);
  const payload = skillSchema.parse(request.body);
  const item = await prisma.skill.update({
    where: { id },
    data: payload
  });
  response.json({ item });
}

export async function deleteSkillController(request, response) {
  const id = Number(request.params.id);
  await deleteSkill(id);
  response.status(204).send();
}
