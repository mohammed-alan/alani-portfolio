import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "/alani-portfolio/",
  plugins: [react(), tailwindcss()],
  base: '/alani-portfolio/',
});
