import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const siteOrigin = productionHost ? `https://${productionHost}` : '';

const absoluteSocialMetadata = {
  name: 'absolute-social-metadata',
  transformIndexHtml(html) {
    return html.replaceAll('__SITE_ORIGIN__', siteOrigin);
  },
};

export default defineConfig({
  plugins: [react(), absoluteSocialMetadata],
});
