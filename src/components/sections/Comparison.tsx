"use client";

import { Section } from "@/components/ui/section";
import { Check, X, Zap } from "lucide-react";
import { motion } from "framer-motion";

const COMPARISON_POINTS = [
    { feature: "Delivery Time", alpha: "3 Days (Avg)", traditional: "4-8 Weeks" },
    { feature: "Cost Efficiency", alpha: "75% Lower", traditional: "Expensive Retainers" },
    { feature: "Technology", alpha: "AI-Powered", traditional: "Manual Coding" },
    { feature: "Design Quality", alpha: "Pixel Perfect", traditional: "Template Based" },
    { feature: "Revisions", alpha: "Rapid Implementation", traditional: "Slow Turnaround" },
    { feature: "Scalability", alpha: "Enterprise Ready", traditional: "Limited" },
];

export function Comparison() {
    return (
        <Section className="py-32">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-slate-900">
                    Why Choose <span className="text-primary">Alpha?</span>
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto text-lg">
                    The traditional agency model is broken. We fixed it with AI.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-6 text-sm font-bold uppercase tracking-widest text-slate-500">
                    <div className="col-span-1">Feature</div>
                    <div className="col-span-1 text-center text-red-400">Traditional Agency</div>
                    <div className="col-span-1 text-center text-primary">Alpha Build IT</div>
                </div>

                <div className="divide-y divide-slate-100">
                    {COMPARISON_POINTS.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="grid grid-cols-3 p-6 items-center hover:bg-slate-50/50 transition-colors group"
                        >
                            <div className="col-span-1 font-bold text-slate-700">{point.feature}</div>

                            <div className="col-span-1 text-center text-slate-400 flex flex-col items-center gap-1 group-hover:text-red-400/80 transition-colors">
                                <span className="font-medium">{point.traditional}</span>
                                <X className="w-4 h-4 opacity-50" />
                            </div>

                            <div className="col-span-1 text-center text-slate-900 flex flex-col items-center gap-1 relative">
                                <div className="absolute inset-0 bg-primary/5 rounded-lg -m-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="font-black relative z-10 text-lg flex items-center gap-2">
                                    {point.alpha}
                                    <Check className="w-5 h-5 text-primary" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Summary */}
                <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-8 text-center border-t border-primary/10">
                    <p className="text-slate-700 font-medium">
                        <Zap className="w-5 h-5 text-primary inline-block mr-2" />
                        Stop overpaying for slow results. <span className="font-bold text-slate-900">Switch to Alpha.</span>
                    </p>
                </div>
            </div>
        </Section>
    );
}
