/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
