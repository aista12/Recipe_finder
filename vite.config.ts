import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Recipe_finder/', 
  build: {
    outDir: 'build',
  },
});
