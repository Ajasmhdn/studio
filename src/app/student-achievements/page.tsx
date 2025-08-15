import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PlaceholderSection } from "@/components/sections/placeholder-section";

export default function StudentAchievementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PlaceholderSection id="student-achievements" title="Student Achievements" />
      </main>
      <Footer />
    </div>
  );
}
