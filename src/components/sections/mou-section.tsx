'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import { Card, CardContent } from '@/components/ui/card';

const partners = [
  { 
    name: 'Cyberdome – Kerala Police', 
    type: 'MoU', 
    imageUrl: 'https://i.ibb.co/6w43g87/mou-cyberdome.png', 
    dataAiHint: 'official signing ceremony' 
  },
  { 
    name: 'Nest Global', 
    type: 'MoU', 
    imageUrl: 'https://placehold.co/800x450.png', 
    dataAiHint: 'corporate building office' 
  },
  { 
    name: 'Acutro Technologies', 
    type: 'MoU', 
    imageUrl: 'https://placehold.co/800x450.png', 
    dataAiHint: 'tech company logo' 
  },
  { 
    name: 'Alshifa College of Arts & Science', 
    type: 'MoU', 
    imageUrl: 'https://placehold.co/800x450.png', 
    dataAiHint: 'college campus building' 
  },
  { 
    name: 'Sreenarayanaguru Open University', 
    type: 'MoU', 
    imageUrl: 'https://placehold.co/800x450.png', 
    dataAiHint: 'university building logo' 
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
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
        <div className="space-y-16 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-2xl font-bold font-headline mb-4 text-center">{partner.name}</h3>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-video w-full">
                  <Image
                    src={partner.imageUrl}
                    alt={`${partner.name} collaboration`}
                    fill
                    className="object-cover"
                    data-ai-hint={partner.dataAiHint}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
