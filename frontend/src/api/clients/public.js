import axios from "axios";

const publicHttp = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: false
});

export default publicHttp;
