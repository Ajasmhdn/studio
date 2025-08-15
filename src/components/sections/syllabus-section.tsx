import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const CourseListItem = ({ name, code, credits, assessment }: { name: string; code?: string; credits: string; assessment: string; }) => (
  <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 rounded-md border bg-card/50 gap-2">
    <div className="flex-1">
      <p className="font-medium">{name}</p>
      {code && <p className="text-sm text-muted-foreground">{code}</p>}
    </div>
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <span>{credits}</span>
      <Badge variant="outline">{assessment}</Badge>
    </div>
  </li>
);

const ElectiveGroup = ({ title, courses }: { title: string; courses: string[]; }) => (
  <div className="pt-2">
    <h4 className="font-semibold text-md mb-2">{title}:</h4>
    <p className="text-muted-foreground text-sm pl-4">{courses.join(', ')} – 3 credits each</p>
  </div>
);

export function SyllabusSection() {
  return (
    <section id="syllabus" className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Syllabus</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Detailed semester-wise curriculum for the M.Tech in Artificial Intelligence program.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" defaultValue={['sem1']} className="w-full space-y-4">
            {/* Semester I */}
            <AccordionItem value="sem1">
              <AccordionTrigger className="text-xl font-headline hover:no-underline px-4 bg-secondary rounded-md">
                Semester I
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Core Courses</h3>
                  <ul className="space-y-3">
                    <CourseListItem name="Machine Learning" code="221TCS009" credits="3 credits" assessment="40 CIA / 60 ESE" />
                    <CourseListItem name="Mathematics for Machine Learning" code="221TCS010" credits="3 credits" assessment="60 CIA / 40 ESE" />
                    <CourseListItem name="Foundations of AI" code="221TCS011" credits="3 credits" assessment="40 CIA / 60 ESE" />
                    <CourseListItem name="Research Methodology & IPR" code="221RGE000" credits="2 credits" assessment="40 CIA / 60 ESE" />
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Labs</h3>
                  <ul className="space-y-3">
                    <CourseListItem name="AI and ML Lab" code="221LCS003" credits="1 credit" assessment="100 marks CIA" />
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Program Electives (choose one from each list)</h3>
                  <ElectiveGroup title="Elective 1" courses={["Data Structures & Algorithms (221ECS044)", "Cyber Physical Systems (221ECS045)", "Adaptive Signal Processing (221ECS046)", "Convex Optimization (221ECS050)", "Robotics & Automation (221ECS047)", "Cyber Forensics (221ECS048)"]} />
                  <ElectiveGroup title="Elective 2" courses={["Data Analytics for AI (221ECS049)", "Pattern Recognition (221ECS007)", "Bioinformatics (221ECS011)", "Heuristic Methods (221ECS051)", "Game Theory (221ECS052)", "Software Project Management (221ECS053)"]} />
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* Semester II */}
            <AccordionItem value="sem2">
              <AccordionTrigger className="text-xl font-headline hover:no-underline px-4 bg-secondary rounded-md">
                Semester II
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Core Courses</h3>
                  <ul className="space-y-3">
                    <CourseListItem name="Deep Learning: Theory and Practice" code="222TCS005" credits="3 credits" assessment="40 CIA / 60 ESE" />
                    <CourseListItem name="Optimization Techniques" code="222TCS006" credits="3 credits" assessment="40 CIA / 60 ESE" />
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Projects & Labs</h3>
                  <ul className="space-y-3">
                    <CourseListItem name="Mini Project" code="222PCS000" credits="2 credits" assessment="100 marks CIA" />
                    <CourseListItem name="Deep Learning Lab" code="222LCS001" credits="1 credit" assessment="100 marks CIA" />
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Program Electives (choose one from each list)</h3>
                  <ElectiveGroup title="Elective 3" courses={["DIP & Computer Vision (222ECS044)", "NLP (222ECS045)", "AI in Medicine (222ECS046)", "Big Data Analytics (222ECS000)", "Recommendation Systems (222ECS048)", "Human Computer Interface (222ECS049)"]} />
                  <ElectiveGroup title="Elective 4" courses={["Reinforcement Learning (222ECS050)", "Speech & Audio Processing (222ECS047)", "Graph Databases for AI (222ECS051)", "Evolutionary Computing (222ECS052)", "Data Visualization Techniques (222ECS053)", "AI in Remote Sensing (222ECS054)"]} />
                </div>
                 <div>
                  <h3 className="text-lg font-semibold mb-3">Industry/Interdisciplinary Elective (Choose 1)</h3>
                  <p className="text-muted-foreground text-sm pl-4">Interdisciplinary: Introduction to Machine Learning (222ECS056), Data Structures (222ECS057), Software Project Management (222ECS058) – 3 credits each</p>
                  <p className="text-muted-foreground text-sm pl-4">Industry Elective: 222EEXXXX series – 3 credits</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* Semester III */}
            <AccordionItem value="sem3">
              <AccordionTrigger className="text-xl font-headline hover:no-underline px-4 bg-secondary rounded-md">
                Semester III
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Common Courses</h3>
                  <ul className="space-y-3">
                    <CourseListItem name="MOOC" code="223MCS000" credits="2 credits" assessment="-" />
                    <CourseListItem name="Audit Course" code="223AGEXXX" credits="3 credits" assessment="-" />
                     <li className="pl-4 text-sm text-muted-foreground">e.g., Academic Writing, Advanced Engineering Materials, Forensic Engineering, Data Science for Engineers, Design Thinking, Functional Programming in Haskell, French, German, Japanese</li>
                    <CourseListItem name="Internship" code="223ICS000" credits="3 credits" assessment="-" />
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tracks</h3>
                  <ul className="space-y-3">
                    <CourseListItem name="Track 1: Dissertation Phase 1" code="223PCS000" credits="11 credits" assessment="100 marks CIA" />
                    <CourseListItem name="Track 2: Research Project Phase 1" code="223PCS001" credits="11 credits" assessment="100 marks CIA" />
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* Semester IV */}
            <AccordionItem value="sem4" className="border-b-0">
              <AccordionTrigger className="text-xl font-headline hover:no-underline px-4 bg-secondary rounded-md">
                Semester IV
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                 <div>
                  <h3 className="text-lg font-semibold mb-3">Tracks</h3>
                  <ul className="space-y-3">
                    <CourseListItem name="Track 1: Dissertation Phase II" code="224PCS000" credits="16 credits" assessment="100 marks CIA & ESE" />
                    <CourseListItem name="Track 2: Research Project Phase II" code="224PCS001" credits="16 credits" assessment="100 marks CIA & ESE" />
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
