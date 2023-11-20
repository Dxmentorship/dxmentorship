import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
export default defineConfig({
  output: 'server',
  markdown: {
    drafts: true,
    shikiConfig: { theme: 'css-variables' },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  site: 'https://dxmentorship.com',
  integrations: [tailwind(), sitemap(), mdx()],
});
