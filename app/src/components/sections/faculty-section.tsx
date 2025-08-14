import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Mail, Linkedin, Link as LinkIcon, User, Phone, Microscope } from "lucide-react";
import type { FacultyMember } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const facultyData: FacultyMember[] = [
  { 
    name: 'Dr. Imthias Ahamed', 
    designation: 'Professor (On leave)', 
    specialization: 'Reinforcement Learning, Demand Response', 
    description: 'Dr. Imthias Ahamed T. P has 25 years of teaching and research experience, which include three years in Kind Saud University, Riyadh, Saudi Arabia and two years in Dhofar University, Salalah, Oman. He is currently working as Professor with the Centre for AI, TKMCE. His current research include reinforcement learning, demand response, neural networks, and power system scheduling and control.',
    areasOfInterest: ['Reinforcement Learning', 'Demand Response'],
    email: 'imthiasa@gmail.com',
    phone: '9895316268',
    tkmProfileUrl: '#',
    linkedinUrl: '#',
    photoUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'male professor professional',
    category: 'Regular'
  },
  { 
    name: 'Dr. Sumod Sundar', 
    designation: 'HOD & Assoc. Professor', 
    specialization: 'Medical Imaging, Cyber Security using AI', 
    description: 'Dr. Sumod Sundar is a Corporate and ASAP certified trainer in Machine Learning, Deep Learning & Data Science. He has 9 years of teaching experience and acted as resource person over 65 sessions in Artificial Intelligence. He has trained over 3000 Professionals, Employees and Students. He is the Founding Secretary & Treasurer to ACM Kollam Chapter.',
    areasOfInterest: ['Medical Imaging', 'Cyber Security using AI'],
    email: 'sumodsundar@tkmce.ac.in',
    phone: '8086515716',
    tkmProfileUrl: '#',
    websiteUrl: '#',
    linkedinUrl: '#',
    photoUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'male teacher portrait',
    category: 'Regular'
  },
  { 
    name: 'Dr. Chinnu Jacob', 
    designation: 'Asst. Professor', 
    specialization: 'Medical Imaging using AI, Data analytics using AI', 
    description: 'Dr. Chinnu Jacob has nearly 12 years of teaching experience. She recently submitted her PhD thesis on "Detection, Classification, and Staging of Lung Cancer Using Deep Learning Techniques". She has served as a resource person for workshops on Python, machine learning, and deep learning.',
    areasOfInterest: ['Medical Imaging using AI', 'Data analytics using AI'],
    email: 'chinnujacob@tkmce.ac.in',
    phone: '9446225465',
    tkmProfileUrl: '#',
    linkedinUrl: '#',
    photoUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'female researcher smiling',
    category: 'Regular'
  },
  { 
    name: 'Dr. Neena Aloysius', 
    designation: 'Asst. Professor - Dept. of CSE', 
    specialization: 'Machine Learning, Computer Vision', 
    description: 'Dr. Neena Aloysius received her Ph.D. from Amrita Vishwa Vidyapeetham, funded by MeitY. She is a faculty member at the Centre for AI and has over nine years of research and industry experience, including roles as a Deep Learning Engineer and Senior Systems Engineer at Infosys.',
    areasOfInterest: ['Machine Learning', 'Computer Vision', 'Pattern Recognition'],
    email: 'neenaa@tkmce.ac.in',
    phone: '9061414992',
    tkmProfileUrl: '#',
    linkedinUrl: '#',
    photoUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional woman glasses',
    category: 'Regular'
  },
  { 
    name: 'Dr. Santhi Natarajan', 
    designation: 'Assoc. Professor, Dept of CSE - Research', 
    specialization: 'Shiva Nadar University, Chennai', 
    description: 'Honorary Professor at the Centre for Artificial Intelligence, TKMCE.',
    areasOfInterest: [],
    email: '#',
    tkmProfileUrl: '#',
    photoUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'female professor headshot',
    category: 'Honorary'
  },
];

const regularFaculty = facultyData.filter(m => m.category === 'Regular');
const honoraryFaculty = facultyData.filter(m => m.category === 'Honorary');

const FacultyCard = ({ member }: { member: FacultyMember }) => (
  <Card className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 h-full">
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
       <p className="text-sm text-muted-foreground pt-1">{member.specialization}</p>
    </CardHeader>
    <CardContent className="p-4 pt-0 flex-grow">
      <CardDescription>{member.description}</CardDescription>
       {member.areasOfInterest.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2"><Microscope className="h-4 w-4 text-primary" /> Areas of Interest</h4>
          <div className="flex flex-wrap gap-2">
            {member.areasOfInterest.map(area => <Badge key={area} variant="secondary">{area}</Badge>)}
          </div>
        </div>
      )}
    </CardContent>
    <CardFooter className="p-4 pt-0 flex flex-wrap gap-2 justify-center bg-muted/50">
      {member.tkmProfileUrl && <Button asChild size="sm" variant="outline"><a href={member.tkmProfileUrl} target="_blank" rel="noopener noreferrer"><User /> TKM Profile</a></Button>}
      {member.websiteUrl && <Button asChild size="sm" variant="outline"><a href={member.websiteUrl} target="_blank" rel="noopener noreferrer"><LinkIcon /> Website</a></Button>}
      {member.linkedinUrl && <Button asChild size="sm" variant="outline"><a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer"><Linkedin /> LinkedIn</a></Button>}
      {member.email !== '#' && <Button asChild size="sm" variant="outline"><a href={`mailto:${member.email}`}><Mail /> Email</a></Button>}
      {member.phone && <Button asChild size="sm" variant="outline"><a href={`tel:${member.phone}`}><Phone /> Phone</a></Button>}
    </CardFooter>
  </Card>
);

export function FacultySection() {
  return (
    <>
      <section id="faculty" className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Regular Department Faculty</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Guiding the next generation of AI pioneers with expertise and passion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularFaculty.map((member) => (
              <FacultyCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
      <section id="associating-faculty" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-secondary-foreground">Honorary Professor</h2>
             <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Collaborating with leading experts from academia and industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:max-w-xl mx-auto">
             {honoraryFaculty.map((member) => (
                <FacultyCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
