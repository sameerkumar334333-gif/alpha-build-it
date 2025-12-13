import { GlassCard } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Code2, Funnel, Settings, LayoutDashboard, Zap, Network, LifeBuoy } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Website Development",
        items: [
            "Business Websites",
            "Personal / Creator Websites",
            "Landing Pages",
            "Multi-page Company Websites",
            "Speed-optimized & mobile-first builds",
        ],
        tech: "React, Tailwind, Modern Stack",
    },
    {
        icon: Funnel,
        title: "Funnel & Landing Page Systems",
        description: "Conversion-focused pages",
        items: [
            "Course / Digital Product Funnels",
            "Lead Generation Funnels",
            "Payment-integrated Landing Pages",
            "Upsell / Downsell Flow Setup",
        ],
    },
    {
        icon: Settings,
        title: "Automation & Backend Setup",
        items: [
            "Form → Email / Telegram / CRM automation",
            "Payment → Access / Notification automation",
            "Internal workflow automation",
            "No-code / low-code systems",
        ],
    },
    {
        icon: LayoutDashboard,
        title: "Client Dashboard & Internal Tools",
        items: [
            "Admin panels",
            "Student / User dashboards",
            "Simple web apps for operations",
            "Custom internal tools (as per requirement)",
        ],
    },
    {
        icon: Zap,
        title: "Performance & Optimization",
        items: [
            "Website speed optimization",
            "UI cleanup & UX improvements",
            "Funnel performance fixes",
            "Mobile & browser compatibility fixes",
        ],
    },
    {
        icon: Network,
        title: "Integrations",
        items: [
            "Payment gateway integration",
            "Email tools integration",
            "Telegram / WhatsApp integration",
            "Third-party API connections",
        ],
    },
    {
        icon: LifeBuoy,
        title: "Ongoing Support (Optional)",
        description: "Limited support plans",
        items: [
            "Technical support",
            "Minor updates & fixes",
            "System monitoring",
            "Backend maintenance",
        ],
    },
];

export function Services() {
    return (
        <Section className="relative z-10" id="services">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                    Our Expertise
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Comprehensive digital solutions engineered for growth and stability.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <GlassCard key={index} className="flex flex-col h-full hover:border-primary/20">
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-2">{service.title}</h3>
                            {service.description && (
                                <p className="text-sm text-primary/80 mb-4 font-medium italic">
                                    "{service.description}"
                                </p>
                            )}
                        </div>

                        <ul className="space-y-3 mb-6 flex-grow">
                            {service.items.map((item, i) => (
                                <li key={i} className="flex items-start text-sm text-muted-foreground">
                                    <span className="mr-2 text-primary">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {service.tech && (
                            <div className="pt-4 mt-auto border-t border-white/5">
                                <p className="text-xs text-muted-foreground">
                                    Stack: <span className="text-white/70">{service.tech}</span>
                                </p>
                            </div>
                        )}
                    </GlassCard>
                ))}
            </div>
        </Section>
    );
}
