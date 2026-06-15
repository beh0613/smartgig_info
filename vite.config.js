import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Fixed the typo here!

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/smartgig_info/', // Automatically paths your repository assets correctly
})