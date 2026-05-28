import RotatingText from "./RotatingText";

export default function HeroSection() {
  return (
    <section
      className="bg-[#0A0A0A] pt-20 pb-16 relative overflow-hidden"
      aria-label="Contact Hero Section"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10 text-center">

        <header>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Let’s Build & Solve Your{" "}
            <span className="text-primary">DevOps Challenges</span>
          </h1>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Connect with our DevOps engineers for cloud architecture, CI/CD automation,
            infrastructure scaling, and enterprise-grade solutions tailored for your business.
          </p>
        </header>

        <div className="mt-8">
          <RotatingText />
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#contact-form"
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition font-medium"
          >
            Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}