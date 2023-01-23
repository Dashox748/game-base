/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["media.rawg.io", "localhost", "sm.ign.com", "ign.com","vitals.vercel-insights.com"], // <== Domain name
  },
};
module.exports = nextConfig;
