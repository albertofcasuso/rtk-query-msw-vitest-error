import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.js",
    exclude: [...configDefaults.exclude, "./src/tests/e2e/*"],
    coverage: {
      provider: "c8",
      reporter: ["text", "lcov"],
      exclude: ["src/mocks", "tests", "src/index.jsx"],
    },
  },
});
