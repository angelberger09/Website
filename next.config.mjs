/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Website",
  assetPrefix: "/Website/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
