/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/TaukirandSara",
  assetPrefix: "/TaukirandSara/",
};

export default nextConfig;