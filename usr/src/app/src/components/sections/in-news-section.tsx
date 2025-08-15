import type { InNews } from '@/lib/types';
import { InNewsCard } from '@/components/in-news-card';

const newsData: InNews[] = [
  {
    id: 1,
    title: 'AI Centre Hosts International Workshop',
    date: '2024-08-20T00:00:00.000Z',
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'university workshop students',
    shortDescription: 'TKMCE\'s Centre for AI successfully concluded a five-day international workshop on AI and Deep Learning, drawing participants from across the globe.',
    fullDescription: 'The workshop, held in collaboration with IEEE, featured lectures from renowned academics and industry experts. It covered a wide range of topics, from the fundamentals of neural networks to advanced concepts in generative AI. Participants praised the hands-on sessions and the opportunity to network with peers and leaders in the field.',
  },
  {
    id: 2,
    title: 'Students Win National AI Hackathon',
    date: '2024-07-15T00:00:00.000Z',
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'students coding competition',
    shortDescription: 'A team of M.Tech students from the AI program secured the first prize at the National AI Innovation Challenge for their project on agricultural technology.',
    fullDescription: 'The winning project, "Agri-Sense," uses a combination of computer vision and machine learning to detect crop diseases at an early stage. The team developed a low-cost drone-based system that provides farmers with actionable insights to improve crop yield and reduce pesticide usage. Their solution was lauded for its potential impact on sustainable farming.',
  },
  {
    id: 3,
    title: 'MoU Signed with Tech Giant for AI Research',
    date: '2024-06-05T00:00:00.000Z',
    imageUrl: 'https://placehold.co/800x450.png',
    dataAiHint: 'corporate handshake meeting',
    shortDescription: 'The Centre for AI has entered into a memorandum of understanding with a leading technology company to foster collaborative research in ethical AI.',
    fullDescription: 'This partnership aims to bridge the gap between academia and industry by creating opportunities for joint research projects, internships, and faculty exchange programs. The collaboration will focus on developing frameworks for fairness, accountability, and transparency in AI systems, addressing some of the most critical challenges in the field today.',
  },
];


export function InNewsSection() {
  return (
    <section id="in-news" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">In The News</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Highlights and media coverage of the achievements and events from the Centre for AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(item => (
            <InNewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
