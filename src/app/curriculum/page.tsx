import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CurriculumSection } from "@/components/sections/curriculum-section";
import { PlaceholderSection } from "@/components/sections/placeholder-section";


export default function CurriculumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <CurriculumSection />
        <PlaceholderSection id="syllabus" title="Syllabus" />
      </main>
      <Footer />
    </div>
  );
}
