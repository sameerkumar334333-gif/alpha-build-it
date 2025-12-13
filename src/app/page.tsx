import { Ecosystem } from "@/components/sections/Ecosystem";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { WhyUs } from "@/components/sections/WhyUs";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { FounderBio } from "@/components/sections/FounderBio";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Hero />
      <Ecosystem />
      <WhyUs />
      <ServicesBento />
      <Comparison />
      <Testimonials />
      <FounderBio />
      <Process />
      <Footer />
    </main>
  );
}
