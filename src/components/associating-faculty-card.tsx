import Image from "next/image";
import type { FacultyMember } from "@/lib/types";

export function AssociatingFacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-48 h-48 mb-4">
        <Image
          src={member.photoUrl}
          alt={`Photo of ${member.name}`}
          fill
          className="object-cover rounded-md"
          data-ai-hint={member.dataAiHint}
        />
      </div>
      <h3 className="font-semibold font-headline">{member.name}</h3>
      <p className="text-sm text-muted-foreground">{member.designation}</p>
    </div>
  );
}
