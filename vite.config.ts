import {resolve} from 'path';
import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@mocks': resolve(__dirname, 'mocks'),
    },
  },
});
