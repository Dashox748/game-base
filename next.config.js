/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    domains : ['media.rawg.io', 'localhost', 'picsum.photos'] // <== Domain name
  }

}
module.exports = nextConfig

