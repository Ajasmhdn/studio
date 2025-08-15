import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StudentAchievementsSection } from "@/components/sections/student-achievements-section";

export default function StudentAchievementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <StudentAchievementsSection />
      </main>
      <Footer />
    </div>
  );
}
