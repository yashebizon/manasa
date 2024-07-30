/** @type {import('next').NextConfig} */

import  i18nConfig from './next-i18next.config.js';

const { i18n } = i18nConfig;

const nextConfig = {
    i18n,
    webpack: (config) => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      return config;
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://www.manoveda.health/api/:path*', // Proxy to Backend
        },
        {
          source: '/chat-api/:path*',
          destination: 'https://mentalhealth123.pythonanywhere.com/:path*', // Proxy to Backend
        },

      ];
    },
  };
  
  export default nextConfig;
