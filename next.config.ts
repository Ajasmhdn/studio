import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Ignore TypeScript build errors (optional)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignore ESLint errors during builds (optional)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remote image configuration for Next.js Image component
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // You can add more Next.js config options here if needed
};

export default nextConfig;
