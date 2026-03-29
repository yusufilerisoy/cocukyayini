/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cocukyayini',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
