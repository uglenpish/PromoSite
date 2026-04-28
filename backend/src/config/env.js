import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
  path: path.resolve(process.cwd(), ".env")
});

dotenv.config({
  path: path.resolve(process.cwd(), "../.env"),
  override: false
});

export const env = {
  adminOrigin: process.env.ADMIN_ORIGIN || "http://localhost:5173",
  jwtSecret: process.env.JWT_SECRET || "change-me",
  port: Number(process.env.PORT || 3000)
};
