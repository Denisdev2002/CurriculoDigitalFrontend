/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5188',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '7128',
        pathname: '/images/**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: ['http://localhost:3000', 'http://192.168.3.28:3000']
  },
};

export default nextConfig;