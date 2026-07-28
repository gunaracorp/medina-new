import { Nav } from "@/components/medina/nav";
import { Hero } from "@/components/medina/hero";
import { LiveMetrics } from "@/components/medina/live-metrics";
import { Vision } from "@/components/medina/vision";
import { UserRoles } from "@/components/medina/user-roles";
import { ServiceModules } from "@/components/medina/service-modules";
import { BureaucracyCycle } from "@/components/medina/bureaucracy-cycle";
import { VerticalIntegration } from "@/components/medina/vertical-integration";
import { StrategicPrograms } from "@/components/medina/strategic-programs";
import { Ecosystem } from "@/components/medina/ecosystem";
import { Pillars } from "@/components/medina/pillars";
import { TaxFlow } from "@/components/medina/tax-flow";
import { PermitJourney } from "@/components/medina/permit-journey";
import { KPI2030 } from "@/components/medina/kpi-2030";
import { Roadmap } from "@/components/medina/roadmap";
import { ActivityFeed } from "@/components/medina/activity-feed";
import { Partners } from "@/components/medina/partners";
import { CTA } from "@/components/medina/cta";
import { Footer } from "@/components/medina/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-background" />

      <Nav />

      <main className="flex-1">
        <Hero />
        <LiveMetrics />
        <Vision />
        <UserRoles />
        <ServiceModules />
        <BureaucracyCycle />
        <VerticalIntegration />
        <StrategicPrograms />
        <Ecosystem />
        <Pillars />
        <TaxFlow />
        <PermitJourney />
        <KPI2030 />
        <Roadmap />
        <ActivityFeed />
        <Partners />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
