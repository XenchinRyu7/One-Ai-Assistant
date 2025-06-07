
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Zap, Cog, Shield } from "lucide-react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams, getScopedI18n } from '@/i18n/server';
// Removed: import { setStaticParamsLocale } from 'next-international/server';
import type { Locale } from '@/i18n/settings';

const icons = [
  <Bot key="botIcon" className="h-10 w-10 text-primary" />,
  <Zap key="zapIcon" className="h-10 w-10 text-primary" />,
  <Cog key="cogIcon" className="h-10 w-10 text-primary" />,
  <Shield key="shieldIcon" className="h-10 w-10 text-primary" />
];

interface ServiceItem {
  title: string;
  description: string;
}

export default async function ServicesPage({ params: { locale } }: { params: { locale: Locale } }) {
  // Removed: setStaticParamsLocale(locale);
  const t = await getScopedI18n('servicesPage');
  
  const rawServices = t('services');
  const servicesList: ServiceItem[] = Array.isArray(rawServices) ? rawServices : [];

  const rawFeatures = t('whyChooseUs.features');
  const whyChooseUsFeatures: string[] = Array.isArray(rawFeatures) ? rawFeatures : [];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">{t('title')}</h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          {t('description')}
        </p>
        <Breadcrumbs />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {servicesList.map((service: ServiceItem, index: number) => (
          <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              {icons[index % icons.length]}
              <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-foreground/70">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-xl bg-secondary/30">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground mb-4">{t('whyChooseUs.title')}</h2>
                <p className="text-lg text-foreground/80 mb-6">
                    {t('whyChooseUs.description')}
                </p>
                <ul className="space-y-3 text-foreground/70">
                    {whyChooseUsFeatures.map((feature: string) => (
                       <li key={feature} className="flex items-center"><Zap className="h-5 w-5 text-primary mr-2" /> {feature}</li>
                    ))}
                </ul>
            </div>
            <div className="md:w-1/2">
                 <Image 
                    src="https://placehold.co/500x350.png" 
                    alt={t('whyChooseUs.imageAlt')}
                    width={500}
                    height={350}
                    className="rounded-lg shadow-md"
                    data-ai-hint="team service"
                  />
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
