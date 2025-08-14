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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { ThemeSwitcher } from '../theme-switcher';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/faculty',
    label: 'Faculty',
    dropdown: [
      { href: '/faculty#faculty', label: 'Faculty', icon: Users },
      { href: '/faculty#associating-faculty', label: 'Associates', icon: Building2 },
    ],
  },
  {
    href: '/curriculum',
    label: 'Curriculum',
    dropdown: [
      { href: '/curriculum#materials', label: 'Materials', icon: BookOpen },
      { href: '/curriculum#syllabus', label: 'Syllabus', icon: FileText },
    ],
  },
  { href: '/publications', label: 'Publications' },
  {
    href: '/projects',
    label: 'Projects',
    dropdown: [
      { href: '/projects#2023-25', label: 'Batch 2023–25', icon: Lightbulb },
      { href: '/projects#2022-24', label: 'Batch 2022–24', icon: Lightbulb },
      { href: '/projects#2021-23', label: 'Batch 2021–23', icon: Lightbulb },
      { href: '/projects#2020-22', label: 'Batch 2020–22', icon: Lightbulb },
    ],
  },
  {
    href: '/achievements',
    label: 'MoU & Achievements',
    dropdown: [
      { href: '/achievements#mou', label: 'MoU', icon: Handshake },
      { href: '/achievements#placements', label: 'Placements', icon: Trophy },
      { href: '/achievements#students', label: 'Students', icon: Users },
    ],
  },
  {
    href: '/events',
    label: 'Events',
    dropdown: [
      { href: '/events#events', label: 'Events', icon: Calendar },
      { href: '/events#in-news', label: 'In News', icon: Newspaper },
      { href: '/events#workshops', label: 'Workshops', icon: Presentation },
    ],
  },
  {
    href: '/gallery',
    label: 'Gallery & Downloads',
    dropdown: [
      { href: '/gallery#gallery', label: 'Gallery', icon: GalleryHorizontal },
      { href: '/gallery#downloads', label: 'Downloads', icon: Download },
    ],
  },
  { href: '/contact', label: 'Contact' },
];


const NavLink = ({ item }: { item: any }) => {
  if (item.dropdown) {
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
            subItem.submenu ? (
               <DropdownMenuSub key={subItem.label}>
                <DropdownMenuSubTrigger>
                  <subItem.icon className="h-4 w-4 text-muted-foreground mr-2" />
                  <span>{subItem.label}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {subItem.submenu.map((menuItem: any) => (
                      <DropdownMenuItem key={menuItem.href} asChild>
                        <Link href={menuItem.href} className="flex items-center gap-2">
                           <span>{menuItem.label}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ) : (
              <DropdownMenuItem key={subItem.href} asChild>
                <Link href={subItem.href} className="flex items-center gap-2">
                  <subItem.icon className="h-4 w-4 text-muted-foreground" />
                  <span>{subItem.label}</span>
                </Link>
              </DropdownMenuItem>
            )
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <Link href={item.href}>
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
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
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
              <SheetContent side="right" className="w-[300px]">
                <div className="p-4">
                  <div className="mb-8">
                     <Link href="/" onClick={() => setIsOpen(false)}>
                      <Logo />
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) =>
                      link.dropdown ? (
                        <div key={link.label} className="flex flex-col gap-2">
                           <Link href={link.href} onClick={() => setIsOpen(false)} className="p-2 text-lg rounded-md hover:bg-accent font-semibold">{link.label}</Link>
                           <div className="flex flex-col gap-1 pl-4 border-l">
                            {link.dropdown.map(item => (
                              item.submenu ? (
                                <div key={item.label}>
                                  <span className="flex items-center gap-3 p-2 rounded-md font-medium">
                                    <item.icon className="h-5 w-5 text-muted-foreground" />
                                    <span>{item.label}</span>
                                  </span>
                                  <div className="flex flex-col gap-1 pl-4 border-l ml-3">
                                    {item.submenu.map((subItem: any) => (
                                       <Link
                                        key={subItem.href}
                                        href={subItem.href}
                                        className="flex items-center gap-3 p-2 rounded-md hover:bg-accent"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        <span>- {subItem.label}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center gap-3 p-2 rounded-md hover:bg-accent"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <item.icon className="h-5 w-5 text-muted-foreground" />
                                  <span>{item.label}</span>
                                </Link>
                              )
                            ))}
                           </div>
                        </div>
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
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
