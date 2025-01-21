import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vitePluginRequire from 'vite-plugin-require'
import mdx from '@mdx-js/rollup'
import { remarkCodeHike,  recmaCodeHike } from 'codehike/mdx'
import remarkGfm from 'remark-gfm'
import path from 'path'

const codeHideConfig = {
  components: {
    inlineCode: 'InlineCode',
    code: 'Code'
  },
  syntaxHighlighting: {
    theme: 'github-light'
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // @ts-ignore
    vitePluginRequire.default(),
    tailwindcss(),
    mdx({
      remarkPlugins: [[remarkCodeHike, codeHideConfig], remarkGfm],
      recmaPlugins: [[recmaCodeHike, codeHideConfig]]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'app': path.resolve(__dirname, './src/app'),
      'components': path.resolve(__dirname, './src/components'),
      'utils': path.resolve(__dirname, './src/utils')
    }
  }
})
