import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Project } from "@/lib/types";

const projectsByBatch: { batch: string; projects: Project[] }[] = [
    {
    batch: "2023-25",
    projects: [
      { id: 1, title: "AI-Powered Diagnostic Tool", description: "A deep learning model for early detection of diseases from medical images.", students: 'John Doe, Jane Smith', guide: 'Dr. Alice Williams', downloadLink: '#', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'medical imaging ai' },
      { id: 2, title: "Autonomous Drone Navigation", description: "Using reinforcement learning for drone navigation in complex environments.", students: 'Peter Jones, Mary Ann', guide: 'Dr. Bob Johnson', downloadLink: '#', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'drone technology' },
    ],
  },
  {
    batch: "2022-24",
    projects: [
      { id: 3, title: "Sentiment Analysis for Social Media", description: "An NLP model to track public sentiment on various topics in real-time.", students: 'Chris Green, Pat Blue', guide: 'Dr. Carol Davis', downloadLink: '#', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'social media chart' },
      { id: 4, title: "Fairness in Algorithmic Hiring", description: "Developing a bias-mitigation framework for AI-based recruitment platforms.", students: 'Sam White, Alex Black', guide: 'Dr. David Smith', downloadLink: '#', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'diverse team meeting' },
    ],
  },
    {
    batch: "2021-23",
    projects: [],
  },
    {
    batch: "2020-22",
    projects: [],
  },
];

export function ProjectsSection() {
  const activeBatches = projectsByBatch.filter(b => b.projects.length > 0);
  const allBatches = ["2023-25", "2022-24", "2021-23", "2020-22"];

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Student Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Innovative solutions and practical applications of AI developed by our talented students.
          </p>
        </div>
        <Tabs defaultValue={activeBatches.length > 0 ? activeBatches[0].batch : allBatches[0]} className="w-full">
          <TabsList className={`grid w-full grid-cols-${allBatches.length} max-w-2xl mx-auto`}>
            {allBatches.map(batch => (
                <TabsTrigger key={batch} value={batch} id={batch.replace('–','-')}>Batch of {batch}</TabsTrigger>
            ))}
          </TabsList>
          {projectsByBatch.map(({ batch, projects }) => (
            <TabsContent key={batch} value={batch}>
              {projects.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  {projects.map((project) => (
                    <Card key={project.id} className="flex flex-col overflow-hidden group">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={project.dataAiHint}
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Students:</span> {project.students}</p>
                        <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Guide:</span> {project.guide}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <a href={project.downloadLink} download>
                            <Download className="mr-2 h-4 w-4" /> Download Report
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 text-muted-foreground">
                  <p>Projects for the batch of {batch} will be updated soon.</p>
                </div>
              )}

            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
