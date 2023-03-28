/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  images: {
    domains: ['restcountries.com', 'flagcdn.com'],
  },
}

module.exports = nextConfig
