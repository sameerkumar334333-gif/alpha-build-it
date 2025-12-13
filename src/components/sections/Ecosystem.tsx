"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Code2,
    Database,
    Zap,
    Layout,
    Smartphone,
    Globe,
    Cpu,
    ShieldCheck,
    Rocket,
    Search
} from "lucide-react";
import { useRef } from "react";

const ecosystemItems = [
    { icon: Code2, label: "Next.js Development", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Database, label: "Scalable Backend", color: "text-emerald-600", bg: "bg-emerald-50" },
    { icon: Zap, label: "Workflow Automation", color: "text-amber-600", bg: "bg-amber-50" },
    { icon: Layout, label: "UI/UX Design", color: "text-purple-600", bg: "bg-purple-50" },
    { icon: Smartphone, label: "Mobile First", color: "text-pink-600", bg: "bg-pink-50" },
    { icon: Globe, label: "Global CDN", color: "text-cyan-600", bg: "bg-cyan-50" },
    { icon: Cpu, label: "AI Integration", color: "text-indigo-600", bg: "bg-indigo-50" },
    { icon: ShieldCheck, label: "Enterprise Security", color: "text-slate-600", bg: "bg-slate-50" },
    { icon: Rocket, label: "High Performance", color: "text-orange-600", bg: "bg-orange-50" },
    { icon: Search, label: "SEO Optimized", color: "text-teal-600", bg: "bg-teal-50" },
];

export function Ecosystem() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const x2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);

    return (
        <Section className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-slate-900">
                    The <span className="text-primary">Ecosystem</span>
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto text-lg">
                    A seamless network of high-performance digital services.
                </p>
            </div>

            <div className="relative flex flex-col gap-8 -rotate-1 skew-y-1 scale-110">
                {/* Row 1 - Left to Right */}
                <div className="flex overflow-hidden">
                    <motion.div
                        style={{ x: x1 }}
                        className="flex gap-4 min-w-full"
                    >
                        {[...ecosystemItems, ...ecosystemItems].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 whitespace-nowrap group hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className={cn("p-2 rounded-lg", item.bg)}>
                                    <item.icon className={cn("w-5 h-5", item.color)} />
                                </div>
                                <span className="text-sm font-bold text-slate-700">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Right to Left */}
                <div className="flex overflow-hidden">
                    <motion.div
                        style={{ x: x2 }}
                        className="flex gap-4 min-w-full"
                    >
                        {[...ecosystemItems, ...ecosystemItems].reverse().map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50 whitespace-nowrap group hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className={cn("p-2 rounded-lg", item.bg)}>
                                    <item.icon className={cn("w-5 h-5", item.color)} />
                                </div>
                                <span className="text-sm font-bold text-slate-700">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
