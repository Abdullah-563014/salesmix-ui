import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 9000
  },
  build: {
    outDir: "build"
  },
  plugins: [react()],
  envPrefix: "REACT_APP_",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
