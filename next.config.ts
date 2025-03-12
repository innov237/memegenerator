import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* your config options here */
  eslint: {
    ignoreDuringBuilds: true, // Optionally, disable ESLint during build
  },
};

export default nextConfig;
