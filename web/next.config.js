/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['thumbnail.imgbin.com'],
  },
}

module.exports = nextConfig
