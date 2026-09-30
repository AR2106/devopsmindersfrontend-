import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection";
import ClientsSection from "../components/home/ClientsSection";
import { FAQSection } from "../components/home/FAQSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { WhyUsSection } from "../components/home/WhyUsSection";

export default function Home() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags - SEO Team Exact Copy */}
        <title>
          AI Development & Automation Company | DevOps Minders AI & Cloud
          Solution
        </title>
        <meta
          name="description"
          content="DevOps Minders AI & Cloud Solution builds AI-powered applications, intelligent automation systems and scalable digital solutions for businesses, supported by cloud and DevOps expertise."
        />

        {/* Keywords - Ludhiana Local SEO */}
        <meta
          name="keywords"
          content="IT Company in Ludhiana, Software Development Company in Ludhiana, AI Development Company in Ludhiana, AI Automation Company in Ludhiana, DevOps Company in Ludhiana, Cloud Solutions Company in Ludhiana, AI/ML Company in Ludhiana, Custom Software Development Company in Ludhiana, AI Solutions Company in Ludhiana, DevOps and Cloud Company in Ludhiana, DevOps Minders, DevOps Minders AI & Cloud Solution"
        />

        {/* Canonical Tag - YEH RAHNA ZAROORI HAI Homepage ke liye */}
        <link rel="canonical" href="https://www.devopsminders.com/" />

        {/* Open Graph / Facebook Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.devopsminders.com/" />
        <meta
          property="og:title"
          content="AI Development & Automation Company | DevOps Minders AI & Cloud Solution"
        />
        <meta
          property="og:description"
          content="DevOps Minders AI & Cloud Solution builds AI-powered applications, intelligent automation systems and scalable digital solutions for businesses, supported by cloud and DevOps expertise."
        />
        <meta
          property="og:image"
          content="https://www.devopsminders.com/assets/og-image.png"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.devopsminders.com/" />
        <meta
          name="twitter:title"
          content="AI Development & Automation Company | DevOps Minders AI & Cloud Solution"
        />
        <meta
          name="twitter:description"
          content="DevOps Minders AI & Cloud Solution builds AI-powered applications, intelligent automation systems and scalable digital solutions for businesses, supported by cloud and DevOps expertise."
        />
        <meta
          name="twitter:image"
          content="https://www.devopsminders.com/assets/og-image.png"
        />
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