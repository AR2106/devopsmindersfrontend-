import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Brain,
  Code2,
  Image as ImageIcon,
  Mic,
  Sparkles,
  WandSparkles,
  FileText,
  Network,
} from "lucide-react";

const solutions = [
  {
    icon: Mic,
    title: "AI Voice Assistant",
    description: "Speak naturally with an intelligent AI assistant that understands and responds instantly.",
    link: "/ai-agents",
  },
  {
    icon: Brain,
    title: "AI Infrastructure Assessment",
    description: "Analyze your infrastructure and discover opportunities for AI-powered optimization.",
    link: "/ai-development",
  },
  {
    icon: Sparkles,
    title: "AI Case Study Finder",
    description: "Find relevant AI use cases and solutions for your business challenges.",
    link: "/case-studies",
  },
  {
    icon: Bot,
    title: "AI Automation Advisor",
    description: "Identify repetitive workflows and discover automation opportunities.",
    link: "/ai-development",
  },
  {
    icon: FileText,
    title: "AI Document Processing",
    description: "Extract, analyze and organize data from documents with intelligent automation.",
    link: "/ai-solutions",
  },
  {
    icon: Code2,
    title: "AI Consultant",
    description: "Improve deployment, monitoring and infrastructure workflows using AI.",
    link: "/ai-solutions",
  },
];

const technologies = [
  "OpenAI", "LangChain", "LLMs", "Python", "AWS", "Microsoft Azure", "Docker", "Terraform", "Kubernetes",
];

const stats = [
  { value: "200+", label: "Projects" },
  { value: "30+", label: "Clients" },
  { value: "10×", label: "ROI" },
  { value: "24/7", label: "AI Availability" },
];

export default function AISolutionsPage() {
  return (
    <>
      <Helmet>
        <title>AI Solutions & Intelligent Automation | DevOps Minders</title>
        <meta name="description" content="DevOps Minders provides AI solutions, custom AI agents, generative AI, LLM applications, and intelligent workflow automation for businesses." />
        <meta name="keywords" content="AI Solutions Company, AI Development Company, AI Agents, Generative AI, LLM Applications, AI Automation, DevOps Minders" />
        <link rel="canonical" href="https://www.devopsminders.com/ai-solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevOps Minders" />
        <meta property="og:url" content="https://www.devopsminders.com/ai-solutions" />
        <meta property="og:title" content="AI Solutions & Intelligent Automation | DevOps Minders" />
        <meta property="og:description" content="Explore AI solutions, custom AI agents, generative AI, and intelligent workflow automation for businesses." />
        <meta property="og:image" content="https://www.devopsminders.com/assets/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devopsminders" />
        <meta name="twitter:title" content="AI Solutions & Intelligent Automation | DevOps Minders" />
        <meta name="twitter:description" content="Explore AI solutions, custom AI agents, generative AI, and intelligent workflow automation for businesses." />
        <meta name="twitter:image" content="https://www.devopsminders.com/assets/og-image.png" />
      </Helmet>

      <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="absolute left-[-180px] top-0 h-[460px] w-[460px] rounded-full bg-red-500/8 blur-[140px]" />
          <div className="absolute right-[-180px] bottom-0 h-[460px] w-[460px] rounded-full bg-red-400/8 blur-[140px]" />
        </div>

        <div className="relative z-10">
          {/* HERO */}
          <section className="mx-auto 2xxl:max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-20 lg:pt-14">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
              <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-600">
                  <Sparkles size={13} /> AI-Powered Technology
                </div>

                <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Experience Our <span className="relative"><span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">AI Power</span><span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-red-600/40 to-transparent" /></span> at Your Fingertips
                </h1>

                <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                  Talk with our AI Assistant or try Generative AI tools — get instant answers, create images, and automate your business workflows.
                </p>

                <div className="mt-9">
                  <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-red-600/25 transition hover:bg-red-500">
                    Start with AI <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                  {stats.map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}>
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                      <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-red-500/10 via-transparentA-transparent to-red-500/10" />
                <img src="/assets/ai-image.webp" alt="DevOps Minders AI Solutions and Automation" loading="lazy" decoding="async" className="relative z-10 h-auto w-full max-w-md rounded-[30px] border border-slate-200 object-cover shadow-2xl shadow-slate-300/40" />
              </motion.div>
            </div>
          </section>

          {/* AI SHOWCASE */}
          <section className="mx-auto 2xxl:max-w-7xl px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
            <div className="grid gap-6 lg:grid-cols-2">
              <Link to="/ai-agents" className="block">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-500/5 blur-[60px]" />
                  <div className="relative mb-5 flex items-center gap-3">
                    <div className="rounded-xl bg-red-50 p-2.5 text-red-600"><Mic size={18} /></div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">AI Voice Assistant</h3>
                      <p className="text-xs text-slate-500">Talk naturally with our AI assistant</p>
                    </div>
                  </div>
                  <div className="relative flex min-h-[180px] items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-red-50/40">
                    <div className="flex items-center gap-2">
                      {[25, 45, 70, 38, 60, 85, 45, 30, 55, 75].map((height, index) => (
                        <motion.span key={index} animate={{ height: [height, height + 15, height] }} transition={{ duration: 1.1, repeat: Infinity, delay: index * 0.08 }} className="w-1.5 rounded-full bg-gradient-to-t from-red-600 to-red-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>

              <Link to="/ai-development" className="block">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50">
                  <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-red-500/5 blur-[60px]" />
                  <div className="relative mb-5 flex items-center gap-3">
                    <div className="rounded-xl bg-red-50 p-2.5 text-red-600"><Network size={18} /></div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">Smart Analytics</h3>
                      <p className="text-xs text-slate-500">AI-driven insights at a glance</p>
                    </div>
                  </div>
                  <div className="relative flex min-h-[180px] flex-col justify-center gap-3 rounded-2xl bg-gradient-to-br from-slate-50 to-red-50/40 p-5">
                    {[
                      { label: "AI Requests", value: "2,847", pct: "85%" },
                      { label: "Accuracy", value: "99.2%", pct: "92%" },
                      { label: "Response Time", value: "0.8s", pct: "70%" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="text-slate-600">{item.label}</span>
                          <span className="font-semibold text-slate-900">{item.value}</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: item.pct }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Link>
            </div>
          </section>

          {/* GENERATIVE AI STUDIO */}
          <section className="mx-auto 2xxl:max-w-7xl px-5 py-14 sm:px-8 lg:px-20">
            <SectionHeading eyebrow="CREATE WITH AI" title="Generative AI Studio" description="Create, transform and experiment with powerful generative AI tools." />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <StudioCard icon={<WandSparkles />} title="Text → Image" description="Generate stunning visuals from simple text prompts." link="/ai-development" />
              <StudioCard icon={<ImageIcon />} title="Image → Text" description="Extract meaningful information from your images." link="/ai-development" />
              <StudioCard icon={<Mic />} title="Text → Speech" description="Convert written text into natural-sounding AI voice." link="/ai-agents" />
              <StudioCard icon={<Brain />} title="Smart Analytics" description="Analyze data and generate insights with AI-powered reports." link="/ai-solutions" />
            </div>
          </section>

          {/* AI TOOLS CTA */}
          <section className="mx-auto 2xxl:max-w-7xl px-5 py-10 sm:px-8 lg:px-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-red-50/50 p-8 shadow-lg shadow-red-100/40 sm:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-red-500/8 blur-[80px]" />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-500 text-white shadow-lg shadow-red-600/30"><Sparkles size={24} /></div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Try AI Tools</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">Explore our collection of intelligent AI tools built to help businesses create, automate and innovate.</p>
                  </div>
                </div>
                <Link to="/contact" className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-red-600/25 transition hover:bg-red-500">
                  Start with AI <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </section>

          {/* SOLUTIONS */}
          <section className="relative mx-auto 2xxl:max-w-7xl px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
            <SectionHeading eyebrow="WHAT WE BUILD" title="Our AI-Powered Solutions" description="Intelligent tools to solve your cloud and infrastructure challenges." />
            <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {solutions?.map((solution) => (
                <SolutionCard key={solution.title} {...solution} />
              ))}
            </div>
          </section>

          {/* TECHNOLOGY ECOSYSTEM */}
          <section className="border-t border-slate-200 bg-slate-50/60">
            <div className="mx-auto 2xxl:max-w-7xl px-5 py-14 sm:px-8 lg:px-20">
              <SectionHeading eyebrow="TECHNOLOGY STACK" title="Trusted Cloud & AI Technology Ecosystem" description="Built with modern cloud and AI technologies." />
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {technologies?.map((technology, index) => (
                  <motion.div key={technology} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-red-300 hover:text-red-600 hover:shadow-md">
                    {technology}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

/* ============================================================= COMPONENTS ============================================================= */

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-red-600">{eyebrow}</div>
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">{title}</motion.h2>
      <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">{description}</motion.p>
    </div>
  );
}

function StudioCard({ icon, title, description, link }: { icon: React.ReactNode; title: string; description: string; link: string }) {
  return (
    <Link to={link} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-red-300 hover:shadow-xl hover:shadow-red-100/50 block">
      <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-red-600 to-red-400 transition-transform duration-300 group-hover:scale-x-100" />
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-red-100/50 text-red-600 transition group-hover:from-red-600 group-hover:to-red-500 group-hover:text-white">{icon}</div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      <div className="mt-5 flex items-center gap-1 text-sm font-medium text-red-600 opacity-0 transition-opacity group-hover:opacity-100">
        Explore <ArrowRight size={14} />
      </div>
    </Link>
  );
}

function SolutionCard({ icon: Icon, title, description, link }: { icon: React.ElementType; title: string; description: string; link: string }) {
  return (
    <Link to={link} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-red-300 hover:shadow-xl hover:shadow-red-100/50 block">
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-500/5 blur-[40px] transition group-hover:bg-red-500/10" />
      <div className="relative flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-red-600 transition group-hover:border-red-200 group-hover:bg-red-50"><Icon size={20} /></div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-300 transition group-hover:bg-red-600 group-hover:text-white"><ArrowRight size={14} /></div>
      </div>
      <h3 className="relative mt-6 text-base font-semibold text-slate-900">{title}</h3>
      <p className="relative mt-2 text-sm leading-6 text-slate-500">{description}</p>
      <div className="relative mt-6 h-px w-12 rounded-full bg-gradient-to-r from-red-500 to-transparent transition-all duration-300 group-hover:w-20" />
    </Link>
  );
}