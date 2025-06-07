

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStaticParams as i18nGetStaticParams, getScopedI18n } from '@/i18n/server';

export default async function WhatsNewPage() {
  const t = await getScopedI18n('whatsNewPage');

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary">
            {t('title')}
          </CardTitle>
          <Breadcrumbs />
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
            {t('description')}
          </p>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x350.png"
              alt={t('imageAlt')}
              width={600}
              height={350}
              className="rounded-lg shadow-md"
              data-ai-hint="innovation technology"
            />
          </div>
          <div className="prose prose-lg max-w-none text-foreground/80">
            <h3 className="font-semibold font-headline text-foreground">{t('upcomingEnhancementsTitle')}</h3>
            <ul>
              {t('enhancements').map((enhancement: string) => (
                <li key={enhancement}>{enhancement}</li>
              ))}
            </ul>
            <p className="text-center mt-8">
              {t('checkBackSoon')}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return i18nGetStaticParams();
}

