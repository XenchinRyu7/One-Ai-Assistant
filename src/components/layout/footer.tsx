
import Link from 'next/link';
import { Bot, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const primaryPages = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  const utilityPages = [
    { href: '/signup', label: 'Signup' },
    { href: '/signin', label: 'Login' },
    { href: '/404-example', label: '404 Not Found' }, // Example link to a custom 404 page
    { href: '/forgot-password', label: 'Password Reset', className: 'text-destructive hover:text-destructive/80' },
  ];

  return (
    <footer className="border-t border-border/40 bg-background text-foreground">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">One AI Assistant</span>
            </Link>
            <p className="text-sm text-foreground/70">
              OneAiAssistant membantu bisnis Anda memberikan layanan pelanggan otomatis, cerdas, dan personal dengan teknologi chatbot LLM yang bisa dikustom sesuai kebutuhan website.
            </p>
            <p className="text-sm text-foreground/70">
              Website: <a href="https://www.oneaiassistant.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">www.oneaiassistant.com</a>
            </p>
          </div>

          {/* Column 2: Primary Pages */}
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">Primary Pages</h3>
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

          {/* Column 3: Utility Pages */}
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">Utility Pages</h3>
            <ul className="space-y-2">
              {utilityPages.map(page => (
                <li key={page.label}>
                  <Link href={page.href} className={`text-sm text-foreground/70 hover:text-primary hover:underline ${page.className || ''}`}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Subscribe to Newsletter */}
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">Subscribe To Our Newsletter</h3>
            <form className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow min-w-0 bg-card border-border focus:ring-primary" 
                aria-label="Email for newsletter"
              />
              <Button type="submit" size="icon" className="bg-foreground hover:bg-foreground/80 text-background rounded-full flex-shrink-0" aria-label="Subscribe to newsletter">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
             <p className="text-xs text-foreground/60 mt-2">
              Get weekly updates on new features and promotions.
            </p>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} One AI Assistant. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/60">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
