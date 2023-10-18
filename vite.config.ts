import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8520,
    open: true,
    host: true,
    proxy: {
      '/user': {
        target: 'https://im.lazysun.me',
        changeOrigin: true,
      },
    },
  },
})
