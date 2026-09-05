import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ThreeUI (@designcodeio/threeui) pulls in its own React import graph when
// Vite pre-bundles it, producing a SECOND React instance -> "useRef is null"
// / "Invalid hook call" crash. dedupe + forcing React into the shared
// optimizeDeps bundle collapses it back to a single React instance.
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', 'three'],
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@designcodeio/threeui/components/OrbitalSphereBackground',
      '@designcodeio/threeui/components/ConstellationField',
      '@designcodeio/threeui/components/ParticleDrift',
    ],
  },
  server: {
    host: true,
    port: 3003,
    strictPort: false,
  },
})
