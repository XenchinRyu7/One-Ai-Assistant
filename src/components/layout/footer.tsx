// src/components/layout/footer.tsx
"use client";

import Link from 'next/link';
import { Bot, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useScopedI18n, useCurrentLocale } from '@/i18n/client';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useScopedI18n('footer');
  const navT = useScopedI18n('navbar'); // For nav item consistency
  const locale = useCurrentLocale();

  const primaryPages = [
    { href: '/', label: navT('home') },
    { href: '/about', label: navT('about') },
    { href: '/services', label: navT('services') },
    { href: '/pricing', label: navT('pricing') },
    { href: '/contact', label: navT('contact') },
  ];



  return (
    <footer className="border-t border-border/40 bg-background text-foreground">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2" prefetch={false}>
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">One AI Assistant</span>
            </Link>
            <p className="text-sm text-foreground/70">
              {t('brandDescription')}
            </p>
            <p className="text-sm text-foreground/70">
              {t('websiteLinkText')}: <a href="https://www.oneaiassistant.id" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">www.oneaiassistant.id</a>
            </p>
          </div>

          {/* Column 2: Primary Pages */}
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">{t('primaryPages')}</h3>
            <ul className="space-y-2">
              {primaryPages.map(page => (
                <li key={page.label}>
                  <Link href={page.href} className="text-sm text-foreground/70 hover:text-primary hover:underline">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Column 4: Subscribe to Newsletter */}
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">{t('subscribeNewsletter')}</h3>
            <form className="flex space-x-2">
              <Input 
                type="email" 
                placeholder={t('subscribePlaceholder')}
                className="flex-grow min-w-0 bg-card border-border focus:ring-primary" 
                aria-label={t('subscribePlaceholder')}
              />
              <Button type="submit" size="icon" className="bg-foreground hover:bg-foreground/80 text-background rounded-full flex-shrink-0" aria-label={t('subscribeButtonAlt')}>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
             <p className="text-xs text-foreground/60 mt-2">
              {t('subscribeHint')}
            </p>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            {t('copyright', { year: currentYear })}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/60">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">{t('privacyPolicy')}</Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">{t('termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
