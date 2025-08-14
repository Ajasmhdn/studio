import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2 group shrink-0">
      <Image
        src="https://i.ibb.co/jrh20B7/tkmce-logo.png"
        alt="TKMCE AI Hub Logo"
        width={40}
        height={40}
        className="object-contain"
        priority
      />
      <span className="font-headline font-bold text-lg">TKMCE AI Hub</span>
    </div>
  );
}
