import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/3d-web-interactive/',
  
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
