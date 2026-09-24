// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT : remplace "portfolio-3d" par le nom EXACT de ton repo GitHub
// si tu le nommes différemment (ex: /mon-portfolio/).
// Si tu déploies sur un domaine custom ou en repo "user.github.io", mets base: '/'.
const REPO_NAME = 'portfolio-3d'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
