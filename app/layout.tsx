import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Open_Sans } from "next/font/google";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-goli",
  display: "swap",
  preload: true,
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
});

// Enhanced SEO metadata
export const metadata: Metadata = {
  title: {
    default:
      "BicaraPintar - Enterprise AI Communication Platform | Proven Implementation Indonesia",
    template: "%s | BicaraPintar - AI Communication Platform Indonesia",
  },
  description:
    "Transform customer experiences with BicaraPintar's enterprise AI communication platform. Proven track record with 15+ successful implementations across healthcare, transportation, and IoT sectors in Indonesia. 40-60% operational efficiency improvement guaranteed.",
  keywords: [
    "AI Communication Platform Indonesia",
    "Enterprise AI Solutions",
    "Conversational AI Indonesia",
    "AI Customer Service Platform",
    "Enterprise Automation Indonesia",
    "AI Implementation Healthcare",
    "AI Transportation Solutions",
    "BicaraPintar AI Platform",
    "Indonesian AI Technology",
    "Enterprise AI Jakarta",
    "AI Voice Platform Indonesia",
    "Omnichannel AI Solutions",
    "WhatsApp Business AI",
    "Custom AI Development Indonesia",
    "AI Integration Services",
  ],
  authors: [
    { name: "PT Bicara Pintar Indonesia", url: "https://bicarapintar.ai" },
  ],
  creator: "PT Bicara Pintar Indonesia",
  publisher: "PT Bicara Pintar Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bicarapintar.ai"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bicarapintar.ai",
    siteName: "BicaraPintar - Enterprise AI Communication Platform",
    title:
      "BicaraPintar - Enterprise AI Communication Platform | Proven Implementation Indonesia",
    description:
      "Enterprise AI communication platform with proven track record. 15+ successful implementations across healthcare, transportation, IoT. 40-60% operational efficiency improvement.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BicaraPintar - Enterprise AI Communication Platform Dashboard",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "BicaraPintar Logo - AI Communication Platform",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BicaraPintar - Enterprise AI Communication Platform Indonesia",
    description:
      "Proven AI communication solutions for enterprises. 15+ successful implementations, 40-60% efficiency improvement.",
    images: ["/twitter-image.jpg"],
    creator: "@bicarapintar",
    site: "@bicarapintar",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Enterprise AI Software",
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6A2FF7" },
    { media: "(prefers-color-scheme: dark)", color: "#6A2FF7" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Enhanced Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Enhanced Google Analytics 4
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'BicaraPintar - Enterprise AI Platform',
                page_location: window.location.href,
                content_group1: 'Enterprise AI',
                content_group2: 'Landing Page',
                custom_map: {
                  'custom_parameter_1': 'industry',
                  'custom_parameter_2': 'company_size'
                }
              });
              
              // Track page engagement
              gtag('event', 'page_view', {
                page_title: 'BicaraPintar Landing Page',
                page_location: window.location.href,
                content_category: 'Enterprise AI Platform'
              });
            `,
          }}
        />

        {/* Structured Data for Better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://bicarapintar.ai/#organization",
                  name: "PT Bicara Pintar Indonesia",
                  alternateName: ["BicaraPintar", "Bicara Pintar"],
                  url: "https://bicarapintar.ai",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://bicarapintar.ai/logo.png",
                    width: 512,
                    height: 512,
                  },
                  description:
                    "Enterprise AI communication platform with proven implementation track record across Indonesian enterprises",
                  foundingDate: "2023",
                  foundingLocation: {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "Jl. Simponi No.21, Turangga",
                      addressLocality: "Bandung",
                      addressRegion: "West Java",
                      postalCode: "40264",
                      addressCountry: "ID",
                    },
                  },
                  address: [
                    {
                      "@type": "PostalAddress",
                      streetAddress: "Jl. Simponi No.21, Turangga",
                      addressLocality: "Bandung",
                      addressRegion: "West Java",
                      postalCode: "40264",
                      addressCountry: "ID",
                      name: "Bandung Headquarters",
                    },
                    {
                      "@type": "PostalAddress",
                      streetAddress:
                        "Royal Spring Residence, Blok Platinum No.10",
                      addressLocality: "Jakarta",
                      postalCode: "12540",
                      addressCountry: "ID",
                      name: "Jakarta Office",
                    },
                  ],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+62-8119409188",
                      contactType: "sales",
                      email: "wisnu@bicarapintar.ai",
                      availableLanguage: ["English", "Indonesian"],
                      areaServed: "ID",
                    },
                    {
                      "@type": "ContactPoint",
                      telephone: "+62-8112257586",
                      contactType: "technical support",
                      email: "gaffy@bicarapintar.ai",
                      availableLanguage: ["English", "Indonesian"],
                      areaServed: "ID",
                    },
                  ],
                  sameAs: [
                    "https://linkedin.com/company/bicarapintar",
                    "https://twitter.com/bicarapintar",
                  ],
                  industry: "Enterprise AI Solutions",
                  knowsAbout: [
                    "Artificial Intelligence",
                    "Enterprise Communication",
                    "Customer Service Automation",
                    "Voice AI Technology",
                    "WhatsApp Business API",
                    "Omnichannel Customer Experience",
                  ],
                  serviceArea: {
                    "@type": "Country",
                    name: "Indonesia",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bicarapintar.ai/#website",
                  url: "https://bicarapintar.ai",
                  name: "BicaraPintar - Enterprise AI Communication Platform",
                  description:
                    "Enterprise AI communication platform with proven implementation across healthcare, transportation, and IoT sectors",
                  publisher: {
                    "@id": "https://bicarapintar.ai/#organization",
                  },
                  inLanguage: "en-US",
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          "https://bicarapintar.ai/search?q={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://bicarapintar.ai/#software",
                  name: "BicaraPintar AI Platform",
                  description:
                    "Enterprise-grade AI communication platform for omnichannel customer experience",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web-based",
                  offers: {
                    "@type": "Offer",
                    price: "Contact for pricing",
                    priceCurrency: "IDR",
                    availability: "InStock",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    ratingCount: "15",
                    bestRating: "5",
                  },
                  featureList: [
                    "AI-powered customer communication",
                    "WhatsApp Business API integration",
                    "Voice AI capabilities",
                    "Omnichannel support",
                    "Enterprise system integration",
                    "Real-time analytics",
                    "Multi-language support",
                  ],
                  screenshot: "https://bicarapintar.ai/platform-screenshot.jpg",
                },
              ],
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />

        {/* Business/Local SEO */}
        <meta
          name="business:contact_data:street_address"
          content="Jl. Simponi No.21, Turangga"
        />
        <meta name="business:contact_data:locality" content="Bandung" />
        <meta name="business:contact_data:region" content="West Java" />
        <meta name="business:contact_data:postal_code" content="40264" />
        <meta name="business:contact_data:country_name" content="Indonesia" />
      </head>
      <body className="bg-void-black font-sans text-arctic-white antialiased">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:top-4 focus:left-4 z-50 focus:absolute bg-royal-purple px-4 py-2 rounded text-arctic-white"
        >
          Skip to main content
        </a>

        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
