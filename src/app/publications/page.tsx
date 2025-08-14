import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PublicationsSection } from "@/components/sections/publications-section";

export default function PublicationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PublicationsSection />
      </main>
      <Footer />
    </div>
  );
}
