/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abravidro.org.br',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
