/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;

