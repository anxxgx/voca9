import { defineConfig } from 'vite';
import { copyFileSync } from 'node:fs';

export default defineConfig({
  base: './',
  build: {
    assetsInlineLimit: 0,
  },
  plugins: [
    {
      name: 'copy-vanilla-js',
      closeBundle() {
        copyFileSync('script.js', 'dist/script.js');
      },
    },
  ],
});
