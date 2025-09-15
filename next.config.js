/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/events",
        destination: "/fadderperioden",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
