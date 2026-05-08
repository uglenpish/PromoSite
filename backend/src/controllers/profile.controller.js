import { prisma } from "../lib/prisma.js";
import {
  getAdminProfile,
  getPublicProfile,
  serializePublicProfile
} from "../services/profile.service.js";
import { buildUploadPath } from "../utils/files.js";
import { profileSchema } from "../validators/profile.validators.js";

export async function publicProfileController(request, response) {
  const profile = await getPublicProfile();
  response.json({ profile });
}

export async function adminProfileController(request, response) {
  const profile = await getAdminProfile(request.auth.adminId);
  response.json({ profile });
}

export async function updateProfileController(request, response) {
  const payload = profileSchema.parse(request.body);
  const currentProfile = await getAdminProfile(request.auth.adminId);

  const admin = await prisma.admin.update({
    where: {
      id: request.auth.adminId
    },
    data: {
      firstName: payload.firstName,
      lastName: payload.lastName,
      birthDate: new Date(payload.birthDate),
      bio: payload.bio,
      photoUrl: request.file
        ? buildUploadPath("profiles", request.file.filename)
        : currentProfile.photoUrl
    }
  });

  response.json({
    profile: serializePublicProfile(admin)
  });
}
