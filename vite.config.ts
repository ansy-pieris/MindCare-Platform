import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),        // React support
    tailwindcss(),  // Tailwind support
  ],
  base: '/MindCare-Platform/', // 👈 Replace with your GitHub repo name
});
