import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'css-variables',
    },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  site: 'https://dxmentorship.com',
  integrations: [tailwind(), sitemap(), mdx()],
  adapter: netlify(),
});
export const prerender = false;
