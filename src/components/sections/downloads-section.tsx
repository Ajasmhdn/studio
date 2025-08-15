import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";

interface DownloadItem {
  title: string;
  url: string;
}

interface DownloadCategory {
  title: string;
  items: DownloadItem[];
}

const downloadsData: DownloadCategory[] = [
    {
    title: "Academic Calendar",
    items: [{ title: "S2 (2024-26 Batch)", url: "#" }],
  },
  {
    title: "Time Table",
    items: [{ title: "S1 (2024-26 Batch)", url: "#" }],
  },
  {
    title: "MOOC Courses & Guidelines",
    items: [
      { title: "MOOC Course List approved by KTU", url: "#" },
      { title: "Norms for selecting MOOC Courses", url: "#" },
    ],
  },
  {
    title: "Templates & Reports",
    items: [
      { title: "S2 Mini Project Template (Latex)", url: "#" },
      { title: "Internship Report Template (Latex)", url: "#" },
      { title: "Sample Internship Report PDF", url: "#" },
      { title: "Internship Attendance Sheet", url: "#" },
      { title: "Internship Student’s Diary", url: "#" },
      { title: "Internship Supervisor Evaluation", url: "#" },
    ],
  },
  {
    title: "Semester 3 – Dissertation & Internship",
    items: [
      { title: "Dissertation Guide Interaction Sheet", url: "#" },
      { title: "Dissertation outside the Institute", url: "#" },
      { title: "Internship leading to Dissertation", url: "#" },
      { title: "Dissertation Phase 1 Report Template", url: "#" },
      { title: "S3 Project Details Form", url: "#" },
      { title: "Attendance Sheet, Student’s Diary, Supervisor Evaluation", url: "#" },
    ],
  },
  {
    title: "Semester 4 – Dissertation & Research Resources",
    items: [
      { title: "Dissertation Phase 2 Report Template", url: "#" },
      { title: "Useful Research Websites", url: "https://docs.google.com/document/d/1a-F8_G01jA5-4j0x-9-qJ2-w8Z6iG2v7k/edit?usp=sharing&ouid=114000000000000000000&rtpof=true&sd=true" },
    ],
  },
];

export function DownloadsSection() {
  return (
    <section id="downloads" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Downloads</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Important documents, templates, and resources.
          </p>
        </div>
        <div className="space-y-12 max-w-4xl mx-auto">
          {downloadsData.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.title} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 rounded-md border bg-card/50 gap-2">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary shrink-0" />
                        <span className="flex-1">{item.title}</span>
                      </div>
                      <Button asChild size="sm">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          {item.title.includes("Websites") ? "Open Link" : "View (PDF)"}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}