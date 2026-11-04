import { motion } from "framer-motion";
import { Cloud, Shield, Zap, GitBranch, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function GetQuotePage() {
  const [open, setOpen] = useState(false);

  const benefits = [
    {
      icon: <Cloud />,
      title: "Cloud Architecture Design",
      desc: "AWS, Azure & GCP scalable infrastructure planning.",
    },
    {
      icon: <GitBranch />,
      title: "CI/CD Automation",
      desc: "Faster deployments with zero downtime pipelines.",
    },
    {
      icon: <Shield />,
      title: "DevSecOps Security",
      desc: "Enterprise-grade security & compliance integration.",
    },
    {
      icon: <Zap />,
      title: "24/7 Monitoring",
      desc: "Real-time alerts & incident response systems.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Get a Project Quote | DevOps Minders</title>
        <meta
          name="description"
          content="Request a proposal for custom software development, cloud infrastructure architecture, DevOps automation, or AI engineering from DevOps Minders."
        />
        <meta
          name="keywords"
          content="Get a Quote, Software Development Quote, DevOps Consulting Quote, Cloud Migration Pricing, DevOps Minders"
        />
        <link rel="canonical" href="https://www.devopsminders.com/quote" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevOps Minders" />
        <meta property="og:title" content="Get a Project Quote | DevOps Minders" />
        <meta
          property="og:description"
          content="Request a proposal for custom software development, cloud infrastructure architecture, DevOps automation, or AI engineering from DevOps Minders."
        />
        <meta property="og:url" content="https://www.devopsminders.com/quote" />
        <meta property="og:image" content="https://www.devopsminders.com/assets/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devopsminders" />
        <meta name="twitter:title" content="Get a Project Quote | DevOps Minders" />
        <meta
          name="twitter:description"
          content="Request a proposal for custom software development, cloud infrastructure architecture, DevOps automation, or AI engineering from DevOps Minders."
        />
        <meta name="twitter:image" content="https://www.devopsminders.com/assets/og-image.png" />
      </Helmet>

      <section
        id="get-quote"
        aria-label="DevOps Quote Landing Page"
        className="relative bg-[#0b0b0d] text-white overflow-hidden sm:py-10 md:py-14 mt-0"
      >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-220px] left-1/2 w-[800px] h-[800px] bg-primary blur-[200px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[600px] h-[600px] bg-blue-600 blur-[220px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 text-xs tracking-widest uppercase bg-white/10 border border-white/10 rounded-full text-gray-300"
          >
            DevOps • Cloud • Automation Experts
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mt-6 leading-tight"
          >
            Get a{" "}
            <span className="text-primary">High-Performance DevOps Quote</span>{" "}
            in 24 Hours
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg leading-relaxed"
          >
            We design scalable cloud infrastructure, automate deployments, and
            secure your systems with enterprise-grade DevOps engineering.
          </motion.p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="mt-10 px-8 py-4 bg-primary rounded-xl font-semibold flex items-center gap-2 mx-auto"
          >
            Get My DevOps Quote <ArrowRight size={18} />
          </motion.button>
        </div>

        {/* BENEFITS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="text-primary mb-4">{b.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* PROCESS */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            How We Deliver Your DevOps Solution
          </h2>

          <div className="mt-10 space-y-5 text-gray-400 text-sm md:text-base">
            <p>1. We analyze your infrastructure requirements</p>
            <p>2. Design scalable cloud architecture</p>
            <p>3. Build CI/CD pipelines & automation</p>
            <p>4. Deploy, monitor & optimize performance</p>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-lg p-8 rounded-2xl bg-[#111] border border-white/10"
          >
            <h2 className="text-xl font-semibold mb-6">Request DevOps Quote</h2>

            <div className="space-y-4">
              <input
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
              />
              <input
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
              />
              <textarea
                placeholder="Project Requirements"
                rows={4}
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10"
              />
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-primary py-3 rounded-lg font-semibold">
                Submit
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex-1 bg-white/10 py-3 rounded-lg"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
    </>
  );
}
