/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/eliasgoldmann',
    assetPrefix: '/eliasgoldmann/',
    output: "export",
    images: {
        loader: "akamai",
        path: "/",
    },
};

export default nextConfig;
