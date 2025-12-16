"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
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
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-slate-900">
                    The <span className="text-primary">Ecosystem</span>
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto text-lg">
                    A seamless network of high-performance digital services.
                </p>
            </div>

            <div className="flex flex-col gap-8 w-full">
                {/* Row 1 */}
                <div className="flex overflow-hidden group w-full">
                    <div className="flex gap-4 min-w-full animate-marquee px-4">
                        {[...ecosystemItems, ...ecosystemItems, ...ecosystemItems, ...ecosystemItems].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white shadow-md w-max flex-shrink-0"
                            >
                                <div className={cn("p-2 rounded-lg", item.bg)}>
                                    <item.icon className={cn("w-5 h-5", item.color)} />
                                </div>
                                <span className="text-sm font-bold text-slate-700">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 (Reverse) */}
                <div className="flex overflow-hidden group w-full">
                    <div className="flex gap-4 min-w-full animate-marquee-reverse px-4">
                        {[...ecosystemItems, ...ecosystemItems, ...ecosystemItems, ...ecosystemItems].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-100 bg-white shadow-md w-max flex-shrink-0"
                            >
                                <div className={cn("p-2 rounded-lg", item.bg)}>
                                    <item.icon className={cn("w-5 h-5", item.color)} />
                                </div>
                                <span className="text-sm font-bold text-slate-700">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
