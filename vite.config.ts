import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.ngrok-free.dev', // ✅ allow ALL ngrok subdomains
      'unrequisite-allyn-lactationally.ngrok-free.dev' // ✅ explicitly add yours
    ],
  }
})

