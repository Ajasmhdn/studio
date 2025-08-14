import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PlaceholderSection } from "@/components/sections/placeholder-section";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PlaceholderSection id="gallery" title="Gallery" />
        <PlaceholderSection id="downloads" title="Downloads" />
      </main>
      <Footer />
    </div>
  );
}
