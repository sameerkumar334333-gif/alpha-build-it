"use client";

import { Section } from "@/components/ui/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const steps = [
    { num: "01", title: "Discovery & Strategy", desc: "We dissect your business goals, user needs, and market position to architect a winning digital strategy." },
    { num: "02", title: "Design & Development", desc: "Our team crafts pixel-perfect designs and robust code, ensuring every interaction feels premium and responsive." },
    { num: "03", title: "Launch & Scale", desc: "We deploy your system with zero downtime and provide the analytics and support needed to scale aggressively." }
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <Section className="py-32 relative overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <motion.div
                            style={{ y }}
                            className="absolute top-1/2 -left-20 w-96 h-96 bg-blue-100/50 rounded-full blur-[80px] -z-10 mix-blend-multiply"
                        />
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 sticky top-32 text-slate-900">
                            The Road to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Perfection</span>
                        </h2>
                    </div>

                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative text-center md:text-left pl-8 pb-12 border-l-2 border-slate-200 last:border-0"
                            >
                                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary" />

                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 1 }}
                                >
                                    <div className="relative z-10 p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg group-hover:scale-110 transition-transform">
                                            {step.num}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                                        <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Connected Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="pl-8 pt-4 relative"
                        >
                            <div className="absolute -left-[3px] top-0 w-1 h-20 bg-gradient-to-b from-slate-200 to-primary/50" />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.location.href = '/book'}
                                className="w-full bg-slate-900 text-white rounded-2xl p-8 shadow-2xl flex items-center justify-between group overflow-hidden relative"
                            >
                                <div className="relative z-10 text-left">
                                    <h3 className="text-2xl font-bold mb-1">Start Your Build</h3>
                                    <p className="text-slate-400">Book your strategy call now</p>
                                </div>
                                <div className="relative z-10 bg-white/10 p-4 rounded-full">
                                    <motion.div
                                        animate={{ rotate: -45 }}
                                        className="origin-center"
                                    >
                                        <ArrowUpRight className="w-8 h-8 text-white" />
                                    </motion.div>
                                </div>

                                {/* Abstract BG */}
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-primary/90 z-0" />
                                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
