import { ServiceCard } from "../../components/home/ServiceCard";
import { services } from "../../constants/services";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  GitBranch,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// TEXT UPDATED: AI First priority
const capabilities = [
  {
    icon: Cloud, // Kept existing icon
    title: "Cloud Solutions & Migration",
    text: "AWS, Azure, and GCP cloud solutions, secure infrastructure migration, and high-availability architecture for growing business workloads.",
  },
  {
    icon: Workflow,
    title: "DevOps Consulting & CI/CD",
    text: "Enterprise DevOps consulting, CI/CD automation, and GitOps workflows that make software delivery fast, secure, and predictable.",
  },
  {
    icon: ShieldCheck,
    title: "Security & DevSecOps",
    text: "Automated security compliance, vulnerability scanning, and operational governance built directly into engineering pipelines.",
  },
  {
    icon: Activity,
    title: "Production Visibility & Uptime",
    text: "Kubernetes orchestration, Infrastructure as Code, and 24/7 observability that maintain 99.99% system reliability.",
  },
];

const process = [
  {
    icon: Layers3,
    title: "Understand",
    text: "We begin with your product, infrastructure, technical constraints, and business priorities.",
  },
  {
    icon: Code2,
    title: "Design",
    text: "We shape an architecture around your actual workload instead of forcing a predefined stack.",
  },
  {
    icon: GitBranch,
    title: "Build",
    text: "Applications, infrastructure, integrations, and deployment workflows are implemented for long-term maintainability.",
  },
  {
    icon: Activity,
    title: "Improve",
    text: "After launch, we focus on reliability, visibility, security, performance, and continuous improvement.",
  },
];

// ORDER UPDATED: AI & Application moved to TOP
const technologyGroups = [
  {
    title: "AI & Applications",
    description:
      "Intelligent AI solutions, LLMs, RAG applications, and modern software engineering tailored for business automation.",
    technologies: ["OpenAI", "LangChain", "React", "Next.js", "Node.js", "Python"],
  },
  {
    title: "Cloud",
    description:
      "Cloud environments designed around scalability, security, application requirements, and operational efficiency.",
    technologies: ["AWS", "Azure", "Google Cloud"],
  },
  {
    title: "Infrastructure",
    description:
      "Infrastructure managed consistently through automation so environments remain predictable as systems grow.",
    technologies: ["Kubernetes", "Docker", "Terraform", "Linux"],
  },
  {
    title: "Delivery",
    description:
      "Development and release workflows connected through automated testing, integration, and deployment.",
    technologies: ["GitHub Actions", "GitLab CI", "Jenkins"],
  },
];

const outcomes = [
  "AI solutions that automate workflows and reduce manual effort",
  "Infrastructure that is easier to understand and maintain",
  "More consistent development and deployment workflows",
  "Better visibility into production systems",
  "Cloud environments that can adapt as workloads grow",
  "Security considered throughout the engineering process",
  "A technical foundation that supports future product changes",
];

const Service = () => {
  return (
    <>
      <Helmet>
        {/* SEO Tags: IT Solutions, Cloud & DevOps */}
        <title>
          DevOps Minders IT Solutions | Cloud Solutions &amp; DevOps Consulting
        </title>

        <meta
          name="description"
          content="DevOps Minders provides enterprise IT solutions, AWS and Azure cloud solutions, Kubernetes orchestration, CI/CD automation, and expert DevOps consulting."
        />

        <meta
          name="keywords"
          content="DevOps Minders IT Solutions, DevOps Minders Cloud Solutions, DevOps Minders DevOps Consulting, IT Solutions Company, Cloud Solutions Company, DevOps Consulting Company, DevOps Minders"
        />

        <link rel="canonical" href="https://www.devopsminders.com/services" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevOps Minders" />
        <meta property="og:title" content="DevOps Minders IT Solutions | Cloud Solutions &amp; DevOps Consulting" />
        <meta
          property="og:description"
          content="DevOps Minders provides enterprise IT solutions, AWS and Azure cloud solutions, Kubernetes orchestration, CI/CD automation, and expert DevOps consulting."
        />
        <meta
          property="og:url"
          content="https://www.devopsminders.com/services"
        />
        <meta
          property="og:image"
          content="https://www.devopsminders.com/assets/og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devopsminders" />
        <meta name="twitter:title" content="DevOps Minders IT Solutions | Cloud Solutions &amp; DevOps Consulting" />
        <meta
          name="twitter:description"
          content="DevOps Minders provides enterprise IT solutions, AWS and Azure cloud solutions, Kubernetes orchestration, CI/CD automation, and expert DevOps consulting."
        />
        <meta
          name="twitter:image"
          content="https://www.devopsminders.com/assets/og-image.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "IT Solutions, Cloud Solutions & DevOps Consulting",
            "provider": {
              "@type": "Organization",
              "name": "DevOps Minders",
              "url": "https://www.devopsminders.com"
            },
            "areaServed": "Global",
            "description": "DevOps Minders delivers enterprise IT solutions, cloud migration, Kubernetes orchestration, CI/CD automation, and expert DevOps consulting."
          })}
        </script>
      </Helmet>
      <main
        id="services"
        className="relative overflow-hidden bg-white text-slate-900"
      >
        {/* =========================================================
GLOBAL BACKGROUND
========================================================== */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-260px] h-[560px] w-[720px] -translate-x-1/2 rounded-full bg-slate-100/50 blur-[170px]" />
          <div className="absolute right-[-260px] top-[38%] h-[500px] w-[500px] rounded-full bg-[#E80112]/[0.02] blur-[160px]" />
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `
          linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
              backgroundSize: "72px 72px",
            }}
          />
        </div>
        {/* =========================================================
      HERO
  ========================================================== */}
        <section className="relative overflow-hidden pb-[10px] pt-20 sm:pb-[10px] sm:pt-24 lg:pb-10 lg:pt-14">
          <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 sm:px-5 md:px-6">
            <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
              {/* Hero copy */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#E80112]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E80112]">
                    DevOps Minders IT Solutions &amp; Consulting
                  </span>
                </div>

                {/* H1 */}
                <h1 className="max-w-3xl text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-[3.75rem] xl:text-[4.15rem]">
                  Cloud Solutions, DevOps Consulting &amp;
                  <span className="text-[#E80112]">
                    {" "}
                    Enterprise IT.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                  DevOps Minders helps businesses build, modernize, and operate
                  the technology behind their mission-critical products. We provide
                  comprehensive IT solutions, AWS/Azure cloud solutions, AI development,
                  and expert DevOps consulting to solve complex technical challenges.
                </p>

                {/* Bullets UPDATED: AI First */}
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 text-xs text-slate-500">
                  {[
                    "AI & Automation",
                    "Cloud & infrastructure",
                    "Software engineering",
                    "DevOps & MLOps",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[#E80112]" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative hidden lg:mt-8 lg:block"
              >
                <img
                  src="/assets/services-hero.webp"
                  alt="AI Development and Cloud Infrastructure Services"
                  loading="lazy"
                  decoding="async"
                  className="relative mx-auto h-auto max-h-[420px] w-full max-w-md object-contain"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* ==============================CAPABILITIES=============================== */}
        <section className="relative py-[10px]">
          <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-5 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        backgroundColor: "rgba(248, 250, 252, 1)",
                      }}
                      className={`group p-5 transition-colors duration-300 sm:p-6 lg:p-7 ${
                        index !== capabilities.length - 1
                          ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                          : ""
                      }`}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#E80112] transition-all duration-300 group-hover:border-[#E80112]/25 group-hover:bg-[#E80112]/[0.05]">
                        <Icon size={17} strokeWidth={1.6} />
                      </div>

                      <h2 className="mt-4 text-sm font-semibold text-slate-900">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-[13px] leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
        {/* =========================================================
      SERVICES
  ========================================================== */}
        <section
          aria-labelledby="services-list-heading"
          className="relative py-14"
        >
          <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-5 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mb-8 max-w-2xl"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Our services
              </p>

              <h2
                id="services-list-heading"
                className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
              >
                Engineering work built around
                <span className="text-[#E80112]"> real business needs.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                From AI development and intelligent automation to cloud
                infrastructure and DevOps, we combine the capabilities needed
                to move a product forward.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
            >
              {services?.map((service, index) => (
                <motion.article
                  key={service.title || index}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="group relative h-full"
                >
                  <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-500 group-hover:border-[#E80112] group-hover:shadow-lg">
                    <div className="h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#E80112]/80 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                    />
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
        {/* =========================================================
      PROCESS
  ========================================================== */}
        <section
          aria-labelledby="process-heading"
          className="relative overflow-hidden border-y border-slate-200 bg-white py-14"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100 blur-[150px]" />

          <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 sm:px-5 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 xl:gap-24">
              {/* Process intro */}
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className="lg:sticky lg:top-24"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#E80112]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E80112]">
                    How we work
                  </span>
                </div>

                <h2
                  id="process-heading"
                  className="max-w-md text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl"
                >
                  A process that stays
                  <span className="text-[#E80112]">
                    {" "}
                    close to the real problem.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-7">
                  Good engineering starts with understanding the problem. We
                  keep the process practical, collaborative, and focused on what
                  needs to work in production.
                </p>
              </motion.div>

              {/* Process cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.08 }}
                className="relative"
              >
                <div className="absolute bottom-7 left-[18px] top-7 w-px bg-gradient-to-b from-[#E80112]/35 via-slate-200 to-transparent sm:left-[21px]" />

                <div className="space-y-3">
                  {process?.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.article
                        key={item.title}
                        variants={cardVariants}
                        className="group relative flex gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-[#E80112] hover:bg-slate-50 sm:gap-5 sm:p-5"
                      >
                        <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#E80112] transition-all duration-300 group-hover:border-[#E80112]/30 group-hover:bg-[#E80112]/[0.05]">
                          <Icon size={16} strokeWidth={1.6} />
                        </div>

                        <div className="min-w-0 pt-0.5">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h3 className="text-sm font-semibold text-slate-900 sm:text-[15px]">
                              {item.title}
                            </h3>

                            <span className="text-[10px] uppercase tracking-[0.15em] text-slate-400">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <p className="mt-1.5 max-w-2xl text-[13px] leading-6 text-slate-500 sm:text-sm sm:leading-6">
                            {item.text}
                          </p>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* ==================================TECHNOLO============================== */}
        <section
          aria-labelledby="technology-heading"
          className="relative py-[10px]"
        >
          <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-5 md:px-6">
            <motion.header
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="max-w-2xl"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Technology we work with
              </p>

              <h2
                id="technology-heading"
                className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
              >
                Tools selected for
                <span className="text-[#E80112]"> the job at hand.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                We work across AI platforms, cloud infrastructure, DevOps tooling, and modern
                application frameworks. Technology choices are
                based on the product and operational requirements.
              </p>
            </motion.header>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
              className="mt-9 grid gap-3 md:grid-cols-2"
            >
              {technologyGroups.map((group) => (
                <motion.article
                  key={group.title}
                  variants={cardVariants}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors duration-300 hover:border-slate-300 sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E80112] shadow-[0_0_10px_#E80112]" />

                    <h3 className="text-base font-semibold text-slate-900">
                      {group.title}
                    </h3>
                  </div>

                  <p className="mt-2.5 text-[13px] leading-6 text-slate-600 sm:text-sm">
                    {group.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {group?.technologies?.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] text-slate-500 sm:text-[11px]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
        {/* ================================OUTCOMES==================================== */}
        <section
          aria-labelledby="outcomes-heading"
          className="border-y border-slate-200 bg-white py-10"
        >
          <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-5 md:px-6">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16 xl:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#E80112]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E80112]">
                    What this means
                  </span>
                </div>

                <h2
                  id="outcomes-heading"
                  className="max-w-md text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl"
                >
                  Technology should make
                  <span className="text-[#E80112]">
                    {" "}
                    the business easier to move forward.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-[15px]">
                  The goal is not to add more technology. It is to remove
                  unnecessary friction and give your team a dependable
                  foundation for building, releasing, and operating software.
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.08 }}
                className="grid gap-2.5 sm:grid-cols-2"
              >
                {outcomes.map((item) => (
                  <motion.div
                    key={item}
                    variants={cardVariants}
                    className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-[#E80112] hover:bg-slate-50"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#E80112]">
                      <CheckCircle2 size={14} strokeWidth={1.6} />
                    </div>

                    <p className="text-[13px] leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-800">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        {/* =========================================================
      CLOSING
  ========================================================== */}
        <section className="relative overflow-hidden py-10">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100 blur-[150px]" />
          <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 text-center sm:px-5 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-[#E80112]/20 bg-[#E80112]/[0.05]">
                <BrainCircuit
                  size={18}
                  className="text-[#E80112]"
                  strokeWidth={1.5}
                />
              </div>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                DevOps Minders AI & Cloud Solution
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem]">
                Build AI & Technology that
                <span className="text-[#E80112]"> keeps working.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px] sm:leading-8">
                From AI development and intelligent automation to cloud
                migration and DevOps, we focus on solutions that
                remain useful long after the initial project is complete.
              </p>

              <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Service;