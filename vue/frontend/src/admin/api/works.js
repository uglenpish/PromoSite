import http from "@/admin/api/http";

export const worksApi = {
  getAll() {
    return http.get("/works");
  },
  create(payload) {
    return http.post("/works", payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  update(id, payload) {
    return http.put(`/works/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  delete(id) {
    return http.delete(`/works/${id}`);
  }
};
