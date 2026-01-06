/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  webpack: (config, { isServer }) => {
    // React Three Fiber와 Three.js는 클라이언트 사이드에서만 번들링
    if (isServer) {
      config.externals = config.externals || []
      config.externals.push({
        '@react-three/fiber': 'commonjs @react-three/fiber',
        '@react-three/drei': 'commonjs @react-three/drei',
        'three': 'commonjs three',
      })
    }
    return config
  },
}

module.exports = nextConfig

