import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure the root is set to the project root directory
  server: {
    port: process.env.PORT || 5173, // Use the port specified by Render or default to 5173
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
  preview: {
    port: process.env.PORT || 5173, // Use the port specified by Render or default to 5173
  },
});
