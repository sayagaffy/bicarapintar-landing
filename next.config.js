/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO optimizations
  poweredByHeader: false,
  generateEtags: false,
  compress: true,

  // For static export (if using static hosting)
  output: "export",
  trailingSlash: true,

  // Ensure correct asset paths for static export
  assetPrefix: "/",

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // For static export
    unoptimized: true,
  },

  // Static routing is now handled via generateStaticParams() in page components

  // Note: Headers and redirects are not supported in static export
  // SEO will be handled via static files and sitemap
  headers: undefined,
  redirects: undefined,

  // Experimental features for better SEO
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

module.exports = nextConfig;
