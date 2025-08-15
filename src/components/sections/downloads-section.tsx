
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
      { 
        title: "S3: Dissertation Guide Interaction Sheet", 
        previewUrl: pdfPlaceholder, 
        downloadUrl: pdfDownloadPlaceholder,
        collapsibleContent: (
          <div className="prose prose-sm dark:prose-invert max-w-none p-4 text-muted-foreground space-y-3">
            <p>The M. Tech students who after completion of 6 to 8 weeks internship at some reputed organizations are allowed to continue their work as dissertation for the third and fourth semester after getting approval from the CLAC.</p>
            <p>Such students shall make a brief presentation regarding the work they propose to carry out before the DLAC for a detailed scrutiny and to resolve its suitability for accepting it as an M.Tech dissertation.</p>
            <p>These students will be continuing as regular students of the Institute in third semester for carrying out all academic requirements as per the curriculum/regulation.</p>
            <p>However, they will be permitted to complete their dissertation in the Industry/Organization (where they have successfully completed their internship) during fourth semester.</p>
            <p>They should have an external as well as an internal supervisor. The internal supervisor should belong to the parent institution and the external supervisor should be Scientists or Engineers from the external organization with which the student is associated for doing the dissertation work. The external supervisor shall be with a minimum post graduate degree in the related area.</p>
            <p>The student has to furnish his /her monthly progress as well as attendance report signed by the external guide and submit the same to the concerned internal guide. The external guide is to be preferably present during all the stages of evaluation of the dissertation.</p>
            <p className="font-semibold text-foreground">Required Documents:</p>
            <ul>
              <li>Certificate stating the facilities available and time period</li>
              <li>Attendance Sheet</li>
              <li>Students Diary</li>
              <li>Supervisor Evaluation Sheet</li>
            </ul>
          </div>
        )
      },
      { 
        title: "Dissertation outside the Institute", 
        downloadUrl: '#', 
        previewUrl: pdfPlaceholder, 
      },
      { 
        title: "Internship leading to Dissertation", 
        downloadUrl: '#', 
        previewUrl: pdfPlaceholder, 
      },
      { 
        title: "Dissertation as part of Employment", 
        downloadUrl: '#', 
        previewUrl: pdfPlaceholder,
      },
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
  <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
    <div className="aspect-video w-full bg-muted/30 p-4 flex items-center justify-center">
        <div className="aspect-[4/3] w-full max-w-[300px] rounded border bg-white overflow-hidden shadow-sm">
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
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-headline text-lg font-semibold mb-2 flex-grow">{item.title}</h3>
      {item.description && <p className="text-muted-foreground text-sm mb-4 flex-grow">{item.description}</p>}
      <Button asChild className="mt-4 w-full sm:w-auto self-start">
        <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-4 w-4" /> View (PDF)
        </a>
      </Button>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
