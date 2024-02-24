/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: "export",
    basePath: "/molcristi203.github.io",
    images: {
        unoptimized: true
    },
    assetPrefix: isProd ? "/" : ""
};

export default nextConfig;
