import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EvaluationDetail {
  item: string;
  marks?: string;
  subItems?: EvaluationDetail[];
}

interface Course {
  name: string;
  code?: string;
  credits: string;
  assessment: string;
  details?: {
    totalMarks: string;
    evaluations: EvaluationDetail[];
  }
}

const EvaluationDetails = ({ details }: { details: Course['details'] }) => {
  if (!details) return null;

  const renderDetails = (evalDetails: EvaluationDetail[], level = 0) => (
    <ul className={level > 0 ? 'pl-6' : ''}>
      {evalDetails.map((detail, index) => (
        <li key={index} className="flex justify-between items-start mt-1">
          <span>{detail.item}</span>
          {detail.marks && <span className="font-semibold whitespace-nowrap">{detail.marks}</span>}
          {detail.subItems && (
            <div className="w-full pl-4">
              {renderDetails(detail.subItems, level + 1)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <Card className="mt-3 bg-card/30">
      <CardHeader className="p-4">
        <CardTitle className="text-base font-semibold">Evaluation Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
        <div className="flex justify-between items-center font-bold text-foreground mb-2">
          <span>{details.totalMarks}</span>
        </div>
        {renderDetails(details.evaluations)}
      </CardContent>
    </Card>
  );
};


const CourseListItem = (props: Course) => (
  <li>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 rounded-md border bg-card/50 gap-2">
      <div className="flex-1">
        <p className="font-medium">{props.name}</p>
        {props.code && <p className="text-sm text-muted-foreground">{props.code}</p>}
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
        <span>{props.credits}</span>
        <Badge variant="outline">{props.assessment}</Badge>
      </div>
    </div>
    {props.details && <EvaluationDetails details={props.details} />}
  </li>
);

const ElectiveGroup = ({ title, courses }: { title: string; courses: string[]; }) => (
  <div className="pt-2">
    <h4 className="font-semibold text-md mb-2">{title}:</h4>
    <p className="text-muted-foreground text-sm pl-4">{courses.join(', ')} – 3 credits each</p>
  </div>
);

const semesterTwoCourses: Course[] = [
  { name: "Deep Learning: Theory and Practice", code: "222TCS005", credits: "3 credits", assessment: "40 CIA / 60 ESE" },
  { name: "Optimization Techniques", code: "222TCS006", credits: "3 credits", assessment: "40 CIA / 60 ESE" },
];
const semesterTwoLabs: Course[] = [
   { 
    name: "Mini Project", 
    code: "222PCS000", 
    credits: "2 credits", 
    assessment: "100 marks CIA",
    details: {
      totalMarks: "Total Marks: 100",
      evaluations: [
        { item: "Zeroth evaluation by the Evaluation Committee" },
        { item: "Interim evaluation 1", marks: "20 marks", subItems: [
          { item: "Topic Selection", marks: "4 marks" },
          { item: "Knowledge about Existing Techniques", marks: "4 marks" },
          { item: "Objectives & Methodology", marks: "4 marks" },
          { item: "Quality of Presentation", marks: "4 marks" },
          { item: "Viva", marks: "4 marks" },
        ]},
        { item: "Interim evaluation 2", marks: "20 marks", subItems: [
          { item: "Methodology", marks: "4 marks" },
          { item: "Knowledge about existing techniques", marks: "4 marks" },
          { item: "Implementation", marks: "4 marks" },
          { item: "Quality of Presentation & Clarity of future works", marks: "4 marks" },
          { item: "Viva", marks: "4 marks" },
        ]},
        { item: "Final evaluation", marks: "35 marks" },
        { item: "Report", marks: "15 marks" },
        { item: "Supervisor", marks: "10 marks" },
      ]
    }
  },
  { name: "Deep Learning Lab", code: "222LCS001", credits: "1 credit", assessment: "100 marks CIA" },
];
const semesterThreeCommon: Course[] = [
  { name: "MOOC", code: "223MCS000", credits: "2 credits", assessment: "-" },
  { name: "Audit Course", code: "223AGEXXX", credits: "3 credits", assessment: "-" },
  {
    name: "Internship",
    code: "223ICS000",
    credits: "3 credits",
    assessment: "-",
    details: {
      totalMarks: "Total Marks: 100",
      evaluations: [
        { item: "Presentation", marks: "25 marks" },
        { item: "Report", marks: "25 marks" },
      ]
    }
  },
];
const semesterThreeTracks: Course[] = [
  {
    name: "Track 1: Dissertation Phase 1",
    code: "223PCS000",
    credits: "11 credits",
    assessment: "100 marks CIA",
    details: {
      totalMarks: "Continuous Internal Assessment (CIA): 100 Marks",
      evaluations: [
        { item: "Zeroth evaluation by the Evaluation Committee" },
        { item: "Interim evaluation by the Evaluation Committee", marks: "20 marks", subItems: [
          { item: "Literature Survey", marks: "5 marks" },
          { item: "Comprehension and Problem Identification", marks: "5 marks" },
          { item: "Objective Identification", marks: "5 marks" },
          { item: "Document Preparation and Presentation", marks: "5 marks" },
        ]},
        { item: "Final evaluation by the Evaluation Committee", marks: "40 marks", subItems: [
          { item: "Literature Survey", marks: "10 marks" },
          { item: "Project Design", marks: "10 marks" },
          { item: "Execution of tasks within timelines", marks: "10 marks" },
          { item: "Presentation and document preparation", marks: "10 marks" },
        ]},
        { item: "Project Phase - I Report", marks: "20 marks" },
        { item: "Project progress evaluation by supervisor", marks: "20 marks" },
      ]
    }
  },
  { name: "Track 2: Research Project Phase 1", code: "223PCS001", credits: "11 credits", assessment: "100 marks CIA" },
];

const semesterFourTracks: Course[] = [
   {
    name: "Track 1: Dissertation Phase II",
    code: "224PCS000",
    credits: "16 credits",
    assessment: "100 CIA & ESE",
    details: {
      totalMarks: "Continuous Internal Assessment (CIA): 100 Marks",
      evaluations: [
        { item: "Zeroth evaluation by the Evaluation Committee" },
        { item: "Interim evaluation by the Evaluation Committee", marks: "30 marks", subItems: [
          { item: "Literature Survey", marks: "10 marks" },
          { item: "Innovation & Originality", marks: "5 marks" },
          { item: "Implementation & Execution", marks: "10 marks" },
          { item: "Presentation and Defence", marks: "5 marks" },
        ]},
        { item: "Final evaluation by the Evaluation Committee", marks: "50 marks", subItems: [
          { item: "Literature Survey", marks: "10 marks" },
          { item: "Innovation & Originality", marks: "10 marks" },
          { item: "Implementation & Execution", marks: "20 marks" },
          { item: "Presentation and Defence", marks: "10 marks" },
        ]},
        { item: "Project progress evaluation by supervisor", marks: "20 marks" },
        { item: "End Semester Evaluation (ESE)", marks: "100 Marks", subItems: [
           { item: "Innovation and Originality", marks: "10 marks" },
           { item: "Implementation and Execution", marks: "20 marks" },
           { item: "Project Documentation", marks: "25 marks" },
           { item: "Presentation and Defence", marks: "40 marks" },
           { item: "Publication of work in conference/journal", marks: "5 marks" },
        ]}
      ]
    }
  },
   { name: "Track 2: Research Project Phase II", code: "224PCS001", credits: "16 credits", assessment: "100 CIA & ESE" },
]


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
          <Accordion type="single" collapsible defaultValue="sem1" className="w-full space-y-4">
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
                    {semesterTwoCourses.map(course => <CourseListItem key={course.code} {...course} />)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Projects & Labs</h3>
                  <ul className="space-y-3">
                     {semesterTwoLabs.map(course => <CourseListItem key={course.code} {...course} />)}
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
                    {semesterThreeCommon.map(course => <CourseListItem key={course.code} {...course} />)}
                     <li className="pl-4 text-sm text-muted-foreground">e.g., Academic Writing, Advanced Engineering Materials, Forensic Engineering, Data Science for Engineers, Design Thinking, Functional Programming in Haskell, French, German, Japanese</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tracks</h3>
                  <ul className="space-y-3">
                    {semesterThreeTracks.map(course => <CourseListItem key={course.code} {...course} />)}
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
                    {semesterFourTracks.map(course => <CourseListItem key={course.code} {...course} />)}
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
