import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GallerySection } from "@/components/sections/gallery-section";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
