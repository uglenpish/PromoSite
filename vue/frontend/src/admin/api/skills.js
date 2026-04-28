import http from "@/admin/api/http";

export const skillsApi = {
  getGroups() {
    return http.get("/skill-groups");
  },
  createGroup(payload) {
    return http.post("/skill-groups", payload);
  },
  updateGroup(id, payload) {
    return http.put(`/skill-groups/${id}`, payload);
  },
  deleteGroup(id) {
    return http.delete(`/skill-groups/${id}`);
  },
  createSkill(groupId, payload) {
    return http.post(`/skill-groups/${groupId}/skills`, payload);
  },
  updateSkill(id, payload) {
    return http.put(`/skills/${id}`, payload);
  },
  deleteSkill(id) {
    return http.delete(`/skills/${id}`);
  }
};
