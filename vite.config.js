import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      fastRefresh: process.env.NODE_ENV !== 'test',
    }),
  ],
  server: {
    port: process.env.PORT || 3000,
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:3001',
    //       changeOrigin: true,
    //     },
    //   },
  },
})
