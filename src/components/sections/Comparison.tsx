"use client";

import { Section } from "@/components/ui/section";
import { Check, X, Zap, ShieldAlert, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const COMPARISON_POINTS = [
    { feature: "Delivery Time", alpha: "3 Days (Avg)", traditional: "4-8 Weeks" },
    { feature: "Cost (Standard Build)", alpha: "₹25,000", traditional: "₹1,00,000+" },
    { feature: "Technology", alpha: "Next.js + AI", traditional: "Wordpress / PHP" },
    { feature: "Design Quality", alpha: "Pixel Perfect", traditional: "Template Based" },
    { feature: "Revisions", alpha: "Rapid Changes", traditional: "Hourly Billing" },
    { feature: "Scalability", alpha: "Enterprise Ready", traditional: "Limited Growth" },
];

export function Comparison() {
    return (
        <Section className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="text-center mb-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
                    <Zap className="w-3 h-3" /> The Alpha Advantage
                </div>
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-slate-900">
                    Old Way <span className="text-slate-300 px-4">vs</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary">New Era</span>
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto text-lg">
                    Stop compromising. See why leading founders are switching to our AI-integrated workflow.
                </p>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Headers */}
                <div className="grid grid-cols-12 mb-8 px-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                    <div className="col-span-4 pl-4">Traditional Agency</div>
                    <div className="col-span-4 text-center">Comparison</div>
                    <div className="col-span-4 text-right pr-4 text-primary">Alpha Build IT</div>
                </div>

                <div className="space-y-4">
                    {COMPARISON_POINTS.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.01 }}
                            className="group relative grid grid-cols-12 items-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                            {/* Traditional (Left) */}
                            <div className="col-span-4 flex items-center gap-3 text-slate-400 group-hover:text-red-400/70 transition-colors pl-4">
                                <X className="w-5 h-5 opacity-50 shrink-0" />
                                <span className="font-medium decoration-slate-300/50 decoration-2 group-hover:line-through transition-all">{point.traditional}</span>
                            </div>

                            {/* Feature (Center) */}
                            <div className="col-span-4 text-center">
                                <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-xs font-bold border border-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all">
                                    {point.feature}
                                </span>
                            </div>

                            {/* Alpha (Right) */}
                            <div className="col-span-4 flex items-center justify-end gap-3 text-slate-900 pr-4">
                                <div className="flex flex-col items-end">
                                    <span className="font-bold text-lg group-hover:text-primary transition-colors">{point.alpha}</span>
                                    {point.feature.includes("Cost") && (
                                        <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">
                                            75% Lower Price Guaranteed
                                        </span>
                                    )}
                                </div>
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Check className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Premium Callout Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 mx-4 md:mx-0 p-1 rounded-2xl bg-gradient-to-r from-red-200 via-slate-200 to-blue-200 opacity-80"
                >
                    <div className="bg-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                                <ShieldAlert className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Don't settle for "Good Enough"</h4>
                                <p className="text-slate-500 text-sm">Most agencies outsource. We engineer in-house.</p>
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-slate-100" />

                        <div className="flex items-center gap-4 relative z-10">
                            <div>
                                <h4 className="font-bold text-right text-slate-900">Experience the difference</h4>
                                <p className="text-slate-500 text-sm text-right">Join the top 1% of digital brands.</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                                <Rocket className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </Section>
    );
}
