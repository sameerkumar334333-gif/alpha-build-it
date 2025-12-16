"use client";

import { Section } from "@/components/ui/section";
import { GlowButton } from "@/components/ui/glow-button";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Globe, Layout, Lock, Monitor, ShoppingBag, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Primedit Studio",
        category: "Full-Stack Startup",
        url: "https://primeditstudio.com",
        color: "bg-blue-100 text-blue-600",
        description: "A fully custom-built platform featuring secure authentication, real-time database, and dynamic order flow management.",
        tech: ["Next.js", "PostgreSQL", "Auth.js"],
        stats: "Full Custom Build"
    },
    {
        title: "Build with Kishan",
        category: "Business Consultancy",
        url: "https://buildwithkishan.com",
        color: "bg-purple-100 text-purple-600",
        description: "High-conversion consultancy funnel designed to capture leads and automate booking workflows.",
        tech: ["Funnel Design", "Automation", "Booking"],
        stats: "+200% Leads"
    },
    {
        title: "Wolf of Forex",
        category: "FinTech Platform",
        url: "https://wolfofforex.netlify.app",
        color: "bg-emerald-100 text-emerald-600",
        description: "Real-time forex signal dashboard with membership areas and live market data integration.",
        tech: ["Real-time Data", "Membership", "Dashboard"],
        stats: "Live Signals"
    }
];

export function SitePreview() {
    return (
        <Section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
                        <Monitor className="w-3 h-3" /> Digital Excellence
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-slate-900">
                        Our <span className="text-primary">Masterpieces</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it. Experience the speed, precision, and beauty of our live deployments.
                    </p>
                </div>

                <div className="flex flex-col gap-24">
                    {projects.map((project, i) => (
                        <div key={i} className="grid md:grid-cols-2 gap-12 items-center group">
                            {/* Browser Window Preview */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`relative ${i % 2 === 1 ? 'md:order-2' : ''}`}
                            >
                                {/* Browser Frame */}
                                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-300/50 bg-white aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-500">
                                    {/* Browser Toolbar */}
                                    <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-4">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/20" />
                                            <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/20" />
                                        </div>
                                        <div className="flex-1 bg-white h-6 rounded-md border border-slate-200 flex items-center px-3 text-[10px] text-slate-400 font-mono shadow-sm">
                                            <Lock className="w-2.5 h-2.5 mr-1.5 opacity-50" />
                                            {project.url.replace('https://', '')}
                                        </div>
                                    </div>

                                    {/* Content Area - Interactive Preview */}
                                    <div className="absolute inset-x-0 bottom-0 top-10 bg-slate-50 overflow-hidden group/frame">
                                        <div className="w-[1280px] h-[800px] absolute top-0 left-0 origin-top-left transform scale-[0.4] sm:scale-[0.5] md:scale-[0.4] lg:scale-[0.5] pointer-events-none select-none">
                                            <iframe
                                                src={project.url}
                                                className="w-full h-full border-0"
                                                title={`${project.title} Preview`}
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Visit Button Overlay */}
                                        <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                                            <GlowButton onClick={() => window.open(project.url, '_blank')} className="shadow-none bg-slate-900 text-white pointer-events-auto">
                                                Visit Live Site <ExternalLink className="ml-2 w-4 h-4" />
                                            </GlowButton>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Glow */}
                                <div className={`absolute -z-10 w-[120%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl ${project.color.replace('text', 'bg').replace('100', '300')}`} />
                            </motion.div>

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`${i % 2 === 1 ? 'md:order-1 md:text-right items-end' : ''} flex flex-col justify-center`}
                            >
                                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg w-fit mb-6 font-bold text-xs uppercase tracking-wide border ${project.color.replace('bg-', 'border-').replace('100', '200')} ${project.color} ${i % 2 === 1 ? 'ml-auto' : ''}`}>
                                    <Globe className="w-3.5 h-3.5" /> {project.category}
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 mb-6 leading-tight">
                                    {project.title}
                                </h3>

                                <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                                    {project.description}
                                </p>

                                <div className={`flex flex-wrap gap-2 mb-8 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <Link href="/book" className={`inline-flex items-center font-bold text-primary hover:text-primary/80 transition-colors text-lg group-hover:translate-x-2 transition-transform duration-300 ${i % 2 === 1 ? 'flex-row-reverse group-hover:-translate-x-2' : ''}`}>
                                    Get a similar build <ArrowUpRight className="ml-2 w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
