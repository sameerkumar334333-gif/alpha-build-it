"use client";

import { Section } from "@/components/ui/section";
import { motion, useScroll, useTransform } from "framer-motion";
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
                            className="relative text-center md:text-left"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 1 }}
                            >
                                <div className="text-6xl md:text-8xl font-black text-slate-100 mb-6 md:absolute md:-top-10 md:-left-6 md:z-0 select-none">
                                    {step.num}
                                </div>
                                <div className="relative z-10 p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
