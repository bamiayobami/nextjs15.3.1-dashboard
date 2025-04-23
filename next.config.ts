import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental'
  }
  
  // transpilePackages: ['@heroicons/react', 'bcrypt'], // added it myself to help deploy to vercel - thanks to gemini
};

export default nextConfig;
