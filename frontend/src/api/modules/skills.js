import publicHttp from "@/api/clients/public";
import privateHttp from "@/api/clients/private";

export const skillsApi = {
  getGroups() {
    return publicHttp.get("/skill-groups");
  },
  createGroup(payload) {
    return privateHttp.post("/skill-groups", payload);
  },
  updateGroup(id, payload) {
    return privateHttp.put(`/skill-groups/${id}`, payload);
  },
  deleteGroup(id) {
    return privateHttp.delete(`/skill-groups/${id}`);
  },
  createSkill(groupId, payload) {
    return privateHttp.post(`/skill-groups/${groupId}/skills`, payload);
  },
  updateSkill(id, payload) {
    return privateHttp.put(`/skills/${id}`, payload);
  },
  deleteSkill(id) {
    return privateHttp.delete(`/skills/${id}`);
  }
};
