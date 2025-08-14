import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
