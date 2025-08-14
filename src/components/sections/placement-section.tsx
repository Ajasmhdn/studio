'use client';

import Image from 'next/image';

const companies = [
  { name: 'Tata', logoUrl: 'https://placehold.co/150x60.png?text=Tata' },
  { name: 'TCS', logoUrl: 'https://placehold.co/150x60.png?text=TCS' },
  { name: 'Elxi', logoUrl: 'https://placehold.co/150x60.png?text=Elxi' },
  { name: 'Infosys', logoUrl: 'https://placehold.co/150x60.png?text=Infosys' },
  { name: 'Wipro', logoUrl: 'https://placehold.co/150x60.png?text=Wipro' },
  { name: 'Cognizant', logoUrl: 'https://placehold.co/150x60.png?text=Cognizant' },
  { name: 'HCL', logoUrl: 'https://placehold.co/150x60.png?text=HCL' },
];

export function PlacementSection() {
  const extendedCompanies = [...companies, ...companies]; // Duplicate for seamless loop

  return (
    <section id="placements" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-secondary-foreground">Our Placement Partners</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our students are recruited by leading companies in the tech industry.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-infinite-scroll group-hover:pause">
            {extendedCompanies.map((company, index) => (
              <div key={index} className="flex-shrink-0 mx-4 w-36 h-24 flex items-center justify-center">
                  <Image
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    width={120}
                    height={48}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes infinite-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 40s linear infinite;
            }
             .group:hover .animate-infinite-scroll {
                animation-play-state: paused;
             }
          `}</style>
        </div>
      </div>
    </section>
  );
}
