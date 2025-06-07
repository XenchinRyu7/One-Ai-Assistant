
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Lock, DatabaseZap, ServerCog } from "lucide-react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams, getScopedI18n } from '@/i18n/server';
// Removed: import { setStaticParamsLocale } from 'next-international/server';
import { Trans } from "next-international";
import type { Locale } from '@/i18n/settings';

const icons = [
  <ShieldCheck key="sc1" className="h-8 w-8 text-primary" />,
  <Lock key="l1" className="h-8 w-8 text-primary" />,
  <DatabaseZap key="dz1" className="h-8 w-8 text-primary" />,
  <ServerCog key="scg1" className="h-8 w-8 text-primary" />,
  <ShieldCheck key="sc2" className="h-8 w-8 text-primary" />,
  <Lock key="l2" className="h-8 w-8 text-primary" />
];

interface SecurityFeature {
  title: string;
  description: string;
}

export default async function SecurityDetailsPage({ params: { locale } }: { params: { locale: Locale } }) {
  // Removed: setStaticParamsLocale(locale);
  const t = await getScopedI18n('securityDetailsPage');
  const securityFeaturesData = t('features');
  const securityFeatures: SecurityFeature[] = Array.isArray(securityFeaturesData) ? securityFeaturesData : [];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">{t('title')}</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
          {t('description')}
        </p>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {securityFeatures.map((feature: SecurityFeature, index: number) => (
          <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-start gap-4">
              {icons[index % icons.length]}
              <div className="flex-1">
                <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-foreground/70">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="shadow-xl bg-secondary/30">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
                 <Image 
                    src="https://placehold.co/500x400.png" 
                    alt={t('continuousImprovement.imageAlt')}
                    width={500}
                    height={400}
                    className="rounded-lg shadow-md"
                    data-ai-hint="data center security"
                  />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground mb-4">{t('continuousImprovement.title')}</h2>
                <p className="text-lg text-foreground/80 mb-6">
                    {t('continuousImprovement.paragraph1')}
                </p>
                <p className="text-lg text-foreground/80">
                  <Trans
                    i18nKey="securityDetailsPage.continuousImprovement.paragraph2"
                    components={{
                      1: <a href="/contact" className="text-primary hover:underline" />
                    }}
                  />
                </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}
