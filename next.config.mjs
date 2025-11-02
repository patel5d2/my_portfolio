/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
