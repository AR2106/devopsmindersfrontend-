import { motion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  Cloud,
  Code2,
  Container,
  GitBranch,
  Layers3,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import RotatingText from "./RotatingText";

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "AWS & Azure cloud architecture, migration and optimization",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "Automated delivery pipelines and infrastructure workflows",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "AI-powered workflows, ML solutions and intelligent automation",
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps",
    description: "Security-focused infrastructure and deployment practices",
  },
];

const technologies = [
  "AWS",
  "Azure",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Jenkins",
  "GitHub Actions",
  "AI Automation",
  "Machine Learning",
  "DevSecOps",
];

export default function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-white pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28"
      aria-labelledby="contact-hero-title"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main atmospheric glow - Subtle Red */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.65, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#E80112]/[0.03] blur-[150px] sm:h-[550px] sm:w-[550px]"
        />

        {/* Top right glow - Gray */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-slate-100/50 blur-[140px]"
        />

        {/* Bottom left glow - Gray */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-56 -left-48 h-[500px] w-[500px] rounded-full bg-slate-100/50 blur-[140px]"
        />

        {/* Technical grid - Dark gray lines */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "54px 54px",
          }}
        />

        {/* Vertical center beam - Subtle */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

        {/* Horizontal center beam - Subtle */}
        <div className="absolute left-0 top-[48%] h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* =========================================================
          FLOATING TECH ELEMENTS
      ========================================================= */}

      <motion.div
        animate={{
          y: [0, -14, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[6%] top-[25%] hidden lg:block"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
          <Cloud className="h-5 w-5 text-[#E80112]/70" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 16, 0],
          rotate: [0, -2, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[7%] top-[30%] hidden lg:block"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
          <Container className="h-5 w-5 text-[#E80112]/70" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[22%] left-[12%] hidden xl:block"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white">
          <Code2 className="h-4 w-4 text-[#E80112]/60" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 13, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[20%] right-[12%] hidden xl:block"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white">
          <Workflow className="h-4 w-4 text-[#E80112]/60" />
        </div>
      </motion.div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex justify-center"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E80112]/20 bg-[#E80112]/[0.05] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E80112]/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E80112]" />
              </span>

              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-600 sm:text-xs">
                DevOps · AI · Cloud · Software Engineering
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              H1
          ===================================================== */}
          <motion.header
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: "easeOut",
            }}
          >
            <h1
              id="contact-hero-title"
              className="mx-auto max-w-5xl text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Let&apos;s Build &amp; Solve Your{" "}
              <span className="relative text-[#E80112]">
                DevOps Challenges
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
              DevOps Minders is a software and technology company delivering
              cloud solutions, DevOps consulting, AI development, automation,
              and scalable software solutions for modern businesses in
              Ludhiana, Punjab and across India.
            </p>
          </motion.header>

          {/* =====================================================
              ROTATING EXPERTISE
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mx-auto mt-8 flex min-h-[44px] items-center justify-center"
          >
            <RotatingText />
          </motion.div>

          {/* =====================================================
              CAPABILITY SIGNALS
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.65 }}
            className="mx-auto mt-9 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {capabilities.map(
              ({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.08,
                    duration: 0.5,
                  }}
                  className="group rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:border-[#E80112] hover:shadow-md"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-[#E80112]/20 bg-[#E80112]/[0.08]">
                    <Icon className="h-4 w-4 text-[#E80112]" />
                  </div>

                  <h2 className="text-sm font-semibold text-slate-900">
                    {title}
                  </h2>

                  <p className="mt-1.5 text-[11px] leading-5 text-slate-600">
                    {description}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>

          {/* =====================================================
              TECHNOLOGY SIGNAL / ANIMATED DATA STREAM
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-slate-50 py-4"
          >
            {/* Moving glow */}
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#E80112]/70 to-transparent"
            />

            <div className="flex items-center justify-center gap-3 px-5">
              <Layers3 className="h-4 w-4 shrink-0 text-[#E80112]/70" />

              <div className="overflow-hidden">
                <motion.div
                  animate={{
                    x: [0, -260],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex w-max items-center gap-7 whitespace-nowrap"
                >
                  {[...technologies, ...technologies].map(
                    (technology, index) => (
                      <div
                        key={`${technology}-${index}`}
                        className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-600 sm:text-xs"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#E80112]/50" />
                        {technology}
                      </div>
                    )
                  )}
                </motion.div>
              </div>

              <Sparkles className="h-4 w-4 shrink-0 text-[#E80112]/50" />
            </div>
          </motion.div>

          {/* =====================================================
              SEO SUPPORTING CONTENT
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              {[
                "AI Development",
                "AI Automation",
                "AWS Cloud Migration",
                "Azure Cloud Solutions",
                "Kubernetes Consulting",
                "CI/CD Pipeline Automation",
                "Web Development",
                "Software Development",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-slate-600"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#E80112]/60" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              BRAND / LOCATION SIGNAL
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="mt-12 border-t border-slate-200 pt-6"
          >
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
              <span className="text-xs font-semibold tracking-wide text-slate-700">
                DevOps Minders
              </span>

              <span className="hidden text-slate-300 sm:block">•</span>

              <span className="text-xs text-slate-600">
                AI &amp; Cloud Solutions
              </span>

              <span className="hidden text-slate-300 sm:block">•</span>

              <span className="text-xs text-slate-600">
                Ludhiana, Punjab · Serving Businesses Across India
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}