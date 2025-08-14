import { BrainCircuit } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      <BrainCircuit className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
      <span className="text-xl font-bold font-headline text-foreground">
        TKMCE AI Hub
      </span>
    </div>
  );
}
