import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  Cloud,
  Code2,
  Image as ImageIcon,
  Mic,
  Play,
  Sparkles,
  Video,
  WandSparkles,
} from "lucide-react";

const solutions = [
  {
    icon: Mic,
    title: "AI Voice Assistant",
    description:
      "Speak naturally with an intelligent AI assistant that understands and responds instantly.",
  },
  {
    icon: Brain,
    title: "AI Infrastructure Assessment",
    description:
      "Analyze your infrastructure and discover opportunities for AI-powered optimization.",
  },
  {
    icon: Sparkles,
    title: "AI Case Study Finder",
    description:
      "Find relevant AI use cases and solutions for your business challenges.",
  },
  {
    icon: Bot,
    title: "AI Automation Advisor",
    description:
      "Identify repetitive workflows and discover automation opportunities.",
  },
  {
    icon: Video,
    title: "AI Content Studio",
    description:
      "Create engaging AI-powered videos, visuals and marketing content.",
  },
  {
    icon: Code2,
    title: "AI DevOps Consultant",
    description:
      "Improve deployment, monitoring and infrastructure workflows using AI.",
  },
];

const technologies = [
  "AWS",
  "Microsoft Azure",
  "Docker",
  "Terraform",
  "GitHub",
  "Kubernetes",
  "Grafana",
  "Python",
];

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative">
        {/* background glow */}
        <div className="pointer-events-none absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-red-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-100px] top-10 h-[300px] w-[300px] rounded-full bg-red-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
          {/* Navbar */}
          <nav className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="text-lg font-bold tracking-tight">
              <span className="text-red-500">D</span>evOps
              <span className="text-red-500">.</span>
            </div>

            <div className="hidden items-center gap-8 text-sm text-white/65 md:flex">
              <a href="#" className="transition hover:text-white">
                About
              </a>
              <a href="#" className="text-white">
                AI Solutions
              </a>
              <a href="#" className="transition hover:text-white">
                Services
              </a>
              <a href="#" className="transition hover:text-white">
                Industries
              </a>
              <a href="#" className="transition hover:text-white">
                Resources
              </a>
            </div>

            <button className="rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold transition hover:bg-red-500">
              Contact Us
            </button>
          </nav>

          {/* Hero */}
          <div className="grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-3 py-1.5 text-xs text-red-300">
                <Sparkles size={13} />
                AI-Powered Technology
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Experience Our <span className="text-red-500">AI Power</span> at
                Your Fingertips
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Talk with our AI Assistant or try Generative AI tools — get
                instant answers, create images, videos and more.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold transition hover:bg-red-500">
                  <Mic size={16} />
                  Talk to AI Assistant
                </button>

                <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/80 transition hover:border-red-500/40 hover:bg-white/[0.07]">
                  Try Generative AI Tools
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>

            {/* AI Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative flex min-h-[330px] items-center justify-center"
            >
              <div className="absolute h-64 w-64 rounded-full bg-red-600/20 blur-[80px]" />

              <div className="relative flex h-[290px] w-[290px] items-center justify-center rounded-[40px] border border-red-500/20 bg-gradient-to-br from-red-500/10 via-black to-black shadow-[0_0_80px_rgba(239,68,68,0.15)]">
                <div className="relative h-44 w-52 rounded-[35px] border border-white/15 bg-[#111] shadow-2xl">
                  <div className="absolute left-7 right-7 top-8 flex justify-between">
                    <span className="h-8 w-8 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,.7)]" />
                    <span className="h-8 w-8 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,.7)]" />
                  </div>

                  <div className="absolute bottom-7 left-1/2 h-2 w-16 -translate-x-1/2 rounded-full bg-red-500/80" />

                  <div className="absolute -bottom-7 left-1/2 h-8 w-16 -translate-x-1/2 rounded-b-full border-b border-red-500/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AI SHOWCASE
      ========================================================= */}
      <section className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <ShowcaseCard
            icon={<Mic size={18} />}
            title="AI Voice Assistant"
            subtitle="Talk naturally with our AI assistant"
          >
            <div className="flex min-h-[170px] items-center justify-center">
              <div className="flex items-center gap-2">
                {[25, 45, 70, 38, 60, 85, 45, 30, 55, 75].map(
                  (height, index) => (
                    <motion.span
                      key={index}
                      animate={{ height: [height, height + 15, height] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        delay: index * 0.08,
                      }}
                      className="w-1 rounded-full bg-red-500"
                    />
                  ),
                )}
              </div>
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            icon={<Play size={18} />}
            title="Watch Our AI in Action"
            subtitle="See how our AI solutions work"
          >
            <div className="relative min-h-[170px] overflow-hidden rounded-xl bg-gradient-to-br from-red-950/50 to-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(239,68,68,.25),transparent_45%)]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-[0_0_35px_rgba(239,68,68,.4)]">
                  <Play size={21} fill="currentColor" />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 text-xs text-white/60">
                AI-powered demo
              </div>
            </div>
          </ShowcaseCard>
        </div>
      </section>

      {/* =========================================================
          GENERATIVE AI STUDIO
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="CREATE WITH AI"
          title="Generative AI Studio"
          description="Create, transform and experiment with powerful generative AI tools."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StudioCard
            icon={<WandSparkles />}
            title="Text → Image"
            description="Generate stunning visuals from simple text prompts."
          />

          <StudioCard
            icon={<ImageIcon />}
            title="Image → Text"
            description="Extract meaningful information from your images."
          />

          <StudioCard
            icon={<Video />}
            title="Lip Sync / Talking Avatar"
            description="Bring digital avatars to life with AI."
          />

          <StudioCard
            icon={<Video />}
            title="Image → Video"
            description="Transform static images into engaging videos."
          />
        </div>
      </section>

      {/* =========================================================
          AI ASSISTANT / PROMPTS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-lg bg-red-500/10 p-2 text-red-400">
                <Bot size={18} />
              </div>

              <div>
                <h3 className="text-sm font-semibold">
                  Talk to Our AI Assistant
                </h3>
                <p className="text-xs text-white/40">
                  Ask anything about our services
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "What services do you provide?",
                "How can AI improve my business?",
                "Can you build a custom AI solution?",
                "Tell me about your cloud services.",
              ].map((item) => (
                <button
                  key={item}
                  className="flex w-full items-center justify-between rounded-lg border border-white/8 bg-black/30 px-4 py-3 text-left text-xs text-white/60 transition hover:border-red-500/30 hover:text-white"
                >
                  {item}
                  <ArrowRight size={14} />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-950/30 to-black p-6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-600">
              <Sparkles size={20} />
            </div>

            <h3 className="text-xl font-semibold">Try AI Tools</h3>

            <p className="mt-3 text-sm leading-6 text-white/50">
              Explore our collection of intelligent AI tools built to help
              businesses create, automate and innovate.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold">
              Start with AI
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}
      <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 rounded-full bg-red-600/10 blur-[100px]" />

        <SectionHeading
          eyebrow="WHAT WE BUILD"
          title="Our AI-Powered Solutions"
          description="Intelligent tools to solve your DevOps and cloud challenges."
        />

        <div className="relative mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY ECOSYSTEM
      ========================================================= */}
      <section className="border-t border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="TECHNOLOGY STACK"
            title="Trusted Cloud & Technology Ecosystem"
            description="Built with modern cloud, DevOps and AI technologies."
          />

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white/65 transition hover:border-red-500/30 hover:text-white"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* =============================================================
   COMPONENTS
============================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-red-400">
        {eyebrow}
      </div>

      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/45">
        {description}
      </p>
    </div>
  );
}

function ShowcaseCard({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-lg bg-red-500/10 p-2 text-red-400">{icon}</div>

        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-white/40">{subtitle}</p>
        </div>
      </div>

      {children}
    </div>
  );
}

function StudioCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-red-500/30"
    >
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition group-hover:bg-red-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="text-sm font-semibold">{title}</h3>

      <p className="mt-2 text-xs leading-5 text-white/40">{description}</p>

      <button className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-red-400">
        Explore
        <ArrowRight size={12} />
      </button>
    </motion.div>
  );
}

function SolutionCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-red-500/30 hover:bg-[#101010]"
    >
      <div className="flex items-start justify-between">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-red-400">
          <Icon size={18} />
        </div>

        <ArrowRight
          size={15}
          className="text-white/20 transition group-hover:text-red-400"
        />
      </div>

      <h3 className="mt-5 text-sm font-semibold">{title}</h3>

      <p className="mt-2 text-xs leading-5 text-white/40">{description}</p>

      <div className="mt-5 h-px w-10 bg-red-500/40 transition-all group-hover:w-16" />
    </motion.div>
  );
}
