import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",  // porque tu repo se llama "portfolio"
  build: {
    outDir: "docs",     // 👈 GitHub Pages sí permite /docs
    emptyOutDir: true,
  },
});
