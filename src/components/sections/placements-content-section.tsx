'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, GraduationCap } from "lucide-react";
import { PlacementSection } from "@/components/sections/placement-section";

const placementStats = [
  { batch: "2020–'22", offers: 21 },
  { batch: "2021–'23", offers: 10 },
  { batch: "2022–'24", offers: 10 },
  { batch: "2023–'25 (First Year)", offers: 6 },
];

const internshipStats = [
  { batch: "2023–'25", count: 15 },
];

const galleryImages = [
  { src: "https://placehold.co/600x800.png", alt: "Placement Poster 1", dataAiHint: "job fair poster" },
  { src: "https://placehold.co/600x800.png", alt: "Placement Poster 2", dataAiHint: "internship announcement" },
  { src: "https://placehold.co/600x800.png", alt: "Placement Poster 3", dataAiHint: "hiring event flyer" },
  { src: "https://placehold.co/600x800.png", alt: "Placement Poster 4", dataAiHint: "recruitment drive banner" },
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

export function PlacementsContentSection() {
  return (
    <>
      <section id="placements" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Placements</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Placement offers, internships, and our leading recruiters.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <motion.div
                key={stat.batch}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Card className="text-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">Batch {stat.batch}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-5xl font-bold font-headline text-primary">{stat.offers}</p>
                    <p className="text-muted-foreground mt-1">Placement Offers</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="internships" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-secondary-foreground">Internships</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {internshipStats.map((stat, index) => (
               <motion.div
                key={stat.batch}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="lg:col-start-2 lg:col-span-2"
              >
                <Card className="text-center h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-2">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">Batch {stat.batch}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-5xl font-bold font-headline text-primary">{stat.count}</p>
                    <p className="text-muted-foreground mt-1">Internships</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PlacementSection />

      <section id="gallery" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
              Placement & Internship Gallery
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.dataAiHint}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
