import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AssociatingFacultySection } from "@/components/sections/associating-faculty-section";

export default function AssociatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AssociatingFacultySection />
      </main>
      <Footer />
    </div>
  );
}
