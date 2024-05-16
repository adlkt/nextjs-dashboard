/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'eval-source-map'; // 或者 'cheap-module-source-map'
    }
    return config;
  },

  swcMinify: true, // 确保启用 SWC 压缩

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
