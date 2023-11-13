/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["www.reelearn.ai"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.reelearn.ai",
      },
    ],
  },
};

module.exports = nextConfig;
