import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma.js";
import { AppError } from "../utils/app-error.js";

export async function authenticateAdmin(email, password) {
  const admin = await prisma.admin.findUnique({
    where: { email }
  });

  if (!admin) {
    throw new AppError(401, "Неверный email или пароль");
  }

  const isValidPassword = await bcrypt.compare(password, admin.passwordHash);

  if (!isValidPassword) {
    throw new AppError(401, "Неверный email или пароль");
  }

  return admin;
}
