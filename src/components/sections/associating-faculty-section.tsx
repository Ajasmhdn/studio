import type { FacultyMember } from "@/lib/types";
import { AssociatingFacultyCard } from "@/components/associating-faculty-card";

const associatingFaculty: FacultyMember[] = [
  {
    name: "Dr. Anzar SM",
    designation: "Asst. Professor - Dept. of ECE",
    email: "anzarsm@tkmce.ac.in",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "male professor portrait"
  },
  {
    name: "Dr. Mathew P Abraham",
    designation: "Asst. Professor - Dept. of EEE",
    email: "mathewpabraham@tkmce.ac.in",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "male professor smiling"
  },
  {
    name: "Dr. Mubarak Ali M",
    designation: "Asst. Professor - Dept. of ME",
    email: "mubarakalim@tkmce.ac.in",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "male professor professional"
  },
  {
    name: "Dr. Teena Liza John",
    designation: "Assoc. Prof & HOD- Dept. of Maths",
    email: "teenalizajohn@tkmce.ac.in",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "female professor glasses"
  },
  {
    name: "Dr. Fousia M Shamsudeen",
    designation: "Asst. Professor & HOD- Dept. of MCA",
    email: "fousiams@tkmce.ac.in",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "female professor portrait"
  },
  {
    name: "Dr. Sabeena Beevi K",
    designation: "Assoc. Professor - Dept. of EEE",
    email: "sabeenabeevik@tkmce.ac.in",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "female professor professional"
  },
  {
    name: "Dr. Resmi R",
    designation: "Asst. Professor - Dept. of EEE",
    email: "resmir@tkmce.ac.in",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "female researcher smiling"
  },
  {
    name: "Dr. Adarsh S",
    designation: "Professor - Dept. of CE & Dean Academics",
    email: "adarshs@tkmce.ac.in",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "male professor headshot"
  },
  {
    name: "Dr. Nissan Kunju",
    designation: "Assoc. Professor - Dept. of ECE",
    email: "nissankunju@tkmce.ac.in",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "male professor professional"
  },
  {
    name: "Dr. Deepak D",
    designation: "Asst. Professor - Dept. of Maths",
    email: "deepakd@tkmce.ac.in",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "male researcher smiling"
  },
  {
    name: "Prof. Christy D Ponnan",
    designation: "Asst. Professor - Dept. of EEE",
    email: "christydponnan@tkmce.ac.in",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "female professor portrait"
  }
];

export function AssociatingFacultySection() {
  return (
    <section id="associates" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Associating Faculty
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Faculty from various departments associated with the Centre for AI.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {associatingFaculty.map((member) => (
            <AssociatingFacultyCard key={member.email} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
