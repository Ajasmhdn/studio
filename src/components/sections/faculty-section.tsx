import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import type { FacultyMember } from "@/lib/types";

const faculty: FacultyMember[] = [
  { name: 'Dr. Alice Williams', designation: 'Professor & Head', specialization: 'Machine Learning, NLP', email: 'alice.w@tkmce.ac.in', photoUrl: 'https://placehold.co/400x400.png', dataAiHint: 'female professor headshot' },
  { name: 'Dr. Bob Johnson', designation: 'Associate Professor', specialization: 'Computer Vision, Robotics', email: 'bob.j@tkmce.ac.in', photoUrl: 'https://placehold.co/400x400.png', dataAiHint: 'male professor professional' },
  { name: 'Dr. Carol Davis', designation: 'Assistant Professor', specialization: 'Reinforcement Learning', email: 'carol.d@tkmce.ac.in', photoUrl: 'https://placehold.co/400x400.png', dataAiHint: 'female researcher smiling' },
  { name: 'Dr. David Smith', designation: 'Assistant Professor', specialization: 'AI Ethics & Fairness', email: 'david.s@tkmce.ac.in', photoUrl: 'https://placehold.co/400x400.png', dataAiHint: 'male teacher portrait' },
];

const associatingFaculty: FacultyMember[] = [
  { name: 'Dr. Eve Brown', designation: 'Visiting Professor', specialization: 'Quantum Computing', email: 'eve.b@tkmce.ac.in', photoUrl: 'https://placehold.co/400x400.png', dataAiHint: 'professional woman glasses' },
  { name: 'Dr. Frank Miller', designation: 'Adjunct Faculty', specialization: 'AI in Healthcare', email: 'frank.m@tkmce.ac.in', photoUrl: 'https://placehold.co/400x400.png', dataAiHint: 'doctor scientist labcoat' },
];

const FacultyCard = ({ member }: { member: FacultyMember }) => (
  <Card className="text-center overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
    <div className="bg-muted aspect-square overflow-hidden">
      <Image
        src={member.photoUrl}
        alt={`Photo of ${member.name}`}
        width={400}
        height={400}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        data-ai-hint={member.dataAiHint}
      />
    </div>
    <CardHeader className="p-4">
      <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
      <p className="text-primary font-semibold">{member.designation}</p>
    </CardHeader>
    <CardContent className="p-4 pt-0">
      <p className="text-muted-foreground text-sm">{member.specialization}</p>
      <a href={`mailto:${member.email}`} className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <Mail className="h-4 w-4" />
        {member.email}
      </a>
    </CardContent>
  </Card>
);

export function FacultySection() {
  return (
    <>
      <section id="faculty" className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Meet Our Faculty</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Guiding the next generation of AI pioneers with expertise and passion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member) => (
              <FacultyCard key={member.email} member={member} />
            ))}
          </div>
        </div>
      </section>
      <section id="associating-faculty" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-secondary-foreground">Associating Faculty</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Collaborating with leading experts from academia and industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:max-w-2xl mx-auto">
             {associatingFaculty.map((member) => (
                <FacultyCard key={member.email} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
