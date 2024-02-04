import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Audio-phile/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets/", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      external: [
        "/assets/shared/desktop/image-category-thumbnail-headphones.png",
        "/assets/shared/desktop/image-category-thumbnail-speakers.png",
        "/assets/shared/desktop/image-category-thumbnail-earphones.png",
        // "/assets/shared/desktop/logo.svg",
        // "/assets/shared/desktop/icon-cart.svg",
      ],
    },
  },
});
