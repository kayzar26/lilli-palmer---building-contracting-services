import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    unoptimized: false,
    qualities: [75, 85],
    minimumCacheTTL: 2592000,
    formats: ['image/webp'],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // All images are now self-hosted in /public/images
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/lp/villa-painting',
        destination: '/services/painting',
        permanent: true,
      },
      {
        source: '/lp/kitchen-renovation',
        destination: '/services/renovation',
        permanent: true,
      },
      {
        source: '/lp/bathroom-renovation',
        destination: '/services/renovation',
        permanent: true,
      },
      {
        source: '/lp/smart-contract',
        destination: '/services/annual-maintenance-contract',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)\\.(png|jpg|jpeg|gif|svg|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, immutable',
          },
        ],
      },
      // Apply security headers to ALL routes to deter bot scanners
      {
        source: "/(.*)",
        headers: [
          // Prevents clickjacking attacks
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Prevents MIME type sniffing (common attack vector)
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Controls referrer information
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Disallow indexing of admin/private URLs by search bots
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
