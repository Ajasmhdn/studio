import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { EventsSection } from "@/components/sections/events-section";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
}
