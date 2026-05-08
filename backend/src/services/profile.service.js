import { prisma } from "../lib/prisma.js";
import { AppError } from "../utils/app-error.js";

function calculateAge(birthDate) {
  if (!birthDate) {
    return null;
  }

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age;
}

export function serializePublicProfile(admin) {
  if (!admin) {
    return null;
  }

  return {
    id: admin.id,
    firstName: admin.firstName || "",
    lastName: admin.lastName || "",
    fullName: `${admin.firstName || ""} ${admin.lastName || ""}`.trim(),
    birthDate: admin.birthDate ? admin.birthDate.toISOString().slice(0, 10) : "",
    age: calculateAge(admin.birthDate),
    email: admin.email,
    photoUrl: admin.photoUrl,
    bio: admin.bio || ""
  };
}

export async function getPublicProfile() {
  const admin = await prisma.admin.findFirst({
    orderBy: {
      id: "asc"
    }
  });

  if (!admin) {
    throw new AppError(404, "Профиль не найден");
  }

  return serializePublicProfile(admin);
}

export async function getAdminProfile(adminId) {
  const admin = await prisma.admin.findUnique({
    where: { id: adminId }
  });

  if (!admin) {
    throw new AppError(404, "Администратор не найден");
  }

  return serializePublicProfile(admin);
}
