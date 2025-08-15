import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SyllabusSection } from "@/components/sections/syllabus-section";

export default function SyllabusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <SyllabusSection />
      </main>
      <Footer />
    </div>
  );
}
