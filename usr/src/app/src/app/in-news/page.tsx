import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { InNewsSection } from "@/components/sections/in-news-section";

export default function InNewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <InNewsSection />
      </main>
      <Footer />
    </div>
  );
}
