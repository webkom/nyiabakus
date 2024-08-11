/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
