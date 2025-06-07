
import Link from 'next/link';
import { Bot } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Bot className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground font-headline">One AI Assistant</span>
          </Link>
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} One AI Assistant. All rights reserved.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/60">
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
