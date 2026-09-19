import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "../../constants/testimonials";
import InfiniteMarquee from "../ui/InfiniteMarquee";

export function TestimonialsSection() {
    return (
        <section
            id="client-testimonials"
            aria-labelledby="testimonials-heading"
            className="relative overflow-hidden bg-white py-24 md:py-10"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                {/* Subtle gray and brand color glow */}
                <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-slate-100/50 blur-[140px]" />

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

            <div className="relative z-10">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-3xl px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E80112]/20 bg-[#E80112]/[0.05] px-4 py-2"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E80112] shadow-[0_0_10px_#E80112]" />

                        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E80112]">
                            What Our Clients Say
                        </span>
                    </motion.div>

                    <motion.h2
                        id="testimonials-heading"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl"
                    >
                        Trusted by Teams
                        <span className="block text-[#E80112]">
                            That Build & Scale
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 md:text-base"
                    >
                        From growing startups to established teams, our clients
                        trust us to simplify technology, improve workflows, and
                        build reliable solutions that support their business.
                    </motion.p>
                </div>

                {/* Divider */}
                <div className="mx-auto mb-10 flex max-w-7xl items-center gap-4 px-4">
                    <div className="h-px flex-1 bg-slate-200" />

                    <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500">
                        Client Stories
                    </span>

                    <div className="h-px flex-1 bg-slate-200" />
                </div>

                {/* Testimonials */}
                <div aria-label="Client testimonials" className="relative">
                    <InfiniteMarquee speed={60}>
                        {testimonials?.map((testimonial, index) => (
                            <article
                                key={testimonial.id ?? index}
                                className="group relative flex w-[350px] shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#E80112] hover:shadow-xl sm:w-[390px] md:w-[420px]"
                            >
                                {/* Top accent */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E80112] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Card header */}
                                <div className="mb-7 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E80112]/20 bg-[#E80112]/[0.08]">
                                            <Quote
                                                className="h-4 w-4 text-[#E80112]"
                                                strokeWidth={2}
                                            />
                                        </div>

                                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                                            Client Story
                                        </span>
                                    </div>

                                    <span className="font-mono text-xs text-slate-400">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Stars */}
                                <div className="mb-6 flex gap-1" aria-label="5 star rating">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <span
                                            key={starIndex}
                                            aria-hidden="true"
                                            className="text-[18px] leading-none text-yellow-500"
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="flex-grow">
                                    <p className="text-[15px] leading-7 text-slate-700">
                                        “{testimonial.quote}”
                                    </p>
                                </blockquote>

                                {/* Client */}
                                <footer className="mt-8 border-t border-slate-100 pt-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm font-bold text-slate-900">
                                            {testimonial.name
                                                ?.charAt(0)
                                                .toUpperCase()}
                                        </div>

                                        <div>
                                            <cite className="block not-italic text-sm font-semibold text-slate-900">
                                                {testimonial.name}
                                            </cite>

                                            <p className="mt-0.5 text-xs text-slate-600">
                                                {testimonial.role},{" "}
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </footer>
                            </article>
                        ))}
                    </InfiniteMarquee>
                </div>
            </div>
        </section>
    );
}