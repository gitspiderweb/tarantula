const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    trailingSlash: true,
    basePath: isProd ? '/tarantula' : '',
    assetPrefix: isProd ? '/tarantula' : '',
    images: {
        unoptimized: true,
        remotePatterns: [{
            protocol: 'https',
            hostname: 'gitspiderweb.github.io',
            pathname: '/**'
        }]
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.module.rules.push({
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/fonts/[hash][ext][query]'
                }
            });
        }
        return config;
    }
}

module.exports = nextConfig
