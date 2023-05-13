/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['tecdn.b-cdn.net', 'img-b.udemycdn.com', 'miro.medium.com', 'res.cloudinary.com'],
    },
}

module.exports = nextConfig
