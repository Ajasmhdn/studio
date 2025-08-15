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
  type: 'journal' | 'conference' | 'accepted' | 'whitepaper';
  authors: string;
  title: string;
  venue: string; // Journal or conference name
  year: number; // 0 for items without a specific year like 'accepted'
  link: string;
  notes?: string; // For indexing, impact factor, etc.
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

export interface StudentAchievement {
  name: string;
  batch: string;
  role: string;
  company: string;
  ctc: string;
  email: string;
  photoUrl: string;
  dataAiHint?: string;
  cgpa?: string;
  achievements: string[];
}

export interface Event {
  id: number;
  title: string;
  startDate: string;
  endDate?: string;
  speakers: string[];
  organization: string;
  shortDescription: string;
  longDescription: string;
  tags: ('Talk' | 'Workshop' | 'Certificate Course' | 'Technical Session' | 'Training')[];
  imageUrl: string;
  dataAiHint?: string;
  materials?: { name: string; url: string }[];
  featured?: boolean;
}
