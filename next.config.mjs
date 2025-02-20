/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true, // Cloudflare Pages に最適化
};

export default nextConfig;