/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/Website' : '',
    output: 'standalone',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? '/Website' : '',
    },
};

export default nextConfig;
