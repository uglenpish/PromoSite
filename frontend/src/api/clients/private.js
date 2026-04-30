import axios from "axios";

const privateHttp = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: false
});

privateHttp.interceptors.request.use((config) => {
  const token = localStorage.getItem("promo_admin_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default privateHttp;
