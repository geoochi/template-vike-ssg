import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import vike from 'vike/plugin'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  server: { port: 5173 },
  plugins: [vike(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
