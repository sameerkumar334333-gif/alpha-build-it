"use client";

import { GlowButton } from "@/components/ui/glow-button";
import { Section } from "@/components/ui/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Dynamic Background - Light Mode */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            >
                <div className="absolute inset-0 bg-white/60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

                {/* Colorful Floating Orbs */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200/50 rounded-full blur-[80px] mix-blend-multiply"
                />
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        rotate: [0, -10, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-[80px] mix-blend-multiply"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-[80px] mix-blend-multiply will-change-transform"
                />
            </motion.div>

            <Section className="relative z-10 flex flex-col items-center text-center space-y-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-900 font-heading mb-6 relative">
                        We Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Digital Empires</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-600 leading-relaxed font-normal"
                    >
                        Alpha Build IT creates ultra-premium websites and automated systems for agencies that demand <span className="text-slate-900 font-semibold underline decoration-primary/30 decoration-4 underline-offset-4">perfection</span>.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 pt-8"
                >
                    <GlowButton>Start Your Project</GlowButton>
                    <button className="px-8 py-3 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 transition-all text-sm font-bold tracking-widest uppercase bg-white shadow-sm">
                        Explore Services
                    </button>
                </motion.div>
            </Section>
        </div>
    );
}
