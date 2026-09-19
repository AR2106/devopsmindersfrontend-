import { Helmet } from "react-helmet-async";
import ContactForm from "../components/contact/contactForm";
import HeroSection from "../components/contact/HeroSection";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact DevOpsMinders | Get in Touch</title>

        <meta
          name="description"
          content="Contact DevOpsMinders for DevOps consulting, cloud migration, Kubernetes, AI automation, software development, and infrastructure solutions."
        />

        <meta
          name="keywords"
          content="Contact DevOpsMinders, DevOps Consulting, AI Automation, Cloud Services, Kubernetes"
        />

        <link
          rel="canonical"
          href="https://www.devopsminders.com/contact"
        />

        <meta
          property="og:title"
          content="Contact DevOpsMinders"
        />

        <meta
          property="og:description"
          content="Get in touch with DevOpsMinders to discuss your cloud, DevOps, AI, and software development requirements."
        />

        <meta
          property="og:url"
          content="https://www.devopsminders.com/contact"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <ContactForm />
    </>
  );
}