'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function SpotlightSection() {
  const posterUrls = [
    'https://i.ibb.co/V0T4QsBH/image.png',
    'https://i.ibb.co/V0T4QsBH/image.png',
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8 } },
  };

  return (
    <section id="spotlight" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Spotlight
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Highlighting our key achievements and facilities.
          </p>
        </div>

        {/* Posters Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {posterUrls.map((url, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-2">
                  <div className="relative aspect-[1/1.414]"> {/* A4 paper aspect ratio */}
                    <Image
                      src={url}
                      alt={`Spotlight Poster ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
