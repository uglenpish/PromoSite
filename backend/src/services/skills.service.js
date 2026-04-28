import { prisma } from "../lib/prisma.js";
import { AppError } from "../utils/app-error.js";

export function getSkillGroups() {
  return prisma.skillGroup.findMany({
    orderBy: {
      createdAt: "asc"
    },
    include: {
      skills: {
        orderBy: {
          createdAt: "asc"
        }
      }
    }
  });
}

export async function deleteSkillGroup(id) {
  const item = await prisma.skillGroup.findUnique({
    where: { id }
  });

  if (!item) {
    throw new AppError(404, "Группа навыков не найдена");
  }

  await prisma.skillGroup.delete({
    where: { id }
  });
}

export async function deleteSkill(id) {
  const item = await prisma.skill.findUnique({
    where: { id }
  });

  if (!item) {
    throw new AppError(404, "Навык не найден");
  }

  await prisma.skill.delete({
    where: { id }
  });
}
