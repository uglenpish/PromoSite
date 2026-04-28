import http from "@/admin/api/http";

export const authApi = {
  login(payload) {
    return http.post("/auth/login", payload);
  },
  me() {
    return http.get("/auth/me");
  }
};
