import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ResearchAreasSection } from "@/components/sections/research-areas-section";
import { StatsSection } from "@/components/sections/stats-section";
import { PlacementSection } from "@/components/sections/placement-section";
import { MissionVisionSection } from "@/components/sections/mission-vision-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <ResearchAreasSection />
        <PlacementSection />
        <MissionVisionSection />
      </main>
      <Footer />
    </div>
  );
}
