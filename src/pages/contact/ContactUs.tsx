import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Zap,
  Shield,
  Rocket,
  Phone,
  CheckCircle,
  Server,
  Globe,
} from "lucide-react";

/* ================= SAFE VARIANTS (TS FIXED) ================= */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ FIXED (no TS error)
    },
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 md:px-16 py-16 relative overflow-hidden">

      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.12),transparent_60%)]" />
      </motion.div>

      {/* ================= HERO ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center relative z-10 mb-16"
      >
        <motion.p variants={fadeUp} className="text-red-500 uppercase tracking-widest text-sm">
          DevOps Minders • IT Services & Cloud Engineering
        </motion.p>

        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          Reliable IT & Cloud Solutions for{" "}
          <span className="text-red-500">Modern Businesses</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-gray-400 mt-5 max-w-2xl mx-auto">
          We build scalable DevOps pipelines, cloud infrastructure, and secure
          software systems designed for enterprise growth and performance.
        </motion.p>

        {/* TRUST STRIP */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-5 mt-8 text-gray-400 text-sm border border-white/10 p-4 rounded-xl bg-black/30"
        >
          <span className="flex items-center gap-2">
            <CheckCircle size={15} className="text-red-500" />
            Enterprise Delivery
          </span>

          <span className="hidden md:block w-px bg-white/10" />

          <span className="flex items-center gap-2">
            <Server size={15} className="text-red-500" />
            Cloud & DevOps Systems
          </span>

          <span className="hidden md:block w-px bg-white/10" />

          <span className="flex items-center gap-2">
            <Globe size={15} className="text-red-500" />
            Global IT Clients
          </span>
        </motion.div>
      </motion.div>

      {/* ================= CONTACT + WHY ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 grid lg:grid-cols-2 gap-6 mb-16"
      >

        {/* CONTACT INFO */}
        <motion.div variants={fadeUp} className="p-6 rounded-xl border border-white/10 bg-black/30">
          <h2 className="text-lg font-semibold mb-5">Contact Information</h2>

          <div className="space-y-5 text-sm text-gray-400">

            <div className="flex gap-3">
              <Mail className="text-red-500 mt-1" size={16} />
              <div>
                <p className="text-white/80 font-medium">Email Support</p>
                <p>contact@devopsminders.com</p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin className="text-red-500 mt-1" size={16} />
              <div>
                <p className="text-white/80 font-medium">Location</p>
                <p>India • Remote Global IT Delivery</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock className="text-red-500 mt-1" size={16} />
              <div>
                <p className="text-white/80 font-medium">Support Hours</p>
                <p>Mon–Sat • 24 Hour Response</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* WHY CHOOSE US */}
        <motion.div variants={fadeUp} className="p-6 rounded-xl border border-white/10 bg-black/30">
          <h2 className="text-lg font-semibold mb-5">Why Businesses Choose Us</h2>

          <ul className="space-y-5 text-sm text-gray-400">

            {[
              {
                icon: Zap,
                title: "Fast Delivery",
                desc: "Automated CI/CD pipelines for rapid deployment",
              },
              {
                icon: Shield,
                title: "Secure Systems",
                desc: "Enterprise-grade security and cloud compliance",
              },
              {
                icon: Rocket,
                title: "Scalable Architecture",
                desc: "Built to handle enterprise-level workloads",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex gap-3"
              >
                <item.icon className="text-red-500 mt-1" size={16} />
                <div>
                  <p className="text-white/80 font-medium">{item.title}</p>
                  <p>{item.desc}</p>
                </div>
              </motion.li>
            ))}

          </ul>
        </motion.div>

      </motion.section>

      {/* ================= PROCESS ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Working Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          {[
            "Requirement Analysis",
            "System Architecture",
            "Development & Automation",
            "Deployment & Support",
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="p-6 border border-white/10 rounded-xl bg-black/20"
            >
              <div className="text-red-500 font-bold mb-2">
                0{i + 1}
              </div>
              <p className="text-gray-300 text-sm">{step}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CTA + FORM ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-10 relative z-10"
      >

        {/* LEFT CTA */}
        <motion.div variants={fadeUp} className="space-y-6">

          <div className="p-6 border border-red-500/20 rounded-xl bg-black/30">
            <h2 className="text-2xl font-bold mb-2">
              Schedule Free Consultation
            </h2>
            <p className="text-gray-400 text-sm">
              Speak with our DevOps engineers and get architecture guidance.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition flex items-center gap-2"
            >
              Book Meeting <Phone size={16} />
            </motion.button>
          </div>

        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          variants={fadeUp}
          className="p-8 border border-white/10 rounded-xl bg-black/30"
        >
          <h2 className="text-2xl font-bold mb-6">Project Enquiry</h2>

          <form className="space-y-4">

            {["Full Name", "Business Email", "Company Name"].map((ph, i) => (
              <input
                key={i}
                placeholder={ph}
                className="w-full p-3 bg-black border border-white/10 rounded-lg focus:border-red-500 outline-none"
              />
            ))}

            <textarea
              rows={5}
              placeholder="Describe your requirement..."
              className="w-full p-3 bg-black border border-white/10 rounded-lg focus:border-red-500 outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg transition font-medium"
            >
              Submit Request
            </motion.button>

            <p className="text-xs text-gray-500 text-center">
              We respond within 24 hours with technical consultation.
            </p>

          </form>
        </motion.div>

      </motion.section>

    </div>
  );
}