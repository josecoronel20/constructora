/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones SEO y rendimiento
  compress: true,
  poweredByHeader: false,
  
  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
