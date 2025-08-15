import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { StudentAchievement } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, Briefcase, Award, GraduationCap } from "lucide-react";

export function StudentAchievementCard({ student }: { student: StudentAchievement }) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="flex flex-col sm:flex-row items-start gap-6 p-6">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
          <Image
            src={student.photoUrl}
            alt={`Photo of ${student.name}`}
            fill
            className="object-cover"
            data-ai-hint={student.dataAiHint}
          />
        </div>
        <div className="flex-grow">
          <CardTitle className="font-headline text-2xl">{student.name}</CardTitle>
          <CardDescription className="text-muted-foreground">{student.batch}</CardDescription>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="secondary">{student.ctc}</Badge>
            {student.cgpa && <Badge variant="secondary">CGPA: {student.cgpa}</Badge>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex flex-col flex-grow">
        <div className="space-y-3 mb-6 text-sm">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-primary shrink-0" />
            <p><span className="font-semibold">{student.role}</span> at {student.company}</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary shrink-0" />
            <a href={`mailto:${student.email}`} className="text-muted-foreground hover:text-primary transition-colors truncate">{student.email}</a>
          </div>
        </div>
        
        <div className="flex-grow">
          <h4 className="font-semibold text-lg font-headline mb-3 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" /> Key Achievements
          </h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            {student.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
