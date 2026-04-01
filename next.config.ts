import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    swcPlugins: [["@lingui/swc-plugin", {}]],
  },
  turbopack: {
    rules: {
      "*.po": {
        loaders: ["@lingui/loader"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
