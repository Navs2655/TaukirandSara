/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Static export — required for GitHub Pages (no Node server there)
  images: {
    unoptimized: true, // GitHub Pages can't run Next's image optimization server
  },
  // If deploying to a custom domain (CNAME), leave basePath empty.
  // If deploying to username.github.io/repo-name instead, uncomment and set:
  // basePath: "/repo-name",
};

export default nextConfig;
