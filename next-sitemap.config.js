/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://bicarapintar.ai",
  generateRobotsText: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ["/api/*", "/admin/*", "/private/*", "/_next/*", "/404", "/500"],
  additionalPaths: async (config) => {
    const result = [];

    // Add dynamic routes if any
    result.push(
      await config.transform(config, "/platform"),
      await config.transform(config, "/solutions"),
      await config.transform(config, "/implementation"),
      await config.transform(config, "/about"),
      await config.transform(config, "/contact"),
      await config.transform(config, "/case-studies"),
      await config.transform(config, "/resources")
    );

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    additionalSitemaps: ["https://bicarapintar.ai/sitemap.xml"],
    additionalPaths: [
      "User-agent: *",
      "Allow: /",
      "Disallow: /api/",
      "Disallow: /admin/",
      "Disallow: /private/",
      "",
      "# BicaraPintar - Enterprise AI Communication Platform",
      "# Contact: wisnu@bicarapintar.ai",
      "",
      "Sitemap: https://bicarapintar.ai/sitemap.xml",
    ],
  },
  transform: async (config, path) => {
    // Custom transformation for each page
    const customPriority = {
      "/": 1.0,
      "/platform": 0.9,
      "/solutions": 0.9,
      "/contact": 0.8,
      "/about": 0.7,
      "/implementation": 0.8,
      "/case-studies": 0.7,
      "/resources": 0.6,
    };

    const customChangefreq = {
      "/": "daily",
      "/platform": "weekly",
      "/solutions": "weekly",
      "/contact": "monthly",
      "/about": "monthly",
      "/implementation": "weekly",
      "/case-studies": "weekly",
      "/resources": "weekly",
    };

    return {
      loc: path,
      changefreq: customChangefreq[path] || "weekly",
      priority: customPriority[path] || 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://bicarapintar.ai${path}`,
          hreflang: "en",
        },
        {
          href: `https://bicarapintar.ai/id${path}`,
          hreflang: "id",
        },
      ],
    };
  },
};
