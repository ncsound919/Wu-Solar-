import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.BASE_URL || '/wu-tang-solar-system/',
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT || '5173'),
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
