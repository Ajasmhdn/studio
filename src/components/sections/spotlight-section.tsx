'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export function SpotlightSection() {
  const posterUrl = 'https://i.ibb.co/L8yBZyR/image.png';

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section id="spotlight" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
            Spotlight
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Highlighting our key achievements and facilities.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }}>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                         <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                             <Image
                                src={posterUrl}
                                alt="Spotlight Poster 1"
                                width={800}
                                height={1120}
                                className="object-cover w-full h-full"
                             />
                         </div>
                    </CardContent>
                </Card>
            </motion.div>
             <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }} transition={{delay: 0.2}}>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                         <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                             <Image
                                src={posterUrl}
                                alt="Spotlight Poster 2"
                                width={800}
                                height={1120}
                                className="object-cover w-full h-full"
                             />
                         </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
