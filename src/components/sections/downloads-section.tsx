import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Link as LinkIcon, FileText } from "lucide-react";

const pdfPlaceholder = "https://drive.google.com/file/d/1d7fEu0aGDrJtONed__aMB_3ZZhEVYX0j/preview";
const pdfDownloadPlaceholder = "https://drive.google.com/uc?export=download&id=1d7fEu0aGDrJtONed__aMB_3ZZhEVYX0j";

interface DownloadItem {
  title: string;
  description?: string;
  previewUrl?: string;
  downloadUrl: string;
  collapsibleContent?: React.ReactNode;
}

interface DownloadSection {
  title: string;
  items: DownloadItem[];
}

const downloadData: DownloadSection[] = [
  {
    title: "Academic Calendar & Timetable",
    items: [
      { title: "Academic Calendar: S2 (2024–26 Batch)", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
      { title: "Time Table: S1 (2024–26 Batch)", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
    ],
  },
  {
    title: "Semester 2",
    items: [
      { title: "MOOC Course List approved by KTU", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
      { title: "Norms for selecting MOOC Courses", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
      { title: "S2 Mini Project Template Latex", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
      { title: "Internship Report Template Latex", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
      { title: "Internship Report Template", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
      { title: "Sample Internship Report PDF", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
      { title: "Internship Attendance Sheet", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
      { title: "Internship Student’s Diary", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
      { title: "Internship Supervisor Evaluation", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
    ],
  },
  {
    title: "Semester 3",
    items: [
      { title: "S3: Dissertation Guide Interaction Sheet", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
      { title: "Dissertation outside the Institute", downloadUrl: '#', previewUrl: pdfPlaceholder, collapsibleContent: <p className="text-sm text-muted-foreground p-4">Guidelines for dissertations conducted outside the institute will be provided here. Please check back for updates.</p> },
      { title: "Internship leading to Dissertation", downloadUrl: '#', previewUrl: pdfPlaceholder, collapsibleContent: <p className="text-sm text-muted-foreground p-4">Information on internships that can be extended into dissertation projects will be available here.</p> },
      { title: "Dissertation as part of Employment", downloadUrl: '#', previewUrl: pdfPlaceholder, collapsibleContent: <p className="text-sm text-muted-foreground p-4">Details on how to structure a dissertation as part of ongoing employment will be outlined here.</p> },
      { title: "S3 Project Details Form", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
      { title: "Dissertation Phase 1 Report Template", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
    ],
  },
  {
    title: "Semester 4",
    items: [
      { title: "Dissertation Phase 2 Report Template", previewUrl: pdfPlaceholder, downloadUrl: pdfDownloadPlaceholder },
    ],
  },
];

const researchLinks = [
    { title: "SCI IF Journals", url: "#" },
    { title: "Scopus Journals", url: "#" },
    { title: "Journal Rankings", url: "#" },
    { title: "IEEE Explore", url: "#" },
    { title: "Science Direct", url: "#" },
    { title: "ResearchGate", url: "#" },
    { title: "Google Scholar", url: "#" },
    { title: "Shodhganga", url: "#" },
];

const DownloadCard = ({ item }: { item: DownloadItem }) => (
  <Card className="overflow-hidden transition-shadow hover:shadow-md">
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-1 p-4 flex items-center justify-center bg-muted/30">
        <div className="aspect-[3/4] w-full max-w-[200px] rounded border bg-white overflow-hidden shadow-sm">
          {item.previewUrl ? (
            <iframe
              src={item.previewUrl}
              title={`${item.title} Preview`}
              className="w-full h-full border-0"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground p-4">
               <FileText className="w-12 h-12 mb-2" />
               <p className="text-xs text-center">No Preview Available</p>
            </div>
          )}
        </div>
      </div>
      <div className="md:col-span-2 p-6 flex flex-col justify-center">
        <h3 className="font-headline text-lg font-semibold mb-2">{item.title}</h3>
        {item.description && <p className="text-muted-foreground text-sm mb-4">{item.description}</p>}
        <Button asChild className="mt-auto w-full sm:w-auto">
          <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> View (PDF)
          </a>
        </Button>
      </div>
    </div>
    {item.collapsibleContent && (
       <Accordion type="single" collapsible className="w-full border-t">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="px-6 py-3 text-sm font-medium hover:no-underline">
            Guidelines
          </AccordionTrigger>
          <AccordionContent>
            {item.collapsibleContent}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )}
  </Card>
);

export function DownloadsSection() {
  return (
    <section id="downloads" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Downloads</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Access academic calendars, timetables, forms, templates, and research resources for M.Tech AI students.
          </p>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {downloadData.map((section) => (
            <div key={section.title}>
              <h3 className="text-2xl font-bold font-headline mb-6 border-l-4 border-primary pl-4">{section.title}</h3>
              <div className="grid grid-cols-1 gap-8">
                {section.items.map((item) => (
                  <DownloadCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          ))}

           <div>
              <h3 className="text-2xl font-bold font-headline mb-6 border-l-4 border-primary pl-4">Useful Research Links</h3>
              <Card>
                <CardContent className="p-6">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {researchLinks.map(link => (
                            <li key={link.title}>
                               <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-md border bg-card/50 hover:bg-accent hover:text-accent-foreground transition-colors">
                                   <LinkIcon className="h-5 w-5 text-primary shrink-0" />
                                   <span className="flex-1">{link.title}</span>
                                   <ExternalLink className="h-4 w-4 text-muted-foreground" />
                               </a>
                            </li>
                        ))}
                    </ul>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
