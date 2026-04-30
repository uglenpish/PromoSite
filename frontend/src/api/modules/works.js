import publicHttp from "@/api/clients/public";
import privateHttp from "@/api/clients/private";

export const worksApi = {
  getAll() {
    return publicHttp.get("/works");
  },
  create(payload) {
    return privateHttp.post("/works", payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  update(id, payload) {
    return privateHttp.put(`/works/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  delete(id) {
    return privateHttp.delete(`/works/${id}`);
  }
};
