import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/extension/manifest.json',
          dest: '', // Copy to the root of the dist folder
        },
        {
          src: 'src/extension/bgScript.js',
          dest: '', // Copy to the root of the dist folder
        },
        {
          src: 'src/extension/autoConnect.js',
          dest: '', // Copy to the root of the dist folder
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        // Other entries can be defined here if needed
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
