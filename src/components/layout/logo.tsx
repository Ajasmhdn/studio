import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2 group shrink-0">
      <Image
        src="https://i.ibb.co/6y4p4Jg/logo.png"
        alt="TKMCE AI Hub Logo"
        width={180}
        height={40}
        className="object-contain"
        priority
      />
    </div>
  );
}
