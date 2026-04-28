import { loginSchema } from "../validators/auth.validators.js";
import { authenticateAdmin } from "../services/auth.service.js";
import { signJwt } from "../utils/jwt.js";

function serializeAdmin(admin) {
  return {
    id: admin.id,
    email: admin.email
  };
}

export async function loginController(request, response) {
  const payload = loginSchema.parse(request.body);
  const admin = await authenticateAdmin(payload.email, payload.password);
  const token = signJwt({
    adminId: admin.id,
    email: admin.email
  });

  response.json({
    token,
    admin: serializeAdmin(admin)
  });
}

export async function meController(request, response) {
  response.json({
    admin: {
      id: request.auth.adminId,
      email: request.auth.email
    }
  });
}
