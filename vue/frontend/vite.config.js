import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

export default defineConfig({
  envDir: "..",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~images": path.resolve(__dirname, "./src/images")
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5173
  }
});
