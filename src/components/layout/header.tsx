'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  ChevronDown,
  Users,
  BookOpen,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  {
    href: '#faculty',
    label: 'Faculty',
    dropdown: [
      { href: '#faculty', label: 'Faculty', icon: Users },
      { href: '#associating-faculty', label: 'Associating Faculty', icon: Users },
    ],
  },
  {
    href: '#curriculum',
    label: 'Materials & Curriculum',
    dropdown: [
      { href: '#curriculum', label: 'Curriculum', icon: BookOpen },
      { href: '#publications', label: 'Publications', icon: FileText },
    ],
  },
  { href: '#projects', label: 'Projects' },
  { href: '#mou', label: 'MoU' },
  { href: '#placements', label: 'Placements & Achievements' },
  { href: '#events', label: 'Events & Media' },
  { href: '#gallery', label: 'Gallery & Downloads' },
  { href: '#contact', label: 'Contact' },
];

const NavLink = ({ href, label, dropdown }: { href: string; label: string; dropdown?: { href: string; label: string; icon: React.ElementType }[] }) => {
  if (dropdown) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            {label}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {dropdown.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link href={item.href} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-muted-foreground" />
                <span>{item.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <Link href={href}>
      <Button variant="ghost" className="text-sm font-medium text-foreground/80 hover:text-foreground">
        {label}
      </Button>
    </Link>
  );
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="p-4">
                <div className="mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) =>
                    link.dropdown ? (
                      <div key={link.href} className="flex flex-col gap-2">
                        <h4 className="font-semibold text-foreground/80 px-2">{link.label}</h4>
                        {link.dropdown.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 p-2 rounded-md hover:bg-accent"
                            onClick={() => setIsOpen(false)}
                          >
                             <item.icon className="h-5 w-5 text-muted-foreground" />
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="p-2 text-lg rounded-md hover:bg-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
