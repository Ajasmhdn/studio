'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  ChevronDown,
  Users,
  BookOpen,
  FileText,
  Lightbulb,
  Trophy,
  Handshake,
  Calendar,
  Newspaper,
  Presentation,
  GalleryHorizontal,
  Download,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Logo } from './logo';
import { ThemeSwitcher } from '../theme-switcher';
import { ScrollArea } from '../ui/scroll-area';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/faculty',
    label: 'Faculty',
    dropdown: [
      { href: '#faculty', label: 'Faculty', icon: Users },
      { href: '#associating-faculty', label: 'Associates', icon: Building2 },
    ],
  },
  {
    href: '/curriculum',
    label: 'Curriculum',
    dropdown: [
      { href: '#materials', label: 'Materials', icon: BookOpen },
      { href: '#syllabus', label: 'Syllabus', icon: FileText },
    ],
  },
  { href: '/publications', label: 'Publications' },
  {
    href: '/projects',
    label: 'Projects',
    dropdown: [
      { href: '#2023-25', label: 'Batch 2023–25', icon: Lightbulb },
      { href: '#2022-24', label: 'Batch 2022–24', icon: Lightbulb },
      { href: '#2021-23', label: 'Batch 2021–23', icon: Lightbulb },
      { href: '#2020-22', label: 'Batch 2020–22', icon: Lightbulb },
    ],
  },
  {
    href: '/achievements',
    label: 'MoU & Achievements',
    dropdown: [
      { href: '#mou', label: 'MoU', icon: Handshake },
      { href: '#placements', label: 'Placements', icon: Trophy },
      { href: '#students', label: 'Students', icon: Users },
    ],
  },
  {
    href: '/events',
    label: 'Events',
    dropdown: [
      { href: '#events', label: 'Events', icon: Calendar },
      { href: '#in-news', label: 'In News', icon: Newspaper },
      { href: '#workshops', label: 'Workshops', icon: Presentation },
    ],
  },
  {
    href: '/gallery',
    label: 'Gallery & Downloads',
    dropdown: [
      { href: '#gallery', label: 'Gallery', icon: GalleryHorizontal },
      { href: '#downloads', label: 'Downloads', icon: Download },
    ],
  },
  { href: '/contact', label: 'Contact' },
];


const NavLink = ({ item, isMobile = false, closeSheet }: { item: any, isMobile?: boolean, closeSheet?: () => void }) => {
  const handleLinkClick = (href: string) => {
    if (isMobile && closeSheet) {
      closeSheet();
    }
  };

  if (item.dropdown) {
    if (isMobile) {
      return (
        <div className="flex flex-col gap-2">
          <Link href={item.href} onClick={() => handleLinkClick(item.href)} className="p-2 text-lg rounded-md hover:bg-accent font-semibold">{item.label}</Link>
          <div className="flex flex-col gap-1 pl-4 border-l">
            {item.dropdown.map((subItem: any) => (
              <Link
                key={subItem.href}
                href={`${item.href}${subItem.href}`}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-accent"
                onClick={() => handleLinkClick(`${item.href}${subItem.href}`)}
              >
                <subItem.icon className="h-5 w-5 text-muted-foreground" />
                <span>{subItem.label}</span>
              </Link>
            ))}
          </div>
        </div>
      );
    }
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            {item.label}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {item.dropdown.map((subItem: any) => (
            <DropdownMenuItem key={subItem.href} asChild>
              <Link href={`${item.href}${subItem.href}`} className="flex items-center gap-2">
                <subItem.icon className="h-4 w-4 text-muted-foreground" />
                <span>{subItem.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link href={item.href} onClick={() => handleLinkClick(item.href)}>
      <Button variant="ghost" className="text-sm font-medium text-foreground/80 hover:text-foreground">
        {item.label}
      </Button>
    </Link>
  );
};


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-2">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href || link.label} item={link} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <ScrollArea className="h-full">
                  <div className="p-4">
                    <div className="mb-8">
                      <Link href="/" onClick={() => setIsOpen(false)}>
                        <Logo />
                      </Link>
                    </div>
                    <nav className="flex flex-col gap-2">
                      {navLinks.map((link) =>
                        link.dropdown ? (
                           <NavLink key={link.label} item={link} isMobile={true} closeSheet={() => setIsOpen(false)} />
                        ) : (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="p-2 text-lg rounded-md hover:bg-accent font-semibold"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        )
                      )}
                    </nav>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
