"use client";

import { GlowButton } from "@/components/ui/glow-button";
import { Section } from "@/components/ui/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Code, Rocket, Award } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function FounderBio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <Section className="py-32 overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
                            <Brain className="w-3 h-3" /> The Architect
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                            Meet <span className="text-primary">Sameer.</span> <br />
                            AI Expert & Strategist.
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            In a world of slow agencies and overpriced developers, I built Alpha Build IT to break the mold.
                            By leveraging <span className="font-bold text-slate-900">Custom AI Agents</span> and automated workflows,
                            I deliver enterprise-grade digital infrastructure at a fraction of the time and cost.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-3xl font-black text-slate-900 mb-1">100+</div>
                                <div className="text-sm text-slate-500 font-medium">Projects Shipped</div>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-3xl font-black text-slate-900 mb-1">AI-First</div>
                                <div className="text-sm text-slate-500 font-medium">Development Approach</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium flex items-center gap-2">
                                <Code className="w-4 h-4" /> Full Stack Dev
                            </span>
                            <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium flex items-center gap-2">
                                <Award className="w-4 h-4" /> Business Strategy
                            </span>
                            <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-sm font-medium flex items-center gap-2">
                                <Rocket className="w-4 h-4" /> Growth Hacking
                            </span>
                        </div>
                    </div>

                    {/* Visual / Image */}
                    <motion.div
                        style={{ y }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-200 border border-slate-100 shadow-2xl shadow-slate-200">
                            <Image
                                src="/roshan2.jpg"
                                alt="Sameer - Founder of Alpha Build IT"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Subtle Overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl shadow-lg">
                                <p className="font-heading font-bold text-slate-900 text-lg">"We don't just write code. We write the future."</p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
