/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cocukyayini',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
