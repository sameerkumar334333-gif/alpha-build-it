"use client";

import { GlowButton } from "@/components/ui/glow-button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, ChevronRight, Mail, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Step = "name" | "email" | "service" | "calendar" | "success";

export function BookingWizard() {
    const [step, setStep] = useState<Step>("name");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        date: ""
    });

    const services = [
        "Custom Web Development",
        "E-Commerce Store",
        "SaaS Product",
        "Process Automation",
        "Other"
    ];

    const nextStep = (next: Step) => {
        setStep(next);
    };

    return (
        <div className="max-w-2xl mx-auto w-full">
            {/* Progress Visual - Connected Line */}
            <div className="flex items-center justify-between mb-12 relative px-4">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10" />
                <div
                    className="absolute top-1/2 left-0 h-0.5 bg-primary -z-10 transition-all duration-500 ease-in-out"
                    style={{
                        width: step === 'name' ? '0%' :
                            step === 'email' ? '33%' :
                                step === 'service' ? '66%' : '100%'
                    }}
                />

                {["name", "email", "service", "calendar"].map((s, i) => {
                    const isActive = step === s;
                    const isPast = ["name", "email", "service", "calendar", "success"].indexOf(step) > i;

                    return (
                        <div key={s} className="relative bg-slate-50 p-2 rounded-full">
                            <div className={cn(
                                "w-4 h-4 rounded-full border-2 transition-all duration-300",
                                isPast || isActive ? "bg-primary border-primary scale-125" : "bg-white border-slate-300"
                            )} />
                            {isActive && (
                                <motion.div
                                    layoutId="activeStepGlow"
                                    className="absolute inset-0 bg-primary/30 rounded-full blur-md -z-10"
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {/* Step 1: Name */}
                    {step === "name" && (
                        <motion.div
                            key="name"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">First things first.</h3>
                                <p className="text-slate-500">What should we call you?</p>
                            </div>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Your Full Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-lg font-medium outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                    autoFocus
                                />
                            </div>
                            <div className="flex justify-end pt-4">
                                <GlowButton
                                    onClick={() => formData.name && nextStep("email")}
                                    disabled={!formData.name}
                                    className="w-full md:w-auto"
                                >
                                    Continue <ArrowRight className="ml-2 w-4 h-4" />
                                </GlowButton>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Email */}
                    {step === "email" && (
                        <motion.div
                            key="email"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <button onClick={() => setStep('name')} className="text-sm text-slate-400 hover:text-slate-600 flex items-center gap-1 mb-2">
                                <ArrowLeft className="w-3 h-3" /> Back
                            </button>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Great to meet you, <span className="text-primary">{formData.name}</span>.</h3>
                                <p className="text-slate-500">Where can we send the invite?</p>
                            </div>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-lg font-medium outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                    autoFocus
                                />
                            </div>
                            <div className="flex justify-end pt-4">
                                <GlowButton
                                    onClick={() => formData.email && nextStep("service")}
                                    disabled={!formData.email}
                                    className="w-full md:w-auto"
                                >
                                    Next Step <ArrowRight className="ml-2 w-4 h-4" />
                                </GlowButton>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Service */}
                    {step === "service" && (
                        <motion.div
                            key="service"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <button onClick={() => setStep('email')} className="text-sm text-slate-400 hover:text-slate-600 flex items-center gap-1 mb-2">
                                <ArrowLeft className="w-3 h-3" /> Back
                            </button>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">How can we help?</h3>
                                <p className="text-slate-500">Select the primary focus for our call.</p>
                            </div>
                            <div className="grid gap-3">
                                {services.map((svc) => (
                                    <button
                                        key={svc}
                                        onClick={() => {
                                            setFormData({ ...formData, service: svc });
                                            nextStep("calendar");
                                        }}
                                        className={cn(
                                            "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group",
                                            formData.service === svc
                                                ? "bg-primary/5 border-primary text-primary font-bold shadow-sm"
                                                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white hover:border-primary/50 hover:shadow-md"
                                        )}
                                    >
                                        {svc}
                                        <ChevronRight className={cn(
                                            "w-5 h-5 transition-transform",
                                            formData.service === svc ? "translate-x-0 text-primary" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                                        )} />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 4: Calendar (Mock) */}
                    {step === "calendar" && (
                        <motion.div
                            key="calendar"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <button onClick={() => setStep('service')} className="text-sm text-slate-400 hover:text-slate-600 flex items-center gap-1 mb-2">
                                <ArrowLeft className="w-3 h-3" /> Back
                            </button>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pick a time.</h3>
                                <p className="text-slate-500">We're usually fully booked, but here are some slots.</p>
                            </div>

                            {/* Mock Calendar Slots */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {["Mon 10:00 AM", "Mon 2:00 PM", "Tue 11:30 AM", "Wed 9:00 AM", "Thu 3:00 PM", "Fri 1:00 PM"].map((slot) => (
                                    <button
                                        key={slot}
                                        onClick={() => nextStep("success")}
                                        className="p-3 text-sm bg-white border border-slate-200 rounded-lg hover:border-primary hover:text-primary hover:shadow-md transition-all text-slate-600 font-medium text-center"
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                            <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl text-orange-800 text-sm flex items-start gap-2">
                                <Calendar className="w-4 h-4 mt-0.5 shrink-0" />
                                <div>
                                    <span className="font-bold">Note:</span> We only take on 2 new clients per month to ensure quality.
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 5: Success */}
                    {step === "success" && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center text-center space-y-6 py-8"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-[bounce_1s_infinite]">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                                <p className="text-slate-500 max-w-sm mx-auto">
                                    We've sent a confirmation to <span className="font-bold text-slate-900">{formData.email}</span>. Prepare for a deep dive into your business growth.
                                </p>
                            </div>
                            <GlowButton onClick={() => window.location.href = '/'}>
                                Return Home
                            </GlowButton>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
