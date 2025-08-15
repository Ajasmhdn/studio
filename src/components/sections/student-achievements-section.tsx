import Image from "next/image";
import { StudentAchievementCard } from "@/components/student-achievement-card";
import type { StudentAchievement } from "@/lib/types";
import { Card } from "@/components/ui/card";

const studentAchievements: StudentAchievement[] = [
  {
    name: "Hari Prasad",
    batch: "2021–2023",
    role: "Research Engineer",
    company: "Minus Zero Robotics Pvt. Ltd., Bengaluru",
    ctc: "17 LPA",
    email: "h4ri.prasad@gmail.com",
    cgpa: "9.78",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "male professional headshot",
    achievements: [
      "Best All-rounder award at TKMCE",
      "1st prize & $3000 in IEEE global student hackathon (FOSFRA project, University of Valencia, Spain, Nov 2022)",
      "Google Summer of Code 2022 – University of California Santa Cruz ($3000 stipend)",
      "Pi School of AI Fellowship 2023 – Rome, Italy (100% scholarship)",
      "IEEE PES Kerala Outstanding Young Professional Award 2021",
      "Co-authored research paper in International Journal of Imaging Systems and Technology",
    ],
  },
  {
    name: "Manasi Manasan",
    batch: "2022–2024",
    role: "Software Developer Cum Trainer",
    company: "WebCastle",
    ctc: "6.6 LPA",
    email: "manasimanasan646@gmail.com",
    photoUrl: "https://placehold.co/400x400.png",
    dataAiHint: "female professional portrait",
    achievements: [
      "Internship at Continental Automotive Components, Bangalore (₹30,000 stipend)",
      "Full-time Employee – Continental Automotive Components (7 LPA)",
      "Research Assistant at IIT Roorkee (₹50,000 + 16% HRA)",
      "Assistant Professor (AI) – Saintgits College of Engineering & Technology, Kottayam (₹5.5 LPA)",
      "Assistant Professor – Sreeshanmukha College of Engineering & Technology, Salem",
      "AI Engineer – Greenfi, Singapore",
      "Faculty at Nagarjuna College of Engineering & Technology, Bangalore (₹40,000/month)",
    ],
  },
];

const galleryImages = [
  { src: "https://placehold.co/600x800.png", alt: "Glimpse 1", dataAiHint: "students award ceremony" },
  { src: "https://placehold.co/600x800.png", alt: "Glimpse 2", dataAiHint: "group photo students" },
  { src: "https://placehold.co/600x800.png", alt: "Glimpse 3", dataAiHint: "student presentation event" },
  { src: "https://placehold.co/600x800.png", alt: "Glimpse 4", dataAiHint: "university hackathon" },
];

export function StudentAchievementsSection() {
  return (
    <>
      <section id="student-achievements" className="py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
              Student Achievements
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Celebrating the outstanding accomplishments of our talented students.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {studentAchievements.map((student) => (
              <StudentAchievementCard key={student.name} student={student} />
            ))}
          </div>
        </div>
      </section>

      <section id="glimpses" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-secondary-foreground">
              Glimpses
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Moments from events, workshops, and student activities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
