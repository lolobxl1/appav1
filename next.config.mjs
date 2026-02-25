/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/sitebeta1',
  assetPrefix: '/sitebeta1/',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
