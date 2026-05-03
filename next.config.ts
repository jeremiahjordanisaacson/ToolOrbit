import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ToolOrbit",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
