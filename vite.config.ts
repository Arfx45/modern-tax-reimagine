import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

// Replace REPO_NAME with your repo name, or use '/' for a user/org site root
export default defineConfig({
  base: '/REPO_NAME/',
  plugins: [react()],
  // ...existing config...
})
 