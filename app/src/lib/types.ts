export interface FacultyMember {
  name: string;
  designation: string;
  specialization: string;
  description: string;
  areasOfInterest: string[];
  email: string;
  photoUrl: string;
  tkmProfileUrl?: string;
  websiteUrl?: string;
  linkedinUrl?: string;
  phone?: string;
  dataAiHint?: string;
  category: 'Regular' | 'Honorary';
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
