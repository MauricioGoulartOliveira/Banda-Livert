import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Banda-Livert/', // 👈 ESSA LINHA É MUITO IMPORTANTE!
  plugins: [react()],
})
