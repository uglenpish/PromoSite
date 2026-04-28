import cors from "cors";
import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { errorHandler } from "./middlewares/error-handler.js";
import { notFoundHandler } from "./middlewares/not-found.js";
import { authRouter } from "./routes/auth.routes.js";
import { reviewsRouter } from "./routes/reviews.routes.js";
import { skillsRouter } from "./routes/skills.routes.js";
import { worksRouter } from "./routes/works.routes.js";
import { env } from "./config/env.js";
import { ensureUploadDirectories } from "./utils/files.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsPath = path.resolve(__dirname, "../uploads");
const frontendDistPath = path.resolve(__dirname, "../../frontend/dist");
const frontendIndexPath = path.join(frontendDistPath, "index.html");

export const app = express();

ensureUploadDirectories();

const configuredOrigins = env.adminOrigin
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

function isLocalDevOrigin(origin) {
  return /^http:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(origin);
}

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (configuredOrigins.includes(origin) || isLocalDevOrigin(origin)) {
        return callback(null, true);
      }

      return callback(null, false);
    },
    credentials: false
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadsPath));

app.get("/api/health", (request, response) => {
  response.json({ status: "ok" });
});

app.use("/api/auth", authRouter);
app.use("/api", skillsRouter);
app.use("/api", worksRouter);
app.use("/api", reviewsRouter);

app.use(
  express.static(frontendDistPath, {
    index: false
  })
);

app.get(["/", "/works", "/reviews", "/admin", "/admin/*"], (request, response, next) => {
  if (!fs.existsSync(frontendIndexPath)) {
    return next();
  }

  return response.sendFile(frontendIndexPath);
});

app.use(notFoundHandler);
app.use(errorHandler);
