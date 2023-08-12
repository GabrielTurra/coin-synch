/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: [
    "page.tsx",
    "api.ts",
    "api.tsx",
  ],
  images: {
    domains: ["s2.coinmarketcap.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
