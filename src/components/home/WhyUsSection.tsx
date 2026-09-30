import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Cloud,
  Code2,
  GraduationCap,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  BrainCircuit, // Added for AI
} from "lucide-react";
import { motion } from "framer-motion";

export function WhyUsSection() {
  // UPDATED: AI First
  const benefits = [
    {
      icon: BrainCircuit,
      title: "AI Automation & Agents",
      description:
        "Custom AI agents, LLM applications, and intelligent business workflow automation.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Security",
      description:
        "Secure infrastructure, applications, cloud environments, and business systems.",
    },
    {
      icon: Cloud,
      title: "Scalable Cloud Infrastructure",
      description:
        "Flexible cloud architecture designed for performance, reliability, and business growth.",
    },
    {
      icon: ServerCog,
      title: "24/7 IT & MLOps Support",
      description:
        "Reliable technical support for AI models, infrastructure, applications, and cloud systems.",
    },
  ];

  // UPDATED: AI First
  const servicePillars = [
    {
      number: "01",
      icon: BrainCircuit,
      title: "AI & IT Solutions",
      description:
        "AI development, intelligent automation, modern IT infrastructure, cloud services, and consulting.",
    },
    {
      number: "02",
      icon: Code2,
      title: "Software Development",
      description:
        "Scalable websites, web applications, APIs, business software, and custom digital solutions.",
    },
    {
      number: "03",
      icon: GraduationCap,
      title: "IT Training",
      description:
        "Practical training in AI, cloud computing, software development, automation, and modern technologies.",
    },
  ];

  // UPDATED: AI Keywords First
  const keywords = [
    "AI Development",
    "AI Agents",
    "Intelligent Automation",
    "Cloud Computing",
    "LLM Applications",
    "Cloud Infrastructure",
    "CI/CD Automation",
    "Cybersecurity",
    "MLOps",
  ];

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative w-full overflow-hidden bg-white py-12 md:py-4"
    >
      {/* =========================================================
                BACKGROUND
            ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Subtle gray glows for depth on white */}
        <div className="absolute left-[-220px] top-[8%] h-[520px] w-[520px] rounded-full bg-slate-100/50 blur-[160px]" />
        <div className="absolute right-[-220px] bottom-[5%] h-[520px] w-[520px] rounded-full bg-slate-100/50 blur-[170px]" />

        {/* Technical grid - Dark gray lines */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Center subtle red glow */}
        <div className="absolute left-1/2 top-[42%] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#E80112]/[0.02] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto 2xxl:max-w-7xl px-6 md:px-10 lg:px-14">
        {/* =========================================================
                    INTRO
                ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E80112]/20 bg-[#E80112]/[0.05] px-4 py-2">
            <Sparkles className="h-4 w-4 text-[#E80112]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E80E80112]">
              Why Choose Us
            </span>
          </div>

          {/* H2 UPDATED: AI First */}
          <h2
            id="why-us-heading"
            className="text-4xl font-bold leading-[1.06] tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
          >
            AI & Technology That Helps
            <span className="block">
              Your Business{" "}
              <span className="text-[#E80112]">Move Forward.</span>
            </span>
          </h2>

          {/* Text UPDATED: AI First */}
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            DevOps Minders delivers{" "}
            <span className="font-medium text-slate-900">
              AI development, intelligent automation, cloud infrastructure,
              software development, and technology training
            </span>{" "}
            for startups, growing businesses, and enterprises across India.
          </p>
        </motion.div>

        {/* =========================================================
                    MAIN GRID
                ========================================================== */}

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* =====================================================
                        LEFT — WHY CHOOSE US
                    ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-lg sm:p-8 md:p-10"
          >
            {/* Subtle top border glow */}
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#E80112]/50 to-transparent" />

            {/* Ambient glow */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#E80112]/[0.05] blur-[100px]" />

            <div className="relative">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E80112]/20 bg-[#E80112]/[0.08]">
                  <CheckCircle2 className="h-5 w-5 text-[#E80112]" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E80112]">
                    Built For Business
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    Why Choose Us?
                  </h3>
                </div>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                We combine AI expertise, modern infrastructure, automation, and
                practical business understanding to build technology solutions
                that are secure, scalable, and easier to manage.
              </p>

              {/* Benefits */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -4 }}
                      className="group/card relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-[#E80112] hover:shadow-md"
                    >
                      {/* Hover line */}
                      <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-[#E80112] transition-transform duration-300 group-hover/card:scale-y-100" />

                      <div className="relative">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E80112]/[0.08]">
                            <Icon className="h-5 w-5 text-[#E80112]" />
                          </div>

                          <Check className="h-4 w-4 text-slate-300 transition-colors group-hover/card:text-[#E80112]" />
                        </div>

                        <h4 className="text-sm font-semibold text-slate-900 md:text-base">
                          {benefit.title}
                        </h4>

                        <p className="mt-2 text-xs leading-6 text%5Bslate-500 md:text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Trust indicators - UPDATED */}
              <div className="mt-8 grid grid-cols-3 border-t border-slate-200 pt-6">
                {[
                  "AI-Powered Solutions",
                  "Scalable Cloud",
                  "Business Focused",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2 ${
                      index !== 0 ? "justify-center" : ""
                    }`}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E80112] shadow-[0_0_10px_#E80112]" />

                    <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =====================================================
                        RIGHT — SERVICES
                    ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-lg sm:p-8 md:p-10"
          >
            {/* Red architectural accent */}
            <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#E80112] to-transparent" />

            {/* Subtle red glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#E80112]/[0.05] blur-[120px]" />

            {/* Technical grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.018]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative">
              {/* Header */}
              <div className="mb-8 flex items-start justify-between gap-5">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E80112] shadow-[0_0_10px_#E80112]" />

                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      What We Do
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    AI & Technology{" "}
                    <span className="text-slate-400">That Works.</span>
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                    From AI development and intelligent automation to cloud
                    infrastructure and professional IT training, we help
                    businesses build and operate better technology.
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 sm:flex">
                  <Workflow className="h-5 w-5 text-[#E80112]" />
                </div>
              </div>

              {/* Service cards */}
              <div className="space-y-3">
                {servicePillars.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.number}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.1,
                      }}
                      whileHover={{
                        x: 4,
                      }}
                      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:border-[#E80112] hover:shadow-md sm:p-5"
                    >
                      {/* Active red indicator */}
                      <div className="absolute left-0 top-1/2 h-8 w-[2px] -translate-y-1/2 scale-y-0 bg-[#E80112] transition-transform duration-300 group-hover:scale-y-100" />

                      {/* Number */}
                      <div className="hidden w-7 shrink-0 font-mono text-[10px] font-bold tracking-widest text-slate-300 sm:block">
                        {service.number}
                      </div>

                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-[#E80112] group-hover:bg-[#E80112]/[0.08]">
                        <Icon className="h-5 w-5 text-slate-600 transition-colors duration-300 group-hover:text-[#E80112]" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-slate-900 sm:text-base">
                          {service.title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                          {service.description}
                        </p>
                      </div>

                      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E80112]" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom system-style information - UPDATED */}
              <div className="mt-8 border-t border-slate-200 pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">
                    Core Capabilities
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-[#E80112]/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E80112]" />
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                    <p className="text-sm font-bold text-slate-900">AI</p>

                    <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-500">
                      Solutions
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                    <p className="text-sm font-bold text-slate-900">Cloud</p>

                    <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-500">
                      Infrastructure
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                    <p className="text-sm font-bold text-slate-900">DevOps</p>

                    <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-500">
                      Automation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
                    SERVICE KEYWORDS
                ========================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 md:px-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center">
            {keywords.map((keyword, index) => (
              <div key={keyword} className="flex items-center gap-5">
                <span className="text-xs font-medium text-slate-500 transition-colors hover:text-slate-900 md:text-sm">
                  {keyword}
                </span>

                {index !== keywords.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-[#E80112]/50" />
                )}
              </div>
            ))}``
          </div>
        </motion.div>

        {/* =========================================================
                    BOTTOM STATEMENT
                ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E80112]/15 bg-[#E80112]/[0.06]">
              <Code2 className="h-4 w-4 text-[#E80112]" />
            </div>

            <p className="text-sm text-slate-600">
              AI & Technology built around your business goals.
            </p>
          </div>

          <motion.div
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-sm font-semibold text-slate-900"
          >
            <span>Build. Automate. Scale.</span>

            <ArrowUpRight className="h-4 w-4 text-[#E80112]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
