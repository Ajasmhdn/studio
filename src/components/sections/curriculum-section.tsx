import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Curriculum } from "@/lib/types";

const curriculumData: Curriculum[] = [
  {
    id: 'sem1',
    title: 'Semester 1 & 2 (First Year)',
    items: [
      { name: 'Introduction to AI', url: '#' },
      { name: 'Programming for AI', url: '#' },
      { name: 'Calculus & Linear Algebra', url: '#' },
    ],
  },
  {
    id: 'sem3',
    title: 'Semester 3 & 4 (Second Year)',
    items: [
      { name: 'Data Structures & Algorithms', url: '#' },
      { name: 'Machine Learning Fundamentals', url: '#' },
      { name: 'Probability & Statistics', url: '#' },
    ],
  },
  {
    id: 'sem5',
    title: 'Semester 5 & 6 (Third Year)',
    items: [
      { name: 'Deep Learning', url: '#' },
      { name: 'Natural Language Processing', url: '#' },
      { name: 'Computer Vision', url: '#' },
    ],
  },
    {
    id: 'sem7',
    title: 'Semester 7 & 8 (Fourth Year)',
    items: [
      { name: 'Reinforcement Learning', url: '#' },
      { name: 'AI Ethics and Governance', url: '#' },
      { name: 'Final Year Project', url: '#' },
    ],
  },
];

export function CurriculumSection() {
  return (
    <section id="curriculum" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Curriculum & Materials</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Access course materials, syllabi, and resources for your AI journey.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="sem1" className="w-full">
            {curriculumData.map((semester) => (
              <AccordionItem key={semester.id} value={semester.id}>
                <AccordionTrigger className="text-lg font-medium hover:no-underline">{semester.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 pt-2">
                    {semester.items.map((item) => (
                      <li key={item.name} className="flex items-center justify-between p-3 rounded-md border bg-card/50">
                        <span className="font-medium">{item.name}</span>
                        <Button asChild variant="ghost" size="icon">
                          <a href={item.url} download>
                            <Download className="h-5 w-5 text-muted-foreground" />
                            <span className="sr-only">Download {item.name}</span>
                          </a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
