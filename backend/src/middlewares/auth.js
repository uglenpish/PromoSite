import { AppError } from "../utils/app-error.js";
import { verifyJwt } from "../utils/jwt.js";

export function requireAuth(request, response, next) {
  const authHeader = request.headers.authorization;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  if (!token) {
    return next(new AppError(401, "Authorization token is required"));
  }

  try {
    request.auth = verifyJwt(token);
    return next();
  } catch (error) {
    return next(new AppError(401, "Invalid or expired token"));
  }
}
