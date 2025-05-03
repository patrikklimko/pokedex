// filepath: c:\Users\patri\Pokedex\pokedex\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pokedex/', // Ensure this is set for GitHub Pages
  plugins: [react()],
});