import { useEffect, useRef, useState } from "react";
import { Cloud, GitBranch, Container, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ORBIT_ICONS = [
    { Icon: Cloud, label: "Docker" },
    { Icon: GitBranch, label: "Terraform" },
    { Icon: Container, label: "Jenkins" },
    { Icon: Code2, label: "Kubernetes" },
];

const TECH_STACK = [
    "Azure", "GCP", "Docker", "Kubernetes", "Jenkins",
    "Terraform", "Ansible", "GitHub Actions", "ArgoCD", "AWS",
];

const STATS = [
    { value: "500+", label: "PROJECTS" },
    { value: "98%", label: "UPTIME" },
    { value: "50+", label: "CLIENTS" },
    { value: "24/7", label: "SUPPORT" },
];

export default function HeroSection() {
    const navigate = useNavigate();
    const [angle, setAngle] = useState(0);
    const rafRef = useRef<number>(0);
    const lastRef = useRef<number>(0);

    useEffect(() => {
        const tick = (now: number) => {
            const dt = (now - (lastRef.current || now)) / 1000;
            lastRef.current = now;
            // Set the speed of the orbit here
            setAngle((a) => (a + (360 / 40) * dt) % 360);
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    // Increased Radius to overlap the header and text
    const RADIUS = 450;

    return (
        <section className="relative min-h-screen bg-[#0a0a0a] flex flex-col overflow-hidden" id="brand">

            {/* Red radial glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-[800px] h-[800px] rounded-full bg-red-600/5 blur-[120px]" />
            </div>

            {/* Main content container */}
            <div className="relative flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-32">

                {/* Orbit Ring - Now using the same RADIUS for perfect alignment */}
                <div
                    className="absolute rounded-full border border-dashed border-red-800/20 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ width: RADIUS * 2, height: RADIUS * 2 }}
                />

                {/* Orbiting icons - Positioned exactly ON the dashed line */}
                {ORBIT_ICONS.map(({ Icon, label }, i) => {
                    const deg = ((i * 90 + angle) * Math.PI) / 180;
                    const x = Math.cos(deg) * RADIUS;
                    const y = Math.sin(deg) * RADIUS;
                    return (
                        <div
                            key={label}
                            className="absolute w-14 h-14 rounded-xl bg-black border border-red-700/40 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.3)] backdrop-blur-md z-10 transition-all hover:scale-110"
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                            }}
                        >
                            <Icon size={24} className="text-red-500" />
                        </div>
                    );
                })}

                {/* Hero text */}
                <div className="relative z-30 text-center max-w-5xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-5xl leading-tight tracking-tight mb-6">
                        Transform Your<br />
                        Infrastructure with{" "}
                        <span className="text-red-500">DevOps</span>
                        <br />Excellence
                    </h1>

                    <p className="text-white/60 text-base md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
                        6+ years of certified DevOps experience since 2021. Scalable,
                        secure, and reliable cloud solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <button 
                        onClick={() => navigate("/contact")}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(220,38,38,0.5)]">
                            Get Free Consultation
                        </button>
            
                    </div>
                </div>

                {/* Stats */}
                <div className="relative z-10 container mx-auto px-4 py-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {STATS.map(({ value, label }) => (
                            <div key={label} className="flex flex-col items-center">
                                <span className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {value}
                                </span>
                                <span className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-14 bg-red-600 flex items-center overflow-hidden z-30">
                <motion.div
                    className="flex items-center"
                    animate={{
                        x: ["0%", "-33.33%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-6 whitespace-nowrap text-white text-lg font-semibold tracking-tighter px-8"
                        >
                            {tech}
                            <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}