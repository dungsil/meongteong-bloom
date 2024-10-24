import node from '@astrojs/node'

import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'hybrid',

  adapter: node({
    mode: 'standalone',
  }),
})
