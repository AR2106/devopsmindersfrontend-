import React from "react";
import { ArrowUpRight, Globe2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import InfiniteMarquee from "../ui/InfiniteMarquee";
import { clients } from "../../constants/clients";

const ClientsSection: React.FC = () => {
    const getClientUrl = (url: string) => {
        return url.startsWith("http") ? url : `https://${url}`;
    };

    const getDomainOnly = (url: string) => {
        try {
            const formattedUrl = getClientUrl(url);
            const { hostname } = new URL(formattedUrl);

            return hostname.replace(/^www\./, "");
        } catch {
            return url;
        }
    };

    return (
        <section
            id="clients"
            aria-labelledby="clients-heading"
            className="relative overflow-hidden bg-white py-16 md:py-20"
        >
            {/* =====================================================
                BACKGROUND
            ====================================================== */}
            <div className="pointer-events-none absolute inset-0">
                {/* Subtle gray and brand color glows */}
                <div className="absolute left-1/2 top-[25%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-slate-100/50 blur-[150px]" />

                <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#E80112]/[0.02] blur-[140px]" />

                <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-slate-100/50 blur-[150px]" />

                {/* Technical grid - Dark gray lines */}
                <div
                    className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />

                {/* Center radial light - Brand Red tint */}
                <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,1,18,0.02)_0%,transparent_65%)]" />

                {/* Top/bottom fade - White to transparent */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* Removed outer container constraints to match Testimonials layout */}
            <div className="relative z-10">
                {/* =====================================================
                    NEW HEADER SECTION
                ====================================================== */}
                {/* Added standard responsive padding here */}
                <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E80112]/20 bg-[#E80112]/[0.05] px-4 py-2"
                    >
                        <Sparkles className="h-4 w-4 text-[#E80112]" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E80112]">
                            Global Partners
                        </span>
                    </motion.div>

                    <motion.h2
                        id="clients-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
                    >
                        Trusted by Innovators
                        <span className="block text-[#E80112]">Worldwide.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg"
                    >
                        We partner with ambitious startups and established enterprises to build scalable infrastructure and deliver exceptional digital experiences.
                    </motion.p>
                </div>

                {/* =====================================================
                    CLIENT SHOWCASE
                ====================================================== */}
                <div className="relative">
                    {/* Edge fade - White */}
                    <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-16 bg-gradient-to-r from-white via-white to-transparent md:w-32" />

                    <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-16 bg-gradient-to-l from-white via-white to-transparent md:w-32" />

                    <InfiniteMarquee speed={50}>
                        {clients?.map((client, idx) => {
                            const clientUrl = getClientUrl(client.url);

                            return (
                                <motion.article
                                    key={client.id ?? client.url ?? idx}
                                    whileHover={{ y: -8 }}
                                    transition={{
                                        duration: 0.35,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="group relative w-[310px] shrink-0 sm:w-[360px]"
                                >
                                    <a
                                        href={clientUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit ${client.name} website`}
                                        className="relative flex min-h-[330px] flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm outline-none transition-all duration-500 hover:border-[#E80112] hover:shadow-xl focus-visible:border-[#E80112] focus-visible:ring-2 focus-visible:ring-[#E80112]/30"
                                    >
                                        {/* Background glow - Very subtle brand red */}
                                        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E80112]/[0.03] blur-[80px] transition-all duration-700 group-hover:bg-[#E80112]/[0.06]" />

                                        <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-slate-100/50 blur-[70px] transition-all duration-700 group-hover:bg-slate-100/80" />

                                        {/* Subtle watermark */}
                                        <Globe2 className="pointer-events-none absolute -right-10 top-16 h-40 w-40 rotate-12 text-slate-900/[0.02] transition-all duration-700 group-hover:rotate-0 group-hover:text-[#E80112]/[0.05]" />

                                        {/* Top accent */}
                                        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E80112] to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

                                        {/* Card header */}
                                        <div className="relative z-10 flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-500 group-hover:border-[#E80112]/30 group-hover:bg-[#E80112]/[0.08]">
                                                <Globe2 className="h-5 w-5 text-slate-600 transition-colors duration-500 group-hover:text-[#E80112]" />
                                            </div>

                                            <div>
                                                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-500">
                                                    Partner
                                                </p>

                                                <p className="mt-1 text-[11px] font-medium text-slate-600 transition-colors group-hover:text-slate-900">
                                                    {client.tag}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Client information */}
                                        <div className="relative z-10 mt-auto">
                                            <div className="mb-4 flex items-center gap-3">
                                                <span className="h-px w-8 bg-[#E80112] transition-all duration-500 group-hover:w-12" />

                                                <span className="text-[9px] uppercase tracking-[0.24em] text-slate-500">
                                                    Client Work
                                                </span>
                                            </div>

                                            <h3 className="max-w-[270px] text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 transition-colors duration-500 group-hover:text-slate-900">
                                                {client.name}
                                            </h3>

                                            <p className="mt-3 text-xs font-medium tracking-wide text-slate-500 transition-colors duration-500 group-hover:text-slate-600">
                                                {getDomainOnly(client.url)}
                                            </p>
                                        </div>

                                        {/* ONLY LINK + ARROW */}
                                        <div className="relative z-10 mt-7 border-t border-slate-200 pt-5">
                                            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition-colors duration-300 group-hover:text-[#E80112]">
                                                <span>Visit website</span>

                                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                            </div>
                                        </div>
                                    </a>
                                </motion.article>
                            );
                        })}
                    </InfiniteMarquee>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;