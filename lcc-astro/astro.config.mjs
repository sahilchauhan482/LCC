// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Single-page premium mockup for Lakhdata Computer Care.
// React island only where needed (the R3F 3D canvas + the contact form).
export default defineConfig({
  site: 'https://lakhdatacomputercare.example',
  integrations: [react()],
  vite: {
    ssr: {
      // three / R3F ship ESM that Astro should not pre-bundle for SSR
      noExternal: ['three', '@react-three/fiber', '@react-three/drei'],
    },
  },
});
