import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    cssCodeSplit: false,
    target: 'esnext',
    minify: false,
    modulePreload: false,
  },
})
