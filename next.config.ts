import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/personal_trainer',
  assetPrefix: '/personal_trainer/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
