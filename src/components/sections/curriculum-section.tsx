import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

const syllabusData = [
  {
    title: "Semester 1 Syllabus",
    pdfUrl: "https://firebasestorage.googleapis.com/v0/b/tkmce-ai-hub.appspot.com/o/s1.pdf?alt=media&token=a8408f65-271d-4113-913a-52d312521921",
  },
  {
    title: "Semester 2 Syllabus",
    pdfUrl: "https://firebasestorage.googleapis.com/v0/b/tkmce-ai-hub.appspot.com/o/s2.pdf?alt=media&token=8e9c4b77-3e61-4c74-a09e-71c1b1c31238",
  },
  {
    title: "Semester 3 Syllabus",
    pdfUrl: "https://firebasestorage.googleapis.com/v0/b/tkmce-ai-hub.appspot.com/o/s3.pdf?alt=media&token=5623098e-49c2-4809-ac2e-c5c2a1c02824",
  },
  {
    title: "Semester 4 Syllabus",
    pdfUrl: "https://firebasestorage.googleapis.com/v0/b/tkmce-ai-hub.appspot.com/o/s4.pdf?alt=media&token=36239126-72d1-4d37-9759-4d834a317498",
  },
  {
    title: "Semester 3 Audit Course Syllabus",
    pdfUrl: "https://firebasestorage.googleapis.com/v0/b/tkmce-ai-hub.appspot.com/o/audit.pdf?alt=media&token=80a08d24-3453-4853-930b-29777558667a",
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
