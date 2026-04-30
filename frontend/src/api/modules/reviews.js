import publicHttp from "@/api/clients/public";
import privateHttp from "@/api/clients/private";

export const reviewsApi = {
  getAll() {
    return publicHttp.get("/reviews");
  },
  create(payload) {
    return privateHttp.post("/reviews", payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  update(id, payload) {
    return privateHttp.put(`/reviews/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  delete(id) {
    return privateHttp.delete(`/reviews/${id}`);
  }
};
