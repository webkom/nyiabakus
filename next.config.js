/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
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
