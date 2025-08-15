export interface FacultyMember {
  name: string;
  designation: string; // Title in the user request
  email: string;
  photoUrl: string;
  dataAiHint?: string;
  phone?: string;
  profiles?: Record<string, string>;
  bio?: string;
  areasOfInterest?: string[];
  affiliation?: string; // For honorary/associating faculty
}

export interface Curriculum {
  id: string;
  title: string;
  items: { name: string; url: string }[];
}

export interface Publication {
  id: number;
  authors: string;
  title: string;
  source: string; // Journal or conference name
  year: number;
  link: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  students: string;
  guide: string;
  downloadLink: string;
  imageUrl: string;
  dataAiHint?: string;
}
