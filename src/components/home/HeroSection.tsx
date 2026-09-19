import robotImage from "./../../assets/caseStudy/robot(1).png";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import globe from "./../../assets/globe.png";

const STATS = [
  { value: "98%", label: "UPTIME" },
  { value: "50+", label: "CLIENTS" },
  { value: "24/7", label: "SUPPORT" },
];

const TECH_STACK = [
  "AWS",
  "Azure",
  "Google Cloud",
  "OpenAI",
  "Docker",
  "Kubernetes",
  "LangChain",
  "Terraform",
  "GitHub Actions",
  "ArgoCD",
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      id="brand"
      className="relative min-h-[80vh] overflow-hidden bg-white text-slate-900 selection:bg-red-500/20"
    >
      {/* ==============BACKGROUND===================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Subtle ambient glows for depth */}
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-red-500/5 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#010C1F]/5 blur-[100px]" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ======================GLOBE IMAGE (Right Side Background) ==================== */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[35%] -translate-y-1/2 right-0 w-[35%] lg:w-[30%] h-auto z-10 pointer-events-none hidden lg:block"
      >
        <img
          src={globe}
          alt="Global Network"
          className="w-full h-full object-contain opacity-80"
        />
      </motion.div>

      {/* ======================ROBOT IMAGE (Fixed Sticky Position - Bottom Right) ==================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed bottom-8 right-8 z-40 hidden md:block cursor-pointer"
        onClick={() => navigate("/ai-solutions")}
        role="button"
        aria-label="Navigate to AI Solutions"
      >
        <motion.div
          className="relative w-56 lg:w-64"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute -inset-4 rounded-full bg-red-500/10 blur-2xl" />
          <img
            src={robotImage}
            alt="AI Robot Assistant"
            className="relative z-10 h-auto w-full drop-shadow-xl opacity-90"
          />
        </motion.div>
      </motion.div>

      {/* ======================MAIN CONTAINER===================== */}
      {/* CHANGE: Increased pb-24 to prevent stats from hiding behind the marquee */}
      <div className="relative z-20 flex min-h-[80vh] flex-col justify-start px-8 pt-16 pb-24 sm:px-10 lg:px-12">
        <div className="max-w-4xl w-full text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF0000]" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-red-700">
              AI & Cloud Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-5xl"
          >
            {/* CHANGE: Highlighted "AI and ML" in red */}
            From <span className="text-[#FF0000]">AI </span> and{" "}
            <span className="text-[#FF0000]">ML </span> to cloud and automation,
            we build tailored solutions that solve real business problems,
            streamline operations and help your business scale.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg font-normal"
          >
            Whether you're transforming an existing business or building
            something new, we create technology that moves you forward.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <button
              type="button"
              onClick={() => navigate("/ai-solutions")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF0000] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(255,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:shadow-[0_15px_35px_rgba(255,0,0,0.4)] sm:px-10"
            >
              Get Free Consultation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          {/* Stats Row - 3 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 w-full max-w-2xl"
          >
            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-6 sm:grid-cols-3">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ======================TECHNOLOGY MARQUEE===================== */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-16 border-t border-slate-200 bg-slate-50 sm:h-20">
        <motion.div
          className="flex h-full w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center gap-4 whitespace-nowrap px-8 text-sm font-semibold text-slate-500 sm:px-10 sm:text-base"
            >
              {tech}
              <span className="h-1 w-1 rounded-full bg-slate-300" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
