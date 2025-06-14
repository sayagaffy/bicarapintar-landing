// Schema markup templates for different sections

export const organizationSchema = {
  "@context": "https://schema.org",
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
  industry: "Enterprise AI Solutions",
  numberOfEmployees: "11-50",
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
      streetAddress: "Royal Spring Residence, Blok Platinum No.10",
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
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://bicarapintar.ai/#software",
  name: "BicaraPintar AI Platform",
  description:
    "Enterprise-grade AI communication platform for omnichannel customer experience with proven implementation track record",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Customer Communication",
  operatingSystem: "Web-based",
  softwareVersion: "2.0",
  datePublished: "2023-01-01",
  dateModified: "2025-01-01",
  author: {
    "@id": "https://bicarapintar.ai/#organization",
  },
  publisher: {
    "@id": "https://bicarapintar.ai/#organization",
  },
  offers: {
    "@type": "Offer",
    description: "Enterprise AI Communication Solutions",
    price: "Contact for pricing",
    priceCurrency: "IDR",
    availability: "InStock",
    validFrom: "2023-01-01",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "15",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "AI-powered customer communication",
    "WhatsApp Business API integration",
    "Voice AI capabilities with emotion detection",
    "Omnichannel support across multiple platforms",
    "Enterprise system integration (CRM, ERP)",
    "Real-time analytics and reporting",
    "Multi-language support (30+ languages)",
    "Agentic workflows and automation",
    "Custom AI development services",
  ],
  screenshot: "https://bicarapintar.ai/platform-screenshot.jpg",
  installUrl: "https://bicarapintar.ai/contact",
  downloadUrl: "https://bicarapintar.ai/contact",
};

export const serviceSchema = (
  serviceType: "BicaraChat" | "BicaraVoice" | "Custom AI"
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceType,
  description: getServiceDescription(serviceType),
  provider: {
    "@id": "https://bicarapintar.ai/#organization",
  },
  serviceType: "AI Communication Service",
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${serviceType} Service Catalog`,
    itemListElement: getServiceFeatures(serviceType),
  },
});

function getServiceDescription(serviceType: string): string {
  switch (serviceType) {
    case "BicaraChat":
      return "AI-powered conversational platform with smart Q&A, multi-language support, and agentic workflows for enterprise customer communication.";
    case "BicaraVoice":
      return "Advanced voice AI solution with speech recognition, natural text-to-speech, emotion detection, and smart IVR capabilities.";
    case "Custom AI":
      return "Tailored AI solutions for specific business needs across healthcare, transportation, and IoT monitoring sectors.";
    default:
      return "Enterprise AI communication service";
  }
}

function getServiceFeatures(serviceType: string): Array<{
  "@type": string;
  itemOffered: {
    "@type": string;
    name: string;
  };
  position: number;
}> {
  const features: Record<string, string[]> = {
    BicaraChat: [
      "Smart Q&A with RAG lookup",
      "Multi-language support (30+ languages)",
      "Rich media interactions",
      "Agentic workflows",
      "Seamless agent handoff",
    ],
    BicaraVoice: [
      "Accurate speech-to-text",
      "Natural text-to-speech",
      "Voice cloning capabilities",
      "Emotion detection",
      "Smart IVR routing",
    ],
    "Custom AI": [
      "Healthcare patient flow optimization",
      "Transportation booking automation",
      "IoT monitoring and analytics",
      "GPS fatigue detection",
      "Predictive maintenance systems",
    ],
  };

  return (
    features[serviceType]?.map((feature, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: feature,
      },
      position: index + 1,
    })) || []
  );
}

export const faqSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@id": "https://bicarapintar.ai/#software",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  name: "Excellent AI Communication Platform",
  author: {
    "@type": "Person",
    name: "Healthcare IT Director",
  },
  reviewBody:
    "BicaraPintar reduced our appointment booking time by 75% while maintaining high patient satisfaction. The integration with our HIS was seamless.",
  publisher: {
    "@id": "https://bicarapintar.ai/#organization",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bicarapintar.ai/#localbusiness",
  name: "PT Bicara Pintar Indonesia",
  image: "https://bicarapintar.ai/office-bandung.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Simponi No.21, Turangga",
    addressLocality: "Bandung",
    addressRegion: "West Java",
    postalCode: "40264",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.9175,
    longitude: 107.6191,
  },
  telephone: "+62-8119409188",
  email: "wisnu@bicarapintar.ai",
  url: "https://bicarapintar.ai",
  openingHours: "Mo-Fr 09:00-17:00",
  priceRange: "Contact for pricing",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
};
