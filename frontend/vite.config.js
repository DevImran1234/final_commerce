import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
  build: {
    outDir: "dist",  // Ensure output directory is correctly set
    chunkSizeWarningLimit: 1000, // Suppress warnings (optional)
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Separate vendor files
          }
        },
      },
    },
  },
});
