import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

const syllabusData = [
  {
    title: "Semester 1 Syllabus",
    pdfUrl: "https://mtech-ai-curriculum.tiiny.site/s1.pdf",
  },
  {
    title: "Semester 2 Syllabus",
    pdfUrl: "https://mtech-ai-curriculum.tiiny.site/s2.pdf",
  },
  {
    title: "Semester 3 Syllabus",
    pdfUrl: "https://mtech-ai-curriculum.tiiny.site/s3.pdf",
  },
  {
    title: "Semester 4 Syllabus",
    pdfUrl: "https://mtech-ai-curriculum.tiiny.site/s4.pdf",
  },
  {
    title: "Semester 3 Audit Course Syllabus",
    pdfUrl: "https://mtech-ai-curriculum.tiiny.site/audit.pdf",
  },
];

export function CurriculumSection() {
  return (
    <section id="curriculum" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Syllabus & Curriculum</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            M.Tech Artificial Intelligence (2022 Scheme) Curriculum
          </p>
        </div>
        <div className="space-y-12 max-w-4xl mx-auto">
          {syllabusData.map((item, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle className="font-headline text-2xl mb-4 sm:mb-0">{item.title}</CardTitle>
                <Button asChild>
                  <a href={item.pdfUrl} download>
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </a>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="aspect-[4/3] w-full rounded-md border overflow-hidden">
                  <iframe
                    src={item.pdfUrl}
                    width="100%"
                    height="100%"
                    title={item.title}
                    className="border-0"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
