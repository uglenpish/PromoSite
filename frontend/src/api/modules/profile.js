import publicHttp from "@/api/clients/public";
import privateHttp from "@/api/clients/private";

export const profileApi = {
  getPublic() {
    return publicHttp.get("/profile");
  },
  getAdmin() {
    return privateHttp.get("/profile/me");
  },
  update(payload) {
    return privateHttp.put("/profile", payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
};
