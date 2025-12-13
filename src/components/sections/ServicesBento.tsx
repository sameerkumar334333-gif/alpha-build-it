"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, ShoppingBag, Globe, BarChart3, Fingerprint, Layers } from "lucide-react";
import Image from "next/image";

const BentoCard = ({
    className,
    children,
    title,
    description,
    icon: Icon,
    delay = 0
}: {
    className?: string,
    children?: React.ReactNode,
    title: string,
    description: string,
    icon: any,
    delay?: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className={cn(
                "group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between",
                className
            )}
        >
            <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-slate-900 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-[90%]">{description}</p>
            </div>

            <div className="relative mt-8 min-h-[150px] rounded-xl overflow-hidden bg-slate-50 border border-slate-100 group-hover:border-primary/20 transition-colors">
                {children}
            </div>

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight className="text-primary w-6 h-6" />
            </div>
        </motion.div>
    )
}

export function ServicesBento() {
    return (
        <Section className="py-32">
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <span className="text-primary font-bold tracking-widest uppercase text-sm bg-primary/10 px-4 py-2 rounded-full">
                    Our Expertise
                </span>
                <h2 className="text-4xl md:text-6xl font-bold font-heading mt-6 mb-6 text-slate-900">
                    Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Growth</span>
                </h2>
                <p className="text-slate-500 text-lg">
                    We combine technical excellence with cutting-edge design to build platforms that dominate markets.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto h-auto md:h-[800px]">
                {/* Large Card - Web Dev */}
                <BentoCard
                    title="Web Development"
                    description="Custom Next.js applications built for speed, SEO, and scalability."
                    icon={Monitor}
                    className="md:col-span-2 md:row-span-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                        <div className="w-[80%] h-[80%] bg-white rounded-lg shadow-sm border border-slate-200 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                            <div className="absolute top-0 left-0 w-full h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                <div className="w-2 h-2 rounded-full bg-green-400" />
                            </div>
                            <div className="p-8 space-y-4 pt-12">
                                <div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse" />
                                <div className="h-32 w-full bg-slate-50 rounded border border-slate-100" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-20 bg-blue-50 rounded" />
                                    <div className="h-20 bg-purple-50 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                {/* Tall Card - E-Commerce */}
                <BentoCard
                    title="E-Commerce"
                    description="High-converting Shopify & Custom stores."
                    icon={ShoppingBag}
                    className="md:row-span-2 bg-gradient-to-b from-white to-orange-50/30"
                    delay={0.2}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center animate-pulse">
                            <ShoppingBag className="w-12 h-12 text-orange-600" />
                        </div>
                    </div>
                </BentoCard>

                {/* Medium - SEO */}
                <BentoCard
                    title="SEO & Performance"
                    description="Rank higher with optimized core vitals."
                    icon={BarChart3}
                    delay={0.3}
                >
                    <div className="absolute inset-0 bg-green-50/50 flex items-end p-6">
                        <div className="flex gap-2 items-end w-full h-full">
                            <div className="w-[20%] h-[40%] bg-green-200 rounded-t-sm" />
                            <div className="w-[20%] h-[60%] bg-green-300 rounded-t-sm" />
                            <div className="w-[20%] h-[80%] bg-green-400 rounded-t-sm" />
                            <div className="w-[20%] h-[50%] bg-green-300 rounded-t-sm" />
                            <div className="w-[20%] h-[90%] bg-green-500 rounded-t-sm shadow-sm" />
                        </div>
                    </div>
                </BentoCard>

                {/* Medium - Branding */}
                <BentoCard
                    title="Brand Identity"
                    description="Memorable visuals that stick."
                    icon={Fingerprint}
                    delay={0.4}
                >
                    <div className="absolute inset-0 bg-purple-50/50 flex items-center justify-center">
                        <Layers className="w-20 h-20 text-purple-200 group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                </BentoCard>

                {/* Wide - SaaS */}
                <BentoCard
                    title="SaaS Platforms"
                    description="Complex web apps simplified."
                    icon={Globe}
                    className="md:col-span-1"
                    delay={0.5}
                >
                    <div className="absolute -right-4 -bottom-4 opacity-20">
                        <Globe className="w-40 h-40 text-slate-900" />
                    </div>
                </BentoCard>
            </div>
        </Section>
    );
}
