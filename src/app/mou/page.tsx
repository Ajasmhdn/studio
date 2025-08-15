import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MouSection } from "@/components/sections/mou-section";

export default function MouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <MouSection />
      </main>
      <Footer />
    </div>
  );
}
