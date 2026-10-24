import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/itz-fizz-scroll",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;