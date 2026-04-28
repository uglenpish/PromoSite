import http from "@/admin/api/http";

export const reviewsApi = {
  getAll() {
    return http.get("/reviews");
  },
  create(payload) {
    return http.post("/reviews", payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  update(id, payload) {
    return http.put(`/reviews/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  delete(id) {
    return http.delete(`/reviews/${id}`);
  }
};
