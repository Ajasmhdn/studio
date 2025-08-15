import Image from "next/image";
import type { FacultyMember } from "@/lib/types";
import { Mail, Phone, ExternalLink } from "lucide-react";

export function FacultyMemberCard({ member }: { member: FacultyMember }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-1">
        <div className="aspect-square relative w-full max-w-[250px] mx-auto">
          <Image
            src={member.photoUrl}
            alt={`Photo of ${member.name}`}
            fill
            className="object-cover rounded-md"
            data-ai-hint={member.dataAiHint}
          />
        </div>
      </div>
      <div className="md:col-span-2 space-y-4">
        <div>
          <h3 className="text-2xl font-bold font-headline">{member.name}</h3>
          <p className="text-primary font-semibold">{member.designation}</p>
          {member.affiliation && <p className="text-muted-foreground text-sm">{member.affiliation}</p>}
        </div>
        <ul className="space-y-2 text-muted-foreground">
          {member.profiles && Object.entries(member.profiles).map(([name, url]) => (
             <li key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                 <ExternalLink className="h-4 w-4" /> <span>{name}</span>
              </a>
            </li>
          ))}
           {member.email && (
             <li>
              <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> <span>{member.email}</span>
              </a>
            </li>
          )}
          {member.phone && (
             <li>
              <a href={`tel:${member.phone}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> <span>{member.phone}</span>
              </a>
            </li>
          )}
        </ul>
        {member.bio && (
          <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
        )}
        {member.areasOfInterest && (
          <div>
            <h4 className="font-semibold text-sm mb-2">Areas of Interest</h4>
            <p className="text-muted-foreground text-sm">{member.areasOfInterest.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
