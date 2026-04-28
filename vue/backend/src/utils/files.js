import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsRoot = path.resolve(__dirname, "../uploads");

export function ensureUploadDirectories() {
  const directories = [
    uploadsRoot,
    path.join(uploadsRoot, "works"),
    path.join(uploadsRoot, "reviews")
  ];

  directories.forEach((directory) => {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
  });
}

export function buildUploadPath(folder, filename) {
  return `/uploads/${folder}/${filename}`;
}
