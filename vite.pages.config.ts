import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), "index.html"),
        research: resolve(process.cwd(), "research/index.html"),
        blog: resolve(process.cwd(), "blog/index.html"),
      },
    },
  },
});
