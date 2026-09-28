import {
  Cloud,
  ShieldCheck,
  Workflow,
  Activity,
  Server,
  Boxes,
  Sparkles,
  GitBranch,
  Code2,
  LockKeyhole,
  Gauge,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const capabilities = [
  {
    title: "DevOps & CI/CD Automation",
    desc: "Reliable delivery pipelines using GitHub Actions, Jenkins, and GitLab CI to automate testing, releases, and infrastructure workflows.",
    icon: Workflow,
  },
  {
    title: "Cloud Infrastructure",
    desc: "Scalable cloud environments across AWS, Azure, and GCP, designed around performance, security, availability, and operational efficiency.",
    icon: Cloud,
  },
  {
    title: "DevSecOps & Cloud Security",
    desc: "Security integrated into development and infrastructure workflows through access controls, vulnerability management, and secure deployment practices.",
    icon: ShieldCheck,
  },
  {
    title: "Monitoring & Reliability",
    desc: "Production monitoring, alerting, observability, and incident-response workflows that provide better visibility across critical systems.",
    icon: Activity,
  },
];

const technologies = [
  "AWS",
  "Azure",
  "Google Cloud",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Jenkins",
  "GitHub Actions",
  "GitLab CI",
];

const principles = [
  {
    icon: Code2,
    title: "Understand the system first",
    text: "We look at the application, infrastructure, deployment process, and business requirements before deciding what needs to change.",
  },
  {
    icon: GitBranch,
    title: "Improve without disruption",
    text: "Modernization should create progress without introducing unnecessary complexity or interrupting systems a business already depends on.",
  },
  {
    icon: LockKeyhole,
    title: "Security throughout",
    text: "Access, infrastructure, deployment, and application security are considered throughout the engineering lifecycle.",
  },
  {
    icon: Gauge,
    title: "Measure what matters",
    text: "Observability gives teams the visibility they need to understand behaviour, detect problems, and make better decisions.",
  },
];

const focusAreas = [
  "Cloud architecture",
  "Infrastructure automation",
  "Continuous delivery",
  "Container platforms",
  "Production observability",
  "Security engineering",
];

export function AboutUs() {
  return (
   <>
      <Helmet>
    <title>About Us | DevOps Minders</title>

    <meta
      name="description"
      content="Learn about DevOps Minders, a DevOps, Cloud and AI automation company helping businesses build scalable, secure and reliable software infrastructure."
    />

    <link
      rel="canonical"
      href="https://www.devopsminders.com/about-us"
    />

    <meta property="og:title" content="About Us | DevOps Minders" />

    <meta
      property="og:description"
      content="Learn about DevOps Minders and our expertise in DevOps, Cloud, Kubernetes and AI."
    />

    <meta
      property="og:url"
      content="https://www.devopsminders.com/about-us"
    />

    <meta property="og:type" content="website" />
  </Helmet>
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-white py-12 text-slate-900 sm:py-12 lg:py-12"
    >
      {/* =====================================================
      BACKGROUND
    ======================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.035, 0.055, 0.035],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-280px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-slate-100/50 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-260px] right-[-180px] h-[500px] w-[500px] rounded-full bg-[#E80112]/[0.02] blur-[160px]"
        />

        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 sm:px-5 md:px-6">
        {/* =====================================================
            INTRO
        ====================================================== */}
        {/* CHANGE: Widened left column to 1.4fr and reduced right column to 0.6fr to fill empty space */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-10 xl:gap-16">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#E80112]" />

              <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#E80112]">
                About DevOps Minders
              </span>
            </div>

            <h2
              id="about-heading"
              className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            >
              Engineering the infrastructure
              <span className="text-[#E80112]"> behind modern software.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              DevOps Minders helps businesses build, modernize, and operate
              reliable digital infrastructure. We bring together cloud
              engineering, DevOps automation, security, monitoring, and software
              engineering to create systems that are easier to deploy, operate,
              and scale.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px] sm:leading-8">
              Our work is grounded in practical engineering — understanding how
              technology is used today, identifying where it creates friction,
              and improving the foundation without adding unnecessary
              complexity.
            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative hidden lg:mt-8 lg:block"
          >
            <img
              src="/assets/about-image.png"
              alt="DevOps Minders engineering team collaborating on cloud infrastructure"
              className="relative h-auto max-h-[450px] w-full object-contain"
            />
          </motion.div>
        </div>

        {/* =====================================================
            ENGINEERING OVERVIEW
        ====================================================== */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="border-b border-slate-200 px-6 py-6 sm:px-8">
              <div className="flex items-center gap-3">
                <Server className="h-[18px] w-[18px] text-[#E80112]/80" />

                <h3 className="text-sm font-medium text-slate-900">
                  Engineering capabilities
                </h3>
              </div>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Practical engineering across infrastructure, deployment,
                security, and production reliability.
              </p>
            </div>

            <div className="divide-y divide-slate-200">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className="group grid gap-5 px-6 py-7 transition-colors duration-300 hover:bg-slate-50 sm:grid-cols-[44px_1fr] sm:px-8"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 6,
                        scale: 1.06,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#E80112] transition-colors duration-300 group-hover:border-[#E80112]/30 group-hover:bg-[#E80112]/[0.08]"
                    >
                      <Icon className="h-[19px] w-[19px]" strokeWidth={1.7} />
                    </motion.div>

                    <div>
                      <h4 className="text-lg font-medium tracking-[-0.015em] text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Technology */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
          >
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.05, 0.09, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-slate-200 blur-[100px]"
            />

            <div className="relative flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E80112]/20 bg-white">
                  <Sparkles
                    className="h-[18px] w-[18px] text-[#E80112]"
                    strokeWidth={1.7}
                  />
                </div>

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                  Technology Stack
                </span>
              </div>

              <h3 className="mt-9 text-2xl font-semibold leading-tight tracking-[-0.03em]">
                Infrastructure built to
                <span className="text-[#E80112]"> evolve.</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                We use proven cloud and infrastructure technologies to build
                environments that support continuous delivery, containerized
                workloads, infrastructure as code, and modern production
                operations.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <motion.span
                    key={technology}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 transition-colors duration-300 hover:border-[#E80112]/25 hover:text-slate-900"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-start gap-3">
                    <Boxes className="mt-0.5 h-4 w-4 shrink-0 text-[#E80112]/70" />

                    <p className="text-xs leading-6 text-slate-500">
                      Cloud architecture, automation, containerization,
                      security, observability, and continuous delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            ANIMATED ENGINEERING FLOW
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="relative mt-12 overflow-hidden py-12"
        >
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100 blur-[110px]" />

          <div className="relative">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#E80112]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E80112]">
                  The bigger picture
                </span>
              </div>

              <h3 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                Everything needs to work
                <span className="text-[#E80112]"> together.</span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                Applications, infrastructure, security, delivery, and monitoring
                are not isolated pieces. Reliable products come from making
                those layers work as one system.
              </p>
            </div>

            {/* Flow */}
            <div className="relative mt-14">
              <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent md:block" />

              <motion.div
                animate={{
                  x: ["0%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-0 top-1/2 hidden h-px w-24 bg-gradient-to-r from-transparent via-[#E80112] to-transparent md:block"
              />

              <div className="grid gap-7 md:grid-cols-5">
                {[
                  {
                    title: "Product",
                    icon: Code2,
                  },
                  {
                    title: "Application",
                    icon: Boxes,
                  },
                  {
                    title: "Infrastructure",
                    icon: Server,
                  },
                  {
                    title: "Delivery",
                    icon: GitBranch,
                  },
                  {
                    title: "Operations",
                    icon: Activity,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -5 }}
                      className="relative flex flex-col items-center text-center"
                    >
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 0 rgba(232,1,18,0)",
                            "0 0 20px rgba(232,1,18,0.12)",
                            "0 0 0 rgba(232,1,18,0)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          delay: index * 0.35,
                          repeat: Infinity,
                        }}
                        className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#E80112]"
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </motion.div>

                      <h4 className="mt-4 text-xs font-semibold text-slate-700">
                        {item.title}
                      </h4>

                      <span className="mt-1 text-[10px] text-slate-400">
                        Layer
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            ENGINEERING MINDSET
        ====================================================== */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#E80112]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E80112]">
                How we think
              </span>
            </div>

            <h3 className="max-w-md text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl">
              Good infrastructure should
              <span className="text-[#E80112]">
                {" "}
                make the next decision easier.
              </span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-[15px]">
              Technology decisions have a long life. We focus on creating
              systems that remain understandable and maintainable as products,
              teams, and workloads change.
            </p>
          </motion.div>

          {/* Editorial timeline — not cards */}
          <div className="relative">
            <div className="absolute bottom-6 left-[6px] top-6 w-px bg-gradient-to-b from-[#E80112]/50 via-slate-300 to-transparent" />

            <div className="space-y-0">
              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group relative flex gap-6 border-b border-slate-200 py-7 first:pt-0 last:border-b-0"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      className="relative z-10 mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-[#E80112]/40 bg-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E80112]" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Icon
                          size={15}
                          className="text-[#E80112]/65"
                          strokeWidth={1.5}
                        />

                        <h4 className="text-sm font-semibold text-slate-900 sm:text-[15px]">
                          {item.title}
                        </h4>
                      </div>

                      <p className="mt-2 max-w-2xl text-[13px] leading-6 text-slate-600 sm:text-sm">
                        {item.text}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={14}
                      className="mt-1 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E80112]/60"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            FOCUS AREA — TYPOGRAPHIC UI
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="flex flex-col gap-8 border-t border-slate-200 pt-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-md">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#E80112]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E80112]">
                  Engineering focus
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
                From infrastructure
                <span className="text-[#E80112]"> to production.</span>
              </h3>
            </div>

            <div className="max-w-2xl">
              <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
                We look beyond individual tools and consider how infrastructure,
                applications, delivery workflows, and production operations work
                together.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4">
                {focusAreas.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                    }}
                    className="group flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E80112]/70 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#E80112]" />

                    <span className="text-xs text-slate-500 transition-colors duration-300 group-hover:text-slate-900">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 border-t border-slate-200 pt-8 sm:mt-12"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <p className="max-w-4xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              From modernizing existing infrastructure to supporting new digital
              products, our focus is on building secure architecture,
              predictable delivery workflows, and dependable systems that can
              grow with the business.
            </p>

            <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E80112]" />
              Built for production
            </div>
          </div>
        </motion.div>
      </div>
    </section></>
  );
}
