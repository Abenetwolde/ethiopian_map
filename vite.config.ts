import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  build: {
    lib: {
       entry: "src/index.ts",
      name: '@abnet-wolde/ethiopian-map',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs']
    },
  rollupOptions: {
      external: ['react', 'react-dom'],
    },
 
  },
  plugins: [dts(), react(),tailwindcss(),],
});