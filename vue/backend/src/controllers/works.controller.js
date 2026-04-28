import { prisma } from "../lib/prisma.js";
import { getWorkOrFail, normalizeTags } from "../services/works.service.js";
import { buildUploadPath } from "../utils/files.js";
import { workSchema } from "../validators/works.validators.js";

export async function listWorksController(request, response) {
  const items = await prisma.work.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
  response.json({ items });
}

export async function createWorkController(request, response) {
  const payload = workSchema.parse(request.body);
  const item = await prisma.work.create({
    data: {
      title: payload.title,
      link: payload.link,
      description: payload.description,
      tags: normalizeTags(payload.tags),
      imageUrl: request.file ? buildUploadPath("works", request.file.filename) : null
    }
  });

  response.status(201).json({ item });
}

export async function updateWorkController(request, response) {
  const id = Number(request.params.id);
  const currentItem = await getWorkOrFail(id);
  const payload = workSchema.parse(request.body);
  const item = await prisma.work.update({
    where: { id },
    data: {
      title: payload.title,
      link: payload.link,
      description: payload.description,
      tags: normalizeTags(payload.tags),
      imageUrl: request.file
        ? buildUploadPath("works", request.file.filename)
        : currentItem.imageUrl
    }
  });

  response.json({ item });
}

export async function deleteWorkController(request, response) {
  const id = Number(request.params.id);
  await getWorkOrFail(id);
  await prisma.work.delete({
    where: { id }
  });
  response.status(204).send();
}
