"use client";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Instagram, Star, TrendingUp } from "lucide-react";
import Image from "next/image";

const clients = [
    {
        name: "Build with Kishan",
        role: "Business Strategist",
        followers: "191K",
        platform: "Instagram",
        image: "/avatars/kishan.jpg", // Placeholder, will need real image or fallback
        quote: "Alpha Build IT transformed my digital presence. The AI-driven automation saved us hundreds of hours.",
        color: "bg-purple-50 text-purple-600",
        stats: "+300% Engagement"
    },
    {
        name: "Trade Like Beast",
        role: "Crypto Forex Trader",
        followers: "165K",
        platform: "Instagram",
        image: "/avatars/beast.jpg",
        quote: "Fastest delivery I've ever seen. They built a complex trading dashboard in 3 days that others said would take weeks.",
        color: "bg-blue-50 text-blue-600",
        stats: "3 Day Delivery"
    },
    {
        name: "Trader Roshan",
        role: "Forex Trader",
        followers: "78K",
        platform: "Instagram",
        image: "/avatars/roshan.jpg",
        quote: "Professional, clean, and high-converting. My mentorship bookings skyrocketed after the new site launch.",
        color: "bg-green-50 text-green-600",
        stats: "2x Conversion"
    }
];

export function Testimonials() {
    return (
        <Section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-slate-900">
                    Trusted by <span className="text-primary">Industry Giants</span>
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                    We build for leaders who demand excellence. Join the elite network of brands powered by Alpha Build IT.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {clients.map((client, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${client.color}`}>
                                {client.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-900 leading-tight">{client.name}</h3>
                                <p className="text-slate-500 text-sm flex items-center gap-1">
                                    <Instagram className="w-3 h-3" /> {client.followers} Followers
                                </p>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="mb-6 relative">
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mb-2" />
                            <p className="text-slate-600 italic leading-relaxed">
                                "{client.quote}"
                            </p>
                        </div>

                        {/* Stats Tag */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-900 uppercase tracking-wide">
                            <TrendingUp className="w-3 h-3 text-primary" />
                            {client.stats}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
