"use client";

import { GlowButton } from "@/components/ui/glow-button";
import { Section } from "@/components/ui/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <div ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Optimized Background - Subtle, premium pattern */}
            <div className="absolute inset-0 z-0 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white via-white to-blue-50/30" />
            </div>

            {/* Decorative Floating Elements (Abstract) */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-[10%] w-64 h-64 bg-purple-200/20 rounded-full blur-3xl z-0"
            />
            <motion.div
                animate={{ y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-[10%] w-96 h-96 bg-blue-200/20 rounded-full blur-3xl z-0"
            />

            <Section className="relative z-10 flex flex-col items-center text-center pt-12 md:pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-10">
                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 mb-4"
                    >
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white" />
                            <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white" />
                            <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white" />
                        </div>
                        <span className="text-slate-900 font-bold">Trusted by 50+ Founders</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 ml-1" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="relative"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-900 font-heading mb-6 relative z-10 leading-[0.9]">
                            Design. Build. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient-x">Dominate.</span>
                        </h1>
                        {/* Text Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl -z-10 rounded-full opacity-50" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-500 leading-relaxed font-normal"
                    >
                        We engineer <span className="text-slate-900 font-semibold">high-performance digital experiences</span> that turn visitors into loyal customers. No fluff, just results.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4 items-center justify-center w-full sm:w-auto"
                    >
                        <GlowButton className="w-full sm:w-auto text-lg py-6 px-10">
                            Build Your Empire <ArrowRight className="ml-2 w-5 h-5" />
                        </GlowButton>
                        <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 transition-all text-sm font-bold tracking-widest uppercase bg-white shadow-sm flex items-center justify-center gap-2">
                            View Work
                        </button>
                    </motion.div>

                    {/* Footer stats / Social Proof */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="pt-12 flex items-center gap-8 md:gap-16 text-slate-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    >
                        <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            Next.js Experts
                        </div>
                        <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            Custom Design
                        </div>
                        <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            SEO Optimized
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
