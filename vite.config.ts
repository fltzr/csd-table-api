import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    strictPort: true,
    port: 4000,
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://192.168.1.168:3000',
    },
  },

  preview: {
    strictPort: true,
    port: 4000,
    cors: {
      credentials: true,
      origin: true,
    },
  },

  build: {
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks: {
          react: ['react'],
          'react-dom': ['react-dom'],
          'react-router-dom': ['react-router-dom'],
          'react-hook-form': ['react-hook-form'],
          zod: ['zod'],
          '@hookform/resolvers/zod': ['@hookform/resolvers/zod'],
          axios: ['axios'],
        },
      },
    },
  },
});
