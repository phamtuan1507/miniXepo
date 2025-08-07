import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [vue(), tailwindcss()],
  css: {
    preprocessorOptions: {
      // Nếu dùng SCSS hoặc LESS thì thêm ở đây
    },
  },
});
