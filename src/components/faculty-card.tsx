
'use client';

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import type { FacultyMember } from "@/lib/types";
import { Badge } from "./ui/badge";

export const FacultyCard = ({ member }: { member: FacultyMember }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="flex flex-col md:flex-row overflow-hidden transition-all duration-300">
      <div className="md:w-1/3 relative aspect-square md:aspect-auto flex-shrink-0">
        <Image
          src={member.photoUrl}
          alt={`Photo of ${member.name}`}
          fill
          className="object-cover"
          data-ai-hint={member.dataAiHint}
        />
      </div>
      <div className="flex flex-col flex-grow">
        <CardHeader className="p-4">
          <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
          <p className="text-primary font-semibold">{member.designation}</p>
          {member.affiliation && <p className="text-muted-foreground text-sm">{member.affiliation}</p>}
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {member.email && (
              <Button variant="outline" size="sm" asChild>
                <a href={`mailto:${member.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
            )}
            {member.phone && (
              <Button variant="outline" size="sm" asChild>
                <a href={`tel:${member.phone}`}>
                  <Phone className="mr-2 h-4 w-4" /> Phone
                </a>
              </Button>
            )}
            {member.profiles && Object.entries(member.profiles).map(([name, url]) => (
              <Button variant="outline" size="sm" asChild key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> {name}
                </a>
              </Button>
            ))}
          </div>

          {member.bio && (
            <>
              <div className={`space-y-2 overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-screen' : 'max-h-16'}`}>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
              <Button variant="link" onClick={() => setIsExpanded(!isExpanded)} className="text-primary self-start px-0 -mt-2">
                {isExpanded ? 'Read Less' : 'Read More'}
                {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>
            </>
          )}

          {member.areasOfInterest && (
            <div className="mt-auto pt-2">
              <h4 className="font-semibold text-sm mb-2">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                {member.areasOfInterest.map(area => (
                  <Badge key={area} variant="secondary">{area}</Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};
