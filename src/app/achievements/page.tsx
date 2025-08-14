import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PlaceholderSection } from "@/components/sections/placeholder-section";

export default function AchievementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PlaceholderSection id="mou" title="Memorandum of Understanding" />
        <PlaceholderSection id="placements" title="Placements" />
        <PlaceholderSection id="students" title="Student Achievements" />
      </main>
      <Footer />
    </div>
  );
}
