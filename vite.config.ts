import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    tailwindcss(),
    dts({
      include: ['lib'],
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
    })
  ],
  build: {
    lib: {
      entry: [resolve(__dirname, 'lib/main.ts'), resolve(__dirname, 'lib/index.css')],
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        }
      },
    },
    copyPublicDir: false,
  }
})
