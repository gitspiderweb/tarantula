import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    output: "export", // Important for static HTML export
    basePath: isProd ? "/tarantula" : "",
    assetPrefix: isProd ? "/tarantula/" : "",
    images: { unoptimized: true } // GitHub Pages doesn't support Next.js image optimizer
};

export default nextConfig;
