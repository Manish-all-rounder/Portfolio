import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves project sites at https://<user>.github.io/<repo>/
// Use root `/` in dev; use `/Portfolio/` when building for production deploy.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Portfolio/' : '/',
  server: {
    port: 3001,
    open: true,
  },
}));
