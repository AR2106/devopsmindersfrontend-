import { Helmet } from "react-helmet-async";
import ContactForm from "../components/contact/contactForm";
import HeroSection from "../components/contact/HeroSection";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact DevOps Minders | IT Solutions &amp; DevOps Consulting</title>

        <meta
          name="description"
          content="Contact DevOps Minders for custom IT solutions, cloud solutions, enterprise DevOps consulting, Kubernetes orchestration, and AI development."
        />

        <meta
          name="keywords"
          content="Contact DevOps Minders, DevOps Minders IT Solutions, DevOps Minders DevOps Consulting, DevOps Minders Cloud Solutions, IT Solutions Company, DevOps Consulting Company"
        />

        <link
          rel="canonical"
          href="https://www.devopsminders.com/contact"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevOps Minders" />
        <meta
          property="og:title"
          content="Contact DevOps Minders | IT Solutions &amp; DevOps Consulting"
        />

        <meta
          property="og:description"
          content="Get in touch with DevOps Minders for custom IT solutions, cloud solutions, AI development, and enterprise DevOps consulting."
        />

        <meta
          property="og:url"
          content="https://www.devopsminders.com/contact"
        />
        <meta
          property="og:image"
          content="https://www.devopsminders.com/assets/og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devopsminders" />
        <meta
          name="twitter:title"
          content="Contact DevOps Minders | IT Solutions &amp; DevOps Consulting"
        />
        <meta
          name="twitter:description"
          content="Get in touch with DevOps Minders for custom IT solutions, cloud solutions, AI development, and enterprise DevOps consulting."
        />
        <meta
          name="twitter:image"
          content="https://www.devopsminders.com/assets/og-image.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact DevOps Minders",
            "description": "Contact DevOps Minders for custom IT solutions, cloud solutions, and enterprise DevOps consulting.",
            "url": "https://www.devopsminders.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "DevOps Minders",
              "telephone": "+91 88727 81496",
              "email": "info@devopsminders.com",
              "url": "https://www.devopsminders.com"
            }
          })}
        </script>
      </Helmet>

      <HeroSection />
      <ContactForm />
    </>
  );
}