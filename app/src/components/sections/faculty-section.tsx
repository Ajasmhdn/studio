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
    description: 'Imthias Ahamed T. P received the B.Tech. degree in electrical engineering from Kerala University, Thiruvananthapuram, India, in 1988, the M. Tech. degree in instrumentation and control from the National Institute of Technology Calicut, Kozhikode, India, in 1991, and the Ph.D. degree from the Indian Institute of Science, Bangalore, India, in 2002. He has 25 years of teaching and research experience, which include three years in Kind Saud University, Riyadh, Saudi Arabia and two years in Dhofar University, Salalah, Oman. He is currently working as  Professor with the Centre for AI, Thangal Kunju Musaliar College of Engineering, Kollam, Kerala. His current research include reinforcement learning, demand response, neural networks, and power system scheduling and control.',
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
    description: 'Dr. Sumod Sundar is Associate Professor in Centre for Artificial Intelligence, TKM College of Engg Kollam. He is a Corporate and ASAP certified trainer in the field of Machine Learning, Deep Learning & Data Science. He has completed his PhD in the topic Artificial Intelligence in Medical Image Diagnosis from VIT Vellore after his MTech from TKM College of Engineering. He has 9 year of teaching experience and acted as resource person over 65 sessions in Artificial Intelligence including AICTE, KTU FDPs and workshops. He has trained over 3000 Professionals, Employees and Students in Machine Learning, Deep Learning and Python so far. He has authored text book on Computer Programming and published various SCI/Scopus indexed journals. Established his expertise as a reviewer and chair for international conferences and have portfolio of AI projects in collaboration with government entities and startups. He was previously Academic Relations of IEEE Kerala Young Professionals. Now he is the Founding Secretary & Treasurer to ACM Kollam Chapter. His online session on Data science received Indian book of records, and also he received Best Faculty award in the year 2016.',
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
    description: 'Dr. Chinnu Jacob is Assistant Professor at the Centre for Artificial Intelligence, TKM College of Engineering, Kollam. With nearly 12 years of teaching experience in various engineering colleges, she earned her B.Tech from Model Engineering College, CUSAT, and her M.Tech from College of Engineering Trivandrum. She has recently submitted her PhD thesis on "Detection, Classification, and Staging of Lung Cancer Using Deep Learning Techniques" under APJ Abdul Kalam Technological University (KTU). She has served as a resource person and conducted workshops on Python programming, machine learning, and deep learning techniques. She has established her expertise as a reviewer for international conferences and journals and by leading AI projects in collaboration with government entities and startups. She has published papers in SCI/SCOPUS journals and conferences.',
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
    description: 'Dr. Neena Aloysius received her Ph.D. in Computer Science and Engineering from Amrita Vishwa Vidyapeetham, India. Her Ph.D. research was fully funded by the Ministry of Electronics and Information Technology (MeitY),Government of India, during which she successfully developed AI models for real-time applications in collaboration with the Centre for Development of Advanced Computing (CDAC). She is an Assistant Professor in the Department of Computer Science and Engineering at TKMCE and a faculty member at the Centre for Artificial Intelligence, TKMCE. She has over nine years of research and industry experience, including more than four years as Deep Learning Engineer at Amrita Center for Research in Analytics, Technologies & Education (AmritaCREATE) and over five years as Senior Systems Engineer at Infosys Technologies Limited.',
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
    email: 'natarajansanthi@snuchennai.edu.in',
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
      {member.tkmProfileUrl && <Button asChild size="sm" variant="outline"><a href={member.tkmProfileUrl} target="_blank" rel="noopener noreferrer"><User /> Profile</a></Button>}
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
