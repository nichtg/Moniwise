import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  // note: we are now running node server.js instead of vite
  plugins: [react()],
});
