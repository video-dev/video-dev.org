/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/XaVjFDXBrU",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
