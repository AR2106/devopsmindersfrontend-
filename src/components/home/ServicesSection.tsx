import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../../constants/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
    return (
        <section
            id="services"
            className="relative w-full overflow-hidden bg-white py-24 md:py-32"
        >
            {/* =========================================================
                BACKGROUND
            ========================================================== */}

            <div className="pointer-events-none absolute inset-0">
                {/* Subtle gray glows for depth on white background */}
                <div className="absolute left-[-100px] top-[15%] h-[400px] w-[400px] rounded-full bg-slate-100/50 blur-[120px]" />
                <div className="absolute right-[-100px] bottom-[10%] h-[400px] w-[400px] rounded-full bg-slate-100/50 blur-[120px]" />

                {/* Technical grid - Dark gray lines */}
                <div
                    className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                    }}
                />

                {/* Center subtle glow - Using Brand Red #E80112 */}
                <div className="absolute left-1/2 top-[45%] h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[#E80112]/[0.02] blur-[140px]" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-12">
                {/* =====================================================
                    SECTION HEADER
                ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    {/* Badge - Using Brand Red #E80112 */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E80112]/20 bg-[#E80112]/10 px-4 py-2">
                        <Sparkles className="h-4 w-4 text-[#E80112]" />

                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E80112]">
                            What We Do
                        </span>
                    </div>

                    {/* Heading - Expertise in Red */}
                    <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                        Our{" "}
                        <span className="text-[#E80112]">
                            Expertise
                        </span>
                    </h2>

                    {/* Subhead - Dark Gray */}
                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                        Comprehensive technology solutions designed to optimize
                        operations, strengthen security, modernize infrastructure,
                        and help your business scale with confidence.
                    </p>

                    {/* Divider - Using Brand Red #E80112 */}
                    <div className="mx-auto mt-8 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-gradient-to-r from-transparent to-slate-300" />

                        <span className="h-1.5 w-1.5 rounded-full bg-[#E80112] shadow-[0_0_12px_#E80112]" />

                        <span className="h-px w-12 bg-gradient-to-l from-transparent to-slate-300" />
                    </div>
                </motion.div>

                {/* =====================================================
                    SERVICES META
                ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4"
                >
                    <div className="flex items-center gap-2">
                        {/* Dot Using Brand Red #E80112 */}
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E80112] shadow-[0_0_10px_#E80112]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Technology Services
                        </span>
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.15em] text-slate-400">
                        {String(services.length).padStart(2, "0")} SERVICES
                    </span>
                </motion.div>

                {/* =====================================================
                    SERVICES GRID
                ====================================================== */}

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title ?? index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.12,
                            }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.08,
                            }}
                            className="h-full"
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                index={index}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* =====================================================
                    BOTTOM TEXT
                ====================================================== */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-10 flex items-center justify-center gap-3"
                >
                    <span className="h-px w-16 bg-gradient-to-r from-transparent to-slate-200" />

                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        End-to-End Technology Solutions
                    </span>

                    <span className="h-px w-16 bg-gradient-to-l from-transparent to-slate-200" />
                </motion.div>
            </div>
        </section>
    );
}