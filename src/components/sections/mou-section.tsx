'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import { Card, CardContent } from '@/components/ui/card';

const partners = [
  { name: 'Nest Global', type: 'MoU', imageUrl: 'https://placehold.co/400x250.png', dataAiHint: 'corporate logo building' },
  { name: 'Cyberdome – Kerala Police', type: 'MoU', imageUrl: 'https://placehold.co/400x250.png', dataAiHint: 'police department logo' },
  { name: 'Acutro Technologies', type: 'MoU', imageUrl: 'https://placehold.co/400x250.png', dataAiHint: 'tech company logo' },
  { name: 'Alshifa College of Arts & Science', type: 'MoU', imageUrl: 'https://placehold.co/400x250.png', dataAiHint: 'college campus building' },
  { name: 'Sreenarayanaguru Open University', type: 'MoU', imageUrl: 'https://placehold.co/400x250.png', dataAiHint: 'university building logo' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export function MouSection() {
  return (
    <section id="mou" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            MoU & Consultancy
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our collaborations and consultancy agreements with industry and academic partners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full"
            >
              <Card className="overflow-hidden h-full text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-video w-full">
                  <Image
                    src={partner.imageUrl}
                    alt={`${partner.name} Logo`}
                    fill
                    className="object-cover"
                    data-ai-hint={partner.dataAiHint}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.type}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
