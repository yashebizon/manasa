/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      return config;
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://mentalhealth123.pythonanywhere.com/:path*', // Proxy to Backend
        },
      ];
    },
  };
  
  export default nextConfig;
