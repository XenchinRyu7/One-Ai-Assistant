
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { getStaticParams as i18nGetStaticParams, getScopedI18n } from '@/i18n/server';
import { setStaticParamsLocale } from 'next-international/server';
import type { Locale } from '@/i18n/settings';

export default async function Example404Page({ params: { locale } }: { params: { locale: Locale } }) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n('notFoundExamplePage');

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center">
      <Card className="shadow-xl w-full max-w-lg p-8">
        <CardHeader>
          <Image 
            src="https://placehold.co/300x200.png" 
            alt={t('imageAlt')}
            width={300}
            height={200}
            className="mx-auto mb-6 rounded-lg"
            data-ai-hint="error confused"
          />
          <CardTitle className="text-5xl font-bold font-headline text-destructive">{t('title')}</CardTitle>
          <CardDescription className="text-2xl font-semibold text-foreground/80 mt-2">
            {t('description')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-foreground/70">
            {t('message')}
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/">{t('homeButton')}</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
