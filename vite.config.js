import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dotenv from "dotenv";
dotenv.config();
const isDev = process.env.NODE_ENV === "development";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
