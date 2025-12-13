"use client";

import { Section } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, ShieldCheck, Zap } from "lucide-react";
import { useRef } from "react";

const features = [
    {
        icon: Rocket,
        title: "Velocity & Precision",
        description: "We don't just build fast; we build correctly. Our systems are engineered for speed from the ground up, ensuring instant load times.",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        icon: ShieldCheck,
        title: "Agency-Grade Reliability",
        description: "No freelancers ghosting you. We operate as a structured agency with dedicated support and professional workflows.",
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        icon: Zap,
        title: "Conversion Focused",
        description: "Pretty websites don't sell. Smart ones do. Every pixel we place is calculated to guide your user towards the 'Buy' button.",
        color: "text-orange-600",
        bg: "bg-orange-50"
    }
];

export function WhyUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <Section className="py-32 relative overflow-hidden bg-slate-50/50" ref={containerRef}>
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.div
                        style={{ scale }}
                        className="mb-8"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold font-heading mb-2 leading-tight text-slate-900">
                            Stop Playing
                        </h2>
                        <motion.div
                            className="text-6xl md:text-8xl font-black italic tracking-tighter text-slate-300 opacity-80 line-through decoration-red-500 decoration-4"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 0.8, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Small.
                        </motion.div>
                        <motion.div
                            className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-blue-600 mt-4"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            GO BIG.
                        </motion.div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-slate-600 mb-8 border-l-4 border-primary pl-6"
                    >
                        Most agencies rely on outdated templates and slow freelancers. We build digital infrastructure that scales with your ambition. Your brand deserves a platform that commands authority.
                    </motion.p>
                </div>

                <div className="grid gap-4">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.2, type: "spring", stiffness: 50 }}
                        >
                            <div className="p-6 flex gap-4 items-start bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className={`p-3 rounded-lg ${feature.bg} ${feature.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
