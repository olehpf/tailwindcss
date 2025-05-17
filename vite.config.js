import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite"; // (див. нижче)
export default defineConfig({
  // plugins: [ tailwindcss() ], // (див. нижче)
  server: {
    proxy: {
      '/api': 'http://localhost:3010'
    }
  }
});