import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import viteSolid from 'vite-plugin-solid';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      root: './',
      projects: ['./tsconfig.json'],
    }),
    tanstackRouter({
      target: 'solid',
      autoCodeSplitting: true,
    }),
    viteSolid({ ssr: false }),
    eslint(),
  ],
  build: {
    target: 'esnext',
  },
});
