// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    turbo: true,
    turbopack: {
      root: path.join(__dirname, "stock-alert"),
    },
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
