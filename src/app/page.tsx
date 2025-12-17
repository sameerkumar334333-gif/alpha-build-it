import { Ecosystem } from "@/components/sections/Ecosystem";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { WhyUs } from "@/components/sections/WhyUs";
import { Comparison } from "@/components/sections/Comparison";
import { SitePreview } from "@/components/sections/SitePreview";
import { FounderBio } from "@/components/sections/FounderBio";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Instant Trust */}
      <Ecosystem />

      {/* 3. Pain + Aspiration & 4. Why Alpha is Different */}
      <WhyUs />

      {/* 5. Capabilities */}
      <ServicesBento />

      {/* 6. Proof (Comparison) */}
      <Comparison />

      {/* 7. Proof (Live Work) */}
      <SitePreview />

      {/* 8. Human Trust */}
      <FounderBio />

      {/* 9. Clear Process */}
      <Process />

      {/* 10. Strong CTA */}
      <Footer />
    </main>
  );
}
