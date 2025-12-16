"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Code2, Layout, Monitor, Search, ShoppingBag, Smartphone, Zap, Palette, Layers, MousePointer2 } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const ExpertCard = ({
    className,
    children,
    title,
    description,
    wide = false
}: {
    className?: string,
    children?: React.ReactNode,
    title: string,
    description: string,
    wide?: boolean
}) => {
    return (
        <div className={cn(
            "group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between h-[340px]",
            wide ? "md:col-span-2" : "md:col-span-1",
            className
        )}>
            {/* Content Header - positioned absolutely to not be pushed by content */}
            <div className="absolute top-0 left-0 w-full p-8 z-20 pointer-events-none">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[90%]">{description}</p>
            </div>

            {/* Visual Container - Full bleed */}
            <div className="absolute inset-x-0 bottom-0 top-[100px] z-10 overflow-hidden">
                {children}
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute top-0 left-0 w-full h-[140px] bg-gradient-to-b from-white via-white/95 to-transparent z-10 pointer-events-none" />
        </div>
    )
}

export function ServicesBento() {
    const [typingText, setTypingText] = useState("");
    const fullText = "<Hero />";
    const [cartItems, setCartItems] = useState(1);
    const [score, setScore] = useState(0);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypingText(fullText.substring(0, i));
            i = (i + 1) % (fullText.length + 5);
        }, 300);
        return () => clearInterval(interval);
    }, []);

    // Simulate animated score for SEO card
    useEffect(() => {
        const interval = setInterval(() => {
            setScore(prev => prev < 100 ? prev + 1 : 100);
        }, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <Section className="py-24 relative overflow-hidden">
            {/* Energetic Background for Services */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mt-6 mb-4 text-slate-900">
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Growth</span>
                    </h2>
                    <p className="text-slate-500">
                        We build digital assets that look good and perform better.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* 1. Web Development (VS Code + Browser) - Light Theme */}
                    <ExpertCard
                        wide
                        title="Custom Web Development"
                        description="Pixel-perfect Next.js applications that load instantly and rank high."
                        className="bg-white border-slate-200"
                    >
                        <div className="absolute inset-x-8 bottom-0 top-0 flex gap-4 group-hover:translate-y-[-10px] transition-transform duration-500 pt-16">
                            {/* VS Code Window - Light Theme */}
                            <div className="w-1/2 bg-white rounded-t-xl shadow-2xl border border-slate-200 flex flex-col font-mono text-[10px] sm:text-xs overflow-hidden">
                                {/* Tabs */}
                                <div className="flex bg-slate-50 border-b border-slate-200">
                                    <div className="px-4 py-2 bg-white text-slate-700 border-t-2 border-primary flex items-center gap-2">
                                        <span className="text-blue-500">⚛</span> page.tsx
                                    </div>
                                </div>
                                <div className="p-4 text-slate-600 space-y-1 bg-white">
                                    <div><span className="text-purple-600">export</span> <span className="text-blue-600">default</span> <span className="text-red-500">function</span> <span className="text-yellow-600">Home</span>() {"{"}</div>
                                    <div className="pl-4"><span className="text-purple-600">return</span> (</div>
                                    <div className="pl-8 text-slate-400">&lt;<span className="text-green-600">main</span>&gt;</div>
                                    <div className="pl-12 text-slate-800 border-r-2 border-slate-300 w-fit animate-pulse">{typingText}</div>
                                    <div className="pl-8 text-slate-400">&lt;/<span className="text-green-600">main</span>&gt;</div>
                                    <div className="pl-4">)</div>
                                    <div>{"}"}</div>
                                </div>
                            </div>

                            {/* Browser Preview Window */}
                            <div className="w-1/2 bg-slate-50 rounded-t-xl shadow-2xl border border-slate-200 mt-8 flex flex-col overflow-hidden relative">
                                <div className="h-6 bg-white border-b border-slate-200 flex items-center px-2">
                                    <div className="w-2 h-2 rounded-full bg-slate-200 mr-1" />
                                    <div className="w-2 h-2 rounded-full bg-slate-200 mr-1" />
                                </div>
                                <div className="p-4 bg-slate-50/50 flex-1 flex flex-col items-center justify-center">
                                    <h1 className="text-2xl font-bold text-slate-900 mb-2">Hello.</h1>
                                    <div className="w-full h-24 bg-blue-500/10 rounded-lg animate-pulse" />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-4 right-4 bg-white text-green-600 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm border border-slate-100 flex items-center gap-1">
                                    <Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" /> Fast
                                </div>
                            </div>
                        </div>
                    </ExpertCard>

                    {/* 2. E-Commerce (Shopify Style) */}
                    <ExpertCard
                        title="E-Commerce Stores"
                        description="High-converting Shopify & Custom storefronts."
                    >
                        <div className="absolute inset-x-6 bottom-[-20px] top-6 bg-white rounded-t-xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex flex-col group-hover:translate-y-[-5px] transition-transform duration-500">
                            {/* Fake Store Header */}
                            <div className="h-12 border-b border-slate-100 flex items-center justify-between px-4">
                                <div className="font-bold text-sm tracking-tighter">STORE.</div>
                                <div className="flex gap-3">
                                    <Search className="w-4 h-4 text-slate-400" />
                                    <div className="relative">
                                        <ShoppingBag className="w-4 h-4 text-slate-900" />
                                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[8px] flex items-center justify-center text-white">{cartItems}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Product View */}
                            <div className="flex-1 p-4 flex gap-4">
                                <div className="w-1/2 bg-slate-100 rounded-lg relative overflow-hidden group/product">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                        <Smartphone className="w-12 h-12" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-2 text-white text-[10px] font-mono transform translate-y-full group-hover/product:translate-y-0 transition-transform">
                                        Best Seller
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-col justify-center space-y-2">
                                    <div className="h-4 w-3/4 bg-slate-100 rounded" />
                                    <div className="h-3 w-1/2 bg-slate-50 rounded" />
                                    <div className="h-6 w-1/3 bg-slate-900 rounded mt-2" />
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCartItems(c => c + 1);
                                        }}
                                        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold py-2 rounded transition-colors"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ExpertCard>

                    {/* 3. SEO (Performance Dashboard) */}
                    <ExpertCard
                        title="SEO & Performance"
                        description="Google Core Vitals optimized for top ranking."
                    >
                        <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center p-6 pt-12">
                            {/* Circle Score */}
                            <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                                {/* Background Circle */}
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-200" />
                                    <motion.circle
                                        cx="64" cy="64" r="56"
                                        stroke="currentColor" strokeWidth="8" fill="transparent"
                                        className="text-green-500"
                                        strokeDasharray="351.86"
                                        strokeDashoffset={351.86 - (351.86 * score) / 100}
                                        initial={{ strokeDashoffset: 351.86 }}
                                        animate={{ strokeDashoffset: 351.86 - (351.86 * score) / 100 }}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-4xl font-black text-slate-900">{score}</span>
                                    <span className="text-xs font-bold text-green-600 uppercase">Performance</span>
                                </div>
                            </div>

                            {/* Metrics Row */}
                            <div className="flex gap-4 w-full justify-center">
                                <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm border border-slate-100 w-20">
                                    <span className="text-[10px] text-slate-400 font-bold">LCP</span>
                                    <span className="text-xs font-bold text-green-600">0.8s</span>
                                </div>
                                <div className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm border border-slate-100 w-20">
                                    <span className="text-[10px] text-slate-400 font-bold">CLS</span>
                                    <span className="text-xs font-bold text-green-600">0.00</span>
                                </div>
                            </div>
                        </div>
                    </ExpertCard>

                    {/* 4. Branding (Visual Identity System) */}
                    <ExpertCard
                        title="Brand Systems"
                        description="Cohesive visual identities that tell your story."
                        wide
                    >
                        <div className="absolute inset-0 bg-slate-50 flex items-center justify-center overflow-hidden">
                            <div className="w-[120%] h-full grid grid-cols-[1.5fr_1fr] gap-4 p-8 opacity-90 group-hover:scale-[1.02] transition-transform duration-700">

                                {/* Left: Website Mockup */}
                                <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col">
                                    <div className="h-6 bg-slate-100 border-b border-slate-200 flex items-center gap-1.5 px-3">
                                        <div className="w-2 h-2 rounded-full bg-slate-300" />
                                        <div className="w-2 h-2 rounded-full bg-slate-300" />
                                    </div>
                                    <div className="flex-1 bg-white p-6 relative">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-600 mb-4" /> {/* Logo */}
                                        <div className="h-4 w-3/4 bg-slate-100 rounded mb-2" />
                                        <div className="h-4 w-1/2 bg-slate-100 rounded mb-6" />
                                        <div className="flex gap-2">
                                            <div className="h-8 w-24 bg-indigo-600 rounded-md" />
                                            <div className="h-8 w-24 bg-indigo-50 rounded-md border border-indigo-100" />
                                        </div>
                                        {/* Floating "Brand" elements */}
                                        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl" />
                                    </div>
                                </div>

                                {/* Right: Asset Board */}
                                <div className="flex flex-col gap-3">
                                    {/* Color Palette */}
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Palette</span>
                                        <div className="flex gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-indigo-600 shadow-sm" />
                                            <div className="w-8 h-8 rounded-lg bg-purple-500 shadow-sm" />
                                            <div className="w-8 h-8 rounded-lg bg-orange-400 shadow-sm" />
                                            <div className="w-8 h-8 rounded-lg bg-slate-900 shadow-sm" />
                                        </div>
                                    </div>
                                    {/* Typography */}
                                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 flex-1">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Typography</span>
                                        <div className="space-y-1">
                                            <div className="text-xl font-bold text-slate-900">Aa</div>
                                            <div className="text-xs text-slate-500">Inter / Sans-serif</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </ExpertCard>

                </div>
            </div>
        </Section>
    );
}
