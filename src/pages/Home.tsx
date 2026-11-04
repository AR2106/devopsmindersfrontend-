import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection";
import ClientsSection from "../components/home/ClientsSection";
import { FAQSection } from "../components/home/FAQSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { WhyUsSection } from "../components/home/WhyUsSection";
import { faqs } from "../constants/faqs";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          DevOps Minders | IT Solutions, AI Development &amp; Cloud Solutions
        </title>
        <meta
          name="description"
          content="DevOps Minders is an IT solutions company delivering custom AI development, enterprise cloud solutions, software engineering, and DevOps consulting."
        />

        {/* Primary Target Keywords */}
        <meta
          name="keywords"
          content="DevOps Minders, DevOps Minders IT Solutions, DevOps Minders AI Development, DevOps Minders Cloud Solutions, DevOps Minders DevOps Consulting, IT Solutions Company, AI Development Company, Cloud Solutions, DevOps Consulting"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.devopsminders.com/" />

        {/* Open Graph / Facebook Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevOps Minders" />
        <meta property="og:url" content="https://www.devopsminders.com/" />
        <meta
          property="og:title"
          content="DevOps Minders | IT Solutions, AI Development &amp; Cloud Solutions"
        />
        <meta
          property="og:description"
          content="DevOps Minders delivers custom IT solutions, AI development, AWS and Azure cloud solutions, and enterprise DevOps consulting."
        />
        <meta
          property="og:image"
          content="https://www.devopsminders.com/assets/og-image.png"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devopsminders" />
        <meta name="twitter:url" content="https://www.devopsminders.com/" />
        <meta
          name="twitter:title"
          content="DevOps Minders | IT Solutions, AI Development &amp; Cloud Solutions"
        />
        <meta
          name="twitter:description"
          content="DevOps Minders delivers custom IT solutions, AI development, AWS and Azure cloud solutions, and enterprise DevOps consulting."
        />
        <meta
          name="twitter:image"
          content="https://www.devopsminders.com/assets/og-image.png"
        />

        {/* Structured Data: FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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