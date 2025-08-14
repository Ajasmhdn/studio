import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CurriculumSection } from "@/components/sections/curriculum-section";
import { PublicationsSection } from "@/components/sections/publications-section";

export default function MaterialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CurriculumSection />
        <PublicationsSection />
      </main>
      <Footer />
    </div>
  );
}
