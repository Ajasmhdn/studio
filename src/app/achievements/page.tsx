import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PlacementsContentSection } from "@/components/sections/placements-content-section";

export default function PlacementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PlacementsContentSection />
      </main>
      <Footer />
    </div>
  );
}
