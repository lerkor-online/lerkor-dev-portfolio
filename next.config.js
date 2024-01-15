/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
        '@react-email/components',
        '@react-email/render',
        '@react-email/tailwind'
    ]
},
    images: {
        domains: ['res.cloudinary.com', 'githubunwrapped.com'],
      },
}

module.exports = nextConfig
