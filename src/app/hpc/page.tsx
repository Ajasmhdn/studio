import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HpcSection } from "@/components/sections/hpc-section";

export default function HpcPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HpcSection />
      </main>
      <Footer />
    </div>
  );
}
