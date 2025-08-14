import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-24 lg:py-32 xl:py-40">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="AI Research Lab"
        fill
        className="object-cover opacity-10 dark:opacity-20"
        priority
        data-ai-hint="university campus modern architecture"
      />
      <div className="container mx-auto max-w-7xl px-4 z-20 relative">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Welcome to the TKMCE AI Hub
            </h1>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
              Exploring the frontiers of Artificial Intelligence. Discover our research, projects, and collaborations shaping the future of technology.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
            <Link href="#projects">
              <Button size="lg">Explore Projects</Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
