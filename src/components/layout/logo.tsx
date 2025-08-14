'use client';

import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <Image
        src="https://i.ibb.co/Fd4d6mB/tkmce-logo.png"
        alt="TKMCE AI Hub Logo"
        width={40}
        height={40}
        className="object-contain"
        priority
      />
      <span className="font-headline text-base font-bold text-foreground">
        AITKMCE
      </span>
    </div>
  );
}
