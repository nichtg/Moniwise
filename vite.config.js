import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config({path: '.env'});

// https://vitejs.dev/config/
export default defineConfig({
  // note: we are now running node server.js instead of vite
  plugins: [react()],
  define: {
    'process': process
  }
});
 