
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Bot } from 'lucide-react';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/#more', label: 'More' }, // Placeholder, can be a dropdown later
];

export function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering on server to prevent hydration mismatch for Sheet
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Bot className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground font-headline">One AI Assistant</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/10 hover:text-primary">
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background">
              <div className="p-6">
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                  <Bot className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold text-foreground font-headline">One AI Assistant</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href}
                        className="text-lg text-foreground/80 hover:text-foreground transition-colors py-1"
                        prefetch={false}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button asChild variant="default" size="lg" className="w-full mt-4 bg-primary hover:bg-primary/90">
                       <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    </Button>
                  </SheetClose>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
