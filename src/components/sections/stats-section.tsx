'use client';
import { motion, useInView, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Users, Book, FolderGit, Mic } from 'lucide-react';

const stats = [
  { name: 'Students', value: 54, icon: Users },
  { name: 'Research Papers', value: 40, icon: Book },
  { name: 'Active Projects', value: 15, icon: FolderGit },
  { name: 'Faculty Members', value: 10, icon: Mic },
];

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, {
    damping: 20,
    stiffness: 100,
    mass: 1
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat().format(latest.toFixed(0));
      }
    });
  }, [spring]);

  return <span ref={ref}>0</span>;
}

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-3">
                 <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold font-headline text-primary">
                <AnimatedCounter value={stat.value} />+
              </div>
              <p className="text-muted-foreground mt-1">{stat.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
