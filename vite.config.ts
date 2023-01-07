import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    modules: {
      localsConvention: 'camelCase'
      // generateScopedName: '[local]_[has:base64:2]'
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/main.ts'),
      name: 'ReactMiguUi',
      formats: ['es', 'umd'],
      // the proper extensions will be added
      fileName: (format) => `react-migu-ui.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React'
        }
      }
    }
  }
})
