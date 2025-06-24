// src/app/[locale]/layout.tsx
import type { Metadata } from 'next';
import './globals.css'; // Adjust path to globals.css
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { JOSInit } from '@/components/layout/JosInit';
import { I18nProviderClient } from '@/i18n/client';
import type { Locale } from '@/i18n/settings';

export const metadata: Metadata = {
  title: 'One AI Assistant - Intelligent Chatbot Solutions',
  description: 'Empower your website with One AI Assistant. Seamlessly integrate our intelligent chatbot to provide instant, accurate answers and elevate your customer support.',
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <I18nProviderClient locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange          >
            <JOSInit />
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </I18nProviderClient>
      </body>
    </html>
  );
}
