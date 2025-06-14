import HeroSection from "@/components/sections/HeroSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TrustedBySection from "@/components/sections/TrustedBySection";
import PlatformFeaturesSection from "@/components/sections/PlatformFeaturesSection";
import IndustryUseCasesSection from "@/components/sections/IndustryUseCasesSection";
import SuccessMetricsSection from "@/components/sections/SuccessMetricsSection";
import ContactSection from "@/components/sections/ContactSection";

// SEO-optimized structured data for the homepage
const homepageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "BicaraPintar - Enterprise AI Communication Platform",
  description:
    "Enterprise AI communication platform with proven implementation track record. 15+ successful implementations across healthcare, transportation, and IoT sectors.",
  url: "https://bicarapintar.ai",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "BicaraPintar AI Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    description:
      "Enterprise-grade AI communication platform for omnichannel customer experience",
    offers: {
      "@type": "Offer",
      description: "Enterprise AI Communication Solutions",
      price: "Contact for pricing",
      priceCurrency: "IDR",
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
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bicarapintar.ai",
      },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-title", ".hero-subtitle", ".value-props"],
  },
};

export default function Home() {
  return (
    <>
      {/* Page-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageStructuredData),
        }}
      />

      <main id="main-content" className="relative">
        <Header />
        <HeroSection />
        <TrustedBySection />
        <PlatformFeaturesSection />
        <IndustryUseCasesSection />
        <SuccessMetricsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
