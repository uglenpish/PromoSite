import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const API_ORIGIN = (import.meta.env.VITE_API_ORIGIN || "http://localhost:3000").replace(/\/$/, "");

const http = axios.create({
  baseURL: API_URL,
  withCredentials: false
});

export const publicApi = {
  getSkillGroups() {
    return http.get("/skill-groups");
  },
  getWorks() {
    return http.get("/works");
  },
  getReviews() {
    return http.get("/reviews");
  }
};

export function resolveMediaUrl(path) {
  return path ? `${API_ORIGIN}${path}` : "";
}
