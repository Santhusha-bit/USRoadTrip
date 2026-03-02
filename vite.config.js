import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Assumes the repository name is "USRoadTrip"
  // GitHub Pages URL will be: https://<username>.github.io/USRoadTrip/
  base: '/USRoadTrip/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
