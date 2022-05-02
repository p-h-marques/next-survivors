/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'flagcdn.com'],
  },
};

module.exports = nextConfig;
