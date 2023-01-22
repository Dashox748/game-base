/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["media.rawg.io", "localhost", "sm.ign.com", "ign.com"], // <== Domain name
  },
};
module.exports = nextConfig;
