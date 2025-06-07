import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174, // You can change this to any port you prefer
    open: true, // Automatically open the browser when the server starts
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Change this to your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
