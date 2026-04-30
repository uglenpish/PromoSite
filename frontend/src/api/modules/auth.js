import publicHttp from "@/api/clients/public";
import privateHttp from "@/api/clients/private";

export const authApi = {
  login(payload) {
    return publicHttp.post("/auth/login", payload);
  },
  me() {
    return privateHttp.get("/auth/me");
  }
};
