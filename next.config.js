/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  compress: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;