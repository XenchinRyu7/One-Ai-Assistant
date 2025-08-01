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
  icons: {
    icon: [
      {
        url: '/OAA_light.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/OAA_dark.svg',
        media: '(prefers-color-scheme: dark)',
      }
    ],
  },
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
        <link rel="icon" href="/OAA_light.svg" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/OAA_dark.svg" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/OAA_light.svg" />
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
        
        {/* One AI Assistant Chat Widget */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.tawkConfig = {
                apiKey: 'sk-s7v5rzxv5eh5a3lx3o3147d920ioetb5',
                projectId: 'UAXkBjP2XCLEFqBZAl29',
                clientName: 'Saeful Rohman',
                position: 'bottom-right',
              };
            `,
          }}
        />
        <script src="https://plugin.oneaiassistant.id/widget_loader.js"></script>
      </body>
    </html>
  );
}
