import { BookingWizard } from "@/components/booking/BookingWizard";
import { Section } from "@/components/ui/section";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BookPage() {
    return (
        <main className="min-h-screen bg-slate-50 relative overflow-hidden flex flex-col">
            {/* Header */}
            <header className="absolute top-0 left-0 w-full p-6 z-20 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/50"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
                <div className="font-bold text-xl tracking-tighter">ALPHA BUILD IT.</div>
            </header>

            {/* Decorative Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[100px]" />
            </div>

            <Section className="relative z-10 flex-1 flex flex-col justify-center py-24 md:py-32">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-slate-900 mb-4">
                        Let's Build Something <span className="text-primary">Great</span>
                    </h1>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">
                        Schedule a free 30-minute discovery call to discuss your project and how we can help you scale.
                    </p>
                </div>

                <BookingWizard />
            </Section>
        </main>
    );
}
