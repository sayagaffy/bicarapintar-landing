import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, string | number | boolean | object>;
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "BicaraPintar - Enterprise AI Communication Platform | Proven Implementation Indonesia",
  description = "Transform customer experiences with BicaraPintar's enterprise AI communication platform. Proven track record with 15+ successful implementations across healthcare, transportation, and IoT sectors in Indonesia.",
  keywords = [
    "AI Communication Platform Indonesia",
    "Enterprise AI Solutions",
    "Conversational AI Indonesia",
    "AI Customer Service Platform",
    "Enterprise Automation Indonesia",
  ],
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonicalUrl,
  structuredData,
  noIndex = false,
}) => {
  const keywordsString = keywords.join(", ");
  const fullCanonicalUrl = canonicalUrl
    ? `https://bicarapintar.ai${canonicalUrl}`
    : "https://bicarapintar.ai";

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Robots */}
      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />
      <meta
        name="googlebot"
        content={
          noIndex
            ? "noindex,nofollow"
            : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        }
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://bicarapintar.ai${ogImage}`} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="BicaraPintar" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={`https://bicarapintar.ai${ogImage}`}
      />
      <meta property="twitter:creator" content="@bicarapintar" />
      <meta property="twitter:site" content="@bicarapintar" />

      {/* Additional Meta Tags */}
      <meta name="author" content="PT Bicara Pintar Indonesia" />
      <meta name="publisher" content="PT Bicara Pintar Indonesia" />
      <meta name="copyright" content="© 2025 PT Bicara Pintar Indonesia" />
      <meta name="language" content="EN" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="ID" />
      <meta name="geo.placename" content="Indonesia" />
      <meta name="geo.position" content="-6.2088;106.8456" />
      <meta name="ICBM" content="-6.2088, 106.8456" />

      {/* Business Meta Tags */}
      <meta
        name="business:contact_data:street_address"
        content="Jl. Simponi No.21, Turangga"
      />
      <meta name="business:contact_data:locality" content="Bandung" />
      <meta name="business:contact_data:region" content="West Java" />
      <meta name="business:contact_data:postal_code" content="40264" />
      <meta name="business:contact_data:country_name" content="Indonesia" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
};
