import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-20 lg:py-28 bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
       <Image
        src="https://placehold.co/1920x1080.png"
        alt="AI Research Lab"
        fill
        className="object-cover opacity-5 dark:opacity-10"
        priority
        data-ai-hint="university campus modern architecture"
      />
      <div className="container mx-auto max-w-7xl px-4 z-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Centre for Artificial Intelligence
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
              M.Tech in Artificial Intelligence (Govt. Aided), 18 seats
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">Established: 2020</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">3 Batches Passed Out</Badge>
            </div>
          </div>
          <div className="bg-card/50 p-6 rounded-lg border shadow-sm">
            <h2 className="text-2xl font-bold font-headline mb-4 text-primary">About the Centre</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Centre for Artificial Intelligence was established at TKM College of Engineering in 2020 with a vision to explore the current and future scopes and potential of Artificial Intelligence technology. The M.Tech branch is approved under a government-aided stream with an intake of 18 students. Faculties from various departments handle subjects and provide research supervision, fostering a collaborative and interdisciplinary learning environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
