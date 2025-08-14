import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FacultySection } from "@/components/sections/faculty-section";

export default function FacultyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <FacultySection />
      </main>
      <Footer />
    </div>
  );
}
