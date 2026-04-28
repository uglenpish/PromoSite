import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { AppError } from "../utils/app-error.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsRoot = path.resolve(__dirname, "../../uploads");

function createStorage(folder) {
  return multer.diskStorage({
    destination(request, file, callback) {
      callback(null, path.join(uploadsRoot, folder));
    },
    filename(request, file, callback) {
      const extension = path.extname(file.originalname);
      callback(null, `${Date.now()}-${crypto.randomUUID()}${extension}`);
    }
  });
}

function imageFilter(request, file, callback) {
  if (file.mimetype.startsWith("image/")) {
    callback(null, true);
    return;
  }

  callback(new AppError(400, "Only image files are allowed"));
}

export const uploadWorkImage = multer({
  storage: createStorage("works"),
  fileFilter: imageFilter
});

export const uploadReviewAvatar = multer({
  storage: createStorage("reviews"),
  fileFilter: imageFilter
});
