import { Nav } from "@/components/medina/nav";
import { Hero } from "@/components/medina/hero";
import { LiveMetrics } from "@/components/medina/live-metrics";
import { Vision } from "@/components/medina/vision";
import { Pillars } from "@/components/medina/pillars";
import { Ecosystem } from "@/components/medina/ecosystem";
import { TaxFlow } from "@/components/medina/tax-flow";
import { PermitJourney } from "@/components/medina/permit-journey";
import { Programs } from "@/components/medina/programs";
import { Roadmap } from "@/components/medina/roadmap";
import { ActivityFeed } from "@/components/medina/activity-feed";
import { Partners } from "@/components/medina/partners";
import { CTA } from "@/components/medina/cta";
import { Footer } from "@/components/medina/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      {/* Ambient backdrop */}
      <div className="fixed inset-0 -z-10 bg-background" />

      <Nav />

      <main className="flex-1">
        <Hero />
        <LiveMetrics />
        <Vision />
        <Pillars />
        <Ecosystem />
        <TaxFlow />
        <PermitJourney />
        <Programs />
        <Roadmap />
        <ActivityFeed />
        <Partners />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
