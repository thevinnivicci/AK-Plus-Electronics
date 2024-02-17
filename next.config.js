/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
            {
                protocol: "https",
                hostname: "cdn.iconscout.com"
            }
        ]
    }
}

module.exports = nextConfig
