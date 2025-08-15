import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DownloadsSection } from "@/components/sections/downloads-section";

export default function DownloadsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <DownloadsSection />
      </main>
      <Footer />
    </div>
  );
}
