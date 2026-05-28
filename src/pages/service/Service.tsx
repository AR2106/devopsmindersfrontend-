import { ServiceCard } from "../../components/home/ServiceCard";
import { services } from "../../constants/services";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Service = () => {
  return (
    <section
      id="services"
      aria-label="DevOps Services Section"
      className="relative py-14 bg-[#0f0f10] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 w-[700px] h-[700px] bg-primary blur-[160px] rounded-full -translate-x-1/2" />
        <div className="absolute bottom-[-140px] right-[-100px] w-[500px] h-[500px] bg-blue-600 blur-[160px] rounded-full" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:38px_38px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="px-5 py-1 text-xs tracking-widest uppercase bg-white/10 border border-white/10 rounded-full text-gray-300">
            DevOps • Cloud • Automation
          </span>
        </motion.div>

        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Scalable{" "}
            <span className="text-primary">DevOps Solutions</span> for Modern
            Businesses
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            At <span className="text-white font-semibold">DevOps Minders</span>,
            we design cloud-native architectures, automate CI/CD pipelines,
            improve infrastructure reliability, and secure production systems
            for high-growth companies.
          </p>
        </motion.header>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateX: 2,
                rotateY: -2,
              }}
              className="h-full"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;