import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  base: "/Developer_Quiz_Site/",
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  test: {
    root: "./tests_results",
    globals: true,
    environment: "jsdom",
    setupFiles: "./testSetup.ts"
  }
});
