import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2 group shrink-0">
      <Image
        src="https://lh3.googleusercontent.com/IfnByc-AfW50UuaWlZhf5RNH_jwYCiUkdJsCeHrET40iy_h33fBPprHcG6_LClppjDK1f-dspN9E4litvZDDlruBdDY-0zLkKDoV-FTU6AwzTPrqbUir-SfQsWlg1sUk2oxK8agk2sk=w16383"
        alt="TKMCE AI Hub Logo"
        width={180}
        height={40}
        className="object-contain"
        priority
      />
    </div>
  );
}
