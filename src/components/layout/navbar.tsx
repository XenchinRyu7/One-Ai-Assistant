
"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Bot, ChevronDown, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { useScopedI18n, useChangeLocale, useCurrentLocale } from '@/i18n/client';
import type { Locale } from '@/i18n/settings';


const primaryNavItemsConfig = [
  { href: '/', labelKey: 'home' },
  { href: '/about', labelKey: 'about' },
  { href: '/services', labelKey: 'services' },
  { href: '/pricing', labelKey: 'pricing' },
];

const moreDropdownItemsConfig = [
  { href: '/whats-new', labelKey: 'whatsNew' },
  { href: '/our-teams', labelKey: 'ourTeams' },
  { href: '/our-clients', labelKey: 'ourClients' },
  { href: '/faq', labelKey: 'faqs' },
];

const contactNavItemConfig = { href: '/contact', labelKey: 'contact' };


function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useScopedI18n('navbar');

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" disabled className="h-9 w-9 md:h-8 md:w-8"><Sun className="h-5 w-5" /></Button>;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={t('themeToggle')}
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

function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  const t = useScopedI18n('navbar');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 md:h-8 md:w-8">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t('language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background z-50">
        <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => changeLocale('en')}
          disabled={currentLocale === 'en'}
        >
          {t('english')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLocale('id')}
          disabled={currentLocale === 'id'}
        >
          {t('indonesian')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useScopedI18n('navbar');
  const currentLocale = useCurrentLocale();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const primaryNavItems = primaryNavItemsConfig.map(item => ({...item, label: t(item.labelKey as any)}));
  const moreDropdownItems = moreDropdownItemsConfig.map(item => ({...item, label: t(item.labelKey as any)}));
  const contactNavItem = {...contactNavItemConfig, label: t(contactNavItemConfig.labelKey as any)};
  
  const mobileNavSections = [
    { items: primaryNavItems },
    { title: t('more'), items: moreDropdownItems },
    { items: [contactNavItem] }
  ];

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href={`/${currentLocale}`} className="flex items-center gap-2" prefetch={false}>
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
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={`/${currentLocale}`} className="flex items-center gap-2" prefetch={false}>
          <Bot className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground font-headline">One AI Assistant</span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center justify-end text-sm font-medium">
          <div className="flex items-center space-x-6">
            {primaryNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href} // next-international middleware will handle locale prefixing
                className="text-foreground/70 transition-colors hover:text-foreground"
                prefetch={false}
              >
                {item.label}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground/70 transition-colors hover:text-foreground hover:bg-transparent px-0 md:px-2 flex items-center gap-1">
                  {t('more')}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background z-50">
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
          </div>
          
          <div className="flex items-center space-x-2 ml-6">
            <LanguageSwitcher />
            <ThemeToggleButton />
            <Button asChild variant="ghost" size="sm">
              <Link href="https://console.oneaiassistant.id/en/auth/login">{t('signin')}</Link>
            </Button>
            <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary/90">
              <Link href="https://console.oneaiassistant.id/en/auth/register">{t('signup')}</Link>
            </Button>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggleButton />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background p-0">
              <SheetHeader className="p-6"> 
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Access main sections of the One AI Assistant website.</SheetDescription>
              </SheetHeader>
              <div className="p-6 flex flex-col h-full">
                <Link href={`/${currentLocale}`} className="flex items-center gap-2 mb-8" onClick={() => setIsMobileMenuOpen(false)}>
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
                       <Link href="https://one-ai-assistant-dashboard.vercel.app/en/auth/login" onClick={() => setIsMobileMenuOpen(false)}>{t('signin')}</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90">
                       <Link href="https://one-ai-assistant-dashboard.vercel.app/en/auth/register" onClick={() => setIsMobileMenuOpen(false)}>{t('signup')}</Link>
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
