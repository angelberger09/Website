const isGithubPages = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/Website" : "",
  assetPrefix: isGithubPages ? "/Website/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
