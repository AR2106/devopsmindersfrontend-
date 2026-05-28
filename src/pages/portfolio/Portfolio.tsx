import { motion } from "framer-motion";
import { ArrowUpRight, Cloud, GitBranch, Shield, Database } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      title: "CI/CD Pipeline Automation Platform",
      impact: "Reduced deployment time by 70%",
      desc: "Built an end-to-end CI/CD system using GitHub Actions and Jenkins with automated testing, staging, and production pipelines.",
      stack: ["GitHub Actions", "Jenkins", "Docker", "CI/CD"],
      icon: <GitBranch />,
    },
    {
      title: "Scalable AWS Cloud Infrastructure",
      impact: "Handled 5M+ monthly requests",
      desc: "Designed a high-availability AWS architecture with load balancing, auto-scaling groups, and fault-tolerant deployments.",
      stack: ["AWS", "EC2", "S3", "Load Balancer"],
      icon: <Cloud />,
    },
    {
      title: "Kubernetes Microservices System",
      impact: "Zero-downtime deployments",
      desc: "Implemented Kubernetes clusters for container orchestration with rolling updates and service discovery.",
      stack: ["Kubernetes", "Docker", "Microservices"],
      icon: <Database />,
    },
    {
      title: "DevSecOps Security Automation",
      impact: "90% faster vulnerability detection",
      desc: "Integrated security scanning into CI/CD pipelines with automated compliance checks and IAM policies.",
      stack: ["DevSecOps", "Security", "Automation"],
      icon: <Shield />,
    },
  ];

  return (
    <section
      id="portfolio"
      aria-label="DevOps Portfolio Section"
      className="relative bg-[#0b0b0d] text-white py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-200px] left-1/2 w-[800px] h-[800px] bg-primary blur-[200px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[600px] h-[600px] bg-blue-600 blur-[220px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="inline-block px-4 py-1 text-xs tracking-widest uppercase bg-white/10 border border-white/10 rounded-full text-gray-300 mb-6">
            Our Engineering Work
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Production-Grade{" "}
            <span className="text-primary">DevOps Case Studies</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            We design and deliver scalable cloud infrastructure, automation systems,
            and DevOps pipelines that power modern high-traffic applications.
          </p>
        </div>

        {/* LIST (NOT CARDS GRID — MODERN STACK LAYOUT) */}
        <div className="space-y-12">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >

              {/* LEFT */}
              <div className="flex gap-4 items-start flex-1">
                <div className="text-primary mt-1">
                  {project.icon}
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition">
                    {project.title}
                  </h3>

                  <p className="text-green-400 text-sm mt-1 font-medium">
                    {project.impact}
                  </p>

                  <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-2xl">
                    {project.desc}
                  </p>

                  {/* STACK */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT CTA */}
              <div className="flex lg:flex-col items-start lg:items-end justify-between gap-4">
                <button className="flex items-center gap-2 text-sm text-primary group-hover:translate-x-1 transition">
                  View Case Study <ArrowUpRight size={16} />
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}