import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "augment.org",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
    ],
  },
};

export default nextConfig;
