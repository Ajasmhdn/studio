'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Rocket } from 'lucide-react';

export function MissionVisionSection() {
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
    <section id="mission-vision" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
            <Card className="h-full">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide a dynamic and challenging academic environment that fosters excellence in Artificial Intelligence through quality teaching, innovative research, and strong industry collaboration, preparing students to become leaders and innovators in a global context.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
            <Card className="h-full">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                   <Eye className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be a nationally recognized Centre of Excellence in Artificial Intelligence education and research, producing highly competent and ethical professionals who can solve complex problems and contribute to the advancement of society through sustainable and intelligent technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
