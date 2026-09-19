import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { faqs } from "../../constants/faqs";

export function FAQSection() {
    const [activeIdx, setActiveIdx] = useState<number | null>(0);

    const toggleFAQ = (idx: number) => {
        setActiveIdx((current) => (current === idx ? null : idx));
    };

    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="relative overflow-hidden bg-white py-24 md:py-28"
        >
            {/* =====================================================
                BACKGROUND
            ====================================================== */}
            <div className="pointer-events-none absolute inset-0">
                {/* Subtle gray and brand color glow */}
                <div className="absolute -left-48 top-10 h-[420px] w-[420px] rounded-full bg-slate-100/50 blur-[140px] sm:h-[500px] sm:w-[500px]" />
                <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#E80112]/[0.04] blur-[140px] sm:h-[500px] sm:w-[500px]" />

                {/* Technical grid - Dark gray lines */}
                <div
                    className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:items-start lg:gap-16 xl:grid-cols-[0.85fr_1.45fr] xl:gap-24">
                    {/* =================================================
                        LEFT CONTENT
                    ================================================== */}
                    <div className="lg:sticky lg:top-24">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E80112]/20 bg-[#E80112]/[0.05] px-4 py-2"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#E80112] shadow-[0_0_10px_#E80112]" />

                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E80112]">
                                FAQ
                            </span>
                        </motion.div>

                        <motion.h2
                            id="faq-heading"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl"
                        >
                            Questions before
                            <span className="block text-[#E80112]">
                                we get started.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.1,
                            }}
                            className="mt-6 max-w-md text-sm leading-7 text-slate-600 sm:text-base"
                        >
                            Find answers to common questions about our
                            services, development process, cloud solutions,
                            DevOps, and ongoing technology support.
                        </motion.p>

                        {/* Contact card */}
                        <motion.a
                            href="contact"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                            }}
                            className="group mt-8 flex w-full max-w-md items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-[#E80112]/30 hover:bg-[#E80112]/[0.05] sm:mt-10 sm:p-5"
                        >
                            <div className="min-w-0 pr-4">
                                <p className="text-sm font-medium text-slate-900">
                                    Have a specific question?
                                </p>

                                <p className="mt-1 text-[11px] text-slate-500">
                                    Talk directly with our team
                                </p>
                            </div>

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-hover:border-[#E80112]/30 group-hover:bg-[#E80112]/10 sm:h-10 sm:w-10">
                                <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E80112]" />
                            </div>
                        </motion.a>

                        <div className="mt-10 hidden items-center gap-3 lg:flex">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#E80112] shadow-[0_0_10px_#E80112]" />

                            <span className="text-[9px] uppercase tracking-[0.22em] text-slate-500">
                                Clear answers. No unnecessary complexity.
                            </span>
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT FAQ
                    ================================================== */}
                    <div className="min-w-0">
                        <div className="mb-4 flex items-center border-b border-slate-200 pb-4 sm:mb-5">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                                Common Questions
                            </span>
                        </div>

                        {/* =================================================
                            SCROLLABLE FAQ AREA
                        ================================================== */}
                        <div
                            className="
                                faq-scroll
                                max-h-[600px]
                                overflow-y-auto
                                pr-1
                                lg:pr-3
                            "
                        >
                            <div className="divide-y divide-slate-200">
                                {faqs?.map((item, idx) => {
                                    const isOpen = activeIdx === idx;

                                    return (
                                        <motion.article
                                            key={idx}
                                            initial={{
                                                opacity: 0,
                                                y: 12,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.1,
                                            }}
                                            transition={{
                                                duration: 0.4,
                                                delay: Math.min(
                                                    idx * 0.035,
                                                    0.2
                                                ),
                                            }}
                                            className={`relative transition-colors duration-300 ${
                                                isOpen
                                                    ? "bg-[#E80112]/[0.02]"
                                                    : ""
                                            }`}
                                        >
                                            {/* Active indicator */}
                                            <div
                                                className={`absolute bottom-0 left-0 top-0 w-px bg-[#E80112] transition-opacity duration-300 ${
                                                    isOpen
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                }`}
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    toggleFAQ(idx)
                                                }
                                                aria-expanded={isOpen}
                                                aria-controls={`faq-answer-${idx}`}
                                                className="group flex w-full items-start gap-3 py-5 text-left outline-none sm:gap-5 sm:py-6 md:gap-6"
                                            >
                                                {/* Number */}
                                                <span
                                                    className={`mt-1 w-5 shrink-0 font-mono text-[10px] transition-colors duration-300 sm:w-6 ${
                                                        isOpen
                                                            ? "text-[#E80112]"
                                                            : "text-slate-400 group-hover:text-slate-600"
                                                    }`}
                                                >
                                                    {String(idx + 1).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>

                                                {/* Question */}
                                                <span
                                                    className={`flex-1 pr-1 text-sm font-medium leading-6 transition-colors duration-300 sm:pr-4 sm:text-[15px] md:text-base ${
                                                        isOpen
                                                            ? "text-slate-900"
                                                            : "text-slate-600 group-hover:text-slate-900"
                                                    }`}
                                                >
                                                    {item.question}
                                                </span>

                                                {/* Chevron */}
                                                <span
                                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-9 sm:w-9 ${
                                                        isOpen
                                                            ? "border-[#E80112]/30 bg-[#E80112]/10"
                                                            : "border-slate-200 bg-slate-50 group-hover:border-slate-300"
                                                    }`}
                                                >
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-all duration-300 ${
                                                            isOpen
                                                                ? "rotate-180 text-[#E80112]"
                                                                : "text-slate-400"
                                                        }`}
                                                    />
                                                </span>
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        id={`faq-answer-${idx}`}
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1,
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.3,
                                                            ease: [
                                                                0.4,
                                                                0,
                                                                0.2,
                                                                1,
                                                            ],
                                                        }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pb-6 pl-8 pr-3 sm:pb-7 sm:pl-[3.25rem] sm:pr-12 md:pl-[4rem]">
                                                            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                                                                {item.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.article>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Scroll hint - only useful when list is long */}
                        {faqs && faqs.length > 6 && (
                            <div className="pointer-events-none mt-3 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.22em] text-slate-500">
                                <span className="h-px w-5 bg-slate-200" />
                                Scroll for more
                                <span className="h-px w-5 bg-slate-200" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Custom scrollbar */}
            <style>{`
                .faq-scroll {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(232, 1, 18, 0.35) transparent;
                }

                .faq-scroll::-webkit-scrollbar {
                    width: 4px;
                }

                .faq-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }

                .faq-scroll::-webkit-scrollbar-thumb {
                    background: rgba(232, 1, 18, 0.35);
                    border-radius: 999px;
                }

                .faq-scroll::-webkit-scrollbar-thumb:hover {
                    background: rgba(232, 1, 18, 0.6);
                }

                @media (max-width: 1023px) {
                    .faq-scroll {
                        max-height: none;
                        overflow-y: visible;
                        padding-right: 0;
                    }
                }
            `}</style>
        </section>
    );
}