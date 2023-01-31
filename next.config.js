/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  i18n: {
    locales: ['pt-BR', 'en'],
    defaultLocale: 'pt-BR',
  },
  env: {
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
  }
}

module.exports = nextConfig
