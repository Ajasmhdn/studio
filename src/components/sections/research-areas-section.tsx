'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, ShieldCheck, Database, Code, Dna, Bot, Target, Network, LineChart, Cpu } from 'lucide-react';

const researchAreas = [
  { name: 'Machine Learning', icon: BrainCircuit },
  { name: 'Deep Learning', icon: Cpu },
  { name: 'Data Mining', icon: Database },
  { name: 'AI in Cyber Security', icon: ShieldCheck },
  { name: 'Natural Language Processing', icon: Code },
  { name: 'AI in Medical Imaging', icon: Dna },
  { name: 'Reinforcement Learning', icon: Target },
  { name: 'Graph Neural Networks', icon: Network },
  { name: 'Computer Vision Techniques', icon: Bot },
  { name: 'Data Analytics', icon: LineChart },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function ResearchAreasSection() {
  return (
    <section id="research" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-secondary-foreground">Research Areas</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Exploring the diverse and cutting-edge fields of Artificial Intelligence.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <Card className="text-center h-full transition-all duration-300 hover:shadow-xl hover:bg-card/90 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-base font-semibold">{area.name}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
