import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PlaceholderSection } from "@/components/sections/placeholder-section";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PlaceholderSection id="events" title="Events" />
        <PlaceholderSection id="in-news" title="In the News" />
        <PlaceholderSection id="workshops" title="Workshops" />
      </main>
      <Footer />
    </div>
  );
}
