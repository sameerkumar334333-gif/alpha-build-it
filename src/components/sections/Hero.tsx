"use client";

import { GlowButton } from "@/components/ui/glow-button";
import { Section } from "@/components/ui/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Zap, Activity, Code2, Globe } from "lucide-react";
import { useRef } from "react";
import React from "react";

// --- Internal Components ---

const StatCard = ({ icon: Icon, label, value, color, delay, x, y }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, x: x + 20, y: y + 20 }}
        animate={{
            opacity: 1,
            scale: 1,
            x: x,
            y: y,
            rotateX: 10,
            rotateY: -10,
        }}
        whileHover={{
            scale: 1.05,
            rotateX: 0,
            rotateY: 0,
            zIndex: 50,
            transition: { duration: 0.3 }
        }}
        transition={{ duration: 0.8, delay, type: "spring" }}
        className={`absolute w-64 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-4 z-10 select-none hover:shadow-2xl hover:border-${color}-200/50 transition-colors cursor-default`}
        style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
        }}
    >
        <div className={`w-12 h-12 rounded-lg bg-${color}-50 flex items-center justify-center`}>
            <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <div>
            <div className="text-sm text-slate-500 font-medium">{label}</div>
            <div className="text-xl font-bold text-slate-800">{value}</div>
        </div>
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
);

const BackgroundMesh = () => (
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none z-0">
        <motion.div
            animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
            }}
            transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-full h-full bg-gradient-to-tr from-blue-400 via-purple-400 to-indigo-400 rounded-full blur-[100px]"
        />
    </div>
);

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <div ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20 lg:pt-0">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-blue-50/20" />
            </div>

            <Section className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col items-start text-left space-y-8 z-20">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Alpha Build IT v2.0
                        </motion.div>

                        {/* Headline - Staggered Reveal */}
                        <div className="space-y-2">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 font-heading leading-[0.9]"
                            >
                                We Don't <br />
                                Just Build.
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-heading leading-[0.9]"
                            >
                                We Evolve.
                            </motion.h1>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed"
                        >
                            Transform your vision into a <span className="text-slate-900 font-semibold">high-performance digital empire</span>.
                            We blend elite design with engineering precision to scale your business.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
                        >
                            <GlowButton className="text-lg py-6 px-8 w-full sm:w-auto">
                                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                            </GlowButton>
                            <button className="px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                                View Case Studies
                            </button>
                        </motion.div>

                        {/* Social Proof Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="pt-8 flex items-center gap-4 text-sm text-slate-400 font-medium"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-${i * 100 + 200}`} />
                                ))}
                            </div>
                            <p>Trusted by <span className="text-slate-700">50+ Founders</span> worldwide.</p>
                        </motion.div>
                    </div>

                    {/* Right Column: Isometric 3D Elements */}
                    <div className="relative h-[600px] w-full hidden lg:block z-10 perspective-[2000px]">
                        <BackgroundMesh />

                        <motion.div style={{ y }} className="relative w-full h-full flex items-center justify-center">

                            {/* Card 1: Revenue Graph (Main) */}
                            <StatCard
                                icon={TrendingUp}
                                label="Monthly Revenue"
                                value="$124,500"
                                color="emerald"
                                delay={0.4}
                                x={-40}
                                y={-80}
                            />

                            {/* Card 2: Performance (Right) */}
                            <StatCard
                                icon={Zap}
                                label="Performance Score"
                                value="100/100"
                                color="amber"
                                delay={0.6}
                                x={80}
                                y={20}
                            />

                            {/* Card 3: Security (Bottom Left) */}
                            <StatCard
                                icon={Shield}
                                label="Security Status"
                                value="Enterprise Grade"
                                color="blue"
                                delay={0.8}
                                x={-60}
                                y={120}
                            />

                            {/* Card 4: Global (Top Right - Far) */}
                            <StatCard
                                icon={Globe}
                                label="Active Regions"
                                value="Global Scale"
                                color="purple"
                                delay={1.0}
                                x={100}
                                y={-140}
                            />

                        </motion.div>
                    </div>

                </div>
            </Section>
        </div>
    );
}
