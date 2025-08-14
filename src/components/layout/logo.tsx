"use client";

import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <Image
        src="https://i.ibb.co/Fd4d6mB/tkmce-logo.png" // direct image link
        alt="TKMCE AI Hub Logo"
        width={50}
        height={25}
        className="object-contain"
        priority
      />
    </div>
  );
}
