import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    output: "export", // Static HTML export for GitHub Pages
    basePath: isProd ? "/tarantula" : "",
    assetPrefix: isProd ? "/tarantula/" : "",
    images: { unoptimized: true },
};

export default nextConfig;
