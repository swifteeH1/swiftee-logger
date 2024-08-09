/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/wiki',
        destination: 'https://wikipedia.org',
        permanent: false,
      },
    ]
  }
};

module.exports = nextConfig;