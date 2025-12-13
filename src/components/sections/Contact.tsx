import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function Contact() {
    return (
        <Section className="mb-20">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-neutral-900 to-black border border-white/10 p-8 md:p-16 text-center">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 relative z-10">
                    Ready to Build Something Alpha?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 relative z-10">
                    We don't do generic. If you're ready for premium development and automated systems, let's talk.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <Button size="lg" variant="premium" className="px-12 text-base">
                        Apply Now
                    </Button>
                    <Button size="lg" variant="outline" className="px-12 text-base border-white/10 hover:bg-white/5">
                        Contact Us
                    </Button>
                </div>
            </div>
        </Section>
    );
}
