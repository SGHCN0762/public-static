import { defineConfig } from 'vite'

export default defineConfig({
  base: '/public-static/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
