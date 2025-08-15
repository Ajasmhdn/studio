
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Download, Calendar as CalendarIcon, User, Tag } from 'lucide-react';
import type { Event } from '@/lib/types';
import { ScrollArea } from '../ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


const eventsData: Event[] = [
  {
    id: 1,
    title: '5 Day International Workshop on AI and Deep Learning',
    startDate: '2024-08-12',
    endDate: '2024-08-16',
    speakers: ['Dr. Alex Ray'],
    organization: 'IEEE & TKMCE',
    shortDescription: 'An intensive workshop covering the fundamentals and advanced topics in AI and Deep Learning.',
    longDescription: 'This five-day international workshop provides a comprehensive overview of Artificial Intelligence and Deep Learning, from foundational concepts to the latest research and applications. Participants will engage in hands-on sessions, theoretical lectures, and project work. Topics include neural networks, CNNs, RNNs, transformers, and practical applications in computer vision and NLP.',
    tags: ['Workshop', 'Training'],
    imageUrl: 'https://placehold.co/800x1200.png',
    dataAiHint: 'ai workshop poster',
    featured: true,
  },
  {
    id: 2,
    title: 'Talk on Generative AI',
    startDate: '2024-07-25',
    speakers: ['Jane Doe, Lead AI Researcher at GenAI Corp'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: 'Exploring the latest trends and ethical considerations in the field of generative artificial intelligence.',
    longDescription: 'Join us for an insightful talk by Jane Doe on the rapidly evolving world of Generative AI. This session will cover topics such as large language models (LLMs), diffusion models for image generation, and the societal impact of these technologies. The talk will conclude with a Q&A session.',
    tags: ['Talk', 'Technical Session'],
    imageUrl: 'https://placehold.co/800x1200.png',
    dataAiHint: 'tech talk poster',
    featured: true,
  },
  {
    id: 3,
    title: 'Certificate Course in Machine Learning',
    startDate: '2023-09-01',
    endDate: '2023-11-30',
    speakers: ['Faculty of Centre for AI'],
    organization: 'TKMCE',
    shortDescription: 'A 3-month certification program for students and professionals looking to build a career in ML.',
    longDescription: 'This comprehensive certificate course offers in-depth knowledge and practical skills in Machine Learning. The curriculum covers supervised and unsupervised learning, model evaluation, feature engineering, and popular algorithms like decision trees, SVMs, and clustering. The course includes a capstone project to solve a real-world problem.',
    tags: ['Certificate Course'],
    imageUrl: 'https://placehold.co/800x1200.png',
    dataAiHint: 'education course flyer',
  },
  {
    id: 4,
    title: 'Hands-on Session: Building with TensorFlow',
    startDate: '2023-05-20',
    speakers: ['John Smith'],
    organization: 'Google Developer Group',
    shortDescription: 'A practical session on developing and deploying machine learning models using TensorFlow 2.x.',
    longDescription: 'This hands-on workshop is designed for beginners and intermediate users who want to get practical experience with TensorFlow. Participants will learn how to build, train, and deploy a neural network for an image classification task. Please bring your own laptop with TensorFlow pre-installed.',
    tags: ['Workshop'],
    imageUrl: 'https://placehold.co/800x1200.png',
    dataAiHint: 'coding workshop poster',
  },
  {
    id: 5,
    title: 'Workshop on Python Programming for Beginners',
    startDate: '2024-07-17',
    endDate: '2024-07-18',
    speakers: ['Dr. Imthias Ahamed', 'Dr. Sumod Sundar', 'Prof. Chinnu Jacob'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Workshop'],
    imageUrl: '',
  },
  {
    id: 6,
    title: 'Workshop on Machine Learning',
    startDate: '2024-08-12',
    endDate: '2024-08-16',
    speakers: ['Dr. Sumod Sundar'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Workshop'],
    imageUrl: '',
  },
  {
    id: 7,
    title: 'Technical Interaction on Utilizing Docker for Server Management',
    startDate: '2024-04-20',
    speakers: ['Mr. Sarath S Kumar, Devops Engineer, eClear Berlin, Germany'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Talk', 'Technical Session'],
    imageUrl: '',
  },
  {
    id: 8,
    title: 'Handson Workshop on Python Programming for NISH students',
    startDate: '2024-04-08',
    speakers: ['Prof. Sumod Sundar', 'Prof. Chinnu Jacob'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Workshop'],
    imageUrl: '',
  },
  {
    id: 9,
    title: 'Handson Workshop on Machine Learning for Beginners',
    startDate: '2024-04-06',
    endDate: '2024-04-07',
    speakers: ['Prof. Sumod Sundar'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Workshop'],
    imageUrl: '',
  },
  {
    id: 10,
    title: "30 hour certificate course on Python Programming",
    startDate: '2023-08-05',
    endDate: '2023-08-27',
    speakers: ['Prof. Christy D Ponnan', 'Prof. Sumod Sundar'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Certificate Course'],
    imageUrl: '',
  },
  {
    id: 11,
    title: 'Technical Talk on Sculpting Light Lase Holography Applications',
    startDate: '2023-04-12',
    speakers: ['Dr. P. T Ajith Kumar, President & Lead Scientist, Light logistics Holgraphy & Optics Pvt Ltd'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Talk'],
    imageUrl: '',
  },
  {
    id: 12,
    title: "Workshop on How to use ChatGPT effectively for generating questions based on Bloom's taxonomy",
    startDate: '2023-08-02',
    speakers: ['Dr. Imthias Ahamed'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Workshop'],
    imageUrl: '',
  },
  {
    id: 13,
    title: '30 hour certificate course on Python Programming',
    startDate: '2022-12-19',
    endDate: '2023-01-13',
    speakers: ['Prof. Sumod Sundar', 'Prof. Chinnu Jacob', 'Prof. Christy D Ponnan'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Certificate Course'],
    imageUrl: '',
  },
  {
    id: 14,
    title: 'Expert Talk & Interaction on Role of oppurtunities of AI in crime monitoring',
    startDate: '2022-10-26',
    speakers: ['Mr. Anand V. S, Police officer Kerala Police Cyberdome ECH,ECSA,ISMS Lead Auditor,MCTS & C-DAC Cyber Forensic Science'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Talk'],
    imageUrl: '',
  },
  {
    id: 15,
    title: 'Technical Session on Introduction to AI workflows and Applications using Matlab',
    startDate: '2022-09-02',
    speakers: ['Corell Technologies'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Technical Session'],
    imageUrl: '',
  },
  {
    id: 16,
    title: 'Online handson Workshop on Deep Learning for Beginners',
    startDate: '2022-08-26',
    endDate: '2022-08-31',
    speakers: ['Prof. Sumod Sundar'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Workshop'],
    imageUrl: '',
  },
  {
    id: 17,
    title: 'Training Program on AI & Robotics for SAMETI officers',
    startDate: '2022-08-03',
    speakers: ['Dr. Imthias Ahamed', 'Prof. Chinnu Jacob'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Training'],
    imageUrl: '',
  },
  {
    id: 18,
    title: 'Online handson Workshop on ABC of Machine Learning',
    startDate: '2022-04-27',
    endDate: '2022-05-01',
    speakers: ['Prof. Sumod Sundar'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Workshop'],
    imageUrl: '',
  },
  {
    id: 19,
    title: 'Talk on NBA process',
    startDate: '2023-01-18',
    speakers: ['Dr. Santhi Natarajan, Honorary Professor, Centre for AI, Assoc Professor Shiv Nadar University Chennai'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Talk'],
    imageUrl: '',
  },
  {
    id: 20,
    title: 'Technical Talk on Cyber Security - the big picture',
    startDate: '2021-12-01',
    speakers: ['Prof. Shamin. S, Information Security Management Consultant'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Talk'],
    imageUrl: '',
  },
  {
    id: 21,
    title: 'Technical Session on Introduction to AI workflows and Applications using Matlab',
    startDate: '2021-09-29',
    endDate: '2021-09-30',
    speakers: ['Corell Technologies'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Technical Session'],
    imageUrl: '',
  },
  {
    id: 22,
    title: 'Talk on AI in Medical Robotics',
    startDate: '2021-05-02',
    speakers: ['Dr. Branesh M Pillai, Faculty Member (Foreign Expert), Centre for Biomedical & Robotics Technology, Mahidol University, Thailand'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Talk'],
    imageUrl: '',
  },
  {
    id: 23,
    title: 'Talk on High Performance Computing',
    startDate: '2021-04-08',
    speakers: ['Dr. Santhi Natarajan, Honorary Professor, Centre for AI, Assoc Professor Shiv Nadar University Chennai'],
    organization: 'Centre for AI, TKMCE',
    shortDescription: '',
    longDescription: '',
    tags: ['Talk'],
    imageUrl: '',
  },
];


const EventCard = ({ event }: { event: Event }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3 }}
  >
  <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <CardHeader className="p-0">
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
          data-ai-hint={event.dataAiHint}
        />
         {event.featured && <Badge className="absolute top-2 right-2">Featured</Badge>}
      </div>
    </CardHeader>
    <CardContent className="p-4 flex-grow">
      <CardTitle className="font-headline text-xl mb-2">{event.title}</CardTitle>
      <div className="text-sm text-muted-foreground space-y-2 mb-3">
          <div className='flex items-center gap-2'>
            <CalendarIcon className="h-4 w-4" />
            <span>
              {format(parseISO(event.startDate), 'MMM d, yyyy')}
              {event.endDate && ` - ${format(parseISO(event.endDate), 'MMM d, yyyy')}`}
            </span>
          </div>
           <div className='flex items-center gap-2'>
            <User className="h-4 w-4" />
            <span className='italic'>{event.speakers.join(', ')}</span>
          </div>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{event.shortDescription}</p>
      <div className="flex flex-wrap gap-2">
        {event.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
      </div>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full">Read More</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
         <ScrollArea className="max-h-[80vh]">
          <div className="p-1">
            <DialogHeader>
              <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-4">
                 <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover"
                    data-ai-hint={event.dataAiHint}
                  />
              </div>
              <DialogTitle className="font-headline text-3xl">{event.title}</DialogTitle>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="text-md text-muted-foreground space-y-3 pt-2">
                  <div className='flex items-center gap-2'>
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    <span>
                      {format(parseISO(event.startDate), 'MMMM d, yyyy')}
                      {event.endDate && ` - ${format(parseISO(event.endDate), 'MMMM d, yyyy')}`}
                    </span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <User className="h-4 w-4 text-primary mt-1" />
                    <span className='italic'>{event.speakers.join(', ')}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                      <Tag className="h-4 w-4 text-primary" />
                      <div className="flex flex-wrap gap-2">
                          {event.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                      </div>
                  </div>
              </div>
              <div className="text-foreground">
                <p className="leading-relaxed">{event.longDescription}</p>
              </div>
              {event.materials && (
                <div>
                  <h3 className="font-semibold text-lg mb-2">Materials</h3>
                  <div className="flex flex-col gap-2">
                    {event.materials.map(material => (
                      <Button key={material.name} variant="outline" asChild className="justify-start">
                        <a href={material.url} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" /> {material.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </CardFooter>
  </Card>
  </motion.div>
);

const PastEventsTable = ({ events }: { events: Event[] }) => {
  const formatDateRange = (start: string, end?: string) => {
    if (end) {
      const startDate = parseISO(start);
      const endDate = parseISO(end);
      if (startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
        return `${format(startDate, 'dd')} - ${format(endDate, 'dd/MM/yyyy')}`;
      }
      return `${format(startDate, 'dd/MM/yyyy')} - ${format(endDate, 'dd/MM/yyyy')}`;
    }
    return format(parseISO(start), 'dd/MM/yyyy');
  };
  
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Date</TableHead>
            <TableHead>Program</TableHead>
            <TableHead>Resource Person(s)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map(event => (
            <TableRow key={event.id}>
              <TableCell className="font-medium">{formatDateRange(event.startDate, event.endDate)}</TableCell>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.speakers.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export function EventsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('all');

  const filteredEvents = useMemo(() => {
    return eventsData
      .filter(event => {
        const lowercasedFilter = searchTerm.toLowerCase();
        const matchesSearch =
          event.title.toLowerCase().includes(lowercasedFilter) ||
          event.speakers.some(s => s.toLowerCase().includes(lowercasedFilter));
        
        const eventYear = format(parseISO(event.startDate), 'yyyy');
        const matchesYear = yearFilter === 'all' || eventYear === yearFilter;

        const matchesTag = tagFilter === 'all' || event.tags.includes(tagFilter as any);

        return matchesSearch && matchesYear && matchesTag;
      })
      .sort((a, b) => parseISO(b.startDate).getTime() - parseISO(a.startDate).getTime());
  }, [searchTerm, yearFilter, tagFilter]);
  
  const recentAndFeatured = filteredEvents.filter(e => (e.featured || parseISO(e.startDate) > new Date(new Date().setMonth(new Date().getMonth() - 6))) && e.imageUrl);
  const pastEvents = filteredEvents.filter(e => !recentAndFeatured.includes(e));

  const years = ['all', ...Array.from(new Set(eventsData.map(e => format(parseISO(e.startDate), 'yyyy')))).sort((a, b) => b.localeCompare(a))];
  const tags = ['all', ...Array.from(new Set(eventsData.flatMap(e => e.tags)))];

  return (
    <section id="events" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Events</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Programs, workshops, talks and hands-on sessions organized by the Centre for AI.
          </p>
        </div>

        <Card className="p-4 md:p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative md:col-span-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by title or speaker..."
                className="pl-10 h-11"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map(year => <SelectItem key={year} value={year}>{year === 'all' ? 'All Years' : year}</SelectItem>)}
              </SelectContent>
            </Select>
             <Select value={tagFilter} onValueChange={setTagFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Tag" />
              </SelectTrigger>
              <SelectContent>
                {tags.map(tag => <SelectItem key={tag} value={tag}>{tag === 'all' ? 'All Tags' : tag}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </Card>

        {filteredEvents.length > 0 ? (
          <div className="space-y-16">
            {recentAndFeatured.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold font-headline mb-6 border-l-4 border-primary pl-4">Recent & Featured Events</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recentAndFeatured.map(event => <EventCard key={event.id} event={event} />)}
                </div>
              </div>
            )}
            {pastEvents.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold font-headline mb-6 border-l-4 border-primary pl-4">Programs Conducted</h3>
                <PastEventsTable events={pastEvents} />
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p>No events found matching your criteria. Please try different filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
