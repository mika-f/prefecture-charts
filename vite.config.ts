import path from "node:path";

import React from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [React()],
  test: {
    environment: "jsdom",
    setupFiles: [path.resolve(__dirname, "src/setupTests.ts")],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
});
