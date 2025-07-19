/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abravidro.org.br',
        pathname: '/wp-content/uploads/**',
      },
    ],
    minimumCacheTTL: 2678400,
  },
}

export default nextConfig
