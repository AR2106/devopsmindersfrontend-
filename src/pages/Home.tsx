import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection";
import ClientsSection from "../components/home/ClientsSection";
import { FAQSection } from "../components/home/FAQSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { WhyUsSection } from "../components/home/WhyUsSection";

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevOpsMinders",
    "url": "https://www.devopsminders.com/",
    "logo": "https://www.devopsminders.com/path-to-your-logo.png", // <-- UPDATE THIS with your actual logo URL
    "description": "DevOpsMinders provides AI automation, DevOps consulting, cloud migration, Kubernetes, CI/CD pipelines and cloud infrastructure solutions for businesses.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0199", // <-- UPDATE THIS with your real phone number
      "contactType": "customer service",
    },
    "sameAs": [
      // Add your social media links here
      "https://www.linkedin.com/company/your-company",
      "https://twitter.com/your-handle"
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>DevOpsMinders | AI, DevOps & Cloud Solutions for Business</title>
        <meta
          name="description"
          content="Elevate your business with DevOpsMinders. We provide expert AI automation, DevOps consulting, cloud migration, Kubernetes, and CI/CD pipeline solutions."
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.devopsminders.com/" />

        {/* Open Graph / Facebook Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devopsminders.com/" />
        <meta property="og:title" content="DevOpsMinders | AI, DevOps & Cloud Solutions" />
        <meta property="og:description" content="Elevate your business with DevOpsMinders. We provide expert AI automation, DevOps consulting, cloud migration, Kubernetes, and CI/CD pipeline solutions." />
        <meta property="og:image" content="https://www.devopsminders.com/path-to-your-og-image.jpg" /> {/* <-- UPDATE THIS with a high-quality image for social shares */}

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.devopsminders.com/" />
        <meta name="twitter:title" content="DevOpsMinders | AI, DevOps & Cloud Solutions" />
        <meta name="twitter:description" content="Elevate your business with DevOpsMinders. We provide expert AI automation, DevOps consulting, cloud migration, Kubernetes, and CI/CD pipeline solutions." />
        <meta name="twitter:image" content="https://www.devopsminders.com/path-to-your-og-image.jpg" /> {/* <-- SAME AS og:image */}

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ClientsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}