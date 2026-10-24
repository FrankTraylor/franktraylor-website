import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.franktraylor.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
