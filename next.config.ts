import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },
};

export default nextConfig;
