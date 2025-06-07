
"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Bot, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const primaryNavItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
];

const moreDropdownItems = [
  { href: '/whats-new', label: "What's New" },
  { href: '/our-teams', label: 'Our Teams' },
  { href: '/our-clients', label: 'Our Clients' },
  { href: '/faq', label: 'FAQs' },
];

const contactNavItem = { href: '/contact', label: 'Contact' };

// For mobile menu structure
const mobileNavSections = [
  {
    items: primaryNavItems,
  },
  {
    title: 'Explore More',
    items: moreDropdownItems,
  },
  {
    items: [contactNavItem],
  }
];

function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder or null on the server to avoid mismatch
    return <Button variant="ghost" size="icon" disabled className="h-9 w-9 md:h-8 md:w-8"><Sun className="h-5 w-5" /></Button>;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="h-9 w-9 md:h-8 md:w-8"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
    </Button>
  );
}


export function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Avoid rendering on server to prevent hydration mismatch for Sheet & Dropdown
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Bot className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground font-headline">One AI Assistant</span>
          </Link>
           <div className="md:hidden">
             <Button variant="ghost" size="icon" disabled>
                <Menu className="h-6 w-6" />
             </Button>
           </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Bot className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground font-headline">One AI Assistant</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {primaryNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground/70 transition-colors hover:text-foreground hover:bg-transparent px-0 md:px-2 flex items-center gap-1">
                More
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background">
              {moreDropdownItems.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link href={item.href} className="text-foreground/70 transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href={contactNavItem.href}
            className="text-foreground/70 transition-colors hover:text-foreground"
            prefetch={false}
          >
            {contactNavItem.label}
          </Link>
          
          <div className="flex items-center space-x-2">
            <ThemeToggleButton />
            <Button asChild variant="ghost" size="sm">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background">
              <div className="p-6 flex flex-col h-full">
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                  <Bot className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold text-foreground font-headline">One AI Assistant</span>
                </Link>
                <nav className="flex flex-col space-y-1 flex-grow">
                  {mobileNavSections.map((section, sectionIndex) => (
                    <React.Fragment key={section.title || `section-${sectionIndex}`}>
                      {section.title && (
                        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2 px-2">{section.title}</h3>
                      )}
                      {section.items.map((item) => (
                        <SheetClose asChild key={item.label}>
                          <Link
                            href={item.href}
                            className="block text-base text-foreground/80 hover:text-foreground transition-colors py-2.5 px-2 rounded-md hover:bg-muted"
                            prefetch={false}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </React.Fragment>
                  ))}
                </nav>
                <div className="mt-auto pt-6 space-y-2">
                   <SheetClose asChild>
                    <Button asChild variant="outline" size="lg" className="w-full">
                       <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90">
                       <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
