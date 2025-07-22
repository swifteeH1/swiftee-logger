/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/wiki',
        destination: 'https://wikipedia.org:3000',
        permanent: false,
      },
      {
        source: "/redirect-ssl/:slug",
        destination: "https://:slug",
        permanent: false
      },
      {
        source: "/redirect/:slug",
        destination: "http://:slug",
        permanent: false
      }
    ]
  }
};

module.exports = nextConfig;