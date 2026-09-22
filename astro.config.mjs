import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bryanlim.me',
  compressHTML: true,
  redirects: { '/projects': '/#projects' },
});
