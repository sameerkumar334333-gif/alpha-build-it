"use client";

import { GlowButton } from "@/components/ui/glow-button";
import { cn } from "@/lib/utils";
import { addDays, format, startOfToday, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, isToday } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Check, Clock, Globe, Laptop, Server, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// --- Types ---
type BookingData = {
    name: string;
    email: string;
    intent: string | null;
    date: Date | null;
    time: string | null;
};

const STEPS = [
    { id: 1, title: "Discovery" },
    { id: 2, title: "Schedule" },
    { id: 3, title: "Confirmation" }
];

// --- Main Wizard Component ---
export function BookingWizard() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<BookingData>({
        name: "",
        email: "",
        intent: null,
        date: null,
        time: null,
    });

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const updateData = (updates: Partial<BookingData>) => {
        setData((prev) => ({ ...prev, ...updates }));
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden min-h-[600px] flex flex-col">
            {/* Progress Bar */}
            <div className="bg-slate-50 border-b border-slate-100 p-6 md:p-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold font-heading text-slate-900">
                        {step === 1 && "Tell us about your vision"}
                        {step === 2 && "Pick a time slot"}
                        {step === 3 && "You're all set!"}
                    </h2>
                    <div className="text-sm font-medium text-slate-400">
                        Step {step} of 3
                    </div>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(step / 3) * 100}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 md:p-12 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <StepDiscovery
                            key="step1"
                            data={data}
                            updateData={updateData}
                            onNext={nextStep}
                        />
                    )}
                    {step === 2 && (
                        <StepSchedule
                            key="step2"
                            data={data}
                            updateData={updateData}
                            onNext={nextStep}
                            onBack={prevStep}
                        />
                    )}
                    {step === 3 && (
                        <StepSuccess
                            key="step3"
                            data={data}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// --- Step 1: Discovery ---
const INTENTS = [
    { id: "web", label: "New Website", icon: Globe, color: "bg-blue-50 text-blue-600 border-blue-100" },
    { id: "app", label: "Web App / SaaS", icon: Laptop, color: "bg-purple-50 text-purple-600 border-purple-100" },
    { id: "automation", label: "Automation", icon: Zap, color: "bg-amber-50 text-amber-600 border-amber-100" },
    { id: "backend", label: "Backend / API", icon: Server, color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
];

function StepDiscovery({ data, updateData, onNext }: { data: BookingData, updateData: (d: Partial<BookingData>) => void, onNext: () => void }) {
    const isValid = data.name.length > 2 && data.email.includes("@") && data.intent;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full flex flex-col"
        >
            <div className="space-y-6 flex-1">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            value={data.name}
                            onChange={(e) => updateData({ name: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Work Email</label>
                        <input
                            type="email"
                            placeholder="john@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            value={data.email}
                            onChange={(e) => updateData({ email: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">What are you looking to build?</label>
                    <div className="grid grid-cols-2 gap-4">
                        {INTENTS.map((intent) => (
                            <button
                                key={intent.id}
                                onClick={() => updateData({ intent: intent.id })}
                                className={cn(
                                    "p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-3",
                                    data.intent === intent.id
                                        ? `ring-2 ring-primary ring-offset-2 ${intent.color}`
                                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                )}
                            >
                                <div className={cn("p-2 rounded-lg bg-white", data.intent === intent.id ? "bg-white/50" : "bg-slate-100")}>
                                    <intent.icon className="w-5 h-5" />
                                </div>
                                <span className="font-semibold">{intent.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-8 mt-auto">
                <GlowButton
                    onClick={onNext}
                    disabled={!isValid}
                    className={!isValid ? "opacity-50 cursor-not-allowed" : ""}
                >
                    Next Step <ArrowRight className="ml-2 w-4 h-4" />
                </GlowButton>
            </div>
        </motion.div>
    );
}

// --- Step 2: Schedule (Custom Calendar) ---
const TIME_SLOTS = [
    "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:30 PM", "05:00 PM"
];

function StepSchedule({ data, updateData, onNext, onBack }: { data: BookingData, updateData: (d: Partial<BookingData>) => void, onNext: () => void, onBack: () => void }) {
    const today = startOfToday();
    const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
    const firstDayCurrentMonth = startOfWeek(today); // Simplified for demo, just showing current week onwards essentially

    // Generate next 14 days
    const days = eachDayOfInterval({
        start: today,
        end: addDays(today, 13)
    });

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full flex flex-col"
        >
            <div className="grid md:grid-cols-2 gap-8 flex-1">
                {/* Date Picker (List View for simplicity/modern feel) */}
                <div>
                    <label className="text-sm font-bold text-slate-700 block mb-4">Select a Date</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {days.map((day, dayIdx) => {
                            const isSelected = data.date && isSameDay(day, data.date);
                            const isTodayDate = isToday(day);

                            return (
                                <button
                                    key={day.toString()}
                                    onClick={() => updateData({ date: day, time: null })} // Reset time on date change
                                    className={cn(
                                        "flex flex-col items-center justify-center p-3 rounded-xl border transition-all text-sm",
                                        isSelected
                                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                                            : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600"
                                    )}
                                >
                                    <span className={cn("text-xs font-medium uppercase", isSelected ? "text-white/80" : "text-slate-400")}>
                                        {format(day, 'EEE')}
                                    </span>
                                    <span className="text-lg font-bold">
                                        {format(day, 'd')}
                                    </span>
                                    {isTodayDate && <span className="w-1 h-1 rounded-full bg-blue-500 mt-1" />}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Time Picker */}
                <div className={cn("transition-opacity duration-300", !data.date && "opacity-50 pointer-events-none")}>
                    <label className="text-sm font-bold text-slate-700 block mb-4">Select Time (IST)</label>
                    <div className="grid grid-cols-2 gap-3">
                        {TIME_SLOTS.map((time) => (
                            <button
                                key={time}
                                onClick={() => updateData({ time })}
                                className={cn(
                                    "flex items-center justify-center gap-2 p-3 rounded-xl border transition-all text-sm font-bold",
                                    data.time === time
                                        ? "bg-slate-900 text-white border-slate-900"
                                        : "bg-white border-slate-200 hover:border-primary hover:text-primary text-slate-600"
                                )}
                            >
                                <Clock className="w-4 h-4" />
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-8 mt-auto">
                <button
                    onClick={onBack}
                    className="flex items-center text-slate-500 hover:text-slate-900 font-medium transition-colors"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back
                </button>
                <GlowButton
                    onClick={onNext}
                    disabled={!data.date || !data.time}
                    className={(!data.date || !data.time) ? "opacity-50 cursor-not-allowed" : ""}
                >
                    Confirm Booking <Check className="ml-2 w-4 h-4" />
                </GlowButton>
            </div>
        </motion.div>
    );
}

// --- Step 3: Success ---
function StepSuccess({ data }: { data: BookingData }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-full flex flex-col items-center justify-center text-center space-y-6"
        >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-10 h-10 text-green-600" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
                Booking Confirmed!
            </h2>

            <p className="text-slate-500 text-lg max-w-md">
                Thanks <span className="font-bold text-slate-900">{data.name}</span>. We've scheduled your strategy call for <span className="font-bold text-primary">{data.date && format(data.date, "MMMM do")}</span> at <span className="font-bold text-primary">{data.time}</span>.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-500 flex items-center gap-3">
                <Calendar className="w-4 h-4" />
                A calendar invite has been sent to {data.email}
            </div>

            <GlowButton className="mt-8" onClick={() => window.location.href = "/"}>
                Back to Home
            </GlowButton>
        </motion.div>
    );
}
