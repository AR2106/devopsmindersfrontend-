import {
  Cloud,
  Shield,
  Zap,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";

export function AboutUs() {
  const features = [
    {
      title: "CI/CD Automation",
      desc: "Fully automated pipelines using GitHub Actions, Jenkins, and GitLab CI for faster, error-free deployments.",
      icon: <GitBranch />,
    },
    {
      title: "Cloud Infrastructure",
      desc: "Scalable architectures on AWS, Azure, and GCP optimized for performance and cost efficiency.",
      icon: <Cloud />,
    },
    {
      title: "DevSecOps Security",
      desc: "Security-first approach with vulnerability scanning, IAM policies, and compliance controls.",
      icon: <Shield />,
    },
    {
      title: "24/7 Reliability",
      desc: "Real-time monitoring, alerting, and incident response for mission-critical systems.",
      icon: <Zap />,
    },
  ];

  return (
    <section
      id="about"
      aria-label="About DevOps Minders"
      className="relative bg-[#0b0b0d] text-white py-14 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-200px] left-1/2 w-[800px] h-[800px] bg-primary blur-[200px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-[-200px] right-[-120px] w-[600px] h-[600px] bg-blue-600 blur-[220px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TOP SECTION */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1 text-xs tracking-widest uppercase bg-white/10 border border-white/10 rounded-full text-gray-300 mb-6">
            About DevOps Minders
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            We Build{" "}
            <span className="text-primary">Scalable DevOps Systems</span>{" "}
            That Power Modern Products
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            We help startups and enterprises automate infrastructure, reduce deployment time,
            and build secure cloud-native systems that scale globally without downtime.
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - FEATURES */}
          <div className="space-y-10">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="text-primary mt-1">{item.icon}</div>

                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - STATS CARD */}
          <div className="relative">

            {/* Glow Background */}
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-3xl" />

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-10 shadow-2xl"
            >

              <h3 className="text-xl font-semibold mb-8 text-center">
                Trusted DevOps Engineering Partner
              </h3>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 text-center mb-10">
                <div>
                  <h4 className="text-3xl font-bold text-primary">200+</h4>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-primary">99.9%</h4>
                  <p className="text-gray-400 text-sm">Uptime</p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-primary">24/7</h4>
                  <p className="text-gray-400 text-sm">Support</p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-primary">6+ Yrs</h4>
                  <p className="text-gray-400 text-sm">Experience</p>
                </div>
              </div>

              {/* Bottom Message */}
              <div className="border-t border-white/10 pt-6 text-center">
                <p className="text-gray-400 text-sm leading-relaxed">
                  We don’t just manage infrastructure — we engineer reliability,
                  scalability, and automation for production-grade systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}