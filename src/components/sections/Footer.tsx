"use client";

import { GlowButton } from "@/components/ui/glow-button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative bg-slate-50 pt-32 pb-8 overflow-hidden border-t border-slate-200">
            <Section className="relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <h2 className="text-5xl md:text-8xl font-bold font-heading mb-8 tracking-tighter text-slate-900">
                        Ready for the <br />
                        <span className="text-primary">Next Level?</span>
                    </h2>
                    <Link href="/book">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <GlowButton className="text-xl px-12 py-6">
                                Book a Strategy Call <ArrowUpRight className="ml-2 w-6 h-6" />
                            </GlowButton>
                        </motion.div>
                    </Link>
                </div>

                <div className="grid md:grid-cols-4 gap-12 border-t border-slate-200 pt-16">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold font-heading mb-6 tracking-tighter text-slate-900">ALPHA BUILD IT.</h3>
                        <p className="text-slate-500 max-w-sm leading-relaxed">
                            Building digital empires for forward-thinking agencies.
                            San Francisco, CA.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-slate-900">Services</h4>
                        <ul className="space-y-3 text-slate-500">
                            <li className="hover:text-primary cursor-pointer transition-colors">Web Development</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">E-Commerce</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">SaaS Platforms</li>
                            <li className="hover:text-primary cursor-pointer transition-colors">Automation</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-slate-900">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:text-primary transition-colors hover:border-primary/20 shadow-sm">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:text-primary transition-colors hover:border-primary/20 shadow-sm">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:text-primary transition-colors hover:border-primary/20 shadow-sm">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:text-primary transition-colors hover:border-primary/20 shadow-sm">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
                    <p>© 2025 Alpha Build IT. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </Section>
        </footer>
    );
}
