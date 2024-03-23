import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from "astro-icon"
import markdownIntegration from '@astropub/md'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  output: 'hybrid',
  integrations: [
    markdownIntegration(),
    mdx(), icon(), tailwind({
    applyBaseStyles: false,
  }), compress()],
})
