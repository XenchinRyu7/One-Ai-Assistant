
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams, getScopedI18n } from '@/i18n/server';
// Removed: import { setStaticParamsLocale } from 'next-international/server';
import { Trans } from "next-international";
import type { Locale } from '@/i18n/settings';

export default async function GetStartedPage({ params: { locale } }: { params: { locale: Locale } }) {
  // Removed: setStaticParamsLocale(locale);
  const t = await getScopedI18n('getStartedPage');

  const freeTrialFeaturesData = t('freeTrialCard.features');
  const freeTrialFeatures: string[] = Array.isArray(freeTrialFeaturesData) ? freeTrialFeaturesData : [];

  const demoFeaturesData = t('demoCard.features');
  const demoFeatures: string[] = Array.isArray(demoFeaturesData) ? demoFeaturesData : [];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">{t('title')}</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <Card className="shadow-lg flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{t('freeTrialCard.title')}</CardTitle>
            <CardDescription>
              {t('freeTrialCard.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Image 
              src="https://placehold.co/500x300.png" 
              alt={t('freeTrialCard.imageAlt')}
              width={500}
              height={300}
              className="rounded-md mb-6 object-cover mx-auto"
              data-ai-hint="trial benefits"
            />
            <ul className="space-y-2 text-foreground/70 list-disc list-inside">
              {freeTrialFeatures.map((feature: string) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </CardContent>
          <CardContent className="mt-auto">
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
              <Link href="/signup?trial=true">{t('freeTrialCard.buttonText')}</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg flex flex-col">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{t('demoCard.title')}</CardTitle>
            <CardDescription>
              {t('demoCard.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Image 
              src="https://placehold.co/500x300.png" 
              alt={t('demoCard.imageAlt')}
              width={500}
              height={300}
              className="rounded-md mb-6 object-cover mx-auto"
              data-ai-hint="demo presentation"
            />
             <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                {demoFeatures.map((feature: string) => (
                  <li key={feature}>{feature}</li>
                ))}
            </ul>
          </CardContent>
           <CardContent className="mt-auto">
            <Button asChild variant="outline" className="w-full" size="lg">
              <Link href="/contact?reason=demo">{t('demoCard.buttonText')}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold font-headline text-foreground">{t('haveQuestionsSection.title')}</h2>
        <p className="mt-2 text-lg text-foreground/70">
          <Trans 
            i18nKey="getStartedPage.haveQuestionsSection.text"
            components={{
              1: <Link href="/faq" className="text-primary hover:underline" />,
              2: <Link href="/contact" className="text-primary hover:underline" />,
            }}
          />
        </p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
