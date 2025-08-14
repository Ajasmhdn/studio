'use client';

import { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, ExternalLink } from 'lucide-react';
import type { Publication } from '@/lib/types';

const publicationsData: Publication[] = [
  { id: 1, authors: 'A. Williams, B. Johnson', title: 'Advancements in Neural Network Architectures', source: 'Journal of AI Research', year: 2023, link: '#' },
  { id: 2, authors: 'C. Davis', title: 'A Novel Approach to Reinforcement Learning', source: 'ICML Conference', year: 2023, link: '#' },
  { id: 3, authors: 'D. Smith, A. Williams', title: 'Ethical Considerations in AI Deployment', source: 'AI & Society Journal', year: 2022, link: '#' },
  { id: 4, authors: 'B. Johnson', title: 'Real-time Object Detection with CNNs', source: 'CVPR Conference', year: 2022, link: '#' },
  { id: 5, authors: 'E. Brown', title: 'Quantum Algorithms for Machine Learning', source: 'Quantum Computing Review', year: 2021, link: '#' },
];

export function PublicationsSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPublications = useMemo(() => {
    if (!searchTerm) return publicationsData;
    const lowercasedFilter = searchTerm.toLowerCase();
    return publicationsData.filter(
      (pub) =>
        pub.title.toLowerCase().includes(lowercasedFilter) ||
        pub.authors.toLowerCase().includes(lowercasedFilter) ||
        pub.source.toLowerCase().includes(lowercasedFilter) ||
        pub.year.toString().includes(lowercasedFilter)
    );
  }, [searchTerm]);

  return (
    <section id="publications" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-secondary-foreground">
            Our Publications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Contributing to the global body of knowledge in Artificial Intelligence.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              aria-label="Search publications"
              placeholder="Search publications by title, author, year..."
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Card className="border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Title</TableHead>
                  <TableHead>Authors</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead className="text-center">Year</TableHead>
                  <TableHead className="text-right">Link</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPublications.length > 0 ? (
                  filteredPublications.map((pub) => (
                    <TableRow key={pub.id}>
                      <TableCell className="font-medium">{pub.title}</TableCell>
                      <TableCell className="text-muted-foreground">{pub.authors}</TableCell>
                      <TableCell className="text-muted-foreground">{pub.source}</TableCell>
                      <TableCell className="text-center text-muted-foreground">{pub.year}</TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="ghost" size="icon">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Read publication</span>
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                      No publications found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </section>
  );
}
