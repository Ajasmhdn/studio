
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Maximize, PlayCircle } from 'lucide-react';

const galleryImages = Array.from({ length: 15 }, (_, i) => ({
  src: `https://placehold.co/721x463.png`,
  alt: `Gallery image ${i + 1}`,
  dataAiHint: 'university event students',
}));

const videoData = [
  { id: 'dQw4w9WgXcQ', title: 'Campus Tour', dataAiHint: 'university campus drone' },
  { id: '3JZ_D3ELwOQ', title: 'Annual Tech Fest Highlights', dataAiHint: 'tech conference event' },
];

const IMAGES_PER_PAGE = 9;

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const paginatedImages = galleryImages.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  return (
    <>
      <section id="gallery-images" className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Image Gallery</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A glimpse into the life and events at the Centre for AI.
            </p>
          </div>
          
          <Dialog>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {paginatedImages.map((image, index) => (
                <DialogTrigger asChild key={index} onClick={() => setSelectedImage(image.src)}>
                  <motion.div
                     custom={index}
                     variants={cardVariants}
                     initial="hidden"
                     animate="visible"
                     viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="aspect-[721/463] relative">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.dataAiHint}
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </DialogTrigger>
              ))}
            </div>
             <DialogContent className="max-w-4xl p-2 bg-transparent border-0">
               <DialogTitle className="sr-only">Expanded Image View</DialogTitle>
              {selectedImage && (
                <div className="relative aspect-[721/463]">
                    <Image src={selectedImage} alt="Selected gallery image" fill className="object-contain" />
                </div>
              )}
            </DialogContent>
          </Dialog>

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 gap-4">
              <Button onClick={handlePrevPage} disabled={currentPage === 1} variant="outline">
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <span className="text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button onClick={handleNextPage} disabled={currentPage === totalPages} variant="outline">
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="gallery-videos" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-secondary-foreground">Video Gallery</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Watch highlights from our events, lectures, and projects.
            </p>
          </div>
          <Dialog>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoData.map((video, index) => (
                 <DialogTrigger asChild key={video.id} onClick={() => setSelectedVideo(video.id)}>
                    <motion.div
                       custom={index}
                       variants={cardVariants}
                       initial="hidden"
                       animate="visible"
                       viewport={{ once: true }}
                    >
                        <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <CardContent className="p-0">
                            <div className="aspect-video relative">
                                <Image
                                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                alt={video.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={video.dataAiHint}
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <PlayCircle className="h-16 w-16 text-white/80 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold font-headline truncate">{video.title}</h3>
                            </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </DialogTrigger>
              ))}
            </div>
            <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
              <DialogTitle className="sr-only">Video Player</DialogTitle>
               {selectedVideo && (
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </>
  );
}
