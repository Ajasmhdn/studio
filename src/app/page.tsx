import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FacultySection } from "@/components/sections/faculty-section";
import { CurriculumSection } from "@/components/sections/curriculum-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { PlaceholderSection } from "@/components/sections/placeholder-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FacultySection />
        <CurriculumSection />
        <PublicationsSection />
        <ProjectsSection />
        <PlaceholderSection id="mou" title="Memorandum of Understanding" />
        <PlaceholderSection id="placements" title="Placements & Achievements" />
        <PlaceholderSection id="events" title="Events & Media" />
        <PlaceholderSection id="gallery" title="Gallery & Downloads" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
