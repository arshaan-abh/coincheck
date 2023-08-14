/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, swcMinify: true, async rewrites() {
        return [{
            source: "/order_books", destination: "https://coincheck.com/api/order_books"
        }]
    }
}

module.exports = nextConfig
